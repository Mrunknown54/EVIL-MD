function _0x2c8d(_0x2cd5cd,_0xf716cd){const _0x282047=_0x2820();return _0x2c8d=function(_0x2c8d4d,_0x25acfd){_0x2c8d4d=_0x2c8d4d-0xb6;let _0xc8ab36=_0x282047[_0x2c8d4d];return _0xc8ab36;},_0x2c8d(_0x2cd5cd,_0xf716cd);}const _0x44ba30=_0x2c8d;(function(_0x3e79d5,_0x2569ed){const _0x2f2be6=_0x2c8d,_0x331764=_0x3e79d5();while(!![]){try{const _0x57af67=-parseInt(_0x2f2be6(0xbb))/0x1*(-parseInt(_0x2f2be6(0xed))/0x2)+parseInt(_0x2f2be6(0x16a))/0x3*(parseInt(_0x2f2be6(0xc8))/0x4)+parseInt(_0x2f2be6(0xe5))/0x5*(-parseInt(_0x2f2be6(0xf1))/0x6)+parseInt(_0x2f2be6(0x15c))/0x7+-parseInt(_0x2f2be6(0xf9))/0x8*(-parseInt(_0x2f2be6(0x17e))/0x9)+parseInt(_0x2f2be6(0x17c))/0xa*(parseInt(_0x2f2be6(0x13c))/0xb)+-parseInt(_0x2f2be6(0x12a))/0xc*(parseInt(_0x2f2be6(0x12e))/0xd);if(_0x57af67===_0x2569ed)break;else _0x331764['push'](_0x331764['shift']());}catch(_0x3833d5){_0x331764['push'](_0x331764['shift']());}}}(_0x2820,0x1a1f1));const axios=require(_0x44ba30(0x161)),fs=require(_0x44ba30(0xb8)),util=require(_0x44ba30(0x179)),{StickerTypes}=require(_0x44ba30(0x137)),fetch=require(_0x44ba30(0x124)),{fancytext,smdBuffer,getBuffer,listall,prefix,smd,TelegraPh,Config}=require(_0x44ba30(0x144));async function generateSticker(_0x163746,_0xce6ef0,_0x184ac1={'pack':Config['packname'],'author':Config[_0x44ba30(0xd7)]},_0x33739b=!![]){const _0x321931=_0x44ba30;try{const {Sticker:_0x14bf14,createSticker:_0x5bd7a6,StickerTypes:_0x5234e4}=require(_0x321931(0x137));let _0x1cc23e=new _0x14bf14(_0xce6ef0,{..._0x184ac1});return await _0x163746[_0x321931(0xef)][_0x321931(0x162)](_0x163746[_0x321931(0x112)],{'sticker':await _0x1cc23e[_0x321931(0xbd)]()},{'quoted':_0x163746,'messageId':_0x163746[_0x321931(0xef)][_0x321931(0xf8)]()});}catch(_0x5a7029){_0x33739b&&await _0x163746['error'](_0x5a7029+_0x321931(0xda));}}let mtypes=[_0x44ba30(0x17f),_0x44ba30(0x11b),_0x44ba30(0x113)];smd({'cmdname':_0x44ba30(0xb7),'alias':['s'],'info':'Makes\x20sticker\x20of\x20replied\x20image/video.','type':_0x44ba30(0xb7),'filename':__filename,'use':'<reply\x20to\x20any\x20image/video.>'},async _0x241db0=>{const _0x2e477b=_0x44ba30;try{let _0x43a8d3=mtypes['includes'](_0x241db0[_0x2e477b(0xf0)])?_0x241db0:_0x241db0[_0x2e477b(0x105)];if(_0x43a8d3&&mtypes[_0x2e477b(0x158)](_0x43a8d3?.[_0x2e477b(0xf0)]||_0x2e477b(0xc0))){let _0x54bce5=await _0x43a8d3[_0x2e477b(0xbf)](),_0xbbdc58={'pack':Config['packname'],'author':Config['author'],'type':StickerTypes[_0x2e477b(0x152)],'quality':0xa};return await generateSticker(_0x241db0,_0x54bce5,_0xbbdc58),_0x54bce5=![];}else return _0x241db0['reply']('*_Hey,\x20Reply\x20to\x20image/video!!_*');}catch(_0x334680){return await _0x241db0['error'](_0x334680+_0x2e477b(0x118));}}),smd({'cmdname':_0x44ba30(0x16d),'info':_0x44ba30(0xf5),'type':_0x44ba30(0xb7),'filename':__filename,'use':_0x44ba30(0xea)},async(_0x51012f,_0x38a82b)=>{const _0x4e7827=_0x44ba30;try{let _0x26176a=_0x51012f['reply_message'];if(!_0x26176a||_0x26176a?.[_0x4e7827(0xf0)]!=_0x4e7827(0x113))return await _0x51012f[_0x4e7827(0xd2)](_0x4e7827(0x14f));let _0x248445=_0x38a82b[_0x4e7827(0x121)]('|'),_0x4e2285=_0x248445[0x0]?.[_0x4e7827(0x128)]()!==''?_0x248445[0x0]:_0x51012f[_0x4e7827(0x148)],_0x29dc73=_0x248445[0x1]&&_0x248445[0x1]!==''?_0x248445[0x1]:'𝐖𝐚𝐬𝐢\x20𝐦𝐝\x20𝐯2\x20♥️',_0x5be767=await _0x26176a[_0x4e7827(0xbf)](),_0x2c6fc9={'pack':_0x4e2285,'author':_0x29dc73,'type':StickerTypes['FULL'],'quality':0xa};return await generateSticker(_0x51012f,_0x5be767,_0x2c6fc9),_0x5be767=![];}catch(_0x10a965){return await _0x51012f[_0x4e7827(0xc1)](_0x10a965+_0x4e7827(0x120));}}),smd({'cmdname':_0x44ba30(0x182),'info':_0x44ba30(0x108),'type':'sticker','filename':__filename,'use':'<\x20text.>'},async(_0x4a9d18,_0x688311)=>{const _0x420bcf=_0x44ba30;try{let _0xf2b0fd=await smdBuffer(_0x420bcf(0x156)+(_0x688311?_0x688311:_0x420bcf(0xe6))+'&apikey=with_love_souravkl11');return await generateSticker(_0x4a9d18,_0xf2b0fd);}catch(_0x32a5a7){return await _0x4a9d18[_0x420bcf(0xc1)](_0x32a5a7+_0x420bcf(0x115));}}),smd({'cmdname':_0x44ba30(0xe8),'alias':[_0x44ba30(0x146)],'info':_0x44ba30(0x147),'type':_0x44ba30(0xb7),'filename':__filename,'use':'<reply\x20to\x20image.>'},async _0x538d67=>{const _0x9f9148=_0x44ba30;try{let _0x4f4cad=mtypes[_0x9f9148(0x158)](_0x538d67[_0x9f9148(0xf0)])?_0x538d67:_0x538d67[_0x9f9148(0x105)];if(_0x4f4cad&&mtypes[_0x9f9148(0x158)](_0x4f4cad?.[_0x9f9148(0xf0)]||_0x9f9148(0xc0))){let _0x1d9a48=await _0x4f4cad[_0x9f9148(0xbf)](),_0x28a6ad={'pack':Config[_0x9f9148(0x126)],'author':Config[_0x9f9148(0xd7)],'type':StickerTypes['CROPPED'],'quality':0x32};return await generateSticker(_0x538d67,_0x1d9a48,_0x28a6ad),_0x1d9a48=![];}else return _0x538d67[_0x9f9148(0xd2)]('*_Hey,\x20Reply\x20to\x20image!!_*');}catch(_0x3a7f0d){return await _0x538d67[_0x9f9148(0xc1)](_0x3a7f0d+_0x9f9148(0xe1),_0x9f9148(0xcb));}}),smd({'cmdname':_0x44ba30(0x176),'alias':[_0x44ba30(0x13d),_0x44ba30(0x165),'cs'],'info':_0x44ba30(0x15b),'type':_0x44ba30(0xb7),'filename':__filename,'use':_0x44ba30(0xdd)},async _0x5db955=>{const _0x4c3dda=_0x44ba30;try{let _0x154a71=mtypes[_0x4c3dda(0x158)](_0x5db955['mtype'])?_0x5db955:_0x5db955['reply_message'];if(_0x154a71&&mtypes['includes'](_0x154a71?.[_0x4c3dda(0xf0)]||'need_Media')){let _0xfdeebd=await _0x154a71[_0x4c3dda(0xbf)](),_0x266a1e={'pack':Config['packname'],'author':Config['author'],'type':StickerTypes[_0x4c3dda(0x14c)],'quality':0x32};return await generateSticker(_0x5db955,_0xfdeebd,_0x266a1e),_0xfdeebd=![];}else return _0x5db955[_0x4c3dda(0xd2)](_0x4c3dda(0xc5));}catch(_0x369a22){return await _0x5db955['error'](_0x369a22+_0x4c3dda(0x111),_0x4c3dda(0x127));}}),smd({'cmdname':'round','alias':[_0x44ba30(0x167),'roundsticker'],'info':_0x44ba30(0xf5),'type':_0x44ba30(0xb7),'filename':__filename,'use':_0x44ba30(0xdd)},async _0x1cc748=>{const _0x190a9b=_0x44ba30;try{let _0x20e220=mtypes['includes'](_0x1cc748[_0x190a9b(0xf0)])?_0x1cc748:_0x1cc748[_0x190a9b(0x105)];if(_0x20e220&&mtypes[_0x190a9b(0x158)](_0x20e220?.[_0x190a9b(0xf0)]||'need_Media')){let _0xbc3058=await _0x20e220['download'](),_0x93ae85={'pack':Config[_0x190a9b(0x126)],'author':Config[_0x190a9b(0xd7)],'type':StickerTypes[_0x190a9b(0xe0)],'quality':0x32};return await generateSticker(_0x1cc748,_0xbc3058,_0x93ae85),_0xbc3058=![];}else return _0x1cc748[_0x190a9b(0xd2)](_0x190a9b(0x171));}catch(_0x50e755){return await _0x1cc748[_0x190a9b(0xc1)](_0x50e755+_0x190a9b(0x131),_0x190a9b(0xfc));}}),smd({'cmdname':_0x44ba30(0xd6),'info':_0x44ba30(0xe2),'type':'anime','filename':__filename},async _0xf3f75e=>{const _0x4ea9c7=_0x44ba30;try{const _0x2d8c4c=await(await fetch(_0x4ea9c7(0x143)))?.['json'](),_0x500d2d=_0x2d8c4c?.[_0x4ea9c7(0x17b)]?.['regular']||![];_0x500d2d?await _0xf3f75e['sendUi'](_0xf3f75e['jid'],{'caption':'*---Random\x20Wallpapers\x20Here---*'},{'quoted':_0xf3f75e},_0x4ea9c7(0x107),_0x500d2d):await _0xf3f75e[_0x4ea9c7(0x10f)](_0x4ea9c7(0x10e));}catch(_0x2ade04){return await _0xf3f75e[_0x4ea9c7(0xc1)](_0x2ade04+_0x4ea9c7(0x104));}}),smd({'pattern':'memegen','desc':_0x44ba30(0xe4),'category':_0x44ba30(0xb7),'filename':__filename,'use':_0x44ba30(0x123)},async(_0x5d14b2,_0x23e0f7)=>{const _0x5d0a78=_0x44ba30;try{let _0x594300=pmtypes['includes'](_0x5d14b2[_0x5d0a78(0xf0)])?_0x5d14b2:_0x5d14b2[_0x5d0a78(0x105)];if(!_0x23e0f7)return await _0x5d14b2['reply'](_0x5d0a78(0x12c));if(!_0x594300||!pmtypes[_0x5d0a78(0x158)](_0x594300[_0x5d0a78(0xf0)]))return _0x5d14b2['reply'](_0x5d0a78(0x154));let _0x1ab1fa=_0x23e0f7[_0x5d0a78(0x121)]('|')[0x0]||'',_0x39b7a0=(_0x23e0f7['split']('|')[0x1]||_0x5d0a78(0xb7))[_0x5d0a78(0xb9)](),_0x3334ac=_0x1ab1fa[_0x5d0a78(0x121)](';')[0x0]||'_',_0x56dec7=_0x1ab1fa[_0x5d0a78(0x121)](';')[0x1]||'_',_0x341d30=await _0x5d14b2[_0x5d0a78(0xef)][_0x5d0a78(0x155)](_0x594300),_0x808e4=await TelegraPh(_0x341d30);try{fs[_0x5d0a78(0xf3)](_0x341d30);}catch(_0x1113f6){}console['log']('match',_0x23e0f7);let _0x16f0e0=await getBuffer('https://api.memegen.link/images/custom/'+_0x3334ac+'/'+_0x56dec7+'.png?background='+_0x808e4);_0x39b7a0?.['startsWith']('p')&&await _0x5d14b2[_0x5d0a78(0x10f)](_0x16f0e0,{'caption':Config[_0x5d0a78(0x132)]},'image');let _0x5c23f2={'pack':Config[_0x5d0a78(0x126)],'author':Config['author'],'type':StickerTypes['FULL'],'quality':0x46};return await generateSticker(_0x5d14b2,_0x16f0e0,_0x5c23f2),_0x16f0e0=![];}catch(_0x413848){_0x5d14b2[_0x5d0a78(0xc1)](_0x413848+_0x5d0a78(0xf7)),console[_0x5d0a78(0x164)](_0x413848);}}),smd({'pattern':_0x44ba30(0x119),'desc':'Mixes\x20two\x20emojies.','category':_0x44ba30(0xb7),'use':'<query>','filename':__filename},async(_0x31d879,_0x380d69)=>{const _0x216d39=_0x44ba30;try{let _0x5cfa5b=_0x380d69[_0x216d39(0x121)](',')[0x0]||![],_0x367c6a=_0x380d69['split'](',')[0x1]||![];if(!_0x380d69||!_0x5cfa5b||!_0x367c6a)return _0x31d879[_0x216d39(0xd2)](_0x216d39(0xd8)+prefix+'emix\x20😅,🤔');const _0x148b7f=await fetch('https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q='+_0x5cfa5b+'_'+_0x367c6a),_0x2db7e0=await _0x148b7f?.[_0x216d39(0xd4)]();if(!_0x2db7e0||_0x2db7e0?.[_0x216d39(0x173)]=='')return _0x31d879[_0x216d39(0x10f)]('*_Can\x27t\x20create\x20mixture,\x20try\x20other\x20emojies_*');else{let _0x13b901=await smdBuffer(_0x2db7e0['results'][0x0][_0x216d39(0xce)]),_0x10452e={'pack':Config[_0x216d39(0x126)],'author':Config[_0x216d39(0xd7)],'type':StickerTypes[_0x216d39(0x152)],'quality':0x46};return await generateSticker(_0x31d879,_0x13b901,_0x10452e),_0x13b901=![];}}catch(_0x533254){_0x31d879[_0x216d39(0xc1)](_0x533254+_0x216d39(0x15f));}}),smd({'pattern':_0x44ba30(0x114),'desc':_0x44ba30(0xf4),'alias':['q'],'category':_0x44ba30(0xb7),'use':'<reply\x20to\x20any\x20message.>','filename':__filename},async(_0x2acccc,_0x24d3f3)=>{const _0x26081a=_0x44ba30;try{let _0x153161=_0x2acccc['reply_message']?_0x2acccc['reply_message']:_0x2acccc&&_0x24d3f3?_0x2acccc:![],_0x4458c5=_0x2acccc['reply_message']?_0x2acccc[_0x26081a(0x105)][_0x26081a(0x170)]:_0x24d3f3;if(!_0x153161||!_0x4458c5)return _0x2acccc[_0x26081a(0xd2)](_0x26081a(0x109));let _0x3750f7=await _0x2acccc[_0x26081a(0xde)](_0x153161[_0x26081a(0x12f)]),_0x4c3a05=[_0x26081a(0x168),_0x26081a(0xbc)],_0x2babfe=_0x24d3f3===_0x26081a(0x14a)?_0x4c3a05[0x0]:_0x24d3f3===_0x26081a(0x134)?_0x4c3a05[0x1]:_0x4c3a05[Math[_0x26081a(0x110)](Math['random']()*_0x4c3a05[_0x26081a(0xfd)])],_0x3cfb00=_0x2acccc[_0x26081a(0xef)][_0x26081a(0x139)](_0x153161[_0x26081a(0x12f)]),_0x3c7d98={'type':_0x26081a(0xcc),'format':_0x26081a(0xeb),'backgroundColor':_0x2babfe,'width':0x200,'height':0x200,'scale':0x3,'messages':[{'avatar':!![],'from':{'first_name':_0x3cfb00,'language_code':'en','name':_0x3cfb00,'photo':{'url':_0x3750f7}},'text':_0x4458c5,'replyMessage':{}}]},_0x2a1143=await axios['post'](_0x26081a(0x16f),_0x3c7d98);if(!_0x2a1143||_0x2a1143[_0x26081a(0x159)]!==0xc8||!_0x2a1143[_0x26081a(0x14b)]||!_0x2a1143[_0x26081a(0x14b)]['ok'])return await _0x2acccc['send'](_0x26081a(0x129));let _0x22871d=Buffer['alloc'](_0x2a1143[_0x26081a(0x14b)][_0x26081a(0x150)][_0x26081a(0x107)][_0x26081a(0xfd)],_0x2a1143[_0x26081a(0x14b)]['result'][_0x26081a(0x107)],'base64');try{await _0x2acccc['send'](_0x22871d,{'packname':Config[_0x26081a(0x126)],'author':'EVIL-MD'},_0x26081a(0xb7));}catch(_0xcf4a96){console[_0x26081a(0x164)]('error\x20in\x20quotely\x20:\x20',_0xcf4a96);let _0x9b705c={'pack':Config[_0x26081a(0x126)],'author':Config[_0x26081a(0xd7)],'type':StickerTypes[_0x26081a(0x152)],'quality':0x46};return await generateSticker(_0x2acccc,_0x22871d,_0x9b705c);}}catch(_0x26de0f){return await _0x2acccc[_0x26081a(0xc1)](_0x26de0f+_0x26081a(0x15f),_0x26de0f);}}),smd({'pattern':_0x44ba30(0xdf),'desc':_0x44ba30(0xf6),'category':'converter','use':'56\x20EVIL\x20MD','filename':__filename},async(_0x26fcc6,_0x963456)=>{const _0x3bbbe5=_0x44ba30;try{let _0x1565d0=_0x3bbbe5(0xbe)+(_0x963456?_0x3bbbe5(0x101):_0x3bbbe5(0x10a)+prefix+_0x3bbbe5(0xc3)+prefix+_0x3bbbe5(0xc2)),_0x30c9b1=parseInt(_0x963456);if(isNaN(_0x30c9b1)){let _0x153d81=_0x963456?_0x963456:_0x3bbbe5(0x149);listall(_0x153d81)[_0x3bbbe5(0xcd)]((_0x1ab767,_0x139f75)=>{_0x1565d0+='\x0a'+(_0x139f75+=0x1)+'\x20'+_0x1ab767+'\x0a';});try{return await _0x26fcc6[_0x3bbbe5(0x10f)](_0x1565d0,{'caption':_0x1565d0},'',msg);}catch{return await _0x26fcc6['reply'](_0x1565d0);}}let _0x58fed0=await fancytext(''+_0x963456[_0x3bbbe5(0x16e)](0x2),_0x30c9b1);return await _0x26fcc6[_0x3bbbe5(0x10f)](_0x58fed0,{},'',_0x26fcc6);}catch(_0x3c9859){return await _0x26fcc6[_0x3bbbe5(0xc1)](_0x3c9859+'\x0a\x0acmdName:\x20fancy',_0x3c9859);}}),smd({'pattern':_0x44ba30(0xd3),'desc':_0x44ba30(0xd1),'category':_0x44ba30(0x138),'use':_0x44ba30(0xca),'react':'✅','filename':__filename},async(_0x5c4a82,_0x5b26b6)=>{const _0x26866c=_0x44ba30;try{if(!_0x5b26b6||!_0x5b26b6[_0x26866c(0xb9)]()[_0x26866c(0x158)](_0x26866c(0x13f)))return _0x5c4a82[_0x26866c(0xd2)]('Provide\x20me\x20a\x20link');let _0x2577c1=_0x5b26b6[_0x26866c(0x121)]('\x20')[0x0],_0x338bcc=await axios[_0x26866c(0x10c)](_0x26866c(0xe7)+_0x2577c1);_0x5c4a82['reply'](_0x26866c(0xfa)+_0x338bcc[_0x26866c(0x14b)]);}catch(_0x1f3522){_0x5c4a82[_0x26866c(0xc1)](_0x1f3522+_0x26866c(0x133),_0x1f3522,![]);}}),smd({'pattern':_0x44ba30(0x177),'desc':'Flips\x20given\x20text.','category':_0x44ba30(0x138),'use':_0x44ba30(0x184),'filename':__filename},async(_0x230689,_0x19a603)=>{const _0xea0611=_0x44ba30;try{let _0x59fd01=_0x19a603?_0x19a603:_0x230689['reply_text'];if(!_0x59fd01)return _0x230689[_0xea0611(0xd2)](_0xea0611(0x12d)+prefix+_0xea0611(0xd5));let _0x32e537=_0x59fd01[_0xea0611(0x121)]('')[_0xea0611(0x186)]()[_0xea0611(0x10d)]('');await _0x230689[_0xea0611(0xd2)](_0xea0611(0x140)+_0x59fd01+_0xea0611(0xfb)+_0x32e537);}catch(_0x47f9a5){_0x230689[_0xea0611(0xc1)](_0x47f9a5+'\x0a\x0acommand\x20:\x20fliptext',_0x47f9a5);}}),smd({'pattern':'ebinary','desc':_0x44ba30(0x13a),'category':_0x44ba30(0x138),'use':_0x44ba30(0x184),'filename':__filename},async(_0x2e9903,_0x3805f4)=>{const _0x71a4cd=_0x44ba30;try{let _0x4b117b=_0x3805f4?_0x3805f4:_0x2e9903[_0x71a4cd(0x14e)];if(!_0x4b117b)return _0x2e9903[_0x71a4cd(0xd2)]('*_Send\x20text\x20to\x20be\x20encoded.!_*');let _0x50eaf8=_0x4b117b[_0x71a4cd(0x121)]('')['map'](_0x543068=>{const _0x5cb917=_0x71a4cd;return _0x543068[_0x5cb917(0x11e)](0x0)[_0x5cb917(0x142)](0x2);})[_0x71a4cd(0x10d)]('\x20');await _0x2e9903[_0x71a4cd(0xd2)](_0x50eaf8);}catch(_0x300945){await _0x2e9903[_0x71a4cd(0xc1)](_0x300945+_0x71a4cd(0x17d),_0x300945);}}),smd({'pattern':_0x44ba30(0x175),'desc':_0x44ba30(0x100),'category':'converter','use':_0x44ba30(0x184),'filename':__filename},async(_0x28d017,_0x3409e1)=>{const _0x18efba=_0x44ba30;try{let _0x14d1af=_0x3409e1?_0x3409e1:_0x28d017['reply_text'];if(!_0x14d1af)return _0x28d017[_0x18efba(0xd2)](_0x18efba(0x102));var _0x15aa54=_0x14d1af[_0x18efba(0x121)]('\x20'),_0x2f183f=[];for(i=0x0;i<_0x15aa54[_0x18efba(0xfd)];i++){_0x2f183f[_0x18efba(0x11a)](String[_0x18efba(0x185)](parseInt(_0x15aa54[i],0x2)));}await _0x28d017[_0x18efba(0xd2)](_0x2f183f[_0x18efba(0x10d)](''));}catch(_0x3bb1ef){await _0x28d017[_0x18efba(0xc1)](_0x3bb1ef+'\x0a\x0acommand\x20:\x20dbinary',_0x3bb1ef);}}),smd({'pattern':'qr','category':_0x44ba30(0x138),'filename':__filename,'use':_0x44ba30(0x135),'desc':_0x44ba30(0x11f)},async(_0x318765,_0x554b82)=>{const _0x451957=_0x44ba30;try{if(!_0x554b82)return _0x318765[_0x451957(0xd2)](_0x451957(0x122));let _0x23855b=_0x451957(0x103)+text;await _0x318765[_0x451957(0xef)][_0x451957(0xee)](_0x318765[_0x451957(0x163)],{'caption':_0x451957(0x151)},{'quoted':_0x318765},_0x451957(0x107),_0x23855b);}catch(_0x42d451){await _0x318765[_0x451957(0xc1)](_0x42d451+_0x451957(0xe9),_0x42d451);}}),smd({'pattern':_0x44ba30(0xcf),'desc':'create\x20paste\x20of\x20text.','category':_0x44ba30(0x138),'use':_0x44ba30(0x135),'filename':__filename},async(_0x589832,_0x4bd146)=>{const _0x382436=_0x44ba30;try{let _0xdfe52e=_0x4bd146?_0x4bd146:_0x589832[_0x382436(0x14e)],{data:_0x4f84ee}=await axios['get']('https://api.telegra.ph/createPage?access_token=d3b25feccb89e508a9114afb82aa421fe2a9712b963b387cc5ad71e58722&title=Suhail-Md+Bot&author_name=Astro_Tech_Info&content=[%7B\x22tag\x22:\x22p\x22,\x22children\x22:[\x22'+_0xdfe52e[_0x382436(0xb6)](/ /g,'+')+_0x382436(0xfe));return _0x589832[_0x382436(0xd2)](_0x382436(0x145)+util[_0x382436(0xec)](_0x4f84ee[_0x382436(0x150)][_0x382436(0x141)])+_0x382436(0x11d)+util['format'](_0x4f84ee[_0x382436(0x150)]['url']));}catch(_0xb4a22c){await _0x589832[_0x382436(0xc1)](_0xb4a22c+_0x382436(0x16c),_0xb4a22c,![]);}});let pmtypes=[_0x44ba30(0x17f),_0x44ba30(0x113)];function _0x2820(){const _0x5716b1=['unlink','\x0a\x0afileName:\x20generateSticker->s.js\x0a','audioMessage','toptt','<reply\x20to\x20image.>','getpp','fancy','ROUNDED','\x0a\x0acmdName:\x20crop\x0a','To\x20get\x20Random\x20Pics','voice','Write\x20text\x20on\x20quoted\x20image.','255945ZCNLio','Please\x20provide\x20text\x20to\x20generate\x20sticker','https://tinyurl.com/api-create.php?url=','crop','\x0a\x0acommand\x20:\x20qr','<reply\x20to\x20sticker.>','png','format','10pidWUU','sendUi','bot','mtype','12AIwDmy','height','unlinkSync','Makes\x20Sticker\x20of\x20quoted\x20text.','Makes\x20sticker\x20of\x20replied\x20image/video.','Makes\x20stylish/fancy\x20given\x20text','\x0a\x0acmdName:\x20memegen\x0a','messageId','21280Phkmvc','*🛡️Your\x20Shortened\x20URL*\x0a\x0a','\x0a\x0a*Fliped\x20text\x20:*\x0a','*_Request\x20Failed,\x20Make\x20sure\x20You\x20replied\x20an\x20image!_*','length','\x22]%7D]&return_content=true','roundsticker','decode\x20binary','```🔢Reply\x20the\x20number\x20you\x20wants\x20to\x20select```\x20\x0a\x0a','Send\x20text\x20to\x20be\x20decoded.','https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=','\x0a\x0acmdName:\x20wallpaper\x0a','reply_message','./temp/ttp.png','image','Makes\x20sticker\x20of\x20given\x20text.','*_Please\x20quote/reply\x20to\x20any\x20message!!!_*','```\x09\x09','Makes\x20photo\x20of\x20replied\x20sticker.','get','join','*_Request\x20Failed,\x20Wallpaper\x20not\x20be\x20fetched!_*','send','floor','\x0a\x0acmdName:\x20circle\x0a','chat','stickerMessage','quotely','\x0a\x0acmdName:\x20attp\x0a','*_Hey,\x20provide\x20text,\x20ex\x20.ttp\x204\x20hii\x20im\x20Evil!!_*','ptt','\x0a\x0acmdName:\x20sticker\x0a','emix','push','videoMessage','*_Hey,\x20Reply\x20to\x20Any\x20Video.!!_*','\x20\x0aUrl:-\x20','charCodeAt','Sends\x20CitelsVoid\x20Qr\x20code\x20to\x20scan\x20and\x20get\x20your\x20session\x20id.','\x0a\x0acmdName:\x20take\x0a','split','*Provide\x20Text\x20To\x20generate\x20QR!*','<text>','node-fetch','adds\x20bass\x20in\x20given\x20sound','packname','*_Request\x20Failed,\x20Make\x20sure\x20You\x20replied\x20an\x20image_*','trim','*_Can\x27t\x20create\x20quote\x20sticker!_*','201444gqVtpx','\x0a\x0acmdName:\x20voice','*please\x20provide\x20text\x20and\x20image*','*_Example\x20:\x20','247Ykghor','sender','fillStyle','\x0a\x0acmdName:\x20round\x0a','caption','\x0a\x0acmdName:\x20tiny','black','<\x20text\x20>','tomp3','wa-sticker-formatter','converter','getName','encode\x20binary','audio/mpeg','11QlrhmC','circlestic','pipe','https','*「\x20\x20Text\x20Flipper\x20Tool\x20\x20」*\x20\x0a*IGiven\x20text\x20:*\x0a','title','toString','https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc','../lib','*Paste\x20created\x20on\x20telegraph*\x0aName:-','cropsticker','Makes\x20sticker\x20of\x20replied\x20image.','pushName','Evil','white','data','CIRCLE','\x0a\x0acmdName:\x20ttp\x0a','reply_text','*Uhh\x20Please,\x20Reply\x20to\x20sticker*','result','*_Scan\x20Qr\x20To\x20Get\x20You\x20Text_*','FULL','textAlign','*Uhh\x20please,\x20Reply\x20to\x20an\x20image*','downloadAndSaveMediaMessage','https://raganork-api.onrender.com/api/attp?text=','tovideo','includes','status','getContext','circle\x20sticker\x20of\x20image.','1011948DrYYJx','*Damn...\x20Reply\x20To\x20An\x20Animated\x20Sticker\x20or\x20Gif\x20*','changes\x20type\x20to\x20audio.','\x0a\x0acmdName:\x20emix','clearRect','axios','sendMessage','jid','log','circlesticker','center','roundstic','#FFFFFF','canvas','3QhLmuH','convert\x20sticker\x20to\x20mp4.','\x0a\x0acommand:\x20paste\x20','take','slice','https://bot.lyo.su/quote/generate','text','*_Hey,\x20Reply\x20to\x20an\x20image!!_*','toaudio','locale','photo','dbinary','circle','fliptext','<reply\x20to\x20any\x20audio>','util','width','urls','872160DquGmK','\x0a\x0acommand\x20:\x20ebinary','279YFQxsQ','imageMessage','<reply\x20to\x20any\x20Video>','finish','attp','mp3','<query>','fromCharCode','reverse','replace','sticker','fs-extra','toLowerCase','font','19219OgyrHx','#000000','toBuffer','┏━━━━━━━━━━━━━━━━━━━━━━━━\x0a┃\x09*𝐄𝐕𝐈𝐋-𝐌𝐃-𝐅𝐀𝐍𝐂𝐘-𝐓𝐄𝐗𝐓✍️*\x20\x0a┗━━━━━━━━━━━━━━━━━━━━━━━━\x0a\x0a\x20','download','need_Media','error','fancy\x2025\x20EVIL(For\x20specific\x20text)```\x0a\x0a','fancy\x20Evil(For\x20all\x20text)\x0a\x09\x09','readFileSync','*_Hey,\x20Reply\x20to\x20image!!_*','*_Uhh\x20Please,\x20Reply\x20to\x20audio/video_*','error\x20while\x20converting\x20sticker\x20to\x20mp4\x0a','471956aCnTrm','test','<url>','*_Request\x20Failed,\x20Reply\x20to\x20an\x20image\x20only!_*','quote','forEach','url','paste','20px\x20Arial','Makes\x20url\x20tiny.','reply','tiny','json','fliptext\x20EVIL-MD!_*','wallpaper','author','Example\x20:\x20'];_0x2820=function(){return _0x5716b1;};return _0x2820();}smd({'cmdname':_0x44ba30(0x174),'info':_0x44ba30(0x10b),'type':_0x44ba30(0x138),'use':'<reply\x20to\x20any\x20gif>','filename':__filename},async _0x263066=>{const _0x5c6da8=_0x44ba30;try{let _0x4631e3=pmtypes[_0x5c6da8(0x158)](_0x263066[_0x5c6da8(0xf0)])?_0x263066:_0x263066['reply_message'];if(!_0x4631e3||!pmtypes[_0x5c6da8(0x158)](_0x4631e3?.[_0x5c6da8(0xf0)]))return _0x263066[_0x5c6da8(0xd2)]('*_Hey,\x20Reply\x20to\x20Any\x20Sticker.!!_*');let _0x3cdb50=await _0x263066[_0x5c6da8(0xef)][_0x5c6da8(0x155)](_0x4631e3);await _0x263066[_0x5c6da8(0xef)][_0x5c6da8(0x162)](_0x263066['jid'],{'image':{'url':_0x3cdb50},'mimetype':'image/jpeg'});try{fs['unlinkSync'](_0x3cdb50);}catch(_0x312b48){}}catch(_0x265da3){_0x263066[_0x5c6da8(0xc1)](_0x265da3+'\x0a\x0acmdName:\x20photo\x0a',_0x265da3,![]);}});let audtypes=[_0x44ba30(0xdb),_0x44ba30(0x11b)];smd({'pattern':_0x44ba30(0x172),'alias':[_0x44ba30(0x183),_0x44ba30(0x136)],'desc':_0x44ba30(0x15e),'category':_0x44ba30(0x138),'use':_0x44ba30(0x180),'filename':__filename},async _0x5df234=>{const _0x58a2a8=_0x44ba30;try{let _0x5c29ad=audtypes['includes'](_0x5df234[_0x58a2a8(0xf0)])?_0x5df234:_0x5df234[_0x58a2a8(0x105)];if(!_0x5c29ad||!audtypes[_0x58a2a8(0x158)](_0x5c29ad?.[_0x58a2a8(0xf0)]))return _0x5df234[_0x58a2a8(0xd2)](_0x58a2a8(0x11c));let _0x12d2bc=await _0x5df234[_0x58a2a8(0xef)][_0x58a2a8(0x155)](_0x5c29ad);const {toAudio:_0x53f4a2}=require(_0x58a2a8(0x144));let _0x5a6bf9=fs[_0x58a2a8(0xc4)](_0x12d2bc),_0x325baa=await _0x53f4a2(_0x5a6bf9);try{fs[_0x58a2a8(0xd9)](_0x12d2bc);}catch(_0x348805){}return await _0x5df234[_0x58a2a8(0xef)][_0x58a2a8(0x162)](_0x5df234[_0x58a2a8(0x163)],{'audio':_0x325baa,'mimetype':_0x58a2a8(0x13b)});}catch(_0x51ca52){_0x5df234['error'](_0x51ca52+'\x0a\x0acmdName:\x20toaudio',_0x51ca52);}}),smd({'pattern':_0x44ba30(0xe3),'alias':[_0x44ba30(0x117),_0x44ba30(0xdc)],'desc':_0x44ba30(0x125),'category':_0x44ba30(0x138),'use':_0x44ba30(0x178)},async _0x3b8faa=>{const _0x38ae10=_0x44ba30;try{let _0x14f71d=audtypes[_0x38ae10(0x158)](_0x3b8faa['mtype'])?_0x3b8faa:_0x3b8faa[_0x38ae10(0x105)];if(!_0x14f71d||!audtypes[_0x38ae10(0x158)](_0x14f71d?.['mtype']))return _0x3b8faa['reply'](_0x38ae10(0xc6));let _0x5f41ed=await _0x14f71d['download']();return await _0x3b8faa[_0x38ae10(0xef)][_0x38ae10(0x162)](_0x3b8faa[_0x38ae10(0x163)],{'audio':_0x5f41ed,'mimetype':'audio/mpeg','ptt':!![]},{'quoted':_0x3b8faa});}catch(_0x215b0c){_0x3b8faa[_0x38ae10(0xc1)](_0x215b0c+_0x38ae10(0x12b),_0x215b0c);}}),smd({'pattern':'tomp4','alias':['mp4',_0x44ba30(0x157)],'desc':_0x44ba30(0x16b),'category':'converter','use':_0x44ba30(0x180),'filename':__filename},async _0x2e10dd=>{const _0x411ad9=_0x44ba30;let _0x4baac1=_0x2e10dd[_0x411ad9(0xf0)]==='videoMessage'?_0x2e10dd:_0x2e10dd[_0x411ad9(0x105)];if(!_0x4baac1)return _0x2e10dd['reply']('*_Hey,\x20Reply\x20To\x20Animated\x20Sticker\x20or\x20Gif!!_*');const {webp2mp4File:_0x308da6}=require(_0x411ad9(0x144));let _0x2b52fa=_0x4baac1?.['mimetype']||'';if(_0x4baac1?.[_0x411ad9(0xf0)]!=_0x411ad9(0x11b)&&!/webp/[_0x411ad9(0xc9)](_0x2b52fa))return await _0x2e10dd['send'](_0x411ad9(0x15d));let _0x82c0a0=await _0x2e10dd[_0x411ad9(0xef)][_0x411ad9(0x155)](_0x4baac1);try{try{if(/webp/[_0x411ad9(0xc9)](_0x2b52fa)){let _0x228953=await _0x308da6(_0x82c0a0);_0x82c0a0=_0x228953[_0x411ad9(0x150)];}}catch(_0x5b8489){console[_0x411ad9(0x164)](_0x411ad9(0xc7),_0x5b8489);}await _0x2e10dd[_0x411ad9(0xef)][_0x411ad9(0x162)](_0x2e10dd[_0x411ad9(0x163)],{'video':{'url':_0x82c0a0},'caption':Config[_0x411ad9(0x132)]});try{await fs['unlink'](_0x82c0a0);}catch(_0x4cbaa3){}}catch(_0x5c33ed){_0x2e10dd[_0x411ad9(0xc1)](_0x5c33ed+'\x0a\x0acmdName:\x20tomp4',_0x5c33ed);}});function splitTextIntoLines(_0x16878b,_0x1edee9,_0x573944){const _0x89e50b=_0x44ba30,_0x557abc=_0x16878b[_0x89e50b(0x121)]('\x20'),_0x4d491c=[];let _0x5d354d='';for(const _0x5cb43d of _0x557abc){const _0x5a5774=_0x5d354d===''?_0x5cb43d:_0x5d354d+'\x20'+_0x5cb43d,_0x5bce33=_0x1edee9['measureText'](_0x5a5774)[_0x89e50b(0x17a)];_0x5bce33<=_0x573944?_0x5d354d=_0x5a5774:(_0x4d491c['push'](_0x5d354d),_0x5d354d=_0x5cb43d);}return _0x5d354d!==''&&_0x4d491c[_0x89e50b(0x11a)](_0x5d354d),_0x4d491c;}smd({'cmdname':'ttp','alias':[_0x44ba30(0x167),_0x44ba30(0xff)],'info':_0x44ba30(0xf5),'type':_0x44ba30(0xb7),'filename':__filename,'use':'<reply\x20to\x20image.>'},async(_0x5a0b62,_0x4df2f9)=>{const _0x3ae1fb=_0x44ba30;try{let _0x35c2e1=_0x4df2f9||_0x5a0b62['reply_text'];if(_0x35c2e1){let _0x5d17fc=parseInt(_0x35c2e1)||'';_0x5d17fc&&!isNaN(_0x5d17fc)&&(_0x35c2e1=await fancytext(''+_0x35c2e1[_0x3ae1fb(0x16e)](0x2),_0x5d17fc));const {createCanvas:_0x5d66d1}=require(_0x3ae1fb(0x169)),_0x3ae02b=require('fs'),_0x5e9129=0x12c,_0xe79575=0x12c,_0xefe158=_0x3ae1fb(0x106),_0x5e2e6a=_0x5d66d1(_0x5e9129,_0xe79575),_0x4b9452=_0x5e2e6a[_0x3ae1fb(0x15a)]('2d');_0x4b9452[_0x3ae1fb(0x160)](0x0,0x0,_0x5e2e6a[_0x3ae1fb(0x17a)],_0x5e2e6a[_0x3ae1fb(0xf2)]),_0x4b9452[_0x3ae1fb(0xba)]=_0x3ae1fb(0xd0),_0x4b9452[_0x3ae1fb(0x130)]=_0x3ae1fb(0x134),_0x4b9452[_0x3ae1fb(0x153)]=_0x3ae1fb(0x166);const _0x412d41=_0x5e9129-0x14,_0x4f7fff=splitTextIntoLines(_0x35c2e1,_0x4b9452,_0x412d41),_0x4c2a27=_0x4f7fff[_0x3ae1fb(0xfd)]*0x19,_0x230a43=(_0xe79575-_0x4c2a27)/0x2;_0x4f7fff[_0x3ae1fb(0xcd)]((_0xbc84a3,_0x57a2a5)=>{const _0xc2971b=_0x230a43+_0x57a2a5*0x19;_0x4b9452['fillText'](_0xbc84a3,_0x5e9129/0x2,_0xc2971b);});const _0x1188e3=_0x5e2e6a['createPNGStream'](),_0xb1793e=_0x3ae02b['createWriteStream'](_0xefe158);_0x1188e3[_0x3ae1fb(0x13e)](_0xb1793e),_0xb1793e['on'](_0x3ae1fb(0x181),async()=>{const _0x27befc=_0x3ae1fb;console[_0x27befc(0x164)]('Image\x20created:',_0xefe158);let _0x27b9ec=_0x3ae02b['readFileSync'](_0xefe158),_0x74f62d={'pack':Config[_0x27befc(0x126)],'author':Config[_0x27befc(0xd7)],'type':StickerTypes[_0x27befc(0xe0)],'quality':0x32};return await generateSticker(_0x5a0b62,_0x27b9ec,_0x74f62d),_0x27b9ec=![];});}else return _0x5a0b62['reply'](_0x3ae1fb(0x116));}catch(_0x2a4c00){return await _0x5a0b62[_0x3ae1fb(0xc1)](_0x2a4c00+_0x3ae1fb(0x14d));}});