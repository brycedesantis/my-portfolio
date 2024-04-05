import Card from "../Card";
import { TicTacToe, Calculator, InstaClone, MemoryGame } from "./ProjectData";

export default function Projects() {
	const projects = [TicTacToe, Calculator, InstaClone, MemoryGame];

	return (
		<div name="projects" className="w-full md:h-screen bg-inherit">
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl inline font-bold border-b-4 border-[#A00822] dark:border-pink-600">
						Projects
					</p>
					<p className="py-6">Here are a few projects that I have worked on</p>
				</div>

				<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
					{projects.map((project, index) => (
						<Card
							key={index}
							title={project.title}
							imageSrc={project.imageSrc}
							demoUrl={project.demoUrl}
							githubRepo={project.githubRepo}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
