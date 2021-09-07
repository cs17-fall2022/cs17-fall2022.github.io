import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
	render() {
		const resizeStyle = this.props.resize ? " footer-resize" : ""

		return (
			<div className={"footer-wrapper" + resizeStyle}>
				<div>Copyright © 2021 CS17</div>
				<div>Submit feedback at our anonymous form <a href="https://forms.gle/Fk9jZpGrgRgeZXDg6" target="_blank" rel="noreferrer noopener">here!</a></div>
			</div>
		);
	}
}

export default Footer;