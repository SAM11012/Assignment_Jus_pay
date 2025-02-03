import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import { ThemeProvider } from "./thmeContext";
import './index.css'
function App() {
  return (
    <>
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>
    </>
  );
}

export default App;
