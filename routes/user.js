<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/user.js");

router
    .route("/signup")
    .get(userController.renderSignupForm)
    .post(wrapAsync (userController.signup)
);


router
    .route("/login")
    .get(userController.renderLoginpForm)
    .post(
        saveRedirectUrl,
        passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }),
        userController.login 
);
    

router.get("/logout", userController.logout);

=======
const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/user.js");

router
    .route("/signup")
    .get(userController.renderSignupForm)
    .post(wrapAsync (userController.signup)
);


router
    .route("/login")
    .get(userController.renderLoginpForm)
    .post(
        saveRedirectUrl,
        passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }),
        userController.login 
);
    

router.get("/logout", userController.logout);

>>>>>>> e7365edfee5f6e1e8b983133e05e7b3a72ae3902
module.exports = router;