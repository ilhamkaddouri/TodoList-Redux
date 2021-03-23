import React,{useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {fetchTodos, addTodos, deleteTodos,updateTodos} from '../redux/index'
function Todos({todoData,fetchtodos,addtodo,deletetodo, updatetodo}) {

    const [title,setTodo] = useState('')
    
    useEffect(()=>{
        fetchtodos()
        
    },[])
    return todoData.loading ? (
        <h2>loadind..</h2>
    ) : todoData.error ? (
        <h2>error</h2>
    ) :(
        <div>
            <div>
                <input placeholder="add todo" value={title} onChange={e=> setTodo(e.target.value)} type="text"/>
                <button onClick={()=>addtodo({title:title})}>ADD TODO</button>
            </div>
            <div>
                {
                    todoData && todoData.todos && todoData.todos.map(todo =>(
                        <div key={todo._id}>
                            <h1 key={todo._id}>{todo.title}</h1>
                            <button onClick={()=>deletetodo(todo._id)}>Delete item</button>
                            <button onClick={()=>updatetodo(todo._id)}>Update item</button>
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
