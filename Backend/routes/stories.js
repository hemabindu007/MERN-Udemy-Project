import {Router} from 'express';
import storiesModel from '../models/storiesModel.js';
import Data from '../Data.js';
const router = Router()

router.get('/',async(req,res)=>{
    // res.send("Data getting")
    try {
        const story = await storiesModel.find()
        res.send(new Data(200, "Stories fetched successfully", story));
    } catch (error) {
        res.send(new Data(500, "Internal Server Error", error));
    }
})

router.post('/addStory',async(req,res)=>{
    // res.send("Data getting")
    try {
       const body = req.body;
       const newStory = new Stroy({
        ...body
       })
       await newStory.save()
        res.send(new Data(200, "Stories Saved successfully", newStory));
    } catch (error) {
        res.send(new Data(500, "Internal Server Error", error));
    }
})

export default router;