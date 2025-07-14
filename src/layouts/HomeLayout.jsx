import { AnimatePresence, motion as m } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Tab from "../components/Tab";
import { R_ABOUT, R_CONTACT, R_HOME, R_PROJECTS } from "../constants/routes";
import "../styles/Layout.css";
import { RefContext } from "./RootLayout";

function HomeLayout({ pathname }) {
	const sentinelRef = useRef(null);
	const tabRef = useRef(null);
	const { setSentinelRef } = useContext(RefContext);
	const [selected, setSelected] = useState("");
	const [showNav, setShowNav] = useState(false);

	useEffect(() => {
		if (pathname === R_HOME && selected !== "home") setSelected("home");

		else if (pathname === R_ABOUT && selected !== "about") setSelected("about");

		else if (
			(pathname === R_PROJECTS || pathname.startsWith(R_PROJECTS)) &&
			selected !== "projects"
		) setSelected("projects");

		else if (pathname === R_CONTACT && selected !== "contact") setSelected("contact");
	}, [pathname]);

	useEffect (() => {
		if (setSentinelRef) {
			setSentinelRef(sentinelRef);

			// Remove sentinelRef state upon unmount
			return () => {
				if (sentinelRef) setSentinelRef(null);
			};
		}
	}, [setSentinelRef]);

	useEffect(() => {
		if (!tabRef.current) return;

		const tab = tabRef.current;
		const observer = new IntersectionObserver(
			([entry]) => {setShowNav(!entry.isIntersecting);},
			{
				root: null,
				threshold: 0.25
			}
		);

		observer.observe(tab);

		// Remove tab sentinel observer upon unmount
		return () => {
			observer.unobserve(tab);
			setShowNav(false);
		};
	}, [tabRef]);

	return (
		<div className="layout-wrapper">
			<div className="layout">
				<div ref={sentinelRef}/>

				<div id="navbar">
					<AnimatePresence>
					{showNav && (
						<m.div
							initial={{ y: "-100%" }}
							animate={{ y: 0 }}
							exit={{ y: "-100%" }}
							transition={{ duration: .3 }}
						>
							<Navbar selected={selected}/>
						</m.div>
					)}
					</AnimatePresence>
				</div>

				<header id="header">
					<Banner selected={selected}/>
					<div ref={tabRef}>
						<Tab selected={selected}/>
					</div>
				</header>

				<main id="content">
					<AnimatePresence mode="wait">
						<Outlet/>
					</AnimatePresence>
				</main>

				<footer id="footer">
					<Footer selected={selected}/>
				</footer>
			</div>
		</div>
	);
}

export default HomeLayout;