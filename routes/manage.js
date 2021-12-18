const express = require('express');
const router = express.Router();
const {erc721Factory} = require('../erc721/erc721Factory')
const {erc721} = require('../erc721/erc721')

router.post('/deploy', (req,res)=>{
    tkn_name = req.body.tkn_name;
    symbol = req.body.symbol;
    // NFT 생성. 생성 시 nft 고유코드값 생성 
    // nft 고유코드값과(pk) nftName, nft 해쉬값 db에 저장 ( nft bank에 저장 되나?? )
    //생성 성공/실패 메시지를 반환
    erc721Factory.deploy721Contract(res, tkn_name, symbol);
});

router.post('/mint', (req,res)=>{
    contractAddr = req.body.contractAddr
    addr = req.body.addr
    tokenId = req.body.tokenId
    img = req.body.img
    erc721.mint(res, contractAddr, addr, tokenId, img);
})

// router.post('/give', (req,res)=>{
//     nftCd, fromAddr, toAddr = req.body;
//     // 배당금 개념으로 nft를 특정 고객에게 줄 떄
//     // fromAddr -> toAddr 에게 주며, 성공/실패 메시지를 반환
// });
// //nftCd : nft 고유코드값
// router.post('/drop', (req,res)=>{
//     nftCd, addr = req.body;
//     // nft를 제거
//     // 성공/실패 메시지를 반환
// });


module.exports = router;