import Link from "next/link";
import { useRouter } from "next/router";

export const Nav = () => {
	const router = useRouter();

	return (
		<nav className="primary-navigation text-lg uppercase pt-8 mt-12 border-t-2 border-black opacity-10">
			<Link href="/">
				<a className={router.pathname == '/' ? 'active mr-8' : 'mr-8'}>Home</a>
			</Link>

			<Link href="/about">
				<a className={router.pathname == '/about' ? 'active mr-8' : 'mr-8'}>About</a>
			</Link>

			<Link href="/uses">
				<a className={router.pathname == '/uses' ? 'active' : ''}>Uses</a>
			</Link>
		</nav>
	);
}