const express = require('express');
const port = 8000;
const app = express();
const PostsRouter = require('./Router/Posts.Router');
const cors = require('cors')
app.use(express.json());
app.use(cors());

/// All Posts 
app.use('/posts', PostsRouter);


app.listen(port, () =>{
    console.log(`http://localhost:${port}`);
})