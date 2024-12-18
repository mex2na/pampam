var express = require('express');
var bcrypt = require('bcryptjs')
var router = express.Router();
const prisma = require('../lib/db');

/* GET users listing. */
router.get('/', async function (req, res, next) {

  try {
    const users = await prisma.user.findMany();

    res.status(200).json({
      status: true,
      data: users
    })


  } catch (error) {

    res.status(500).json({
      status: false,
      data: error
    })


  }

});

router.post("/", async function (req, res, next) {

  
  try{
    let { password } = req.body
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);

    req.body.password = hash
    const user = await prisma.user.create({data : req.body})
    res.status(200).json({
      status: true,
      data: user
    })

  }catch(error){
    
    res.status(500).json({
      status: false,
      data: error
    })

  }
})


module.exports = router;
