import { useEffect } from 'react'
import { motion } from 'framer-motion'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import '../assets/app.css'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (process.browser) {
      const WebFont = require('webfontloader')

      WebFont.load({
        google: {
          families: ['Open+Sans:wght@300;400;600;800'],
        },
      })
    }
  }, [])

  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  )
}
