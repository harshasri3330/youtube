import './App.css';
import Content from './components/Content';
import Error from './components/Error';
import List from './components/List';
import Register from './components/Register';
import Sidebar from './components/Sidebar';
import { BrowserRouter,Routers,Route,Links, Routes } from 'react-router-dom';

function App() {

    const message="hello from app using props";
     
    const message2="hello from app using props2";
    return(

    <>
            <div className='container-fluid main'>
            <div className='row'>
              <BrowserRouter>
             
              <Sidebar/>
             


              <Routes>
                <Route path='*' element={<Error/>}></Route>
                <Route path='/' element={ <Content/>}></Route>
                <Route path='/register' element={ <Register mydata={message} mydata1={message2} />}></Route>
                <Route path='/list' element={<List/>}></Route>

              </Routes>
              </BrowserRouter>
            </div>
           </div>
    </>
  )
  
}

export default App;
