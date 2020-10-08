import React from 'react'
import { workItemAssets } from './WorkItemAssets'
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
}

const renderer = (item) => {
    return React.createElement(
        ElementMap[item.type],
        {
            src: item.src,
            href: item.href,
        },
        item.value && 
        (typeof item.value === 'string' ? item.value : item.value.map(i => renderer(i)))
    )
}

const WorkItem = (props) => {
    return(
        <div>
            {renderer(workItemAssets[props.match.params.workname])}
        </div>
    )
}

export default WorkItem