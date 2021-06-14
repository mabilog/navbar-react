import React from 'react';

import { AiFillHome, AiOutlineUser, AiOutlineShopping } from 'react-icons/ai';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';
import { IoIosPaper } from 'react-icons/io';
import { IoNewspaperSharp, IoShirtOutline } from 'react-icons/io5';
import { GiArmoredPants, GiConverseShoe } from 'react-icons/gi';
import { FaUserFriends } from 'react-icons/fa';
import { BiMessageSquareDetail, BiSupport } from 'react-icons/bi';

const SidebarData = [
  {
    title: 'Overview',
    // path: '/overview',
    icon: <AiFillHome />,
    iconClosed: <RiArrowDownSFill/>,
    iconOpened: <RiArrowUpSFill/>,
    subNav: [
      {
        title: 'Users',
        path: '/overview/users',
        icon: <AiOutlineUser />,
      },
      {
        title: 'Friends',
        path: '/overview/friends',
        icon: <FaUserFriends />,
      }
    ],
  },
  {
    title: 'Reports',
    // path: '/reports',
    icon: <IoNewspaperSharp />,
    iconClosed: <RiArrowDownSFill/>,
    iconOpened: <RiArrowUpSFill/>,
    subNav: [
      {
        title: '2021',
        path: '/reports/2021',
        icon: <IoIosPaper />,
      },
      {
        title: '2020',
        path: '/reports/2020',
        icon: <IoIosPaper />,
      },
      {
        title: '2019',
        path: '/reports/2019',
        icon: <IoIosPaper />,
      },
    ],
  },
  {
    title: 'Shop',
    path: '/shop',
    icon: <AiOutlineShopping />,
    iconClosed: <RiArrowDownSFill/>,
    iconOpened: <RiArrowUpSFill/>,
    subNav: [
      {
        title: 'Tops',
        path: '/shop/tops',
        icon: <IoShirtOutline />,
      },
      {
        title: 'bottoms',
        path: '/shop/bottoms',
        icon: <GiArmoredPants />,
      },
      {
        title: 'shoes',
        path: '/shop/shoes',
        icon: <GiConverseShoe />,
      },
    ],
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <BiMessageSquareDetail />,
  },
  {
    title: 'Support',
    path: '/support',
    icon: <BiSupport />,
  },
]

export default SidebarData
