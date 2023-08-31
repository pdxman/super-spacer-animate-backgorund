import { useBlockProps } from '@wordpress/block-editor';

export default function save({attributes}) {
	const {firstBackground, secondBackground} = attributes
	
	return (
		<div 
			{ ...useBlockProps.save() }
			style={{
				background: `${firstBackground}`,
				padding: "1em"
			}}	
		>
			<h2>First Background: {firstBackground}</h2>
			<h2>Second Background: {secondBackground}</h2>
		</div>
	);
}
