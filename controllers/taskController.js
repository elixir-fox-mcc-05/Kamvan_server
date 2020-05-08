const {Task,User} = require("../models/index.js")

class taskController{
 static getAllTasks(req,res,next){
    Task.findAll({ 
        include: [ User ],
        where:{
            organization: req.currentUserOrganization
        }
    })
    .then(result =>{
        res.status(200).json({
            message:"All tasks successfully read",
            allTasks:result
        })
    })
    .catch(error =>{
        console.log(error)
        res.status(500).json({
            message:"Internal Server Error",
            error
        })
    })
 }
 static getOneTask(req,res,next){
    let selectedId = req.params.id
    Task.findByPk(selectedId)
    .then(result => {
        console.log(result)
        if(result){
            res.status(200).json({
                message:"Specified task successfully read",
                result
            })
        } else {
            res.status(400).json({
                message:"BadRequest",
                error: "Unauthorized request"
            })
        }
    })
    .catch(error => {
        console.log(error)
    })
 } 
 static addTask(req,res,next){
    let { title, description, due_date } = req.body
    let newTask = {
        title,
        description,
        category: 'backlog', //as default
        due_date,
        organization : req.currentUserOrganization,
        UserId : req.currentUserId
    }
    Task.create(newTask)
     .then(result =>{
        console.log(result)
        res.status(201).json({
            message:"New task successfully added",
            newTask : result
        })
     })
     .catch(error =>{
         console.log(error)
         res.status(500).json({
            message:"Internal server error",
            error
        })
    })
 }
 static editOneTaskDetail (req,res,next){
    let selectedId = req.params.id
    let { title, description, category, due_date } = req.body
    let updatedTask = {
        title,
        description,
        category,
        due_date,
        UserId: req.currentUserId
    }
    Task.update(updatedTask,{
        where:{
            id: selectedId
        },
        returning:true
    })
      .then(result =>{
        res.status(200).json({
            message:"Specific task successfully updated",
            updatedTask : result
        })
      })
      .catch(error =>{
          console.log(error)
          res.status(500).json({
              message:"Internal server error",
              error
          })
      })
 }
 static deleteOneTask(req,res,next){
    let selectedId = req.params.id
    Task.destroy({
        where:{ 
            id:selectedId 
        }
    })
    .then(_ =>{
        res.status(200).json({
            message: "Specific task successfully deleted"
        })
    })
    .catch(error =>{
        res.status(500).json({
            message: "InternalServerError",
            error:error
        })
    })
 }
 static editTaskCategory(req,res,next){
    //  We can do this on client: http://localhost:3000/tasks/${taskId}/?newCategory=${newCategory}
    Task.update(
        { category: req.query.newCategory },
        { where : 
            { id : req.params.id }, 
            returning:true
        },  
    )
    .then(result => {
        console.log(result)
        res.status(200).json({
            message:"Task category successfully updated",
            result
        })
    })
    .catch(error =>{
        console.log(error)
        res.status(500).json({
            message:"Internal server error",
            error
        })
    })
 }

}

module.exports = taskController