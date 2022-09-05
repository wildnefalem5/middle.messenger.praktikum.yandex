export const showFormDataInConsole = (form) => {
    console.log(Object.fromEntries(new FormData(form).entries()) )
}