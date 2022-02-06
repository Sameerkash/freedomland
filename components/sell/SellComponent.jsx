import { useState, useRef, useContext } from "react";
import MoralisContext from "../../context/MoralisContext";

function SellComponent() {
  var Moralis = useContext(MoralisContext);

  const promises = [];
  const submitForm = async (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const docsArray = Array.from(event.target["doc-1"].files);
    const picArray = Array.from(event.target["pic-1"].files);
    console.log("isRented : ", data.get("isRent"));
    console.log("value : ", data.get("value"));
    if (docsArray?.length == 0 || picArray?.length == 0) {
      console.log("a file and a picture are required");
      alert("a file and a picture are required");
      return;
    }
    const fileDataArray = [];
    const uploadData = docsArray.concat(picArray);
    // console.log(docsArray);
    uploadData.map(async (iFile) => {
      promises.push(
        new Promise(async (resolve, reject) => {
          let MoralisFile = new Moralis.File(iFile.name, iFile);
          await MoralisFile.saveIPFS();
          // console.log(MoralisFile);
          // console.log("link: ", MoralisFile.ipfs());
          // console.log("hash: ", MoralisFile.hash());
          fileDataArray.push({
            hash: MoralisFile.hash(),
            link: MoralisFile.ipfs(),
          });
          resolve();
        })
      );
    });
    await Promise.all(promises);
    // console.log(fileDataArray);
    // console.log("isRented : ", data.get("isRent"));
    // console.log("value : ", data.get("value"));
    const formData = {
      isRent: data.get("isRent"),
      value: data.get("value"),
      files: fileDataArray,
    };
    console.log(formData);
  };

  return (
    <div className="m-4 flex flex-col items-stretch pb-10">
      <span className="m-2 pb-10 pt-10 text-4xl font-semibold text-white">
        Sell
      </span>

      <div className=" flex  flex-row items-start justify-center rounded-lg bg-indigo-800 p-10 pb-10">
        <div className="flex flex-1 flex-col justify-evenly pr-14 pl-14 ">
          <span className=" pb-4 text-2xl font-semibold text-white">
            Create a sale
          </span>
          <span className="text-l text-justify text-white">
            Create a Estate sale by uploading documents and pictures of the
            property, Interested buyers can own a fractional part of the
            property, this increases accessiblity for everyone own valuable real
            estate assets.
          </span>

          <span className="text-l pt-4 text-justify text-white">
            You can mint the property as an NFT and list it on the market place
            once the documents are securely verified by Verifierers.
          </span>
        </div>
      </div>

      <EstateDetials />

      <span className="pb-10 pt-16 text-3xl font-semibold text-white">
        Pending Verifications
      </span>
      <div className="flex w-full flex-col items-start rounded-lg bg-indigo-800 p-4 px-36">
        <DocumentTile />
      </div>
    </div>
  );
}

export default SellComponent;

