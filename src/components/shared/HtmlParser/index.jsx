import parse, { domToReact } from 'html-react-parser';
import Link from 'next/link';

export const HtmlParser = ({ content = '' }) => {
	const options = {
		replace: (domNode, index) => {
			if (domNode.name === 'strong') {
				return <h4 key={index}>{domToReact(domNode.children, options)}</h4>;
			}
			if (
				domNode.name === 'p' &&
				domNode.children.some(child => child.name === 'strong')
			) {
				const strongContentIndex = domNode.children.findIndex(
					child => child.name === 'strong',
				);
				const strongContent = domNode.children[strongContentIndex];
				const h4Content = domToReact(strongContent.children, options);
				const pChildren = domNode.children.filter(
					(_child, i) => i !== strongContentIndex,
				);

				if (pChildren.length === 0) {
					return <h4 key={index}>{h4Content}</h4>;
				} else {
					return (
						<>
							{pChildren.length > 0 && (
								<p key={index}>{domToReact(pChildren, options)}</p>
							)}
							<h4 key={index + 1}>{h4Content}</h4>
						</>
					);
				}
			}
			if (domNode.name === 'a') {
				const href = domNode.attribs.href;
				return (
					<Link href={href} passHref key={index}>
						{domToReact(domNode.children, options)}
					</Link>
				);
			}
		},
	};

	return parse(content, options);
};
