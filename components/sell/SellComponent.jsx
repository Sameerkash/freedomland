import { useContext } from "react";
import MoralisContext from "../../context/MoralisContext";
import DocumentTileComponent from "./DocumentTileComponent";
import EstateDetialsComponent from "./EstateDetialsComponent";

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

      <EstateDetialsComponent />

      <span className="pb-10 pt-16 text-3xl font-semibold text-white">
        Pending Verifications
      </span>
      <div className="flex w-full flex-col items-start rounded-lg bg-indigo-800 p-4 px-36">
        <DocumentTileComponent />
      </div>
    </div>
  );
}

export default SellComponent;

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
