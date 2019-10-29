// JavaScript source code
import addTask from './actions/addTask';
import delTask from './actions/delTask';
import editTask from './actions/editTask';
import updtTask from './actions/updtTask';
    const taskReducer =(state = [], action)=>{
        switch(action.type){
            case 'ADD':  
                return [...state,action.data];
            case 'DELETE':
                return [...state].filter((task)=>task.id !== action.id);
            case 'EDIT':
                return  [...state].map((task)=>task.id==action.id?{...task,isEdit:true}:task);
            case 'UPDATE':
                return [...state].map((task)=>task.id==action.id?{...task,isEdit:false,
                title:action.data.title,
                description:action.data.description,
                theDate:action.data.theDate}:task);
            default:
                return state;
        }
    }
export default taskReducer
