// -> Images
import emptyStateImg from '../assets/empty-state.svg';

export function EmptyState({ title }: { title: string; }) {
  return (
    <div className='w-full flex flex-col flex-1 justify-center items-center'>
      <img src={emptyStateImg}  />

      <span className='text-gray-500 font-medium tracking-[0.5px]'> {title} </span>
    </div>
  );
}
