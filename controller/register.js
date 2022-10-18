const bcrypt = require("bcrypt");
const pool = require("../models/index");
const jwtGenerator = require("../utils");
const authorize = require("../middleware/authorization");

class Register {
  static async getRegister(req, res, next) {
    res.render("register", {
      title: "Register",
      layout: "layouts/main",
    });
  }

  static async Register(req, res, next) {
    try {
      const user = await pool.query(
        "SELECT * FROM users WHERE user_email = $1",
        [username]
      );

      if (user.rows.length > 0) {
        return res.status(401).json("User already exist!");
      }

      const salt = await bcrypt.genSalt(10);
      const bcryptPassword = await bcrypt.hash(password, salt);

      const newUser = await pool.query(
        "INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *",
        [username, bcryptPassword]
      );

      const jwtToken = jwtGenerator(newUser.rows[0].user_id);

      return res.json({ jwtToken });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
}

module.exports = Register;
