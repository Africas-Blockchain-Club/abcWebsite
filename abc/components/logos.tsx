import { WalletIcon } from '@web3icons/react';

export default function MyWeb3Logos() {
  return (
    <div className="flex gap-6 items-center">
      <WalletIcon name="metamask" size={48} />
      <WalletIcon name="walletconnect" size={48} />
      <WalletIcon name="coinbase" size={48} />
      <WalletIcon name="rainbow" size={48} />
    </div>
  );
}
