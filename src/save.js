import { useBlockProps } from '@wordpress/block-editor';

export default function save({attributes}) {
	const {firstBackground} = attributes
	
	return (
		<div 
			{ ...useBlockProps.save() }
			style={{
				background: `${firstBackground}`,
				padding: "1em"
			}}	
		>
			<h2>Background: {firstBackground}</h2>
		</div>
	);
}
