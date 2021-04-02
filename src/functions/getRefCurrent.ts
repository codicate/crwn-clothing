const getRefCurrent = (ref: React.MutableRefObject<null> | HTMLElement) => {
  return (ref as React.MutableRefObject<null>).current !== undefined
    ? (ref as React.MutableRefObject<null>).current
    : ref as HTMLElement;
};

export default getRefCurrent;