import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Inner } from './styles.js';

class AnimatedText extends Component {
	state = {
		isFinished: false,
		skipToEnd: false,
	};

	componentDidMount = () => {
		if (this.props.hasAnimated) {
			this.setState({
				isFinished: true,
			});
		} else {
			setTimeout(this.typeWriter, 1000);
		}
	};

	i = 0;
	newText = '';

	typeWriter = () => {
		const speed = 100;
		const txt = this.props.text;

		if (this.i < txt.length) {
			if (txt.charAt(this.i) === '.') {
				this.newText += txt.charAt(this.i);
				this.i++;
				setTimeout(this.typeWriter, speed * 10);
			} else {
				this.newText += txt.charAt(this.i);
				this.i++;
				setTimeout(this.typeWriter, speed);
			}

			if (this.i === txt.length) {
				this.setState({
					isFinished: true,
				});
				this.props.onFinish();
				return;
			}
		}

		this.setState(() => ({ typedText: this.newText }));
	};

	render() {
		const { isFinished, typedText, skipToEnd } = this.state;
		const { text, hasAnimated } = this.props;
		return (
			<Inner isFinished={isFinished}>
				<div
					ref={el => {
						this.typedEl = el;
					}}
				>
					{hasAnimated && text}
					{!hasAnimated && typedText}
				</div>
			</Inner>
		);
	}
}

AnimatedText.propTypes = {
	hasAnimated: PropTypes.bool,
	text: PropTypes.string,
	onFinish: PropTypes.func,
};

AnimatedText.defaultProps = {
	hasAnimated: false,
};

export default AnimatedText;
