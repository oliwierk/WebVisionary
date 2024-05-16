import Gallery from "./sections/Gallery";
import Navbar from "./sections/Navbar";

function App() {
	return (
		<div className='flex flex-col items-center w-full h-full'>
			<Navbar></Navbar>
			<Gallery></Gallery>
		</div>
	);
}

export default App;
