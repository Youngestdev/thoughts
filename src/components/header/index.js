import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<Link href="/#"><h1>Abdul.</h1></Link>
	</header>
);

export default Header;
