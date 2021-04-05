import Layout from "../components/layout";
import Attraction from '../components/attraction';

export default function Travel(){
    return (<Layout>
        <style jsx>{`
            h1, h2 {
                text-align: center;
            }
            .attraction {
                margin-bottom: 1rem;
            }
        `}</style>
        <h1>Travel</h1>
        <div className="airlines">
            <h2>Getting to Orlando</h2>
            <div className="attraction">
                <Attraction url="https://disneyworld.disney.go.com/faq/disney-springs/driving-alternatives/" title="todo" description="add airlines" imgSrc="https://blog-cdn.touringplans.com/blog/wp-content/uploads/2019/02/disneysprings-700x525.jpg" />
            </div>
        </div>
        <div className="inter-orlando">
            <h2>Within Orlando</h2>
            <div className="attraction">
                <Attraction url="https://disneyworld.disney.go.com/faq/disney-springs/driving-alternatives/" title="Foot Traffic" description="A pedestrian bridge facilitates foot travel to Disney Springs Marketplace from the Saratoga resort." imgSrc="https://blog-cdn.touringplans.com/blog/wp-content/uploads/2019/02/disneysprings-700x525.jpg" />
            </div>
            <div className="attraction">
                <Attraction url="https://www.evolvebikes.com/articles/disney-area-southwest-orlando-bike-rental-guide-pg174.htm" title="Bike Share" description="Evolve Bicycles provides bike rental services for Disney’s Saratoga Spring Resort guests." imgSrc="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/allbikes-1539286251.jpg" />
            </div>
            <div className="attraction">
                <Attraction url="https://disneyworld.disney.go.com/guest-services/resort-transportation/" title="Public Transportation" description="Public bus services are provided at multiple locations around the Disney resorts." imgSrc="https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2019/09/drb1304980239480239482-624x351.jpg" />
            </div>
            <div className="attraction">
                <Attraction url="https://www.enterprise.com/en/home.html" title="Enterprise Car Rentals" description="Enterprise provides car rental services in Orlando, with many locations to pick up a car close to your hotel or airport." imgSrc="https://www.rustourismnews.com/wp-content/uploads/2018/06/enterprise-rent-a-car-logo.jpg" />
            </div>
            <div className="attraction">
                <Attraction url="https://www.avis.com/en/home" title="Avis Car Rentals" description="Avis provides car rental services not dissimilar to Enterprise's." imgSrc="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1028672720%2F960x0.jpg%3Ffit%3Dscale" />
            </div>
            <div className="attraction">
                <Attraction url="https://www.uber.com/" title="Uber Lift Services" description="Uber drivers are abundant in densely populated areas including Orlando, in case you don't feel like renting a car." imgSrc="https://cdn.vox-cdn.com/thumbor/lxupBZAvFzbN_bmZ_zzprv_fbTk=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/62973946/akrales_181010_3013_0148.0.jpg" />
            </div>
            <div className="attraction">
                <Attraction url="https://www.lyft.com/" title="Lyft Lift Services" description="Lyft provides an alternative but similar service to Uber." imgSrc="https://www.calljacob.com/wp-content/uploads/2018/09/bigstock-Dayton-Circa-April-Car-237250156-1-800x533.jpg" />
            </div>
            <div className="attraction">
                <Attraction url="https://disneyworld.disney.go.com/guest-services/monorail-transportation/" title="Disney Monorail" description="Two monorails located around the Disney resorts offer free transportation to a number of points of interest." imgSrc="https://www.disneyfoodblog.com/wp-content/uploads/2020/07/2020-wdw-magic-kingdom-monorail-distancing-2.jpg" />
            </div>
        </div>
    </Layout>)
}