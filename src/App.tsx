// -> Custom hooks
import { useTheme } from './app/hooks/useTheme';

export function App() {
  const { theme, toggleTheme } = useTheme();

  console.log({ theme });

  return (
    <div className='bg-red-500'>
      <button onClick={toggleTheme}>
        test
      </button>
    </div>
  );
}
