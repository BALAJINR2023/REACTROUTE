import { Link } from "react-router-dom";
import logoimg from "././assets/guvi-logo.svg";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <section className="logo-container">
          <Link to={"/"}>
            <img src={logoimg} alt="Guvi logo" className="logo" />
          </Link>
          <h1 className="title">BLOG</h1>
          <input
            type="text"
            className="nav-search"
            placeholder="Reader Search"
          />
        </section>
        <button className="btn btn-signUp">Sign Up</button>
      </nav>
    </>
  );
}

export default Navbar;
