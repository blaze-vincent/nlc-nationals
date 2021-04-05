import Layout from '../components/layout';
import Attraction from '../components/attraction';

export default function Leisure(){
    return (<Layout>
        <style jsx>{`
            div {
                margin-top: 1rem;
            }
        `}</style>
        <h1>Leisure</h1>
        <div>
            <Attraction url="https://www.universalorlando.com/web/en/us/theme-parks/universal-studios-florida" imgSrc="https://www.universalorlando.com/webdata/k2/en/us/files/Images/escape-from-gringotts-ride-dragon1-m-00.jpg" title="Universal Orlando" description="Roughly 20 minutes from the Disney resorts is Universal Orlando Resort, where rides and events based on famous Universal movies can be enjoyed." />
        </div>
        <div>
            <Attraction url="https://seaworld.com/orlando/" imgSrc="https://seaworld.com/orlando/-/media/seaworld-orlando/images/featured-story/infinityfalls660x410.ashx?version=1_202007161141&h=410&w=660&la=en&hash=CD9E83FA2861E6E2B1ED478D69378A1D709ED8F3" title="Seaworld Orlando" description="Seaworld Orlando is located about 15 minutes from the Disney Resorts, where rides and aquariums among other attractions can be toured." />
        </div>
    </Layout>)
}