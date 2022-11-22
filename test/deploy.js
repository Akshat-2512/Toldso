const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Lock", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployfunciton() {

    const [owner] = await ethers.getSigners();
    const Toldso = await ethers.getContractFactory('Toldso');
    const toldso = await Toldso.deploy();
    await toldso.deployed()
    return {  owner, Toldso};
  }

describe('Create and read posts', function(){

    it('Should create a post', async function () {
      





    })



})

