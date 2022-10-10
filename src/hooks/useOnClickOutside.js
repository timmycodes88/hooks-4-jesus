import { useEffect, useRef } from "react";

//1. Get Ref to element we are detecting outside clicks
//2. Callback is fuction that runs on outside click
export default function useOnClickOutside(outsideRef, callback) {
  const callbackRef = useRef();
  callbackRef.current = callback;

  useEffect(() => {
    function onClick(event) {
      if (outsideRef.current !== event.target) {
        callbackRef.current(event); 
      }
    }

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, [outsideRef, callback]);

}
