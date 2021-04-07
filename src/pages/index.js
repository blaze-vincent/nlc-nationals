import Layout from '../components/layout'
import SectionPreview from '../components/sectionPreview';
import SectionPreviewScroller from '../components/sectionPreviewScroller';

export default function Home() {

  const sectionPreviews = [
    <SectionPreview title="Event" imgUrl="/OrlandoNightSkyline.jpg" links={[ {name: "2021", url: "/2021"}, {name: "Policies", url: "/policies"}]} description="Learn more about the 2021 Fireworks-themed National Leadership Conference." />,
    <SectionPreview title="Orlando" imgUrl="/florida1.jpg" links={[ {name: "Leisure", url: "/leisure"}, {name: "Travel", url: "/travel"}, {name: "Food", url: "/food"}]}  description="See the special airline deals offered to attendants of the 2021 NLC in Orlando as well as things to do once there."/>,
    <SectionPreview title="About" imgUrl="/florida-lake.jpg" links={[ {name: "This Site", url: "/about-site"}, {name: "BPA", url: "/bpa"}, {name: "NLC", url: "/about-nlc"}]} description="More information regarding BPA, NLC, and this site." />
  ]

  return (<Layout>
    <style jsx>{`
      h1 {
        margin: 0; margin-bottom: 0.5rem;
        text-align: center;
        font-weight: 500;
      }
      #home-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
      }
    `}</style>
    <div id="home-wrapper">
      <h1>BPA National Leadership Conference</h1>
      <SectionPreviewScroller sections={sectionPreviews} />
    </div>
  </Layout>)
}
