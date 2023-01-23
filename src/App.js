import logo from './logo.svg';
import './App.css';
import StyleExample from './components/StyleExample.js'

import Alerts from './components/StudentAccordian'
import StudentAccordian from './components/StudentAccordian';
import StudentModal from './components/StudentModal';
function App() {
const students = [{
  image:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  id:"101",
  name: "Antony",
  Department: "CS",
  Address: "House Number 11, Street aabb, Kerala"
},
{
  image:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  id:"201",
  name: "Basil",
  Department: "EC",
  Address: "House Number 11, Street aabb, Kerala"
},
{
  image:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  id:"301",
  name: "Clara",
  Department: "EE",
  Address: "House Number 11, Street aabb, Kerala"
},
{
  image:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  id:"401",
  name: "David",
  Department: "IT",
  Address: "House Number 11, Street aabb, Kerala"
},
{
  image:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  id:"501",
  name: "Elizabeth",
  Department: "ME",
  Address: "House Number 11, Street aabb, Kerala"
}
]
  return (
    <div className="App">
      {/* <StyleExample /> */}
     
      <StudentAccordian studentDetails={students}/>
      <StudentModal studentDetails={students}/>
      
    </div>
  );
}

export default App;
