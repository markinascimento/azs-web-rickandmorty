// -> Loader lib
import { RingLoader } from 'react-spinners';

export function Loader() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <RingLoader color="#f4f4f5" />
    </div>
  );
}
