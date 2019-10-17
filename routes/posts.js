const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', function(req, res) {
    db.post.findAll().then(function(posts) {
        res.render('posts/index')
    });
});

router.get('/:id', function(req, res) {
    db.post.findByPk(parseInt(req.params.id), {include: [db.author, db.comment, db.tag]})
    .then(function(post) {   
        res.render('posts/show', {post});
    })
    .catch(function(err) {
        console.log(err)
        res.send('errror');
    })
});

router.post('/:id/comments', function(req, res) {
    db.comment.create({
        name: req.body.name,
        content: req.body.content,
        postId: req.params.id
    }).then(function() {
        res.redirect(`/posts/${req.params.id}`)
    }).catch(function(err) {
        res.send(err.message)
    })
})

router.get('/new', function(req, res) {
    res.render('posts/new')
})

module.exports = router;