exports.renderContact = (req,res) => {
    res.sendFile(process.cwd() + "/Views/contact.html");
}