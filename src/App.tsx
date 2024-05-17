import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomeScreen />} />
				<Route path='/about' element={<AboutScreen />} />
			</Routes>
		</Router>
	);
}

export default App;
