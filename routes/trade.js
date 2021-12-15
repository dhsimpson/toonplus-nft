const express = require('express');
const router = express.Router();

//nftCd nft 고유 코드
//buyerAddr 매수자 지갑주소
//buyPrice 매수가격
router.post('/buy', (req,res) => {
    nftCd, buyerAddr, buyPrice = req.body;
    //응답으로는 매수 요청이 제대로 들어갔는 지 여부
});
//sellerAddr 매도자 지갑주소
//sellerPrice 매도가격
router.post('/sell', (req,res) => {
    nftCd, sellerAddr, sellPrice = req.body;
    //응답으로는 매도 요청이 제대로 들어갔는 지 여부
});

module.exports = router;