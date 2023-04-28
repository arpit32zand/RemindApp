import './App.css';
import { Routes, Route } from "react-router-dom";

import SignIn from './Screens/SignIn';
import SetReminder from './Screens/SetReminder';
import HomePage from './Screens/HomePage';

function App() {
	return (
		<Routes>
			<Route exact path="/" element={<SignIn/>}/>
			<Route exact path="/set-reminder" element={<SetReminder/>}/>
			<Route exact path="/home" element={<HomePage/>}/>
		</Routes>
	);
}

export default App;
