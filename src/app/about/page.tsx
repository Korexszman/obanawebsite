
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone, Shield, Clock, Wallet, Globe, Truck } from "lucide-react";
import footerBg from '@/assets/footer-bg.png';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

export default function AboutPage()
{
    const heroImage = "https://smarttoolsai.com/storage/73/E-commerce-Guide.webp";
    const journeyImage = "https://media.istockphoto.com/id/1444496512/photo/black-businesswoman-working-in-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ir0sfzEST0jJlhmnOb_GMnC58AXf1sN99U_sLwafhcU=";
    
    const uspItems = [
			{
				icon: <Wallet className="w-12 h-12 text-primary" />,
				image: "https://media.istockphoto.com/id/1152372225/photo/depositing-check.webp?a=1&b=1&s=612x612&w=0&k=20&c=oAmw6LnjxOFjYgZCnCKDi62qmsrG-lYWHsrc_DdRA-8=",
				title: "Inventory Financing",
				description:
					"Unlock your business's potential with our inventory financing solutions, providing the capital you need to purchase and manage stock efficiently, allowing for improved cash flow and enhanced growth opportunities.",
				bgColor: "bg-[#dcfbf9]",
			},
			{
				icon: <Globe className="w-12 h-12 text-primary" />,
				image: "https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?q=80",
				title: "Market Entry/Virtual Distirbution",
				description:
					"Facilitate your brand's expansion with our market entry and virtual distribution services, providing strategic insights and efficient sales management to help you succeed in new markets.",
				bgColor: "bg-[#dcfbf9]",
			},
			{
				icon: <Truck className="w-12 h-12 text-primary" />,
				image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Ct_eqHUquX9j3ovKRcWuRJpTzysZ35LRWQ&s",
				title: "End to End Sourcing Solution",
				description:
					"Simplify your procurement process with our comprehensive sourcing solution, managing everything from supplier selection to logistics, so you can focus on growing your business",
				bgColor: "bg-[#dcfbf9]",
			},
		];
    return (
			<div className="min-h-screen bg-gray-50">
				<NavBar />
				{/* Hero Section */}
				<div className="relative h-[500px] bg-blue-900">
					<div className="absolute inset-0">
						<img src={heroImage} alt="African marketplace" className="w-full h-full object-cover opacity-40" />
					</div>
					<div className="relative container mx-auto px-6 py-32">
						<h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Who We Are</h1>
						<p className="text-xl text-gray-100 max-w-2xl">Welcome to Obana.Africa! We have now combined all our SMEs' needs into one platform.</p>
					</div>
				</div>

				{/* Journey Section */}
				<div className="container mx-auto px-6 py-16">
					<div className="grid md:grid-cols-2 gap-12 items-center mb-20">
						<div>
							<h2 className="text-3xl font-bold text-gray-800 mb-6">Our Journey</h2>
							<p className="text-gray-600 text-lg leading-relaxed">
								With the advent of marketplaces in our local e-commerce platform in Nigeria, we saw the need to source and supply retailers with authentic goods to sell on these e-commerce
								platforms. We have been in operation for over 8 years, and we are now expanding the ecosystem to encompass all the lessons learned over the years.
							</p>
						</div>
						<div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
							<img src={journeyImage} alt="Our journey" className="w-full h-full object-cover" />
						</div>
					</div>

					{/* Enhanced USP Section */}
					<div className="mb-20">
						<h2 className="text-3xl font-bold text-center mb-12">Our Unique Selling Points</h2>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{uspItems.map((usp, index) => (
								<Card key={index} className={`overflow-hidden transition-transform duration-300 hover:scale-105 ${usp.bgColor}`}>
									<div className="h-48 relative">
										<img src={usp.image} alt={usp.title} className="w-full h-full object-cover" />
										<div className="absolute bottom-0 right-0 p-4 bg-white rounded-tl-xl">{usp.icon}</div>
									</div>
									<CardContent className="p-6">
										<h3 className="text-xl font-bold mb-3">{usp.title}</h3>
										<p className="text-gray-600">{usp.description}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>

					{/* Vision & Mission */}
					<div className="bg-gradient-to-r from-[#2B6E64] to-[#1B3B5F] rounded-xl p-12 mb-20 text-white">
						<div className="grid md:grid-cols-2 gap-12">
							<div>
								<h2 className="text-3xl font-bold mb-4">Our Vision</h2>
								<p className="text-gray-100 text-lg">
									Driven by our core values of reliability, authenticity, transparency and community, Obana.africa is here to bridge the gap between dreams and access, becoming the trusted
									source that businesses turn to for prosperity and progress.
								</p>
							</div>
							<div>
								<h2 className="text-3xl font-bold mb-4">Our Mission</h2>
								<p className="text-gray-100 text-lg">
									Our mission is simple; to help African SMEs focus on growing their businesses while we carter to their product assortment needs, efficient logistics, payment and inventory
									financing.
								</p>
							</div>
						</div>
					</div>

					{/* Values Section */}
					<div className="mb-20">
						<h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
						<div className="grid md:grid-cols-4 gap-6">
							{[
								{ title: "Reliability", desc: "We provide consistent and dependable service that our partners can trust." },
								{ title: "Authenticity", desc: "We foster genuine relationships by staying true to our mission and values." },
								{ title: "Transparency", desc: "We maintain open communication and accountability in all our operations." },
								{ title: "Community", desc: "We are dedicated to building strong connections and supporting the growth of our local communities." },
							].map((value, index) => (
								<Card key={index} className="p-6 hover:shadow-xl transition-shadow duration-300">
									<CardContent>
										<h3 className="text-xl font-bold mb-3">{value.title}</h3>
										<p className="text-gray-600">{value.desc}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>

					{/* Contact Section */}
					<div className="text-white rounded-xl p-12 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${footerBg.src})` }}>
						<h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
						<div className="grid md:grid-cols-3 gap-6">
							<Button asChild variant="outline" className="bg-white text-blue-900 hover:bg-gray-100 flex items-center gap-2">
								<a href="https://shorturl.at/5Sg8V">
									<MessageCircle className="w-5 h-5" />
									Chat with Us
								</a>
							</Button>
							<Button asChild variant="outline" className="bg-white text-blue-900 hover:bg-gray-100 flex items-center gap-2">
								<a href="mailto:contact@obana.africa">
									<Mail className="w-5 h-5" />
									contact@obana.africa
								</a>
							</Button>
							<Button asChild variant="outline" className="bg-white text-blue-900 hover:bg-gray-100 flex items-center gap-2">
								<a href="tel:+2348096535511">
									<Phone className="w-5 h-5" />
									+2348096535511
								</a>
							</Button>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
}

