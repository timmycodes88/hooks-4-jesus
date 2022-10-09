import { useCallback, useState } from "react";

export default function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);

  //Now we have a useState with extra functionality when needed
  const toggle = useCallback((bool) => {
    if (typeof bool === "boolean") {
      setValue(bool);
    } else {
      setValue((curr) => !curr);
    }
  });

  return [value, toggle];
}
