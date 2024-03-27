import { ComponentProps } from 'react';

export interface ICheckBoxList extends ComponentProps<'input'> {
  label: React.ReactNode;
}
export const CheckBox = ({
  label,
  onChange,
  checked,
  // isInvalid,

  id,
  ...props
}: ICheckBoxList) => {
  return (
    <div className="flex items-center gap-3">
      <input
        {...props}
        checked={checked}
        type="checkbox"
        id={id}
        onChange={onChange}
        className="peer/checkbox 
                    form-checkbox
                     h-6 w-6 cursor-pointer 
                    rounded-lg checked:bg-primary-blue   hover:border-primary-blue hover:text-primary-blue checked:hover:bg-primary-blue  focus:ring-0 focus:ring-offset-0 checked:focus:bg-primary-blue"
      />
      <label
        htmlFor={id}
        className="peer-checked/checkbox:text-b1-semiBold peer-checked/checkbox:text-primary-dark-blue peer-checked/checkbox:hover:text-primary-dark-blue text-b1-regular text-primary-dark-blue w-full cursor-pointer hover:text-primary-blue peer-hover/checkbox:text-primary-blue"
      >
        {label}
      </label>
    </div>
  );
};
