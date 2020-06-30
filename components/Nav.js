import React from 'react';
import Link from 'next/link';

export const Nav = () => {
  return (
    <div className='nav-wrapper content-wrapper'>
      <Link href='/'>
        <a>LOGO</a>
      </Link>
      <ul className='nav-list'>
        <li className='nav-list-item'>
          <Link href='/about'>
            <a>Our Story</a>
          </Link>
        </li>
        <li className='nav-list-item'>
          <Link href='/events'>
            <a>Events</a>
          </Link>
        </li>
        <li className='nav-list-item'>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
