import React from 'react'
import Head from 'next/head'

const MainLayout = ({
  children,
  title,
  className = '',
  style = {},
  containerClassName = '',
  containerStyle = {},
}) => {
  return (
    <main
      className={'font-body min-h-screen flex flex-col justify-between '.concat(
        className
      )}
      style={style}
    >
      <Head>
        <title>
          {(typeof title !== 'object' ? [title] : title)
            .concat('Allan Christian')
            .filter((i) => i)
            .join(' - ')}
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div
        className={'flex-grow '.concat(containerClassName)}
        style={containerStyle}
      >
        {children}
      </div>
    </main>
  )
}

export default MainLayout
