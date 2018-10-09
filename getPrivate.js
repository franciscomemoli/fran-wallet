const bip39 = require('bip39');
const hdkey = require('hdkey')
const ethUtil = require('ethereumjs-util')
const ethTx = require('ethereumjs-tx')

const strength = 256;
const password = "";
const mnemonic = "";
let index = 2191;


const seed = bip39.mnemonicToSeed(mnemonic, password); //creates seed buffer


const root = hdkey.fromMasterSeed(seed);
//master key
const masterPrivateKey = root.privateKey.toString('hex');

const addrNode = root.derive("m/44'/60'/0'/0"); //line 1


//obtener private keys wallets de xpub
let xprv = addrNode.toJSON().xpriv;// "";
var hdnodePrv = hdkey.fromExtendedKey(xprv);
//	const childWallet = hdnodePrv.deriveChild(0)
//	console.log("--.",childWallet.toJSON())
//const addr2 = ethUtil.publicToAddress(childWallet._publicKey, true).toString('hex');
//const address2 = ethUtil.toChecksumAddress(addr2);
//console.log(address2)

const childWallet = hdnodePrv.deriveChild(index)
console.log(childWallet._privateKey.toString('hex'))
//for (var i = 10 - 1; i >= 0; i--) {
	//const addr2 = ethUtil.privateToPublic(childWallet._privateKey).toString('hex');
	//const address2 = ethUtil.toChecksumAddress(addr2);
	//console.log(address2)
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
