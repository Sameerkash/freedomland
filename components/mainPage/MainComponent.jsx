function MainPage() {
  const connectWallet = (event) => {
    console.log(event);

    console.log("wallet connecetion");
  };
  return (
    <div className="m-5 flex flex-col items-stretch pb-10">
      <span className="m-2 pb-10 pt-10 text-4xl font-semibold text-white">
        Dashboard
      </span>

      <div className=" flex  flex-row items-start justify-center rounded-lg  bg-indigo-800 p-12 pb-12">
        <div className="flex w-full flex-1 flex-col justify-evenly pr-4  pl-4">
          <span className=" pb-4 text-2xl font-semibold text-white">
            Collection
          </span>
          <span className="text-justify text-xl text-white">
            All your owned, rented or sold property NFTs will be listed here.
            You can use your fractional ownership to earn proportional returns.
          </span>

          <span className="text-justify text-xl text-white pt-5">
            Participate in the governenace of the property to steer the
            direction in which the property will be utilized.
          </span>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
