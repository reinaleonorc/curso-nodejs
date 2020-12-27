
exports.renderHome = (req, res) => {
    res.sendFile(process.cwd() + '/Views/index.html');
  }

