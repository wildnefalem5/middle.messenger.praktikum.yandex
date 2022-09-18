export const getDataFromForm = (form: HTMLFormElement): any => {
  const data = Object.fromEntries(new FormData(form).entries());

  console.log(data);

  return data;
};
