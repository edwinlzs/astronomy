//referenced https://github.com/ivandotv/nextjs-page-transitions
import { Transition, Variants } from 'framer-motion';

export type FramerAnimation = {
    variants: Variants,
    transition: Transition
}

// const slideUp: FramerAnimation = {
//     variants: {
//         initial: {
//             opacity: 0,
//             top: "100vh",
//             scale: 0.4
//         },
//         animate: {
//             opacity: 1,
//             top: "0vh",
//             scale: 1
//         },
//         exit: {
//             opacity: 0,
//         }
//     },
//     transition: {
//         duration: 0.5
//     }
// }

// const slideDown: FramerAnimation = {
//     variants: {
//         initial: {
//             opacity: 0,
//             top: "-100vh",
//             scale: 0.4
//         },
//         animate: {
//             opacity: 1,
//             top: "0vh",
//             scale: 1
//         },
//         exit: {
//             opacity: 0,
//         }
//     },
//     transition: {
//         duration: 0.5
//     }
// }

// const slideRight: FramerAnimation = {
//     variants: {
//         initial: {
//             opacity: 0,
//             left: "-100vw",
//             scale: 0.6
//         },
//         animate: {
//             opacity: 1,
//             left: 0,
//             scale: 1
//         },
//         exit: {
//             opacity: 0,
//         }
//     },
//     transition: {
//         duration: 0.5
//     }
// }

// const slideLeft: FramerAnimation = {
//     variants: {
//         initial: {
//             opacity: 0,
//             left: "100vw",
//             scale: 0.6
//         },
//         animate: {
//             opacity: 1,
//             left: 0,
//             scale: 1
//         },
//         exit: {
//             opacity: 0,
//         }
//     },
//     transition: {
//         duration: 0.5
//     }
// }

const fade: FramerAnimation = {
    variants: {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
        exit: {
            opacity: 0,
        }
    },
    transition: {
        duration: 0.3
    }
}

export const variants = {
    initial: (custom: string) => 
        {
            switch(custom) {
                case 'slideUp':
                    return {top: "100vh"}
                case 'slideDown':
                    return {top: "-100vh"}
                case 'slideRight':
                    return {left: "-100vw"}
                case 'slideLeft':
                    return {left: "100vw"}    
                default:
                    return {opacity: 0}
            }
        } 
    ,
    animate: (custom: string) => {
        {
            switch(custom) {
                case 'slideUp':
                    return {top: "0vh"}
                case 'slideDown':
                    return {top: "0vh"}
                case 'slideRight':
                    return {left: "0vw"}
                case 'slideLeft':
                    return {left: "0vw"}    
                default:
                    return {opacity: 0}
            }
        }
    },
    exit: (custom: string) => {
        {
            switch(custom) {
                case 'slideUp':
                    return {top: "-100vh"}
                case 'slideDown':
                    return {top: "100vh"}
                case 'slideRight':
                    return {left: "100vw"}
                case 'slideLeft':
                    return {left: "-100vw"}    
                default:
                    return {opacity: 0}
            }
        }
    }
}

export const framerAnimations: { [key: string]: FramerAnimation } = {
    // slideUp: slideUp,
    // slideDown: slideDown,
    // slideRight: slideRight,
    // slideLeft: slideLeft,
    fade: fade,
}