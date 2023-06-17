import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Login from './Pages/Login';
import NewContact from './Pages/NewContact';
import Contacts from './Pages/Contacts';
import Error from './Components/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login />} />

        <Route path='/' element={<Welcome />} />

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
