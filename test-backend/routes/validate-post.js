const jwt = require("jsonwebtoken");

const validate_post = (req, res, next) => {

  let token = req.body.headers.Authorization;
  console.log(token);
  if (!token) {
    console.log("not token")
    res.status(401).send("Unauthorized1111111");
  } else {
    try {
      console.log("token >>>", token)
      const decoded = jwt.verify(
        token.replace("Bearer", "").trim(),
        "codecamp_very_$secr3T!"
      );
      console.log("test POST")
      console.log("decoded", decoded);

      next();
    } catch (e) {
      console.log("error")
      res.status(401).send("Unauthorized2222222222");
    }
  }
};

module.exports = validate_post;