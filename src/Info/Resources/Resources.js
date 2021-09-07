import { FaQuestion, FaSchool, FaShoePrints, FaComment, FaVideo, FaFileAlt } from 'react-icons/fa';

export const ImportantLinks = [
	{ label: "Syllabus", icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1MVnZXlmVYkpFUtu9w1sbgG4r4k3jM7UJ/view?usp=sharing", description: "Class info, grading, and late policy" },
	// { label: "Hours Guide", icon: <FaVideo />, link: "https://drive.google.com/file/d/1WRehNR2n3hXs7ck9PWdRZfiT4DjFrzZ0/view?usp=sharing", description: "" },
	{ label: "Gradescope", icon: <FaSchool />, link: "https://www.gradescope.com/", description: "Submit homework, projects, and exams" },
	{ label: "EdStem", icon: <FaQuestion />, link: "https://edstem.org/us/join/NeMctt", description: "Ask clarification, debugging, and conceptual questions" },
	{ label: "SignMeUp", icon: <FaComment />, link: "https://signmeup.cs.brown.edu/", description: "Sign up for TA hours or lab queues" },
	// { label: "Lab Assignments", icon: <FaShoePrints />, link: "", description: "To be announced" },
]

export const Resources = [
	{
		section: "Course Documentation", links:
			[
				{ label: "Course Policies/Collaboration Policy", link: "https://drive.google.com/file/d/16PqIb7neB0P92hn3qBdij8SKIyfactEW/view?usp=sharing" },
				{ label: "Guide to TA Hours", link: "https://drive.google.com/file/d/1WRehNR2n3hXs7ck9PWdRZfiT4DjFrzZ0/view?usp=sharing" },
				{ label: "Pair Programming Guide", link: "https://drive.google.com/file/d/1r1iKB00Oecw2OIy4esFKAYTwo0_RM1pI/view?usp=sharing" },
				{ label: "Design Recipe Guide", link: "https://drive.google.com/file/d/1MBMPrEI9F2YbudWRs3F-ZBI7IFYfsaoi/view?usp=sharing" },
				{ label: "EdStem Guide", link: "https://drive.google.com/file/d/1TIWAPadWzmIRNvY0EpxnWrKZeLCI25JU/view?usp=sharing" }
			]
	},
	{
		section: "CS17 Language Guides", links:
			[
				{ label: "General Style Guide", link: "https://drive.google.com/file/d/1StpKqI-hXjJtlm2RfYUSFcX_jspLR1G0/view?usp=sharing" },
				{ label: "Racket to ReasonML", link: "https://drive.google.com/file/d/1_h0KNtVDt33bEL3v__YAb7W8jGIQmNpD/view?usp=sharing" },
				{ label: "Racket Style Guide", link: "https://drive.google.com/file/d/1E7QvUHsHwhyJAWaB9F8tJa0VuNMNzTv8/view?usp=sharing" },
				{ label: "ReasonML Debugging", link: "https://drive.google.com/file/d/1qvAC_sTTXlQ4cWOD5FEh8y1I2fL_nlNd/view?usp=sharing" },
				{ label: "ReasonML Style Guide", link: "https://drive.google.com/file/d/1olLwJEND7l6UR_NvehxaG1yzdPq3lmZ6/view?usp=sharing" },
				{ label: "Common Mistakes to Avoid", link: "https://drive.google.com/file/d/1UwMoMc-Jy3_8ob023K5dCv0Bbt5b_gb4/view?usp=sharing" },
				// { label: "CS17 Racket Built-in Procedures and Data", link: "https://drive.google.com/file/d/1Aosl7flOkF0jdolTfrDABwrBVp2SSiQI/view?usp=sharing" },
			]
	},
	{
		section: "Working from Home", links:
			[
				// { label: "Work from Home Guide", link: "https://cs.brown.edu/about/system/connecting/ssh/" }, 
				// { label: "SSH Guide", link: "https://drive.google.com/file/d/1PD9C5Bh7uT0dsLY0dhryPF5Kc1KG0GO_/view?usp=sharing" },
				{ label: "Download DrRacket", link: "https://racket-lang.org/download/" },
				{ label: "ReasonML Installation and Compilation Guide", link: "https://drive.google.com/file/d/1oTZfr-w6bcHRIFbUA0vRSWo3RDiSwicF/view?usp=sharing" },
				{ label: "CS17 Racket Installation Video Guide (Mac)", link: "https://drive.google.com/file/d/1wy482mD0ZCqfl8Jcz_25sKV7FeBBGML6/view?usp=sharing" },
				{ label: "CS17 ReasonML Installation Video Guide (Mac)", link: "https://drive.google.com/file/d/1OS-7KPUnBxAquAZsez1L7N_RhjEjtjoT/view?usp=sharing" },
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