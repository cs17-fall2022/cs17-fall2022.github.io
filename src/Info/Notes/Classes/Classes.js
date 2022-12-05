import { FaFileAlt, FaYoutube, FaFilePowerpoint } from 'react-icons/fa';

const classes = [
	{
		number: 1, title: "Welcome", outDate: "Sept. 7", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1mSC4T3zlkwyU3nYbdt3mZbXHC0RBIugT/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f2727248-aff7-4e78-8764-af090024f5b4", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1nGRI2vRghzUIwadPTml9mljqdFwiMYWP/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Racket"]
	},
	{
		number: 2, title: "Arithmetic, Types, and Keywords", outDate: "Sept. 9", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1C1AbPgZA27czZ1hzTyGYag132upG78jv/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6c91723e-66e8-48f3-9631-af090024f5f7", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1_XF48MpBTqlu89RkIxbvlMlEUrsQCJdo/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Racket", "Definitions", "Evaluation"]
	},
	{
		number: 3, title: "Racket, Processing, and BNF", outDate: "Sept. 12", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1kZfSjA1t5m_zisufCXNbbNQH0ko6jboW/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6c04966b-e6b0-410d-8b7d-af090024f60e", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1pIaR4zicAsXQUjmylCU5xdlUYhkc-Ruv/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Racket", "Evaluation"]
	},
	{
		number: 4, title: "Syntax and Semantics", outDate: "Sept. 14", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1zwgE0Rn3l08ydOkRYN7BK9q887ftZtcf/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8c57237a-6738-41ab-9644-af1000ecc248", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1w6SOA51U5SDTXK2RQ39LJALzJZpc3Hkk/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Racket", "Procedures", "Evaluation"]
	},
	{
		number: 5, title: "Definitions and Design Recipe", outDate: "Sept. 16", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/15VAStyJeaxtRPY4cnrliyl4nf6G0rfyT/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=4f9d2c79-269c-45ba-86bc-af1000ecc2a2", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/19LklF5NNvNFB7tRkdHXzHSS8tbWsz-Ut/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Design Recipe", "Racket", "Evaluation"]
	},
	{
		number: 6, title: "Lists and List Procedures", outDate: "Sept. 19", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1oU38mwxsZQu6Av2CFvklYHcEf6hBqPum/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d68a86f6-8c04-40dd-898d-af1000ecc2c4", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1kZcyas7RZmD2RmVOzAvUJDs5IV1cbUdG/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Design Recipe", "Racket", "Evaluation", "Lists"]
	},
	{
		number: 7, title: "List Recursion", outDate: "Sept. 21", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1-55dDnftYDivNfQs0KUqnm-BbudHfEBu/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5b617010-8ec9-4b6b-b8fb-af1000ecc2e6", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1bvluJI6BzJpBKpfhgchXhFyHF-cl20kq/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Lists", "Racket", "Recursion"]
	},
	{
		number: 8, title: "Recursion and Operation Counting", outDate: "Sept. 23", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1IeJ6AD3p1HfFw50HdnsYVzxs7z9ojGSM/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a73c6e60-0fb7-48b8-a679-af1000ecc305", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1INaMWj1ApHfS9ZuA6VVHdMtsBWiR7vaj/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Lists", "Recursion", "Racket", "Analysis"]
	},
	{
		number: 9, title: "Intro to Analysis", outDate: "Sept. 26", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1j3-MBz_icvzY1AbnDBotrFS0aTX_EBRC/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=fdfc622f-8733-406d-bc1f-af1000ecc325", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1a91a7hAYRdEWlPrgM9phjwd-PlqTd3sE/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" }
		],
		tags: ["Recursion", "Racket", "Analysis"]
	},
	{
		number: 10, title: "Two Argument Recursion and Analysis", outDate: "Sept. 28", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1vga9oBXeRDrmGT5y8HxAFA9gz_lhVvYj/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=23e80812-1115-4cfc-b802-af1000ecc34b", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/13NscPigBi-m-2WoyEc0P4lM5ijAtCY8C/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Recursion", "Analysis", "Racket"]
	},
	{
		number: 11, title: "Reverse and Higher Order Procedures", outDate: "Sept. 30", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1eXWTgJfVPV3nX-iTqlxLwRDLDYZuvqDd/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=09df814d-4c63-4afd-b484-af1000ecc384", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/155uS5GqldTFgcYOdzmTJ2-t5Nd964we5/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Recursion", "HOPs", "Racket"]
	},
	{
		number: 12, title: "Analysis: Plug-n-Chug", outDate: "Oct. 4", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1igJyZNmlxVRlJpxoFfbISNCJl6tp8ZDg/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=de96ae25-0ed2-429c-80a5-af1000ecc3ab", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1iQ-iVKrGzc5-TAze-t0ge1akwyVPVLsB/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Recursion", "Analysis"]
	},
	{
		number: 13, title: "More Analysis and Intro to Lambda", outDate: "Oct. 5", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1JZzELa5jjBvfQIeT0tn5u_X4nUdXPHXl/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5044c36d-1e0e-4192-93c0-af1000ecc3d9", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1XRYD_Ql-jXPJz68-eN8ONFmILwHw_DaU/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Racket", "Analysis", "Lambda"]
	},
	{
		number: 14, title: "Applying Lambda", outDate: "Oct. 7", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1pXgRzrTmcQLtPc_Aqrw7PeGLFqNQcmMU/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a6677649-d6fc-49e1-b46d-af1000ecc401", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/16jnRyHlH0L6EMz9k_XEZDXGTvBSKbCSV/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Racket", "Lambda"]
	},
	{
		number: 15, title: "Let and Combinatorics", outDate: "Oct. 12", active: true,
		links: [
			// { icon: <FaFileAlt />, link: "", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a09d5fbe-5c9a-4160-830f-af1000ecc452", label: "Recording" },
			{ icon: <FaFilePowerpoint/>, link: "https://docs.google.com/presentation/d/15zK1E4NLeGUTOYrGtXh75NbL0UBX4SJf/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Racket"]
	},
	{
		number: 16, title: "Let and ReasonML", outDate: "Oct. 14", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1AVOn1-6nh2ViPp7KiGrZ2Uof-wp_15lv/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=08bc98f1-8e45-499d-9c3b-af1000ecc476", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1Lnn40qfDkMzHX0xI74n8bxG43sM1paYi/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Recursion", "ReasonML"]
	},
	{
		number: 17, title: "Types, Pattern Matching, and Big-O", outDate: "Oct. 17", active: true,
		links: [
			// { icon: <FaFileAlt />, link: "", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a8316926-cb1a-4679-b4a4-af1000ecc49c", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1NbrvVcd7Rr3PbkFe2D-bUhzJ-7IwEPK7/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["ReasonML", "Analysis"]
	},
	{
		number: 18, title: "More ReasonML and Closures", outDate: "Oct. 19", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1mXmBOQQeksXnsqdO7xtuBMVhxl6Xxg53/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a58c0ac1-44c0-4686-a21d-af1000ecc4c8", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1Oc9bx2zp_kQvlZJ-XKszCmKCKjLsOWtR/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["ReasonML"]
	},
	{
		number: 19, title: "Local Environments and Lambda", outDate: "Oct. 21", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1TB7GuMVx1LFEhXO-UuXNDRFSQbeW_T0_/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Home.aspx", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/11hjP09TQbyJCnyy7druwutH_L9g47t40/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["ReasonML"]
	},
	{
		number: 20, title: "Big-O & Mutual Recursion", outDate: "Oct. 24", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1aiI-sbAoadugS9nkECiGuJ2cb0j5nvJc/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=163909df-add1-47ff-9ef6-af1000ecc549", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1yuVu7dohaddZnbP0pLKPknIiNj8aLhyc/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Analysis", "Big-O"]
	},
	{
		number: 21, title: "ADTs", outDate: "Oct. 26", active: true,
		links: [
			// { icon: <FaFileAlt />, link: "", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=9a1fe878-02c6-41d2-820f-af1000ecc577", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1J7NnYVBXkqgds9WbDWYfH_Hb_I_pKwHo/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Analysis", "Big-O"]
	},
	{
		number: 22, title: "Rackette Overview", outDate: "Oct. 28", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1PPEeQmAcbhZVYaeNA-VPOuOqE5zBc88i/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7b4c416e-0c09-4e6c-8730-af1000ecc5a9", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1USxsuJ1H4oUxxVt_mC1YnQRaskYPmg0N/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["ReasonML", "Rackette", "Analysis"]
	},
	{
		number: 23, title: "Rackette and Misc. ReasonML", outDate: "Oct. 31", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1KQxlQtzieMGVD2aPNVLcG_u8o2TkQG7j/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e1a1279c-3ed5-49d3-8c53-af1000ecc5db", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1KB1l4K6dBoyXRahl0Yo400sJPaj0tNBQ/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["ReasonML", "Rackette", "Evaluation"]
	},
	{
		number: 24, title: "Unification and Testing Modules", outDate: "Nov. 2", active: true,
		links: [
			// { icon: <FaFileAlt/>, link: "", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e0709775-6cf3-4019-9ac6-af1000ecc608", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1amGlYvUdDkqkbJYrhKDutQfAFkBc34Qw/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["ReasonML"]
	},
	{
		number: 25, title: "VSCode Tips, Polishing, & Trees", outDate: "Nov. 4", active: true,
		links: [
			// { icon: <FaFileAlt />, link: "", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a7bf7468-f51d-48a5-b69f-af1000ecc62e", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1HIkDyPwHZt56AiVndq9hr5GOT8URcZfM/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["ReasonML", "Trees"]
	},
	{
		number: 26, title: "Trees and Closures Review", outDate: "Nov. 7", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/146aOPtp5VquDyZ0Xp5JgSM6S-kiGWpvG/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c3b1fd73-5b82-43fa-8949-af1000ecc652", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1kIeH6K6ricKaUaWeI5qvqWQh-sk5rEsD/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Evaluation", "Lambda", "Trees"]
	},
	{
		number: 27, title: "Evaluation and Sorting", outDate: "Nov. 10", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1GWNsvpl37mF7GAE-LeSYexZYnw6gO2xO/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e5195009-4c92-4743-aa63-af1000ecc67c", label: "Recording" },
			{ icon: <FaFilePowerpoint/>, link: "https://docs.google.com/presentation/d/1QctTG0XD0IIXb9KHEmKCi2mVt3fA1deO/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Sorting", "Analysis", "Evaluation"]
	},
	{
		number: 28, title: "Intro to Game", outDate: "Nov. 11", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1CQcAN5aruxntEFiq774oTAGA6QYrc0qK/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=677cf5cd-cb32-4369-a2f6-af1000ecc6a1", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1SM2PyuRIT0RwL4eE00jNM-jKDIivH7xn/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Game"]
	},
	{
		number: 29, title: "Game - Minimax", outDate: "Nov. 14", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1crBDpJG7TbR_Ay4PbaesxnMSycqwG65-/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=36fd200f-b62b-4740-b19f-af1000ecc6e1", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1ksHZq_Q4EQdib41eg7peMq_NmlnJ0Mjs/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Game"]
	},
	{
		number: 30, title: "Game - Game Trees / Virtual Trees", outDate: "Nov. 16", active: true,
		links: [
			// { icon: <FaFileAlt />, link: "", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7a705422-7a4c-4743-854a-af1000ecc6ff", label: "Recording" },
			{ icon: <FaFilePowerpoint/>, link: "https://docs.google.com/presentation/d/1sL9qXL5sgokFoDUo844N-q7mkZMzjZH-/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Game"]
	},
	{
		number: 31, title: "Analysis Redux", outDate: "Nov. 18", active: true,
		links: [
			// { icon: <FaFileAlt/>, link: "", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=aa267fe3-2e50-42d6-afcf-af1000ecc71f", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1kL9PHzunNfcFkNebLVUGomN6blSvwmjP/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Analysis"]
	},
	{
		number: 32, title: "Limits of Sorting & Computation", outDate: "Nov. 21", active: true,
		links: [
			{ icon: <FaFileAlt />, link: "https://drive.google.com/file/d/15l5NWxjGucdx0hhEvhIQ2WgXwDJDs9l7/view?usp=sharing", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=02370343-0ef5-4dae-92c0-af1000ecc741", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1p4jVSDosm97rws7Dl9n2xKQeyNwGRT_4/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Computational Limits"]
	},
	{
		number: 33, title: "All You Need Is Lambda", outDate: "Nov. 23", active: true,
		links: [
			// { icon: <FaFileAlt/>, link: "", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=880eab6e-c4a4-4201-898d-af1000ecc76c", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1PvfU8-LZa4yeLU5nd0gkYB15MSVWK7lK/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Computational Limits"]
	},
	{
		number: 34, title: "Miscellany", outDate: "Nov. 28", active: true,
		links: [
			// { icon: <FaFileAlt/>, link: "", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=259a581c-84f6-4958-b570-af1000ecc7b1", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1Vl7q0nc3xe7gY7z6rFbxr-4g7vW25lUK/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: []
	},
	{
		number: 35, title: "Stacks & Divide and Conquer", outDate: "Nov. 30", active: true,
		links: [
			// { icon: <FaFileAlt/>, link: "", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8e62b3f2-5d58-4efa-9e8a-af1000ecc7d3", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1gjgiOUSCS8TyHYh7j-nczImTieZLW4no/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: []
	},
	{
		number: 36, title: "Alternative Approach to Playing a Game", outDate: "Dec. 2", active: true,
		links: [
			// { icon: <FaFileAlt/>, link: "", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=cb68363f-dbb3-40f7-8608-af1000ecc7f5", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1jn3ObWwyw1ESIpUsCMj-Akf0wO8okLd3/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: []
	},
	{
		number: 37, title: "Review", outDate: "Dec. 5", active: true,
		links: [
			// { icon: <FaFileAlt/>, link: "", label: "Notes" },
			{ icon: <FaYoutube />, link: "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b3020bbb-3115-4a3f-985e-af1000ecc81b", label: "Recording" },
			{ icon: <FaFilePowerpoint />, link: "https://docs.google.com/presentation/d/1brpwDPCYcX1iWUl5nf9OIrOJRzOu-CFU/edit?usp=sharing&ouid=102918815439366304366&rtpof=true&sd=true", label: "Slides" },
		],
		tags: ["Exam Review"]
	},
]

export default classes;
