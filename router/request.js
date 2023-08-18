const express=require("express")
const Co2model = require('../db/co2model.js');


const router=express.Router();


router.get('/api/getCo2Data',(req, res)=>{


    Co2model.find({}, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          console.log('All Co2model:', data);

          res.json({data})
        }
    });
    
})





module.exports=router;