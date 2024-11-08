"use client";
import Image from "next/image";
import Button from "./Button";
import avatarGroup from "@/assets/avatar-group.png";

const HeroBanner = () => {
	return (
		<>
			<section className="py-10 sm:py-20 mb-10 sm:mb-20 bg-obGray-100 w-[95%] md:w-[97%] mx-auto rounded-lg">
				<div className="container mx-auto px-2">
					<div className="max-w-4xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl md:leading-[1.2] font-extrabold mb-6 text-[#1b3b5f]">
							Unlocking SME growth in Sub Saharan Africa by bridging supply chain gaps and complexities
						</h1>

						<p className="text-lg sm:text-xl mb-8 text max-w-3xl mx-auto">
							We empower SMEs across africa, guiding them through the challenges of the fragmented supply chain (product sourcing, payment, logistics & inventory financing) inherent in
							sub-Saharan Africa
						</p>
						<div className="flex justify-center space-x-1 max-sm:flex-col items-center">
							<Button className="w-[200px]" icon onClick={() => window.open("https://shop.obana.africa/", "_blank")}>
								Browse Products
							</Button>
							{/* <Button variant="ghost"> Get Started Now</Button> */}
						</div>
						<div className="max-sm:hidden flex items-center gap-3 justify-center mt-8 text-obGray-800">
							<Image src={avatarGroup} alt="users" className="h-10 w-auto" />
							<span>Over 1K Happy SME Customers</span>
						</div>
					</div>
				</div>
				{/* <div className="container mx-auto px-4 pt-10 md:pt-20">
          <div className="bg-gray-300  h-auto max-h-[11.25rem] sm:max-h-[39.375rem] w-max max-w-full mx-auto rounded-lg flex items-center justify-center overflow-hidden">
            <Image
              src={imgBanner}
              alt="Obana Africa"
              className="h-full object-contain"
            />
          </div>
        </div> */}
			</section>
		</>
	);
};

export default HeroBanner;
