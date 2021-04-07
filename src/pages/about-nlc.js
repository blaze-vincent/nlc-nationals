import Link from "next/link";
import Layout from "../components/layout";

export default function AboutNlc(){
    return (<Layout>
        <style jsx>{`
            p {
                width: 90vw;
                max-width: 35rem;
                text-align: center;
            }
            img {
                max-width: 100vw;
                width: 50rem;
                cursor: pointer;
            }
        `}</style>
        <h1>About NLC</h1>
        <Link href="https://bpa.org/nlc/"><img src="https://wsspaper.com/wp-content/uploads/2019/05/IMG_6968.jpg" alt="Awards ceremony from a previous year's National Leadership Conference."/></Link>
        <p>The National Leadership Conference is an annual event held by Business Professionals of America where chapters from across the country gather in various competitions. Events include but are not limited to business, computer, and design-related competitons.</p>
        <p>Typically, events are held in a physical location within the United States, but due to COVID-19, this year's NLC is taking place entirely virtually.</p>
    </Layout>)
}