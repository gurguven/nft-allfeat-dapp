"use client"
import Header from '../components/Header'
import Image from 'next/image'
// Imaginons que c'est l'adresse de la collection sur Allfeat
const NFT_CONTRACT_ADDRESS = "0x1234567890123456789012345678901234567890"
const AFT_TO_USD_RATE = 0.1 // 100 AFT = 10$

export default function Home() {

  const formatAddress = (address: string) => {
    if (address.length <= 13) return address;
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
      <div className="flex flex-col min-h-screen bg-[#151515] text-[#fffbeb] overflow-hidden">
        <Header />
        <main className="flex-grow flex items-center justify-center p-8">
          <div className="flex flex-col md:flex-row gap-16 max-w-4xl w-full">
            <div className="flex-1 rounded-lg shadow-lg overflow-hidden w-full md:w-1/2">
              <Image 
                src="/images/nft-illustration.png" 
                alt="NFT Preview" 
                width={400} 
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex-1 space-y-6">
              <h1 className="text-3xl font-bold">NFT Test #1</h1>
              <p className="text-lg">Description du NFT lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="space-y-2">
                <p className="text-2xl font-bold">1000 AFT</p>
                <p className="text-lg text-gray-400">${1000 * AFT_TO_USD_RATE}</p>
              </div>
              <div className="p-4 border border-[#0b5949] rounded-lg space-y-2">
                <p>Contract Address: {formatAddress(NFT_CONTRACT_ADDRESS)}</p>
              </div>
              <button
                className={`w-full px-6 py-3 text-lg font-semibold text-[#fffbeb] bg-[#0b5949] rounded-full hover:bg-[#eae6d6] hover:text-[#151515] transition-colors duration-300`}
              >
                Claim Now
              </button>
            </div>
          </div>
        </main>
      </div>
  )
}