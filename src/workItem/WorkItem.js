import React from 'react'
import {
    workItemAssets,
    workItemMap,
} from './WorkItemAssets'

const WorkItem = (props) => {
    //props.match.params.workName is url param
    return(
        workItemMap[props.match.params.workName].map((item, index)=> {
            return(
                <div key={index}>{workItemAssets[props.match.params.workName][index]}</div>
            )
        })
        // <div>Working</div>
    )
}

export default WorkItem