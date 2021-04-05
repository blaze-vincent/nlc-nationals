import Layout from "../components/layout";

export default function AboutSite(){
    return (<Layout>
        <style jsx>{`
            * {
                text-align: center;
            }
            p {
                margin-right: 1rem; margin-left: 1rem;
                max-width: 35rem;
            }
        `}</style>
        <h1>About This Site</h1>
        <img src="https://www.scciowa.edu/_resources/images/interior_images/2021-computer-club.png" alt="Members of the SCC West Burlington Computer Club"></img>
        <p>This website was designed by Blaze Vincent (pictured leftmost) and Charles Taylor (second leftmost), representing the West Burlington Southeastern Community College Computer Club, our local chapter of BPA.</p>
        <p>This site was designed under the assumption that the National Leadership conference would take place in-person in Orlando. The event has since been shifted to an all-digital format. As such, some of the content on the website is of little relevance to the actual event that will take place this year.</p>
    </Layout>)
}