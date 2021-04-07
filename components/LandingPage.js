import RenderSections from "./RenderSections";

function LandingPage({ page = {} }) {
  const { content = [] } = page;
  // console.log(`content`, content);
  return <RenderSections sections={content} />;
}

export default LandingPage;
