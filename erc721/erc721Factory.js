const Web3 = require("web3")
const erc721_FACT_ABI = require("./erc721FactoryABI.json")
const erc721Factory = "0x21A95a8c171626A9D5600eB396aeDeA2877295a3";
const {utils} = require("./utils")

const network = "9aa3d95b3bc440fa88ea12eaa4456161" // 형꺼 kovan
const web3 = new Web3(Web3.givenPewrovider || 'https://kovan.infura.io/v3/' + network);

const ERC721_FACT_CONTRACT = new web3.eth.Contract(erc721_FACT_ABI,erc721Factory);

const adminAddr = '0x49375E0c627269368328c1213d3DB5F75ab9f26A';
const adminPk = '0x389b982f3637d158ee3d7a2b7e31953d579ca6da506c5e4106171bf9080fe10c';

// 0. create a erc721 contract
const deploy721Contract = async(res, name, symbol) => {
    utils.addWallet(web3, adminAddr, adminPk);
    try{
        await ERC721_FACT_CONTRACT.methods.deploy721Contract(name, symbol).send({from:adminAddr, gasLimit : 3000000}).then(result => {
            console.log(result)    
            res.send({status : 200, data: result});
        });
    }catch(e){
        console.error(e)
        res.send({status:403})
    }finally{
        utils.removeWallet(web3, adminAddr);
    }
}

// 1. get all contracAddr
const getAllAddress = async(res) => {
    try{
        await ERC721_FACT_CONTRACT.methods.getAllAddress().call().then(result => {
            res.send({status : 200, data :result});
        });
    }catch(e){
        res.send({status : 403, data : e});
    }
}

exports.erc721Factory = {
    deploy721Contract, getAllAddress
}