import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App w-full h-screen mx-auto bg-sky-600">
      <Navbar />
      <Routes>
        <Route path="/" element={<div />} />
      </Routes>
    </div>
  );
}

export default App;
