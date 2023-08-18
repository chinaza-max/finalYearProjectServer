const express=require("express")
const router=express.Router();
const Co2model = require('../db/co2model.js'); // Adjust the path to your model



router.post('/api/sensor_data',(req, res)=>{



   console.log("EEEEEEEEEEEEEEEEEEEEEESSSSSSS")


    res.status(200).json({"SSSSS":"Registerteam created sucessfully "})


   
    /*
    const newCo2model = new Co2model({
        Concentration  : Number,
      });
      
      newCo2model.save((err, data) => {
        if (err) {
          console.error(err);
        } else {
          console.log('data created:', data);
        }
      });
      */
})


module.exports=router;