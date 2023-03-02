const express = require('express');
const Router = express.Router();
const movieModel = require('../models/movie.model');


Router.get("/", async (req, res) =>{
    try {
      let {q, r} = req.query;
      let addMovie = await movieModel.find({ title: { $regex: q, $options: "i"} });

      if(r){
        addMovie = await movieModel.find({ title: { $regex: q, $options: "i"} }).sort(r == "asc"? {rating : 1 } :{rating : 1 } );
      }

      if(addMovie){
          res.status(201).send(addMovie);
      }else{
          res.status(401).send({message : "Something Went Wrong movie did't added!"});
      }
    } catch (error) {
      res.status(401).send({error, message : "Something Went Wrong in movie Post"});
    }
  });

Router.post("/", async (req, res) =>{
  try {
    let addMovie = await movieModel.create(req.body);
    if(addMovie){
        res.status(201).send(addMovie);
    }else{
        res.status(401).send({message : "Something Went Wrong movie did't added!"});
    }
  } catch (error) {
    res.status(401).send({error, message : "Something Went Wrong in movie Post"});
  }
});

Router.delete("/:movieId", async (req, res) =>{
    try {
        let _id = req.params.movieId;
      let addMovie = await movieModel.findByIdAndDelete({_id});
      if(addMovie){
          res.status(201).send({message : "Successfully Deleted!"});
      }else{
          res.status(401).send({message : "Something Went Wrong movie did't Deleted!"});
      }
    } catch (error) {
      res.status(401).send({error, message : "Something Went Wrong in movie Delete"});
    }
  });

  Router.patch("/:movieId", async (req, res) =>{
    try {
        let _id = req.params.movieId;
      let addMovie = await movieModel.findByIdAndUpdate({_id}, req.body);
      if(addMovie){
          res.status(201).send({message : "Successfully Updated!"});
      }else{
          res.status(401).send({message : "Something Went Wrong movie did't Updated!"});
      }
    } catch (error) {
      res.status(401).send({error, message : "Something Went Wrong in movie Patch"});
    }
  });


module.exports = Router;