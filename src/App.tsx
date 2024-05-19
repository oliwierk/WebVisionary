import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SubmitScreen from "./screens/SubmitScreen";

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomeScreen />} />
				<Route path='/about' element={<AboutScreen />} />
				<Route path='/submit' element={<SubmitScreen />} />
			</Routes>
		</Router>
	);
}

export default App;
