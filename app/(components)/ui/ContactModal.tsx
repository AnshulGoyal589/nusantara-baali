'use client';

import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { CheckCircle, Mail, Phone, X, MessageSquare } from 'lucide-react'; // Added MessageSquare
import type { Package } from '@/app/data/types';

interface ContactModalProps {
  isOpen: boolean;
  closeModal: () => void;
  selectedPackage: Package | null; // This can now be null
}

export const ContactModal = ({ isOpen, closeModal, selectedPackage }: ContactModalProps) => {
  if (!isOpen) return null;

  // Determine content based on whether a package was selected
  const isBookingInquiry = selectedPackage !== null;
  const title = isBookingInquiry ? "Request Received!" : "Contact Us";
  const Icon = isBookingInquiry ? CheckCircle : MessageSquare;
  const iconBgColor = isBookingInquiry ? "bg-green-100" : "bg-blue-100";
  const iconColor = isBookingInquiry ? "text-green-600" : "text-blue-600";

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        {/* ... (Transition.Child for overlay remains the same) */}
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600" aria-label="Close modal">
                  <X size={24} />
                </button>
                
                <div className="flex flex-col items-center">
                  <div className={`flex-shrink-0 ${iconBgColor} rounded-full p-3`}>
                    <Icon className={`h-8 w-8 ${iconColor}`} aria-hidden="true" />
                  </div>
                  
                  <Dialog.Title as="h3" className="mt-4 text-2xl font-bold leading-6 text-gray-900">
                    {title}
                  </Dialog.Title>
                  
                  <div className="mt-2 w-full text-center">
                    {isBookingInquiry ? (
                      <>
                        <p className="text-sm text-gray-500">Thank you for your interest in the <span className="font-semibold text-gray-700">{selectedPackage.name}</span> package.</p>
                        <p className="text-sm text-gray-500 mt-1">Our experts will contact you shortly to finalize details.</p>
                      </>
                    ) : (
                      <p className="text-sm text-gray-500">We'd love to hear from you! Please reach out via one of the methods below.</p>
                    )}
                  </div>
                </div>

                <div className="mt-6 border-t pt-6">
                  <h4 className="font-semibold text-gray-800 text-center">
                    {isBookingInquiry ? "For immediate assistance:" : "Get in touch with our team:"}
                  </h4>
                  <div className="mt-4 space-y-3 text-black ">
                    {/* ... (Contact links remain the same) */}
                     <a href="mailto:contact@nusantaratravels.com" className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                      <Mail className="h-6 w-6 text-black" />
                      <div><p className="font-semibold">Email Us</p><p className="text-sm">contact@nusantaratravels.com</p></div>
                    </a>
                    <a href="tel:+1234567890" className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                      <Phone className="h-6 w-6 text-black" />
                       <div><p className="font-semibold">Call Us</p><p className="text-sm">+1 (234) 567-890</p></div>
                    </a>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button type="button" className="inline-flex justify-center rounded-md border border-transparent bg-teal-100 px-6 py-2 text-sm font-medium text-teal-900 hover:bg-teal-200" onClick={closeModal}>
                    Got it, thanks!
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};