class Dashboard {
  static getDashboard(req, res, next) {
    res.render("index", {
      title: "Dashboard",
      layout: "layouts/main",
    });
  }

  static errorStatus(req, res, next) {
    res.status(404);
    res.send("File not found");
  }
}

module.exports = Dashboard;
