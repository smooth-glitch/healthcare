import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="dashboard-content">
          {/* Temporary test content */}
          <div style={{ padding: "2rem" }}>
            <h2>Dashboard Content Will Go Here</h2>
            <p>
              This area will contain the health overview, calendar, and activity
              feed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
