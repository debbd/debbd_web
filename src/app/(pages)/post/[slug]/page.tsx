// app/blog/[slug]/page.tsx
import { client, urlFor } from '@/sanity/client'
import { postBySlugQuery } from '@/lib/queries'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Badge } from '@radix-ui/themes'

type BlogPagePropsType = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(
    `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`
  )
  return slugs.map(({ slug }) => ({ slug }))
}

// Portable text component overrides (optional but recommended)
const ptComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8">
        <Image
          src={urlFor(value).width(800).url()}
          alt={value.alt ?? ''}
          width={800}
          height={450}
          className="rounded-lg w-full"
        />
      </div>
    ),
  },
  marks: {
    link: ({ value, children }: any) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer"
         className="underline text-blue-600 hover:text-blue-800">
        {children}
      </a>
    ),
  },
}

export default async function BlogPage({ params }: BlogPagePropsType) {
  const { slug } = await params

  const post = await client.fetch(postBySlugQuery, { slug })

  if (!post) notFound()

  return (
    <main className="max-w-4xl mt-[64px] mx-auto px-4 py-12">
      {/* Thumbnail */}
      {post.Thumbnail?.asset && (
        <div className="mb-8 rounded-xl overflow-hidden">
          <Image
            src={urlFor(post.Thumbnail).width(900).url()}
            alt={post.Thumbnail.caption ?? post.title}
            width={900}
            height={500}
            className="w-full object-cover"
          />
         
        </div>
      )}

      {/* Meta */}
      <div className="mb-2 flex gap-2 flex-wrap">
        {post.categories?.map((cat: any) => (
          <Badge key={cat.title}
          radius='full'
            >
            {cat.title}
          </Badge>
        ))}
      </div>

      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>

      {post.tagline && (
        <p className="text-xl text-gray-500 mb-4">{post.tagline}</p>
      )}

      <div className="flex items-center gap-3 mb-8 text-sm text-gray-400">
        {post.author?.name && <span>By {post.author.name}</span>}
        {post.publishedAt && (
          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
        )}
      </div>

      {/* Body */}
      <article className="prose prose-gray dark:prose-invert max-w-none">
        {post.body ? (
          <PortableText value={post.body} components={ptComponents} />
        ) : (
          <p className="text-gray-400 italic">No content yet.</p>
        )}
      </article>
    </main>
  )
}


