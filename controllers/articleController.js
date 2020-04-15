exports.getAllArticles = (req, res)=> {
    res.status(200).json({
        status: 'users'
    })
}

exports.createArticle = (req, res)=> {
    const newId;
    const newArticle = Object.assign({ id: newId }, req.body)
}