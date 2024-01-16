export default function About() {
	return (
		<div
			id="about"
			className="w-full border-t-2 border-b-2 border-black dark:border-zinc-50 w-1/2"
		>
			<div className="py-3 px-20">
				<h1 className="text-2xl font-bold text-center">
					Hello! My name is <span className="text-red-700">Bryce DeSantis</span>
				</h1>
				<div>
					<div className="my-4 py-2 flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-8 h-8 pr-2 animate-[bounce_1.5s_infinite]"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
							/>
						</svg>

						<p className="text-lg">
							I am a self taught programmer with a focus on front end web
							development.
						</p>
					</div>

					<div className="my-4 py-2 flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-8 h-8 pr-2 animate-[bounce_1.5s_infinite]"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
							/>
						</svg>

						<p className="w-10/12 text-lg">
							My journey began through youtube videos and tutorials before
							following courses from{" "}
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
			</div>
		</div>
	)
}
