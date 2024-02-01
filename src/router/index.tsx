// -> Routing lib
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// -> Layout
import { Sidebar } from '../view/layout/Sidebar';

// -> Pages
import { Home } from '../view/pages/Home';
import { Favorite } from '../view/pages/Favorite';
import { EpisodeDetails } from '../view/pages/EpisodeDetails';
import { ContinuaWatching } from '../view/pages/ContinuaWatching';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Sidebar />} >
          <Route path='/' element={<Home />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/episode/:id' element={<EpisodeDetails />} />
          <Route path='/continue_watching' element={<ContinuaWatching />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
