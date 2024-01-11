import { useState } from "react"
import Nav from "./Components/Nav"

export default function App() {
	const [darkMode, setDarkMode] = useState(true)

	function toggleDarkMode() {
		setDarkMode((prevMode) => !prevMode)
	}

	return (
		<div className={`h-lvh w-full mx-auto ${darkMode ? "dark" : "light"}`}>
			<Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
		</div>
	)
}
