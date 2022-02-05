import Link from "next/link";

function Nav() {
  const style_class = {
    common_icons: "text-[#dbe7ff] hover:text-red-600",
    icon_size: {
      width: 40,
      height: 40,
    },
  };
  return (
    <div
      className="m-2 flex flex-col bg-[#1a162c] p-2 pt-6"
      style={{ width: "30vw" }}
    >
      <div className="profile-card flex min-h-[40vh] flex-col items-center border border-orange-700 p-3">
        <div className="profile p2 border-amber-500">
          <svg
            viewBox="0 0 16 16"
            className="bi bi-person-circle w-32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            // style={{ width: "12rem", height: "12rem" }}
          >
            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"></path>
            <path
              fillRule="evenodd"
              d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            ></path>
            <path
              fillRule="evenodd"
              d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
            ></path>
          </svg>
        </div>
        <div className="balance p-5">
          <h2>your ESTATE-X : 419</h2>
        </div>
      </div>
      <ul className="flex min-h-[40vh] flex-col justify-around ">
        <li>
          <Link href={"/"}>
            <div
              className={`flex flex-row justify-around ${style_class.common_icons}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={style_class.icon_size.width}
                height={style_class.icon_size.height}
                fill="currentColor"
                className=""
                viewBox="0 0 16 16"
              >
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
              </svg>
              <p>Home</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href={"/market"}>
            <div
              className={`flex flex-row justify-around ${style_class.common_icons}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=""
                width={style_class.icon_size.width}
                height={style_class.icon_size.height}
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="6" cy="19" r="2" />
                <circle cx="17" cy="19" r="2" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
              </svg>
              <p>Market</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href={"/verify"}>
            <div
              className={`flex flex-row justify-around ${style_class.common_icons}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={style_class.icon_size.width}
                height={style_class.icon_size.height}
                fill="currentColor"
                className=""
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
                <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
              </svg>
              <p>Verify</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
