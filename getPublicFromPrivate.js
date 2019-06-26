var Wallet = require('ethereumjs-wallet');
var EthUtil = require('ethereumjs-util');




function getPublicFromPrivate(private){
	// Get a wallet instance from a private key
	const privateKeyBuffer = EthUtil.toBuffer(private);
	const wallet = Wallet.fromPrivateKey(privateKeyBuffer);

	// Get a public key
	const publicKey = wallet.getPublicKeyString();                                                                                                                                                                                                                                                               

	const addr2 = EthUtil.publicToAddress(publicKey, true).toString('hex');
	const address2 = EthUtil.toChecksumAddress(addr2);
	console.log("public",address2, private);
}


var claves = [
"0xasdasdasd"]


claves.forEach(wallet => {
	getPublicFromPrivate(wallet)
})