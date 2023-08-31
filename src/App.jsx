import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Login from "./Pages/Login";
import { Register } from "./Pages/Register";
import NewContact from "./Pages/NewContact";
import Contacts from "./Pages/Contacts";
import Error from "./Components/Error";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />

        <Route path='contacts'>
          <Route index element={<Contacts />} />
          <Route path='new' element={<NewContact />} />
        </Route>

        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
