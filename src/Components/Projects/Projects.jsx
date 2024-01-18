import { Calculator, EtchASketch, MemoryGame, TicTacToe } from "./ProjectData"

export default function Projects() {
	const repos = [TicTacToe, Calculator, MemoryGame, EtchASketch]

	function mapRepos(repos) {
		return repos.map((repo, index) => (
			<div key={index} className="w-5/12 flex justify-start border-2 my-3">
				<div className="w-4/12 h-4/12">
					<a target="_blank" rel="noreferrer" href={repo.url}>
						<img src={repo.imageSrc} alt={`${repo.title} Screenshot`} />
					</a>
				</div>
				<div>
					<a href={repo.url}>
						<h1>{repo.title}</h1>
					</a>
					<p>{repo.desc}</p>
				</div>
			</div>
		))
	}

	return (
		<div
			id="projects"
			className="w-full m-auto min-h-screen max-h-screen relative flex items-center justify-center overflow-hidden"
		>
			<div className="w-9/12 border-t-2 border-b-2 border-black dark:border-zinc-50">
				<div className="py-3">
					<h1 className="text-2xl font-bold text-center">Projects</h1>
					<div className="py-5 text-lg">
						<p>
							The following projects were created as part of{" "}
							<span className="italic hover:text-amber-700">
								<a href="https://www.theodinproject.com/">The Odin Project</a>
							</span>
							's curriculum.
						</p>
					</div>
					<div className="flex flex-wrap justify-around">{mapRepos(repos)}</div>
				</div>
			</div>
		</div>
	)
}
