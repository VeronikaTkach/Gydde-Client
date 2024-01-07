export const StatusCode = {
  Informational: 100,
  Successful: 200,
  Redirection: 300,
  ClientError: 400,
  ServerError: 500,
};

export const Status = {
  Loading: 0,
  Resolved: 1,
  Rejected: 2,
};

export const MetamaskConnectionStatus = {
  NoWallet: 0,
  Connecting: 1,
  Error: 2,
  Sign: 3,
  Connected: 4,
  Finish: 5,
};

Object.freeze(StatusCode);
Object.freeze(Status);
Object.freeze(MetamaskConnectionStatus);
