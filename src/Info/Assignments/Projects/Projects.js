import { FaFileAlt, FaCode, FaFilePowerpoint, FaYoutube, } from 'react-icons/fa';

const projects = [
	{
		number: 1, title: "Bignum", dueDate: "Oct. 12, 11 p.m. EDT", active: true,
		notes: "",
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1xbIsQ9hgsxafSpSU2FCpTm9vspvPiyOI/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/file/d/1mDnpaWWCTYRqLQgHjGLR59_ekBgZ0U5i/view?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1bVJCOUqoPwDbjJMAXPH4aIAEIcDMVEkCLf53lDgVOT4/edit?usp=sharing", label: "Gearup Slides" },
			{ icon: <FaYoutube />, link: "https://drive.google.com/file/d/1q9m_6CxkCNdULeTjsDO9MocmGJhm059w/view?usp=sharing", label: "Gearup Recording" }
		]
	},
	{
		number: 2, title: "Rackette", dueDate: "Nov. 11, 11 p.m. EST", active: true,
		notes: "",
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1N_DLPNCPN0wJ4gaLTfrhnxb13kuLYDvY/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/1UrUYDOucan5iFkZCMT8PlQ0nBJiKPk4x?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1Zvj6hrrfLHbjTpacp2cR55YoyOyUSUac3CQwwpnc-Ag/edit?usp=sharing", label: "Gearup Slides" },
			{ icon: <FaYoutube />, link: "https://drive.google.com/file/d/14dAvht4Wdp1fVphB6jY3iiUK1wy69N85/view?usp=sharing", label: "Gearup Recording" }
		]
	},
	{
		number: 3, title: "Game", dueDate: "Dec. 5, 11 p.m. EST", active: true,
		notes: "",
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/16KXy9bfLnmiXTFbBtzeRnLt74B8Jud7T/view?usp=sharing", label: "Handout" },
			{ icon: <FaCode />, link: "https://drive.google.com/drive/folders/11_P7pghCiPeUp98fnA_GAid1jG6VGFEq?usp=sharing", label: "Source Code" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1i84lrLElvwqFIgAQ47xe1_IvygMGAukrBKutwl5b_jQ/edit#slide=id.p1", label: "Gearup Slides" },
			{ icon: <FaYoutube />, link: "https://drive.google.com/file/d/1stpweUQQ29dpJdxHLXnPjeDCKv-RLQ2l/view?usp=sharing", label: "Gearup Recording" }
		]
	}
]

export default projects;