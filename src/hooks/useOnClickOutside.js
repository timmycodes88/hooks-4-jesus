import { useEffect, useRef } from "react";

//1. Get Ref to element we are detecting outside clicks
//2. Callback is fuction that runs on outside click
export default function useOnClickOutside(outsideRef, callback) {
  const callbackRef = useRef();
  callbackRef.current = callback; //Now having a ref to the callback
  //takes care of the case where the callback changes every render

  //useEffect to set up event listener one time when we use this hook and removes the listner
  //when we unmount a componenet that is using useOnClickOutside
  useEffect(() => {
    //On Click
    function onClick(event) {
      if (outsideRef.current !== event.target) {
        //If the click is outside the ref
        callbackRef.current(event); //Might aswell give the callback function the event incase we need it when using this hook
      }
    }

    document.addEventListener("click", onClick);
    //What you return call out unmount
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, [outsideRef, callback]);

  //Nothing to return for this hook
}

//may be kinda hard to see this but the callback is actually "changing" on every render
//means we are going to mount and unmount event listener every time we render which is not
//optimial

//lets fix that by using useCallback
