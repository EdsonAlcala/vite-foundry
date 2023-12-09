//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Script.sol";

contract DeployBase is Script {
    struct Deployment {
        string name;
        address addr;
    }

    Deployment[] internal deployments;

    string internal root;
    string internal path;
    string internal chainIdStr;

    function _startExport() internal {
        root = vm.projectRoot();
        path = string.concat(root, "/deployments/");
        chainIdStr = vm.toString(block.chainid);
        path = string.concat(path, "deploymentAddresses.json");
    }

    function _addExport(string memory name, address addr) internal {
        deployments.push(Deployment(name, addr));
    }

    function _stopExport() internal {
        string memory finalJson;

        uint256 len = deployments.length;

        for (uint256 i = 0; i < len; i++) {
            string memory output = vm.serializeString(chainIdStr, chainIdStr, vm.toString(deployments[i].addr));

            finalJson = vm.serializeString(deployments[i].name, deployments[i].name, output);
        }

        vm.writeJson(finalJson, path);
    }
}
