import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { api } from '@/utils/api';
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { siweClient } from '../utils/siweClient';
import Layout from '@/components/layout';
import "@/styles/globals.css";
import { WagmiConfig, createClient, goerli, sepolia } from 'wagmi';
import { polygonMumbai, } from 'wagmi/chains';
import { ContractsProvider } from '@/contexts/ContractsProvider';


// const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID;
const infuraId = process.env.NEXT_PUBLIC_INFURA_ID;
const chains = [sepolia , polygonMumbai, goerli ];

const client = createClient(
  getDefaultClient({
    appName: "Your App Name",
    infuraId,
    // alchemyId,
    chains
  }),
);


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <WagmiConfig client={client}>
        <siweClient.Provider>
          <ConnectKitProvider>
            <ContractsProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ContractsProvider>
          </ConnectKitProvider>
        </siweClient.Provider>
      </WagmiConfig>
      <Analytics />
    </>
  );
}

export default api.withTRPC(MyApp);
