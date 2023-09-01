import { useBlockProps } from '@wordpress/block-editor';

export default function save({attributes}) {
	const {firstBackground, secondBackground} = attributes

	const blockStyles = {
		background: `${firstBackground}`,
		padding: "1em",
		"--bgOne": `${firstBackground}`,
		"--bgTwo": `${secondBackground}`
	}

	return (
		<div 
			{ ...useBlockProps.save() } 
			style={blockStyles}
			className="blockWrapper"
		>
			<h2 className="first-bg">First Background: {firstBackground}</h2>
			<h2 className="second-bg">Second Background: {secondBackground}</h2>
		</div>
	);
}
