import express from 'express'
import baseRouter from './routes/index.js';

const app = express();
const port = 5000;

app.use(express.json());
app.use('/',baseRouter)

app.listen(port, () => {
    
    console.log(`Listening on port ${port}`);
});
