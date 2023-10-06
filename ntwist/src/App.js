import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContante from "./components/MainContante";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Main">
        <div className="Main-2">
          <div className="Detail-photo">
            <div>
              <h1>Data-powered solutions for industrial Excellence</h1>
              <span>
                <button>Read more</button>
              </span>
            </div>

            <div>
              <img
                style={{ width: "90%" }}
                src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png"
                alt="second"
              />
            </div>
          </div>
        </div>
      </div>
      <MainContante />
      <Footer />
    </div>
  );
}

export default App;
