import { useState, useRef, useContext } from "react";
import DropdownComponent from "./DropdownComponent";
import MoralisContext from "../../context/MoralisContext";
import { useApiContract } from "react-moralis";
import KYC from "../../abi/KYC.json";
import { KYC_CONTRACT_ADDRESS } from "../../services/contract";

function EstateDetialsComponent() {
  let Moralis = useContext(MoralisContext);

  const hiddenDocumentFile = useRef(null);
  const hiddenImageFile = useRef(null);

  const [nftName, setNftName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(false);
  const [price, setPrice] = useState(1);
  const [isSell, setIsSell] = useState(1);
  const [jsonToIpfs, setJsonToIpfs] = useState({});
  const [fullData, setFullData] = useState();

  var { data, runContractFunction, isFetching, isLoading } = useApiContract({
    address: KYC_CONTRACT_ADDRESS,
    functionName: "createDoc",
    abi: KYC,
    chain: "mumbai",
  });

  function handlSubmit() {
    // console.log("nftName: ", nftName);
    // console.log("description: ", description);
    // console.log("file: ", file);
    // console.log("image: ", image);
    // console.log("price: ", price);
    // console.log("isSell: ", isSell);

    setJsonToIpfs({
      ...jsonToIpfs,
      nftName: nftName,
      description: description,
      price: price,
    });

    setFullData({
      documentURI: jsonToIpfs,
      imageURI: image,
      isSell: isSell == 1 ? true : false,
      price: price,
      latLong: "10 41 N, 77 00 E",
    });

    runContractFunction();

    console.log("fullData: ", fullData);
  }

  function handleFileButtonClick() {
    hiddenDocumentFile.current.click();
  }

  function handleImageButtonClick() {
    hiddenImageFile.current.click();
  }

  const handleFile = async (e) => {
    e.preventDefault();
    if (!e.target.files[0]) return;

    const file = e.target.files[0];
    setFile(file);
    let uploadFile = new Moralis.File(file.name, file);
    console.log("uploading file...");
    await uploadFile.saveIPFS();
    setJsonToIpfs({
      ...jsonToIpfs,
      file: {
        hash: uploadFile.hash(),
        link: uploadFile.ipfs(),
        fileName: file.name,
      },
    });
  };

  const handleImage = async (e) => {
    e.preventDefault();
    if (!e.target.files[0]) return;

    const file = e.target.files[0];
    setImage(file);
    let uploadFile = new Moralis.File(file.name, file);
    console.log("uploading file...");
    await uploadFile.saveIPFS();
    setImage(uploadFile.ipfs());
  };

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
          alt="uploadFile"
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
