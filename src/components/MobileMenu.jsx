import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const menuVariants = {
  open: {
    opacity: 1,
    height: 'auto',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
}

export default function MobileMenu({ navItems }) {
  return (
    <motion.div
      className="md:hidden"
      initial="closed"
      animate="open"
      exit="closed"
      variants={menuVariants}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="h-5 w-5 mr-2" aria-hidden="true" />
              <span>{item.name}</span>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}