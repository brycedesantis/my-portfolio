import { useState } from "react"
import { Link } from "react-scroll"
import {
	FaGithub,
	FaMoon,
	FaSun,
	FaLinkedin,
	FaBars,
	FaTimes,
} from "react-icons/fa"
import { HiMail } from "react-icons/hi"

export default function Nav(props) {
	const [mobileNav, setMobileNav] = useState(false)
	const toggleNav = () => setMobileNav((prevState) => !prevState)

	return (
		<nav className="w-full h-[80px] px-4 flex justify-between items-center fixed z-10 bg-inherit shadow-lg shadow-[#040c16]">
			<div className="flex justify-between items-center">
				<button
					className="px-5 py-2 text-sm leading-5 font-semibold"
					onClick={props.toggleDarkMode}
				>
					{props.darkMode ? (
						<FaSun className="hover:scale-110" size={30} fill="#facc15" />
					) : (
						<FaMoon className="hover:scale-110" size={30} />
					)}
				</button>

				<ul className="hidden md:flex justify-evenly">
					<li className="group/item hover:scale-110 flex flex-col items-center mt-6">
						<a
							href="https://github.com/brycedesantis"
							target="_blank"
							rel="noreferrer"
						>
							<FaGithub size={30} />
						</a>
						<div className="group/edit invisible group-hover/item:visible">
							<p className="group-hover/edit:text-inherit">GitHub</p>
						</div>
					</li>
					<li className="group/item hover:scale-110 flex flex-col items-center mt-6">
						<a
							href="https://www.linkedin.com/in/bryce-desantis-a969381b8/"
							target="_blank"
							rel="noreferrer"
						>
							<FaLinkedin size={30} />
						</a>
						<div className="group/edit invisible group-hover/item:visible">
							<p className="group-hover/edit:text-inherit">LinkedIn</p>
						</div>
					</li>
					<li className="group/item hover:scale-110 flex flex-col items-start mt-6">
						<HiMail size={30} />
						<div className="group/edit invisible group-hover/item:visible">
							<p className="group-hover/edit:text-inherit">
								brycedesantis@hotmail.com
							</p>
						</div>
					</li>
				</ul>
			</div>

			<ul className="hidden md:flex">
				<li>
					<Link to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li>
					<Link to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li>
					<Link to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li>
					<Link to="projects" smooth={true} duration={500}>
						Projects
					</Link>
				</li>
				<li>
					<Link to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/*hamburger menu*/}
			<div onClick={toggleNav} className="md:hidden z-10">
				{!mobileNav ? <FaBars size={25} /> : <FaTimes size={25} />}
			</div>

			{/*mobile menu */}
			<ul
				className={
					!mobileNav
						? "hidden"
						: "absolute top-0 left-0 w-full h-screen bg-inherit flex flex-col justify-center items-center"
				}
			>
				<li className="py-6 text-4xl">
					<Link onClick={toggleNav} to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link onClick={toggleNav} to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link onClick={toggleNav} to="skills" smooth={true} duration={500}>
						SKills
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link onClick={toggleNav} to="projects" smooth={true} duration={500}>
						Projects
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link onClick={toggleNav} to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
				<li className="py-4">
					<ul className="flex justify-evenly">
						<li className="group/item flex flex-col items-center mt-6">
							<a
								href="https://github.com/brycedesantis"
								target="_blank"
								rel="noreferrer"
							>
								<FaGithub size={30} />
							</a>
						</li>
						<li className="group/item flex flex-col items-center mt-6">
							<a
								href="https://www.linkedin.com/in/bryce-desantis-a969381b8/"
								target="_blank"
								rel="noreferrer"
							>
								<FaLinkedin size={30} />
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	)
}
