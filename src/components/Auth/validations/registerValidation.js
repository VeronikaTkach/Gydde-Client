export const mailRegExp =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
export const nicknameRegExp = /^[A-Za-z0-9_\-.@]+$/;
export const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s])/;

export const mailValidation = {
  required: 'Required!',
  pattern: {
    value: mailRegExp,
    message: 'Enter a valid email address',
  },
  minLength: {
    value: 6,
    message: 'Email must be at least 6 characters long',
  },
};

export const nicknameValidation = {
  required: 'Required!',
  pattern: {
    value: nicknameRegExp,
  },
  maxLength: 20,
};

export const passwordValidation = {
  required: 'Required!',
  minLength: {
    value: 8,
    message: 'Password must be at least 8 characters long',
  },
  maxLength: {
    value: 30,
    message: 'Password must be no more than 30 characters',
  },
};
