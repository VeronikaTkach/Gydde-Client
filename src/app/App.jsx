import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { LayoutMain } from '../layouts/LayoutMain';
import { SocialsOauthPage } from '../pages/auth/SocialsOauthPage';
import { HelloPage } from '../pages/HelloPage/HelloPage';
import { RoutesName } from '../core/constants/Routes';
import { Socials } from '../core/constants/Socials';
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
            <Route path={RoutesName.HelloPage} element={<HelloPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}
