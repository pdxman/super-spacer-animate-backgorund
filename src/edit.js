import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { ColorPalette } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const {firstBackground} = attributes

	return (
		<div>	
			<InspectorControls>
				<ColorPalette 
					label="Set the First Background Color"
					value={firstBackground}
					onChange={(newFirstBackground => setAttributes({firstBackground: newFirstBackground}))}
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
			</div>
		</div>	
	);
}
