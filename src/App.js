import {
    BrowserRouter,
    Routes,
    Route, Navigate,
} from "react-router-dom";
import Login from "./ReactComponents/Login";
import FilmInfo from "./ReactComponents/FilmInfo";
import AllFilmList from "./ReactComponents/AllFilmList";
import AdminFilmList from "./ReactComponents/AdminFilmList";

function App() {

  return (
      <BrowserRouter>
        <Routes>
            <Route index element={<Navigate to="/login" replace />} />
            <Route path="/login" element={ <Login />} />
            <Route path='/allFilms' element={<AllFilmList />} />
            <Route path='/adminFilms' element={<AdminFilmList />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
