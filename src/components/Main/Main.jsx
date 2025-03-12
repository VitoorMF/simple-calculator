import "./Main.css";

function Main({
  buttonsList,
  operationsList,
  operation,
  handleButtonClick,
  handleOperationClick,
  handleClear,
  handleCalculate,
}) {
  return (
    <main className="App-body">
      <div className="calculator">
        <div className="calculator-screen">{operation || "0"}</div>
        <div className="calculator-bottom">
          <div className="calculator-keyboard">
            {buttonsList.map((button, index) => (
              <div
                key={index}
                className="calculator-key"
                onClick={() => {
                  handleButtonClick(button);
                }}
              >
                {button}
              </div>
            ))}
          </div>
          {operationsList.map((op, index) => (
            <div
              className="calculator-key operation"
              key={index}
              onClick={() => handleOperationClick(op)}
            >
              {op}
            </div>
          ))}
          <div className="calculator-key clear" onClick={() => handleClear()}>
            C
          </div>
          <div
            className="calculator-key calculate"
            onClick={() => handleCalculate()}
          >
            =
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
