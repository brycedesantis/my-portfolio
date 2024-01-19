export default function About() {
	return (
		<div name="about" className="w-full h-screen bg-inherit">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-4xl inline font-bold border-b-4 border-pink-600">
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-right text-4xl font-bold">
						<p>
							My name is Bryce DeSantis and I am a self taught Front End
							Developer.
						</p>
					</div>
					<div>
						<p>
							I was introduced to web development after watching a youtube video
							of someone making a simple weather app. The ability to make a
							complete application using several individual elements is an
							aspect that has made the learning experience fun and rewarding. In
							the future I plan to learn new technologies and frameworks in the
							front end, as well as expanding my knowledge to the workings of
							the back end.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
