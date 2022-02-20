// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.7;

contract FistContract {
    string public message;

    function Inbox(string memory initialMessage) public {
      message = initialMessage;
    }

    function setMessage(string memory newMessage) public {
      message = newMessage;
    }
}

