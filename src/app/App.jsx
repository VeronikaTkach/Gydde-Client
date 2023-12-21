import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { LayoutMain } from '../layouts/LayoutMain';
import './style.scss';

export function App() {
  return (
    <Routes>
      <Route path='/' element={<LayoutMain />}>
        <Route path='/dd' element={<HomePage />} />
      </Route>
    </Routes>
  );
}
