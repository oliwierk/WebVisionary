import Link from "@/components/CustomLink";

function Navbar() {
	return (
		<div className='flex items-center w-[90%] h-36'>
			<div className='w-1/2'>
				<p className='text-md lg:text-xl text-neutral-50'>WebVisionary</p>
			</div>
			<div className='flex w-1/2 gap-2 lg:gap-12 justify-end'>
				<Link title={"About"}></Link>
				<Link title={"Donate"}></Link>
				<Link title={"Submit"}></Link>
			</div>
		</div>
	);
}

export default Navbar;
