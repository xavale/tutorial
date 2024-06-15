/* eslint-disable @typescript-eslint/no-explicit-any */
import { base, button, description as iDescription, title as iTitle, image as sImage, text } from './Banner.css';

export const Banner = ({ title, description, link, image }: { title?: string; description?: string; link?: any; image?: any }) => {
	return (
		<div className={base}>
			{image && <img className={sImage} src={image.path} alt={image.description} />}
			{(title || description || link) && (
				<div className={text}>
					<h2 className={iTitle}>{title}</h2>
					<p className={iDescription}>{description}</p>
					<a className={button} href={link.path}>
						{link.label}
					</a>
				</div>
			)}
		</div>
	);
};
