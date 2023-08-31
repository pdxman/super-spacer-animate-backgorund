import { useBlockProps } from '@wordpress/block-editor';

export default function save({attributes}) {
	const {firstBackground, secondBackground} = attributes

	const backgroundColors = [
		{background: `${firstBackground}`},
		{background: `${secondBackground}`}
	]

	const backgroundTiming = {
		duration: 4000,
		iterations: Infinity,
		direction: 'alternate',
		fill: 'forwards'
	}

	function animateBackground(){
		backgroundRef.current.animate(backgroundColors, backgroundTiming)
	}
	
	return (
		<div 
			{ ...useBlockProps.save() }
			style={{
				background: `${firstBackground}`,
				padding: "1em"
			}}	
		>
			<button onClick={animateBackground}>Animate</button>	
			<h2>First Background: {firstBackground}</h2>
			<h2>Second Background: {secondBackground}</h2>
		</div>
	);
}
