import UpArrow from './upArrow';

export default function GotoTop(){
    return (<div id="goto-top">
        <style jsx>{`
            #goto-top {
                position: fixed;
                bottom: 0;
                right: 0;
                height: 3rem;
                width: 3rem;
                border-radius: 1rem 0 0 0;
                background-color: var(--highlight);
                display: flex;
                border-left: 2px solid var(--bg); border-top: 2px solid var(--bg);
            }
        `}</style>
        <UpArrow/>
    </div>)
}