import React,{useState} from 'react'

function TodoInput() {
    const [todo,setTodo] = useState('')
    const addtd = {
       
        title : todo,
        

    }
    return (
        <div>
            <input placeholder="add todo" value={todo} onChange={e=> setTodo(e.target.value)} type="text"/>
            <button onClick={()=>addtodo({title:todo})}>ADD TODO</button>
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
