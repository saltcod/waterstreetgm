// import { useState } from 'react';
// import Head from "next/head";

import Layout from '../components/Layout';

export default function Home() {


	return (
		<Layout>
			<div>
				<main className="mb-8">
					<div className="container mx-auto mb-8">
						<div className="flex">
							<div>
								<img src="https://placeimg.com/640/480/any" />
								Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.

							</div>
							<div className="mb-8 ml-12">
								<h1 className="my-5">👋 <span className="px-4">Hey!</span><span className="sr-only">, welcome to WaterstreetGM, home of Terry Sutton</span></h1>

								I'm Terry Sutton, a frontend developer based in Newfoundland, Canada. This is a selection of my personal and professional work.
							</div>
						</div>
					</div>
				</main>
			</div>
		</Layout>
	);
}
