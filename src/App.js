import './App.css';
import { Routes, Route } from "react-router-dom";

import SignIn from './Screens/SignIn';
import SetReminder from './Screens/SetReminder';
import HomePage from './Screens/HomePage';
import ModifyReminder from './Screens/ModifyReminder';
import DisableReminder from './Screens/DisableReminder';
import EnableReminder from './Screens/EnableReminder';
import DeleteReminder from './Screens/DeleteReminder';
import ViewReminder from './Screens/ViewReminder';
import Logout from './Screens/Logout';

function App() {
	return (
		<Routes>
			<Route exact path="/" element={<SignIn/>}/>
			<Route exact path="/set-reminder" element={<SetReminder/>}/>
			<Route exact path="/modify-reminder" element={<ModifyReminder/>}/>
			<Route exact path="/disable-reminder" element={<DisableReminder/>}/>
			<Route exact path="/enable-reminder" element={<EnableReminder/>}/>
			<Route exact path="/delete-reminder" element={<DeleteReminder/>}/>
			<Route exact path="/view-reminder" element={<ViewReminder/>}/>
			<Route exact path="/logout" element={<Logout/>}/>
			<Route exact path="/home" element={<HomePage/>}/>
		</Routes>
		// <HomePage/>
	);
}

export default App;
