const express = require('express');
const Router = express.Router();
const todoModel = require('../models/todo.model');


Router.get("/", async (req, res) =>{
    try {

      let addTodo = await todoModel.find();
    //   if(r){
    //     addTodo = await todoModel.find({title : q}).sort({rating : r == "ASN"? 1 : -1});
    //   }
      if(addTodo){
          res.status(201).send(addTodo);
      }else{
          res.status(401).send({message : "Something Went Wrong movie did't added!"});
      }
    } catch (error) {
      res.status(401).send({error, message : "Something Went Wrong in movie Post"});
    }
  });

Router.post("/", async (req, res) =>{
  try {
    let addTodo = await todoModel.create(req.body);
    if(addTodo){
        res.status(201).send(addTodo);
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
      let addTodo = await todoModel.findByIdAndDelete({_id});
      if(addTodo){
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
      let addTodo = await todoModel.findByIdAndUpdate({_id}, req.body);
      if(addTodo){
          res.status(201).send({message : "Successfully Updated!"});
      }else{
          res.status(401).send({message : "Something Went Wrong movie did't Updated!"});
      }
    } catch (error) {
      res.status(401).send({error, message : "Something Went Wrong in movie Patch"});
    }
  });


module.exports = Router;