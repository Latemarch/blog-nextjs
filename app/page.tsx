export default function Home() {
	return (
		<div className="flex flex-col items-center  justify-center">
			<div className="flex flex-col items-center max-w-4xl">
				<h1 className="text-2xl text-center p-8">
					A project aimed at studying Next.js and its benefits in order to
					create efficient web pages.
				</h1>
				<span>nextjs, tailwindcss, redux, react-query, vercel, prisma</span>
				<span className="text-justify p-8">
					Next.js is a powerful React framework designed for building efficient
					web applications. It offers features like server-side rendering (SSR)
					and static site generation (SSG) to optimize performance and improve
					search engine visibility. With automatic code splitting and built-in
					routing, Next.js ensures faster page loads and streamlined navigation.
					It also supports CSS-in-JS, API routes, and provides Fast Refresh for
					seamless development experience. Next.js boasts a vibrant ecosystem
					and extensibility, making it a top choice for developers seeking
					high-performance web development solutions.
				</span>
				<div className="text-justify sm:columns-2">
					<h2 className="flex justify-center font-bold p-4 ">
						I. Introduction
					</h2>
					<span>
						Next.js is a framework for building web applications that provides
						additional structure, features, and optimizations on top of React.
						It simplifies tooling and configuration, allowing developers to
						focus on building their applications. Key features of Next.js
						include a file-system based router, client-side and server-side
						rendering, simplified data fetching, support for various styling
						methods, optimizations for images, fonts, and scripts, improved
						TypeScript support, and an updated API reference. With Next.js,
						developers can build interactive, dynamic, and fast web applications
						efficiently.
					</span>
					<h2 className="flex justify-center font-bold p-4 ">II. Routing</h2>
					<span>
						Next.js utilizes a file-system based router, allowing developers to
						define routes based on the file structure of their application.
						Dynamic routes are supported using the brackets syntax ([param]),
						enabling the creation of routes with dynamic segments for handling
						various parameters and generating dynamic pages based on the URL.
						Nested routing is also supported in Next.js, allowing for the
						organization of complex application layouts and managing nested
						components. For navigation between pages, Next.js offers the Link
						component, facilitating declarative navigation without full-page
						reloads. Query parameters and data can be passed through the Link
						component. Programmatic navigation and route manipulation can be
						achieved using the useRouter hook, providing access to the Next.js
						router instance. Data fetching in Next.js routes can be performed
						using the getStaticProps and getServerSideProps functions, enabling
						pre-rendering and data fetching during the build process or on each
						request.
					</span>
					<h2 className="flex justify-center font-bold p-4 ">III. Rendering</h2>
					<span>
						Next.js offers versatile rendering options, including client-side
						rendering (CSR), server-side rendering (SSR), and static site
						generation (SSG), catering to various use cases and optimizing
						performance. Client-side rendering (CSR) is the default rendering
						method in Next.js, where the initial rendering occurs on the
						client-side using JavaScript. This approach is ideal for dynamic
						content and interactive components that rely on client-side data
						fetching and manipulation. Server-side rendering (SSR) is a powerful
						feature of Next.js that allows rendering React components on the
						server-side. SSR enhances initial page load times, improves search
						engine visibility, and ensures fast content delivery to users.
						Next.js seamlessly handles server-side rendering, enabling
						developers to focus on building robust applications. Static site
						generation (SSG) generates fully pre-rendered HTML pages at build
						time, providing exceptional performance and reducing server load.
						SSG is ideal for content-driven websites that don't require
						real-time data updates. Next.js offers flexible data fetching
						methods, enabling developers to fetch and pre-render data during the
						build process. The Next.js documentation delves into key concepts
						and features of each rendering method, showcasing how to utilize
						them effectively based on project requirements. Furthermore, Next.js
						allows you to combine rendering methods to create hybrid
						applications. By selectively choosing between CSR, SSR, and SSG,
						developers can optimize their applications for performance,
						interactivity, and search engine optimization.
					</span>
				</div>
				<p className="p-8">1</p>
			</div>
		</div>
	);
}
