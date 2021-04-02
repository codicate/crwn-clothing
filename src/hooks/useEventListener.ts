import { useEffect, useRef } from 'react';
import getRefCurrent from 'functions/getRefCurrent';

type listener = (e?: Event) => void;

const useEventListener = (
  eventTarget: React.MutableRefObject<null> | HTMLElement,
  eventType: string,
  handler: listener,
  options = {}

) => {

  const savedHandler: { current: null | listener; } = useRef(null);
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const element = getRefCurrent(eventTarget);
    if (!element || !element.addEventListener) return;

    const listener = (event: Event) => (savedHandler.current as listener)(event);
    element.addEventListener(eventType, listener, options);

    return () => element.removeEventListener(eventType, listener, options);
  }, [eventTarget, eventType, options]);
};

export default useEventListener;