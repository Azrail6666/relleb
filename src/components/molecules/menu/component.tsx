import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from './style.module.scss';
import Logo from '../../atoms/logo/component';
import Social from '../../atoms/social/component';
import Select from '../../atoms/select/component';

const Menu: FC = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const [active, setActive] = useState<number>(-1);
  const [sub, setSub] = useState<number>(-1);

  const menuArr = [
    {
      name: 'Authentication Service',
      to: '/authentication',
    },
    {
      name: 'Shop Watches',
      to: '/',
      sub: [
        {
          name: 'submenu 1',
          to: '/',
        },
        {
          name: 'submenu 2',
          to: '/',
        },
        {
          name: 'submenu 3',
          to: '/',
        },
      ],
    },
    {
      name: 'Sell Fast',
      to: '/',
    },
    {
      name: 'Fake vs Real Guide',
      to: '/',
    },
    {
      name: 'Blog',
      to: '/',
    },
  ];

  useEffect(() => {
    if (menu) {
      document.body.classList.add('hidden');
    } else {
      document.body.classList.remove('hidden');
    }
  }, [menu]);

  useEffect(() => {
    document.addEventListener('click', handleMenu);
    return () => {
      document.removeEventListener('click', handleMenu);
    };
  }, []);

  function handleMenu(event: any) {
    if (event.target.dataset.menuIndex) {
      setActive(Number(event.target.dataset.menuIndex));
    }

    if (event.target.dataset.menuSub && Number(event.target.dataset.menuSub) < 0) {
      setSub(Number(event.target.dataset.menuIndex));
    } else {
      setSub(-1);
    }

    if (event.target.dataset.menuIndex) {
      if (event.target.dataset.menuIndex && event.target.dataset.menuSub) return;
      setMenu(false);
    }
  }

  function menuEl() {
    return menuArr.map((item, index) => {
      if (item.sub) {
        return (
          <li
            key={index.toString()}
            className={`${active === index ? styled.menuUlActive : undefined} ${sub === index ? styled.menuUlSub : undefined}`}
          >
            <Link data-menu-index={index} data-menu-sub={sub} to={item.to}>
              <span>{item.name}</span>
              <svg width="11" height="8" viewBox="0 0 11 8" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.58338 0L5.46924 4.28764L1.35509 0L0 1.41223L5.46924 7.11211L10.9385 1.41223L9.58338 0Z" />
              </svg>
            </Link>
            <ul>
              {
                item.sub.map((sub, subIndex) => (
                  <li key={subIndex.toString()}>
                    <Link
                      data-menu-index={index}
                      to={sub.to}
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </li>
        );
      }
      return (
        <li key={index.toString()} className={active === index ? styled.menuUlActive : undefined}>
          <Link data-menu-index={index} to={item.to}>{item.name}</Link>
        </li>
      );
    });
  }

  return (
    <div className={styled.menu}>
      <div
        className={`${styled.burger} ${menu && styled.menuActive}`}
        onClick={() => setMenu(!menu)}
        onKeyDown={() => ({})}
        role="button"
        tabIndex={0}
      >
        <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="22" height="2.4257" rx="1" fill="black" />
          <rect y="7.28711" width="22" height="2.4257" rx="1" fill="black" />
          <rect y="14.5743" width="22" height="2.4257" rx="1" fill="black" />
        </svg>

        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="15.5564" width="22" height="2.00121" rx="1" transform="rotate(-45 0 15.5564)" fill="white" />
          <rect x="1.41507" width="22" height="2.00121" rx="1" transform="rotate(45 1.41507 0)" fill="white" />
        </svg>
      </div>

      <div className={`${styled.inner} ${menu && styled.innerActive}`}>
        <div className={styled.innerLogo}>
          <Logo invert />
        </div>
        <div className={styled.innerBg} />

        <ul
          className={styled.menuUl}
          role="menu"
          tabIndex={0}
        >
          {
            menuEl()
          }
        </ul>

        <div className={styled.menuSocial}>
          <Social />
        </div>

        <ul className={styled.menuSelect}>
          <li>
            <Select className={styled.menuSelectItem}>
              <option value="USD">USD</option>
              <option value="UAH">UAH</option>
            </Select>
          </li>
          <li>
            <Select className={styled.menuSelectItem}>
              <option value="EN">EN</option>
              <option value="UA">UA</option>
            </Select>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
