import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { LayoutMain } from '../layouts/LayoutMain';
import { SocialsOauthPage } from '../pages/auth/SocialsOauthPage';
import { HelloPage } from '../pages/HelloPage/HelloPage';
import { AuthPage } from '../pages/auth/AuthPage';
import { MailAuthPage } from '../pages/auth/MailAuthPage';
import { RoutesName } from '../core/constants/Routes';
import { Socials } from '../core/constants/Socials';
import { MetamaskConnectPage } from '../pages/auth/MetamaskConnectPage';
import './style.scss';

export function App() {
  return (
    <>
      <div id={'app'}>
        <Routes>
          <Route path={RoutesName.Root} element={<LayoutMain />}>
            <Route index element={<HomePage />} />
            <Route
              path={RoutesName.GoogleOauthPage}
              element={<SocialsOauthPage social={Socials.Google} />}
            />
            <Route
              path={RoutesName.TwitterOauthPage}
              element={<SocialsOauthPage social={Socials.Twitter} />}
            />
            <Route
              path={RoutesName.MetamaskConnectPage}
              element={<MetamaskConnectPage social={Socials.Twitter} />}
            />
            <Route path={RoutesName.AuthPage} element={<AuthPage />} />
            <Route path={RoutesName.MailAuthPage} element={<MailAuthPage />} />
            <Route path={RoutesName.HelloPage} element={<HelloPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}
