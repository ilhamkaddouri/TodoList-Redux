const router = require('express').Router()
const Todo = require('../models/Todo')

router.get('/',async (req,res)=>{
    await Todo.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})
router.post('/',async (req,res)=>{
   
        const todo = {
            title : req.body.title,
            completed: false
        }
        await Todo.create(todo,(err,data)=>{
            if(err){
                res.status(500).send(err)
            }else{
                res.status(201).json(data)
            }
        })
   
})
router.delete('/:todoid',async (req,res)=>{
   try{
    const todo =await Todo.findById(req.params.todoid)
    await todo.remove()
    res.json(todo._id)
   }catch(err){
    res.status(500).json(err)
   }

})

router.put('/:todoid',async (req,res)=>{
    try{
        const todo =await Todo.findById(req.params.todoid)
        //todo.completed = true
        await Object.assign(todo,{completed : true})
        await todo.save()
        res.json(todo._id)

    }catch(err){
        res.status(500).send(err)
    }
})

module.exports = router