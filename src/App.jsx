
import { Routes , Route } from "react-router";
import Registration from "./assets/pages/Registration";
import Student from "./assets/pages/Student";
import Teacher from "./assets/pages/Teacher";
import Login from "./assets/pages/Login";
import Account from "./assets/pages/Account";
import Attendance from "./assets/pages/Attendance";
import Result from "./assets/pages/Result";
import Pdf from "./assets/pages/Pdf";
import Leave from "./assets/pages/Leave";
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Registration />}/>
      <Route path="/student" element={<Student />}/>
      <Route path="/teacher" element={<Teacher />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/account" element={<Account />}/>
      <Route path="/attendance" element={<Attendance />}/>
      <Route path="/result" element={<Result />}/>
      <Route path="/pdf" element={<Pdf />}/>
      <Route path="/leave" element={<Leave />}/>


    </Routes>
    </>
  )
}

export default App
