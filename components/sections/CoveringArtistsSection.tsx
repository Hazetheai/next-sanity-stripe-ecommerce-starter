import CoveringArtists from "components/composer/CoveringArtists";
import React from "react";
import { CoveringArtistSection as CoveringArtistSectionProps } from "utils/sanity/manualTypes";

const CoveringArtistsSection: React.FC<CoveringArtistSectionProps> = (
  props
) => {
  return (
    <section className="mt-12">
      <CoveringArtists {...props} />
    </section>
  );
};

export default CoveringArtistsSection;
