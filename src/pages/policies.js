import Layout from "../components/layout";
import Link from 'next/link';

export default function Policies(){
    return (<Layout>
        <style jsx>{`
            * {
                text-align: center;
            }
            p {
                margin-left: 1rem;
                margin-right: 1rem;
                max-width: 45rem;
                width: 90vw;
            }
            li {
                width: max-content;
                width: 90vw;
                max-width: 35rem;
            }
            ul {
                padding: 0;
                list-style-type: none;
            }
            h2 {
                text-decoration: underline;
                cursor: pointer;
            }
            .guideline-container {
                width: max-content;
            }
        `}</style>
        <h1>Policies</h1>
        <Link href="https://34kjmn3xy614nqsp3bsgpb13-wpengine.netdna-ssl.com/wp-content/uploads/sites/9/2019/02/NLC-Dress-Code-Policy.pdf">
            <h2>Dress Code</h2>
        </Link>
        <p>BPA members not in compliance with dress code will not be allowed to participate in any session or competitive event.</p>
        <p>Additionally, BPA members not in compliance with dress code will not be allowed on stage.</p>
        <p>Members refused entrance to an event will be given the opportunity to change into appropriate attire immediately and participate/compete in the event. No additional time will be given for time missed.</p>
        <p>Members also have the right to grieve the issue immediately after being refused entrance. Grievance of the Dress Code policy will not be accepted if not received in writing at Competitive Events headquarters within 15 minutes of the infraction in question.</p>
        <div className="guideline-container">
            <h3>Professional</h3>
            <ul>
                <li>Dress slacks, dress shirt, and tie</li>
                <li>Pant or skirt suit</li>
                <li>Suit, dress shirt, and tie</li>
                <li>Dress skirt or dress slacks with coordinated blouse and/or sweater</li>
                <li>Sport coat, coordinated dress slacks, dress shirt, and tie</li>
                <li>BPA blazer with dress skirt or dress slacks with blouse or sweater</li>
                <li>BPA blazer with dress slacks, dress shirt, and tie</li>
            </ul>
        </div>
        <div className="guideline-container">
            <h3>Casual</h3>
            <ul>
                <li>Sportswear (jeans), pants, and shirt, t-shirt, and shorts</li>
            </ul>
        </div>
        <div className="guideline-container">
            <h3>Forbidden</h3>
            <ul>
                <li>Strapless, spaghetti straps, tube tops, halter tops, midriff tops</li>
                <li>Spandex, lycra or transparent clothing</li>
                <li>Cut-offs or ragged clothing</li>
                <li>Clothing with inappropriate words and pictures</li>
                <li>Swim suits not covered with appropriate attire outside designated areas</li>
            </ul>
        </div>

    </Layout>)
}