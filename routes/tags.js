const express = require('express');
const router = express.Router();
const db = require('../models');

router.post('/', function(req, res) {
    let postId = parseInt(req.body.postId)
    db.post.findByPk(parseInt(postId))
    .then(function(post) {
        db.tag.findOrCreate({
            where: {
                name: req.body.name
            }
        }).then(function([tag, created]) {
            console.log(`record was created: ${created}`)
            post.addTag(tag).then(function(data) {
                res.redirect(`/posts/${postId}`);
            })
            });
        });
    })


module.exports = router;