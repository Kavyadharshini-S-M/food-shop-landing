import React from 'react';
import { motion } from 'framer-motion';

const menuItems = [
  'Espresso',
  'Chocolate Croissant',
  'Iced Latte',
  'Strawberry Pastry',
  'Cappuccino',
  'Blueberry Muffin'
];

const Menu = () => {
  return (
    <div className="menu">
      {menuItems.map((item, index) => (
        <motion.div
          key={item}
          className="menu-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: index * 0.1 }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
};

export default Menu;
