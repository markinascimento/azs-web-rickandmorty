// -> ReactJS
import { ComponentProps } from 'react';

// -> Icons lib
import { X } from 'lucide-react';

// -> Types
interface InputFilterProps extends ComponentProps<'input'> {
  isClear: boolean;
  onClear(): void;
}

export function InputFilter({ isClear, onClear, ...props }: InputFilterProps) {
  return (
    <div className="relative px-6 lg:pr-[39px]">
      <input
        {...props}
        type="text"
        className="w-full min-h-[52px] rounded-md shadow bg-zinc-50 dark:bg-zinc-900 outline-none px-4"
      />

      {isClear && (
        <button
          type='button'
          onClick={onClear}
          className="w-10 h-10 bg-transparent absolute right-8 top-1/2 -translate-y-1/2 text-zinc-900 flex
        items-center justify-center lg:right-12"
        >
          <X className='w-5 h-5 text-zinc-800 dark:text-zinc-100'/>
        </button>
      )}
    </div>
  );
}
