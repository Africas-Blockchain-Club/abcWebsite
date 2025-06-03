"use client";

import Image from "next/image";

const logos = [
  { src: "/Logos/polkadot.svg", invert: true },
  { src: "/Logos/aave-svgrepo-com.svg", invert: true },
  { src: "/Logos/chainlink.svg", invert: true },
  { src: "/Logos/ipfs.svg", invert: true },
  { src: "/Logos/ethereum-eth-logo.png", invert: false },
  { src: "/Logos/solana.svg", invert: true },
  { src: "/Logos/bitcoin.svg", invert: true },
  { src: "/Logos/hardhat-logo-png_seeklogo-426726.png", invert: false },
  { src: "/Logos/cardano.svg", invert: true },
  { src: "/Logos/remix.png", invert: false },
  { src: "/Logos/web3dotjs.svg", invert: true },
  { src: "/Logos/thirdweb.svg", invert: true },
  { src: "/Logos/solidity.svg", invert: true },
  { src: "/Logos/opensea.svg", invert: true },
  { src: "/Logos/vim.svg", invert: true },
  { src: "/Logos/ethereum.svg", invert: true },
  { src: "/Logos/truffle.png", invert: false },
  { src: "/Logos/vscode.png", invert: false },
  { src: "/Logos/alchemy.svg", invert: true },
  { src: "/Logos/openzeppelin.svg", invert: true },
  { src: "/Logos/metamask.png", invert: false },
  { src: "/Logos/graph.png", invert: false },
];

export default function LogosRow() {
  return (
    <div className="w-full px-25 py-4">
      <div className="flex flex-wrap gap-6 justify-center items-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="p-4 transition-transform"
          >
            <Image
              src={logo.src}
              alt={`Logo ${index}`}
              width={60}
              height={60}
              className={`object-contain ${logo.invert ? "invert" : ""}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
