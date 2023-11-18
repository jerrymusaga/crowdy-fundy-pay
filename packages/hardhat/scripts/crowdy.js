const hre = require("hardhat");

const taxFee = 2n;

async function main() {
  const Crowdy = await hre.ethers.getContractFactory("Crowdy");
  const crowdy = await Crowdy.deploy(Number(taxFee));

  await crowdy.deployed();

  console.log("Crowdy deployed to:", crowdy.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
