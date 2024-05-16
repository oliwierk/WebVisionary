interface LinkProps {
	title: string;
}
const CustomLink: React.FC<LinkProps> = ({ title }) => {
	return (
		<>
			<p className='text-sm lg:text-lg text-neutral-500 hover:text-neutral-100 duration-200 transition-colors cursor-pointer p-2'>
				{title}
			</p>
		</>
	);
};

export default CustomLink;
