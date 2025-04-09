import { CONTRACTS } from './config.js';

let walletConnected = false;

// Connect Wallet
document.getElementById('connectWallet').addEventListener('click', async () => {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      walletConnected = true;
      console.log("Wallet connected!");
    } catch (error) {
      console.error("Error connecting:", error);
    }
  }
});

// Swap Tokens
document.getElementById('swapButton').addEventListener('click', async () => {
  if (!walletConnected) return alert("Connect wallet first!");
  
  const fromAmount = document.getElementById('fromAmount').value;
  const fromToken = document.getElementById('fromToken').value;
  
  console.log(`Swapping ${fromAmount} ${fromToken}...`);
  // Actual swap logic would interact with CONTRACTS.dex
});
