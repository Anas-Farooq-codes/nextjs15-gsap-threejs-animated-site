import { createClient } from '@/prismicio'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import React from 'react'
import { Logo } from './Logo'
import { Bounded } from './Bounded'
import { FooterPhysics } from './Footerphysics'
import { asImageSrc } from '@prismicio/client'

type Props = {}

export async function Footer({}: Props) {
  const client = createClient()
  const settings = await client.getSingle("settings")

  const boardTextureURLs = settings.data.footer_skateboards.map((item) => asImageSrc(item.skateboard, {h:600})).filter((url): url is string => Boolean(url))

  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-texture bg-zinc-900 text-white overflow-hidden'>
      <div className="relative h-[75vh] ~p-10/16 md:aspect-auto">
        <PrismicNextImage field={settings.data.footer_image} alt='' fill className='object-cover' width={1200} />

        {/* Physics boards */}

<FooterPhysics boardTextureURLs={boardTextureURLs} className='absolute inset-0 overflow-hidden'>

</FooterPhysics>

        {/* Logo */}
        <Logo className='pointer-events-none relative h-20 mix-blend-exclusion md:h-28' />
      </div>

      <Bounded as="nav">
        <ul className='flex flex-wrap justify-center gap-8 ~text-lg/xl'>
          {settings.data.navigation.map((item) => (
            <li key={item.link.text} className='hover:underline'>
              <PrismicNextLink field={item.link} />
            </li>
          ))}
        </ul>
      </Bounded>
      
      <p className='text-center mb-4'>
        &copy; {currentYear} <a href="https://www.linkedin.com/in/anas-farooq06/" title="Visit my LinkedIn profile">Anas Farooq.</a> All rights reserved. | Powered by <a href="https://prismic.io/">Prismic</a>
      </p>
    </footer>
  )
}