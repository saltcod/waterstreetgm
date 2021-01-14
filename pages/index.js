// import { useState } from 'react';
// import Head from "next/head";

import Layout from '../components/Layout';

export default function Home() {
	return (
		<Layout>
			<main className="font-sans">
				<div className="container px-12">
					<div className="layout-row flex mb-48">
						<div className="w-1/4">
							<div className="sticky top-0">
								<div className="font-bold text-xs">01</div>
								<div className="font-light mb-16">Welcome</div>
								<div> 👋 </div>
							</div>
						</div>
						<div className="w-3/4">
							<p className="text-3xl font-semibold mb-8">
								I'm Terry Sutton, a frontend developer based in Newfoundland, Canada. This is a
								selection of my personal and professional work.
							</p>
							<div className="flex items-center">
								<span className="text-2xl">Get in touch:</span>
								<a href="https://twitter.com/saltcod" className="mx-4 hover:opacity-10">
									<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm5.48 9.356c.004.118.007.237.007.356 0 3.64-2.77 7.837-7.837 7.837a7.796 7.796 0 01-4.222-1.237 5.527 5.527 0 004.078-1.14 2.757 2.757 0 01-2.573-1.914 2.741 2.741 0 001.244-.047 2.755 2.755 0 01-2.21-2.7v-.036c.372.207.796.331 1.248.345a2.752 2.752 0 01-.852-3.677 7.82 7.82 0 005.677 2.878 2.755 2.755 0 014.694-2.512 5.524 5.524 0 001.748-.669 2.765 2.765 0 01-1.21 1.524 5.493 5.493 0 001.58-.434 5.597 5.597 0 01-1.373 1.426z"
											fill="#000"
											fillRule="evenodd"
										/>
									</svg>
								</a>
								<a href="https://github.com/saltcod" className="mr-4">
									<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24
							12.292 24 5.78 18.627.5 12 .5z"
											fill="#212121"
											fillRule="evenodd"
										/>
									</svg>
								</a>
								<a href="https://www.linkedin.com/in/terry-sutton-11059b1b7/">
									<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
										<path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
									</svg>
								</a>
							</div>
						</div>
					</div>
					<div className="layout-row flex mb-48">
						<div className="w-1/4">
							<div className="sticky top-0">
								<div className="font-bold text-xs">02</div>
								<div className="font-light mb-16">About</div>
								<div> 📜 </div>
							</div>
						</div>
						<div className="w-3/4">
							<p className="font-semibold text-3xl mb-8">
								I've been a frontend developer for some 15+ years now, working from the far Eastern
								reaches of North America in St. John's Newfoundland.{' '}
							</p>

							<p className="text-xl mb-8">
								My love of web development started in university when I met a fellow student who showed
								me some basic HTML and CSS. He drew out a table with pencil and paper, leaving one cell
								missing in one of the rows — "create that in HML and you're all set" he said.{' '}
							</p>

							<p className="text-xl mb-8">
								For the past 6 years, I've worked at <a href="10up.com">10up</a>—a leading web agency,
								specializing in WordPress. I've had the opportunity to learn from some of the smartest
								in the industry and work on some truly giant and complex websites.
							</p>

							<p className="text-xl">I'm currently interested in and focused on React, NextJS and Vue.</p>
						</div>
					</div>

					<div className="layout-row flex mb-48">
						<div className="w-1/4">
							<div className="sticky top-0">
								<div className="font-bold text-xs">03</div>
								<div className="font-light mb-16">Work</div>
								<div> 🪓 </div>
							</div>
						</div>

						<div className="w-3/4">
							<p className="text-3xl font-semibold mb-8">
								In my 6 year tenure at 10up, I've worked on projects large and small for some of the
								world's top brands. A small selection of these can be found{' '}
								<a
									className="border-b-4 border-black hover:border-gray-700"
									href="https://10up.com/our-work/"
								>
									here
								</a>
								.
							</p>

							<p className="text-xl">
								I also enjoy working on small side projects that solve specific problems. I have a{' '}
								<a
									href="https://github.com/saltcod/timezoner"
									className="border-b-2 border-black hover:border-gray-700"
								>
									timezone converter
								</a>{' '}
								to help coordinate meetings with international team members, a{' '}
								<a
									className="border-b-2 border-black hover:border-gray-700"
									href="http://at-the-lights.netlify.app"
								>
									shopping list
								</a>{' '}
								app that works precisely how I want it to, and I'm currently working on a
								live-searchable index of the{' '}
								<a
									className="border-b-2 border-black hover:border-gray-700"
									href="https://www.nlaa.ca/tely10/"
								>
									Tely 10
								</a>
								, an almost 100 year old 10 mile road race.{' '}
							</p>
						</div>
					</div>

					<div className="layout-row flex mb-48">
						<div className="w-1/4">
							<div className="sticky top-0">
								<div className="font-bold text-xs">04</div>
								<div className="font-light mb-16">Currently</div>
								<div> ⛱ </div>
							</div>
						</div>

						<div className="w-3/4">
							<p className="text-3xl font-semibold mb-4">
								I'm prone to getting into stuff. Deep in.
							</p>

							<p className="text-xl mb-8">
								Here's a quick list of some of the things I'm reading, listening to, or otherwise "into" at the moment:
							</p>

							<ul>
								<li><a className="underline" href="https://www.goodreads.com/book/show/51152447-caste"><em>Caste</em> by Isabel Wilkerson</a></li>
								<li><a className="underline" href="https://www.loveandlemons.com/cookbook/">Love and Lemons cookbook</a></li>
								<li><a class="underline" href="https://williamsfoodequipment.com/shun-6-5-classic-master-utility-knife/">Shun - 6.5" Classic Master Utility Knife</a></li>
								<li><a class="underline" href="https://www.cbc.ca/listen/live-radio/1-8-cbc-news-the-world-at-six">CBC Radio's <em>The World at Six</em></a></li>
								<li><a class="underline" href="https://daringfireball.net/2020/05/dithering">Dithering Podcast</a></li>

							</ul>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	);
}
