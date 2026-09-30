const archivedLessons = [
  {title:'万能开口句',icon:'💬',desc:'先学会礼貌开口、确认与求助',phrases:[
    ['안녕하세요.','annyeonghaseyo','您好。'],['감사합니다.','gamsahamnida','谢谢。'],['죄송합니다.','joesonghamnida','对不起／不好意思。'],['실례합니다.','sillyehamnida','打扰一下。'],['괜찮아요.','gwaenchanayo','没关系／可以。'],['네, 맞아요.','ne, majayo','对，是的。'],['아니요, 괜찮아요.','aniyo, gwaenchanayo','不用了，谢谢。'],['잘 모르겠어요.','jal moreugesseoyo','我不太清楚。'],['도와주세요.','dowajuseyo','请帮帮我。'],['잠시만요.','jamsimanyo','请稍等一下。'],['다시 말씀해 주세요.','dasi malsseumhae juseyo','请再说一遍。'],['천천히 말씀해 주세요.','cheoncheonhi malsseumhae juseyo','请说慢一点。']]
  },
  {title:'听懂与确认',icon:'👂',desc:'没听清、想确认时最有用',phrases:[
    ['한국어를 잘 못해요.','hangugeoreul jal motaeyo','我韩语不太好。'],['중국어 할 수 있어요?','junggugeo hal su isseoyo','您会说中文吗？'],['영어 할 수 있어요?','yeongeo hal su isseoyo','您会说英语吗？'],['번역기로 보여 드릴게요.','beonyeokgiro boyeo deurilgeyo','我用翻译软件给您看。'],['이게 무슨 뜻이에요?','ige museun tteusieyo','这是什么意思？'],['이렇게 하면 돼요?','ireoke hamyeon dwaeyo','这样做可以吗？'],['맞는지 확인해 주세요.','manneunji hwaginhae juseyo','请帮我确认是否正确。'],['여기에 써 주세요.','yeogie sseo juseyo','请写在这里。'],['지도에서 보여 주세요.','jidoeseo boyeo juseyo','请在地图上指给我看。'],['사진으로 보여 주세요.','sajineuro boyeo juseyo','请用照片给我看。']]
  },
  {title:'人数、时间与数量',icon:'⏱',desc:'三人出行天天会用到',phrases:[
    ['세 명이에요.','se myeongieyo','我们三个人。'],['한 개 주세요.','han gae juseyo','请给我一个。'],['세 개 주세요.','se gae juseyo','请给我三个。'],['몇 시에 시작해요?','myeot sie sijakaeyo','几点开始？'],['몇 시에 끝나요?','myeot sie kkeunnayo','几点结束？'],['얼마나 걸려요?','eolmana geollyeoyo','需要多长时间？'],['지금 가능해요?','jigeum ganeunghaeyo','现在可以吗？'],['오늘 예약할 수 있어요?','oneul yeyakhal su isseoyo','今天可以预约吗？'],['내일로 바꿀 수 있어요?','naeilro bakkul su isseoyo','可以改到明天吗？'],['삼십 분 정도예요?','samsip bun jeongdoyeyo','大约30分钟吗？'],['여유 시간이 얼마나 있어요?','yeoyu sigani eolmana isseoyo','有多少空余时间？']]
  },
  {title:'机场与入境',icon:'✈️',desc:'值机、行李、入境和航班问题',phrases:[
    ['체크인은 어디에서 해요?','chekeuineun eodieseo haeyo','在哪里办理值机？'],['이 짐을 부칠게요.','i jimeul buchilgeyo','我要托运这件行李。'],['기내에 가져가도 돼요?','ginaee gajyeogado dwaeyo','可以带上飞机吗？'],['탑승구가 어디예요?','tapseungguga eodiyeyo','登机口在哪里？'],['제주도로 여행 왔어요.','jejudoro yeohaeng wasseoyo','我是来济州岛旅游的。'],['4박 5일 동안 머물 거예요.','sabak oil dongan meomul geoyeyo','我会停留4晚5天。'],['호텔 예약 확인서예요.','hotel yeyak hwaginseoyeyo','这是酒店预订单。'],['제 짐이 안 나왔어요.','je jimi an nawasseoyo','我的行李没有出来。'],['비행기가 지연됐어요?','bihaenggiga jiyeondwaesseoyo','航班延误了吗？'],['출구가 어디예요?','chulguga eodiyeyo','出口在哪里？']]
  },
  {title:'交通与打车',icon:'🚌',desc:'公交、出租车和T-money',phrases:[
    ['이 버스가 서귀포에 가요?','i beoseuga seogwipo-e gayo','这辆公交去西归浦吗？'],['어디에서 내려야 해요?','eodieseo naeryeoya haeyo','我应该在哪里下车？'],['도착하면 알려 주세요.','dochakamyeon allyeo juseyo','到了请告诉我。'],['이 주소로 가 주세요.','i jusoro ga juseyo','请去这个地址。'],['여기에서 세워 주세요.','yeogieseo sewo juseyo','请在这里停车。'],['택시를 불러 주세요.','taeksireul bulleo juseyo','请帮我叫出租车。'],['예상 요금이 얼마예요?','yesang yogeumi eolmayeyo','预计车费多少？'],['카드로 결제할게요.','kadeuro gyeoljehalgeyo','我用卡支付。'],['티머니 카드 있어요?','timeoni kadeu isseoyo','有T-money卡吗？'],['삼만 원 충전해 주세요.','samman won chungjeonhae juseyo','请充值3万韩元。'],['잔액을 확인해 주세요.','janaegeul hwaginhae juseyo','请帮我查一下余额。'],['갈아타야 해요?','garataya haeyo','需要换乘吗？']]
  },
  {title:'问路与导航',icon:'🧭',desc:'找入口、车站、洗手间',phrases:[
    ['여기가 맞아요?','yeogiga majayo','是这里吗？'],['어떻게 가요?','eotteoke gayo','怎么去？'],['걸어서 갈 수 있어요?','georeoseo gal su isseoyo','可以步行过去吗？'],['여기에서 멀어요?','yeogieseo meoreoyo','离这里远吗？'],['가장 가까운 버스 정류장이 어디예요?','gajang gakkaun beoseu jeongnyujangi eodiyeyo','最近的公交站在哪里？'],['입구가 어디예요?','ipguga eodiyeyo','入口在哪里？'],['화장실이 어디예요?','hwajangsiri eodiyeyo','洗手间在哪里？'],['엘리베이터가 어디예요?','ellibeiteoga eodiyeyo','电梯在哪里？'],['길을 잃었어요.','gireul ireosseoyo','我迷路了。'],['이 주소가 맞는지 봐 주세요.','i jusoga manneunji bwa juseyo','请帮我看看这个地址对不对。']]
  },
  {title:'酒店与行李',icon:'🏨',desc:'入住、寄存及房间需求',phrases:[
    ['예약했어요.','yeyakaesseoyo','我预订了。'],['세 명으로 예약했어요.','se myeongeuro yeyakaesseoyo','预订的是三个人。'],['여권 여기 있어요.','yeogwon yeogi isseoyo','护照在这里。'],['체크인할게요.','chekeuinhalgeyo','我要办理入住。'],['체크아웃은 몇 시예요?','chekeuauteun myeot sieyo','几点退房？'],['짐을 먼저 맡길 수 있어요?','jimeul meonjeo matgil su isseoyo','可以先寄存行李吗？'],['체크아웃 후에 짐을 맡겨도 돼요?','chekeuaut hue jimeul matgyeodo dwaeyo','退房后可以寄存行李吗？'],['침대가 세 개 맞아요?','chimdaega se gae majayo','确定是三张床吗？'],['수건을 더 받을 수 있어요?','sugeoneul deo badeul su isseoyo','可以多给几条毛巾吗？'],['와이파이 비밀번호가 뭐예요?','waipai bimilbeonhoga mwoyeyo','Wi-Fi密码是什么？'],['방에 문제가 있어요.','bange munjega isseoyo','房间有问题。'],['에어컨이 작동하지 않아요.','eeokeoni jakdonghaji anayo','空调不能使用。']]
  },
  {title:'餐厅点餐',icon:'🍲',desc:'等位、点餐、口味和结账',phrases:[
    ['세 명 자리 있어요?','se myeong jari isseoyo','有三个人的位置吗？'],['얼마나 기다려야 해요?','eolmana gidaryeoya haeyo','需要等多久？'],['메뉴판 주세요.','menyupan juseyo','请给我菜单。'],['추천 메뉴가 뭐예요?','chucheon menyuga mwoyeyo','有什么推荐菜？'],['이건 뭐예요?','igeon mwoyeyo','这是什么？'],['이거 하나 주세요.','igeo hana juseyo','请给我一份这个。'],['세 명이 먹기에 충분해요?','se myeongi meokgie chungbunhaeyo','够三个人吃吗？'],['안 맵게 해 주세요.','an maepge hae juseyo','请做得不辣。'],['조금만 맵게 해 주세요.','jogeumman maepge hae juseyo','请做微辣。'],['고수 빼 주세요.','gosu ppae juseyo','请不要放香菜。'],['알레르기가 있어요.','allereugiga isseoyo','我有食物过敏。'],['물 좀 주세요.','mul jom juseyo','请给我一些水。'],['포장해 주세요.','pojanghae juseyo','请帮我打包。'],['계산해 주세요.','gyesanhae juseyo','请结账。'],['따로 계산할게요.','ttaro gyesanhalgeyo','我们分开付款。'],['같이 계산할게요.','gachi gyesanhalgeyo','我们一起付款。']]
  },
  {title:'咖啡馆与便利店',icon:'☕',desc:'点饮料、加热和日常采购',phrases:[
    ['아이스 아메리카노 한 잔 주세요.','aiseu amerikano han jan juseyo','请给我一杯冰美式。'],['여기서 마실게요.','yeogiseo masilgeyo','在这里喝。'],['포장할게요.','pojanghalgeyo','我要外带。'],['덜 달게 해 주세요.','deol dalge hae juseyo','请少糖。'],['얼음 빼 주세요.','eoreum ppae juseyo','请去冰。'],['데워 주세요.','dewo juseyo','请帮我加热。'],['뜨거운 물을 받을 수 있어요?','tteugeoun mureul badeul su isseoyo','可以接热水吗？'],['충전기 있어요?','chungjeongi isseoyo','有充电器吗？'],['보조 배터리 있어요?','bojo baeteori isseoyo','有充电宝吗？'],['봉투 하나 주세요.','bongtu hana juseyo','请给我一个袋子。']]
  },
  {title:'购物与Vintage店',icon:'🛍',desc:'尺码、试穿、瑕疵和退换',phrases:[
    ['이거 얼마예요?','igeo eolmayeyo','这个多少钱？'],['다른 색도 있어요?','dareun saekdo isseoyo','还有其他颜色吗？'],['더 큰 사이즈 있어요?','deo keun saijeu isseoyo','有更大的尺码吗？'],['더 작은 사이즈 있어요?','deo jageun saijeu isseoyo','有更小的尺码吗？'],['입어 봐도 돼요?','ibeo bwado dwaeyo','可以试穿吗？'],['거울이 어디예요?','geouri eodiyeyo','镜子在哪里？'],['새 상품 있어요?','sae sangpum isseoyo','有全新未拆的商品吗？'],['빈티지 제품이에요?','bintiji jepumieyo','这是Vintage商品吗？'],['하자가 있어요?','hajaga isseoyo','有瑕疵吗？'],['할인돼요?','harindwaeyo','可以优惠吗？'],['교환이나 환불이 돼요?','gyohwanina hwanburi dwaeyo','可以退换吗？'],['이걸로 할게요.','igeollo halgeyo','我要这个。']]
  },
  {title:'付款与退税',icon:'💳',desc:'刷卡、现金、收据及退税',phrases:[
    ['카드 돼요?','kadeu dwaeyo','可以刷卡吗？'],['현금만 가능해요?','hyeongeumman ganeunghaeyo','只能付现金吗？'],['비자 카드 돼요?','bija kadeu dwaeyo','可以刷Visa卡吗？'],['이 카드로 다시 해 주세요.','i kadeuro dasi hae juseyo','请换这张卡再试一次。'],['영수증 주세요.','yeongsujeung juseyo','请给我收据。'],['택스 리펀드 돼요?','taekseu ripeondeu dwaeyo','可以退税吗？'],['즉시 환급이 돼요?','jeuksi hwangeubi dwaeyo','可以现场退税吗？'],['여권이 필요해요?','yeogwoni piryohaeyo','需要护照吗？'],['가격이 잘못된 것 같아요.','gagyeogi jalmotdoen geot gatayo','价格好像不对。'],['결제가 두 번 됐어요.','gyeoljega du beon dwaesseoyo','被扣款两次了。']]
  },
  {title:'景点与门票',icon:'🎟',desc:'开放时间、购票、寄存和拍照',phrases:[
    ['표 세 장 주세요.','pyo se jang juseyo','请给我三张票。'],['온라인으로 예약했어요.','onllaineuro yeyakaesseoyo','我在网上预订了。'],['예약 번호는 여기 있어요.','yeyak beonhoneun yeogi isseoyo','预约号码在这里。'],['몇 시에 문을 닫아요?','myeot sie muneul dadayo','几点关门？'],['마지막 입장은 몇 시예요?','majimak ipjangeun myeot sieyo','最晚几点入场？'],['관람하는 데 얼마나 걸려요?','gwallamhaneun de eolmana geollyeoyo','参观需要多久？'],['짐 보관함이 있어요?','jim bogwanhami isseoyo','有行李寄存柜吗？'],['사진을 찍어도 돼요?','sajineul jjigeodo dwaeyo','可以拍照吗？'],['비가 와도 운영해요?','biga wado unyeonghaeyo','下雨也营业吗？'],['오늘 휴무예요?','oneul hyumuyeyo','今天休息吗？']]
  },
  {title:'牛岛、船班与天气',icon:'⛴',desc:'济州岛最容易临时变化的场景',phrases:[
    ['우도 가는 배는 어디에서 타요?','udo ganeun baeneun eodieseo tayo','去牛岛的船在哪里坐？'],['다음 배는 몇 시예요?','daeum baeneun myeot sieyo','下一班船几点？'],['마지막 배는 몇 시예요?','majimak baeneun myeot sieyo','末班船几点？'],['왕복표 세 장 주세요.','wangbokpyo se jang juseyo','请给我三张往返票。'],['여권이 필요해요?','yeogwoni piryohaeyo','需要护照吗？'],['오늘 배가 운항해요?','oneul baega unhanghaeyo','今天船正常运行吗？'],['바람 때문에 취소됐어요?','baram ttaemune chwisodwaesseoyo','因为风大取消了吗？'],['멀미약 있어요?','meollimyak isseoyo','有晕船药吗？'],['쾌속보트는 어디에서 예약해요?','kwaesokboteuneun eodieseo yeyakaeyo','快艇在哪里预约？'],['날씨가 안 좋으면 환불돼요?','nalssiga an joeumyeon hwanbuldwaeyo','天气不好可以退款吗？']]
  },
  {title:'体验项目与安全',icon:'🏇',desc:'潜水艇、骑马、山地车与射击',phrases:[
    ['세 명 예약하고 싶어요.','se myeong yeyakhago sipeoyo','想预约三个人。'],['초보자도 할 수 있어요?','chobojado hal su isseoyo','初学者也可以参加吗？'],['중국어 설명이 있어요?','junggugeo seolmyeongi isseoyo','有中文说明吗？'],['안전 교육이 있어요?','anjeon gyoyugi isseoyo','有安全培训吗？'],['장비가 포함되어 있어요?','jangbiga pohamdoeeo isseoyo','包含装备吗？'],['옷을 갈아입어야 해요?','oseul garaibeoya haeyo','需要换衣服吗？'],['짐은 어디에 보관해요?','jimeun eodie bogwanhaeyo','行李放在哪里？'],['사진이나 영상을 찍어 주세요.','sajinina yeongsangeul jjigeo juseyo','请帮我们拍照或录像。'],['무서우면 중간에 멈출 수 있어요?','museoumyeon junggan-e meomchul su isseoyo','害怕的话可以中途停止吗？'],['두 명이 같이 탈 수 있어요?','du myeongi gachi tal su isseoyo','两个人可以一起乘坐吗？'],['몸무게 제한이 있어요?','mommuge jehani isseoyo','有体重限制吗？'],['부상을 입었어요.','busangeul ibeosseoyo','我受伤了。']]
  },
  {title:'拍照、网络与联系',icon:'📱',desc:'合影、充电、Wi-Fi及联系商家',phrases:[
    ['사진 한 장 찍어 주실 수 있어요?','sajin han jang jjigeo jusil su isseoyo','可以帮我们拍一张照片吗？'],['세 명 다 나오게 찍어 주세요.','se myeong da naoge jjigeo juseyo','请把我们三个人都拍进去。'],['세로로 찍어 주세요.','seroro jjigeo juseyo','请竖着拍。'],['한 장 더 찍어 주세요.','han jang deo jjigeo juseyo','请再拍一张。'],['와이파이를 사용할 수 있어요?','waipaireul sayonghal su isseoyo','可以使用Wi-Fi吗？'],['휴대폰을 충전해도 돼요?','hyudaeponeul chungjeonhaedo dwaeyo','可以给手机充电吗？'],['제 휴대폰으로 전화해 주세요.','je hyudaeponeuro jeonhwahae juseyo','请打我的手机。'],['기사님께 연락해 주세요.','gisanimkke yeollakae juseyo','请帮我联系司机。'],['예약을 확인해 주세요.','yeyageul hwaginhae juseyo','请帮我确认预约。'],['인터넷이 안 돼요.','inteoneti an dwaeyo','网络用不了。']]
  },
  {title:'身体不适与紧急求助',icon:'🩹',desc:'药店、医院、遗失和报警',phrases:[
    ['몸이 안 좋아요.','momi an joayo','我身体不舒服。'],['배가 아파요.','baega apayo','我肚子疼。'],['머리가 아파요.','meoriga apayo','我头疼。'],['멀미가 나요.','meolliga nayo','我晕车／晕船。'],['약국이 어디예요?','yakgugi eodiyeyo','药店在哪里？'],['병원에 가야 해요.','byeongwone gaya haeyo','我需要去医院。'],['구급차를 불러 주세요.','gugeupchareul bulleo juseyo','请叫救护车。'],['경찰에 신고해 주세요.','gyeongchare singohae juseyo','请帮我报警。'],['여권을 잃어버렸어요.','yeogwoneul ireobeoryeosseoyo','我的护照丢了。'],['휴대폰을 잃어버렸어요.','hyudaeponeul ireobeoryeosseoyo','我的手机丢了。'],['지갑을 두고 왔어요.','jigabeul dugo wasseoyo','我把钱包落下了。'],['보험사에 연락해야 해요.','boheomsa-e yeollakaeya haeyo','我需要联系保险公司。']]
  },
  {title:'问题处理与礼貌投诉',icon:'🧾',desc:'订单不符、退款与重新处理',phrases:[
    ['예약 내용과 달라요.','yeyak naeyonggwa dallayo','和预订内容不一样。'],['주문한 음식이 아니에요.','jumunhan eumsigi anieyo','这不是我点的餐。'],['이건 제가 주문하지 않았어요.','igeon jega jumunhaji anasseoyo','这个不是我点的。'],['다시 확인해 주세요.','dasi hwaginhae juseyo','请再确认一下。'],['바꿔 주실 수 있어요?','bakkwo jusil su isseoyo','可以帮我更换吗？'],['환불해 주세요.','hwanbulhae juseyo','请退款。'],['예약을 취소하고 싶어요.','yeyageul chwiso-hago sipeoyo','我想取消预约。'],['불만을 제기하려는 건 아니고, 확인하고 싶어요.','bulmaneul jegiharyeoneun geon anigo, hwaginhago sipeoyo','我不是想投诉，只是想确认一下。'],['매니저와 이야기할 수 있어요?','maenijeowa iyagihal su isseoyo','可以和负责人沟通吗？'],['어떻게 해결할 수 있어요?','eotteoke haegyeolhal su isseoyo','这个问题可以怎么解决？']]
  }
];

