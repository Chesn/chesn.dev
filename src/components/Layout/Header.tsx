import React from 'react'

import Logo from '@/images/title.png'
import Logo2 from '@/images/title-2.png'

type LinkProps = {
  name: string;
  link: string;
}

type Props = {
  layout?: 'vertical' | 'horizontal';
}

export function Header ({
  layout = 'horizontal'
}: Props) {
  const horizontal = layout === 'horizontal'
  const links: LinkProps[] = [{
    name: 'Home',
    link: '/'
  }, {
    name: 'Essays',
    link: '/'
  }, {
    name: '#Chesn',
    link: 'https://github.com/Chesn'
  }]

  return (
    <div
      className={
        'relative px-4 md:px-8 w-full bg-gray-100 overflow-hidden' + (
          horizontal ? ' flex justify-between' : ''
        )
      }>
      <a
        className="block"
        href="/">
        <img
          className={
          'block mx-auto w-auto' + (
            horizontal ? ' -ml-1 mt-3 h-8' : ' mt-12 h-8 md:h-12'
          )
        }
          src={horizontal ? Logo2 : Logo}
          alt="Chesn develop essays"
        />
      </a>

      <nav className={
        'relative py-4' + (
          horizontal ? '' : ' mt-4 mx-auto'
        )}>
        <ul className={
          'flex space-x-6' + (
            horizontal ? ' justify-end' : ' justify-center'
          )
        }>
          {links.map(({ name, link }) => (
            <li
              key={name}
              className="block">
              <a
                href={link}
                className="text-gray-800 font-bold cursor-pointer hover:text-gray-500">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
