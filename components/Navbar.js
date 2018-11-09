import Link from "next/link";

const Navbar = () => (
  <div className="navbar">
    <Link href="/index">
      <a className="navbar-link">Home</a>
    </Link>
    <Link href="/portfolio">
      <a className="navbar-link">Portfolio</a>
    </Link>
    <Link href="/about">
      <a className="navbar-link">About</a>
    </Link>

    <style jsx>{`
      @import url("https://fonts.googleapis.com/css?family=Titillium+Web:300,400,700i");

      .navbar {
        display: flex;
      }
      .navbar-link {
        font-family: "Titillium Web", sans-serif;
        color: #000;
        font-weight: bold;
        text-decoration: none;
        font-size: 20px;
        flex: 1;
        text-align: center;
        margin: 0 40px;
        letter-spacing: 0px;
        transition: all 280ms ease-in-out;
      }
      .navbar-link:hover,
      .navbar-link:active {
        letter-spacing: 5px;
        transition: all 280ms ease-in-out;
      }
      .navbar-link:after,
      .navbar-link:before {
        border: 1px solid black;
        content: " ";
        display: block;
        margin: 0 auto;
        transition: all 280ms ease-in-out;
        width: 0;
      }
      .navbar-link:hover:after,
      .navbar-link:hover:before {
        border-color: black;
        transition: width 350ms ease-in-out;
        width: 70%;
      }
      .navbar-link:hover:before {
        bottom: auto;
        top: 0;
        width: 70%;
      }
    `}</style>
  </div>
);

export default Navbar;
