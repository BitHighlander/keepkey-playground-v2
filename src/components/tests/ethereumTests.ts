// ethereumTests.ts

// Test function for requesting accounts
export const runGetAccountsTest = async () => {
    if (!window.ethereum) return false;
    try {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        return accounts.length > 0 ? accounts : false;
    } catch (error) {
        return false;
    }
};

// Test function for signing transactions
export const runSignTransactionTest = async () => {
    if (!window.ethereum) return false;
    try {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        if (!accounts || accounts.length === 0) return false;

        const txParams = {
            chainId: "0x1", // Mainnet
            from: accounts[0],
            to: accounts[0],
            value: "0x00", // Zero value
            gasPrice: "0x09184e72a000", // Some gas price
            gas: "0x2710", // Some gas limit
            nonce: "0x00", // Nonce 0
        };

        const signedTx = await window.ethereum.request({
            method: "eth_signTransaction",
            params: [txParams],
        });

        return signedTx ? true : false;
    } catch (error: any) {
        console.error(error);
        return false;
    }
};

// Test function for signing messages
export const runSignMessageTest = async (message = "Hello, World!") => {
    if (!window.ethereum) return false;
    try {
        const signedMessage = await window.ethereum.request({
            method: "personal_sign",
            params: [message, window.ethereum.selectedAddress],
        });

        return signedMessage || false;
    } catch (error: any) {
        console.error(error);
        return false;
    }
};
