import { useEffect } from "react";
window.Telegram.WebApp;
import "./App.css";
useEffect(() => {
  tg.Ready;
}, []);
const tg = window.Telegram.WebApp;

function App() {
  const onClose = () => {
    tg.close();
  };

  return <div className="App">WORK</div>;
}

export default App;
