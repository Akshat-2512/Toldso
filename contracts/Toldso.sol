// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Toldso {
    struct Post{
        string title;
        string body;
        uint256 timestamp;
    }
    mapping(address => Post[]) private _authorToPosts;

    function createPost(string memory title, string memory body) external{
        Post memory post = Post(title, body, block.timestamp);
        _authorToPosts[msg.sender].push(post);

    }

    function getpostbyauthor(address author) 
        external
        view
        returns (Post[] memory)
        {
            return _authorToPosts[author];
        }


}
