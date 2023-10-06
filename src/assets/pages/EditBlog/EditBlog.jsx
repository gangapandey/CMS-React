import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Footer from '../../../components/Footer'

//for edit or update of a blog

const EditBlog = () => {

  const navigate = useNavigate()

  const {id} = useParams();
  console.log(id)

  const [blogs, setBlogs] = useState({})
  // console.log(blogs)

  const editBlogs = async (e)=>{
    e.preventDefault()
    const response = await axios.put("https://651baa58194f77f2a5aeace7.mockapi.io/blogs/" + id, blogs)
    if(response.status == 200) {
      navigate("/singleBlog/" + id)
    }
    else{
      alert("something went wrong")
    }
  }

  const fetchBlogs = async () => {
    const response = await axios.get("https://651baa58194f77f2a5aeace7.mockapi.io/blogs/" + id)   // + id ko satta ("link/`{id}" garna ni milxa
    console.log(response)
    if (response.status === 200) {
      setBlogs(response.data)
      // console.log(blogs)
    } 
    else {
      alert("something went wrong")
    }
  }

    useEffect(() => {
      fetchBlogs();
    }, []);
  
  return (
    <div>
      <Navbar />

      <div className="container">
        <h1>Edit Blogs</h1>
        <form onSubmit={editBlogs} action="#" method="post" enctype="multipart/form-data" >
            <label for="title">Title:</label>
            <input type="text" onChange={(e)=>setBlogs({...blogs, title: e.target.value})} id="title" value={blogs.title} name="title" required />

            <label for="description">Description:</label>
            <textarea id="description" onChange={(e)=>setBlogs({...blogs, description: e.target.value})} name="description" value={blogs.description} required ></textarea>

            <label for="image">Upload Image:</label>
            <input type="text" onChange={(e)=> setBlogs({...blogs, avatar:e.target.value})} id="image" value={blogs.avatar} name="image" accept="image/*" required  />

            <button type="submit" value="Edit">Edit</button>
        </form>
        </div>

        <Footer />
    </div>
  )
}

export default EditBlog
