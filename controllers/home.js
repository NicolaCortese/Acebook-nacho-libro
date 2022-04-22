const HomeController = {
  Index: (req, res) => {
    res.render("home/index", { title: "Acebook" });
    res.redirect("/posts");
  },
};

module.exports = HomeController;
