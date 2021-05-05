import { Page } from "utils/sanity/types";
import RenderSections from "./utils/RenderSections";

interface Props {
  page: Page;
}
const LandingPage: React.FC<Props> = ({ page = {} }) => {
  const { content = [] } = page;

  return <RenderSections sections={content} />;
};

export default LandingPage;
