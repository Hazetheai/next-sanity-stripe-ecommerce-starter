import { useEffect, useState, RefObject, useRef } from "react";
import { isBrowser } from "utils/booleans";

// export default useInView;

const useInView = ({
  threshold = 0,
  root = null,
  rootMargin = "0%",
  freezeOnceVisible = true,
  deactivate = false,
}): [RefObject<HTMLDivElement> | null, boolean] => {
  if (!isBrowser) return [null, false];

  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;

    if (freezeOnceVisible && isVisible) {
      return;
    }
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = deactivate
      ? null
      : new IntersectionObserver(callbackFunction, {
          threshold,
          root,
          rootMargin,
        });

    if (containerRef.current && !deactivate && observer)
      observer.observe(containerRef.current);

    return () => {
      if (containerRef.current && observer)
        observer.unobserve(containerRef.current);
    };
  }, [containerRef, { threshold, root, rootMargin }]);

  return [containerRef, isVisible];
};

export default useInView;
