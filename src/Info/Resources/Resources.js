import { FaQuestion, FaSchool, FaShoePrints, FaComment, FaFileAlt, FaCode } from 'react-icons/fa';

export const ImportantLinks = [
	{ label: "Syllabus", icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1bmMQqKr51Oi9FnGxf6XuV2DYz8ajxbaT/view?usp=sharing", description: "Class info, grading, and late policy" },
	{ label: "Gradescope", icon: <FaSchool />, link: "https://www.gradescope.com/", description: "Submit homework, projects, and exams" },
	{ label: "EdStem", icon: <FaQuestion />, link: "https://edstem.org/us/join/2QYWUz", description: "Ask clarification, debugging, and conceptual questions" },
	{ label: "Hours", icon: <FaComment />, link: "https://hours.cs.brown.edu", description: "Sign up for TA hours or lab queues" },
	{ label: "Lab Assignments", icon: <FaShoePrints />, link: "https://docs.google.com/spreadsheets/d/1rUxIId_k6UXRJxxQ1FViy_Ils7R4sazCfAoSsujjHKc/edit?usp=sharing", description: "See lab sections" },
	{ label: "RePlay", icon: <FaCode />, link: "https://csci017.cs.brown.edu/", description: "ReasonML playground" },
	// { label: "Zoom Link", icon: <FaVideo />, link: "https://brown.zoom.us/j/95809383337", description: "Attend class at 11 a.m. MWF" },
]

export const Resources = [
	{
		section: "Course Documentation", links:
			[
				{ label: "Course Policies/Collaboration Policy", link: "https://drive.google.com/file/d/1baGoAOAWQdMptAQz04wZdMOK5TLZauTR/view?usp=sharing" },
				{ label: "Guide to TA Hours", link: "https://drive.google.com/file/d/1ZEyDpxNA04oPC5IPIs9pNU7CwOC3-_qD/view?usp=sharing" },
				{ label: "Pair and Buddy Programming Guide", link: "https://drive.google.com/file/d/1smYXfV3tuh6M-K71hIT7KzRwdJ1irQR0/view?usp=sharing" },
				{ label: "Design Recipe Guide", link: "https://drive.google.com/file/d/178m3kvxfUl73Z6QRLbGs9CT39W44m-wy/view?usp=sharing" },
				{ label: "EdStem Guide", link: "https://drive.google.com/file/d/1cNWz7Mhsgc8QfTBEgvzRIZi8xoVJKp3d/view?usp=sharing" }
			]
	},
	{
		section: "CS17 Language Guides", links:
			[
				{ label: "General Style Guide", link: "https://drive.google.com/file/d/1-iE-GQ5gl8tlYe5hHHJhfQiM6KGrdK1h/view?usp=sharing" },
				{ label: "Racket to ReasonML", link: "https://drive.google.com/file/d/1_w8faUZR2M0ASnrsCr8-jI57DtOT772o/view?usp=sharing" },
				{ label: "Racket Style Guide", link: "https://drive.google.com/file/d/16hDg9kqm3nGlbOZk60SAbOd0_uQAqnB8/view?usp=sharing" },
				{ label: "ReasonML Debugging", link: "https://drive.google.com/file/d/11Ndopm_cTe3jcuuAjvV53Dl8gQzEkdnT/view?usp=sharing" },
				{ label: "ReasonML Style Guide", link: "https://drive.google.com/file/d/15FfIqkCL1OFq0nDWVKIXnsSzjHopgeFm/view?usp=sharing" },
				{ label: "Common Mistakes to Avoid", link: "https://drive.google.com/file/d/1bQorZxj8XIPIkE3X7r4n2u1ezkhEqlDX/view?usp=sharing" },
				// { label: "CS17 Racket Built-in Procedurehttps://drive.google.com/file/d/11Ndopm_cTe3jcuuAjvV53Dl8gQzEkdnT/view?usp=sharings and Data", link: "https://drive.google.com/file/d/1Aosl7flOkF0jdolTfrDABwrBVp2SSiQI/view?usp=sharing" },
			]
	},
	{
		section: "Working from Home", links:
			[
				// { label: "Work from Home Guide", link: "https://cs.brown.edu/about/system/connecting/ssh/" }, 
				{ label: "SSH Guide", link: "https://drive.google.com/file/d/1UqGTT5cI_UNyXApepK-5ooXTePoKAmf8/view?usp=sharing" },
				{ label: "Download DrRacket", link: "https://racket-lang.org/download/" },
				{ label: "ReasonML Installation and Compilation Guide", link: "https://drive.google.com/file/d/1hJJp4-og2DEjeOYsi1jlOkqubX8ApAIP/view?usp=sharing" },
				{ label: "CS17 Racket Installation Video Guide (Mac)", link: "https://drive.google.com/file/d/1wy482mD0ZCqfl8Jcz_25sKV7FeBBGML6/view?usp=sharing" },
				{ label: "CS17 ReasonML Installation Video Guide (Mac)", link: "https://drive.google.com/file/d/16nsMWf-jrHhmqKv-87n-VNExYE7P4nGY/view?usp=sharing" },
				{ label: "CS17 Racket Installation Video Guide (Windows)", link: "https://drive.google.com/file/d/1GfrL5xz7HQhBbkTxKvHJ5yH4lfQk3lpv/view?usp=sharing" },
				{ label: "CS17 ReasonML Installation Video Guide (Windows)", link: "https://drive.google.com/file/d/15Sw2_5MRtTy5vBe373VP8M4g84LCImSy/view?usp=sharing" },
				{ label: "CS17 Racket Teachpack", link: "https://drive.google.com/file/d/1Yc0e6P3WH-2iSKeCHqTImzAME13CkEAM/view?usp=sharing" },
				// { label: "CS17 ReasonML Teachpack", link: "https://drive.google.com/file/d/1v31kqpdPbmUX15kUSTwcp2hm0hYv_a35/view?usp=sharing" }, 
			]
	},
	{
		section: "Supplementary Material", links:
			[
				{ label: "Ergonomics Guide", link: "https://cs.brown.edu/systems/ergo/" },
				{ label: "Linux Commands", link: "https://drive.google.com/file/d/1_W0HBpP9M1p3C0Tf8Wz2V36swxxFYHzA/view?usp=sharing" },
				{ label: "Introduction to LaTeX2e", link: "http://www.cs.brown.edu/system/software/latex/doc/lshort.pdf" },
				{ label: "LaTeX Symbols", link: "http://www.cs.brown.edu/system/software/latex/doc/symbols.pdf" },
				{ label: "Frequently Used Math Symbols", link: "https://drive.google.com/file/d/1DWTzHQ8NHLYlVSSBq5yI0DclMqY3dtC8/view?usp=sharing" },
				{ label: "ReasonML Library Reference", link: "https://reasonml.github.io/docs/en/overview" },
			]
	},
	{
		section: "Departmental Resources", links:
			[
				{ label: "Diversity and Inclusion Student Advocates", link: "https://cs.brown.edu/about/diversity/student-advocates-diversity-and-inclusion/" },
				{ label: "Health and Wellness Student Advocates", link: "https://cs.brown.edu/about/diversity/health-wellness-student-advocates/" },
				{ label: "Other Resources", link: "http://cs.brown.edu/about/diversity/resources/" },
			]
	}
]