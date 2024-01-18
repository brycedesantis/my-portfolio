import { useState } from "react"
import Nav from "./Components/Nav"
import About from "./Components/About"
import Projects from "./Components/Projects/Projects"

export default function App() {
	const [darkMode, setDarkMode] = useState(true)

	function toggleDarkMode() {
		setDarkMode((prevMode) => !prevMode)
	}

	return (
		<div className={`overflow-auto ${darkMode ? "dark" : "light"}`}>
			<Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<main className="min-h-screen max-h-screen flex items-center justify-start flex-col relative">
				<About />
				<Projects />
			</main>
		</div>
	)
}
