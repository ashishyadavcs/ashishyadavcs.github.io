/**
 * Common animation variants for framer-motion components
 */
import { ANIMATIONS } from "@/app/constants";

/**
 * Fade in animation from different directions
 */
export const fadeInVariants = {
    up: {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: ANIMATIONS.DURATION.SLOW,
                ease: ANIMATIONS.EASING.DEFAULT,
            },
        },
    },
    down: {
        hidden: {
            opacity: 0,
            y: -30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: ANIMATIONS.DURATION.SLOW,
                ease: ANIMATIONS.EASING.DEFAULT,
            },
        },
    },
    left: {
        hidden: {
            opacity: 0,
            x: -30,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: ANIMATIONS.DURATION.SLOW,
                ease: ANIMATIONS.EASING.DEFAULT,
            },
        },
    },
    right: {
        hidden: {
            opacity: 0,
            x: 30,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: ANIMATIONS.DURATION.SLOW,
                ease: ANIMATIONS.EASING.DEFAULT,
            },
        },
    },
};

/**
 * Scale and fade animation
 */
export const scaleVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: ANIMATIONS.DURATION.NORMAL,
            ease: ANIMATIONS.EASING.BOUNCE,
        },
    },
};

/**
 * Stagger children animation
 */
export const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.1,
        },
    },
};

/**
 * Slide in from different directions
 */
export const slideVariants = {
    left: {
        hidden: { x: "-100%" },
        visible: {
            x: 0,
            transition: {
                duration: ANIMATIONS.DURATION.NORMAL,
                ease: ANIMATIONS.EASING.DEFAULT,
            },
        },
        exit: {
            x: "-100%",
            transition: {
                duration: ANIMATIONS.DURATION.NORMAL,
                ease: ANIMATIONS.EASING.DEFAULT,
            },
        },
    },
    right: {
        hidden: { x: "100%" },
        visible: {
            x: 0,
            transition: {
                duration: ANIMATIONS.DURATION.NORMAL,
                ease: ANIMATIONS.EASING.DEFAULT,
            },
        },
        exit: {
            x: "100%",
            transition: {
                duration: ANIMATIONS.DURATION.NORMAL,
                ease: ANIMATIONS.EASING.DEFAULT,
            },
        },
    },
};

/**
 * Hover animations
 */
export const hoverVariants = {
    scale: {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
    },
    lift: {
        whileHover: { y: -5 },
        whileTap: { y: 0 },
    },
    glow: {
        whileHover: {
            boxShadow: "0 8px 30px rgba(99, 102, 241, 0.3)",
        },
    },
};

/**
 * Button interaction animations
 */
export const buttonVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
};

/**
 * Modal animations
 */
export const modalVariants = {
    overlay: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: ANIMATIONS.DURATION.FAST,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: ANIMATIONS.DURATION.FAST,
            },
        },
    },
    modal: {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: -50,
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: ANIMATIONS.DURATION.NORMAL,
                ease: ANIMATIONS.EASING.BOUNCE,
            },
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            y: -50,
            transition: {
                duration: ANIMATIONS.DURATION.FAST,
            },
        },
    },
};
