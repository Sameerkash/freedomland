import Moralis from "moralis/dist/moralis.min.js";
const serverUrl = "https://6new31oxnhyo.usemoralis.com:2053/server";
const appId = "6T1zypaV0NTQ6h53jzRqLRi9AvFDZTXQTbe4rULi";

Moralis.start({ serverUrl, appId });

export { serverUrl, appId, Moralis };
