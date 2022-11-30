import React from "react";


function ProgressBar (props) {
    return (
    <div className="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow={props.completedTasks} aria-valuemin="0" aria-valuemax={props.totalTasks} style={{width: `${props.percentage}%`}}></div>
        </div>
    )
}

export { ProgressBar }