import React from 'react';
import IconLink from '../../Components/IconLink/IconLink';

import './AssignmentsCard.scss';

class AssignmentsCard extends React.Component {
	renderLinks() {
		return this.props.links.map((l) => <IconLink link={l.link} icon={l.icon} label={l.label} />)
	}

	render() {
		const inactiveStyle = this.props.active ? "" : " assignments-inactive"
		const inactiveText = this.props.active ? <></> : <div className="assignments-inactive-text"><p>Coming soon!</p></div>
		return (
			<div className={"assignments-card" + inactiveStyle}>
				<div className="assignments-card-heading">
					<p className="assignments-card-number">{this.props.number}</p>
					<p className="assignments-card-title">{this.props.title}</p>
				</div>
				<div className="assignments-card-links">{this.renderLinks()}</div>
				<div className="assignments-card-due-date">{this.props.dueDate}</div>
				{inactiveText}
			</div>
		)
	}
}

AssignmentsCard.defaultProps = {
	number: 1,
	title: "Assignment",
	active: "false",
	dueDate: "01-01-2021",
	links: []
}

export default AssignmentsCard;