// lib/queries.ts
import { groq } from 'next-sanity'

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    tagline,
    meta,
    publishedAt,
    body,
    "author": author->{ name, image },
    "categories": categories[]->{ title },
    Thumbnail {
      asset,
      caption,
      hotspot,
      crop
    }
  }
`