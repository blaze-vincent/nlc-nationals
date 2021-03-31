import Layout from '../components/layout'
import SectionPreview from '../components/sectionPreview';

export default function Home() {
  return (<Layout>
    <style jsx>{`
      h1 {
        text-align: center;
        font-weight: 500;
      }
      #home-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-grow: 1;
      }
    `}</style>
    <div id="home-wrapper">
      <h1>BPA National Leadership Conference</h1>
      <SectionPreview title="Event" imgUrl="/OrlandoNightSkyline.jpg" links={[ {name: "2021"}, {name: "Policies"}]}></SectionPreview>
      <SectionPreview title="About" imgUrl="/florida1.jpg" links={[ {name: "This Site"}, {name: "BPA"}, {name: "NLC"}]}></SectionPreview>
      <SectionPreview title="Orlando" imgUrl="/florida1.jpg" links={[ {name: "Leisure"}, {name: "Travel"}, {name: "Food"}]}></SectionPreview>
    </div>
  </Layout>)
}
