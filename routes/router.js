const express=require("express");
const { getUser, createUser, createnewuser, veiwEdit, edit, deletee } = require("../controller/controller");
const router=express.Router()

router.get('/getuser',getUser)
router.get('/createnewuser',createnewuser)
router.post('/createuser',createUser)
router.get('/edit/:id/edit',veiwEdit)
router.put('/edit/:id',edit)
router.delete('/delete/:id',deletee)


module.exports=router;