import express from 'express'
import dotenv from 'dotenv'
import blogRouter from './routes/blog.js'
import contactRouter from './routes/contact.js'
import authRouter from './routes/auth.js'
import userRotuer from './routes/user.js'

dotenv.config()

const server = express();
server.use(express.json())
server.use('/auth', authRouter);
server.use("user",userRotuer)
server.use('/blog', blogRouter);
server.use('/contact', contactRouter);

server.listen(8080);

