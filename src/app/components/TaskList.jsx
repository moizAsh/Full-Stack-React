import React from 'react';
import { connect}  from 'react-redux';
import { requestTaskCreation } from '../store/mutation';
import { Link} from 'react-router-dom'

export const TaskList = ({tasks, name, id, createNewTask}) => (
    <div>
         <h3>
        {name}
        </h3>
        <div>
            {tasks.map( task =>(
            <Link to={`/task/${task.id}`} key={task.id}>
             <div>{task.name}</div>
            </Link>))}
        </div>
        <button onClick={()=>createNewTask(id)}>Add New</button>
    </div>
   
)

const mapStateToProps = (state,ownprops)=> {
    let groupId = ownprops.id;
    return {
        name: ownprops.name,
        id: groupId,
        tasks: state.tasks.filter(task => task.group === groupId)
    }
};


const mapDispatchToProps = (dispatch,ownprops) =>{
    return {
        createNewTask(id){
            console.log("Creating new task", id);
            dispatch(requestTaskCreation(id));
        }
    }
}



export const ConnectedTaskList = connect(mapStateToProps,mapDispatchToProps)(TaskList);