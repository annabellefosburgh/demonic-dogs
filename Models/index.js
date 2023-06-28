//Dependencies
const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

//One user can have multiple posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//A post belongs to one specific user
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

//A comment belongs to one specific user
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

//One user can make multiple comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

//A comment belongs to one specific post
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: "cascade"
});

//One post can have multiple comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: "cascade"
})

module.exports = { User, Post, Comment };

