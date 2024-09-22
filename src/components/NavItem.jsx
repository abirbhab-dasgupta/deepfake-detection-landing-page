import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NavItem({ name, icon: Icon, path }) {
  const location = useLocation()
  const isActive = location.pathname === path

  return (
    <Link to={path} className="relative px-3 py-2 rounded-md text-sm font-medium text-gray-200 hover:text-gray-300">
      <motion.div
        className="flex items-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon className="h-5 w-5 mr-2" aria-hidden="true" />
        <span>{name}</span>
      </motion.div>
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
          layoutId="underline"
          initial={false}
        />
      )}
    </Link>
  )
}