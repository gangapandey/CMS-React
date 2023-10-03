import { useState } from 'react'
import Navbar from '../../../components/Navbar'
import "./CreateBlog.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {

  const navigate = useNavigate()

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")

  const createBlog = async(e)=>{
    e.preventDefault()
    const data = {
      title: title,
      description: description,
      avatar: image
    }
    const response = await axios.post("https://651baa58194f77f2a5aeace7.mockapi.io/blogs", data)

    //to move the page to home after click on submit
    if(response.status == 201){
      navigate("/")
    }
  }
  
  return (
    <div>
      <Navbar />

      <div className="container">
        <h1>Add Blogs</h1>
        <form onSubmit={createBlog} action="#" method="post" enctype="multipart/form-data" >
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required  onChange={(e) => setTitle(e.target.value)}/>

            <label for="description">Description:</label>
            <textarea id="description" name="description" required onChange={(e) => setDescription(e.target.value)}></textarea>

            <label for="image">Upload Image:</label>
            <input type="text" id="image" name="image" accept="image/*" required  onChange={(e) => setImage(e.target.value)}/>

            <button type="submit">Submit</button>
        </form>
    </div>
    </div>
  )
}

export default CreateBlog
