import "./Header.css";

function Header({ onClick }) {
  return (
    <header className="App-header">
      <button className="historyBtn" onClick={onClick}>
        history
      </button>
      <div className="App-title">CALCULATOR</div>
    </header>
  );
}

export default Header;
