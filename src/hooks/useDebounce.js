import { useEffect } from "react";
import useTimeout from "./useTimeout";

export default function useDebounce(callback, delay, dependancies) {
    //when the dependacy stops changing it will call the function and it will not run on the first render
    const { clear, reset } = useTimeout(callback, delay)
    useEffect(reset, [...dependancies, reset])
    useEffect(clear, [])
}
