//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {SimpleStorage} from "../contracts/SimpleStorage.sol";
import {DeployBase} from "./DeployBase.s.sol";

import {console} from "forge-std/Console.sol";

contract DeployScript is DeployBase {
    string constant DEFAULT_MNEMONIC = "test test test test test test test test test test test junk";
    uint256 constant DEFAULT_STORAGE_VALUE = 100 ether;

    function run() external {
        string memory mnemonic = vm.envString("MNEMONIC");

        if (bytes(mnemonic).length == 0) {
            mnemonic = DEFAULT_MNEMONIC;
        }

        uint256 deployerPrivateKey = vm.deriveKey(mnemonic, 0);
        address deployer = vm.rememberKey(deployerPrivateKey);

        vm.startBroadcast(deployer);

        SimpleStorage simpleStorage = new SimpleStorage(DEFAULT_STORAGE_VALUE);
        console.logString(string.concat("SimpleStorage deployed at: ", vm.toString(address(simpleStorage))));

        vm.stopBroadcast();

        _startExport();
        _addExport("SimpleStorage", address(simpleStorage));
        _stopExport();
    }
}
