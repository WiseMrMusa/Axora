"use client";
// import Header from '@/components/header'
import { ConnectKitButton } from 'connectkit';
import { Toaster } from '@/components/ui/toaster';
import NavBar from './nav-bar';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Header /> */}
      <div className='mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8 '>
        <div className='relative flex justify-between py-8 z-0'>
          <NavBar />
          <ConnectKitButton />
        </div>
          {children}
        <Toaster />
      </div>
    </>
  );
}