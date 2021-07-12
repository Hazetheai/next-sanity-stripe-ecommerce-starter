import S from "@sanity/desk-tool/structure-builder";
import {
  MdWeb,
  MdSettings,
  MdWhatshot,
  MdLooks,
  MdShoppingBasket,
  MdPersonOutline,
} from "react-icons/md";
import ads from "./ads";
import categories from "./categories";
import person from "./person";
import React from "react";

import siteSettings from "./siteSettings";

import TotebagPreview from "../components/previews/banners/swag/TotebagPreview";
import ShirtPreview from "../components/previews/banners/swag/ShirtPreview";
import ProductPagePreview from "../components/previews/product/ProductPagePreview";
import ProductsOverviewPreview from "../components/previews/product/ProductsOverviewPreview";
// Hide document types that we already have a structure definition for
const hiddenDocTypes = (listItem) =>
  ![
    "category",
    "person",
    "popup",
    "sampleProject",
    "vendor",
    "siteSettings",
    "ad",
    "page",
    "product",
    "route",
    "siteConfig",
    "brand",
    "creativeConfig",
    "staticRoute",
    "photographer",
    "swag",
    "artist",
  ].includes(listItem.getId());

const JsonPreview = ({ document }) => (
  // The JSON preview
  <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
);

// export const getDefaultDocumentNode = () => {
//   // Give all documents the JSON preview,
//   // as well as the default form view
//   return S.document().views([
//     S.view.form(),
//     S.view.component(JsonPreview).title("JSON"),
//   ]);
// };

export default () =>
  S.list()
    .title("Pulp Inc.")
    .items([
      S.documentTypeListItem("product")
        .title("Products")
        .icon(MdShoppingBasket),
      S.listItem()
        .title("Website")
        .icon(MdWeb)
        .child(
          S.list()
            .title("Website")
            .items([
              S.listItem()
                .title("Site configuration")
                .icon(MdSettings)
                .child(
                  S.document()
                    .title("Site configuration")
                    .schemaType("siteConfig")
                    .documentId("siteConfig")
                ),
              S.documentTypeListItem("route").title("Routes"),
              S.documentTypeListItem("staticRoute").title("Static Routes"),
              S.documentTypeListItem("page").title("Pages"),
              S.listItem()
                .title("Featured Content")
                .icon(MdSettings)
                .child(
                  S.document()
                    .title("Featured Content Configuration")
                    .schemaType("creativeConfig")
                    .documentId("creativeConfig")
                ),
            ])
        ),
      S.listItem()
        .title("Artist")
        .icon(MdPersonOutline)
        .child(
          S.document()
            .title("Artist Info")
            .schemaType("artist")
            .documentId("artistInfo")
        ),
      // ads,
      // categories,
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);

export const getDefaultDocumentNode = (props) => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const { schemaType } = props;
  if (schemaType === "product") {
    return S.document().views([
      S.view.form(),
      S.view.component(JsonPreview).title("JSON"),
      S.view.component(ProductsOverviewPreview).title("Products Overview"),
      S.view.component(ProductPagePreview).title("Product Page"),
    ]);
  }
  if (schemaType === "swag") {
    return S.document().views([
      S.view.form(),
      S.view.component(JsonPreview).title("JSON"),
      S.view.component(TotebagPreview).title("Totebag"),
      S.view.component(ShirtPreview).title("Shirt"),
    ]);
  }

  return S.document().views([
    S.view.form(),
    S.view.component(JsonPreview).title("JSON"),
  ]);
};
