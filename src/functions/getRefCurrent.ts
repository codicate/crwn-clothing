const getRefCurrent = (ref: React.MutableRefObject<HTMLElement> | HTMLElement) => {
  return ((ref as React.MutableRefObject<HTMLElement>).current)
    ? (ref as React.MutableRefObject<HTMLElement>).current
    : ref as HTMLElement;
};

export default getRefCurrent;