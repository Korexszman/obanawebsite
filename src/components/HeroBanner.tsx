'use client'
import Image from 'next/image';
import Button from './Button';
import avatarGroup from '@/assets/avatar-group.png';

const HeroBanner = () => {
  return (
    <>
      <section className="py-10 sm:py-20 mb-10 sm:mb-20 bg-obGray-100 w-[95%] md:w-[97%] mx-auto rounded-lg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-main-blue">
              Sub-Sahara Africa's Sourcing Marketplace Platform
            </h1>

            <p className="text-lg sm:text-xl mb-8 text">
            Our customers are able to source products, make make payment and have their order shipped on one platform with the opportunity of getting their purchase financed by our partners
            </p>
            <div className="flex justify-center space-x-1 max-sm:flex-col">
              <Button
                icon
                onClick={() =>
                  window.open('https://shop.obana.africa/', '_blank')
                }
              >
                Browse Products
              </Button>
              <Button variant="ghost"> Get Started Now</Button>
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
