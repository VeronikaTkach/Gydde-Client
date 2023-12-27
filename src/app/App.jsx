import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { LayoutMain } from '../layouts/LayoutMain';
import './style.scss';
import { OauthPage } from '../pages/OauthPage/OauthPage';

export function App() {
  return (
    <Routes>
      <Route path='/' element={<LayoutMain />}>
        <Route path='/dd' element={<HomePage />} />
        <Route path='/oauth' element={<OauthPage />} />
      </Route>
    </Routes>
  );
}
