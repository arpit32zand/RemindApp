import './App.css';
import { Routes, Route } from "react-router-dom";

import SignIn from './Screens/SignIn';

function App() {
	return (
		<Routes>
			<Route exact path="/" element={<SignIn/>}/>
		</Routes>
	);
}

export default App;
