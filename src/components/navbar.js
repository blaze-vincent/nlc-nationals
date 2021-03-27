import Link from 'next/link'

/*
navbar has 4 modes:
    extended widescreen(default on wide screens)
    collapsed widescreen
    extended mobile
    collapsed mobile (default on mobile/narrow screens)
*/


export default function Navbar(props){
    return (<div id="navbar">
        <style jsx>{`
            #navbar {
                display: flex;
                flex-direction: column;
                justify-content: center;

                width: max-content;
                height: max-content;
                margin-right: 1rem;

                position: absolute;
                top: 0;
                right: 0;

                text-justify: auto;
                text-align: right;

                background-color: inherit;
                color: white;
            }

            h1 {
                margin: 0;
            }

            h3 {
                margin: 0;
            }

            .collection {
                display: flex;
                flex-direction: column;
            }
        `}</style>

        <h1>{props.pageTitle || 'SMOKE WEED'}</h1>
        <div className="collection">
            <Link href="">2021 EVENT</Link>
            <Link href="">POLICIES</Link>
        </div>
        <div className="collection">
            <h3>ABOUT</h3>
            <Link href="">BPA</Link>
            <Link href="">NLC</Link>
            <Link href="">THIS WEBSITE</Link>
        </div>
        <div className="collection">
            <h3>ORLANDO</h3>
            <Link href="">TRAVEL</Link>
            <Link href="">FOOD</Link>
            <Link href="">ENTERTAINMENT</Link>
        </div>

    </div>)
}