// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "forge-std/Test.sol";

import {SimpleStorage} from "@contracts/SimpleStorage.sol";

contract SimpleStorageTest is Test {
    SimpleStorage simpleStorage;
    uint256 constant DEFAULT_STORAGE_VALUE = 1000 ether;

    function setUp() public {
        simpleStorage = new SimpleStorage(DEFAULT_STORAGE_VALUE);
    }

    function test_setData() public {
        uint256 newValue = 42;

        simpleStorage.setData(newValue);

        assertEq(simpleStorage.storedData(), newValue);
    }
}
