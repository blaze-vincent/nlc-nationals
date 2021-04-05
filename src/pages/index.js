import Layout from '../components/layout'
import SectionPreview from '../components/sectionPreview';
import SectionPreviewScroller from '../components/sectionPreviewScroller';

export default function Home() {

  const sectionPreviews = [
    <SectionPreview title="Event" imgUrl="/OrlandoNightSkyline.jpg" links={[ {name: "2021"}, {name: "Policies"}]}></SectionPreview>,
    <SectionPreview title="About" imgUrl="/florida1.jpg" links={[ {name: "This Site"}, {name: "BPA"}, {name: "NLC"}]}></SectionPreview>,
    <SectionPreview title="Orlando" imgUrl="/florida1.jpg" links={[ {name: "Leisure"}, {name: "Travel"}, {name: "Food"}]}></SectionPreview>
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
        flex-grow: 1;
      }
    `}</style>
    <div id="home-wrapper">
      <h1>BPA National Leadership Conference</h1>
      <SectionPreviewScroller sections={sectionPreviews} />
    </div>
  </Layout>)
}
