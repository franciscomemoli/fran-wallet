const bip39 = require('bip39');
const hdkey = require('hdkey')
const ethUtil = require('ethereumjs-util')
const ethTx = require('ethereumjs-tx')

const strength = 256;
const password = "";
const mnemonic = "";
let amountForWallets = 3;


const seed = bip39.mnemonicToSeed(mnemonic, password); //creates seed buffer


const root = hdkey.fromMasterSeed(seed);
//master key
const masterPrivateKey = root.privateKey.toString('hex');

const addrNode = root.derive("m/44'/60'/0'/0"); //line 1


//obtener public wallets de xpub
let xpub = "xpub6asdqasdasdasdadasdadasd";
var hdnode = hdkey.fromExtendedKey(xpub);
//	const childWallet = hdnode.deriveChild(0)
//	console.log("--.",childWallet.toJSON())
//const addr2 = ethUtil.publicToAddress(childWallet._publicKey, true).toString('hex');
//const address2 = ethUtil.toChecksumAddress(addr2);
//console.log(address2)
for (var i = 0; i < amountForWallets; i++) {
	const childWallet = hdnode.deriveChild(i)
	const addr2 = ethUtil.publicToAddress(childWallet._publicKey, true).toString('hex');
	const address2 = ethUtil.toChecksumAddress(addr2);
	console.log(address2)
}


