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
		number: 3, title: "Recursion", dueDate: "Sept. 26-28", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1TdWDUfqkZ6YfTVp5rUUsgi0ns-w3mW95/view?usp=sharing", label: "Handout" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1m7rbSVNVavUJuO0Crk5G7N6LVxJC8-Y1SH8chyEJj-g/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 4, title: "Natural Number Recursion", dueDate: "Oct. 3-5", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1v6oqmOA9CXwIwvGineLxphyoCO9Ncpq4/view?usp=sharing", label: "Handout" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/12e6wlyRkFNLtsjiONW0cwZLoovEHddkJv2bWuu5N1H8/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 5, title: "Search", dueDate: "Oct. 10-13", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1yhW-uCzRtbJcF4DKTbINm_PEFcxEmL1B/view?usp=sharing", label: "Handout" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/177NOokd2gYCnTEKoFI82U5sAVx-WAgY5Zlwp32oZltw/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 6, title: "Reason", dueDate: "Oct. 17-19", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1YmgDFjsgxMf2nUfYnX3NIUs7yJop9hKI/view?usp=sharing", label: "Handout" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1S1Jzy3uPjv5i9B22i14JZV_HlHccD-_RCciXhG6MOKw/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 7, title: "Debugging", dueDate: "Oct. 24-26", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1iDaJbADco5YSr0myZHSneotNwAYWREYb/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/1j8PovOioz31bsfyTSTjB6OB4zC_qRb5x?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1xxBd2ltKOhWsv1WRYLZil4aT8tckXelUhI68bzjsHN0/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 8, title: "Environments", dueDate: "Oct. 31-Nov. 2", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1H55tswItHTUrTYyYhaj5d5T-3YSTx1Bz/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/1c5cf33pW_OQWYVwzahwzMR9nMaCNb1HV?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1dptDGkt2mjxcSRJxaIfcewM2be11qVMW1nCU03OEKnI/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 9, title: "ADTs", dueDate: "Nov. 7-9", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1YjvgQtTR3KjHizLlpFiU6WEwfsw3XYDf/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/1yp7AVmJPXtCRZ6fahls0Ijd1ttXAB5O5?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1fS7fOCcg2jHjYsZErBpfLBdOzsZqdG2KrHb32HDzNAI/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 10, title: "Game", dueDate: "Nov. 14-16", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1eroUL0UBdgEa6oIy1qLs9S1Wnghe7BOZ/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/1-SVnY6ER-eO9WfwX2KJ-BW26voi0W49H?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/17i7QPazxFga1Lm1qUimXQfBbLNuIjjJf9JaM80TSSEg/edit?usp=sharing", label: "Slides" },
		]
	},
	{
		number: 11, title: "Sort", dueDate: "Nov. 21-23", active: false,
		links: [
			{ icon: <FaFileAlt />, link: "", label: "Handout" },
			{ icon: <FaCode />, link: "", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "", label: "Slides" },
		]
	},

]

export default labs;