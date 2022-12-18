import type { NextApiRequest, NextApiResponse } from 'next'
import RSS from 'rss'

import { getAllPosts } from '@/lib/mdx'

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  const feed = new RSS({
    title: '小康 Blog',
    description: "Hong's personal website and blog",
    site_url: 'https://joomadeung.com',
    feed_url: 'https://joomadeung.com/feed.xml',
    language: 'en',
    image_url: 'https://joomadeung.com/static/images/og/og.png',
  })

  const allPosts = getAllPosts()

  allPosts.map((post) => {
    const { title, summary, date, slug } = post

    feed.item({
      title: title,
      url: `https://joomadeung.com/blog/${slug}`,
      date: date,
      description: summary,
      author: '小康',
    })
  })

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  )

  return res.status(200).send(feed.xml({ indent: true }))
}

export default handler
