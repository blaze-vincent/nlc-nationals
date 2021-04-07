import Layout from '../components/layout';
import Link from 'next/link';

export default function TwentyTwentyOne(){
    return (<Layout>
        <style jsx>{`
            img {
                width: 30rem;
                max-width: 80vw;
                cursor: pointer;
            }
            * {
                text-align: center;
            }
            p {
                margin-left: 1rem;
                margin-right: 1rem;
            }
            .link {
                text-decoration: underline;
                cursor: pointer;
                display: inline-block;
            }
        `}</style>
        <h1>2021 National Leadership Conference</h1>
        <Link href="https://bpa.org/nlc/"><img src="/fireworks.png" alt="2021 NLC Envision, Empower, Ignite logo."></img></Link>
        
        <p>The theme of this year's NLC is <b>Envision, Empower, Ignite</b>.</p>
        <p>The event would have taken place in <b>Orlando, Florida</b>, from <b>April 26 - May 9</b></p>
        <p>It will now instead take place entirely virtually on the same dates.</p>
        <p>
            The official event schedule can be found <div className="link">
                <Link href="https://34kjmn3xy614nqsp3bsgpb13-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/SOE-NLC-2021-TENTATIVE-10.01.20.pdf">
                    here
                </Link>
            </div>
            .
        </p>

    </Layout>)
}