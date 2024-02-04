export const GuideStepType = {
  Onboarding: 'ONBOARDING',
  Quiz: 'QUIZ',
  Content: 'CONTENT',
  SocialTask: 'SOCIAL_NETWORK_TASK',
  LinkClick: 'LINK_CLICK',
  TestNet: 'TEST_NET',
};

export const UserGuideStepStatus = {
  NotStarted: 'NOT_STARTED',
  InProgress: 'IN_PROGRESS',
  Done: 'DONE',
};

export const GuideStepActionType = {
  Select: 'SELECT_OPTION',
  Next: 'NEXT',
  Text: 'TEXT',
  Hello: 'HELLO_PHRASE',
};

Object.freeze(GuideStepType);
Object.freeze(UserGuideStepStatus);
Object.freeze(GuideStepActionType);
