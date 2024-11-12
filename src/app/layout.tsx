import "./globals.css";
import 'aos/dist/aos.css';
import RootLayout from "./RootLayout"; 

export const metadata = {
	title: "Obana.Africa | Sub-Sahara Africa's Sourcing Marketplace Platform",
	description: "About us page",
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" >
			<head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
			</head>
			<body className="antialiased transition-all duration-75">
				{/* Wrap children with RootLayout which includes the Zoho SalesIQ script */}
				<RootLayout>{children}</RootLayout>
			</body>
		</html>
	);
}
