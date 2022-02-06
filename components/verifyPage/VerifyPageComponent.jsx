function VerifyPageComponent() {
  return (
    <div className="m-10 flex flex-col items-stretch pb-10">
      <span className="m-2 pb-10 pt-10 text-4xl font-semibold text-white">
        Verify
      </span>
      <div className=" flex  flex-row items-start justify-center rounded-lg bg-indigo-800 p-12 pb-12">
        <div className="flex flex-1 flex-col justify-evenly pr-4 pl-4 ">
          <span className=" pb-4 text-2xl font-semibold text-white">Stake</span>
          <span className="text-justify text-xl text-white">
            Staking LND helps secure the protocol by verifying ownership of real
            estate documents.
          </span>
        </div>

        <div className="flex flex-1 flex-col pr-8 pl-8">
          <span className=" pb-4 text-2xl font-semibold text-white">
            LND Staked
          </span>
          <span className="text-xl text-white">0 LND</span>
        </div>

        <div className="flex flex-1 flex-col pr-8 pl-8">
          <span className=" pb-4 text-2xl font-semibold text-white">
            Withdrawable LND
          </span>
          <span className="text-xl text-white">0 LND</span>
        </div>
      </div>

      <BecomeAVerifierButton />
      <UnStakeButton />

      <span className="pb-10 pt-28 text-3xl font-semibold text-white">
        Verify Land Documents
      </span>
      <div className="flex w-full flex-col items-start rounded-lg bg-indigo-800 p-4 px-36">
        <DocumentTile />
        <DocumentTile />
      </div>
    </div>
  );
}

export default VerifyPageComponent;

function BecomeAVerifierButton() {
  return (
    <button className="mt-8 flex flex-col items-center rounded-lg bg-indigo-800 p-8 hover:opacity-80">
      <span className="text-xl font-semibold">Become a Verifier</span>
      <span>
        Become a Verifier by staking and help verify docuemnts of Sellers
      </span>
    </button>
  );
}

function UnStakeButton() {
  return (
    <button className="mt-8 flex flex-col items-center rounded-lg bg-indigo-800 p-8 hover:opacity-80">
      <span className="text-xl font-semibold">Un-Stake</span>
      <span>
        By Unnstaking you will lose access to verify documents and incentives
      </span>
    </button>
  );
}

function DocumentTile() {
  return (
    <div className="flex flex-row justify-around p-6">
      <span className="px-8">1</span>
      <span className=" px-8">0x20SA89SDSA8902xeyc9</span>
      <button className="px-8 hover:opacity-70">
        <span className="font-semibold text-white">View Documents</span>
      </button>
      <div className="px-32"></div>

      <button className="px-8 hover:opacity-75">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          className="bi bi-check2-circle"
          viewBox="0 0 16 16"
        >
          <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
          <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
        </svg>
      </button>

      <button className="px-4 hover:opacity-75">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-x-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
    </div>
  );
}