const previousLessons = [
  {title:'万能开口与友好表达',icon:'💬',desc:'礼貌开口、确认信息，也把喜欢说出来',phrases:[
    ['안녕하세요.','annyeonghaseyo','您好。'],
    ['감사합니다.','gamsahamnida','谢谢。'],
    ['죄송합니다.','joesonghamnida','对不起／不好意思。'],
    ['실례합니다.','sillyehamnida','打扰一下。'],
    ['괜찮아요.','gwaenchanayo','没关系／可以。'],
    ['네, 맞아요.','ne, majayo','对，是的。'],
    ['아니요, 괜찮아요.','aniyo, gwaenchanayo','不用了，谢谢。'],
    ['잠시만요.','jamsimanyo','请稍等一下。'],
    ['알겠어요.','algesseoyo','我明白了。'],
    ['도와주세요.','dowajuseyo','请帮帮我。'],
    ['잘 모르겠어요.','jal moreugesseoyo','我不太清楚／不太明白。'],
    ['한국어를 잘 못해요.','hangugeoreul jal motaeyo','我韩语不太好。'],
    ['이게 맞아요?','ige majayo','是这个吗？'],
    ['번역기로 보여 드릴게요.','beonyeokgiro boyeo deurilgeyo','我用翻译软件给您看。'],
    ['제주도는 정말 아름다워요.','jejudoneun jeongmal areumdawoyo','济州岛真的很美。'],
    ['제주도 사람들은 정말 친절해요.','jejudo saramdeureun jeongmal chinjeolhaeyo','济州岛的人们真的很友善。'],
    ['정말 예쁘고 친절하세요.','jeongmal yeppeugo chinjeolhaseyo','您很漂亮，也很友善。'],
    ['정말 잘생기고 친절하세요.','jeongmal jalsaenggigo chinjeolhaseyo','您很帅气，也很友善。'],
    ['제주도가 정말 좋아요.','jejudoga jeongmal joayo','我真的很喜欢济州岛。']
  ]},
  {title:'问路、公交与打车',icon:'🚌',desc:'找到方向、乘车并顺利抵达目的地',phrases:[
    ['여기는 어디예요?','yeogineun eodiyeyo','这里是哪里？'],
    ['거기까지 어떻게 가요?','geogikkaji eotteoke gayo','到那里怎么走？'],
    ['이쪽으로 가면 돼요?','ijjogeuro gamyeon dwaeyo','往这边走就可以吗？'],
    ['걸어서 갈 수 있어요?','georeoseo gal su isseoyo','可以步行过去吗？'],
    ['가장 가까운 버스 정류장이 어디예요?','gajang gakkaun beoseu jeongnyujangi eodiyeyo','最近的公交站在哪里？'],
    ['입구가 어디예요?','ipguga eodiyeyo','入口在哪里？'],
    ['출구가 어디예요?','chulguga eodiyeyo','出口在哪里？'],
    ['화장실이 어디예요?','hwajangsiri eodiyeyo','洗手间在哪里？'],
    ['어디에서 타요?','eodieseo tayo','在哪里上车？'],
    ['어디에서 내려야 해요?','eodieseo naeryeoya haeyo','应该在哪里下车？'],
    ['도착하면 알려 주세요.','dochakamyeon allyeo juseyo','到了请告诉我。'],
    ['갈아타야 해요?','garataya haeyo','需要换乘吗？'],
    ['이 주소로 가 주세요.','i jusoro ga juseyo','请去这个地址。'],
    ['여기에서 세워 주세요.','yeogieseo sewo juseyo','请在这里停车。'],
    ['요금이 얼마예요?','yogeumi eolmayeyo','费用是多少？']
  ]},
  {title:'机场、酒店与行李',icon:'🏨',desc:'值机、入住、寄存和房间沟通',phrases:[
    ['체크인은 어디에서 해요?','chekeuineun eodieseo haeyo','在哪里办理值机？'],
    ['이 짐을 부칠게요.','i jimeul buchilgeyo','我要托运这件行李。'],
    ['이걸 기내에 가져가도 돼요?','igeol ginaee gajyeogado dwaeyo','这个可以带上飞机吗？'],
    ['탑승구가 어디예요?','tapseungguga eodiyeyo','登机口在哪里？'],
    ['제주도로 여행 왔어요.','jejudoro yeohaeng wasseoyo','我们是来济州岛旅游的。'],
    ['호텔 예약 확인서예요.','hotel yeyak hwaginseoyeyo','这是酒店预订单。'],
    ['저희가 예약했어요.','jeohuiga yeyakaesseoyo','我们预订了。'],
    ['저희 세 명이에요.','jeohui se myeongieyo','我们三个人。'],
    ['여권 여기 있어요.','yeogwon yeogi isseoyo','护照在这里。'],
    ['체크인할게요.','chekeuinhalgeyo','我要办理入住。'],
    ['체크아웃 후에도 맡길 수 있어요?','chekeuaut huedo matgil su isseoyo','退房后也可以寄存吗？'],
    ['와이파이 비밀번호가 뭐예요?','waipai bimilbeonhoga mwoyeyo','Wi-Fi密码是什么？'],
    ['방에 문제가 있어요.','bange munjega isseoyo','房间有问题。'],
    ['이게 작동하지 않아요.','ige jakdonghaji anayo','这个不能使用。']
  ]},
  {title:'餐厅、咖啡馆与便利店',icon:'🍲',desc:'找座、点餐、调整口味和结账',phrases:[
    ['세 명 자리 있어요?','se myeong jari isseoyo','有三个人的位置吗？'],
    ['얼마나 기다려야 해요?','eolmana gidaryeoya haeyo','需要等多久？'],
    ['메뉴판 주세요.','menyupan juseyo','请给我菜单。'],
    ['추천 메뉴가 뭐예요?','chucheon menyuga mwoyeyo','有什么推荐菜？'],
    ['이거 하나 주세요.','igeo hana juseyo','请给我一份这个。'],
    ['그거 세 개 주세요.','geugeo se gae juseyo','请给我三个那个。'],
    ['이건 매워요?','igeon maewoyo','这个辣吗？'],
    ['조금만 맵게 해 주세요.','jogeumman maepge hae juseyo','请做微辣。'],
    ['여기서 먹을게요.','yeogiseo meogeulgeyo','我们在这里吃。'],
    ['포장할게요.','pojanghalgeyo','我要外带。'],
    ['계산해 주세요.','gyesanhae juseyo','请结账。'],
    ['같이 계산할게요.','gachi gyesanhalgeyo','我们一起付款。'],
    ['덜 달게 해 주세요.','deol dalge hae juseyo','请少糖。'],
    ['얼음 빼 주세요.','eoreum ppae juseyo','请去冰。'],
    ['이거 데워 주세요.','igeo dewo juseyo','请帮我加热这个。'],
    ['봉투 하나 주세요.','bongtu hana juseyo','请给我一个袋子。'],
    ['고수는 빼 주세요.','gosuneun ppae juseyo','请不要加香菜。'],
    ['이거 정말 맛있어요.','igeo jeongmal masisseoyo','这个真的很好吃。'],
    ['다른 사람들에게 이 식당을 추천할게요.','dareun saramdeurege i sikdangeul chucheonhalgeyo','我会向大家推荐你们这家店。']
  ]},
  {title:'购物、Vintage店与退税',icon:'🛍',desc:'试穿、讲价、付款和表达祝福',phrases:[
    ['이거 얼마예요?','igeo eolmayeyo','这个多少钱？'],
    ['다른 색도 있어요?','dareun saekdo isseoyo','还有其他颜色吗？'],
    ['이것보다 큰 거 있어요?','igeotboda keun geo isseoyo','有比这个更大的吗？'],
    ['이것보다 작은 거 있어요?','igeotboda jageun geo isseoyo','有比这个更小的吗？'],
    ['이 사이즈 있어요?','i saijeu isseoyo','有这个尺码吗？'],
    ['이거 입어 봐도 돼요?','igeo ibeo bwado dwaeyo','可以试穿这个吗？'],
    ['거울이 어디예요?','geouri eodiyeyo','镜子在哪里？'],
    ['빈티지 제품이에요?','bintiji jepumieyo','这是Vintage商品吗？'],
    ['여기에 하자가 있어요?','yeogie hajaga isseoyo','这里有瑕疵吗？'],
    ['할인돼요?','harindwaeyo','可以优惠吗？'],
    ['이걸로 할게요.','igeollo halgeyo','我要这个。'],
    ['현금만 가능해요?','hyeongeumman ganeunghaeyo','只能付现金吗？'],
    ['영수증 주세요.','yeongsujeung juseyo','请给我收据。'],
    ['택스 리펀드 돼요?','taekseu ripeondeu dwaeyo','可以退税吗？'],
    ['즉시 환급이 돼요?','jeuksi hwangeubi dwaeyo','可以现场退税吗？'],
    ['정말 사고 싶어요. 조금만 더 싸게 해 주실 수 있어요?','jeongmal sago sipeoyo, jogeumman deo ssage hae jusil su isseoyo','我是真心想买，可以再便宜一点吗？'],
    ['이것도 인연이라고 생각해요.','igeotdo inyeonirago saenggakaeyo','我相信这也是一种缘分。'],
    ['장사 잘되시길 바랄게요.','jangsa jaldoesigil baralgeyo','祝您店铺生意兴隆。']
  ]},
  {title:'景点、牛岛与体验项目',icon:'⛴',desc:'门票、预约、船班、天气和游玩体验',phrases:[
    ['표 세 장 주세요.','pyo se jang juseyo','请给我三张票。'],
    ['온라인으로 예약했어요.','onllaineuro yeyakaesseoyo','我们在网上预订了。'],
    ['몇 시에 문을 닫아요?','myeot sie muneul dadayo','几点关门？'],
    ['마지막 입장은 몇 시예요?','majimak ipjangeun myeot sieyo','最晚几点入场？'],
    ['얼마나 걸려요?','eolmana geollyeoyo','大约需要多长时间？'],
    ['짐 보관함이 있어요?','jim bogwanhami isseoyo','有行李寄存柜吗？'],
    ['사진을 찍어도 돼요?','sajineul jjigeodo dwaeyo','可以拍照吗？'],
    ['비가 와도 운영해요?','biga wado unyeonghaeyo','下雨也营业吗？'],
    ['오늘 휴무예요?','oneul hyumuyeyo','今天休息吗？'],
    ['세 명 예약하고 싶어요.','se myeong yeyakhago sipeoyo','想预约三个人。'],
    ['지금 할 수 있어요?','jigeum hal su isseoyo','现在可以体验吗？'],
    ['몇 시에 시작해요?','myeot sie sijakaeyo','几点开始？'],
    ['초보자도 할 수 있어요?','chobojado hal su isseoyo','新手也可以参加吗？'],
    ['중국어 설명이 있어요?','junggugeo seolmyeongi isseoyo','有中文说明吗？'],
    ['안전 교육이 있어요?','anjeon gyoyugi isseoyo','有安全培训吗？'],
    ['장비가 포함되어 있어요?','jangbiga pohamdoeeo isseoyo','包含装备吗？'],
    ['옷을 갈아입어야 해요?','oseul garaibeoya haeyo','需要换衣服吗？'],
    ['짐은 어디에 보관해요?','jimeun eodie bogwanhaeyo','行李放在哪里？'],
    ['사진이나 영상을 찍어 주세요.','sajinina yeongsangeul jjigeo juseyo','请帮我们拍照或录像。'],
    ['우도 가는 배는 어디에서 타요?','udo ganeun baeneun eodieseo tayo','去牛岛的船在哪里坐？'],
    ['다음 배는 몇 시예요?','daeum baeneun myeot sieyo','下一班船几点？'],
    ['마지막 배는 몇 시예요?','majimak baeneun myeot sieyo','末班船几点？'],
    ['왕복표 세 장 주세요.','wangbokpyo se jang juseyo','请给我三张往返票。'],
    ['오늘 배가 운항해요?','oneul baega unhanghaeyo','今天正常开船吗？'],
    ['멀미약 있어요?','meollimyak isseoyo','有晕船药吗？'],
    ['날씨가 안 좋으면 어떻게 해요?','nalssiga an joeumyeon eotteoke haeyo','天气不好怎么办？'],
    ['취소하면 환불돼요?','chwisohamyeon hwanbuldwaeyo','取消的话可以退款吗？'],
    ['이거 정말 재미있어요.','igeo jeongmal jaemiisseoyo','这个真的很好玩。'],
    ['정말 즐거웠어요.','jeongmal jeulgeowosseoyo','我玩得非常开心。']
  ]},
  {title:'拍照、身体不适与问题处理',icon:'📱',desc:'联系、遗失、取消和处理异常情况',phrases:[
    ['저희 사진 좀 찍어 주세요.','jeohui sajin jom jjigeo juseyo','请帮我们拍张照片。'],
    ['한 장 더 찍어 주세요.','han jang deo jjigeo juseyo','请再拍一张。'],
    ['와이파이를 사용할 수 있어요?','waipaireul sayonghal su isseoyo','可以使用Wi-Fi吗？'],
    ['예약을 확인해 주세요.','yeyageul hwaginhae juseyo','请帮我确认预约。'],
    ['몸이 안 좋아요.','momi an joayo','我身体不舒服。'],
    ['멀미가 나요.','meolliga nayo','我晕车／晕船。'],
    ['다쳤어요.','dachyeosseoyo','我受伤了。'],
    ['여권을 잃어버렸어요.','yeogwoneul ireobeoryeosseoyo','我的护照丢了。'],
    ['휴대폰을 잃어버렸어요.','hyudaeponeul ireobeoryeosseoyo','我的手机丢了。'],
    ['이게 없어졌어요.','ige eopseojyeosseoyo','这个不见了。'],
    ['예약한 것과 달라요.','yeyakhan geotgwa dallayo','和预订的不一样。'],
    ['이건 제가 주문한 게 아니에요.','igeon jega jumunhan ge anieyo','这不是我点的。'],
    ['예약을 취소하고 싶어요.','yeyageul chwisohago sipeoyo','我想取消预约。'],
    ['담당자와 이야기할 수 있어요?','damdangjawa iyagihal su isseoyo','可以和负责人沟通吗？'],
    ['어떻게 해결할 수 있어요?','eotteoke haegyeolhal su isseoyo','这个问题可以怎么解决？'],
    ['이것 좀 도와주세요.','igeot jom dowajuseyo','请帮我处理一下这个。']
  ]}
];

