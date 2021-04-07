import {useState} from 'react';
import Link from 'next/link';

export default function SectionPreview(props){

    const [overlayDisplayed, setOverlayDisplay] = useState(false);
    let touchMoved = false;

    return (
        <div className="image-preview"
            onMouseEnter={
                e => {setOverlayDisplay(true)}
            }
            onMouseLeave={
                e => {setOverlayDisplay(false)}
            }
            onTouchMove={
                e => {
                    touchMoved = true;
                }
            }
            onTouchEnd={
                e => {
                    if(!touchMoved){
                        setOverlayDisplay(!overlayDisplayed);
                    } else {
                        touchMoved = false;
                    }
                }
            }
        >
        <style jsx>{`
            .image-preview {
                position: relative;
                display: block;
                width: 100vw;
                max-width: 50rem;
                height: 70vw;
                max-height: 35rem;
                background-color: white;
                overflow-x: hidden;
                overflow-y: hidden;
                border: 3px solid var(--bg);
                border-radius: 0.4rem;
                background-color: var(--bg);
            }
            img {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                object-fit: contain;
                height: auto;
                width: 100%;
                min-width: 100%;
            }
            .preview-overlay {
                transition: 0.25s;
                position: absolute;
                top: 0;
                left: 0;
                width: inherit;
                max-width: inherit;
                height: inherit;
                max-height: inherit;
                display: flex;
                flex-direction: column;
                align-items: center;
                opacity: 0;
                background-color: var(--highlight);
            }
            .displayed {
                opacity: 0.75;
            }
            .overlay-text {
                position: absolute;
                display: block;
                height: max-content;
                width: max-content;
                bottom: 3rem;
                margin: auto;
                max-width: 60%;
            }
            @media (max-width: 20rem){
                .overlay-text {
                    left: 1rem;
                    max-width: 15rem;
                }
            }
            h4 {
                margin: 0;
            }
            p {
                margin: 0;
            }
            .horizontal {
                display: flex;
                flex-direction: row;
            }
            .link {
                margin-right: 0.5rem;
                text-decoration: underline;
            }
            .links-label {
                margin-right: 0.5rem;
            }
        `}</style>
        {
            <img src={props.imgUrl || "/florida1.jpg"}></img>
        }
        <div className={`preview-overlay ${overlayDisplayed ? "displayed" : ""}`}>
            <div className="overlay-text">
                <h4>{props.title || "asdf"}</h4>
                <p>{props.description || "a few short sentences regarding section"}</p>
                <div className='horizontal'>
                    <p className='links-label'>Links: </p>
                    {
                        props.links.map( object => {
                            return <div className='link'><Link href={object.url || ""}>{object.name || "asdf"}</Link></div>
                        })
                    }
                </div>
            </div>
        </div>
    </div>)
}