import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar'
import './AllBlogs.css'
import axios from 'axios'

const AllBlogs = () => {

  const [blogs, setBlogs] = useState([])

  const fetchBlogs = async () => {
    const response = await axios.get("https://651baa58194f77f2a5aeace7.mockapi.io/blogs")
    
    if (response.status == 200){
      setBlogs(response.data)
     
    }
  }

  useEffect(()=>{
    fetchBlogs()
  },[])
  return (
    <div>
     <Navbar />

    <div style={{display: 'flex', justifyContent:'space-evenly', flexWrap: 'wrap'}}>
      {
        blogs.map((blog)=>{
          return (
            <div className="card">
        <img src={blog.avatar} alt="Card Image" />
        <div className="card-content">
            <h2 className="card-title">{blog.title}</h2>
            <p className="card-description">{blog.description}</p><br />
            <p>{blog.createdAt}</p>
        </div>
      </div>
          )
        })
      }

    
    </div>
      
    </div>
  )
}

export default AllBlogs
