const express = require('express');
const router = express.Router();
const {erc721Factory} = require('../erc721/erc721Factory')
const {erc721} = require('../erc721/erc721')

router.get('/', (req,res) => {
    nftCd = req.body;
    // nftCd로 해당 nft 해쉬값을 db 에서 조회해 nft 정보 반환
});

router.get('/all', (req,res) => {
    //모든 nft이름 nft고유코드값 반환
    //현재가격도 반환해야 하나??
    erc721Factory.getAllAddress(res);
});

router.get('/img',(req,res)=>{
    const contractAddr = req.body.contractAddr
    const addr = req.body.addr
    const tokenId = req.body.tokenId
    // const {contractAddr, addr, tokenId} = req.body;
    erc721.getImg(res, contractAddr, addr, tokenId);
})

// router.get('/market-price', (req,res) => {
//     nftCd = req.body;
//     //조회 대상 nft의 시장가격 반환
// });


module.exports = router;