import React from 'react'
import {motion} from 'framer-motion'
const Button = ({btnText}) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
<div className="rounded-full bg-lime-500">
        <button className="px-4 py-2 text-black font-medium">
            {btnText}
        </button>
      </div>
    </motion.div>
    
  )
}

export default Button