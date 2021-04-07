const route = `
*[_type == "route" && slug.current == $slug][0]{
    page->{
    ...,
    content[]{
      ...,
      ctas[]{
        ...,
        "route": route->slug
      }
    }
  }
  }
`;
