import { ErrorType } from './Errors';
import { PageName } from './PageNames';

export const TEXT_KEYS = {
  ERROR: {
    [`AUTH_MAIL_${ErrorType.NotFound}`]: 'ErrorMail.UserNotFound',
  },
  METAMASK_CONNECT: [
    `${PageName.Metamask}_NoWallet.statusText`,
    `${PageName.Metamask}_NoWallet.descriptionTextHighlightedPart1`,
    `${PageName.Metamask}_NoWallet.descriptionTextHighlightedPart2`,
    `${PageName.Metamask}_NoWallet.buttonText`,
    `${PageName.Metamask}_Connecting.statusText`,
    `${PageName.Metamask}_Connecting.descriptionTextHighlightedPart1`,
    `${PageName.Metamask}_Connecting.descriptionTextHighlightedPart2`,
    `${PageName.Metamask}_Connecting.descriptionTextHighlightedPart3`,
    `${PageName.Metamask}_Connecting.descriptionTextHighlightedPart4`,
    `${PageName.Metamask}_Error.statusText`,
    `${PageName.Metamask}_Error.descriptionText`,
    `${PageName.Metamask}_Error.buttonText`,
    `${PageName.Metamask}_Sign.statusText`,
    `${PageName.Metamask}_Sign.descriptionTextHighlightedPart1`,
    `${PageName.Metamask}_Sign.descriptionTextHighlightedPart2`,
    `${PageName.Metamask}_Sign.descriptionTextHighlightedPart3`,
    `${PageName.Metamask}_Connected.statusText`,
    `${PageName.Metamask}_Connected.descriptionText`,
  ],
  AUTH: [
    `${PageName.Auth}.title`,
    `${PageName.Auth}.socialsTitle`,
    `${PageName.Auth}.walletTitle`,
    `${PageName.Auth}.twitter`,
    `${PageName.Auth}.google`,
    `${PageName.Auth}.email`,
    `${PageName.Auth}.metamask`,
  ],
  HELLO: [
    `${PageName.Hello}.mascotTextHighlightedPart1`,
    `${PageName.Hello}.mascotTextHighlightedPart2`,
    `${PageName.Hello}.answerButtonText`,
  ],
  MAIL_AUTHORIZATION: [
    `${PageName.MailAuthorization}.mailLabel`,
    `${PageName.MailAuthorization}.mailErrorText_pattern`,
    `${PageName.MailAuthorization}.mailPlaceholder`,
    `${PageName.MailAuthorization}.passwordLabel`,
    `${PageName.MailAuthorization}.passwordErrorText`,
    `${PageName.MailAuthorization}.passwordPlaceholder`,
    `${PageName.MailAuthorization}.button`,
  ],
  HEADER: [`${PageName.Header}.buttonLogin`],
  PROFILE_GUIDES: [
    `${PageName.ProfileGuides}.btnText`,
    `${PageName.ProfileGuides}.rewardsTitle`,
    `${PageName.ProfileGuides}.ReferralTitle`,
    `${PageName.ProfileGuides}.earningsTitle`,
    `${PageName.ProfileGuides}.subtitle`,
    `${PageName.ProfileGuides}.buttonText`,
  ],
  PROFILE_ReferralS: [
    `${PageName.ProfileReferrals}.btnText`,
    `${PageName.ProfileReferrals}.rewardsTitle`,
    `${PageName.ProfileReferrals}.ReferralTitle`,
    `${PageName.ProfileReferrals}.earningsTitle`,
    `${PageName.ProfileReferrals}_Referral.subtitle`,
    `${PageName.ProfileReferrals}_NoReferral.subtitle`,
    `${PageName.ProfileReferrals}.leftButtonText`,
    `${PageName.ProfileReferrals}.rightButtonText`,
  ],
  PROFILE: [
    `${PageName.Profile}.ReferralTab`,
    `${PageName.Profile}.guidesTab`,
    `${PageName.Profile}.walletTab`,
    `${PageName.Profile}.settingsTab`,
  ],
  PROFILE_SETTINGS: [
    `${PageName.ProfileSettings}.userNameTitle`,
    `${PageName.ProfileSettings}.socialTitle`,
    `${PageName.ProfileSettings}.connectMail`,
    `${PageName.ProfileSettings}.connectTwitter`,
    `${PageName.ProfileSettings}.setPass`,
    `${PageName.ProfileSettings}.logout`,
    `${PageName.ProfileSettings}.editMailTitle`,
    `${PageName.ProfileSettings}.editNameTitle`,
    `${PageName.ProfileSettings}.setPassTitle`,
    `${PageName.ProfileSettings}.changePassTitle`,
    `${PageName.ProfileSettings}.fieldName`,
    `${PageName.ProfileSettings}.fieldMail`,
    `${PageName.ProfileSettings}.fieldPass`,
    `${PageName.ProfileSettings}.fieldEnterPass`,
    `${PageName.ProfileSettings}.fieldRepeatPass`,
    `${PageName.ProfileSettings}.fieldLastPass`,
    `${PageName.ProfileSettings}.fieldNewPass`,
    `${PageName.ProfileSettings}.connectSocial`,
    `${PageName.ProfileSettings}.socialGoogle`,
    `${PageName.ProfileSettings}.btnSave`,
  ],
  PROFILE_WALLET: [
    `${PageName.ProfileWallet}.title`,
    `${PageName.ProfileWallet}.balanceTitle`,
    `${PageName.ProfileWallet}.statusWallet_connected`,
    `${PageName.ProfileWallet}.statusWallet_disconnected`,
    `${PageName.ProfileWallet}.networkTitle`,
    `${PageName.ProfileWallet}.networkName_mainnet`,
    `${PageName.ProfileWallet}.connectButton_connected`,
    `${PageName.ProfileWallet}.connectButton_disconnected`,
    `${PageName.ProfileWallet}.subtitle`,
    `${PageName.ProfileWallet}.buttonText`,
  ],
  GUIDES_GALLERY: [
    `${PageName.GuidesGallery}.subtitle`,
    `${PageName.GuidesGallery}.buttonText`,
    `${PageName.GuidesGallery}.guideStatus_inProgress`,
    `${PageName.GuidesGallery}.guideStatus_completed`,
    `${PageName.GuidesGallery}.guideStatus_new`,
    `${PageName.GuidesGallery}.guideLevel_beginner`,
    `${PageName.GuidesGallery}.guideLevel_medium`,
    `${PageName.GuidesGallery}.guideLevel_advanced`,
    `${PageName.GuidesGallery}.guideTime`,
    `${PageName.GuidesGallery}.guideRewardTitle`,
    `${PageName.GuidesGallery}.guideRewardCount`,
  ],
};
