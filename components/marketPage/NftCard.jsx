function NftCard(props) {
  const { nft } = props;
  const common_style = {
    start_icon: {
      height: 19,
      width: 19,
      hover_color: "hover:text-orange-600",
    },
  };
  return (
    <>
      <div className="m-3 flex flex-col rounded-md border border-pink-600 ">
        <img
          src={nft.nftImage}
          alt="nft.nftName"
          className="p rounded-md rounded-b-none"
          style={{ height: "50%" }}
        />
        <div
          className="m-3 flex flex-col justify-center border border-gray-600 p-1"
          style={{ height: "50%" }}
        >
          <div className="line-one flex">
            <h3 className="nft-name flex-grow text-3xl font-medium text-cyan-100">
              {nft.nftName}
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`icon icon-tabler icon-tabler-star ${common_style.start_icon.hover_color}`}
              width={common_style.start_icon.width}
              height={common_style.start_icon.height}
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
            </svg>
            <span>44</span>
          </div>
          <div className="more flex justify-center">
            <div className="overflow-hidden">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              iste aliquid modi, atque explicabo
            </div>
          </div>
          <div className="line-two m-5 flex flex-grow items-end justify-between">
            <div className="buy flex flex-col items-center">
              <span>buy </span>
              <button className="h-10 w-20 rounded border border-pink-700 hover:text-teal-500">
                ${nft.nftPrice}
              </button>
            </div>
            <div className="rent flex flex-col items-center">
              <span>rent</span>
              <button className="h-10 w-20 rounded border border-pink-700 hover:text-teal-500">
                ${nft.nftRentPrice}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NftCard;
