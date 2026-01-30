export const fakeLogin = () =>
  new Promise(resolve => setTimeout(() => resolve("success"), 1000));

export const fakeRegisterDoctor = () =>
  new Promise(resolve => setTimeout(() => resolve("success"), 1000));

export const fakeRegisterUser = () =>
  new Promise(resolve => setTimeout(() => resolve("success"), 1000));
