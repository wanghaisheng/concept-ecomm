// import { InputProps } from "@/components/Input/input.types"
import { Control, Controller, UseControllerProps, useFormContext } from 'react-hook-form';

import { CheckBox, ICheckBoxList } from '.';

type IFormInputProps = ICheckBoxList & {
  name: string;
  control?: Control;
  rules?: UseControllerProps['rules'];
};

export const FormCheckBox = ({ name, ...rest }: IFormInputProps) => {
  const methods = useFormContext();

  const {
    formState: { errors },
    clearErrors,
    control,
  } = methods;

  return (
    <Controller
      name={name}
      rules={rest.rules}
      control={control}
      render={({ field: { onChange, value, ...fieldProps } }) => {
        return (
          <CheckBox
            id={name}
            // isInvalid={!!errors[name]?.message}
            // errorText={errors[name]?.message as string}
            onChange={(e: any) => {
              onChange(e);
              if (errors[name]?.type === 'required') {
                clearErrors(name);
              }
            }}
            value={value}
            {...rest}
            {...fieldProps}
          />
        );
      }}
    />
  );
};

export default FormCheckBox;
