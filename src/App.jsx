import { useState } from "react"
import Nav from "./Components/Nav"
import Home from "./Components/Home"
import About from "./Components/About"

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
		</div>
	)
}
