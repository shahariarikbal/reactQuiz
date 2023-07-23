
import "../assets/App.css"
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
function App() {
  return (
    <>
      <div className="App">
          <Layout>
              <Home/>
              <Signup />
          </Layout>
      </div>
    </>
  );
}

export default App
