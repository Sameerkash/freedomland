function MainPage() {
  const connectWallet = (event) => {
    console.log(event);

    console.log("wallet connecetion");
  };
  return (
    <>
      <div className="container">
        <div className="welcome-card max-h-5">
          <img
            src="https://opensea.mypinata.cloud/ipfs/QmdYm9WNbqDoxvmexAicUaorqKX1o3hdBxTiPZa6kYbid5"
            alt="popular nft"
          />
        </div>
      </div>
      {/* <button
        className="m-3 rounded-md bg-orange-400 py-2 px-4 font-bold text-stone-900 hover:bg-red-500"
        onClick={(event) => {
          connectWallet(event);
        }}
      >
        Connect Wallet
      </button> */}
    </>
  );
}

export default MainPage;
