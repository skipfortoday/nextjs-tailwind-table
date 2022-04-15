//update object immutably
export const updateObject = (oldState, updatedProperties) => {
  return {
    ...oldState,
    ...updatedProperties,
  };
};

/** Format date locale */
export const formatDate = (date, hideTime = false, short = false) => {
  let dateObj = Date.parse(date);

  if (!dateObj) {
    dateObj = new Date(Date.now());
  }

  return new Intl.DateTimeFormat("id", {
    weekday: !short ? "long" : undefined,
    day: "numeric",
    month: !short ? "long" : "short",
    year: "numeric",
    hour: !hideTime ? "numeric" : undefined,
    minute: !hideTime ? "numeric" : undefined,
  }).format(dateObj);
};
