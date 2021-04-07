// import {
//     Q_ALL_FRONT_PAGE_PRODUCTS,
//     Q_ALL_PAGES,
//     Q_ALL_POSTS_FOR_HOME,
//     Q_ALL_POSTS_WITH_SLUG,
//     Q_CURRENT_ALERT,
//     Q_PAGE_BY_SLUG,
//     Q_POST_AND_MORE_POSTS_1,
//     Q_POST_AND_MORE_POSTS_2,
//     Q_PREVIEW_POST_BY_SLUG,
//     Q_RELATED_ARTICLES,
//     Q_SHIPPING_INFO,
// } from './queries';
import { previewClient, sanityClient } from "./index";
import { Q_ALL_PRODUCTS } from "./queries";

import { Page, Product } from "./types";
const getUniqueArticles = (posts) => {
  const slugs = new Set();
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

const getClient = (preview = false) => (preview ? previewClient : sanityClient);

export async function getAllProducts() {
  const products = await getClient().fetch(Q_ALL_PRODUCTS);

  return products;
}

// export async function getCurrentAlert(): Promise<Alertbar> {
//     const data = await getClient().fetch(Q_CURRENT_ALERT);

//     return data;
// }

// export async function getAllPages(): Promise<Page[]> {
//     const pages = await getClient().fetch(Q_ALL_PAGES);

//     return pages;
// }

// export async function getPageBySlug(slug: string): Promise<Page> {
//     const page = await getClient().fetch(Q_PAGE_BY_SLUG, { slug });
//     return page;
// }

// export async function getShippingInformation(): Promise<ShippingInformation> {
//     const data = await getClient().fetch(Q_SHIPPING_INFO);
//     return data;
// }

// export async function getPreviewArticleBySlug(slug) {
//     const data = await getClient(true).fetch(Q_PREVIEW_POST_BY_SLUG, { slug });
//     return data[0];
// }

// export async function getAllArticlesWithSlug() {
//     const data = await sanityClient.fetch(Q_ALL_POSTS_WITH_SLUG);
//     return data;
// }

// export async function getAllArticlesForHome(preview = false, limit?: number) {
//     const results = await getClient(preview).fetch(Q_ALL_POSTS_FOR_HOME);
//     return getUniqueArticles(results).slice(0, limit);
// }

// export async function getArticlesByCategory(categories: string[], slug: string) {
//     const relatedArticles = await getClient()
//         .fetch(Q_RELATED_ARTICLES, { categories, slug })
//         .then((data) => getUniqueArticles(data.reduce((acc, curr) => acc.concat(curr.relatedArticles), [])))
//         .catch((error) => console.error({ error }));
//     return relatedArticles;
// }

// export async function getArticleAndMoreArticles(
//     slug,
//     preview,
// ): Promise<{ post: Article; moreArticles: Article[]; relatedArticles: Article[] }> {
//     const curClient = getClient(preview);
//     const [post, moreArticles] = await Promise.all([
//         curClient.fetch(Q_POST_AND_MORE_POSTS_1, { slug }).then((res) => res?.[0]),
//         curClient.fetch(Q_POST_AND_MORE_POSTS_2, { slug }),
//     ]);
//     const categories = post.categories.map((cat) => cat.title);
//     const relatedArticles = post.categories.length ? await getArticlesByCategory(categories, slug) : null;

//     return { post, moreArticles: getUniqueArticles(moreArticles), relatedArticles };
// }

// export async function getAllFrontPageProducts() {
//     const results = await getClient().fetch(Q_ALL_FRONT_PAGE_PRODUCTS);
//     return results;
// }
