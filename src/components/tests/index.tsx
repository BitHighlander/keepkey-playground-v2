import React, { useState, useEffect } from "react";
import { CheckCircledIcon, ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { TestButton } from "./TestButton"; // Assuming your TestButton is here
import { runGetAccountsTest, runSignTransactionTest, runSignMessageTest } from "./ethereumTests"; // Import only the test functions

const EthereumTestSuite = () => {
    const [ethereumExists, setEthereumExists] = useState(false);
    const [metaMaskExists, setMetaMaskExists] = useState(false);
    const [keepKeyExists, setKeepKeyExists] = useState(false);

    useEffect(() => {
        if (typeof window.ethereum !== "undefined") {
            setEthereumExists(true);
            setMetaMaskExists(Boolean(window.ethereum.isMetaMask));
            setKeepKeyExists(Boolean(window.ethereum.isKeepKey));
        }
    }, []);

    return (
        <div className="space-y-4">
            <div className="flex items-center space-x-2">
                <span>Ethereum Detected:</span>
                {ethereumExists ? (
                    <CheckCircledIcon className="text-green-500" />
                ) : (
                    <ExclamationTriangleIcon className="text-red-500" />
                )}
            </div>
            <div className="flex items-center space-x-2">
                <span>MetaMask Detected:</span>
                {metaMaskExists ? (
                    <CheckCircledIcon className="text-green-500" />
                ) : (
                    <ExclamationTriangleIcon className="text-red-500" />
                )}
            </div>
            <div className="flex items-center space-x-2">
                <span>KeepKey Detected:</span>
                {keepKeyExists ? (
                    <CheckCircledIcon className="text-green-500" />
                ) : (
                    <ExclamationTriangleIcon className="text-red-500" />
                )}
            </div>

            <TestButton testName="Get Accounts" runTest={runGetAccountsTest} />
            <TestButton testName="Sign Transaction" runTest={runSignTransactionTest} />
            <TestButton testName="Sign Message" runTest={() => runSignMessageTest("Custom message here")} />
        </div>
    );
};

export { EthereumTestSuite };
