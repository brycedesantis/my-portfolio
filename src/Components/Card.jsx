export default function Card({ title, imageSrc, demoUrl, githubRepo }) {
	return (
		<div
			style={{ backgroundImage: `url(${imageSrc})` }}
			className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
		>
			<div className="opacity-0 group-hover:opacity-100">
				<span className="text-2xl font-bold text-black tracking-wider">
					{title}
				</span>
				<div className="pt-8 text-center">
					<a target="_blank" rel="noreferrer" href={demoUrl}>
						<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
							Demo
						</button>
					</a>
					<a target="_blank" rel="noreferrer" href={githubRepo}>
						<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
							Code
						</button>
					</a>
				</div>
			</div>
		</div>
	)
}
