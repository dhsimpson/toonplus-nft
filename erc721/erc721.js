const Web3 = require("web3")
const erc721ABI = require("./erc721ABI.json")
const {utils} = require("./utils")

const network = "9aa3d95b3bc440fa88ea12eaa4456161" // 형꺼 kovan
const web3 = new Web3(Web3.givenPewrovider || 'https://kovan.infura.io/v3/' + network);

const adminAddr = '0x49375E0c627269368328c1213d3DB5F75ab9f26A';
const adminPk = '0x389b982f3637d158ee3d7a2b7e31953d579ca6da506c5e4106171bf9080fe10c';

// methods

// 0. mint
const mint = async(res, contractAddr, addr, tokenId, img) => {
    // utils.addWallet(web3, addr, "0x22aa7c8ef0078aea21e16b0d568ddd938738a2ef49c19d125f30be46ff0967cd");
    utils.addWallet(web3, adminAddr, adminPk);
    const ERC721CONTRACT = new web3.eth.Contract(erc721ABI,contractAddr);
    try{
        await ERC721CONTRACT.methods.mint(addr, tokenId, img).send({from:adminAddr, gasLimit : 300000}).then(result => {
            console.log(result)
            res.send({status : 200, data : result});
        });
    }catch(e){
        console.log(e)
        res.send({status : 403, data : e});
    }finally{
        // utils.removeWallet(web3, addr);
        utils.removeWallet(web3, adminAddr);
    }
}

// 1. transfer from
const transferFrom = async(res, contractAddr, fromAddr, fromPk, toAddr, tokenId) => {
    // addWallet(fromAddr, fromPk);
    utils.addWallet(web3, fromAddr, fromPk);
    const ERC721CONTRACT = new web3.eth.Contract(erc721ABI,contractAddr);
    try{
        await ERC721CONTRACT.methods.transferFrom(fromAddr, toAddr, tokenId).send({from: fromAddr, gasLimit : 300000}).then(result => {
            res.send({status : 200, data : result});
        });
    }catch(e){
        res.send({status : 403, data : e});
    }finally{
            // removeWallet(fromAddr);
        utils.removeWallet(web3, adminAddr);
    }
}

// 2. get img
const getImg = async(res, contractAddr, addr, tokenId) => {
    const ERC721CONTRACT = new web3.eth.Contract(erc721ABI,contractAddr);
    try{
        await ERC721CONTRACT.methods.getImg(tokenId).call({from:addr}).then(result => {
            console.log(result)
            res.send({status : 200, data : result});
        })
    }catch(e) {
        console.log(e)
        res.send({status:403, data : e});
    }
}

exports.erc721 = {
    mint, transferFrom, getImg
}