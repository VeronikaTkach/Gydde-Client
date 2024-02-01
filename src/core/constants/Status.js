export const StatusCode = {
  Informational: 100,
  Successful: 200,
  Redirection: 300,
  ClientError: 400,
  ServerError: 500,
  Unauthorized: 401,
  Forbidden: 403,
};

export const Status = {
  Loading: 0,
  Resolved: 1,
  Rejected: 2,
};

export const MetamaskConnectionStatus = {
  NoWallet: 'NoWallet',
  Connecting: 'Connecting',
  Error: 'Error',
  Sign: 'Sign',
  Connected: 'Connected',
  Finish: 'Finish',
};

export const ConnectWalletStatus = {
  Connected: 'connected',
  Disonnected: 'disconnected',
};

export const UserReferralStatus = {
  Referral: 'Referral',
  NoReferral: 'NoReferral',
};

Object.freeze(StatusCode);
Object.freeze(Status);
Object.freeze(MetamaskConnectionStatus);
Object.freeze(ConnectWalletStatus);
Object.freeze(UserReferralStatus);
