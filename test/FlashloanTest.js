const BN = require("bn.js");
const Flashswap = artifacts.require("Flashswap");
const WETH = artifacts.require("WETH");


contract("Flashswap Test",(accounts)=> {
    let flashSwap = null;
    let weth = null;
    let contractAddr = null;
    before(async() => {
        flashSwap = await Flashswap.new("0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd","0xB7926C0430Afb07AA7DEfDE6DA862aE0Bde767bc");
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
    it ("Check if pair exist", async() => {
        let checkPair = await flashSwap.getTokenPair("0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7");
        console.log("Pair:-",checkPair);
    })

    it ("initiate Flashswap", async()=> {
        let initiateSwap = await flashSwap.initFlashloan("0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7",contractAddr,new BN(10));
        for (let x in initiateSwap.logs)
            console.log("FlashLoan Report:-",initiateSwap.logs[x].args.message,"Value:-",initiateSwap.logs[x].args.val.toString());
    } );

    


})