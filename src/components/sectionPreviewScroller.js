export default function SectionPreviewScroller(props){
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
                background: var(--highlight);
                border: 2px solid white;
            }
            .wrapper {
                position: absolute;
                height: min-content;
                width: 100%;
                bottom: 0;
                left: 0;
                margin-bottom: 1rem;
            }
        `}</style>
        {
            props.sections[0]
        }
        <div className="wrapper">
            <div className="horizontal">
                {
                    Array(props.sections.length).fill(<button className="" />)
                }
            </div>
        </div>
    </div>)
}