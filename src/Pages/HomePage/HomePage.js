import React from 'react';

import './HomePage.scss';

import { Link } from 'react-router-dom';
import { FaExclamation } from 'react-icons/fa';

import Page from '../../Layout/Page/Page';
import AnimatedImage from '../../Components/AnimatedImage/AnimatedImage';
import { ReactComponent as CIT_ILLUSTRATION } from '../../Assets/CIT_Logo/CIT_Illustration.svg';
import AssignmentsCard from '../../Components/AssignmentsCard/AssignmentsCard';

import Homeworks from '../../Info/Assignments/Homeworks/Homeworks';
import Projects from '../../Info/Assignments/Projects/Projects';
import Labs from '../../Info/Assignments/Labs/Labs';
import { ImportantLinks } from '../../Info/Resources/Resources';

class HomePage extends React.Component {
	getAssignments() {
		const activeH = Homeworks.filter((h) => h.active);
		let curH;
		if (activeH.length === 0) {
			curH = Homeworks.filter((h) => !h.active)[0];
		} else { curH = activeH[activeH.length - 1]; }

		const activeL = Labs.filter((l) => l.active);
		let curL;
		if (activeL.length === 0) {
			curL = Labs.filter((l) => !l.active)[0];
		} else { curL = activeL[activeL.length - 1] }

		const activeP = Projects.filter((p) => p.active);
		let curP;
		if (activeP.length === 0) {
			curP = Projects.filter((p) => !p.active)[0];
		} else { curP = activeP[activeP.length - 1]; }

		return [
			{ name: 'Homework', content: curH, navigation: "/homeworks" },
			{ name: 'Lab', content: curL, navigation: "/labs" },
			{ name: 'Project', content: curP, navigation: "/projects" },
		]
	}

	renderHomeLinks() {
		return ImportantLinks.map((l) => (
			<div className="home-link">
				<div>
					<p className="home-link-icon">{l.icon}</p>
				</div>
				<a href={l.link} target="_blank" rel="noopener noreferrer">
					{l.label}
				</a>
				<p></p>
				<div>
					<p className="home-link-description">{l.description}</p>
				</div>
			</div>
		));
	}
	renderDueSoonCards() {
		const curA = this.getAssignments();
		return (
			<div className='home-due-soon-content'>
				{curA.map(({ name, content, navigation }) => {
					return (
						<div className="home-due-soon-section">
							<div className="home-due-soon-label">
								<p>{name}</p>
								<Link to={navigation}>See all...</Link>
							</div>
							<AssignmentsCard number={content.number} title={content.title} active={content.active} dueDate={content.dueDate} links={content.links} />
						</div>
					)
				})}
			</div>
		)
	}

	render() {
		return (
			<Page activeTab="Home" resizeStyle="home-resize">
				<div className="home-wrapper">
					<div className="home-left-wrapper">
						<div className="home-intro-images">
							<CIT_ILLUSTRATION className="cit-illustration" />
							{/* <AnimatedImage images={[<CIT_Logo_1/>]}/> */}
							<AnimatedImage />
						</div>
						<div className="home-intro-text">
							<h1>Welcome to CS17 :D</h1>
							<p>
								Welcome!! CS17 (CSCI 0170) is an intro computer
								science class at Brown University — emphasis on intro!!
								We take your ideas very seriously and want to make a welcoming environment
								for everyone who wants to learn CS — fill out our {" "}
								<a href="https://forms.gle/Fk9jZpGrgRgeZXDg6" target="_blank" rel="noopener noreferrer">
									anonymous feedback form
								</a>
								{" "} to let us know if we can do anything better!
							</p>
							<p>
								If you have any questions on content, post on Ed,
								come to TA hours, or email Spike to go to his office hours.
								We're all here to help!!
							</p>

						</div>
						<div className="home-links">
							<h1>Important Links</h1>
							{this.renderHomeLinks()}
						</div>
					</div>
					<div className="home-announcement">
						<div>
							<div><FaExclamation /></div>
							<p><mark>Announcement: </mark>No homework this week — good luck on Rackette!!! Check out the <a href="https://edstem.org/us/courses/12922/discussion/817140" target="_blank" rel="noopener noreferrer">Rackette FAQ</a> and tips in the <a href="https://edstem.org/us/courses/12922/discussion/819066" target="_blank" rel="noopener noreferrer">new source code post</a>!</p>
						</div>
					</div>
					<div className="home-due-soon">
						<h1>Current Assignments</h1>
						{this.renderDueSoonCards()}
					</div>
					<div className="home-hours">
						<iframe title={"Google Calendar"} src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=Y182c2I2ZTgzbWczc2FmczU5ZmxqYm9lZnBpY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y18zcjV0NTZhOG5uNTc3aHIzcTV1M2Z0b3JvY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YnJvd24uZWR1X2hxMTVrajltMDE0Y3RyZGVwcmY2M3NjMTNzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23BE6D00&color=%23039BE5&color=%232952A3&mode=WEEK&showPrint=0&showDate=1&showNav=1" style={{ border: 0 }} width="800" height="600" frameborder="0" scrolling="no"></iframe>
					</div>
				</div>
			</Page>
		);
	}
}

export default HomePage;
