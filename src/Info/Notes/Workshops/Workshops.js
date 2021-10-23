import { FaFilePowerpoint, FaYoutube } from "react-icons/fa";

const workshops = [
	{
		number: 1, title: "Learning CS and Fun with DrRacket", outDate: "Sept. 9-10", active: true,
		links: [
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1Yog74R-KCYMdulASGEKSagh2vxcvK5Eq/edit?usp=sharing&ouid=106478871100678252393&rtpof=true&sd=true", label: "Slides" },
		]
	},
	{
		number: 2, title: "Expressions, Types, and Procedures", outDate: "Sept. 16-17", active: true,
		links: [
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1WAKcbLuQSBDQvPX85NX9w6eEohZWya8u/edit?usp=sharing&ouid=106478871100678252393&rtpof=true&sd=true", label: "Slides" },
		]
	},
	{
		number: 3, title: "Boolean Logic, Lists, and Recursion", outDate: "Sept. 23-24", active: true,
		links: [
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1voA864XAC5cia87wWeJh4QiyUjb4v6Hl/edit?usp=sharing&ouid=106478871100678252393&rtpof=true&sd=true", label: "Slides" },
		]
	},
	{
		number: 4, title: "Recurrence Relations", outDate: "Sept. 30-Oct. 1", active: true,
		links: [
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/184M-tXCibZleamG4V01NtPmPubgOmbBG/edit?usp=sharing&ouid=106478871100678252393&rtpof=true&sd=true", label: "Slides" },
		]
	},
	{
		number: 5, title: "Analysis, Lambda Expressions, and HOPs", outDate: "Oct. 7-8", active: true,
		links: [
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/18wJxYpihbQLHjU8GdWujfbKbYRRu_-nu/edit?usp=sharing&ouid=106478871100678252393&rtpof=true&sd=true", label: "Slides" },
		]
	},
	{
		number: 6, title: "Let Expressions and Intro to ReasonML", outDate: "Oct. 14-15", active: true,
		links: [
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1l6Q4ywpBypISG9AMn4iZiihFaoS-KagW/edit?usp=sharing&ouid=106478871100678252393&rtpof=true&sd=true", label: "Slides" },
		]
	},
	{
		number: 7, title: "More ReasonML", outDate: "Oct. 21-22", active: true,
		links: [
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1CIZhSn7FtHv3t6_R7l_ONc0dT-ubTWNy/edit?usp=sharing&ouid=106478871100678252393&rtpof=true&sd=true", label: "Slides" },
		]
	},
	{
		number: 9, title: "Debugging Tips, Modules, and Trees", outDate: "Oct. 28-29", active: false,
		links: [
			{ icon: <FaFilePowerpoint />, link: "", label: "Slides" },
		]
	},
	{
		number: 10, title: "TBA", outDate: "Nov. 4-5", active: false,
		links: [
			{ icon: <FaFilePowerpoint />, link: "", label: "Slides" },
			{ icon: <FaYoutube />, link: "", label: "Recording" },
		]
	},
]

export default workshops;
