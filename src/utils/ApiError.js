class ApiEror extends Error {
    constructor(
        statusCode,
        message="Something went wrong",
        errors = [],
        stack=""
    ) {
        super(message);
        this.statusCode = statusCode;
        this.data = null; // @TODO: Explore
        this.message = message;
        this.success = false
        this.errors = this.errors || errors;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}