const jwt = require("jsonwebtoken");

const validate_get = (req, res, next) => {

  let token = req.headers.authorization;
  console.log(token);
  if (!token) {
    console.log("not token")
    res.status(401).send("Unauthorized");
  } else {
    try {
      console.log("token", token)
      const decoded = jwt.verify(
        token.replace("Bearer", "").trim(),
        "codecamp_very_$secr3T!"
      );
      console.log("test GET")
      console.log("decoded", decoded);

      next();
    } catch (e) {
      console.log("error")
      res.status(401).send("Unauthorized");
    }
  }
};

module.exports = validate_get;