import { useNavigate } from "react-router-dom";
interface LinkProps {
	title: string;
	to: string;
}
const CustomLink: React.FC<LinkProps> = ({ title, to }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(to);
	};

	return (
		<a
			onClick={handleClick}
			className='text-sm lg:text-lg text-neutral-500 hover:text-neutral-100 duration-200 transition-colors cursor-pointer p-2'
		>
			{title}
		</a>
	);
};

export default CustomLink;
