const bip39 = require('bip39');
const hdkey = require('hdkey')
const ethUtil = require('ethereumjs-util')
const ethTx = require('ethereumjs-tx')

const strength = 256;
const password = "";
const mnemonic = bip39.generateMnemonic(strength); //generates string
//const mnemonic = "gym puppy thing dirt curtain pledge next kangaroo find food grab cave address century dial little hurt breeze such orient pause bounce wolf uncle";

const seed = bip39.mnemonicToSeed(mnemonic, password); //creates seed buffer
console.log(mnemonic)
console.log(seed)

const root = hdkey.fromMasterSeed(seed);
//master key
const masterPrivateKey = root.privateKey.toString('hex');

console.log(root._privateKey)
console.log(root._publicKey)
console.log(root.toJSON())

console.log("---------------------------------------------------------------------------------------------")
const addrNode = root.derive("m/44'/60'/0'/0"); //line 1
console.log("--.",addrNode.toJSON())

const pubKey = ethUtil.privateToPublic(addrNode._privateKey);
console.log("private", addrNode.privateKey)
const addr = ethUtil.publicToAddress(pubKey).toString('hex');
console.log("addr", addr)
const address = ethUtil.toChecksumAddress(addr);

console.log(address)
console.log("---------------------------------------------------------------------------------------------")


////obtener public wallets de xpub
//let xpub = "";
//var hdnode = hdkey.fromExtendedKey(xpub);
////	const childWallet = hdnode.deriveChild(0)
////	console.log("--.",childWallet.toJSON())
////const addr2 = ethUtil.publicToAddress(childWallet._publicKey, true).toString('hex');
////const address2 = ethUtil.toChecksumAddress(addr2);
////console.log(address2)
//for (var i = 10 - 1; i >= 0; i--) {
//	const childWallet = hdnode.deriveChild(i)
//	const addr2 = ethUtil.publicToAddress(childWallet._publicKey, true).toString('hex');
//	const address2 = ethUtil.toChecksumAddress(addr2);
//	console.log(address2)
//}
//
////obtener private keys wallets de xpub
//let xprv = "";
//var hdnodePrv = hdkey.fromExtendedKey(xprv);
////	const childWallet = hdnodePrv.deriveChild(0)
////	console.log("--.",childWallet.toJSON())
////const addr2 = ethUtil.publicToAddress(childWallet._publicKey, true).toString('hex');
////const address2 = ethUtil.toChecksumAddress(addr2);
////console.log(address2)
//for (var i = 10 - 1; i >= 0; i--) {
//	const childWallet = hdnodePrv.deriveChild(i)
//	console.log(childWallet._privateKey.toString('hex'))
//	//const addr2 = ethUtil.privateToPublic(childWallet._privateKey).toString('hex');
//	//const address2 = ethUtil.toChecksumAddress(addr2);
//	//console.log(address2)
//}

/*


const params = {
  nonce: 0,
  to: '',
  value: '0.1',
  gasPrice: 5000000000,
  gasLimit: 21000,
  chainId: 3
};


const tx = new ethTx(params);

//Signing the transaction with the correct private key
tx.sign(addrNode._privateKey);

const serializedTx = tx.serialize()
*/
