import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <>
      <div className=" flex flex-col justify-between px-4 py-24 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24 md:flex-row gap-8 ">
        {/* top */}
        <div className="flex justify-between gap-24">
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <Link href="/">
              <div className="text-2xl tracking-wide">LILTH</div>
            </Link>
            <p>random adress</p>
            <span className="font-semibold">hello@lilith.com</span>
            <span className="font-semibold">1234567890</span>
            <div className="flex gap-6">
              <Image src="/facebook.png" alt="" width={16} height={16} />
              <Image src="/instagram.png" alt="" width={16} height={16} />
              <Image src="/youtube.png" alt="" width={16} height={16} />
              <Image src="/pinterest.png" alt="" width={16} height={16} />
              <Image src="/x.png" alt="" width={16} height={16} />
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>
        {/* bottom */}
        <div className=" w-full lg:w-1/2 flex flex-col gap-8">
          <h1 className="text-lg font-medium ">SUBSCRIBE</h1>
          <p className="font-semibold ">
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="">
            <input
              placeholder="Email address"
              className="p-4 w-3/4"
              type="text"
            ></input>
            <button className="bg-redpink p-4 text-white w-1/4">JOIN</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="" width={40} height={20} />
            <Image src="/skrill.png" alt="" width={40} height={20} />
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
