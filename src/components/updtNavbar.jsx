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
			<div className="flex shadow-lg mx-auto bg-green-500 w-full px-4 py-3 lg:py-4 text-white">
				<div className="flex justify-between items-center">
					<a href="/" title="Rizqi" key="Rizqi" aria-label="Rizqi" className="shadow-sm">
						<span className="mr-4 uppercase hover:text-gray-700 text-xl tracking-wide">Rizqi</span>
					</a>
					<div className="lg:hidden flex">
						<button
							type="button"
							title="Mobile Menu Button"
							key="Mobile Menu Button"
							aria-label="Mobile Menu Button"
							className="flex rounded-md p-2 transition duration-200 hover:shadow-md hover:bg-green-300 focus:outline-none focus:shadow-outline focus:bg-green-400 focus:ring-offset-gray-800"
							onClick={() => setOpen(!open)}
						>
							<i className="fas fa-bars"></i>
						</button>
					</div>
					<ul className="items-center space-x-8 hidden lg:flex justify-between">
						{navigation.map((nav) => (
							<li>
								<a
									title={nav.name}
									key={nav.name}
									aria-label={nav.name}
									aria-current={nav.current ? "page" : undefined}
									href={nav.href}
									className={classNames(
										nav.current
											? "bg-gray-900 text-white"
											: "text-white hover:bg-gray-700 hover:text-white",
										"focus:outline-none hover:shadow-md focus:shadow-outline transition-colors duration-200 tracking-wide px-3 py-2 rounded-md text-sm font-medium"
									)}
								>
									{nav.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
