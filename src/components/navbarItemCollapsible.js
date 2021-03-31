import Link from 'next/link';
import { useState } from 'react';
import MoreChevron from './moreChevron';

export default function NavbarItemCollapsible(props){

    const [isCollapsed, setCollapsed] = useState(true);
    const toggleCollapsed = () => {
        setCollapsed(!isCollapsed);
    }

    return (<div className="collection" 
                 onMouseEnter={ e => setCollapsed(false) } 
                 onMouseLeave={ e => setCollapsed(true) }
                 onTouchStart={ toggleCollapsed }>
        <style jsx>{`
            h3 {
                margin: 0;
                font-weight: 500;
                color: ${isCollapsed ? "#fff" : "#ccc"}
            }
            .collection {
                position: relative;
                display: flex;
                min-width: 7rem;
                height: min-content;
                border-radius: 0.2rem;
                flex-direction: column;
                margin-left: 1rem;
                text-align: left;
            }
            .horizontal {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: baseline;
                justify-content: space-between;
                padding: 0.5rem;
            }
            .link-container {
                display: flex;
                flex-direction: column;
                background-color: var(--highlight);
                border-radius: inherit;
                padding: 0.5rem; padding-top: 0; padding-bottom: 0;
            }
            p{
                margin: 0;
                margin-left: 0.5rem;
            }
            .link {
                margin-top: 0.25rem; margin-bottom: 0.25rem;
            }
            .top-hover-buffer {
                padding-top: 1rem;
                border-radius: inherit;
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 1.5rem;
                width: inherit;
            }
            @media (hover: hover){
                .link:hover {
                    color: #ccc;
                }
                h3:hover {
                    cursor: default;
                }
            }
        `}</style>

        <div className="horizontal"><h3>{props.title}</h3><MoreChevron /></div>
        {
            isCollapsed
            ? ""
            : <div className="top-hover-buffer">
                <div className="link-container">
                {
                    props.links.map(object => {
                        return <div className="horizontal link"><Link href={object.dest}>{object.name}</Link> <p>→</p></div>
                    })
                }
                </div>
            </div>
        }
    </div>);
}