// -> ReactJS
import { ComponentProps } from 'react';

// -> Icons lib
import { Search, X } from 'lucide-react';

// -> Types
interface InputFilterProps extends ComponentProps<'input'> {
  isClear: boolean;
  onClear(): void;
}

export function InputFilter({ isClear, onClear, ...props }: InputFilterProps) {
  return (
    <div className="relative px-6 lg:pr-8 lg:max-w-[468px]">
      <Search className='w-5 h-5 absolute top-1/2 -translate-y-1/2 translate-x-1' />

      <input
        {...props}
        type="text"
        className="w-full min-h-[52px] rounded-xl shadow bg-[#121E29] outline-none px-10 lg:max-w-[468px]"
      />

      {isClear && (
        <button
          type='button'
          onClick={onClear}
          className="w-10 h-10 bg-transparent absolute right-8 top-1/2 -translate-y-1/2 text-zinc-900 flex
        items-center justify-center"
        >
          <X className='w-5 h-5 text-white'/>
        </button>
      )}
    </div>
  );
}
