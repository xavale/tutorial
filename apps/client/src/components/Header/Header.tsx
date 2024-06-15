import { Navigation } from '../Navigation/Navigation';
import { base, constrain, logo } from './Header.css';

export const Header = () => {
	return (
		<div className={base}>
			<div className={constrain}>
				<div className={logo}>
					<img src="/logo.webp" alt="Viajes Pinar" />
				</div>
				<Navigation />
				{/* <nav className={navigation}>
					{actions.map((action) => (
						<button key={action.value} className={button}>
							<action.icon />
							<span>{action.label}</span>
						</button>
					))}
					<button className={button}>Atención al cliente</button>
					<button className={button}>Iniciar sesión</button>
				</nav> */}
			</div>
		</div>
	);
};
