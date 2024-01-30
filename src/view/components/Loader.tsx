// -> Loader lib
import { RingLoader } from 'react-spinners';

// -> Custom hooks
import { useTheme } from '../../app/hooks/useTheme';

export function Loader() {
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-center w-full h-full">
      <RingLoader color={theme === 'dark' ? '#f4f4f5' : '#27272a'} />
    </div>
  );
}
