import Navbar from '../components/navbar';
import Head from 'next/head';
import Footer from './footer';

export default function Layout(props){

    return (<div id="layout">
        <style jsx>{`
            #layout {
                width: inherit;
                height: max-content;
                min-height: 100%;
                background-color: var(--bg);
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
            }
        `}</style>
        <Head>
            <title>{props.title || "BPA NLC 2021"}</title>
        </Head>
        <Navbar />
        {props.children}
        <Footer />
    </div>)
}