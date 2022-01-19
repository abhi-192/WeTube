import passport from "passport";
import GithubStrategy from "passport-github";
import User from "./models/User";
import { githubLoginCallback } from "./controllers/usersController";

passport.use(User.createStrategy());

passport.use(
    new GithubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: `http://localhost:3000/${routes.githubCallback}`
        },
        githubLoginCallback
    )
);

passport.use(
    new FacebookStrategy({
        clientID: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET,
        callbackURL: `http://localhost:3000/${routes.facebookCallback}`,
        profileFields: ['id', 'displayName', 'photos', 'email'],
        scope: ["public_profile", "email"]
    },
        facebookLoginCallback
    )
)

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
