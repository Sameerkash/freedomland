import React from "react";
import NftCard from "./NftCard";

function MarketPage() {
  // Temp data
  const nfts = [
    {
      nftName: "nft1",
      nftPrice: "0.01",
      nftRentPrice: "0.002",
      nftImage:
        "https://cdn.coingape.com/wp-content/uploads/2021/12/13202957/bored-ape-nft-sothebys-record-sale-gID_4-1636814089.jpg",
    },
    {
      nftName: "nft2",
      nftPrice: "0.01",
      nftRentPrice: "0.002",
      nftImage:
        "https://lh3.googleusercontent.com/GM4a-VCWL8j5H3qE0IohssLWyYRJZKFbT1XkVnrXBhetT08PkaHnQqTZD0Z1mNMfLrZUmjngW9LTTBDXpvpz9k8fPbSLrt5ApkKzyg",
    },
    {
      nftName: "nft3",
      nftPrice: "0.01",
      nftRentPrice: "0.002",
      nftImage:
        "https://cdn.coingape.com/wp-content/uploads/2021/12/13202957/bored-ape-nft-sothebys-record-sale-gID_4-1636814089.jpg",
    },
  ];
  return (
    <>
      <div className="flex min-w-[100%] flex-col">
        <div className="banner-slider m-3 h-2/6 w-[100] border-2 border-orange-600 p-3">
          <img
            src="https://cdn.discordapp.com/attachments/938514476204982353/939169339322560573/07da6aab54198b6450440f8050e3034f.png"
            alt="lorem ipsum dollor"
            className="h-full w-full rounded-3xl"
          />
        </div>
        <div className="card-wraper m-3  border-2 border-red-800 p-3">
          <div className="card-holder grid min-h-fit grid-cols-3 border-2 border-green-800 p-3">
            {nfts.map((nft, index) => (
              <NftCard key={index} nft={nft} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MarketPage;
