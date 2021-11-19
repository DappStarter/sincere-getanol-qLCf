require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note outside purse gesture inflict swallow genuine'; 
let testAccounts = [
"0xadbecef9dc2de495e7e7e01ed5f7dd231d32c90701dc1947a1d7a0112fd3c35d",
"0x406ee8ae313ebd187d2008492b682b97bfff4bdbb3da8711e3693246f37b144d",
"0x007291aa1c727a8948a080594e9b0d482b6acb427bde9e5bb743025aa64e9906",
"0xa38d4ea442e4f5529bb0dadb457428eadba92391d40e26426fe5286fbc2f5bbd",
"0xbdcd75dab7edfac1e2ba5fdea3baac623f804fbbdd8b61bd611fd161cd96945a",
"0x165e947cda7d751897dd0c2e768cbbe332fb35d908c20c3438c11622940eb4fb",
"0x25f18a5a06a70ccfb155a307ffbf17d9f698de343880523f48b7ef3d6e599b15",
"0x2d94d0460a12046ce3ac452a7ede37facc5f4c9c5b9ed4fa07d20572dde0dfe8",
"0xe1442e4d5f4a619d23173a32e006395bbce93eea05baf8f4cbcdb0eabbc5d138",
"0x01098330eb5170739810853165d352c87828c79d28a2f0c58af519458108062a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

