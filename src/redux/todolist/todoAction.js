import axios from 'axios'
import {
    FETCH_TODOS_FAILURE,
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
    ADD_TODO,
    DELETE_TODO,
    UPDATE_TODO
} from './todoType'

export const addTodo = (item)=>{
    return{
        type : ADD_TODO,
        payload : item
    }
}

export const deleteTodo = (todoId)=>{
    return {
        type : DELETE_TODO,
        payload : todoId
    }
}

export const updateTodo = (todoId)=>{
    return{
        type :UPDATE_TODO,
        payload :todoId
    }
}

export const fetchTodosRequest = ()=>{
    return{
        type : FETCH_TODOS_REQUEST,
    }
}

export const fetchTodosSuccess = (todos)=>{
    return{
        type : FETCH_TODOS_SUCCESS,
        payload : todos
        
    }
}

export const fetchTodoFailure = (err)=>{
    return{
        type : FETCH_TODOS_FAILURE,
        payload : err
    }
}

export const fetchTodos = ()=>{
    return (dispatch)=>{
        dispatch(fetchTodosRequest())
        axios.get('http://localhost:5000/todos')
            .then((response)=>{
                const todos = response.data;
                dispatch(fetchTodosSuccess(todos))
            })
            .catch((err)=>{
                const error = err.message
                dispatch(fetchTodoFailure(error))
            })

        }

        
    
}

export const addTodos = (item)=>{
    return (dispatch)=>{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        axios.post('http://localhost:5000/todos',item, config).then(response=>{
            const item = response.data
            console.log(item)
            dispatch(addTodo(item))
        }).catch(err=>{
            console.log(err)
        })
        //console.log(res.data)
        //dispatch(addTodo(res.data))
    }
}

export const deleteTodos = (todoId)=>{
    return (dispatch)=>{
        axios.delete(`http://localhost:5000/todos/${todoId}`)
        dispatch(deleteTodo(todoId))
    }
}
export const updateTodos = (todoId)=>{
    return (dispatch)=>{
        axios.put(`http://localhost:5000/todos/${todoId}`)
        dispatch(updateTodo(todoId))
    }
}