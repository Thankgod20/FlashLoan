const Web3 = require('web3');
const Mycontract = require('../build/contracts/Flashswap.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = require("../secrets.json").mnemonic;
const prompt = require('prompt');
var tokenAddr;
var to;
var amount;
prompt.start();

var provider = new HDWalletProvider(mnemonic, `https://speedy-nodes-nyc.moralis.io/346380c8eca1a345a08fbdc8/eth/ropsten`);

const init = async () => {
    const web3 = new Web3 (provider); //('https://speedy-nodes-nyc.moralis.io/346380c8eca1a345a08fbdc8/eth/ropsten');
    const id = await web3.eth.net.getId();
    //console.log("NetworkId_"+id);
    const ContractAddr = '0x19E6371a316fC610735d4AB81eD6DE4A2eAa33c9';
    const contract = new web3.eth.Contract(
        Mycontract.abi,
        ContractAddr
    );

    const address = await web3.eth.getAccounts();
    console.log("Current Address:-",address[0]);
    const addressBalance = await web3.eth.getBalance(address[0]);
    console.log("Current Account Balance:-",addressBalance);
    
    prompt.get(['tokenAddress','to','amount'], (err,result) => {
        if (err) {
            return onErr(err);
        }
        tokenAddr = result.tokenAddress;
        to = result.to;
        amount = result.amount;

        try {
            contract.methods
                .initFlashloan(tokenAddr, to, amount)
                .send({from:address[0],gas:300000,gasPrice:null});
        } catch (err_) {
            return onErr(err_);
        }
        
             
    });


 
  
}

const onErr = (err) => {
    console.log(err);
    return 
}

init();