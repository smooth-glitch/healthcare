import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Sidebar />
      <div className="content-wrapper">
        <main className="main-content">
          {/* Dashboard content will go here */}
        </main>
      </div>
    </div>
  );
}

export default App;
