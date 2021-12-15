const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    nftCd = req.body;
    // nftCd로 해당 nft 해쉬값을 db 에서 조회해 nft 정보 반환
});

router.get('/all', (req,res) => {
    //모든 nft이름 nft고유코드값 반환
    //현재가격도 반환해야 하나??
});

router.get('/market-price', (req,res) => {
    nftCd = req.body;
    //조회 대상 nft의 시장가격 반환
});


module.exports = router;