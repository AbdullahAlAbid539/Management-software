
import { Routes , Route } from "react-router";
import Registration from "./assets/pages/Registration";
import Student from "./assets/pages/Student";
import Teacher from "./assets/pages/Teacher";
import Login from "./assets/pages/Login";
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Registration />}/>
      <Route path="/student" element={<Student />}/>
      <Route path="/teacher" element={<Teacher />}/>
      <Route path="/login" element={<Login />}/>

    </Routes>
    </>
  )
}

export default App
