import { useState } from 'react';
import Link from 'next/link';

export default function HamburgerMenu(props){
    const [menuCollapsed, setMenuCollapsed] = useState(true);
    const toggleMenuCollapsed = (e) => {
        e.preventDefault();
        setMenuCollapsed(!menuCollapsed);
    }
    return (<div className="hamburger">
        <style jsx>{`
            svg {
                stroke: hsla(0,0%,100%,.5);
                height: 1.5rem;
            }
            .hamburger {
                margin-left: auto;
                position: relative;
                cursor: pointer;
            }
            .expandedMenu {
                position: fixed;
                right: 0;
                background-color: var(--highlight);
                width: 9rem;
                top: 7.7rem;
                height: 28rem;
                display: flex;
                flex-direction: column;
                padding: 1rem;
                text-align: left;
                border-radius: 1rem 0 0 1rem;
                border-left: 2px solid var(--bg);
                border-bottom: 2px solid var(--bg);
                border-top: 2px solid var(--bg);
            }
            .link {
                color: white;
                margin-top: 1rem;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding-left: 0.5rem;
            }
            @media (hover: hover){
                .link:hover {
                    color: #ccc;
                }
            }
            h3 {
                margin: 0;
            }
            .section {
                margin-bottom: 1rem;
            }
            p {
                margin: 0;
            }
        `}</style>
        <svg 
            viewBox="0 0 100 80" 
            width="40" height="40"  
            fill="white" 
            onTouchStart={toggleMenuCollapsed}
            onClick={toggleMenuCollapsed}
            >
            <rect width="100" height="13"></rect>
            <rect y="30" width="100" height="13"></rect>
            <rect y="60" width="100" height="13"></rect>
        </svg>
        {
            menuCollapsed
            ? ""
            : <div className="expandedMenu">
                {props.sections.map(sectionsObject => {
                    return <div className="section">
                        <h3>{sectionsObject.title}</h3>
                        {
                            sectionsObject.links.map(linksObject => {
                                return <div className="link">
                                    <Link href={linksObject.dest}>{linksObject.name}</Link><p>→</p>
                                </div>
                            })
                        }
                    </div>
                })}
            </div>
        }
    </div>)
}