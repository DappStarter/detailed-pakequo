require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close blue spot shock rare remind around hidden clog front term'; 
let testAccounts = [
"0x900bb0918209155abaa87c777c87218278a217b0197466e7dce0e869318507ef",
"0xd66631c92871b91a10be7640ab2808c71c318b7d16da16ab8b3bba69bca2ba3a",
"0x4ab301c084792ef93dd695ff971d864d6b579fa3fe264bd5f52aaa940c0511ab",
"0xefb7bc7b3ba5265a260a3954fab3e301e2385b4e4964fceb178dbaecdcbde086",
"0x99608629c7fffa04e8c7981315cd152d5ed0c6955f01c3ee9281d799a2361eee",
"0x3098d5c2cd9502e6ceb185738b03850445d888ea901fa169b9a1b26ec52c20c0",
"0xbd65745995351522e80f03cfa165d7fa1f1f0f976d69c0534ede0ce8687721d4",
"0x4864cc57aa9a69f5b4082878348529d6de7a1f81050828625c9e63ad1e898be9",
"0x3d99daf2e28e6415f4ab6989e38e62ad452a1c2a47da58078aac972ab06e99bb",
"0xe3a51227c801b7753b30daf6560f187b855337daaedf75ffc379b2852e8f124d"
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
            version: '^0.5.11'
        }
    }
};
