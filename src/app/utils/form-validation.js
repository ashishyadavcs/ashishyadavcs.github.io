/**
 * Form validation utilities
 */

/**
 * Email validation regex pattern
 */
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if email is valid
 */
export const isValidEmail = email => {
    return EMAIL_REGEX.test(email.trim());
};

/**
 * Validate required field
 * @param {string} value - Value to validate
 * @returns {boolean} True if value is not empty
 */
export const isRequired = value => {
    return value.trim().length > 0;
};

/**
 * Validate minimum length
 * @param {string} value - Value to validate
 * @param {number} minLength - Minimum required length
 * @returns {boolean} True if value meets minimum length
 */
export const hasMinLength = (value, minLength) => {
    return value.trim().length >= minLength;
};

/**
 * Validate maximum length
 * @param {string} value - Value to validate
 * @param {number} maxLength - Maximum allowed length
 * @returns {boolean} True if value doesn't exceed maximum length
 */
export const hasMaxLength = (value, maxLength) => {
    return value.trim().length <= maxLength;
};

/**
 * Validate form data
 * @param {Object} formData - Form data to validate
 * @param {string} formData.name - Name field
 * @param {string} formData.email - Email field
 * @param {string} formData.message - Message field
 * @returns {Object} Validation result with errors object
 */
export const validateContactForm = formData => {
    const errors = {};

    // Name validation
    if (!isRequired(formData.name)) {
        errors.name = "Name is required";
    } else if (!hasMinLength(formData.name, 2)) {
        errors.name = "Name must be at least 2 characters";
    } else if (!hasMaxLength(formData.name, 50)) {
        errors.name = "Name must be less than 50 characters";
    }

    // Email validation
    if (!isRequired(formData.email)) {
        errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
        errors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!isRequired(formData.message)) {
        errors.message = "Message is required";
    } else if (!hasMinLength(formData.message, 10)) {
        errors.message = "Message must be at least 10 characters";
    } else if (!hasMaxLength(formData.message, 1000)) {
        errors.message = "Message must be less than 1000 characters";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};

/**
 * Sanitize input string
 * @param {string} input - Input to sanitize
 * @returns {string} Sanitized input
 */
export const sanitizeInput = input => {
    return input.trim().replace(/[<>]/g, "");
};
