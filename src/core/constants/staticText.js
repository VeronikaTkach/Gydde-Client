import { PageName } from './PageNames';

export const STATIC_TEXT = {
  [PageName.Header]: {
    menuGuides: 'Guides',
    menuReferralRewards: 'Referral rewards',
    menuGuidesRewards: 'Guides rewards',
    menuWallet: 'Wallet',
    menuAccountSettings: 'Account settings',
  },
  [PageName.Profile]: {
    guidesTab: 'Guides rewards',
    ReferralTab: 'Referral rewards',
    settingsTab: 'Account settings',
    walletTab: 'Wallet',
  },
  [PageName.ProfileSettings]: {
    userNameTitle: 'User name',
    socialTitle: 'Уour social account',
    connectMail: 'Connect Email Address',
    connectTwitter: 'Connect Twitter Account',
    setPass: 'Set password',
    changePass: 'Change password',
    logout: 'Log out',
    editMailTitle: 'Enter email address',
    editNameTitle: 'Name editing',
    setPassTitle: 'Set password',
    changePassTitle: 'Change password',
    fieldName: 'Enter your name',
    fieldMail: 'Enter email address',
    mailErrorText_pattern: 'Please enter a valid email address',
    fieldPass: 'Enter password',
    passwordErrorText:
      'Password must be at least 8 characters (latin letters, numbers or symbols)',
    fieldEnterPass: 'Enter password',
    passwordSetErrorText:
      'Password must be at least 8 characters (latin letters, numbers or symbols)',
    fieldRepeatPass: 'Repeat password',
    passwordRepeatErrorText: 'Passwords must be identical',
    fieldLastPass: 'Enter last password',
    passwordLastErrorText: 'Invalid password',
    fieldNewPass: 'Enter new password',
    passwordNewErrorText:
      'Password must be at least 8 characters (latin letters, numbers or symbols)',
    connectSocial: 'Connect with social account',
    socialGoogle: 'Google',
    btnSave: 'Save',
  },
  [PageName.ProfileReferrals]: {
    adTitle: 'Invite friends and earn together',
    rewardForCompletion: 'Reward for Guide completion',
    referralReward: '50% for each referral reward',
    friendReward: "25% for each referral's friend reward",
    referralLinkTitle: 'Share referral link',
  },
  [PageName.ProfileGuides]: {
    btnText: 'Claim',
    rewardsTitle: 'Unclaimed rewards',
    ReferralTitle: 'Referal quest completions',
    earningsTitle: 'Lifetime earnings',
    subtitle:
      "Well, if you didn't know, we still have a lot of guides that you haven't completed yet. Go ahead for knowledge!",
    'ProfileGuides.buttonText': 'New guides',
  },
  [PageName.GuidesGallery]: {
    subtitle:
      "Do you know what an exchange is? Don't worry, this is not a test and it g won't affect any result Don't dfhhhdfj Don't worry",
    buttonText: "Let's go!",
    guideStatus: {
      inProgress: 'in progress',
      completed: 'completed',
      new: 'new',
    },
    guideLevel: { beginner: 'beginner', medium: 'medium', advanced: 'advanced' },
    guideTime: 'min',
    guideRewardTitle: 'Reward',
    guideRewardCount: 'left',
  },
  [PageName.ProfileWallet]: {
    title: 'Your wallet address',
    statusWallet: { connected: 'Connected', disconnected: 'Disconnect' },
    balanceTitle: 'Balance ETH',
    balanceValue: '0',
    networkTitle: 'Connected network',
    networkName: 'Ethereum',
    subtitle:
      'Every time I transfer a reward to your wallet, I write it down for you. So, nothing will be lost :)',
    connectButton: { connected: 'Disconnect', disconnected: 'Disconnect' },
  },
  [PageName.Claim]: {
    title: 'Claim amount',
    titleAccent: '~ $100',
    transactionText: 'Transaction fee compensation',
    geoText: 'What is commission paid for?',
    feeAmount: '$0',
    payFeeFrom: 'Pay transaction fee from my wallet',
    btnText: 'Claim',
  },
};
