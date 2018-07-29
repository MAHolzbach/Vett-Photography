import Link from "next/link";

export default () => (
  <div className="landing">
    <h1 className="header">Vett Photography</h1>;
    <Link href="/portfolio">
      <a className="enter-link">ENTER</a>
    </Link>
    <style jsx>{`
      @import url("https://fonts.googleapis.com/css?family=Titillium+Web:300,400,700i");

      .landing {
        background-image: url("/static/lucas-landing.jpg");
        height: 100vh;
        margin: 0;
        background-size: cover;
        background-position: center;
      }
      .header {
        margin: 0;
        font-family: "Titillium Web", sans-serif;
        color: white;
        letter-spacing: 0.15em;
        font-weight: 400;
        font-size: 75px;
        padding-top: 200px;
        padding-right: 20px;
        text-align: right;
      }
      .enter-link {
        font-family: "Titillium Web", sans-serif;
        float: right;
        color: white;
        padding-right: 40px;
        font-size: 30px;
        letter-spacing: 0.1em;
        text-decoration: none;
      }
    `}</style>
    <style jsx global>{`
      html,
      body {
        margin: 0;
      }
    `}</style>
  </div>
);
