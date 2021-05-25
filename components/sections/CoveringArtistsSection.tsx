import CoveringArtists from "components/composer/CoveringArtists";
import React from "react";
import { CoveringArtistSection as CoveringArtistSectionProps } from "utils/sanity/manualTypes";

const CoveringArtistsSection: React.FC<CoveringArtistSectionProps> = (
  props
) => {
  return (
    <section className="container px-5 py-5 mx-auto">
      <CoveringArtists {...props} />
    </section>
  );
};

export default CoveringArtistsSection;
