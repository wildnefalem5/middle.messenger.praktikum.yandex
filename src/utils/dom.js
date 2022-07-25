const setEventListener = (element, typeEvent, handler, action) => {
  if (!handler || !element || !typeEvent) {
    return;
  }

  const eventListenerSetter = element[`${action}EventListener`];
  
  eventListenerSetter(typeEvent, handler);
};

export const addEventListener = (element, typeEvent, handler) => {
  console.log(element, typeEvent)
  setEventListener(element, typeEvent, handler, "add");
};

export const removeEventListener = (element, typeEvent, handler) => {
  setEventListener(element, typeEvent, handler, "remove");
};
