const sequelize = require("../config/connection")
const {User,Blog,Comment} = require("../Models")

const users = [
    {
        username: "annabelle",
        password: "Password1"
    },
    {
        username: "Justice",
        password: "Password2"
    },
    {
        username: "Amy",
        password: "Password3"
    },

]

const blogs = [
    {
        title: "My first post",
        content: "Hello World!",
        userId: 1
    },
    {
        title: "My second post",
        content: "Hello Friends!",
        userId: 1
    },
    {
        title: "Amy's post",
        content: "Hello World!",
        userId: 3
    },
    {
        title: "Justice's post",
        content: "Hello World!",
        userId: 2
    },
]

const comments = [
    {
        body: "hello back!",
        blogId: 1,
        userId: 2
    },
    {
        body: "hi friend!",
        blogId: 2,
        userId: 3
    },
    {
        body: "i love this blog!",
        blogId: 4,
        userId: 1
    },
    {
        body: "happy friday!",
        blogId: 2,
        userId: 3
    },

]

const runSeeds = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Blog.bulkCreate(blogs);
        await Comment.bulkCreate(comments);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

runSeeds()