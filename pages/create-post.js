import { useState } from 'react'
import { contract } from '../configureWarpClient'
import { v4 as uuid } from 'uuid'

export default function createPostComponent() {
  const [post, updatePost] = useState({
    title: '', content: ''
  })

  async function createPost() {
    if (!post.title || !post.content) return
    post.id = uuid()
    console.log('post: ', post)
    try {
      const result = await contract.writeInteraction({
        function: "createPost",
        post
      })
      console.log('result:', result)
    } catch (err) {
      console.log('error:', err)
    }
  }
  return (
    <div style={formContainerStyle}>
      <input
        value={post.title}
        placeholder="Post title"
        onChange={e => updatePost({ ...post, title: e.target.value})}
        style={inputStyle}
      />
      <input
        value={post.content}
        placeholder="Post content"
        onChange={e => updatePost({ ...post, content: e.target.value})}
        style={inputStyle}
      />
      <button style={buttonStyle} onClick={createPost}>Create Post</button>
    </div>
  )
}

const formContainerStyle = {
  width: '900px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
}

const inputStyle = {
  width: '300px',
  padding: '8px',
  fontSize: '18px',
  border: 'none',
  outline: 'none',
  marginBottom: '20px'
}

const buttonStyle = {
  width: '200px',
  padding: '10px 0px'
}