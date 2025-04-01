const express=require('express');
const {handleloginreq,handlesignupreq,handlelogoutapi,handlesignupapi,handleloginapi} =require("../controllers/auth");

const router=express.Router();
router.get('/signup',handlesignupreq);
router.get('/login',handleloginreq);

router.post('/apiSignup',handlesignupapi);


router.post('/apiLogin',handleloginapi);
router.post('/apiLogout',handlelogoutapi);



module.exports=router;