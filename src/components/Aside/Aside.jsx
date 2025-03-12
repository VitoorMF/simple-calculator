import './Aside.css'

function Aside({ isOpen, history }) {
  return (
    <aside className={`App-aside ${isOpen ? "open" : ""}`}>
      {history.length > 0 ? (
        history.map((item, index) => <div key={index}>{item}</div>)
      ) : (
        <div>Sem histórico</div>
      )}
    </aside>
  );
}

export default Aside;
