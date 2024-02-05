import { Route, Routes } from 'react-router-dom';
import { RoutesName } from '../core/constants/Routes';
import { Socials } from '../core/constants/Socials';
import { LayoutMain } from '../layouts/LayoutMain';
import { GuidePage } from '../pages/GuidePage';
import { HelloPage } from '../pages/HelloPage/HelloPage';
import { PartnerGuidePage } from '../pages/PartnerGuidePage/PartnerGuidePage';
import { SocialsOauthPage } from '../pages/auth/SocialsOauthPage';
import './style.scss';
import { ProfileGuidesPage } from '../pages/profile/ProfileGuidesPage';
import { ProfileReferralPage } from '../pages/profile/ProfileReferralPage/ProfileReferralPage';
import { ProfileSettingsPage } from '../pages/profile/ProfileSettingsPage';
import { ProfileWalletPage } from '../pages/profile/ProfileWalletPage/ProfileWalletPage';

export function App() {
  return (
    <>
      <div id={'app'}>
        <Routes>
          <Route path={RoutesName.Root} element={<LayoutMain />}>
            <Route index element={<GuidePage />} />
            <Route path={RoutesName.HelloPage} element={<HelloPage />} />
            <Route path={RoutesName.PartnerGuide} element={<PartnerGuidePage />} />
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
