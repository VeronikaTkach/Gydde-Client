import { PageName } from './PageNames';

export const STATIC_TEXT = {
  [PageName.Auth]: {
    title: 'Log in to Gydde',
    socialsTitle: 'Log in with social account',
    walletTitle: 'Log in with wallet',
    twitter: 'Twitter',
    google: 'Google',
    email: 'Email',
    metamask: 'Metamask',
  },
  [PageName.Header]: {
    buttonLogin: 'Log in',
    menuGuides: 'Guides',
    menuReferralRewards: 'Referral rewards',
    menuGuidesRewards: 'Guides rewards',
    menuWallet: 'Wallet',
    menuAccountSettings: 'Account settings',
  },
  [PageName.Hello]: {
    mascotTextHighlightedPart1: "Hello! I'm",
    mascotTextHighlightedPart2: 'Gydde',
    answerButtonText: 'Hi, Gydde!',
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
  [PageName.GuidesChat]: {
    guideStatus: { inProgress: 'In Progress', completed: 'Completed', new: 'New' },
    actionText: { next: 'Next', select: 'Select an option' },
    inputPlaceholder: 'Enter a text',
    searchPlaceholder: 'Enter a text',
    searchTitle: 'My guides',
  },
  [PageName.MailAuthorization]: {
    mailLabel: 'Email address',
    mailErrorText_pattern: 'Please enter a valid email address',
    mailPlaceholder: 'Enter email address',
    passwordLabel: 'Password',
    passwordErrorText: 'Incorrect email or password',
    passwordPlaceholder: 'Enter password',
    button: 'Log in',
  },
  [PageName.Metamask]: {
    NoWallet: {
      statusText: 'No wallet detected',
      descriptionTextHighlightedPart1: 'I will show you',
      descriptionTextHighlightedPart2: 'how to create your first wallet.',
      buttonText: 'Show me!',
    },
    Connecting: {
      statusText: 'Connecting...',
      descriptionTextHighlightedPart1: 'Open the',
      descriptionTextHighlightedPart2: 'MetaMask',
      descriptionTextHighlightedPart3: 'browser extension and confirm connection to',
      descriptionTextHighlightedPart4: 'Gydde.com',
    },
    Error: {
      statusText: 'Connection error',
      descriptionText: 'Something went wrong',
      buttonText: 'Try again',
    },
    Sign: {
      statusText: 'Connecting...',
      descriptionTextHighlightedPart1: 'Please',
      descriptionTextHighlightedPart2: 'sign',
      descriptionTextHighlightedPart3: 'the message request in your wallet to continue.',
    },
    Connected: { statusText: 'Connected', descriptionText: 'Logging in' },
  },
  [PageName.Profile]: {
    guidesTab: 'Guides rewards',
    ReferralTab: 'Referral rewards',
    settingsTab: 'Account settings',
    walletTab: 'Wallet',
  },
  [PageName.ProfileReferrals]: {
    adTitle: 'Invite friends and earn together',
    rewardForCompletion: 'Reward for Guide completion',
    referralReward: '50% for each referral reward',
    friendReward: "25% for each referral's friend reward",
    referralLinkTitle: 'Share referral link',
    leftButtonText: 'How it works?',
    rightButtonText: 'Invite',
    Referral: {
      subtitle: 'If you invite more friends, you will get more rewards!',
    },
    NoReferral: {
      subtitle:
        "Imagine you invite 10 friends who also invite 10 friends and they complete 10 quests each. You will earn 900$. That's AWESOME!",
    },
  },
  [PageName.ProfileGuides]: {
    btnText: 'Claim',
    rewardsTitle: 'Unclaimed rewards',
    ReferralTitle: 'Referal quest completions',
    earningsTitle: 'Lifetime earnings',
    subtitle:
      "Well, if you didn't know, we still have a lot of guides that you haven't completed yet. Go ahead for knowledge!",
    buttonText: 'New guides',
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
  [PageName.ProfileWallet]: {
    title: 'Your wallet address',
    statusWallet: { connected: 'Connected', disconnected: 'Disconnect' },
    balanceTitle: 'Balance ETH',
    balanceValue: '0',
    networkTitle: 'Connected network',
    networkName: { mainnet: 'Ethereum', unknown: 'Unknown' },
    subtitle:
      'Every time I transfer a reward to your wallet, I write it down for you. So, nothing will be lost :)',
    connectButton: { connected: 'Disconnect', disconnected: 'Connect wallet' },
    buttonText: 'History',
  },
  [PageName.Claim]: {
    title: 'Claim amount',
    transactionText: 'Transaction fee compensation',
    geoText: 'What is commission paid for?',
    payFeeFrom: 'Pay transaction fee from my wallet',
    btnText: 'Claim',
  },
  [PageName.History]: {
    title: 'Transaction history',
  },
  [PageName.PartnerGuide]: {
    subtitle:
      "Hello! I'm Gydde! Choose your language and let's go on a journey through Web3",
    buttonText: "Let's go!",
  },
};
