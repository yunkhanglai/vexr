
function NavBar(props) {
    return (
      <>
        <div className="navbar">
        <div className="navbar-left">
          Logo HERE
        </div>
        <div className="navbar-center">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="navbar-right">
          <button>Login</button> {/* or Profile image later */}
        </div>
        </div>
      </>
    );
  }

  export default NavBar;