import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { upperFirst } from "lodash";
import * as SectionComponents from "../../sections";
import { Page } from "utils/sanity/types";

function resolveSections(section) {
  // eslint-disable-next-line import/namespace
  const Section = SectionComponents[upperFirst(section._type)];

  if (Section) {
    return Section;
  }

  console.error("Cant find section", section); // eslint-disable-line no-console
  return null;
}

interface Props {
  sections: Page["content"];
}
const RenderSections: React.FC<Props> = ({ sections }) => {
  if (!sections) {
    console.error("Missing sections");
    return <div>Missing sections</div>;
  }

  return (
    <Fragment>
      {sections.map((section) => {
        const SectionComponent = resolveSections(section);
        if (!section.active) return null;
        if (!SectionComponent) {
          return <div key={section._key}>Missing section {section._type}</div>;
        }
        return <SectionComponent {...section} key={section._key} />;
      })}
    </Fragment>
  );
};

// RenderSections.propTypes = {
//   sections: PropTypes.arrayOf(
//     PropTypes.shape({
//       _type: PropTypes.string,
//       _key: PropTypes.string,
//       section: PropTypes.instanceOf(PropTypes.object),
//     })
//   ),
// };

export default RenderSections;
