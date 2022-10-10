import { useState } from 'react'

export default function useArray(initialValue) {
    const [array, setArray] = useState(initialValue)

    function push(element) {
        setArray((array) => [...array, element])
    }

    function filter(callback) {
        setArray((array) => array.filter(callback))
    }

    function update(index, newElement) {
        setArray((array) => [...array.slice(0, index), newElement, ...array.slice(index + 1, a.length-1)])
    }

    function remove(index) {
        setArray(array => [...array.slice(0, index), ...array.slice(index + 1, array.length - 1)])
    }

    function clear() {
        setArray([])
    }

    return {
        array,
        set: setArray,
        push,
        filter,
        update,
        remove,
        clear
    }
}
