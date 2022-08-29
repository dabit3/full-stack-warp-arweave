import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav style={navStyle}>
        <Link href="/">
          <a style={linkStyle}>
            Home
          </a>
        </Link>
        <Link href="/create-post" >
          <a style={linkStyle}>
            Create Post
          </a>
        </Link>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

const navStyle = {
  padding: '30px 100px'
}

const linkStyle = {
  marginRight: '30px'
}

export default MyApp
