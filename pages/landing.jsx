import Image from "next/image";
import Link from "next/link";

function Landing() {
  return (
    <div className="h-full bg-gradient-to-bl from-purple-400 via-purple-800 to-black ">
      <div className="flex flex-row">
        <div className="flex h-20 w-1/4 justify-center self-end rounded-br-lg bg-black">
          <span className=" self-center text-center text-4xl text-white ">
            Freedomland
          </span>
          <div
            className="h-0 w-0  border-black border-t-transparent border-b-transparent "
            style={{ borderLeft: 30, borderTop: 30, borderBottom: 30 }}
          ></div>
        </div>
      </div>
      <div className="flex h-screen flex-col items-center pt-52">
        <div className="flex h-full flex-col items-center">
          <span className=" text-9xl text-white opacity-80">
            Democratizing Real estate
          </span>
          <button className="z-20 mt-20 rounded-xl  bg-black pb-2 pt-2 pr-5 pl-5 text-lg  font-semibold text-white active:bg-white">
            <Link href="/dashboard">Launch App</Link>
          </button>

          <span className="  pt-32 text-2xl text-white opacity-80">
            Buy, Sell and Rent only a portion of your real estate through NFTs,
          </span>
          <span className="text-2xl text-white opacity-80">
            freedomland increases accessibility for valuable real estate assets.
          </span>
        </div>

        <Image
          src="/city.png"
          alt="city"
          layout="fill"
          className="z-10 opacity-10"
        />
      </div>
    </div>
  );
}

export default Landing;
