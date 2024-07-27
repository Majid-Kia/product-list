import { useEffect, useState, useRef } from "react";

const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((observedEntries) => {
      setEntries(observedEntries);
    }, options);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [options]);

  const observe = (element: Element | null) => {
    if (element && observer.current) observer.current.observe(element);
  };

  const unobserve = (element: Element | null) => {
    if (element && observer.current) observer.current.unobserve(element);
  };

  return { observe, unobserve, entries };
};

export default useIntersectionObserver;
