// import { useState } from 'react';
// import Head from "next/head";

import Layout from '../components/Layout';

export default function Home() {
	return (
		<Layout>
			<div className="flex">
				<main className="mb-8 w-2/3">
					<img src="https://placeimg.com/630/420/any" />
					Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or
					web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought
					to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
					<div className="mb-8 ml-12">
						<h1 className="my-5">
							👋 <span className="px-4">Hey!</span>
							<span className="sr-only">, welcome to WaterstreetGM, home of Terry Sutton</span>
						</h1>
						I'm Terry Sutton, a frontend developer based in Newfoundland, Canada. This is a selection of my
						personal and professional work.
					</div>
				</main>
				<aside className="w-1/3">hay</aside>
			</div>
		</Layout>
	);
}
