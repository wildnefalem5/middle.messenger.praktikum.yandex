export const getElements = (elements: any): string[] => {
  const stringifiedElements: string[] = [];

  Object.keys(elements).forEach((key) => {
    stringifiedElements.push(elements[key]._element.outerHTML);
  });

  return stringifiedElements;
};
