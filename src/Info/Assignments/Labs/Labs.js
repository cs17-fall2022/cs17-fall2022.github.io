import { FaFileAlt, FaCode, FaFilePowerpoint } from 'react-icons/fa';

const labs = [
	{
		number: 1, title: "Setup", dueDate: "Sept. 12-14", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1mXvYHGNMZBPoyBVsilVGG2GjcRHKqqmS/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/file/d/16Bp62o_d1bbLSISwWkcrdNSilG3mVTLk/view?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1wHL3jiN9zAz4C1-BN4x7XCTdhdMB0tNaBzs842bxLw0/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 2, title: "Racket Introduction", dueDate: "Sept. 19-21", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1erC9Ih37tP8A2Pa87nCBiUwWCQ7SwAy4/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/file/d/12sjCdtjB-Gejmv9HD4SKCjqEZ700AU9l/view?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1smxkZENOOmwA1G7LB0a1BUZytCXEwjscglcaB8XFDMc/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 3, title: "Recursion", dueDate: "Sept. 26-28", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "", label: "Handout" },
			{ icon: <FaFilePowerpoint />, link: "", label: "Slides" },
		]
	},
	{
		number: 4, title: "Natural Number Recursion", dueDate: "Oct. 3-5", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "", label: "Handout" },
			{ icon: <FaFilePowerpoint />, link: "", label: "Slides" },
		]
	},
	{
		number: 5, title: "Search", dueDate: "Oct. 10-12", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "", label: "Handout" },
			{ icon: <FaFilePowerpoint />, link: "", label: "Slides" },
		]
	},
	{
		number: 6, title: "Reason", dueDate: "Oct. 17-19", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "", label: "Handout" },
			{ icon: <FaFilePowerpoint />, link: "", label: "Slides" },
		]
	},
	{
		number: 7, title: "Environments", dueDate: "Oct. 24-26", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "", label: "Handout" },
			{ icon: <FaCode />, link: "", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "", label: "Slides" },
		]
	},
	{
		number: 8, title: "ADTs", dueDate: "Oct. 31-Nov. 2", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "", label: "Handout" },
			{ icon: <FaCode />, link: "", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "", label: "Slides" },
		]
	},
	{
		number: 9, title: "Sort", dueDate: "Nov. 7-9", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "", label: "Handout" },
			{ icon: <FaCode />, link: "", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "", label: "Slides" },
		]
	},
	{
		number: 10, title: "Game", dueDate: "Nov. 14-16", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "", label: "Handout" },
			{ icon: <FaCode />, link: "", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "", label: "Slides" },
		]
	},
]

export default labs;