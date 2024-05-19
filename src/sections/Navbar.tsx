import CustomLink from "@/components/CustomLink";

interface NavbarProps {
	currentScreen: "home" | "about" | "submit";
}

const Navbar: React.FC<NavbarProps> = ({ currentScreen }) => {
	return (
		<div className='flex items-center w-[90%] h-24 lg:h-36'>
			<div className='w-1/2'>
				<p className='text-md lg:text-xl text-neutral-50'>WebVisionary</p>
			</div>
			<div className='flex w-1/2 gap-2 lg:gap-12 justify-end'>
				{currentScreen === "home" ? (
					<CustomLink title='About' to='/about' />
				) : (
					<CustomLink title='Gallery' to='/' />
				)}
				<a
					target='_blank'
					href='https://buymeacoffee.com/oliwierkotlicki?new=1'
					className='text-sm lg:text-lg text-neutral-500 hover:text-neutral-100 duration-200 transition-colors cursor-pointer p-2'
				>
					Donate
				</a>
				{currentScreen === "submit" ? (
					<CustomLink title='About' to='/about' />
				) : (
					<CustomLink title='Submit' to='/submit' />
				)}
			</div>
		</div>
	);
};

export default Navbar;
