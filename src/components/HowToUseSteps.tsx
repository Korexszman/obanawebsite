
"use client"
import { useState } from 'react';
import abroad from '@/assets/abroad.png';
import nigeria from '@/assets/nigeria.png';
import funds from '@/assets/funds.png';
import africa from '@/assets/africa.png';
import Image from 'next/image';
import { classNames } from '@/Utils/functions';
import { obIcons } from '@/assets/obIcons';

const images = [abroad, nigeria, funds, africa];
const steps = [
  {
    title: 'Buying From Aborad?',
    description:
      'We’ll help you access the best suppliers from around the globe, compare prices, and place your orders easily.',
  },
  {
    title: 'Buying From Nigeria?',
    description:
      'Our vast network of trusted local suppliers will deliver your goods without stress.',
  },
  {
    title: 'No Money?',
    description: 'No problem! We’ll grant you credit facilities to buy now and pay later!',
  },
  {
    title: 'Shipping To Africa?',
    description:
      'Our reliable logistics partners will help you deliver fast and easily.',
  },
];
const HowToUseSteps = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex items-center justify-between mt-6">
      <div className="max-w-[40.625rem] max-md:space-y-3">
        {steps.map((item, i) => (
          <div
            className={classNames(
              index === i ? 'border-primary' : 'border-white',
              'md:border-l-[3px] min-h-[125px] px-5 md:px-6 flex items-center max-md:rounded-xl max-md:bg-white'
            )}
            onClick={() => setIndex(i)}
            key={i}
          >
            <div>
              <div className="flex items-center gap-2.5">
                <span
                  className={classNames(
                    index === i ? 'text-primary' : 'md:text-obGray-400',
                    'max-md:text-primary'
                  )}
                >
                  {obIcons['checkCircle']()}
                </span>
                <span
                  className={classNames(
                    index === i ? 'text-main-blue' : 'md:text-obGray-400',
                    'text-lg lg:text-2xl font-bold max-md:text-main-blue'
                  )}
                >
                  {item.title}
                </span>
              </div>
              <p
                className={classNames(
                  index === i ? 'text-obGray-800' : 'md:text-obGray-400',
                  'lg:text-lg max-md:text-obGray-800'
                )}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-[32.5rem] max-md:hidden">
        <Image src={images[index]} alt={steps[index].title} />
      </div>
    </div>
  );
};

export default HowToUseSteps;
