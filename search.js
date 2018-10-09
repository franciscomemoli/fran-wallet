
const hdkey = require('hdkey')
const ethUtil = require('ethereumjs-util')

let xpubs = ["", ""];
xpubs.forEach(element => {
  generateWalletsWithXpub(element)
  
})


function generateWalletsWithXpub(xpub){
	let addressToSearch = "";

	
  console.log(xpub)
  var hdnode = hdkey.fromExtendedKey(xpub);
  let wallets = {};
  let amount = 6000;
  for (var i = amount - 1; i >= 0; i--) {
    const childWallet = hdnode.deriveChild(i)
    const addr = ethUtil.publicToAddress(childWallet._publicKey, true).toString('hex');
    const address = ethUtil.toChecksumAddress(addr);
    wallets[address] = address;
    if(address == addressToSearch){
      console.log(i)
    }
  }
}