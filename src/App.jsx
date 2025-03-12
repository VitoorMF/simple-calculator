import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";

const buttonsList = [7, 8, 9, 4, 5, 6, 1, 2, 3, ".", 0];
const operationsList = [" ÷ ", " x ", " - ", " + "];

function App() {
  const [operation, setOperation] = useState("");
  const [clear, setClear] = useState(false);
  const [history, setHistory] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [previousOperation, setPreviousOperation] = useState("");

  const handleButtonClick = (button) => {
    if (clear === true) {
      handleClear();
      setClear(false);
    }
    setOperation((prev) => prev + button);
  };

  const handleOperationClick = (op) => {
    if (operation !== "" && !operationsList.includes(operation.slice(-3))) {
      setOperation((prev) => prev + op);
    }
  };

  const handleClear = () => {
    setOperation("");
  };

  const handleCalculate = () => {
    setClear(true);

    switch (operation) {
      case "":
        return;

      case "Error":
        handleClear();
        return;

      case previousOperation:
        return;

      default:
        try {
          let result = operation.replace(/÷/g, "/").replace(/x/g, "*");
          // eslint-disable-next-line no-eval
          let finalResult = eval(result);

          setOperation(finalResult.toString());
          setHistory((prevHistory) => [
            ...prevHistory,
            `${operation} = ${finalResult}`,
          ]);

          setPreviousOperation(operation);
        } catch {
          setOperation("Error");
        }
        break;
    }
  };

  return (
    <div className="App">
      <Header onClick={() => setIsOpen(!isOpen)} />

      <Main
        buttonsList={buttonsList}
        operationsList={operationsList}
        operation={operation}
        handleButtonClick={handleButtonClick}
        handleOperationClick={handleOperationClick}
        handleClear={handleClear}
        handleCalculate={handleCalculate}
      />
      <Aside history={history} isOpen={isOpen} />
    </div>
  );
}

export default App;
