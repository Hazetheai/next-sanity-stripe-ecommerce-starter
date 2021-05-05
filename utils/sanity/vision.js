const route = `
*[_type == "route" && slug.current == $slug][0]{
  page->{
  ...,
  content[]{
    ...,
    productCategories->{...},
    products[]->{
      ...
    },
    ctas[]{
      ...,
      "route": route->
    }
  }
}
}
`;

const siteConfig = `

*[_type == "siteConfig"]{
  mainNavigation[]->{...,page->},
  ...,
   footerNavigation[]{
  ...,
    footerNavigationItem[]->{
      ...,
      "page":page->title,
      "slug":slug.current
    }
  },
frontPage->,
}

`;
