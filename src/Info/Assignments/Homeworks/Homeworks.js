import { FaFileAlt, FaCode } from "react-icons/fa";

const homeworks = [
	{
		number: 1, title: "Warmup", dueDate: "Sept. 15, 11 p.m. EDT", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1qtQPrrDyqsQZbfZi1-yTPAqJi9SElMIC/view?usp=sharing", label: "Handout" },
		]
	},
	{
		number: 2, title: "Functions & Procedures", dueDate: "Sept. 22, 11 p.m. EDT", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/15cBsZHN0FlrtCsdxBTB18sFbEOP7_U5x/view?usp=sharing", label: "Handout" },
		]
	},
	{
		number: 3, title: "Recursion", dueDate: "Sept. 29, 11 p.m. EDT", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1cnFs9BhAYEc_SQ7pW2-XXA9UIqaH4QBk/view?usp=sharing", label: "Handout" },
		]
	},
	{
		number: 4, title: "More Recursion", dueDate: "Oct. 6, 11 p.m. EDT", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1dTrPCJ5JWeJn0RYnvGYz5wqwx81zcQu9/view?usp=sharing", label: "Handout" },
		]
	},
	{
		number: 5, title: "Higher-Order Procedures", dueDate: "Oct. 15, 11 p.m. EDT", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1xZ0AXz_GnH7qvja1DZ6gHGP_Vp_ug22C/view?usp=sharing", label: "Handout" },
		]
	},
	{
		number: 6, title: "Subsets", dueDate: "Oct. 22, 11 p.m. EDT", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1_sFlSOSnLyg2O8wYqS_iVTpGWO37YsPw/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/file/d/1ab5ekFbeSsK_63FNXWBApClEKthPR_hL/view?usp=sharing", label: "Source Code" },
		]
	},
	{
		number: 7, title: "ReasonML/Matrices", dueDate: "Oct. 27, 11 p.m. EDT", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1h2VZSy0Q5TbF4aJndDmSb81MXb_0TMmc/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/1rCmAG3r8Ry4R0HVkMO3ct2lXe7Prz1t9?usp=sharing", label: "Source Code" },
		]
	},
	{
		number: 8, title: "Rackettecita", dueDate: "Nov. 3, 11 p.m. EDT", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1BouMbQv-FBSQoJJ9OHMaZ1wead4BXjdM/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/1KITMWOE4G24i89mZA-4TKi2liFbBT9dZ?usp=sharing", label: "Source Code" },
		]
	},
	{
		number: 9, title: "ADTs", dueDate: "Nov. 17, 11 p.m. EST", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1BIurfliHcFqejoDZ12-uMTFdSxIlpL2g/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/14klADH9bXmMF4wk7IkjtAYXkrPaOtNYc?usp=sharing ", label: "Source Code" },
		]
	},
	{
		number: 10, title: "Trees", dueDate: "Nov. 23, 11 p.m. EST", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "", label: "Handout" },
			{ icon: <FaCode />, link: "", label: "Source Code" },
		]
	},
	{
		number: 11, title: "TBA", dueDate: "Dec. 3, 11 p.m. EST", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "", label: "Handout" },
			{ icon: <FaCode />, link: "", label: "Source Code" },
		]
	},
	{
		number: 12, title: "Final Exam", dueDate: "Dec. 11, 11 p.m. EST", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "", label: "Handout" },
			{ icon: <FaCode />, link: "", label: "Source Code" },
		]
	}
]

export default homeworks;