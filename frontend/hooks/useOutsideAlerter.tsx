import { MutableRefObject, useEffect } from "react"

export default function useOutsideAlerter(ref: MutableRefObject<HTMLElement|null>, handleClickOutside: (event: MouseEvent) => void) {
    useEffect(() => {
        const checkClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                handleClickOutside(event);
            }
        }

        document.addEventListener('mousedown', checkClickOutside);
        return () => {
            document.removeEventListener('mousedown', checkClickOutside);
        }
    }, [ref, handleClickOutside]);
}