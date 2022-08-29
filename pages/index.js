import { useEffect, useState } from 'react'
import { getContract } from '../configureWarpClient'
import ReactMarkdown from 'react-markdown'

export default function Home() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    readState()
  }, [])
  async function readState() {
    const contract = await getContract()
    try {
      const data = await contract.readState()
      console.log('data: ', data)
      const posts = Object.values(data.cachedValue.state.posts)
      setPosts(posts)
      console.log('posts: ', posts)
    } catch (err) {
      console.log('error: ', err)
    }
  }

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>PermaBlog</h1>
      {
        posts.map((post, index) => (
          <div key={index} style={postStyle}>
            <p style={titleStyle}>{post.title}</p>
            <ReactMarkdown>
              {post.content}
            </ReactMarkdown>
          </div>
        ))
      }
    </div>
  )
}

const containerStyle = {
  width: '900px',
  margin: '0 auto'
}

const headingStyle = {
  fontSize: '64px'
}
const postStyle = {
  padding: '15px 0px 0px',
  borderBottom: '1px solid rgba(255, 255, 255, .2)'
}

const titleStyle = {
  fontSize: '34px',
  marginBottom: '0px'
}
