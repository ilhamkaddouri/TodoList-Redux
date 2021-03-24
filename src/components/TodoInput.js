import React,{useState} from 'react'
import './todos.css'
import {connect}  from 'react-redux'
import AddIcon from '@material-ui/icons/Add';
import { IconButton} from '@material-ui/core'
import {addTodos} from '../redux/index'
function TodoInput({addtodo}) {
    const [todo,setTodo] = useState('')
    const addtd = {
       
        title : todo,
        

    }
    return (
        <div className="input">
            <form>
                <input placeholder="add todo" value={todo} onChange={e=> setTodo(e.target.value)} type="text"/>
                {/* <button onClick={()=>addtodo({title:todo})}></button> */}
                <IconButton onClick={()=>addtodo({title:todo})}>
                    <AddIcon color="secondary"/>
                </IconButton>
            </form>
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
        
        addtodo :(todo)=>dispatch(addTodos(todo))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoInput)
