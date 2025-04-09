import { CONTRACTS } from './config.js';

document.getElementById('addLiquidity').addEventListener('click', async () => {
  console.log("Adding liquidity to pool:", CONTRACTS.dex);
  // Implementation would use CONTRACTS.wcToken and CONTRACTS.sonicToken
});

document.getElementById('removeLiquidity').addEventListener('click', async () => {
  console.log("Removing liquidity from pool");
});
