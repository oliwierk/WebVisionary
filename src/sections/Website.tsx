interface WebsiteProps {
	name: string;
}
const Website: React.FC<WebsiteProps> = ({ name }) => {
	return (
		<>
			<div className='relative w-full lg:w-1/3 h-full border-[1px] border-neutral-600 rounded-lg hover:border-neutral-50 transition-all duration-300 cursor-pointer'>
				<div className='absolute bottom-0 flex items-center px-6 h-1/6 w-full'>
					<p className='text-lg text-neutral-300'>{name}</p>
				</div>
			</div>
		</>
	);
};

export default Website;
