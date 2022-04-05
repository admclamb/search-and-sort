import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1 className="nav-brand">Search N Sort</h1>
      </div>

      <div className="nav-items">
        <button className="nav-btn">Bubble Sort</button>
        <button className="nav-btn">Merge Sort</button>
        <button className="nav-btn">Quick Sort</button>
      </div>
    </nav>
  );
};

export default Navbar;
