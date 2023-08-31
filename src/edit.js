import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { ColorPalette, Button } from '@wordpress/components';
import { useRef } from '@wordpress/element';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const {firstBackground, secondBackground} = attributes

	const backgroundRef = {useRef}

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
		<div>	
			<InspectorControls>
				<Button 
					isPrimary
					onClick={animateBackground}
				>
						Set Background Animation
				</Button>
				<ColorPalette 
					label="Set the First Background Color"
					value={firstBackground}
					onChange={(newFirstBackground => setAttributes({firstBackground: newFirstBackground}))}
				/>
				<ColorPalette 
					label="Set the Second Background Color"
					value={secondBackground}
					onChange={(newSecondBackground => setAttributes({secondBackground: newSecondBackground}))}
				/>
			</InspectorControls>
			<div 
				{ ...useBlockProps() }
				ref={backgroundRef}
				style={{
					background: `${firstBackground}`,
					padding: "2em"
				}}
			>
				<h2>First Background: {firstBackground}</h2>
				<h2>Second Background: {secondBackground}</h2>
			</div>
		</div>	
	);
}
