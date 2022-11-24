const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("toldso", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployFixture() {

    const [owner] = await ethers.getSigners();
    const Toldso = await ethers.getContractFactory('Toldso');
    const toldso = await Toldso.deploy();
    await toldso.deployed()
    return { owner , toldso} ;
  }

describe('Create and read posts', function(){

    it('Should create a post', async function () {
        const  { toldso } = await loadFixture(deployFixture)
        const title = 'Hello World'
        const body ='This is my first post'
        const [owner, alice, bob] = await ethers.getSigners()

        await toldso.connect(alice).createPost(title,body)
        const posts = await toldso.getpostbyauthor(alice.address)
        console.log(posts)
        expect(posts[0].body).to.equal(body)
        expect(posts[0].title).to.equal(title)






    })



  })
}
)

