import Link from 'next/link';

export default function Footer(){
    return (<footer>
        <style jsx>{`
            footer {
                width: inherit;
                background-color: var(--highlight);
                display: flex;
                flex-direction: column;
                height: max-content;
                padding: 1rem;
                justify-content: center;
                align-items: center;
                margin-top: 1rem;
            }
            img {
                width: 10rem;
                height: auto;
            }
            .link {
                text-decoration: underline;
            }
        `}</style>

        <img src="/bpa-white.png" alt="BPA logo" />
        <div className="link"><Link href="https://bpa.org/nlc/">Official NLC website</Link></div>
    </footer>)
}