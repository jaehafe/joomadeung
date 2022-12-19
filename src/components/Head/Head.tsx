'use client'

import { usePathname } from 'next/navigation'
import { NextSeo, NextSeoProps } from 'next-seo'

import { favicons } from '@/lib/favicons'

type HeadProps = NextSeoProps

const Head = (props: HeadProps) => {
  const pathname = usePathname()
  const { title, description = 'Adam', ...rest } = props

  return (
    <>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width' />
      <NextSeo
        useAppDir={true}
        titleTemplate='%s | Adam Blog'
        title={title}
        defaultTitle='Adam – Developer'
        description={description}
        canonical={`https://joomadeung.com${pathname}`}
        twitter={{
          cardType: 'summary_large_image',
          site: '@jaehafe',
          handle: '@jaehafe',
        }}
        openGraph={{
          url: `https://joomadeung.com${pathname}`,
          type: 'website',
          title: title ?? 'Adam – Developer',
          description,
          images: [
            {
              url: 'https://joomadeung.com/static/images/og/og.png',
              width: 1200,
              height: 630,
              alt: description,
            },
          ],
        }}
        additionalLinkTags={[...favicons]}
        {...rest}
      />
    </>
  )
}

export default Head
