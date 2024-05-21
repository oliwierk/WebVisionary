interface WebsiteProps {
	name: string;
	backgroundImage: string;
}

const Website: React.FC<WebsiteProps> = ({ name, backgroundImage }) => {
	return (
		<>
			<div
				className={`relative w-full lg:w-1/3 h-full border-[1px] border-neutral-600 rounded-lg hover:border-neutral-50 transition-all duration-300 
				cursor-pointer bg-${backgroundImage} bg-center bg-cover`}
			>
				<div className='absolute bottom-0 flex items-center px-6 h-1/6 w-full bg-neutral-950 bg-opacity-80 rounded-b-lg'>
					<p className='text-xl tracking-wide text-neutral-300'>{name}</p>
				</div>
			</div>
		</>
	);
};

export default Website;
