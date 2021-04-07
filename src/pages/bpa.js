import Link from "next/link";
import Layout from "../components/layout";

export default function Bpa(){
    return (<Layout>
        <style jsx>{`
            p {
                width: 90vw;
                max-width: 35rem;
                text-align: center;
            }
            img {
                max-width: 90vw;
                cursor: pointer;
            }
        `}</style>
        <h1>About BPA</h1>
        <Link href="https://bpa.org"><img src="/bpa-spread.png" alt="Business Professionals of America text, stylized with BPA colors and fonts." /></Link>
        
        <p>Business Professionals of America is the premier CTSO (Career and Technical Student Organization) for students pursuing careers in business management, information technology, finance, office administration, health administration and other related career fields.</p>
        <p>With 45,000 members in over 1,800 chapters across 25 states and Puerto Rico as well as international presence in China and Peru, BPA is a co-curricular organization that supports business and information technology educators by offering co-curricular exercises based on national standards.</p>
    </Layout>)
}