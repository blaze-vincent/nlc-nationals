import { useState } from "react"

export default function SectionPreviewScroller(props){

    const [sectionDisplayed, setSectionDisplayed] = useState(0);

    return (<div className="section-preview-scroller">
        <style jsx>{`
            .section-preview-scroller {
                position: relative;
                width: min-content;
                height: min-content;
                margin-bottom: 1rem;
            }
            .horizontal {
                display: flex;
                flex-direction: row;
                position: relative;
                bottom: 0;
                width: max-content;
                height: min-content;
                margin-left: auto; margin-right: auto;
            }
            button {
                width: .8rem;
                height: .8rem;
                border-radius: 0.4rem;
                padding: 0;
                border: none;
                background: white;
                margin: 0.25rem;
            }
            .selected {
                background-color: #555;
                border: 2px solid white;
            }
            .wrapper {
                position: absolute;
                height: min-content;
                width: 100%;
                bottom: 0;
                left: 0;
                padding-bottom: 0.75rem;
                padding-top: 0.25rem;
                opacity: 0.75;
            }
        `}</style>
        {
            props.sections[sectionDisplayed]
        }
        <div className="wrapper">
            <div className="horizontal">
                {
                    Array(props.sections.length).fill(0).map((button, index) => {
                        return (<button 
                                    className={sectionDisplayed === index ? "selected" : ""} 
                                    onClick={ e => { setSectionDisplayed(index) }}
                                    onTap={ e => { setSectionDisplayed(index) }} 
                                />)
                    })
                }
            </div>
        </div>
    </div>)
}