
import './App.css'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import AllBlogs from './assets/pages/AllBlogs/AllBlogs'
import SingleBlog from './assets/pages/SingleBlog/SingleBlog'
import CreateBlog from './assets/pages/CreateBlog/CreateBlog'
import EditBlog from './assets/pages/EditBlog/EditBlog'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<AllBlogs />} />
      <Route path='/singleBlog/:id' element={<SingleBlog />} />
      <Route path='/createBlog' element ={<CreateBlog />} />
      <Route path='/editblog' element={<EditBlog />} />
      



    </Routes>
    </BrowserRouter>
  )
}

export default App
