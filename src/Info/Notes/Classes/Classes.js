import { FaFileAlt, FaYoutube, FaFilePowerpoint } from 'react-icons/fa';

const classes = [
	// { 
	// 	number: 33, title: "Limits of Computation", outDate: "4/7/2021", active: true,
	// 	links: [
	// 		{ icon: <FaFileAlt/>, link: "", label: "Notes" },
	// 		{ icon: <FaYoutube/>, link: "", label: "Recording" },
	// 		{ icon: <FaFilePowerpoint/>, link: "", label: "Slides" },
	// 	],
	// 	tags: ["Computational Limits"]
	// },
	// { 
	// 	number: 32, title: "Diagonals, Limits of Computation", outDate: "4/5/2021", active: true,
	// 	links: [
	// 		{ icon: <FaFileAlt/>, link: "", label: "Notes" },
	// 		{ icon: <FaYoutube/>, link: "", label: "Recording" },
	// 		{ icon: <FaFilePowerpoint/>, link: "", label: "Slides" },
	// 	],
	// 	tags: ["Game",  "Computational Limits"]
	// },
	// { 
	// 	number: 31, title: "Game - MiniMax (pt. 3)", outDate: "4/2/2021", active: true,
	// 	links: [
	// 		{ icon: <FaFileAlt/>, link: "", label: "Notes" },
	// 		{ icon: <FaYoutube/>, link: "", label: "Recording" },
	// 		{ icon: <FaFilePowerpoint/>, link: "", label: "Slides" },
	// 	],
	// 	tags: ["Game"]
	// },
	// { 
	// 	number: 30, title: "Game - MiniMax (pt. 2)", outDate: "3/31/2021", active: true,
	// 	links: [
	// 		{ icon: <FaFileAlt/>, link: "", label: "Notes" },
	// 		{ icon: <FaYoutube/>, link: "", label: "Recording" },
	// 		{ icon: <FaFilePowerpoint/>, link: "", label: "Slides" },
	// 	],
	// 	tags: ["Game"]
	// },
	// { 
	// 	number: 29, title: "Game - MiniMax", outDate: "3/29/2021", active: true,
	// 	links: [
	// 		{ icon: <FaFileAlt/>, link: "", label: "Notes" },
	// 		{ icon: <FaYoutube/>, link: "", label: "Recording" },
	// 		{ icon: <FaFilePowerpoint/>, link: "", label: "Slides" },
	// 	],
	// 	tags: ["Game"]
	// },
	{ 
		number: 28, title: "Intro to Game", outDate: "Nov. 12", active: true,
		links: [
			// { icon: <FaFileAlt/>, link: "", label: "Notes" },
			{ icon: <FaYoutube/>, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d90d24e3-eb64-4035-8af8-ad9d000ea70b", label: "Recording" },
			{ icon: <FaFilePowerpoint/>, link: "https://docs.google.com/presentation/d/1z0pXvpNHPryopY9M2R80OmYu4DOoFoxs/edit?usp=sharing&ouid=106478871100678252393&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Game"]
	},
	{ 
		number: 27, title: "Insertion Sort, Selection Sort, and Merge Sort", outDate: "Nov. 10", active: true,
		links: [
			{ icon: <FaFileAlt/>, link: "https://drive.google.com/file/d/1SuD3m1tHlzA9Px0gzyXdhhKukddHihVs/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube/>, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8ed57de4-eace-4194-8d5e-ad9d000ea6ea", label: "Recording" },
			// { icon: <FaFilePowerpoint/>, link: "", label: "Slides" },
		],
		tags: ["Sorting", "Analysis"]
	},
	{
		number: 26, title: "Muppets Bloopers, More Trees, and Closures", outDate: "Nov. 8", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/122YnRwFLIjws8ixicD8gVDjJUJ7BfEHs/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=4dee09f6-c989-4335-a255-ad9d000ea6c3", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1v3caz1ciF_flNqy_STyuVgImMvsgKwqo/edit?usp=sharing&ouid=115460781257037025950&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Evaluation", "Lambda", "Trees", "Muppets"]
	},
	{
		number: 25, title: "ADTs and Trees", outDate: "Nov. 5", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/14W5xAgpWL45lZ_JxaG4Gzq-yvYMoij1i/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ea44e49d-b410-4155-8314-ad9d000ea6aa", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/193jJr00cvKfU7Ipl7cE4S029WpRjYKXB/edit?usp=sharing&ouid=106478871100678252393&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["ReasonML", "Trees"]
	},
	{
		number: 24, title: "ReasonML Syntax and checkError", outDate: "Nov. 3", active: true,
		links: [
			// { icon: <FaFileAlt/>, link: "", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=bf5e5e79-493a-4962-83cc-ad9d000ea68e", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1lzkbx_kGTPf6lrD8FZYur51KAhD0yVCA/edit?usp=sharing&ouid=106478871100678252393&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["ReasonML"]
	},
	{
		number: 23, title: "Rackette and Misc. ReasonML", outDate: "Nov. 1", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1A_gJlhKzuZrs5YVikvZanikUlzYdt_Fg/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=1c13de81-a7f4-4fe7-9428-ad9d000ea670", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1PHcAiWfeMJfBmqjyDacYWjGusILlU-hC/edit?usp=sharing&ouid=106478871100678252393&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["ReasonML", "Evaluation"]
	},
	{
		number: 22, title: "Rackette Overview", outDate: "Oct. 29 🎃", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1D9FxMKGBklaTeZtiJlUwt7kkdAMGVkAz/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=91c60508-bdf7-4713-947b-ad9d000ea655", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/18s__wBhm31Kf2W_rXP4jM1H4gTIdGxVJ/edit?usp=sharing&ouid=106478871100678252393&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["ReasonML"]
	},
	{
		number: 21, title: "Big-Theta", outDate: "Oct. 27", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1gzEvz3SjcLLBQvNGVB-NibfgO7a5-SZZ/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3474f057-f6de-48e7-830a-ad9d000ea638", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1_dwoRxwP_aL8ylS3P7aBL5UYeAvC3kxR/edit?usp=sharing&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Analysis", "Big-O"]
	},
	{
		number: 20, title: "Big-O", outDate: "Oct. 25", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/19IncI9kqL6TIvAw0pa9_pb5_R4ZMXuJ0/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b672f5ef-30e7-4903-8243-ad9d000ea61f", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1m4O-zIDmHcM6kbXkN8aq1037VPjxXF8g/edit?usp=sharing&ouid=106478871100678252393&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Analysis", "Big-O"]
	},
	{
		number: 19, title: "Recurrences and ReasonML", outDate: "Oct. 22", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1z828sY0JzVWSzlMP1Jz5FhbY4jYHiPOA/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a3bb9ce6-1f79-4214-bbae-ad9d000ea604", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1P0O5DGB_xKY8hSQOS3x8_8nMr3H4GGR9/edit?usp=sharing&ouid=106478871100678252393&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Analysis", "ReasonML"]
	},
	{
		number: 18, title: "Generic Types, Set Equality, and Even More Analysis", outDate: "Oct. 20", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1udm3ehJgegUTjJYkEfumK-FGMTNmWsGQ/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=92c133a2-4e35-4b88-916c-ad9d000ea5e5", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1zK-hgzA61hcAEuRuEIXBTYp8cVSCxnSo/edit?usp=sharing&ouid=106478871100678252393&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Design Recipe", "Analysis"]
	},
	{
		number: 17, title: "Types, Pattern Matching, and More Analysis", outDate: "Oct. 18", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1JlFp2PlwN_CaCXVuGVXid63p-yuLMoHa/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=13d38118-d50d-43cc-b889-ad9d000ea5c0", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1r8Y8AkPi6P7oJ5CYbaFJ5htBTw8ERDFe/edit?usp=sharing&ouid=106478871100678252393&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["ReasonML", "Analysis"]
	},
	{
		number: 16, title: "Combinatorics and ReasonML", outDate: "Oct. 15", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/15SXaikbqC2fsDShVPICshJcOBOejelOd/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e95e074b-dae8-4496-8c83-ad9d000ea59e", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1BV6B8991Im-6pJXueZcrAq_HoA85xZb2/edit?usp=sharing&ouid=106478871100678252393&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Recursion", "ReasonML"]
	},
	{
		number: 15, title: "Let and Intro to Reason", outDate: "Oct. 13", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1xF0zTuXRwxjnbS8E8y87cf1uY5coOoTH/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5d13d806-48bc-48bc-ad36-ad9d000ea583", label: "Recording" },
			// { icon: <FaFilePowerpoint/>, link: "", label: "Slides" },
		],
		tags: ["Racket", "ReasonML"]
	},
	{
		number: 14, title: "HOPs and Analysis", outDate: "Oct. 8", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/13HVsBXcaUn9h-gNIfTS_55oEa0j5aHtS/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2ac15177-6da2-4c09-b550-ad9d000ea54d", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/12DdPL7O3uK8Sea9KP4Zf_cBixEoneujX/edit?usp=sharing&ouid=106478871100678252393&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Racket", "Lambda", "HOPs", "Analysis"]
	},
	{
		number: 13, title: "More Analysis and Intro to Lambda", outDate: "Oct. 6", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1d_Si9GkJ4L204UCtANZspLMo4m1CJVXL/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=0e633bb1-2500-4087-97c3-adb9010b5f7d", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1cDg4NrMSFDp1JT4mrkTYkXpCxbc88IBQ/edit?usp=sharing&ouid=106478871100678252393&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Racket", "Analysis", "Lambda"]
	},
	{
		number: 12, title: "Reverse and More Analysis", outDate: "Oct. 4", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1G-dbByxDvmFjzJq7PhLE_06nx0A3qrv2/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e4320a0c-db07-49a0-a591-ad9d000ea51b", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1b0ixO4NNrn4y0ft7zELDuJ9h9SJG1c7B/edit?usp=sharing&ouid=115460781257037025950&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Recursion", "Racket", "Analysis"]
	},
	{
		number: 11, title: "Analysis and Two Argument Recursion", outDate: "Oct. 1", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1RORzIcYyjfuVSl-TFkid4aYzTU9g_PEb/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=baea9ed5-7e70-4ae0-95ab-ad9d000ea503", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1RnLJsUd-fu1A7YFf8aZkZcwm7WyAMIyc/edit?usp=sharing&ouid=106478871100678252393&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Recursion", "Racket"]
	},
	{
		number: 10, title: "Introduction to Analysis", outDate: "Sept. 29", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1uFp5tZSCSomb7sWpnRQAMQEcLS36brFm/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=88a85824-826d-4476-989c-ad9d000ea4eb", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1UjS_jYEW9MTXoneb1kQjMcpplGm9jZHj/edit?usp=sharing&ouid=106478871100678252393&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Analysis", "Racket"]
	},
	{
		number: 9, title: "Recursive Evaluation", outDate: "Sept. 27", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1pdthg4NUa3UxQF9pYBfWgJ23TydxgYIt/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=252bb686-f7b7-4200-bf07-ad9d000ea4d5", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1E28nTGxjDt_k8LFWfE4hjiZoF0JMEokP/edit?usp=sharing&ouid=106478871100678252393&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Evaluation", "Recursion", "Racket"]
	},
	{
		number: 8, title: "Recursion", outDate: "Sept. 24", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1LsRxZlXIEbdpBAIJFXvhx5HA79H8Dg2f/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a9069be6-a6eb-4a5d-9cf8-ad9d000ea4be", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1cI2NVcfBAHsGtLPoNsRt9DFo8SHW1UAu/edit?usp=sharing&ouid=106478871100678252393&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Lists", "Recursion", "Racket"]
	},
	{
		number: 7, title: "Lists", outDate: "Sept. 22", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/12f5xMjhZs1zIEGengZ11HixPtxREg-FZ/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a84e389f-79b9-4bb1-8ad4-ad9d000ea4a7", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/14qX7yulumgvqR6D2dzcjoC5gu0t5iSLC/edit?usp=sharing&ouid=106478871100678252393&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Lists", "Racket"]
	},
	{
		number: 6, title: "Booleans and Short Circuiting", outDate: "Sept. 20", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/17DNbC-1fffhgxD1tlnYbi_XC8WlcAYkX/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=44e8e19b-5a6a-4aae-9fc1-ad9d000ea491", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1LmVDEBIh2SdBlTUUjh54XOHf4zXs8jqR/edit?usp=sharing&ouid=115460781257037025950&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Racket", "Evaluation"]
	},
	{
		number: 5, title: "Definitions and Design Recipe", outDate: "Sept. 17", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1-iphHuFocH_-9QFYI8p7JoIAD2FaJZWM/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=80d56dcc-3dbd-4d1f-927a-ad9d000ea47c", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1sSH-wufg2b3ikSU-0jO8AGx_NECsBk-o/edit?usp=sharing&ouid=115460781257037025950&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Design Recipe", "Racket", "Evaluation"]
	},
	{
		number: 4, title: "Definitions and Procedures", outDate: "Sept. 15", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1ov9jt-rqiqinhSvwtn4WpAWmqOWlsNvS/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7e3a3bd0-8f4e-4051-bf8d-ad9d000ea464", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1w3ZL0_vNwPwKgRvgzs2tGercvWUPEOd1/edit?usp=sharing&ouid=106478871100678252393&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Racket", "Procedures", "Evaluation"]
	},
	{
		number: 3, title: "BNF and Processing", outDate: "Sept. 13", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1KprJWKSNAHWYebBQjrbplXjb66jIkrkz/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7e1179f3-4d55-4278-9b7e-ad9d000ea44c", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1KUxXrXp5lMQCiXqZsGNbsly6B4Ovay90/edit?usp=sharing&ouid=106478871100678252393&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Racket", "Evaluation"]
	},
	{
		number: 2, title: "Racket and BNF", outDate: "Sept. 10", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1mKyVtN26GHEzOM9Wr5nn5keaxfxPVMJL/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=384c94da-cfe3-41bc-b3ca-ad9d000ea434", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1309FD9oGnDiinlIm5FprgHQKliAJlJqE/edit?usp=sharing&ouid=106478871100678252393&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Racket", "Definitions", "Evaluation"]
	},
	{
		number: 1, title: "Welcome", outDate: "Sept. 8", active: true,
		links: [
			{ icon: <FaFileAlt />, link: " https://drive.google.com/file/d/1aRDxLNKS5LgFogMbLpP4fy4eYx1nIuUi/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6913ebf9-15d6-4189-b1c1-ad9d000ea3fc", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1REtJJFko79Ia5ynNBFkJsQOYPNSDhxa9/edit?usp=sharing&ouid=106478871100678252393&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Racket"]
	},
]

export default classes;
