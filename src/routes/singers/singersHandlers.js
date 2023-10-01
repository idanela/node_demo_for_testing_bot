import verifyWebhookHandler from '../../bot_code/main.js';

const getAllSingers =async (req,res) => {
    await verifyWebhookHandler({res,req});

}



export{getAllSingers} 