import TicTacToeScreenshot from "../../assets/tic-tac-toe-site.png"
import CalculatorScreenshot from "../../assets/calculator-site.png"
import EtchASketchScreenshot from "../../assets/etch-a-sketch-site.png"
import MemoryGameScreenshot from "../../assets/memory-game-site.png"

function Data(title, url, githubRepo, imageSrc, desc) {
	return { title, url, githubRepo, imageSrc, desc }
}

const TicTacToe = Data(
	"Tic Tac Toe",
	"https://legendary-banoffee-4d1089.netlify.app/",
	"https://github.com/brycedesantis/tic-tac-toe",
	TicTacToeScreenshot,
	"TicTacToe Description"
)

const Calculator = Data(
	"Calculator",
	"https://lucent-fairy-d1731a.netlify.app/",
	"https://github.com/brycedesantis/calculator",
	CalculatorScreenshot,
	"Calculator Description"
)

const EtchASketch = Data(
	"Etch-A-Sketch",
	"https://incredible-kashata-cb895b.netlify.app/",
	"https://github.com/brycedesantis/etch-a-sketch",
	EtchASketchScreenshot,
	"EAS Description"
)

const MemoryGame = Data(
	"Memory Game",
	"https://wonderful-heliotrope-81eaac.netlify.app/",
	"https://github.com/brycedesantis/memory-game",
	MemoryGameScreenshot,
	"Mem Desc"
)

export { TicTacToe, Calculator, EtchASketch, MemoryGame }
