import express from 'express'
const router = express.Router()

import {verifyAuth} from '../middlewares/verifyAuth.js'
import {diaryContentCreator,getAllDiaryEntries } from '../controllers/diary.controller.js'

router.get('/entries',verifyAuth,async (req,res,next)=>{
    const user = req.user
    await getAllDiaryEntries(req,user,res,next)
})
router.post('/create-entry',verifyAuth,async(req,res,next)=>{
    const user = req.user;
    await diaryContentCreator(req,user,res,next)
})

export default router;