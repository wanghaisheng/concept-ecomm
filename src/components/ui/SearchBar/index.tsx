/* eslint-disable prettier/prettier */
import { InputHTMLAttributes, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { cva, VariantProps } from 'class-variance-authority';
import gsap from 'gsap';

import Close from '@/components/ui/Icons/16/icons/close_16.svg';
import SearchIcon from '@/components/ui/Icons/20/icons/search.svg';
import { cn } from '@/utils/cn';

const searchFIeldVariants = cva(['h-12'], {
  variants: {
    variant: {
      gray: 'border appearance-none h-12 hover:shadow-lg  border-primary-gray py-3 px-4 bg-transparent w-[150px] text-sm leading-5 placeholder-gray-400 text-black   rounded-full p-4 block  pr-9  focus:border-primary-darkGray focus:outline-none focus:shadow-none focus:border-primary-darkGray focus:ring-offset-0',
      light:
        'border appearance-none h-12  hover:shadow-lg border-primary-light-gray py-3 px-4 bg-white w-[150px] text-sm leading-5 placeholder-gray-400 text-black   rounded-full p-4 block  pr-9  focus:outline-none focus:shadow-none focus:border-primary-darkGray focus:ring-offset-0 ',
    },
  },
});
interface ISearchField
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof searchFIeldVariants> {
  name: string;
  onClear?: () => void;
}

export const SearchBar = ({
  name,
  className,
  onClear,
  variant = 'gray',
  ...props
}: ISearchField) => {
  const [value, setValue] = useState(props.defaultValue || '');
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  const searchBarRef = useRef(null);

  useGSAP(
    () => {
      if (focus) {
        gsap.to(searchBarRef.current, {
          width: '260px',
          duration: 0.5,
          ease: 'power1.out',
        });
      } else {
        gsap.to(searchBarRef.current, {
          width: '150px',
          duration: 0.5,
          ease: 'power1.out',
        });
      }
    },
    { dependencies: [focus], scope: searchBarRef }
  );

  return (
    <label
      className="relative flex w-full gap-3  text-gray-400 focus-within:text-gray-600 "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        if (!focus && !value) setHover(false);
      }}
    >
      {variant === 'gray' ? (
        <div className=" absolute  right-4 top-[40%] h-5">
          <SearchIcon className="pointer-events-none" />
        </div>
      ) : (
        <div className="absolute right-4 top-[28%] h-5">
          <SearchIcon
            className={cn('stroke-primary-light-gray pointer-events-none ', {
              'stroke-primary-light-gray': hover,
            })}
          />
        </div>
      )}
      <input
        ref={searchBarRef}
        name={name}
        value={value}
        {...props}
        type="text"
        placeholder="Search"
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          if (!value) {
            setFocus(false);
            setHover(false);
          }
        }}
        onChange={(e) => {
          props.onChange && props?.onChange(e);
          setValue(e.target.value);
        }}
        className={cn(searchFIeldVariants({ className, variant }), {
          'border-dark-gray': hover && variant === 'light',
        })}
      />
      {value && (
        <Close
          className="absolute right-11 top-[33%] cursor-pointer stroke-primary-darkGray   hover:bg-gray-300/20"
          onClick={() => {
            setValue('');
            onClear && onClear();
          }}
        />
      )}
    </label>
  );
};
