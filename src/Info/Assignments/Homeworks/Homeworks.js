import { FaFileAlt, FaCode } from "react-icons/fa";

const homeworks = [
	{
		number: 1, title: "Warmup", dueDate: "Sept. 14, 11 p.m. EDT", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/18-wfa3zqeF8qPq9W05Q03YTigVXEz-ti/view?usp=sharing", label: "Handout" },
		]
	},
	{
		number: 2, title: "Procedures", dueDate: "Sept. 21, 11 p.m. EDT", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1AA1iFkPo3HNv75FhQehjnrULpMRUgnTO/view?usp=sharing", label: "Handout" },
		]
	},
	{
		number: 3, title: "Recursion", dueDate: "Sept. 28, 11 p.m. EDT", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1FzF9mA591mgXVI49YM_WC1ZCxWAS_Oc-/view?usp=sharing", label: "Handout" },
		]
	},
	{
		number: 4, title: "More Recursion & Higher Order Procedures", dueDate: "Oct. 5, 11 p.m. EDT", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "", label: "Handout" },
		]
	},
	{
		number: 5, title: "Higher Order Procedures and Subsets", dueDate: "Oct. 14, 11 p.m. EDT", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "", label: "Handout" },
		]
	},
	{
		number: 6, title: "K-Subsets and Matrices", dueDate: "Oct. 20, 11 p.m. EDT", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "", label: "Handout" },
			{ icon: <FaCode />, link: "", label: "Source Code" },
		]
	},
	{
		number: 7, title: "Rackettecita", dueDate: "Oct. 26, 11 p.m. EDT", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "", label: "Handout" },
			{ icon: <FaCode />, link: "", label: "Source Code" },
		]
	},
	{
		number: 8, title: "ADTs", dueDate: "Nov. 2, 11 p.m. EDT", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "", label: "Handout" },
			{ icon: <FaCode />, link: "", label: "Source Code" },
		]
	},
	{
		number: 9, title: "Trees", dueDate: "Nov. 16, 11 p.m. EST", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "", label: "Handout" },
			{ icon: <FaCode />, link: "", label: "Source Code" },
		]
	},
	{
		number: 10, title: "Coming Soon!", dueDate: "Nov. 22, 11 p.m. EST", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "", label: "Handout" },
			{ icon: <FaCode />, link: "", label: "Source Code" },
		]
	},
	{
		number: 11, title: "Final Exam", dueDate: "Dec. 9, 3 p.m. EST", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "", label: "Handout" },
			{ icon: <FaCode />, link: "", label: "Source Code" },
		]
	}
]

export default homeworks;