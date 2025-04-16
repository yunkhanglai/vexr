import Button from "../components/Button";

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
            <Button onClickFunction={() => alert("Hi")} text="Click me" />
          </div>

        </div>
      </>
    );
  }

  export default NavBar;