// All edit numbers refer to the original chapter positions, before any removal.
const removedPhraseNumbers=[
  [18], [3,4,5,10,15], [3,6,7,13,14], [8,12,13,19],
  [5,8,9,10,13,16,17], [2,3,4,5,7,8,9,10,12,13,14,15,16,17,18,20,21,22,23,24,26]
];
const revisedPhrases={
  '4-11':['정말 사고 싶어요. 할인해 주실 수 있어요?','jeongmal sago sipeoyo. harinhae jusil su isseoyo','我是真心想买，可以优惠吗？'],
  '4-17':['장사 잘되시길 바랄게요.','jangsa jaldoesigil baralgeyo','祝您生意兴隆。'],
  '5-18':['저희 사진 좀 찍어 주실 수 있어요?','jeohui sajin jom jjigeo jusil su isseoyo','可以帮我们拍照吗？']
};
const phraseOrigins=[];
const lessons=previousLessons.slice(0,6).map((lesson,li)=>{
  const phrases=[];phraseOrigins[li]=[];
  lesson.phrases.forEach((phrase,pi)=>{
    if(removedPhraseNumbers[li].includes(pi+1))return;
    const oldId=`${li}-${pi}`;phrases.push(revisedPhrases[oldId]||phrase);phraseOrigins[li].push(oldId);
  });
  return {...lesson,phrases};
});
function appendPhrase(li,phrase,origin=null){lessons[li].phrases.push(phrase);phraseOrigins[li].push(origin)}
appendPhrase(2,['창밖 경치가 좋고 조용한 방으로 주세요.','changbak gyeongchiga jotgo joyonghan bangeuro juseyo','请给一间窗外风景好又安静的房间。']);
appendPhrase(4,['이십 퍼센트 할인해 주실 수 있어요?','isip peosenteu harinhae jusil su isseoyo','可以8折吗？']);
appendPhrase(4,['십 퍼센트 할인해 주실 수 있어요?','sip peosenteu harinhae jusil su isseoyo','可以9折吗？']);
appendPhrase(4,['부탁드려요. 이 가격에 해 주실 수 있어요?','butakdeuryeoyo. i gagyeoge hae jusil su isseoyo','拜托，这个价格可以吗？']);
appendPhrase(5,previousLessons[6].phrases[14],'6-14');
appendPhrase(5,previousLessons[6].phrases[15],'6-15');
lessons[5].desc='门票、寄存、拍照、游玩感受与问题求助';
const storagePrefix = 'jeju.v3';
// Migrate device-local progress by original identity, never by the new position.
if(localStorage.getItem(`${storagePrefix}.migrated`)!=='true'){
  const readOld=key=>{try{return JSON.parse(localStorage.getItem(`jeju.v2.${key}`)||'[]')}catch{return []}};
  for(const key of ['learned','favorites']){
    const old=new Set(readOld(key)),next=[];
    phraseOrigins.forEach((origins,li)=>origins.forEach((id,pi)=>{
      if(old.has(id)&&(key==='favorites'||!revisedPhrases[id]))next.push(`${li}-${pi}`);
    }));
    localStorage.setItem(`${storagePrefix}.${key}`,JSON.stringify(next));
  }
  for(const key of ['meaning','roman']){
    const value=localStorage.getItem(`jeju.v2.${key}`);if(value!==null)localStorage.setItem(`${storagePrefix}.${key}`,value);
  }
  const oldLesson=Number(localStorage.getItem('jeju.v2.lesson')||0);
  localStorage.setItem(`${storagePrefix}.lesson`,String(Math.min(5,Math.max(0,oldLesson))));
  localStorage.setItem(`${storagePrefix}.completed`,JSON.stringify(readOld('completed').filter(day=>['0','1','3'].includes(String(day)))));
  localStorage.setItem(`${storagePrefix}.migrated`,'true');
}
// Remove chapter 4's seventh card and shift its saved markers only once.
lessons[3].phrases.splice(6,1);
if(localStorage.getItem(`${storagePrefix}.restaurant-trim`)!=='true'){
  for(const key of ['learned','favorites']){
    const saved=JSON.parse(localStorage.getItem(`${storagePrefix}.${key}`)||'[]');
    const mapped=saved.filter(id=>id!=='3-6').map(id=>{
      const [li,pi]=id.split('-').map(Number);return li===3&&pi>6?`3-${pi-1}`:id;
    });
    localStorage.setItem(`${storagePrefix}.${key}`,JSON.stringify(mapped));
  }
  localStorage.setItem(`${storagePrefix}.restaurant-trim`,'true');
}
const state = {
  lesson: Number(localStorage.getItem(`${storagePrefix}.lesson`) || 0),
  learned: new Set(JSON.parse(localStorage.getItem(`${storagePrefix}.learned`) || '[]')),
  favorites: new Set(JSON.parse(localStorage.getItem(`${storagePrefix}.favorites`) || '[]')),
  completed: new Set(JSON.parse(localStorage.getItem(`${storagePrefix}.completed`) || '[]')),
  showMeaning: localStorage.getItem(`${storagePrefix}.meaning`) !== 'false',
  showRoman: localStorage.getItem(`${storagePrefix}.roman`) !== 'false'
};
if(state.lesson >= lessons.length) state.lesson = 0;
const total = lessons.reduce((n,l)=>n+l.phrases.length,0);
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const phraseId = (li,pi)=>`${li}-${pi}`;
const persist = () => {
  localStorage.setItem(`${storagePrefix}.lesson`,state.lesson);
  localStorage.setItem(`${storagePrefix}.learned`,JSON.stringify([...state.learned]));
  localStorage.setItem(`${storagePrefix}.favorites`,JSON.stringify([...state.favorites]));
  localStorage.setItem(`${storagePrefix}.completed`,JSON.stringify([...state.completed]));
  localStorage.setItem(`${storagePrefix}.meaning`,state.showMeaning);
  localStorage.setItem(`${storagePrefix}.roman`,state.showRoman);
};
let koreanVoices=[];
function refreshKoreanVoices(){
  if(!('speechSynthesis' in window))return;
  const score=voice=>{
    const name=voice.name.toLowerCase();let points=0;
    if(/yuna|sunhi|sora|heami|google.*한국/.test(name))points+=10;
    if(/premium|enhanced|natural/.test(name))points+=7;
    if(voice.localService)points+=3;
    if(/child|junior|어린이/.test(name))points-=10;
    return points;
  };
  koreanVoices=speechSynthesis.getVoices().filter(v=>v.lang.toLowerCase().startsWith('ko')).sort((a,b)=>score(b)-score(a));
}
if('speechSynthesis' in window){refreshKoreanVoices();speechSynthesis.addEventListener?.('voiceschanged',refreshKoreanVoices)}
function makeUtterance(text,rate=.82){
  const u=new SpeechSynthesisUtterance(text);u.lang='ko-KR';u.rate=rate;u.pitch=.98;u.volume=1;
  refreshKoreanVoices();if(koreanVoices[0])u.voice=koreanVoices[0];
  return u;
}
let activeUtterance=null,speechTimer=null;
function speak(text,onend,rate=.84,onstart){
  if(!('speechSynthesis' in window)){toast('当前浏览器不支持语音播放');return;}
  clearTimeout(speechTimer);speechSynthesis.cancel();
  const utterance=makeUtterance(text,rate);activeUtterance=utterance;
  utterance.onstart=()=>{if(onstart)onstart()};
  utterance.onend=()=>{if(activeUtterance!==utterance)return;activeUtterance=null;if(onend)onend()};
  utterance.onerror=event=>{if(activeUtterance===utterance)activeUtterance=null;if(!['interrupted','canceled'].includes(event.error))toast('播放失败，请再点一次')};
  // 手机浏览器会拦截脱离点击事件后才开始的语音，因此始终在本次操作中立即播放。
  speechSynthesis.resume();speechSynthesis.speak(utterance);
}
function readableRoman(text){
  const initials=['g','kk','n','d','tt','r','m','b','pp','s','ss','','j','jj','ch','k','t','p','h'];
  const vowels=['a','ae','ya','yae','eo','e','yeo','ye','o','wa','wae','oe','yo','u','wo','we','wi','yu','eu','ui','i'];
  const finals=['','k','k','k','n','n','n','t','l','k','m','p','l','l','p','l','m','p','p','t','t','ng','t','t','k','t','p','h'];
  const moved=['','g','kk','s','n','j','n','d','r','g','m','b','s','t','p','h','m','b','s','s','ss','ng','j','ch','k','t','p',''];
  const kept=['','','','g','','n','','','', 'l','l','l','l','l','l','l','','','b','','','','','','','','',''];
  const out=[];let pendingOnset='';
  for(let i=0;i<text.length;i++){
    const code=text.charCodeAt(i);
    if(code>=0xAC00&&code<=0xD7A3){
      const n=code-0xAC00, ini=Math.floor(n/588), vowel=Math.floor((n%588)/28), fin=n%28;
      let onset=pendingOnset||initials[ini],coda=finals[fin],next=text.charCodeAt(i+1),nextIni=-1;pendingOnset='';
      if(next>=0xAC00&&next<=0xD7A3)nextIni=Math.floor((next-0xAC00)/588);
      if(fin&&nextIni===11&&fin!==21){coda=kept[fin]||'';pendingOnset=moved[fin]||''}
      if((fin===17||fin===18)&&[2,6].includes(nextIni))coda='m';
      if([1,2,3,24].includes(fin)&&[2,6].includes(nextIni))coda='ng';
      if(fin===27&&nextIni===11)coda='';
      out.push(onset+vowels[vowel]+coda);
    }else if(/[A-Za-z0-9]/.test(text[i])){
      let token=text[i];while(i+1<text.length&&/[A-Za-z0-9-]/.test(text[i+1]))token+=text[++i];out.push(token);
    }else if(/[,.?!]/.test(text[i])&&out.length){out[out.length-1]+=text[i];pendingOnset=''}
  }
  return out.join(' ').replace(/hap ni da/g,'ham ni da').replace(/seub ni da/g,'seum ni da');
}
const tokenGlossary={
  '안녕하세요':'您好／你好','감사합니다':'谢谢','죄송합니다':'对不起','실례합니다':'打扰一下','괜찮아요':'没关系／可以','네':'是','맞아요':'对的','아니요':'不是／不用','잠시만요':'请稍等','알겠어요':'明白了','도와주세요':'请帮帮我','잘':'好好地／很','모르겠어요':'不知道／不明白','한국어를':'韩语（动作对象）','못해요':'不会／做不好','이게':'这个（作主语）','번역기로':'用翻译软件','보여':'展示／给看','드릴게요':'我来为您……','제주도는':'济州岛（作为话题）','정말':'真的／非常','아름다워요':'很美','제주도':'济州岛','사람들은':'人们（作为话题）','친절해요':'很友善','예쁘고':'漂亮并且……','잘생기고':'帅气并且……','친절하세요':'您很友善','제주도가':'济州岛（作主语）','좋아요':'喜欢／很好',
  '여기는':'这里','어디예요':'是哪里','거기까지':'到那里','어떻게':'怎么／如何','가요':'去','이쪽으로':'往这边','가면':'如果去／走的话','돼요':'可以／行','걸어서':'走路／步行','갈':'要去的／可以去','수':'方法／可能性','있어요':'有／可以','가장':'最','가까운':'近的','버스':'公交车','정류장이':'车站（作主语）','입구가':'入口（作主语）','출구가':'出口（作主语）','화장실이':'洗手间（作主语）','어디에서':'在哪里','타요':'乘坐','내려야':'应该下车','해요':'做／需要','도착하면':'到达后／如果到了','알려':'告知','주세요':'请……','갈아타야':'需要换乘','이':'这个','주소로':'往这个地址','가':'去','여기에서':'在这里','세워':'停车','요금이':'费用（作主语）','얼마예요':'多少钱',
  '체크인은':'值机／入住（作为话题）','짐을':'行李（动作对象）','부칠게요':'我要托运','이걸':'这个（动作对象）','기내에':'在机舱内／带上飞机','가져가도':'即使带走／带着也','탑승구가':'登机口（作主语）','제주도로':'前往济州岛','여행':'旅行','왔어요':'来了','호텔':'酒店','예약':'预订','확인서예요':'是确认单','저희가':'我们（作主语，谦称）','예약했어요':'预订了','저희':'我们（谦称）','세':'三','명이에요':'是……人','여권':'护照','여기':'这里','체크인할게요':'我要办理入住','체크아웃':'退房','후에도':'之后也','맡길':'寄存／托管','와이파이':'Wi-Fi','비밀번호가':'密码（作主语）','뭐예요':'是什么','방에':'在房间里','문제가':'问题（作主语）','작동하지':'运作（用于否定）','않아요':'不／没有',
  '명':'人（计数单位）','자리':'座位','얼마나':'多少／多久','기다려야':'需要等待','메뉴판':'菜单','추천':'推荐','메뉴가':'菜品（作主语）','이거':'这个','하나':'一个／一份','그거':'那个','개':'个（计数单位）','이건':'这个（作为话题）','매워요':'辣','조금만':'只要一点','맵게':'做成辣味','여기서':'在这里','먹을게요':'我要吃／在这里吃','포장할게요':'我要打包／外带','계산해':'结账','같이':'一起','계산할게요':'我要付款','덜':'少一点','달게':'做得甜','얼음':'冰块','빼':'去掉','데워':'加热','봉투':'袋子','고수는':'香菜（作为话题）','맛있어요':'好吃','다른':'其他的','사람들에게':'向其他人','식당을':'餐厅（动作对象）','추천할게요':'我会推荐',
  '색도':'颜色也','이것보다':'比这个','큰':'大的','거':'东西／款式','작은':'小的','더':'更／再','사이즈':'尺码','입어':'穿','봐도':'试试看也','거울이':'镜子（作主语）','빈티지':'复古／Vintage','제품이에요':'是商品','여기에':'在这里','하자가':'瑕疵（作主语）','할인돼요':'可以打折','이걸로':'就用这个／选这个','할게요':'我要做／就选','현금만':'只有现金','가능해요':'可以／可行','영수증':'收据','택스':'税','리펀드':'退款／退税','즉시':'立即／现场','환급이':'退税返还（作主语）','사고':'购买并且……','싶어요':'想要','싸게':'便宜地','주실':'您可以给予','이것도':'这个也','인연이라고':'称为缘分／是缘分','생각해요':'认为／觉得','장사':'生意','잘되시길':'希望顺利兴旺','바랄게요':'我祝愿',
  '표':'票','장':'张（票的量词）','온라인으로':'通过网络','시에':'在……点','문을':'门（动作对象）','닫아요':'关闭','마지막':'最后','입장은':'入场（作为话题）','걸려요':'花费时间','짐':'行李','보관함이':'寄存柜（作主语）','사진을':'照片（动作对象）','찍어도':'拍摄也／可以拍','비가':'雨（作主语）','와도':'即使下雨','운영해요':'营业／运营','오늘':'今天','휴무예요':'休息／不营业','예약하고':'预约并且……','지금':'现在','시작해요':'开始','초보자도':'新手也','할':'要做的／能做的','중국어':'中文','설명이':'说明（作主语）','안전':'安全','교육이':'培训（作主语）','장비가':'装备（作主语）','포함되어':'包含在内','옷을':'衣服（动作对象）','갈아입어야':'需要换穿','짐은':'行李（作为话题）','어디에':'在哪里／到哪里','보관해요':'保管／寄存','사진이나':'照片或……','영상을':'视频（动作对象）','우도':'牛岛','가는':'前往……的','배는':'船（作为话题）','다음':'下一班／下一个','왕복표':'往返票','배가':'船（作主语）','운항해요':'航行／开船','멀미약':'晕车晕船药','날씨가':'天气（作主语）','안':'不','좋으면':'如果好／如果情况是……','취소하면':'如果取消','환불돼요':'可以退款','재미있어요':'有趣／好玩','즐거웠어요':'玩得很开心',
  '사진':'照片','한':'一','와이파이를':'Wi-Fi（动作对象）','사용할':'可以使用的','확인해':'确认','몸이':'身体（作主语）','멀미가':'晕动反应（作主语）','나요':'出现／发生','다쳤어요':'受伤了','여권을':'护照（动作对象）','잃어버렸어요':'弄丢了','휴대폰을':'手机（动作对象）','없어졌어요':'不见了','예약한':'预订的','것과':'和……内容','달라요':'不一样','제가':'我（作主语，谦称）','주문한':'点单的','게':'东西／事情','아니에요':'不是','취소하고':'取消并且……','담당자와':'和负责人','이야기할':'可以沟通的','해결할':'可以解决的','이것':'这个','해':'做／请做','몇':'几／多少','찍어':'拍摄','좀':'请／稍微（缓和语气）','예약을':'预约（动作对象）'
};
Object.assign(tokenGlossary,{
  '창밖':'窗外','경치가':'风景（作主语）','좋고':'好，而且……','조용한':'安静的','방으로':'安排为……房间',
  '할인해':'打折／优惠','이십':'二十','십':'十','퍼센트':'百分比','부탁드려요':'拜托您了（礼貌表达）','가격에':'以……价格'
});
function phraseTokens(text){return text.match(/[가-힣0-9A-Za-z-]+/g)||[]}
function tokenMeaning(token){
  if(tokenGlossary[token])return tokenGlossary[token];
  if(token.endsWith('주세요'))return '请帮我……（礼貌请求）';
  if(token.endsWith('예요')||token.endsWith('이에요'))return '是……（礼貌表达）';
  if(token.endsWith('어요')||token.endsWith('아요'))return '礼貌陈述或询问形式';
  if(token.endsWith('게요'))return '表示“我要／我会……”';
  if(token.endsWith('면'))return '如果……的话';
  if(token.endsWith('도'))return '也／即使……';
  return '结合整句理解';
}
const particleRules=[
  ['으로','方向／方式助词：往……、用……'],['에서','地点助词：在……做动作'],['에게','对象助词：向／给……'],
  ['까지','范围终点：到……为止'],['보다','比较助词：比……'],['은','主题助词：至于……'],['는','主题助词：至于……'],
  ['이','主语助词：……是／……有'],['가','主语助词：……是／……有'],['을','宾语助词：动作指向……'],['를','宾语助词：动作指向……'],
  ['에','地点／时间助词：在、去、到'],['로','方向／方式助词：往……、用……'],['도','也／即使'],['만','只／仅']
];
function tokenParts(token){
  const nouns={'제주도':'济州岛','한국어':'韩语','여기':'这里','거기':'那里','짐':'行李','여권':'护照','화장실':'洗手间','입구':'入口','출구':'出口','사진':'照片','주소':'地址','예약':'预订','고수':'香菜','방':'房间','사람들':'人们','와이파이':'Wi-Fi','메뉴':'菜品','요금':'费用','휴대폰':'手机','문제':'问题','비밀번호':'密码','보관함':'寄存柜','장비':'装备','설명':'说明','교육':'培训','배':'船','날씨':'天气','몸':'身体','이것':'这个','사이즈':'尺码','색':'颜色'};
  for(const [suffix,label] of particleRules){
    if(token.length>suffix.length&&token.endsWith(suffix)){
      const stem=token.slice(0,-suffix.length);
      if(nouns[stem])return `${stem}（${nouns[stem]}） + ${suffix}（${label}）`;
    }
  }
  const endings=[
    ['지 않아요','지 않아요（不……）'],['고 싶어요','고 싶어요（想要……）'],['아도 돼요','아/어도 돼요（可以……吗）'],
    ['어도 돼요','아/어도 돼요（可以……吗）'],['야 해요','아/어야 해요（必须／需要……）'],['주세요','주세요（请……）'],
    ['할게요','ㄹ/을게요（我要／我会……）'],['을게요','ㄹ/을게요（我要／我会……）'],['면','면（如果……）'],
    ['고','고（并且／然后）']
  ];
  for(const [suffix,label] of endings){
    if(token==='도와주세요')return '돕다（帮助）→ 도와 + 주세요（请帮我……）';
  }
  return '';
}
const hasEnding=(text,ending)=>phraseTokens(text).some(token=>token.endsWith(ending));
const grammarRulebook=[
  {test:t=>t.includes('퍼센트'),title:'折扣表达：说减去的百分比',body:'韩语用 할인 表示优惠：8折是减20%，所以说 이십 퍼센트 할인；9折是减10%，说 십 퍼센트 할인。',example:'이십＝20，십＝10。保留后面的 할인해 주실 수 있어요?，就能换一个折扣询问。'},
  {test:t=>t.includes('창밖'),title:'把两个房间要求连起来',body:'창밖 경치가 좋고＝窗外风景好，而且；조용한 방＝安静的房间。-고 连接两个要求，最后用 주세요 礼貌提出请求。',example:'조용한 방으로 주세요（请给我安静的房间）。去掉前面的景色要求，这句也能单独用。'},
  {test:t=>t.includes('이 가격에'),title:'指着价格提出请求',body:'이 가격＝这个价格，에 在这里表示“以这个价格”。해 주실 수 있어요?＝您能帮我这样安排吗？',example:'부탁드려요＝拜托您了。先出示价格，再说 이 가격에 해 주실 수 있어요? 即可。'},
  {test:t=>/주세요/.test(t),title:'礼貌请求：-아/어 주세요',body:'接在动作后，表示“请帮我……”。旅行时非常通用。',example:'물 주세요（水请给我）／사진 찍어 주세요（请帮我拍照）'},
  {test:t=>/아도 돼요|어도 돼요|가져가도/.test(t),title:'询问许可：-아/어도 돼요?',body:'表示“可以……吗？”。句末稍微上扬，就是礼貌询问。',example:'들어가도 돼요?（可以进去吗？）／사진 찍어도 돼요?（可以拍照吗？）'},
  {test:t=>/야 해요|내려야|갈아타야|기다려야|갈아입어야/.test(t),title:'确认需要：-아/어야 해요?',body:'表示“需要／必须……吗？”，适合确认规则和流程。',example:'예약해야 해요?（需要预约吗？）／여기서 내려야 해요?（要在这里下车吗？）'},
  {test:t=>/수 있어요/.test(t),title:'询问能否：-(으)ㄹ 수 있어요?',body:'表示“能……吗／可以……吗”，强调能力或客观条件。',example:'카드로 결제할 수 있어요?（可以刷卡吗？）'},
  {test:t=>/싶어요/.test(t),title:'表达想法：-고 싶어요',body:'接在动作后，表示“想做……”，比直接说“要”更柔和。',example:'이거 사고 싶어요（我想买这个）／먹고 싶어요（我想吃）'},
  {test:t=>/어디/.test(t),title:'询问地点：어디',body:'어디就是“哪里”。把想找的地点放在前面即可。',example:'화장실이 어디예요?（洗手间在哪里？）／입구가 어디예요?（入口在哪里？）'},
  {test:t=>/얼마예요/.test(t),title:'询问价格：얼마예요?',body:'表示“多少钱？”，前面加商品或费用即可。',example:'이거 얼마예요?（这个多少钱？）／요금이 얼마예요?（费用是多少？）'},
  {test:t=>phraseTokens(t).includes('있어요')&&!t.includes('수 있어요'),title:'表示“有”：있어요',body:'前面常用 이/가 标出“什么东西有”。升调可理解为“有吗？”。',example:'와이파이가 있어요?（有Wi-Fi吗？）／보관함이 있어요?（有寄存柜吗？）'},
  {test:t=>/이에요|예요/.test(t),title:'表示“是”：이에요／예요',body:'名词末尾有收音时多用 이에요，没有收音时多用 예요。',example:'예약 확인서예요（是预订确认单）／휴무예요（今天休息）'},
  {test:t=>hasEnding(t,'면'),title:'表达条件：-(으)면',body:'表示“如果……的话”。后半句通常说结果或建议。',example:'도착하면 알려 주세요（到了请告诉我）'},
  {test:t=>hasEnding(t,'고')&&!t.includes('싶어요'),title:'连接状态：-고',body:'接在形容词词干后，把两个特点连起来。예쁘다（漂亮）去掉다，再加고。',example:'예쁘고 친절하세요（您漂亮又友善）'},
  {test:t=>/지 않아요/.test(t),title:'礼貌否定：-지 않아요',body:'接在动作或状态后，表示“不……／没有……”。',example:'작동하지 않아요（无法运行／坏了）'}
];
function grammarNotes(text,meaning){
  const tokens=phraseTokens(text);
  const structure=tokens.map(token=>`${token}〔${tokenMeaning(token)}〕`).join(' + ');
  const notes=[{title:'整句怎么组成',body:structure,example:`合起来：${meaning}`}];
  const matched=grammarRulebook.filter(rule=>rule.test(text)).slice(0,2);
  notes.push(...matched);
  if(!matched.length)notes.push({title:'旅行口语习惯',body:'场景明确时，韩语常省略“我、你、我们”，直接说重点更自然。',example:'先记整句，再替换地点、数量或物品即可。'});
  return notes;
}
function toast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(window._toast);window._toast=setTimeout(()=>el.classList.remove('show'),1800)}
function cardHTML(p,li,pi,index=pi+1){
  const id=phraseId(li,pi),fav=state.favorites.has(id),done=state.learned.has(id);
  return `<article class="phrase-card" data-id="${id}"><div class="phrase-top"><span class="phrase-index">${done?'✓':String(index).padStart(2,'0')}</span><div class="phrase-copy"><div class="korean">${p[0]}</div>${state.showRoman?`<div class="roman">${readableRoman(p[0])}</div>`:''}${state.showMeaning?`<div class="meaning">${p[2]}</div>`:''}</div></div><div class="phrase-actions"><button class="sound-btn" data-speak="${encodeURIComponent(p[0])}" aria-label="播放韩语">▶</button><button class="fav-btn ${fav?'on':''}" data-fav="${id}" aria-label="收藏">★</button></div><div class="card-tools"><button class="breakdown-btn" data-break="${id}">拆解学习</button><button class="done-btn ${done?'on':''}" data-done="${id}">${done?'✓ 已掌握':'标记掌握'}</button></div></article>`;
}
function bindCards(root=document){
  root.querySelectorAll('[data-speak]').forEach(b=>b.onclick=()=>speak(decodeURIComponent(b.dataset.speak)));
  root.querySelectorAll('[data-fav]').forEach(b=>b.onclick=()=>{const id=b.dataset.fav;state.favorites.has(id)?state.favorites.delete(id):state.favorites.add(id);persist();render();toast(state.favorites.has(id)?'已收藏':'已取消收藏')});
  root.querySelectorAll('[data-done]').forEach(b=>b.onclick=()=>{const id=b.dataset.done;state.learned.has(id)?state.learned.delete(id):state.learned.add(id);persist();render();toast(state.learned.has(id)?'已标记掌握':'已取消掌握')});
  root.querySelectorAll('[data-break]').forEach(b=>b.onclick=()=>{const [li,pi]=b.dataset.break.split('-').map(Number);openBreakdown(li,pi)});
}
function updateProgress(){
  const n=state.learned.size,p=Math.round(n/total*100);
  $('#progressCount').textContent=n;$('#progressPercent').textContent=p+'%';$('#progressBar').style.width=p+'%';
}
function renderLesson(){
  const l=lessons[state.lesson];
  $('#lessonDay').textContent=`DAY ${String(state.lesson+1).padStart(2,'0')}`;
  $('#lessonTitle').textContent=l.title;$('#lessonMeta').textContent=`${l.phrases.length}句 · ${l.desc}`;$('#todaySummary').textContent=l.desc;
  $('#phraseList').innerHTML=l.phrases.map((p,i)=>cardHTML(p,state.lesson,i)).join('');
  $('#prevLesson').disabled=state.lesson===0;$('#nextLesson').disabled=state.lesson===lessons.length-1;
  $('#toggleMeaning').classList.toggle('active',state.showMeaning);$('#toggleRoman').classList.toggle('active',state.showRoman);
  const complete=state.completed.has(String(state.lesson));$('#completeLesson').classList.toggle('done',complete);$('#completeLesson').textContent=complete?'✓ 已通过 · 再测一次':'完成今天的学习 · 开始检测';
  bindCards($('#phraseList'));
}
function renderCourses(){
  $('#courseGrid').innerHTML=lessons.map((l,i)=>{const learned=l.phrases.filter((_,pi)=>state.learned.has(phraseId(i,pi))).length;return `<button class="course-card" data-course="${i}"><span class="course-num">${String(i+1).padStart(2,'0')}</span><div><h3>${l.icon} ${l.title}</h3><p>${l.desc}</p></div><span class="course-stat">${learned}/${l.phrases.length}</span></button>`}).join('');
  $$('[data-course]').forEach(b=>b.onclick=()=>{state.lesson=Number(b.dataset.course);persist();switchView('learn');render();scrollTo({top:270,behavior:'smooth'})});
}
function renderReview(){
  const items=[];lessons.forEach((l,li)=>l.phrases.forEach((p,pi)=>{if(state.favorites.has(phraseId(li,pi)))items.push({p,li,pi})}));
  $('#reviewList').innerHTML=items.length?items.map((x,i)=>cardHTML(x.p,x.li,x.pi,i+1)).join(''):`<div class="empty"><strong>还没有收藏</strong>学习时点亮星星，重点句会出现在这里。</div>`;
  bindCards($('#reviewList'));
}
function render(){renderLesson();renderCourses();renderReview();updateProgress()}
function switchView(name){$$('.tab').forEach(t=>t.classList.toggle('active',t.dataset.view===name));$$('.view').forEach(v=>v.classList.remove('active'));$(`#${name}View`).classList.add('active')}
$$('.tab').forEach(t=>t.onclick=()=>switchView(t.dataset.view));
$('#prevLesson').onclick=()=>{if(state.lesson>0){state.lesson--;persist();render();scrollTo({top:270,behavior:'smooth'})}};
$('#nextLesson').onclick=()=>{if(state.lesson<lessons.length-1){state.lesson++;persist();render();scrollTo({top:270,behavior:'smooth'})}};
$('#toggleMeaning').onclick=()=>{state.showMeaning=!state.showMeaning;persist();renderLesson()};
$('#toggleRoman').onclick=()=>{state.showRoman=!state.showRoman;persist();renderLesson()};
$('#completeLesson').onclick=()=>startQuiz();
$('#playLesson').onclick=()=>{const list=lessons[state.lesson].phrases;let i=0;const next=()=>{if(i>=list.length)return;speak(list[i++][0],()=>setTimeout(next,350))};next()};
$('#randomReview').onclick=()=>{const pool=[];lessons.forEach((l,li)=>l.phrases.forEach((p,pi)=>{if(state.favorites.has(phraseId(li,pi)))pool.push(p)}));if(!pool.length){toast('先收藏几句再来抽查吧');return}const p=pool[Math.floor(Math.random()*pool.length)];speak(p[0]);toast(`${p[0]} · ${p[2]}`)};
$('#clearProgress').onclick=()=>{if(confirm('确定清除收藏和学习进度吗？')){state.learned.clear();state.favorites.clear();state.completed.clear();state.lesson=0;persist();render();toast('学习记录已重置')}};

