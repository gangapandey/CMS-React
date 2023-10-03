
import './Navbar.css'

const Navbar = () => {
  return (
    <nav class="navbar">
    <div class="company-logo">
        <h1>CMSS</h1>
    </div>
    <div class="nav-buttons">
        <a href="/">Home</a>
        <a href="#">Add blogs</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <a href="#" class="signup-button">Sign Up</a>
    </div>
</nav>
  )
}

export default Navbar
