import TicTacToeScreenshot from "../../assets/tic-tac-toe-site.png"
import CalculatorScreenshot from "../../assets/calculator-site.png"
import EtchASketchScreenshot from "../../assets/etch-a-sketch-site.png"
import MemoryGameScreenshot from "../../assets/memory-game-site.png"

function Data(title, demoUrl, githubRepo, imageSrc) {
	return { title, demoUrl, githubRepo, imageSrc }
}

const TicTacToe = Data(
	"Tic Tac Toe",
	"https://legendary-banoffee-4d1089.netlify.app/",
	"https://github.com/brycedesantis/tic-tac-toe",
	TicTacToeScreenshot
)

const Calculator = Data(
	"Calculator",
	"https://lucent-fairy-d1731a.netlify.app/",
	"https://github.com/brycedesantis/calculator",
	CalculatorScreenshot
)

const EtchASketch = Data(
	"Etch-A-Sketch",
	"https://incredible-kashata-cb895b.netlify.app/",
	"https://github.com/brycedesantis/etch-a-sketch",
	EtchASketchScreenshot
)

const MemoryGame = Data(
	"Memory Game",
	"https://wonderful-heliotrope-81eaac.netlify.app/",
	"https://github.com/brycedesantis/memory-game",
	MemoryGameScreenshot
)

export { TicTacToe, Calculator, EtchASketch, MemoryGame }
