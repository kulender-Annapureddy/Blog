import React, { useEffect, useState } from 'react'
import Post from '../components/post'

function IndexPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:2000/post');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const posts = await response.json();
        setPosts(posts);
      } catch (error) {
        console.error('Error fetching posts:', error.message);
        // Handle the error as needed (e.g., set an error state)
      }
    };
  
    fetchPosts();
  }, []);
  return (
   <>
   {posts.length > 0 && posts.map(post => (
    <Post key={post.id} {...post} />
   ))}
   

   </>
  )
}

export default IndexPage