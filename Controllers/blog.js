exports.renderBlog = (req,res) => {
    res.sendFile(process.cwd() + "/Views/blog.html");
}