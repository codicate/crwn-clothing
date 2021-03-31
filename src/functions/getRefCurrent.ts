const getRefCurrent = (ref: object) => {
  return ref.hasOwnProperty("current")
    ? ref.current
    : ref;
};

export default getRefCurrent;