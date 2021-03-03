import React from 'react'
import { Link } from 'gatsby'

import Logo from '@/images/title.png'

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
    name: '#Chesn',
    link: 'https://github.com/Chesn'
  }, {
    name: 'Blog',
    link: '/'
  }, {
    name: 'About',
    link: '/'
  }]

  return (
    <div className="relative w-full bg-gray-100">
      <div className={
        'mx-auto max-w-screen-md overflow-hidden' + (
          horizontal ? ' flex justify-between' : ''
        )
      }>
        <a
          className="block hover:opacity-70"
          href="/">
          <img
            className={
            'block mx-auto w-auto h-12' + (
              horizontal ? ' mt-1' : ' mt-12'
            )
          }
            src={Logo}
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
                <Link
                  to={link}
                  className="text-gray-800 font-bold cursor-pointer hover:text-gray-500">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
