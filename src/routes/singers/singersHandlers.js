import verifyWebhookHandler from '../../bot_code/main.js';

const getAllSingers =async (req,res) => {
    await verifyWebhookHandler(req,res);

}



export{getAllSingers}