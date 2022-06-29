import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

// check token
export const verifyToken = (req, res, next) => {
  var token = req.headers.authorization;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }
  const tokenCheck = token.split(" ")[1];

  jwt.verify(tokenCheck, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
  });
};

// check authorization for user 
export const verifyUser = async (req, res, next) => {
  await verifyToken(req, res, next);

  if (req.user.id === req.params.id || req.user.isAdmin) {
    next();
  } else {
    return next(createError(403, "You are not authorized!"));
  }
};


// check authorization for admin when isAdmin == true 
export const verifyAdmin = async (req, res, next) => {
  await verifyToken(req, res, next);
  if (req.user?.isAdmin) {
    next();
  } else {
    return next(createError(403, "You are not authorized admin!"));
  }
};
