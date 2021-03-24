import React,{useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {fetchTodos, addTodos, deleteTodos,updateTodos} from '../redux/index'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import './todos.css'
function Todos({todoData,fetchtodos,addtodo,deletetodo, updatetodo}) {

    const [title,setTodo] = useState('')
    
    useEffect(()=>{
        fetchtodos()
        
    },[])
    return todoData.loading ? (
        <h2>loading..</h2>
    ) : todoData.error ? (
        <h2>error</h2>
    ) :(
        <div>
            
                {/* <input placeholder="add todo" value={title} onChange={e=> setTodo(e.target.value)} type="text"/>
                <button onClick={()=>addtodo({title:title})}>ADD TODO</button> */}
                <TodoInput/>
            
            <div>
                {
                    todoData && todoData.todos && todoData.todos.map(todo =>(
                        <div className="todos">
                            <TodoItem key={todo._id} todo={todo}/>
                        </div>
                    ))
                }
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
        fetchtodos : ()=>dispatch(fetchTodos()),
        addtodo :(todo)=>dispatch(addTodos(todo)),
        deletetodo :(todoId)=>dispatch(deleteTodos(todoId)),
        updatetodo :(todoId)=> dispatch(updateTodos(todoId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todos)
