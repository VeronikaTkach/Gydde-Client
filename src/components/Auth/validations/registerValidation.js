export const mailRegExp =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
export const nicknameRegExp = /^[A-Za-z0-9_\-.@]+$/;
export const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s])/;

export const mailValidation = {
  required: '',
  pattern: {
    value: mailRegExp,
    message: '',
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
  required: {
    value: mailRegExp,
    message: '',
  },
  minLength: {
    value: 8,
    message: 'Password must be at least 8 characters (latin letters, numbers or symbols)',
  },
};
