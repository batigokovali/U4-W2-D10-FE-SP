import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyHeader from "./components/MyHeader";
import MyMovies from "./components/MyMovies";
import MovieDetails from "./components/MovieDetails";
import Backoffice from "./components/Backoffice";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar></MyNavbar>
        <MyHeader></MyHeader>
        <Routes>
          <Route element={<Backoffice />} path="/backoffice" ></Route>
        </Routes>
        <Routes>
          <Route
            element={<MovieDetails />}
            path="/movie-details/:imdbID"
          ></Route>
        </Routes>
        <Routes>
          <Route element={<MyMovies></MyMovies>} path="/" ></Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
