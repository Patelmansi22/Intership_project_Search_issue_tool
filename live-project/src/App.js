import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./Screen/LoginPage";
import IssuePage from './Screen/IssuePage';
import Forget from './Screen/Forget';
import Registration from './Screen/Registration';
// import Profile from './Screen/Profile';
import IssueDetails from './Screen/IssueDetails';
import AdminPanel from './Screen/AdminPanel';
import UserProfile from '../src/Screen/UserProfile';
import Employe from './Screen/Employe';
import Addemploye from './Screen/Addemploye';
import Manager from './Screen/Manager';
import AddManager from './Screen/AddManager';
import ManagerDetail from './Screen/ManagerDetail';
import EmployeeDetails from './Screen/EmployeeDetails';
import AdminLogin from './Screen/AdminLogin';
import ManagerLogin from './Screen/ManagerLogin';
import EditProfile from './Screen/EditProfile';
import Home from './Screen/Home';
import Home2 from './Screen/Home2';

function App() {
  return (
      <Router>

        <div>
          <Routes>
          <Route exact path='/' element={<Home />} />

            <Route exact path='/Login' element={<LoginPage />} />

            <Route exact path='/issuepage' element={<IssuePage />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/forget' element={<Forget />} />
            <Route path='/profile' element={<UserProfile />} />
            <Route path='/issuedetails/:id' element={<IssueDetails />} />
            <Route exact path='/admin' element={<AdminPanel />} />
            <Route exact path='/employe' element={<Employe />} />
            <Route path='/addemploye/:id' element={<Addemploye />} />
            <Route path='/addemploye/add' element={<Addemploye />} />
            <Route path='/manager' element={<Manager />} />
            <Route path='/addmanager/:id' element={<AddManager />} />
            <Route path='/addmanager/add' element={<AddManager />} />
            <Route path='/managerdetails' element={<ManagerDetail />} />
            <Route path='/employeedetails' element={<EmployeeDetails />} />
            <Route path='/editprofile/:id' element={<EditProfile />} />



          </Routes>

        </div>
      </Router>
  );
}

export default App;
