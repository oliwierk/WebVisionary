import Website from "./Website";

function Gallery() {
	return (
		<>
			<div className='absolute top-1/4 lg:top-1/3 flex flex-col gap-8 w-[90%] pb-12 gallery'>
				<div className='flex flex-col lg:flex-row gap-8 h-[150vh] lg:h-[50vh]'>
					<Website name={"SavoirFaire"} backgroundImage={"image1"} />
					<Website name={"TERRA"} backgroundImage={"image2"} />
					<Website name={"AWP"} backgroundImage={"image3"} />
				</div>
				<div className='flex flex-col lg:flex-row gap-8 h-[150vh] lg:h-[50vh]'>
					<Website name={"SavoirFaire"} backgroundImage={"image1"} />
					<Website name={"TERRA"} backgroundImage={"image2"} />
					<Website name={"AWP"} backgroundImage={"image3"} />
				</div>
				<div className='flex flex-col lg:flex-row gap-8 h-[150vh] lg:h-[50vh]'>
					<Website name={"SavoirFaire"} backgroundImage={"image1"} />
					<Website name={"TERRA"} backgroundImage={"image2"} />
					<Website name={"AWP"} backgroundImage={"image3"} />
				</div>
				<div className='flex flex-col lg:flex-row gap-8 h-[150vh] lg:h-[50vh]'>
					<Website name={"SavoirFaire"} backgroundImage={"image1"} />
					<Website name={"TERRA"} backgroundImage={"image2"} />
					<Website name={"AWP"} backgroundImage={"image3"} />
				</div>
			</div>
		</>
	);
}

export default Gallery;
