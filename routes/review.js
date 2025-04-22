<<<<<<< HEAD
const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const{ validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");

const reviewController = require("../controllers/review.js");


//POST Review Route
router.post("/", validateReview, isLoggedIn,  wrapAsync (reviewController.createReview));

//Delete Review Route
router.delete("/:reviewId",
  isLoggedIn,
  isReviewAuthor, 
  wrapAsync (reviewController.deleteReview));

=======
const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const{ validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");

const reviewController = require("../controllers/review.js");


//POST Review Route
router.post("/", validateReview, isLoggedIn,  wrapAsync (reviewController.createReview));

//Delete Review Route
router.delete("/:reviewId",
  isLoggedIn,
  isReviewAuthor, 
  wrapAsync (reviewController.deleteReview));

>>>>>>> e7365edfee5f6e1e8b983133e05e7b3a72ae3902
module.exports = router;