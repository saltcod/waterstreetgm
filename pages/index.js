// import { useState } from 'react';
// import Head from "next/head";

import Layout from '../components/Layout';

export default function Home() {


	return (
		<Layout>
			<div>
				<main className="mb-8">
					<div className="container mx-auto mb-8">
						<div className="md:flex">
							<div>
								<div className="uppercase text-xs sticky top-0 bg-black text-yellow-25 px-2">Welcome</div>
							</div>
							<div className="mb-8 ml-12">
								<h1 className="my-5 -mt-4">👋 <span className="px-4">Hey!</span><span className="sr-only">, welcome to WaterstreetGM, home of Terry Sutton</span></h1>

								I'm Terry Sutton, a frontend developer based in Newfoundland, Canada. This is a selection of my personal and professional work.
							</div>
						</div>
					</div>
				</main>
			</div>
		</Layout>
	);
}
