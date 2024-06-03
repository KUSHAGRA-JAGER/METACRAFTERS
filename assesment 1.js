// create a variable to hold your NFT's
let nftCollection = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, eyeColor, shirtType, bling) {
  let nft = {
    name: name,
    eyeColor: eyeColor,
    shirtType: shirtType,
    bling: bling
  };
  nftCollection.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < nftCollection.length; i++) {
    console.log("Name: " + nftCollection[i].name);
    console.log("Eye Color: " + nftCollection[i].eyeColor);
    console.log("Shirt Type: " + nftCollection[i].shirtType);
    console.log("Bling: " + nftCollection[i].bling);
    console.log("------------------------");
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("Total NFTs: " + nftCollection.length);
}

// call your functions below this line
mintNFT("John", "Blue", "T-Shirt", "Gold");
mintNFT("Jane", "Brown", "Hoodie", "Silver");
mintNFT("Bob", "Green", "Jacket", "Platinum");

listNFTs();
getTotalSupply();