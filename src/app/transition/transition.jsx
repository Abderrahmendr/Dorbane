import React from 'react'
import { motion } from "framer-motion"
const transition = () => {
  return (

    <motion.div
    initial={{ y:10 }}
    animate={{ y :20 }}
    >
    transition
    </motion.div>
  )
}

export default transition