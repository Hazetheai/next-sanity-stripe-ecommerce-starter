import { SanityCodegenConfig } from "sanity-codegen";

const config: SanityCodegenConfig = {
  schemaPath: "./studio/schemas/schema.js",
  outputPath: "./utils/sanity/types.ts",
};

export default config;
