
import './App.css';
import {Hello} from './component/task1/Hello.js'
import {Congrats} from './component/task2/Congrats.js'
import './component/task2/cong.css'
import {Super} from './component/task3/Super.js'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import {Menu} from './component/Menu'
import { Socbtn} from './component/task4/Socbtn.js';
import { Notification } from './component/task5/Notification';
import { Login } from './component/task6/Login';
import { Technology } from './component/task7/Technology';
import { Hooks } from './component/task8/Hooks';
import { Fruitcount } from './component/task9/Fruitcount';
import { Responcep1 } from './component/task10/Responcep1';
import { Responcep2} from './component/task10/Responcep2';
import { Datef } from './component/task11/Datef';
import { Boots } from './component/bootstraptask/Boots';
import { Jsonproject } from './component/task12/Jsonproject';
import { Fakeapp } from './component/task13/fakeapp';
import { Details } from './component/task13/details';
import { Table } from './component/task14/table';
import { Form } from './component/task14/form';
import { Update } from './component/task14/update';
import AnimatedCursor from 'react-animated-cursor';
import DateNavBar from './component/datenav/DateNavBar';
import DateNavBar2 from './component/dateNavBar/DateNavBar2';
import Calender from './component/dateNavBar/Calender';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/datenav2' element={[<Menu/>,<DateNavBar2/>]}/>

      <Route path='/' element={[<Menu/>,<Hello/>,<AnimatedCursor/>]}/>
      <Route path='/boots'element={[<Menu/>,<Boots/>,<AnimatedCursor/>]}/>
      <Route path='/calendar'element={[<Menu/>,<Calender/>,<AnimatedCursor/>]}/>

      <Route path='/congrats'element={[<Menu/>,<Congrats/>,<AnimatedCursor/>]}/>
      <Route path='/super'element={[<Menu/>,<Super/>,<AnimatedCursor/>]}/>
      <Route path='/social'element={[<Menu/>,<Socbtn/>,<AnimatedCursor/>]}/>
      <Route path='/notification'element={[<Menu/>,<Notification/>,<AnimatedCursor/>]}/>
      <Route path='/login'element={[<Menu/>,<Login/>,<AnimatedCursor/>]}/>
      <Route path='/technology'element={[<Menu/>,<Technology/>,<AnimatedCursor/>]}/>
      <Route path='/hooks'element={[<Menu/>,<Hooks/>,<AnimatedCursor/>]}/>
      <Route path='/fruitcount'element={[<Menu/>,<Fruitcount/>,<AnimatedCursor/>]}/>
      <Route path='/responce1'element={[<Menu/>,<Responcep1/>,<AnimatedCursor/>]}/>
      <Route path='/respon'element={[<Menu/>,<Responcep2/>,<AnimatedCursor/>]}/>
      <Route path='/date'element={[<Menu/>,<Datef/>,<AnimatedCursor/>]}/>
      <Route path='/json'element={[<Menu/>,<Jsonproject/>,<AnimatedCursor/>]}/>
      <Route path='/fake'element={[<Menu/>,<Fakeapp/>,<AnimatedCursor/>]}/>
      <Route path='/fake1/:id'element={[<Menu/>,<Details/>,<AnimatedCursor/>]}/>
      <Route path='/table'element={[<Menu/>,<Table/>,<AnimatedCursor/>]}/>
      <Route path='/form'element={[<Menu/>,<Form/>,<AnimatedCursor/>]}/>
      <Route path='/update/:sno'element={[<Menu/>,<Update/>,<AnimatedCursor/>]}/>
      <Route path='/datenav2'element={[<Menu/>,<DateNavBar/>]}/>
    

      
      

    </Routes>
    </BrowserRouter>
   
    
    </>
    
  );
}

export default App;