const breakdownDialog=$('#breakdownDialog');let currentBreakdown=null,slowPlaybackRun=0;
function stopSlowPlayback(){
  slowPlaybackRun++;clearTimeout(speechTimer);speechSynthesis.cancel();activeUtterance=null;
  const button=$('#playBreakdownWords');button.textContent='▶ 逐词慢速跟读';button.classList.remove('playing');
  $$('#breakdownWords .word-card').forEach(card=>card.classList.remove('playing'));
}
function openBreakdown(li,pi){
  currentBreakdown={li,pi};const phrase=lessons[li].phrases[pi],tokens=phraseTokens(phrase[0]);
  $('#breakdownTitle').textContent=phrase[0];$('#breakdownRoman').textContent=readableRoman(phrase[0]);$('#breakdownMeaning').textContent=phrase[2];
  $('#breakdownWords').innerHTML=tokens.map(token=>`<button type="button" class="word-card" data-word="${encodeURIComponent(token)}" aria-label="播放 ${token} 的发音"><span class="word-card-top"><b>${token}</b><i>▶</i></span><span>${readableRoman(token)}</span><small>${tokenMeaning(token)}</small>${tokenParts(token)?`<em>${tokenParts(token)}</em>`:''}</button>`).join('');
  $('#breakdownGrammar').innerHTML=grammarNotes(phrase[0],phrase[2]).map(note=>`<article class="grammar-note"><b>${note.title}</b><p>${note.body}</p><small>${note.example}</small></article>`).join('');
  $$('#breakdownWords [data-word]').forEach(button=>button.addEventListener('click',event=>{
    event.preventDefault();event.stopPropagation();
    if($('#playBreakdownWords').classList.contains('playing'))stopSlowPlayback();
    const token=decodeURIComponent(button.dataset.word);
    $$('#breakdownWords .word-card').forEach(card=>card.classList.remove('playing'));
    speak(token,()=>button.classList.remove('playing'),.68,()=>button.classList.add('playing'));
  }));
  breakdownDialog.showModal();
}
function closeBreakdown(){stopSlowPlayback();breakdownDialog.close()}
$('#closeBreakdown').onclick=closeBreakdown;
$('#playBreakdownSentence').onclick=()=>{if(currentBreakdown){stopSlowPlayback();const {li,pi}=currentBreakdown;speak(lessons[li].phrases[pi][0])}};
$('#playBreakdownWords').onclick=()=>{
  if(!currentBreakdown)return;
  if($('#playBreakdownWords').classList.contains('playing')){stopSlowPlayback();return;}
  const {li,pi}=currentBreakdown,tokens=phraseTokens(lessons[li].phrases[pi][0]);let index=0;
  const run=++slowPlaybackRun;
  const button=$('#playBreakdownWords');button.textContent='■ 停止慢速跟读';button.classList.add('playing');
  const next=()=>{
    if(run!==slowPlaybackRun)return;
    if(index>=tokens.length){button.textContent='▶ 逐词慢速跟读';button.classList.remove('playing');return;}
    const wordButtons=$$('#breakdownWords .word-card');wordButtons.forEach(card=>card.classList.remove('playing'));
    const current=wordButtons[index];
    speak(tokens[index++],()=>{current?.classList.remove('playing');speechTimer=setTimeout(next,760)},.5,()=>current?.classList.add('playing'));
  };
  next();
};
breakdownDialog.addEventListener('cancel',event=>{event.preventDefault();closeBreakdown()});

