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
        align-items: center;
        justify-content: space-around;
      }
      .navbar-link {
        font-family: "Titillium Web", sans-serif;
        color: #000;
        font-weight: bold;
        text-decoration: none;
        font-size: 20px;
      }
    `}</style>
  </div>
);

export default Navbar;
