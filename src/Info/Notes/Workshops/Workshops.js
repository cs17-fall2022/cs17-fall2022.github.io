import { FaFilePowerpoint, FaYoutube } from "react-icons/fa";

const workshops = [
	{
		number: 1, title: "Learning CS and Fun with DrRacket", outDate: "Sept. 12-13", active: true,
		links: [
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/180bnESyw0ghVeNxApzs2TV5ALze0egzdFBteFbgUSgU/edit", label: "Slides" },
		]
	},
	{
		number: 2, title: "Expressions, Types, and Procedures", outDate: "Sept. 19-20", active: true,
		links: [
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1WoyKjD8VFrURMQMkJ0RyqjaAsLKX7IDK/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		]
	},
	{
		number: 3, title: "Boolean Logic, Lists, and Recursion", outDate: "Sept. 26-27", active: true,
		links: [
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1FVCManBkIrxKXr1aGerOFnJVB1JcA_Y8JN1RVRoE8B4/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 4, title: "Recurrence Relations", outDate: "Oct. 3-4", active: false,
		links: [
			{ icon: <FaFilePowerpoint />, link: "", label: "Slides" },
		]
	},
	{
		number: 5, title: "Analysis, Lambda Expressions, and HOPs", outDate: "Oct. 11", active: false,
		links: [
			{ icon: <FaFilePowerpoint />, link: "", label: "Slides" },
		]
	},
	{
		number: 6, title: "Let Expressions and Intro to ReasonML", outDate: "Oct. 17-18", active: false,
		links: [
			{ icon: <FaFilePowerpoint />, link: "", label: "Slides" },
		]
	},
	{
		number: 7, title: "More ReasonML", outDate: "Oct. 24-25", active: false,
		links: [
			{ icon: <FaFilePowerpoint />, link: "", label: "Slides" },
		]
	},
	{
		number: 9, title: "Debugging Tips, Modules, and Trees", outDate: "Oct. 31-Nov. 1", active: false,
		links: [
			{ icon: <FaFilePowerpoint />, link: "", label: "Slides" },
		]
	},
	{
		number: 10, title: "Rackette Concept Review!", outDate: "Nov. 7-8", active: false,
		links: [
			{ icon: <FaFilePowerpoint />, link: "", label: "Slides" },
		]
	},
	{
		number: 11, title: "Analysis", outDate: "Nov. 21-22", active: false,
		links: [
			{ icon: <FaFilePowerpoint />, link: "", label: "Slides" },
		]
	},
	{
		number: 12, title: "Final Review Workshop", outDate: "Nov. 28-29", active: false,
		links: [
			// { icon: <FaFilePowerpoint />, link: "", label: "Slides" },
			{ icon: <FaYoutube />, link: "", label: "Recording" },
		]
	},
]

export default workshops;
