import Router from 'next/router';
import NavbarItemCollapsible from './navbarItemCollapsible';
import HamburgerMenu from './hamburgerMenu';
import { useState, useEffect } from 'react';
import GotoTop from './gotoTop';


export default function Navbar(props){

    const eventLinks = [ {name: "2021", dest: "/2021"}, {name: "Policies", dest: "/policies"} ]
    const orlandoLinks = [ {name: "Leisure", dest: "/leisure"}, {name: "Travel", dest: "/travel"}, {name: "Food", dest: "/food"} ]
    const aboutLinks = [ {name: "This site", dest: "/about-site"}, {name: "BPA", dest: "/bpa"}, {name: "NLC", dest: "/about-nlc"} ]

    //determine sreen width on first render, update on resize
    const [windowWidth, setWindowWidth] = useState(NaN);
    useEffect(()=>{
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', e => {
            setWindowWidth(window.innerWidth);
        })
    }, [])

    //check for scroll position to add "back to top" button to bottom of the page
    const [scrollY, setScrollY] = useState(NaN);
    useEffect(()=>{
        setScrollY(window.scrollY);
        window.addEventListener("scroll", e => {
            setScrollY(window.scrollY);
        })
    }, [])
    const scrollToTop = async e => {
        try {
            await window.scroll({
                top: 0,
                behavior: 'smooth'
            }).then(()=>{setScrollY(0)});
        } catch (error) {
            //todo
        }
    }

    return (<div id="navbar">
        <style jsx>{`
            #navbar {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

                width: inherit;
                height: max-content;
                padding: 1rem;

                position: sticky;
                top: 0px;

                text-justify: auto;
                text-align: right;

                background-color: inherit;
                border-bottom: 2px var(--highlight) solid;
                color: white;

                margin-bottom: 1rem;
                z-index: 1;

            }

            h1 {
                margin: 0;
            }

            img {
                height: auto;
                width: 12rem;
            }
            img:hover {
                cursor: pointer;
            }
            .horizontal {
                display: flex;
                flex-direction: row;
            }

        `}</style>

        {
            scrollY ? scrollY > 0
            ? <div onClick={scrollToTop} onTouchEnter={scrollToTop}><GotoTop /></div> : "" : ""
        }
        <img src="/bpa-ignite-color.png" alt="BPA Envision, Empower, Ignite logo." onClick={e=>{Router.push('/')}}/>
        {
            windowWidth ? windowWidth > 600 ? (
                <div className="horizontal">
                    <NavbarItemCollapsible title="Event" links={eventLinks}/>
                    <NavbarItemCollapsible title="Orlando" links={orlandoLinks}/>
                    <NavbarItemCollapsible title="About" links={aboutLinks}/>
                </div>
            ) : <HamburgerMenu sections={[{title: "Event", links: eventLinks}, {title: "Orlando", links: orlandoLinks}, {title: "About", links: aboutLinks}]} /> : ""
        }
    </div>)
}