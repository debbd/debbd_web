// app/[slug]/page.tsx
import { client } from '@/sanity/client'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'

type PagePropsType = {
  params: Promise<{ slug: string }>
}

const pageBySlugQuery = `
  *[_type == "page" && slug.current == $slug][0] {
    title,
    body
  }
`

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(
    `*[_type == "page" && defined(slug.current)]{ "slug": slug.current }`
  )
  return slugs.map(({ slug }) => ({ slug }))
}

export default async function PageContent({ params }: PagePropsType) {
  const { slug } = await params

  const page = await client.fetch(pageBySlugQuery, { slug })

  if (!page) notFound()

  return (
    <main className="max-w-4xl mt-[64px] mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{page.title}</h1>

      <article className="prose prose-gray dark:prose-invert max-w-none">
        {page.body ? (
          <PortableText value={page.body} />
        ) : (
          <p className="text-gray-400 italic">No content yet.</p>
        )}
      </article>
    </main>
  )
}