function EstateDetials() {
  const hiddenDocumentFile = useRef(null);
  const hiddenImageFile = useRef(null);

  const [saleType, setSaleType] = useState("SELL");

  const [file, setFile] = useState(null);

  const [image, setImage] = useState(false);

  function handleButtonClick() {
    hiddenDocumentFile.current.click();
  }

  function handleImageButtonClick() {
    hiddenImageFile.current.click();
  }

  function handleFile(e) {
    e.preventDefault();
    if (!e.target.files[0]) return;

    const file = e.target.files[0];
    setFile(file);
  }

  function handleImage(e) {
    e.preventDefault();
    if (!e.target.files[0]) return;

    const file = e.target.files[0];
    setImage(file);
  }

  function handlSubmit() {}

  return (
    <div className="mt-8 flex flex-col items-start justify-start rounded-lg bg-indigo-800 p-6 pb-10 ">
      <span className="p-8 text-xl font-semibold">
        Upload documnets for verification
      </span>

      <div className="mb-6 flex h-16 w-full  flex-row justify-between px-8">
        <span className="pr-6 text-xl">Provide a Display Name</span>
        <input
          type="text"
          onChange={() => {}}
          className="h-16 flex-1   rounded-lg opacity-80"
        />
      </div>
      <div className="flex h-16 w-full flex-row  justify-between px-8">
        <span className="pr-6 text-xl">
          How would you describe this estate?
        </span>
        <input
          type="text"
          onChange={() => {}}
          className="h-16 flex-1   rounded-lg opacity-80"
        />
      </div>

      <div className="w-100 h-30 flex flex-row justify-between px-8 py-10">
        <span className="pr-6 text-xl">
          Upload a PDF documnet with all the necessary ownership information
        </span>

        <input
          style={{ display: "none" }}
          onChange={handleFile}
          ref={hiddenDocumentFile}
          type="file"
          alt="uploadImage"
        />

        <button
          onClick={handleButtonClick}
          className="rounded-lg bg-indigo-500 p-4 px-16 hover:opacity-70"
        >
          <span className="text-center">Upload Files to IPFS</span>
        </button>
      </div>

      <div className="w-100 h-30 flex flex-row justify-between px-8 py-10">
        <span className="pr-6 text-xl">
          Upload A Cover picture to be displayed in the marketplace
        </span>

        <input
          style={{ display: "none" }}
          onChange={handleImage}
          ref={hiddenImageFile}
          type="file"
          alt="uploadImage"
        />

        <button
          onClick={handleImageButtonClick}
          className="rounded-lg bg-indigo-500 p-4 px-16 hover:opacity-70"
        >
          <span className="text-center">Upload a Cover picture</span>
        </button>
      </div>
      <div className="w-100 flex h-20 flex-row justify-between px-8 py-10">
        <span className="pr-6 text-xl">Emter a price</span>
        <input
          type="text"
          onChange={() => {}}
          className="h-12 flex-1  rounded-lg opacity-80"
        />
      </div>

      <div className="w-100 h-30 flex flex-row justify-between px-8 py-10">
        <span className="pr-6 text-xl">
          Whould you like to list this for Sale or Rent ?
        </span>
        <div className="relative">
          <div className="flex h-10 items-center rounded border border-gray-200 bg-white">
            <input
              defaultValue={saleType}
              name="select"
              id="select"
              className="w-full appearance-none px-4 text-gray-800 outline-none"
              defualtchecked="true"
            />

            <button class="cursor-pointer text-gray-300 outline-none transition-all hover:text-gray-600 focus:outline-none">
              <svg
                class="mx-2 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <label
              htmlFor="show_more"
              class="cursor-pointer border-l border-gray-200 text-gray-300 outline-none transition-all hover:text-gray-600 focus:outline-none"
            >
              <svg
                class="mx-2 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </label>
          </div>

          <input
            type="checkbox"
            name="show_more"
            id="show_more"
            class="peer hidden"
            defualtchecked="true"
          />
          <div class="absolute mt-1 hidden w-full flex-col overflow-hidden rounded border border-gray-200 bg-white shadow peer-checked:flex">
            <div class="group cursor-pointer">
              <span
                class="block border-l-4 border-transparent p-2 text-black group-hover:border-blue-600  group-hover:bg-gray-100"
                onChange={(e) => {
                  setSaleType("SELL");
                }}
              >
                SELL
              </span>
            </div>
            <div class="group cursor-pointer border-t">
              <span
                class="block border-l-4 border-transparent border-blue-600 p-2 text-black group-hover:border-blue-600 group-hover:bg-gray-100"
                onChange={(e) => {
                  setSaleType("RENT");
                }}
              >
                RENT
              </span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handlSubmit}
        className="self-center rounded-lg bg-indigo-500 p-4 px-16 hover:opacity-70"
      >
        <span className="text-center">Submit for Verification</span>
      </button>
    </div>
  );
}

function DocumentTile() {
  return (
    <div className="flex flex-row justify-around p-6">
      <span className="px-8">1</span>
      <span className=" px-8">Price 4000 LND</span>
      <button className="px-8 hover:opacity-70">
        <span className="font-semibold text-white">View Documents</span>
      </button>
      <div className="px-16"></div>

      {/* <div className="flex flex-row px-8">
        <button className="pr-4 hover:opacity-75">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-check2-circle"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
          </svg>
        </button>
        <span>Mint</span>
      </div> */}

      <div className="flex flex-row px-4">
        <button className="pr-4 hover:opacity-75">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-x-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
        <span>Pending</span>
      </div>
    </div>
  );
}

// <div className="container m-2 border-4 border-blue-100 p-2">
// <div className="heading">
//   <h2 className="text-center text-2xl text-violet-500 underline">
//     Mint NFT By Verifying A Asset In Realworld
//   </h2>
// </div>
// <div className="form m-4 flex justify-center">
//   <form className="m-20 flex flex-col border p-5" onSubmit={submitForm}>
//     <label htmlFor="doc-1" className="flex p-2">
//       Select Documents :
//       <input type="file" name="doc-1" id="doc-1" multiple />
//     </label>
//     <label htmlFor="pic-1" className="flex p-2">
//       Select Picture: &nbsp;
//       <input type="file" name="pic-1" id="pic-1" />
//     </label>

//     <label htmlFor="sell" className="p-2">
//       sell : &nbsp;
//       <input
//         type="radio"
//         name="isRent"
//         id="sell"
//         defaultChecked
//         value="0"
//       />
//     </label>

//     <label htmlFor="rent" className="p-2">
//       Rent : &nbsp;
//       <input type="radio" name="isRent" id="rent" value="1" />
//     </label>
//     <label htmlFor="doc-1" className="p-2">
//       Price : &nbsp;
//       <input
//         type="number"
//         name="value"
//         defaultValue="0.001"
//         step="0.000001"
//         id="price"
//         placeholder="0.001"
//         className="rounded-md border border-pink-500 bg-transparent p-1 text-indigo-200"
//       />
//     </label>

//     <input
//       type="submit"
//       value="Submit"
//       className="rounded-xl border-2 border-lime-600 p-4  hover:border-fuchsia-600"
//       // onClick={(e)=>{e.target.parentNode.}}
//     />
//   </form>
// </div>
// </div>
