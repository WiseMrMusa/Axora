import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { api } from '@/utils/api';
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import "@/styles/globals.css";
import { polygonMumbai } from 'wagmi/chains';
import { siweClient } from '../utils/siweClient';

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID;

const chains = [polygonMumbai];
const client = createClient(
  getDefaultClient({
    appName: "Axora Finance",
    alchemyId,
    chains
  }),
);


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <WagmiConfig client={client}>
        <siweClient.Provider>
          <ConnectKitProvider>
            <Component {...pageProps} />
          </ConnectKitProvider>
        </siweClient.Provider>
      </WagmiConfig>
      <Analytics />
    </>
  );
}

export default api.withTRPC(MyApp);
