"use client";
import { useEffect } from "react";
import AOS from "aos";
import Headding from "./Headding";
import ServicesSlider from "./ServicesSlider";

const Services = () => {
	useEffect(() => {
        AOS.init({
				offset: 50,
				delay: 50,
				duration: 1000,
				easing: "ease-in-out",
				once: false,
				mirror: true,
			});
	}, []);

	return (
		<section className="py-20 bg-white" id="services">
			<div className="container mx-auto px-4">
				<Headding
					smallText="Our Services"
					headerText="Comprehensive Solutions for Your Business Needs"
					subText="Focus on growing your business, let obana.africa help you work about your end to end sourcing needs
"
					className="max-w-[738px] text-center mx-auto"
				/>
				<ServicesSlider />
			</div>
		</section>
	);
};

export default Services;
