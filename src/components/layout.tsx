"use client";
// import Header from '@/components/header'
import { ConnectKitButton } from 'connectkit';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Header /> */}
      <main >
        <div>
          <div className='flex flex-row-reverse'><ConnectKitButton /></div>
          {children}
        </div>
      </main>
    </>
  );
}