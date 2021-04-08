import { Page } from "utils/sanity/types";
import RenderSections from "./RenderSections";

interface Props {
  page: Page;
}
const LandingPage: React.FC<Props> = ({ page = {} }) => {
  const { content = [] } = page;
  // console.log(`content`, content);
  return <RenderSections sections={content} />;
};

export default LandingPage;
