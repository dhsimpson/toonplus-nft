const express = require('express');
const router = express.Router();

router.post('/publish', (req,res)=>{
    nftData, nftName, autherAddr = req.body;
    // NFT 생성. 생성 시 nft 고유코드값 생성 
    // nft 고유코드값과(pk) nftName, nft 해쉬값 db에 저장 ( nft bank에 저장 되나?? )
    //생성 성공/실패 메시지를 반환
});

router.post('/give', (req,res)=>{
    nftCd, fromAddr, toAddr = req.body;
    // 배당금 개념으로 nft를 특정 고객에게 줄 떄
    // fromAddr -> toAddr 에게 주며, 성공/실패 메시지를 반환
});
//nftCd : nft 고유코드값
router.post('/drop', (req,res)=>{
    nftCd, addr = req.body;
    // nft를 제거
    // 성공/실패 메시지를 반환
});


module.exports = router;