const BN = require("bn.js");
const Flashswap = artifacts.require("Flashswap");
const WETH = artifacts.require("WETH");


contract("Flashswap Test",(accounts)=> {
    let flashSwap = null;
    let weth = null;
    let contractAddr = null;
    before(async() => {
        flashSwap = await Flashswap.new("0xB7926C0430Afb07AA7DEfDE6DA862aE0Bde767bc","0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd");
        weth = await WETH.at("0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd");
        contractAddr = flashSwap.address;
        console.log("Contract Address:-",contractAddr);
    });
    it ("Deposit WBNB", async() =>{
        let deposit = await weth.deposit({from:accounts[0],value:new BN(2)});
        let trans = await weth.transfer(contractAddr,new BN(1));
        let balance = await weth.balanceOf(contractAddr);
        console.log("Balance of FlashLoan:-",balance.toString())
    })
    
    it("initiate FlashLoan", async() =>{
       let flashswap = flashSwap.initFlashloan()
     });

})