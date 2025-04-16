import Button from "../components/Button";

function NavBar({ loginButtonClick }) {
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
            <Button onClick={ loginButtonClick } buttonText="Login" />
          </div>

        </div>
      </>
    );
  }

  export default NavBar;