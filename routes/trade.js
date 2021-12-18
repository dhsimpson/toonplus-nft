const express = require('express');
const router = express.Router();
const {erc721} = require('../erc721/erc721')

//nftCd nft 고유 코드
//buyerAddr 매수자 지갑주소
//buyPrice 매수가격
// router.post('/buy', (req,res) => {
//     nftCd, buyerAddr, buyPrice = req.body;
//     //응답으로는 매수 요청이 제대로 들어갔는 지 여부
// });
//sellerAddr 매도자 지갑주소
//sellerPrice 매도가격
// router.post('/sell', (req,res) => {
//     nftCd, sellerAddr, sellPrice = req.body;
//     //응답으로는 매도 요청이 제대로 들어갔는 지 여부
// });

router.post('/transfer', (req,res) => {
    const contractAddr = req.body.contractAddr;
    const fromAddr = req.body.fromAddr;
    const fromPk = req.body.fromPk;
    const toAddr = req.body.toAddr;
    const tokenId = req.body.tokenId;
    erc721.transferFrom(res, contractAddr, fromAddr, fromPk, toAddr, tokenId);
})


module.exports = router;