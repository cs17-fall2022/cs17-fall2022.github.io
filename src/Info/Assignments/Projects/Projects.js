import { FaFileAlt, FaCode, FaFilePowerpoint, FaYoutube, } from 'react-icons/fa';

const projects = [
	{
		number: 1, title: "Bignum", dueDate: "Oct. 14, 11 p.m. EDT", active: true,
		notes: "",
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1cuay15nF8t7RtgrXaX63ZbszArT1nq76/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/file/d/1op5GeA4aIMZ_Iy67HsxRmnPcyTX43cKm/view?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1cWnpDzTof-05hxJ_1smuEQIofEjEAywTps4cYOfNni4/edit?usp=sharing", label: "Gearup Slides" },
			{ icon: <FaYoutube />, link: "https://drive.google.com/file/d/1KRWWSK10yCuAPcPVGxfxMTcQ46FPqQpR/view?usp=sharing", label: "Gearup Recording" }
		]
	},
	{
		number: 2, title: "Rackette", dueDate: "Nov. 12, 11 p.m. EST", active: true,
		notes: "",
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1msNxycu583Z7HzdpJ-Kc07OLMbpgVFDF/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/164Kfj1iMUu3tW31ehRgOyOnbFkgs6yoI?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1f3t7a0w1dfvGKiFTMRyFbKRKzndwhJHFeadpFAU8POI/edit?usp=sharing", label: "Gearup Slides" },
			{ icon: <FaYoutube />, link: "https://drive.google.com/file/d/14JQKpjaKgD4VRbGgTCTPcLcwMhvbdQGQ/view?usp=sharing", label: "Gearup Recording" }
		]
	},
	{
		number: 3, title: "Game", dueDate: "Dec. 6, 11 p.m. EST", active: true,
		notes: "",
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1EV-U0xg1YUrWmkRDmFRXOsZXSVp6wKjk/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/1CrGPUMuPhF0_a5grNTkrhh7kxLwz0-rV?usp=sharing", label: "Source Code" },
		]
	}
]

export default projects;