import Navbar from "@/sections/Navbar";

function AboutScreen() {
	return (
		<div className='flex flex-col items-center w-full h-full'>
			<Navbar currentScreen='about'></Navbar>
			<div className='absolute top-1/3 flex flex-col gap-14 w-[90%]'>
				<p className='text-3xl text-neutral-400'>
					The creation of this{" "}
					<span className='text-neutral-100'>web gallery</span> stems from a
					profound appreciation for innovative and experimental web design. In
					an era where the internet is saturated with countless websites,
					finding <span className='text-neutral-100'>inspiration </span> can
					sometimes feel like searching for a needle in a haystack.
				</p>
				<p className='text-3xl text-neutral-400'>
					This gallery serves as a curated collection of standout web designs,
					each handpicked for its unique approach and creative execution.
					Whether you're a seasoned designer, a developer, or simply a web
					enthusiast, this gallery aims to ignite your creativity and provide
					fresh <span className='text-neutral-100'>ideas</span> for your own
					projects.
				</p>
				<p className='text-3xl text-neutral-400'>
					The project is operated by{" "}
					<a className='text-neutral-100 underline'>Oliwier Kotlicki</a>. Send
					your websites on <a className='text-neutral-100 underline'>email.</a>{" "}
					If you enjoy the content please{" "}
					<a className='text-neutral-100 underline'>donate.</a>
				</p>
			</div>
		</div>
	);
}

export default AboutScreen;