const quizDialog=$('#quizDialog');
const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;
const quiz={lesson:0,queue:[],passed:new Set(),mistakes:0,current:null,recognition:null,locked:false};
const shuffle=a=>{for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
function normalizeKorean(value){return String(value||'').replace(/[^가-힣0-9]/g,'')}
function editDistance(a,b){
  const row=Array.from({length:b.length+1},(_,i)=>i);
  for(let i=1;i<=a.length;i++){
    let prev=row[0];row[0]=i;
    for(let j=1;j<=b.length;j++){
      const old=row[j];row[j]=Math.min(row[j]+1,row[j-1]+1,prev+(a[i-1]===b[j-1]?0:1));prev=old;
    }
  }
  return row[b.length];
}
function pronunciationMatches(heard,expected){
  const a=normalizeKorean(heard),b=normalizeKorean(expected);
  if(!a||!b)return false;
  if(a===b)return true;
  const similarity=1-editDistance(a,b)/Math.max(a.length,b.length);
  return similarity>=(b.length<=4?.82:.70);
}
function startQuiz(){
  quiz.lesson=state.lesson;quiz.queue=shuffle(lessons[state.lesson].phrases.map((_,i)=>i));quiz.passed.clear();quiz.mistakes=0;quiz.current=null;quiz.locked=false;
  $('#quizBody').hidden=false;$('#quizSuccess').hidden=true;
  quizDialog.showModal();nextQuizQuestion();
}
function updateQuizProgress(){
  const totalQuestions=lessons[quiz.lesson].phrases.length,done=quiz.passed.size;
  $('#quizProgress').style.width=`${Math.round(done/totalQuestions*100)}%`;
  $('#quizCount').textContent=`${done}/${totalQuestions}`;
}
function nextQuizQuestion(){
  stopRecognition();quiz.locked=false;
  const phraseCount=lessons[quiz.lesson].phrases.length;
  if(quiz.passed.size===phraseCount){finishQuiz();return}
  if(!quiz.queue.length)quiz.queue=shuffle([...Array(phraseCount).keys()].filter(i=>!quiz.passed.has(i)));
  quiz.current=quiz.queue.shift();
  const phrase=lessons[quiz.lesson].phrases[quiz.current];
  $('#quizChinese').textContent=phrase[2];$('#quizHint').textContent=SpeechRecognition?'点击麦克风后开始朗读':'大声读出答案，再自行核对';
  $('#quizHeard').textContent='';$('#quizHeard').classList.remove('wrong');$('#quizAnswer').hidden=true;$('#quizFallback').hidden=true;
  $('#quizMic').classList.remove('listening');$('#quizMic b').textContent=SpeechRecognition?'开始朗读':'查看答案';
  updateQuizProgress();
}
function revealQuizAnswer(){
  const phrase=lessons[quiz.lesson].phrases[quiz.current];
  $('#quizKorean').textContent=phrase[0];$('#quizRoman').textContent=readableRoman(phrase[0]);$('#quizAnswer').hidden=false;
}
function queueMistake(){
  if(!quiz.queue.includes(quiz.current)){
    const position=Math.min(quiz.queue.length,2+Math.floor(Math.random()*3));quiz.queue.splice(position,0,quiz.current);
  }
}
function markQuizCorrect(){
  if(quiz.locked)return;quiz.locked=true;quiz.passed.add(quiz.current);state.learned.add(phraseId(quiz.lesson,quiz.current));persist();updateQuizProgress();
  $('#quizHeard').textContent='正确！잘했어요';$('#quizHeard').classList.remove('wrong');setTimeout(nextQuizQuestion,750);
}
function markQuizWrong(heard=''){
  if(quiz.locked)return;quiz.locked=true;quiz.mistakes++;queueMistake();revealQuizAnswer();
  $('#quizHeard').textContent=heard?`识别到：${heard} · 再练一次`:'这句稍后会再次出现';$('#quizHeard').classList.add('wrong');
  const phrase=lessons[quiz.lesson].phrases[quiz.current];speak(phrase[0],()=>setTimeout(nextQuizQuestion,700));
}
function finishQuiz(){
  const phraseCount=lessons[quiz.lesson].phrases.length;state.completed.add(String(quiz.lesson));
  lessons[quiz.lesson].phrases.forEach((_,pi)=>state.learned.add(phraseId(quiz.lesson,pi)));persist();render();
  $('#quizBody').hidden=true;$('#quizSuccess').hidden=false;$('#successDay').textContent=String(quiz.lesson+1).padStart(2,'0');
  $('#successDetail').textContent=`通过 ${phraseCount} 句口语检测${quiz.mistakes?`，错题重复练习 ${quiz.mistakes} 次`:''}`;
}
function stopRecognition(){
  if(quiz.recognition){try{quiz.recognition.abort()}catch(e){}quiz.recognition=null}
  $('#quizMic')?.classList.remove('listening');
}
function beginRecognition(){
  if(quiz.locked)return;
  if(!SpeechRecognition){revealQuizAnswer();$('#quizFallback').hidden=false;return}
  stopRecognition();
  const recognition=new SpeechRecognition();quiz.recognition=recognition;recognition.lang='ko-KR';recognition.interimResults=false;recognition.continuous=false;recognition.maxAlternatives=5;
  recognition.onstart=()=>{$('#quizMic').classList.add('listening');$('#quizMic b').textContent='正在听…';$('#quizHint').textContent='请清楚地读出完整韩语'};
  recognition.onresult=event=>{
    const alternatives=[...event.results[0]].map(result=>result.transcript.trim());
    const expected=lessons[quiz.lesson].phrases[quiz.current][0],matched=alternatives.some(text=>pronunciationMatches(text,expected));
    stopRecognition();if(matched)markQuizCorrect();else markQuizWrong(alternatives[0]||'');
  };
  recognition.onerror=event=>{stopRecognition();$('#quizHeard').textContent=event.error==='not-allowed'?'请允许使用麦克风后再试':'没有听清，请再读一次';$('#quizHeard').classList.add('wrong');$('#quizMic b').textContent='重新朗读'};
  recognition.onend=()=>{$('#quizMic').classList.remove('listening');if(!quiz.locked)$('#quizMic b').textContent='重新朗读'};
  try{recognition.start()}catch(e){$('#quizHeard').textContent='请稍后再试';}
}
function exitQuiz(){stopRecognition();clearTimeout(speechTimer);speechSynthesis.cancel();activeUtterance=null;quizDialog.close()}
$('#quizMic').onclick=beginRecognition;
$('#quizListen').onclick=()=>speak(lessons[quiz.lesson].phrases[quiz.current][0]);
$('#quizSelfCorrect').onclick=markQuizCorrect;
$('#quizTryAgain').onclick=()=>markQuizWrong();
$('#closeQuiz').onclick=exitQuiz;$('#finishQuiz').onclick=exitQuiz;
quizDialog.addEventListener('cancel',event=>{event.preventDefault();exitQuiz()});

const dlg=$('#searchDialog');
$('#openSearch').onclick=()=>{dlg.showModal();$('#searchInput').focus();search('')};$('#closeSearch').onclick=()=>dlg.close();dlg.onclick=e=>{if(e.target===dlg)dlg.close()};
$('#searchInput').oninput=e=>search(e.target.value.trim().toLowerCase());
function search(q){
  const out=[];lessons.forEach((l,li)=>l.phrases.forEach((p,pi)=>{if(!q||[...p,l.title].join(' ').toLowerCase().includes(q))out.push({p,li,pi,title:l.title})}));
  $('#searchMeta').textContent=q?`找到 ${out.length} 句`:`共收录 ${total} 句旅行韩语`;
  $('#searchResults').innerHTML=out.slice(0,80).map(x=>`<button class="search-item" data-go="${x.li}" data-s="${encodeURIComponent(x.p[0])}"><small>${x.title}</small><strong>${x.p[0]}</strong><span>${x.p[2]}</span></button>`).join('');
  $$('#searchResults [data-go]').forEach(b=>b.onclick=()=>{speak(decodeURIComponent(b.dataset.s));state.lesson=Number(b.dataset.go);persist()});
}
render();

function registerWebMCP(){
  const context=document.modelContext;
  if(!context?.registerTool)return;
  const register=tool=>Promise.resolve(context.registerTool(tool)).catch(()=>{});
  register({
    name:'get_learning_progress',
    title:'查看学习进度',
    description:'查看韩语口袋的总句数、已掌握句数、收藏数和当前课程。',
    inputSchema:{type:'object',properties:{},additionalProperties:false},
    annotations:{readOnlyHint:true,untrustedContentHint:false},
    execute:()=>({totalPhrases:total,learnedPhrases:state.learned.size,favorites:state.favorites.size,currentDay:state.lesson+1,currentLesson:lessons[state.lesson].title})
  });
  register({
    name:'open_learning_day',
    title:'打开指定课程',
    description:'在页面中打开第1至6章的指定韩语旅行课程。',
    inputSchema:{type:'object',properties:{day:{type:'integer',minimum:1,maximum:lessons.length}},required:['day'],additionalProperties:false},
    annotations:{readOnlyHint:false,untrustedContentHint:false},
    execute:input=>{
      if(!Number.isInteger(input?.day)||input.day<1||input.day>lessons.length)throw new Error(`day 必须是 1 到 ${lessons.length} 的整数`);
      state.lesson=input.day-1;persist();switchView('learn');render();
      return {day:input.day,lesson:lessons[state.lesson].title,phraseCount:lessons[state.lesson].phrases.length};
    }
  });
  register({
    name:'start_current_lesson_quiz',
    title:'开始当前课程口语检测',
    description:'打开当前课程的随机中文转韩语口语检测；全部答对后课程才会完成。',
    inputSchema:{type:'object',properties:{},additionalProperties:false},
    annotations:{readOnlyHint:false,untrustedContentHint:false},
    execute:()=>{startQuiz();return {day:state.lesson+1,lesson:lessons[state.lesson].title,quizStarted:true,phraseCount:lessons[state.lesson].phrases.length}}
  });
}
registerWebMCP();
