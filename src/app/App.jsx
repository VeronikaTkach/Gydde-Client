import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { LayoutMain } from '../layouts/LayoutMain';
import { OauthPage } from '../pages/OauthPage/OauthPage';
import { HelloPage } from '../pages/HelloPage/HelloPage';
import { AuthPage } from '../pages/auth/AuthPage';
import { MailAuthPage } from '../pages/auth/MailAuthPage';
import { RoutesName } from '../core/constants/Routes';
import './style.scss';

export function App() {
  return (
    <Routes>
      <Route path='/' element={<LayoutMain />}>
        <Route index element={<HomePage />} />
        <Route path='/oauth' element={<OauthPage />} />
        <Route path={RoutesName.AuthPage} element={<AuthPage />} />
        <Route path={RoutesName.MailAuthPage} element={<MailAuthPage />} />
        <Route path='/hello' element={<HelloPage />} />
      </Route>
    </Routes>
  );
}
