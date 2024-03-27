import rhToast, { Renderable, ToastOptions } from 'react-hot-toast';
import _ from 'lodash';

import Toast from './ToastComponent';

interface ToastProps {
  id: string;
  state?: 'success' | 'error' | 'loading' | 'blank';
  type: 'success' | 'error';
  options?: ToastOptions;
  message: Renderable;
  actionText?: string;
  actionTextHandler?: () => void;
}

type AuthorizationError = {
  __typename: 'AuthorizationError';
  message: string;
};

type BadRequestError = {
  __typename: 'BadRequestError';
  message: string;
};

type NotFoundError = { __typename: 'NotFoundError'; message: string };

type ServerError = { __typename: 'ServerError'; message: string };
type InternalServerError = {
  __typename: 'InternalServerError';
  message: string;
};

type ValidationError = {
  __typename: 'ValidationError';
  message: string;
};

type MutationError =
  | AuthorizationError
  | BadRequestError
  | NotFoundError
  | ServerError
  | ValidationError
  | InternalServerError;

export const getError = (error: MutationError) => {
  switch (error.__typename) {
    case 'ValidationError':
      return error.message;
    case 'BadRequestError':
      return error.message;
    case 'AuthorizationError':
      return error.message;
    case 'NotFoundError':
      return error.message;
    case 'ServerError':
      return error.message;
    case 'InternalServerError':
      return error.message;

    default:
      return 'Something Went Wrong';
  }
};

export function findError(obj: Record<string, unknown> | null, key: string): MutationError[] {
  if (_.has(obj, key) && obj) return obj[key] as MutationError[];

  return _.flatten(
    _.map(obj, (v: any) =>
      typeof v === 'object' ? findError(v as Record<string, unknown>, key) : []
    )
  );
}

export function toast({ options, id, ...props }: ToastProps) {
  return rhToast.custom(<Toast {...props} />, {
    id,
    duration: props.state === 'loading' ? Infinity : 800,
    ...options,
  });
}

interface AsyncToastProps<T extends Record<string, unknown>> {
  id: string;
  promise: Promise<any>;
  onSuccess?: (response: T) => void;
  onError?: (error: MutationError) => void;
  msgs: {
    loading: Renderable;
    success: Renderable;
    error?: Renderable;
  };
}

export const asyncToast = async <T extends Record<string, unknown>>({
  id,
  msgs,
  onSuccess,
  onError,
  promise,
}: AsyncToastProps<T>) => {
  const errMsg = 'Something Went Wrong!!';

  toast({
    id,
    type: 'success',
    state: 'loading',
    message: msgs.loading ?? 'Loading',
  });

  try {
    const response = await promise;
    if (response) {
      if (response.errors === null) {
        onSuccess && onSuccess(response);
        toast({
          id,
          type: 'success',
          message: msgs.success ?? 'Successful',
        });
      } else {
        const errorKeys = findError(response, 'errors');

        if (errorKeys[0]) {
          const error = getError(errorKeys[0]);

          if (typeof error === 'string') {
            onError && onError(errorKeys[0]);
            toast({
              id,
              type: 'error',
              message: error,
            });
          } else {
            onError && onError(errorKeys[0]);
            toast({
              id,
              type: 'error',
              message: 'Some fields are empty or invalid',
            });
          }
        }
      }
    }

    // TODO! ERROR HANDLE HERE!!!!
  } catch (e: any) {
    if (e?.response?.data?.errors['validation-errors']) {
      if (!e?.response?.data?.errors['validation-errors']) {
        toast({
          id,
          type: 'error',
          message: e?.response?.data?.errors['message'],
        });
        return;
      }
      toast({
        id,
        type: 'error',
        message: e?.response?.data?.errors ?? errMsg,
      });
      onError && onError(e?.response?.data?.errors['validation-errors']);
    }
    toast({
      id,
      type: 'error',
      message: e?.response?.data?.errors.message ?? errMsg,
    });
  }
};
