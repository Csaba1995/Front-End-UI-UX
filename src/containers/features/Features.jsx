import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featuresData = [
    {
        title: "Request Early Access to Get Started",
        text:"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
    },
    {
        title: "Become the tended active",
        text:"Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
    },
    {
        title: "Message or am nothing",
        text:"Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
    },
    {
        title: "Really boy law county",
        text:"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
    },
    
]

const Features = () => {
    return (
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today &#38; Make it Happen.</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className="gtp3__features-container">
                {featuresData.map((item, index)=>{
                    return (
                    <Feature title={item.title} text={item.text} key={item.title + index}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Features
