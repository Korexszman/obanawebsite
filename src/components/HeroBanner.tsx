"use client";
import Image from "next/image";
import Button from "./Button";
import avatarGroup from "@/assets/avatar-group.png";

const HeroBanner = () => {
	return (
		<>
			<section className="py-10 sm:py-20 mb-10 sm:mb-20 bg-obGray-100 md:w-[97%] mx-auto rounded-lg">
				<div className="container mx-auto px-2">
					<div className="max-w-4xl mx-auto text-center">
						<h1 className="text-4xl md:text-6xl md:leading-[1.2] font-extrabold mb-6 text-[#1b3b5f]">
						Source, Buy and Pay in Your Local Currency
						</h1>

						<p className="text-lg sm:text-xl mb-8 text max-w-3xl mx-auto">
						"Shop from trusted top vendors, no matter where you are. we enable Sub Saharan Africa SMEs scale their businesses."
						</p>
						<div className="flex justify-center space-x-1 max-sm:flex-col items-center">
							<Button className="w-[200px]" icon onClick={() => window.open("https://shop.obana.africa/", "_blank")}>
								Shop Now
							</Button>
							{/* <Button variant="ghost"> Get Started Now</Button> */}
						</div>
						<div className="max-sm:hidden flex items-center gap-3 justify-center mt-8 text-obGray-800">
							<Image src={avatarGroup} alt="users" className="h-10 w-auto" />
							<span>Join our network of trusted partners, growing every day.</span>
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
