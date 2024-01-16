import { useState } from "react"
import Nav from "./Components/Nav"
import About from "./Components/About"

export default function App() {
	const [darkMode, setDarkMode] = useState(true)

	function toggleDarkMode() {
		setDarkMode((prevMode) => !prevMode)
	}

	return (
		<div className={`h-lvh w-full mx-auto ${darkMode ? "dark" : "light"}`}>
			<Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<main className="mx-auto my-4 w-1/2">
				<About />
			</main>
		</div>
	)
}
