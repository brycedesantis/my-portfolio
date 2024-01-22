export default function Home() {
	return (
		<div name="home" className="w-full h-screen bg-inherit">
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
				<p className="text-[#A00822] dark:text-pink-600 text-xl">
					Hello! My name is
				</p>
				<h1 className="text-4xl text-[#2340A9] sm:text-7xl font-bold dark:text-[#CCD6F6]">
					Bryce DeSantis
				</h1>
				<h2 className="text-4xl text-[#494B6E] sm:text-7xl font-bold dark:text-[#949CB8]">
					I am a Front End Developer.
				</h2>
				<p className="py-4 max-w-[700px]">
					I am currently focused on building front end web applications while
					continuing to learn backend frameworks and technologies. My journey
					began through youtube videos and tutorials before following courses
					from{" "}
					<span>
						<a
							className="hover:text-cyan-500"
							href="https://www.freecodecamp.org/"
						>
							freeCodeCamp
						</a>
					</span>{" "}
					and{" "}
					<span className="hover:text-amber-700">
						<a href="https://www.theodinproject.com/">The Odin Project</a>
					</span>
					.
				</p>
			</div>
		</div>
	)
}
