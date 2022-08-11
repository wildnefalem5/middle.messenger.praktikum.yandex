const REG_EXP: Record<string, RegExp> = {
  name: /^[A-ZА-Я][a-zа-я]+$/,
  login: /^(?=.*[a-zA-Z])[\w-]{3,20}$/,
  email: /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/,
  phone: /^[+]?[0-9]{10,15}$/,
  password: /^(?=.*\d)(?=.*[A-Z]).{8,40}$/,
  message: /[^\s]/,
};

export const nameValidate = (value: string): boolean => {
  return REG_EXP.name.test(value);
};

export const loginValidate = (value: string): boolean => {
  return REG_EXP.login.test(value);
};

export const emailValidate = (value: string): boolean => {
  return REG_EXP.email.test(value);
};

export const phoneValidate = (value: string): boolean => {
  return REG_EXP.phone.test(value);
};

export const passwordValidate = (value: string): boolean => {
  return REG_EXP.password.test(value);
};

export const checkMessage = (value: string): boolean => {
  return REG_EXP.message.test(value);
};
