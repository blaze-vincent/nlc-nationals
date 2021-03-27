import Navbar from '../components/navbar';

export default function Layout(props){
    return (<div id="layout">
        <style jsx>{`
            #layout {
                width: inherit;
                height: inherit;
                background-color: var(--bg);
            }
        `}</style>
        <Navbar />
        {props.children}
    </div>)
}