// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.7;

contract HelloWorld {
    uint256 counter = 5;
    function increment() public {  
        counter++;
    }
    function decrement() public { 
        counter--;
    }
}