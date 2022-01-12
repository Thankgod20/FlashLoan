const Flashswap = artifacts.require("Flashswap");

module.exports = function (deployer) {
  deployer.deploy(Flashswap,"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c","0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73");//,"0x10ED43C718714eb63d5aA57B78B54704E256024E","0xe9e7cea3dedca5984780bafc599bd69add087d56");
};
