import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const TaskDetail = ({   
        id,
        name,
        group,
        owner,
        isComplete   
}) => (
    <div>
        <h2>
            Task Detail
        </h2>
        <button>Complete/Reopen Task</button>
        <select>
            {group.map(group =>(
                <option key={group.id} value={group.id}>{group.name}</option>
            ))}
        </select>
        <Link to="/dashboard">
            <button>Done</button>
        </Link>

    </div>
);

const mapStateToProps = (state,ownprops) =>{
    let id = ownprops.match.params.id;
    let task = state.tasks.find(task => task.id === id);
    let groups = state.groups;
    return {
        id,        
        task,
        groups,
        isComplete: task.isComplete   
    }
};

export const ConnectedTaskDetail = 
connect(mapStateToProps)(TaskDetail);