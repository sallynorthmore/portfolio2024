import { createGlobalStyle } from 'styled-components';

const BaseStyles = createGlobalStyle`

		/* Minimal reset that keeps insepector output clean */
		/* stylelint-disable selector-max-universal, selector-max-type  */
		*,
		*::before,
		*::after {
			border: 0;
			box-shadow: 0 0 0;
			box-sizing: border-box;
			color: rgb(20, 20, 20);
			font-family: 'Lato', sans-serif;
			font-feature-settings: "kern" 1;
			font-kerning: normal;
			list-style: none;
			margin: 0;
			padding: 0;
		}

		a {
			color: inherit;
		}

		html {
			scroll-behavior: smooth;
			scroll-snap-type: y mandatory;
		}

		/* stylelint-enable */
	`;

export default BaseStyles;
