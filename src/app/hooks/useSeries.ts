import { useContext } from 'react';
import { SeriesContext } from '../context/SeriesContext';

export default function useSeries() {
  return useContext(SeriesContext);
}
