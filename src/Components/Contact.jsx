export default function Contact() {
	return (
		<div
			name="contact"
			className="w-full h-screen bg-inherit flex justify-center items-center p-4"
		>
			<form
				method="POST"
				action="https://getform.io/f/ccae9ba3-e813-42e5-85c8-818a1effdafa"
				className="flex flex-col max-w-[600px] w-full"
			>
				<div className="pb-8">
					<p className="text-4xl inline font-bold border-b-4 border-[#A00822] dark:border-pink-600">
						Contact
					</p>
					<p className="py-4">
						Feel free to fill out the form or send me an email -
						brycedesantis@hotmail.com
					</p>
				</div>
				<input
					className="bg-[#ccd6f6] p-2 text-black"
					type="text"
					placeholder="Name"
					name="name"
				/>
				<input
					className="my-4 p-2 bg-[#ccd6f6] text-black"
					type="email"
					placeholder="Email"
					name="email"
				/>
				<textarea
					className="bg-[#ccd6f6] p-2 text-black"
					name="message"
					rows="10"
					placeholder="Message"
				></textarea>
				<button className="border-2 border-black hover:bg-[#A00822] hover:border-[#A00822] hover:text-white dark:hover:bg-pink-600 dark:hover:border-pink-600 dark:border-white dark:text-white px-4 py-3 my-8 mx-auto flex items-center">
					Send
				</button>
			</form>
		</div>
	)
}
