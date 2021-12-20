//referenced https://github.com/ivandotv/nextjs-page-transitions
import { Transition, Variants } from 'framer-motion';

export type Animation = {
    name: string,
    variants: Variants,
    transition: Transition
}

const slideUp = {
    name: "Slide Up",
    variants: {
        initial: {
            opacity: 0,
            top: "100vh",
            scale: 0.4
        },
        animate: {
            opacity: 1,
            top: "0vh",
            scale: 1
        },
        exit: {
            opacity: 0,
        }
    },
    transition: {
        duration: 0.5
    }
}

const slideDown = {
    name: "Slide Down",
    variants: {
        initial: {
            opacity: 0,
            top: "-100vh",
            scale: 0.4
        },
        animate: {
            opacity: 1,
            top: "0vh",
            scale: 1
        },
        exit: {
            opacity: 0,
        }
    },
    transition: {
        duration: 0.5
    }
}

const slideRight = {
    name: "Slide Right",
    variants: {
        initial: {
            opacity: 0,
            left: "-100vw",
            scale: 0.6
        },
        animate: {
            opacity: 1,
            left: 0,
            scale: 1
        },
        exit: {
            opacity: 0,
        }
    },
    transition: {
        duration: 0.5
    }
}

const slideLeft = {
    name: "Slide Left",
    variants: {
        initial: {
            opacity: 0,
            left: "100vw",
            scale: 0.6
        },
        animate: {
            opacity: 1,
            left: 0,
            scale: 1
        },
        exit: {
            opacity: 0,
        }
    },
    transition: {
        duration: 0.5
    }
}

export const animations: { [key: string]: Animation } = {
    slideUp: slideUp,
    slideDown: slideDown,
    slideRight: slideRight,
    slideLeft: slideLeft,
}