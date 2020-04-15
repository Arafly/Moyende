const express = require('express');
const router = express.Router();

router
    .route('/api/v1/articles')
    .get(getAllArticles)
    .post(createArticle)

module.exports = router;