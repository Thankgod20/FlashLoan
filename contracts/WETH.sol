// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts v4.3.2 (token/ERC20/ERC20.sol)
pragma solidity  >=0.4.22 <0.9.0;


contract WETH {
    function deposit() external payable{}
    function totalSupply() public view returns (uint) {}
    function transfer(address to, uint value) external returns (bool){}
    function withdraw(uint) external{}
    function balanceOf(address account) public view virtual  returns (uint256) {}
}