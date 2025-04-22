<<<<<<< HEAD
class ExpressError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

=======
class ExpressError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

>>>>>>> e7365edfee5f6e1e8b983133e05e7b3a72ae3902
module.exports = ExpressError;