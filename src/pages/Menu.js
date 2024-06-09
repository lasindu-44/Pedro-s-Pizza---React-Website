import React from 'react';
import {MenuList} from '../helpers/Menulist';
import MenuItem from '../Components/MenuItem';
import  '../Components/Styles/menu.css';


function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Our Menu</h1>
      <div className='menuList'>
      {MenuList.map((menuItem, key) => {
          return (
           <MenuItem 
           key={key}
           image={menuItem.image} 
           price={menuItem.price}
            name={menuItem.name}>

            </MenuItem>
          );
        })}
      </div>
    </div>
  )
}

export default Menu
