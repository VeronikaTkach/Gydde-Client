import { Route, Routes } from 'react-router-dom';
import { GuidePage } from '../pages/GuidePage';
import { LayoutMain } from '../layouts/LayoutMain';
import { SocialsOauthPage } from '../pages/auth/SocialsOauthPage';
import { HelloPage } from '../pages/HelloPage/HelloPage';
import { RoutesName } from '../core/constants/Routes';
import { Socials } from '../core/constants/Socials';
import './style.scss';
import { ProfileGuidesPage } from '../pages/profile/ProfileGuidesPage';
import { ProfileWalletPage } from '../pages/profile/ProfileWalletPage/ProfileWalletPage';
import { ProfileSettingsPage } from '../pages/profile/ProfileSettingsPage';
import { ProfileReferralPage } from '../pages/profile/ProfileReferralPage/ProfileReferralPage';

export function App() {
  return (
    <>
      <div id={'app'}>
        <Routes>
          <Route path={RoutesName.Root} element={<LayoutMain />}>
            <Route index element={<GuidePage />} />
            <Route path={RoutesName.HelloPage} element={<HelloPage />} />
            <Route path={RoutesName.ProfileReferral} element={<ProfileReferralPage />} />
            <Route path={RoutesName.ProfileGuides} element={<ProfileGuidesPage />} />
            <Route path={RoutesName.ProfileWallet} element={<ProfileWalletPage />} />
            <Route path={RoutesName.ProfileSettings} element={<ProfileSettingsPage />} />
          </Route>
          <Route
            path={RoutesName.GoogleOauthPage}
            element={<SocialsOauthPage social={Socials.Google} />}
          />
          <Route
            path={RoutesName.TwitterOauthPage}
            element={<SocialsOauthPage social={Socials.Twitter} />}
          />
        </Routes>
      </div>
    </>
  );
}
