import { FaFileAlt, FaCode, FaFilePowerpoint, FaYoutube, } from 'react-icons/fa';

const projects = [
	{
		number: 1, title: "Bignum", dueDate: "Oct. 12, 11 p.m. EDT", active: true,
		notes: "",
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1xbIsQ9hgsxafSpSU2FCpTm9vspvPiyOI/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/file/d/1-0qoc_NvlwFKGa47FD0ALeHy73ml5QL4/view?usp=sharing", label: "Source Code" },
			// { icon: <FaFilePowerpoint />, link: "", label: "Gearup Slides" },
			// { icon: <FaYoutube />, link: "", label: "Gearup Recording" }
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