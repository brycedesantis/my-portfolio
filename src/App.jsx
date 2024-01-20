import { useState } from "react"
import Nav from "./Components/Nav"
import Home from "./Components/Home"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects/Projects"
import Contact from "./Components/Contact"

export default function App() {
	const [darkMode, setDarkMode] = useState(true)

	function toggleDarkMode() {
		setDarkMode((prevMode) => !prevMode)
	}

	return (
		<div className={`${darkMode ? "dark" : "light"}`}>
			<Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<Home />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	)
}
