import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { ColorPalette } from '@wordpress/components';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const {firstBackground, secondBackground} = attributes

	return (
		<div>	
			<InspectorControls>
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
