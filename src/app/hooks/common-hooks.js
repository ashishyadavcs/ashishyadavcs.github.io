/**
 * Custom React hooks for common functionality
 */

import { useState, useEffect, useCallback, useRef } from "react";

/**
 * Custom hook for managing local storage
 * @param {string} key - Storage key
 * @param {*} initialValue - Initial value if key doesn't exist
 * @returns {Array} [value, setValue, removeValue]
 */
export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            if (typeof window !== "undefined") {
                const item = window.localStorage.getItem(key);
                return item ? JSON.parse(item) : initialValue;
            }
            return initialValue;
        } catch (error) {
            console.warn(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    });

    const setValue = useCallback(
        value => {
            try {
                const valueToStore = value instanceof Function ? value(storedValue) : value;
                setStoredValue(valueToStore);
                if (typeof window !== "undefined") {
                    window.localStorage.setItem(key, JSON.stringify(valueToStore));
                }
            } catch (error) {
                console.warn(`Error setting localStorage key "${key}":`, error);
            }
        },
        [key, storedValue]
    );

    const removeValue = useCallback(() => {
        try {
            setStoredValue(initialValue);
            if (typeof window !== "undefined") {
                window.localStorage.removeItem(key);
            }
        } catch (error) {
            console.warn(`Error removing localStorage key "${key}":`, error);
        }
    }, [key, initialValue]);

    return [storedValue, setValue, removeValue];
};

/**
 * Custom hook for managing form state
 * @param {Object} initialValues - Initial form values
 * @param {Function} validateFn - Optional validation function
 * @returns {Object} Form state and handlers
 */
export const useForm = (initialValues = {}, validateFn = null) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = useCallback(
        (name, value) => {
            setValues(prev => ({ ...prev, [name]: value }));

            // Clear error when user starts typing
            if (errors[name]) {
                setErrors(prev => ({ ...prev, [name]: "" }));
            }
        },
        [errors]
    );

    const handleBlur = useCallback(
        name => {
            setTouched(prev => ({ ...prev, [name]: true }));

            if (validateFn) {
                const fieldErrors = validateFn({ [name]: values[name] });
                if (fieldErrors[name]) {
                    setErrors(prev => ({ ...prev, [name]: fieldErrors[name] }));
                }
            }
        },
        [values, validateFn]
    );

    const validate = useCallback(() => {
        if (!validateFn) return true;

        const validationResult = validateFn(values);
        setErrors(validationResult.errors || {});
        return validationResult.isValid;
    }, [values, validateFn]);

    const reset = useCallback(() => {
        setValues(initialValues);
        setErrors({});
        setTouched({});
        setIsSubmitting(false);
    }, [initialValues]);

    return {
        values,
        errors,
        touched,
        isSubmitting,
        setIsSubmitting,
        handleChange,
        handleBlur,
        validate,
        reset,
    };
};

/**
 * Custom hook for debouncing values
 * @param {*} value - Value to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {*} Debounced value
 */
export const useDebounce = (value, delay = 300) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

/**
 * Custom hook for detecting click outside element
 * @param {Function} callback - Function to call when click outside is detected
 * @returns {Object} Ref to attach to element
 */
export const useClickOutside = callback => {
    const ref = useRef(null);

    useEffect(() => {
        const handleClick = event => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };

        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [callback]);

    return ref;
};

/**
 * Custom hook for managing async operations
 * @param {Function} asyncFunction - Async function to execute
 * @returns {Object} State and execute function
 */
export const useAsync = asyncFunction => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const execute = useCallback(
        async (...args) => {
            setLoading(true);
            setError(null);

            try {
                const result = await asyncFunction(...args);
                setData(result);
                return result;
            } catch (err) {
                setError(err);
                throw err;
            } finally {
                setLoading(false);
            }
        },
        [asyncFunction]
    );

    return { data, error, loading, execute };
};

/**
 * Custom hook for window resize events
 * @returns {Object} Window dimensions
 */
export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Set initial size
        if (typeof window !== "undefined") {
            handleResize();
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    return windowSize;
};
