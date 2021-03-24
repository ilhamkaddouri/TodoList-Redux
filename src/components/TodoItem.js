import React from 'react'
import './todos.css'
import {connect} from 'react-redux'
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton} from '@material-ui/core'
import {deleteTodos,updateTodos} from '../redux/index'
function TodoItem({todo,deletetodo, updatetodo}) {
    return (
        <div className="todo-item" >
            <p className={todo.completed ? 'todo-done' : ""}>{todo.title}</p>
            <div className="btns">
                <IconButton onClick={()=> updatetodo(todo._id)} disabled={todo.completed}>
                    <DoneIcon className={todo.completed ? 'btn-done':"btn-notdone" }/>
                </IconButton>
                <IconButton onClick={()=> updatetodo(todo._id)} disabled={todo.completed}>
                    <EditIcon className={todo.completed ? 'btn-done':"btn-edit" }/>
                </IconButton>
                <IconButton onClick={()=> deletetodo(todo._id)}>
                    <DeleteIcon color="secondary"/>
                </IconButton>
               
            </div>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return{
        todoData : state.todo
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
       
        deletetodo :(todoId)=>dispatch(deleteTodos(todoId)),
        updatetodo :(todoId)=> dispatch(updateTodos(todoId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoItem)
