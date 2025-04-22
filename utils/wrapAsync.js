<<<<<<< HEAD
module.exports = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
=======
module.exports = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
>>>>>>> e7365edfee5f6e1e8b983133e05e7b3a72ae3902
};