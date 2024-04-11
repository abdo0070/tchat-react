import Guest from "./Layout/Guest";
import Home from "./Layout/Home";
import Navbar from "./components/Navbar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AboutPage from "./pages/About";

function App() {
  const router = createBrowserRouter([
    {
      path : "/home",
      element : <Home />
    },
    {
      path : "/About",
      element : <AboutPage />
    },
    {
      path : "*",
      element : <Home />
    }
    ,
    {
      path : "/",
      element : <Guest />,
      children : [
        {
          path : "/",
          element : <Login />
        },
        {
          path : "/login",
          element : <Login />
        },
        {
          path : "/register",
          element : <Register />
        }
      ]
    }
  ]);
  return (
    <div className="h-screen">
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
