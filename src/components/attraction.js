import Link from 'next/link';

export default function Attraction(props){
    return (<div className="attraction">
        <style jsx>{`
            .attraction {
                background-color: var(--highlight);
                max-width: 30rem;
                border-radius: 0.25rem;
            }
            img {
                width: 100%;
                height: auto;
                border-radius: 0.25rem 0.25rem 0 0;
            }
            .textual-content-container {
                width: 100%;
                height: max-content;
                padding: 1rem;
            }
            h3 {
                text-decoration: underline;
                cursor: pointer;
            }

        `}</style>
        <img src={props.imgSrc} />
        <div className="textual-content-container">
            <Link href={props.url || ""}><h3>{props.title || "sample title"}</h3></Link>
            <p>{props.description}</p>
        </div>
    </div>)
}