import Link from "next/link";
import { useRouter } from "next/router";

export const Nav = () => {
	const router = useRouter();
	console.log(router.pathname);


	return(
		<nav className="primary-navigation text-lg uppercase pt-8 mt-12 border-t-2 border-black opacity-10">
			<Link href="/">
				<a className={router.pathname == "/" ? 'active mr-8' : 'mr-4'}>Home</a>
			</Link>

			<Link href="/about">
				<a className={router.pathname == "/about" ? 'active' : ''}>About</a>
			</Link>
		</nav>
	);
}