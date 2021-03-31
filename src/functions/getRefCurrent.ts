interface ref {
  current: HTMLElement
}
const getRefCurrent = (ref: ref | HTMLElement) => {
  return (ref as ref).current !== undefined
    ? (ref as ref).current
    : ref as HTMLElement;
};

export default getRefCurrent;