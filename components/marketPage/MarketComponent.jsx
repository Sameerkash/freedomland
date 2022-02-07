import React from "react";
import NftCard from "./NftCard";

function MarketPage() {
  // Temp data
  const nfts = [
    {
      nftName: "nft4",
      nftPrice: "9.00",
      nftRentPrice: "0.2",
      nftImage:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.gRJDJ6wmX8UUg3d55CZyKAHaFj%26pid%3DApi&f=1",
    },
    {
      nftName: "nft5",
      nftPrice: "93.00",
      nftRentPrice: "1.2",
      nftImage:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.PjoAoZk7XFTzRpxwrN8angHaHa%26pid%3DApi&f=1",
    },
    {
      nftName: "nft1",
      nftPrice: "0.01",
      nftRentPrice: "0.002",
      nftImage:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.1eagFVSj9zUyZBJRwPZmdAHaE8%26pid%3DApi&f=1",
    },
    {
      nftName: "nft2",
      nftPrice: "0.01",
      nftRentPrice: "0.002",
      nftImage:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.gRJDJ6wmX8UUg3d55CZyKAHaFj%26pid%3DApi&f=1",
    },
    {
      nftName: "nft3",
      nftPrice: "0.01",
      nftRentPrice: "0.002",
      nftImage:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2EPULDr0Pn9g18bMS6TnbAHaEo%26pid%3DApi&f=1",
    },
  ];

  return (
    <>
      <div className="container flex  flex-col">
        <span className="m-2 px-4  pb-10 pt-10 text-3xl font-semibold text-white">
          Featured
        </span>
        <div className="banner-slider m-3 h-1/5  p-3">
          <img
            src="https://www.rliland.com/wp-content/uploads/land-for-sale_edited.png"
            alt="lorem ipsum dollor"
            className="h-full w-full rounded-3xl"
          />
        </div>
        <div className="card-wraper m-3  p-3">
          <span className="m-2 px-4 pb-16 pt-10 text-3xl font-semibold text-white">
            Explore Properties
          </span>
          <div className="card-holder grid min-h-fit grid-cols-4 p-3">
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
