const superuser = require("../superuser.json");

class Login {
  static getLogin(req, res, next) {
    res.render("login", {
      title: "Login",
      layout: "layouts/main",
    });
  }

  static async Login(req, res, next) {
    const { username, password } = req.body;
    try {
      const user = await pool.query(
        "SELECT * FROM users WHERE user_email = $1",
        [username]
      );

      if (user.rows.length === 0) {
        return res.status(401).json("Invalid");
      }

      const validPassword = await bcrypt.compare(
        password,
        user.rows[0].user_password
      );

      if (!validPassword) {
        return res.status(401).json("Invalid");
      }
      const jwtToken = jwtGenerator(user.rows[0].user_id);
      return res.json({ jwtToken });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
}

module.exports = Login;
