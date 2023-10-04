import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './SingleBlog.css'

const SingleBlog = () => {

  const {id} = useParams();
  console.log(id)

  const [blogs, setBlogs] = useState();

  const fetchBlogs = async () => {
    const response = await axios.get("https://651baa58194f77f2a5aeace7.mockapi.io/blogs/" + id)   // + id ko satta ("link/`{id}" garna ni milxa
    console.log(response)
    if (response.status == 200) {
      setBlogs(response.data)
      console.log(blogs)
    }
  }

  useEffect(()=>{
     fetchBlogs()
  },[])
  return (
    <div>
      <Navbar />

      

    <section className="blog-post">
        <div className="avatar">
            <img src={blogs?.avatar} alt="Author's Avatar" />
        </div>
        <div className="post-content">
            <h2>{blogs?.title}</h2> <br/>
            <p>{blogs?.description}</p>
            <br />
            <button onClick={()=> deleteBlog()} style={{backgroundColor:'#157fea', color: '#fff'}}>Delete Blog</button>
        </div>
    </section>

    </div>
  )
}

export default SingleBlog
