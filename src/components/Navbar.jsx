import React, { useState } from "react";

const navigation = [
	{ name: "Dashboard", href: "#", current: false },
	{ name: "About", href: "#about", current: false },
	{ name: "Projects", href: "#project", current: false },
	{ name: "Contact Us", href: "#contact", current: false },
];

const classNames = (...classes) => {
	return classes.filter(Boolean).join(" ");
};

const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<nav>
			<div className="w-screen flex text-white bg-green-500 px-4 py-2 mx-auto shadow-lg">
				<div className="relative flex items-center">
					<div className="flex items-center justify-between">
						<a
							href="#"
							rel="noopener noreferrer"
							aria-label="Rizqi"
							title="Rizqi"
							className="inline-flex items-center mr-8"
						>
							<span className="ml-2 text-xl font-bold tracking-wide uppercase hover:font-light hover:text-gray-700">
								Rizqi
							</span>
						</a>
						<ul className="items-center space-x-8 hidden lg:flex md:flex">
							{navigation.map((item) => (
								<li>
									<a
										key={item.name}
										rel="noopener noreferrer"
										href={item.href}
										title={item.name}
										className={classNames(
											item.current
												? "bg-gray-900 text-white"
												: "text-white hover:bg-gray-700 hover:text-white",
											"focus:outline-none hover:shadow-md focus:shadow-outline transition-colors duration-200 tracking-wide px-3 py-2 rounded-md text-sm font-medium"
										)}
										aria-label={item.name}
										aria-current={item.current ? "page" : undefined}
									>
										{item.name}
									</a>
								</li>
							))}
						</ul>
						<div className="lg:hidden justify-end">
							<button
								type="button"
								className="flex p-2 transition duration-200 focus:outline-none hover:shadow-md focus:shadow-outline hover:bg-green-300 focus:bg-green-400 rounded-md focus:ring-offset-gray-800"
								aria-controls="mobile-menu"
								aria-expanded="false"
								aria-label="Open main menu"
								title="Open main menu"
								onClick={() => setOpen(!open)}
							>
								<span className="sr-only">Open main menu</span>
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
								<svg
									className="hidden h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
					</div>

				</div>
				<div className={open ? "absolute w-full left-0" : "hidden"}>
					<div className="p-5 bg-green-600 border rounded-md shadow-lg">
						<div className="flex items-center justify-between mb-4">
							<a
								href="/"
								rel="noopener noreferrer"
								aria-label="Rizqi"
								title="Rizqi"
								className="inline-flex items-center"
							>
								<span className="ml-2 text-xl font-bold tracking-wide uppercase hover:font-light hover:text-gray-700">
									Rizqi
								</span>
							</a>
							<button
								aria-label="Close main menu"
								title="Close main menu"
								className="hover:bg-green-300 p-2 transition duration-200 rounded focus:bg-gray-200 focus:outline-none focus:shadow-outline"
								onClick={() => setOpen(!open)}
							>
								<svg className="h-6 w-6 block text-white" viewBox="0 0 24 24">
									<path
										fill="currentColor"
										d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
									></path>
								</svg>
							</button>
						</div>
						<nav>
							<ul className="space-y-4 pt-2">
								{navigation.map((item) => (
									<li>
										<a
											key={item.name}
											rel="noopener noreferrer"
											href={item.href}
											title={item.name}
											className={classNames(
												item.current
													? "bg-gray-900 text-white"
													: "text-white hover:bg-gray-700 hover:text-white",
												"focus:outline-none hover:shadow-md focus:shadow-outline transition-colors duration-200 tracking-wide px-3 py-2 rounded-md text-sm font-medium"
											)}
											aria-label={item.name}
											aria-current={item.current ? "page" : undefined}
										>
											{item.name}
										</a>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
