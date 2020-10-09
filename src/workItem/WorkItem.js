import React, { Component } from 'react'
import { workItemAssets } from './WorkItemAssets'
import './WorkItem.css'
import { 
    Title, 
    Container,
    Image,
    ImageMobile,
    Link,
    URL,
    LinkButtonContainer,
    LinkButton,
    TopImage,
    CreatedWith,
    Line,
    CreatedWithContainer,
    Paragraph,
} from './WorkItem.styles'

const ElementMap = {
    title: Title,
    container: Container,
    div: 'div',
    img: Image,
    imgMobile: ImageMobile,
    a: 'a',
    linkContainer: Link,
    url: URL,
    linkButton: LinkButton,
    linkButtonContainer: LinkButtonContainer,
    topImage: TopImage,
    createdWithContainer: CreatedWithContainer,
    createdWith: CreatedWith,
    line: Line,
    paragraph: Paragraph,
}


class WorkItem extends Component{
    renderer = (item) => {
        const imageLoaded = () => {
            this.props.workItemLoaded()
        }
        return React.createElement(
            ElementMap[item.type],
            {
                key: item.index,
                src: item.src,
                href: item.href,
                onLoad: imageLoaded
            },
            item.value && 
            (typeof item.value === 'string' ? item.value : item.value.map(i => this.renderer(i)))
        )
    }
    render() {
        return(
            <div className={this.props.isWorkItemLoaded ? 'fade-in' : 'hidden'}>
                {this.renderer(workItemAssets[this.props.match.params.workname])}
            </div>
        )
    }
}


// const renderer = (item) => {
//     const imageLoaded = () => {
//         console.log('loaded')
//     }
//     return React.createElement(
//         ElementMap[item.type],
//         {
//             key: item.index,
//             src: item.src,
//             href: item.href,
//             onLoad: imageLoaded
//         },
//         item.value && 
//         (typeof item.value === 'string' ? item.value : item.value.map(i => renderer(i)))
//     )
// }

// const WorkItem = (props) => {
//     return(
//         <div>
//             {renderer(workItemAssets[props.match.params.workname])}
//         </div>
//     )
// }

export default WorkItem