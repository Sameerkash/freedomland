function NftCard(props) {
  const { nft } = props;
  console.log(props);
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
          className="m-3 border border-gray-600 p-1"
          style={{ height: "50%" }}
        >
          <h3>{nft.nftName}</h3>
        </div>
      </div>
    </>
  );
}

export default NftCard;
