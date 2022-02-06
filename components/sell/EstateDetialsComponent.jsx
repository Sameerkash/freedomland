import { useState, useRef } from "react";
import DropdownComponent from "./DropdownComponent";

function EstateDetialsComponent() {
  const hiddenDocumentFile = useRef(null);
  const hiddenImageFile = useRef(null);

  const [nftName, setNftName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(false);
  const [price, setPrice] = useState(1);
  const [isSell, setIsSell] = useState(1);

  function handlSubmit() {
    console.log("nftName: ", nftName);
    console.log("description: ", description);
    console.log("file: ", file);
    console.log("image: ", image);
    console.log("price: ", price);
    console.log("isSell: ", isSell);
  }

  function handleFileButtonClick() {
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
    // upload this file to IPFS
  }

  function handleImage(e) {
    e.preventDefault();
    if (!e.target.files[0]) return;

    const file = e.target.files[0];
    setImage(file);
    // upload this file to IPFS
  }

  return (
    <div className="mt-8 flex flex-col items-start justify-start rounded-lg bg-indigo-800 p-6 pb-10 ">
      <span className="p-8 text-xl font-semibold">
        Upload documnets for verification
      </span>

      <div className="mb-6 flex h-16 w-full  flex-row justify-between px-8">
        <span className="pr-6 text-xl">Provide a Display Name</span>
        <input
          type="text"
          value={nftName}
          onChange={(e) => {
            setNftName(e.target.value);
          }}
          className="h-16 flex-1 rounded-lg px-4 text-neutral-800 opacity-80"
        />
      </div>
      <div className="flex h-16 w-full flex-row  justify-between px-8">
        <span className="pr-6 text-xl">
          How would you describe this estate?
        </span>
        <input
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="h-16 flex-1 rounded-lg px-4 text-neutral-800 opacity-80"
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
          onClick={handleFileButtonClick}
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
          type="number"
          min="1"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          className="h-12 flex-1 rounded-lg px-4 text-neutral-800 opacity-80"
        />
      </div>

      <div className="w-100 h-30 flex flex-row justify-between px-8 py-10">
        <span className="pr-6 text-xl">
          Whould you like to list this for Sale or Rent ?
        </span>
        <DropdownComponent sell={isSell} setSell={setIsSell} />
        {/* <div className="relative">
          <div className="flex h-10 items-center rounded border border-gray-200 bg-white">
            <input
              defaultValue={saleType}
              name="select"
              id="select"
              className="w-full appearance-none px-4 text-gray-800 outline-none"
              defualtchecked="true"
            />

            <button className="cursor-pointer text-gray-300 outline-none transition-all hover:text-gray-600 focus:outline-none">
              <svg
                className="mx-2 h-4 w-4 fill-current"
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
              className="cursor-pointer border-l border-gray-200 text-gray-300 outline-none transition-all hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="mx-2 h-4 w-4 fill-current"
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
            className="peer hidden"
            defualtchecked="true"
          />
          <div className="absolute mt-1 hidden w-full flex-col overflow-hidden rounded border border-gray-200 bg-white shadow peer-checked:flex">
            <div className="group cursor-pointer">
              <span
                className="block border-l-4 border-transparent p-2 text-black group-hover:border-blue-600  group-hover:bg-gray-100"
                onChange={(e) => {
                  setSaleType("SELL");
                }}
              >
                SELL
              </span>
            </div>
            <div className="group cursor-pointer border-t">
              <span
                className="block border-l-4 border-transparent border-blue-600 p-2 text-black group-hover:border-blue-600 group-hover:bg-gray-100"
                onChange={(e) => {
                  setSaleType("RENT");
                }}
              >
                RENT
              </span>
            </div>
          </div>
        </div> */}
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

export default EstateDetialsComponent;
