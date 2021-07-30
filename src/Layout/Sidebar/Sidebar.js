import React from 'react';
import './Sidebar.scss';
import { ReactComponent as Logo } from '../../resources/logo.svg';
import { ReactComponent as HomeIcon } from '../../resources/icons/home.svg';
import { ReactComponent as SettingsIcon } from '../../resources/icons/settings.svg';
import { ReactComponent as OrdersIcon } from '../../resources/icons/orders.svg';
import { ReactComponent as HelpAndSupportIcon } from '../../resources/icons/help-and-support.svg';
import { ReactComponent as NotificationIcon } from '../../resources/icons/notification.svg';
import { ReactComponent as MenuIcon } from '../../resources/icons/menu.svg';
import Tag from '../../components/Tag/Tag';
import OrderInfo from './OrderInfo/OrderInfo';

const Sidebar = () => {
  const navigationItems = [
    { icon: <HomeIcon />, name: 'Home', link: '' },
    { icon: <OrdersIcon />, name: 'Orders', link: '/orders' },
    { icon: <NotificationIcon />, name: 'Notifications', link: '/notifications' },
    { icon: <HelpAndSupportIcon />, name: 'Help & Support', link: '/help-and-support' },
    { icon: <SettingsIcon />, name: 'Settings', link: '/settings' },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar__brand">
        <Logo className="sidebar__brand__logo" />
        <span className="sidebar__brand__title">Pomo & co</span>
      </div>

      <ul className="sidebar__navigation">
        {
          navigationItems.map((navItem, index) => (
            <li
              key={navItem.name}
              className={`sidebar__navigation__item ${index === 0 ? 'sidebar__navigation__item--active' : null}`}
            >
              {navItem.icon}
              <span className="sidebar__navigation__item__name">{navItem.name}</span>
              {
                navItem.name === 'Notifications' && <Tag color="primary"> 2 </Tag>
              }
            </li>
          ))
        }
      </ul>

      <OrderInfo />

      <div className="sidebar__user-info">
        <div>
          <h5 className="sidebar__user-info__name">Mark Clarke</h5>
          <span className="sidebar__user-info__email">markclarke@gmail.com</span>
        </div>
        <MenuIcon className="sidebar__user-info__toggle" />
      </div>
    </div>
  );
};

export default Sidebar;
