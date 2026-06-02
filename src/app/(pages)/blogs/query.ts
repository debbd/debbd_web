export const CATEGORIES_QUERY = `*[_type == "category" && defined(slug.current)] | order(title asc) {
  _id,
  title,
  "slug": slug.current
}`;

export const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
] | order(publishedAt desc)[0...50] {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  tagline,
  meta,
  "image_caption": Thumbnail.caption,
  "thumbnail": Thumbnail.asset->url,
  "author": author->{ name, "avatar": avatar.asset->url },
  "categories": categories[]->{ _id, title, "slug": slug.current }
}`;

export const UPCOMING_POSTS_QUERY = `
*[
  _type == "post"
  && defined(slug.current)
  && upcoming == true
]
| order(publishedAt desc)[0...50] {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  tagline,
  meta,
  "image_caption": Thumbnail.caption,
  "thumbnail": Thumbnail.asset->url,
  "author": author->{
    name,
    "avatar": avatar.asset->url
  },
  "categories": categories[]->{
    _id,
    title,
    "slug": slug.current
  }
}
`;

export const POSTS_BY_CATEGORY_QUERY = `
*[
  _type == "post"
  && defined(slug.current)
  && $categorySlug in categories[]->slug.current
]
| order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  tagline,
  meta,
  "image_caption": Thumbnail.caption,
  "thumbnail": Thumbnail.asset->url,
  "author": author->{
    name,
    "avatar": avatar.asset->url
  },
  "categories": categories[]->{
    _id,
    title,
    "slug": slug.current
  }
}
`;
