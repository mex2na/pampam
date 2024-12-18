var express = require('express');
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
