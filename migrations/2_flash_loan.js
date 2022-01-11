const Flashswap = artifacts.require("Flashswap");

module.exports = function (deployer) {
  deployer.deploy(Flashswap,"0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd","0xB7926C0430Afb07AA7DEfDE6DA862aE0Bde767bc");
};
