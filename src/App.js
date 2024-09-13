




import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ex00 from './views/Ex00.jsx';
import Ex01 from './views/Ex01.jsx';
import Ex02 from './views/Ex02.jsx';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/ex00' element={<Ex00 />} />
          <Route path='/ex01' element={<Ex01 />} />
          <Route path='/ex02' element={<Ex02 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;