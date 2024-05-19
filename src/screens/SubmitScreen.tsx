import React, { useState } from "react";
import Navbar from "@/sections/Navbar";
import emailjs from "emailjs-com";

function SubmitScreen() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		url: "",
		title: "",
		description: "",
		category: "",
		consent: false,
		screenshots: null,
	});

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value, type, checked, files } = e.target as HTMLInputElement &
			HTMLTextAreaElement &
			HTMLSelectElement;
		if (type === "checkbox") {
			setFormState({ ...formState, [name]: checked });
		} else if (type === "file") {
			setFormState({ ...formState, [name]: files });
		} else {
			setFormState({ ...formState, [name]: value });
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const emailData = {
			from_name: formState.name,
			from_email: formState.email,
			website_url: formState.url,
			website_title: formState.title,
			website_description: formState.description,
			website_category: formState.category,
			consent: formState.consent ? "Yes" : "No",
			to_email: "oliwier.kotlicki@gmail.com",
		};

		emailjs
			.send(
				"service_mggmj24",
				"template_h43pgj6",
				emailData,
				"OoUUlgwRkjb8UAbj0"
			)
			.then(response => {
				console.log("Email sent successfully:", response.status, response.text);
				alert("Your website submission has been sent successfully!");
			})
			.catch(err => {
				console.error("Failed to send email:", err);
				alert(
					"There was an error sending your submission. Please try again later."
				);
			});
	};

	return (
		<div className='flex flex-col items-center w-full h-full'>
			<Navbar currentScreen='submit' />
			<h1 className='text-neutral-300 text-3xl mb-4 font-bold'>
				Submit your website!
			</h1>
			<form
				onSubmit={handleSubmit}
				className='w-full max-w-lg p-8 rounded-lg shadow-md mt-12	'
			>
				<div className='mb-4'>
					<label
						htmlFor='name'
						className='block text-gray-300 text-sm font-bold mb-2'
					>
						Full Name
					</label>
					<input
						type='text'
						id='name'
						name='name'
						value={formState.name}
						onChange={handleChange}
						className='w-full px-3 py-2 text-gray-700 bg-gray-200 rounded'
						placeholder='Your Full Name'
						required
					/>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='email'
						className='block text-gray-300 text-sm font-bold mb-2'
					>
						Email
					</label>
					<input
						type='email'
						id='email'
						name='email'
						value={formState.email}
						onChange={handleChange}
						className='w-full px-3 py-2 text-gray-700 bg-gray-200 rounded'
						placeholder='Your Email Address'
						required
					/>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='url'
						className='block text-gray-300 text-sm font-bold mb-2'
					>
						Website URL
					</label>
					<input
						type='url'
						id='url'
						name='url'
						value={formState.url}
						onChange={handleChange}
						className='w-full px-3 py-2 text-gray-700 bg-gray-200 rounded'
						placeholder='Website URL'
						required
					/>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='title'
						className='block text-gray-300 text-sm font-bold mb-2'
					>
						Title of the Website
					</label>
					<input
						type='text'
						id='title'
						name='title'
						value={formState.title}
						onChange={handleChange}
						className='w-full px-3 py-2 text-gray-700 bg-gray-200 rounded'
						placeholder='Title of the Website'
						required
					/>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='description'
						className='block text-gray-300 text-sm font-bold mb-2'
					>
						Description
					</label>
					<textarea
						id='description'
						name='description'
						value={formState.description}
						onChange={handleChange}
						className='w-full px-3 py-2 text-gray-700 bg-gray-200 rounded'
						placeholder='Brief Description of Your Website'
						rows={4}
						required
					/>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='screenshots'
						className='block text-gray-300 text-sm font-bold mb-2'
					>
						Screenshots
					</label>
					<input
						type='file'
						id='screenshots'
						name='screenshots'
						onChange={handleChange}
						className='w-full text-gray-700 bg-gray-200 rounded'
						accept='image/*'
						multiple
					/>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='category'
						className='block text-gray-300 text-sm font-bold mb-2'
					>
						Category
					</label>
					<select
						id='category'
						name='category'
						value={formState.category}
						onChange={handleChange}
						className='w-full px-3 py-2 text-gray-700 bg-gray-200 rounded'
						required
					>
						<option value=''>Select a category</option>
						<option value='Portfolio'>Portfolio</option>
						<option value='Blog'>Blog</option>
						<option value='eCommerce'>eCommerce</option>
						<option value='Corporate'>Corporate</option>
						<option value='Other'>Other</option>
					</select>
				</div>
				<div className='mb-6'>
					<label className='block text-gray-300 text-sm font-bold'>
						<input
							type='checkbox'
							name='consent'
							checked={formState.consent}
							onChange={handleChange}
							className='mr-2 leading-tight'
							required
						/>
						I agree to the terms and conditions and give permission to use the
						submitted material.
					</label>
				</div>
				<div className='w-full flex items-center justify-between'>
					<button
						type='submit'
						className='bg-neutral-950 border-[1px] border-neutral-300 hover:bg-white text-white hover:text-black py-2 px-4 rounded transition-colors duration-300'
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default SubmitScreen;
