import { useEffect } from "react";

const useClickOutside = (refs = [], callback, active = true) => {
  useEffect(() => {
    if (!active) return;

    function handleClick(event) {
      const clickedOutside = refs.every(
        (ref) => ref.current && !ref.current.contains(event.target)
      );
      if (clickedOutside) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [refs, callback, active]);
};

export default useClickOutside;
