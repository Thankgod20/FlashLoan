const Web3 = require('web3');
const Mycontract = require('../build/contracts/Flashswap.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = require("../secrets.json").mnemonic;

const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
)
var provider = new HDWalletProvider(mnemonic, `https://speedy-nodes-nyc.moralis.io/346380c8eca1a345a08fbdc8/eth/ropsten`);
const init = async () => {
    const web3 = new Web3 (provider); //('https://speedy-nodes-nyc.moralis.io/346380c8eca1a345a08fbdc8/eth/ropsten');
    const id = await web3.eth.net.getId();
    //console.log("NetworkId_"+id);
    const ContractAddr = '0x7c385f1b43656C04a0e3F93f9bF2C9e15D178b53';
    const contract = new web3.eth.Contract(
        Mycontract.abi,
        ContractAddr
    );

    const address = await web3.eth.getAccounts();
    console.log("Current Address:-",address);
    
    readline.question('Enter Token Borrow Address:-',(tokenAddr)=> {
            contract.methods
                        .getTokenPair(tokenAddr)
                        .call()
                        .then(result => {
                            console.log ("Token Pair Exisit:-",result);
                        } );

        readline.close(); 
    });
 
  
}
init();