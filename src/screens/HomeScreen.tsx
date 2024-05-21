import Gallery from "../sections/Gallery";
import Navbar from "../sections/Navbar";

function HomeScreen() {
	return (
		<div className='flex flex-col items-center w-full h-full'>
			<Navbar currentScreen='home' />
			<Gallery />
		</div>
	);
}

export default HomeScreen;
