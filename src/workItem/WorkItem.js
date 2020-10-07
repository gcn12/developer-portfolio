import React from 'react'
import { workItemAssets } from './WorkItemAssets'
import { 
    Title, 
    Container,
    Image,
    ImageMobile,
} from './WorkItem.styles'


// const WorkItem = (props) => {
//     //props.match.params.workName is url param
//     return(
//         workItemMap[props.match.params.workName].map((item, index)=> {
//             return(
//                 <div key={index}>{workItemAssets[props.match.params.workName][index]}</div>
//             )
//         })
//         // <div>Working</div>
//     )
// }

// export default WorkItem

const ElementMap = {
    title: Title,
    container: Container,
    div: 'div',
    img: Image,
    imgMobile: ImageMobile,
}

const renderer = (item) => {
    return React.createElement(
        ElementMap[item.type],
        {
            src: item.src,
        },
        item.value && 
        (typeof item.value === 'string' ? item.value : item.value.map(i => renderer(i)))
    )
}

const WorkItem = (props) => {
    return(
        <div>
            {renderer(workItemAssets[props.match.params.workName])}
        </div>
    )
}

export default WorkItem