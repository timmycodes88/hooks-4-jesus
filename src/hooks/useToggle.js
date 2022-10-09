import { useState } from "react"

export default function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue)

  //Now we have a useState with extra functionality when needed
  const toggleValue = (bool) => {
    setValue((currentValue) => typeof bool === "boolean" ? bool : !currentValue)
  }

  return [value, toggleValue]
}
