import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-4xl font-bold">Nusantara Travels</h3>
          <p className="text-gray-400 mt-2">Partner for your travelling</p>
        </div>
        <div>
          <h4 className="font-bold">About us</h4>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li><Link href="#">Terms & Conditions</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Cookie Policy</Link></li>
            <li><Link href="#">Help Center</Link></li>
            <li><Link href="#">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Follow us on</h4>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li><Link href="#">Instagram</Link></li>
            <li><Link href="#">Facebook</Link></li>
            <li><Link href="#">Twitter</Link></li>
            <li><Link href="#">LinkedIn</Link></li>
            <li><Link href="#">YouTube</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Feature</h4>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li><Link href="#">Booking</Link></li>
            <li><Link href="#">Payment</Link></li>
            <li><Link href="#">Cancellation</Link></li>
            <li><Link href="#">Special Deals</Link></li>
            <li><Link href="#">Gift Cards</Link></li>
          </ul>
        </div>
         <div>
          <h4 className="font-bold">Company</h4>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Sponsorship</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Press</Link></li>
            <li><Link href="#">Affiliates</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-12 border-t border-gray-800 pt-6">
        <p>Copyright @ {new Date().getFullYear()}. Nusantara Travels. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;