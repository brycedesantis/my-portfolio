import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import JAVASCRIPT from "../assets/javascript.png"
import REACT from "../assets/react.png"

export default function Skills() {
	return (
		<div name="skills" className="w-full h-screen bg-inherit">
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div>
					<p className="text-4xl inline font-bold border-b-4 border-pink-600">
						Skills
					</p>
					<p className="py-4">I have worked with the following technologies</p>
				</div>
				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
					<div className="rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto pt-2" src={HTML} alt="HTML icon" />
						<p className="my-4">HTML</p>
					</div>
					<div className="rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto pt-2" src={CSS} alt="CSS icon" />
						<p className="my-4">CSS</p>
					</div>
					<div className="rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto pt-2"
							src={JAVASCRIPT}
							alt="Javascript icon"
						/>
						<p className="my-4">Javascript</p>
					</div>
					<div className="rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto pt-2" src={REACT} alt="React icon" />
						<p className="my-4">React</p>
					</div>
				</div>
			</div>
		</div>
	)
}
