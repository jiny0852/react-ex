




import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ex00 from './views/Ex00.jsx';
import Ex01 from './views/Ex01.jsx';
import Ex02 from './views/Ex02.jsx';
import Ex04 from './views/Ex04.jsx';
import Ex06 from './views/Ex06.jsx';
import Ex07 from './views/Ex07.jsx';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/ex00' element={<Ex00 />} />
          <Route path='/ex01' element={<Ex01 />} />
          <Route path='/ex02' element={<Ex02 />} />
          <Route path='/ex04' element={<Ex04 />} />
          <Route path='/ex06' element={<Ex06 />} />
          <Route path='/ex07' element={<Ex07 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;