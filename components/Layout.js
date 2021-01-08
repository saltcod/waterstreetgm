import Head from 'next/head';
import { Nav } from './Nav';
export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>WaterstreetGM | Home of Terry Sutton</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="container mx-auto px-4 mb-8 mt-56 text-3xl font-sans font-semibold">
				<header>
					{/* <motion.h1
						initial={{ scale: 0.5, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						className="title has-text-weight-bold is-1 is-size-2-mobile is-spaced"
						layoutId="title"
						>👋 <span className="px-4">Hey!</span><span className="sr-only">, welcome to WaterstreetGM, home of Terry Sutton</span>
					</motion.h1> */}
				</header>

				{children}
				<Nav />
			</div>
		</>
	);
}