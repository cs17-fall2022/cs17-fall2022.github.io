import { FaFileAlt, FaCode, FaFilePowerpoint, FaYoutube, } from 'react-icons/fa';

const projects = [
	{
		number: 1, title: "Bignum", dueDate: "Oct. 12, 11 p.m. EDT", active: false,
		notes: "",
		links: [
			{ icon: <FaFileAlt />, link: "", label: "Handout" },
			{ icon: <FaCode />, link: "", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "", label: "Gearup Slides" },
			{ icon: <FaYoutube />, link: "", label: "Gearup Recording" }
		]
	},
	{
		number: 2, title: "Rackette", dueDate: "Nov. 11, 11 p.m. EST", active: false,
		notes: "",
		links: [
			{ icon: <FaFileAlt />, link: "", label: "Handout" },
			{ icon: <FaCode />, link: "", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "", label: "Gearup Slides" },
			{ icon: <FaYoutube />, link: "", label: "Gearup Recording" }
		]
	},
	{
		number: 3, title: "Game", dueDate: "Dec. 5, 11 p.m. EST", active: false,
		notes: "",
		links: [
			{ icon: <FaFileAlt />, link: "", label: "Handout" },
			{ icon: <FaCode />, link: "", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "", label: "Gearup Slides" },
			{ icon: <FaYoutube />, link: "", label: "Gearup Recording" }
		]
	}
]

export default projects;