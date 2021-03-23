import {
    FETCH_TODOS_FAILURE,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_REQUEST,
    ADD_TODO,
    DELETE_TODO,
    UPDATE_TODO
} from './todoType'

const initialState = {
    todos :[],
    loading : false,
    error : ''
}

const reducer = (state =initialState, action)=>{
    const {type, payload} = action
    switch(type){
        case FETCH_TODOS_REQUEST :
            return{
                ...state,
                loading : true
            }
        case FETCH_TODOS_SUCCESS :
            return{
                ...state,
                todos : payload,
                loading: false,
                error: ""

            }
        case FETCH_TODOS_FAILURE:
            return {
                ...state,
                error : payload,
                todos :[],
                loading: false
            }
        case ADD_TODO:
            return{
                ...state,
                todos : [...state.todos,payload],
                loading: false,
                error :''
            }
        case DELETE_TODO:
            return{
                ...state,
                todos : state.todos.filter(item => item._id !== payload),
                loading: false
            }
        case UPDATE_TODO:{
            return {
                ...state,
                todos : state.todos.map(item=> (item.id === payload)? {...item,completed :!item.completed}: item)
            }
        }
        default:
            return state
    }
}

export default reducer