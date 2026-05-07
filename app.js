let stocks = [
  {
    ticker: "2330",
    name: "台積電",
    theme: "foundry",
    themeLabel: "晶圓代工",
    horizon: "1-4w",
    risk: "medium",
    riskLabel: "中等",
    score: 92,
    heat: "strong",
    heatLabel: "大尾魚",
    summary: "大型權值、流動性最強，短線有資金面與 AI 基本面雙催化。",
    reason: "Q1 財報強、AI 需求延續，資金願意把它當作台股主線的定錨股。",
    catalyst: "4 月營收、先進製程需求延續、主動式 ETF 規則放寬帶來資金想像。",
    entry: "不追長紅，等拉回 5-10 日線量縮後再觀察是否重新放量上攻。",
    riskNote: "若爆量長黑且隔日無法收復，短線就容易進入高檔整理。",
    tags: ["AI", "權值", "流動性高"],
    size: "l",
    hot: false,
  },
  {
    ticker: "2383",
    name: "台光電",
    theme: "pcb",
    themeLabel: "PCB / CCL",
    horizon: "1-4w",
    risk: "medium",
    riskLabel: "中等",
    score: 86,
    heat: "hot",
    heatLabel: "火熱魚",
    summary: "AI 伺服器材料升級主線很強，但位置高，適合等回檔後再看。",
    reason: "PCB/CCL 報價受 AI 伺服器需求帶動，台光電是市場最聚焦的高階材料指標股。",
    catalyst: "CCL 報價、AI 伺服器高速材料需求、法人對高階 PCB 供應鏈的評價調整。",
    entry: "等急漲後量縮回測支撐，或整理後再創高時用小部位觀察。",
    riskNote: "股價已經很熱，若高檔爆量長黑，短線容易轉成劇烈震盪。",
    tags: ["PCB", "CCL", "高價股"],
    size: "m",
    hot: true,
  },
  {
    ticker: "2317",
    name: "鴻海",
    theme: "ai",
    themeLabel: "AI 伺服器",
    horizon: "1-4w",
    risk: "medium",
    riskLabel: "中等",
    score: 87,
    heat: "strong",
    heatLabel: "大尾魚",
    summary: "AI 伺服器核心 ODM，題材強但波動仍比台積電大一些。",
    reason: "Q1 營收創高，市場持續把它視為 AI 伺服器出貨與組裝的重要受惠者。",
    catalyst: "4 月營收、AI server 出貨節奏、後續法說與訂單進度。",
    entry: "等回檔不破短均線後再看，不建議急拉時追價。",
    riskNote: "若 AI 題材降溫或雲端出貨雜音增多，容易回到區間盤。",
    tags: ["ODM", "AI", "大型股"],
    size: "l",
    hot: false,
  },
  {
    ticker: "3037",
    name: "欣興",
    theme: "pcb",
    themeLabel: "ABF / PCB",
    horizon: "1-4w",
    risk: "medium",
    riskLabel: "中等",
    score: 82,
    heat: "breakout",
    heatLabel: "突破魚",
    summary: "ABF 載板與 AI 高階 GPU 需求帶動，適合放在回檔突破觀察池。",
    reason: "市場預期高階 ABF 載板未來供需偏緊，近期資金也把它列為 AI 硬體升級受惠股。",
    catalyst: "ABF 供需、AI GPU 需求、高階載板報價與法人評價。",
    entry: "回檔不破前波整理區，再放量站回短線均線時觀察。",
    riskNote: "若跌破整理區且量增，代表突破失敗，應先移出短線名單。",
    tags: ["ABF", "回檔突破", "AI 硬體"],
    size: "m",
    hot: false,
  },
  {
    ticker: "2382",
    name: "廣達",
    theme: "ai",
    themeLabel: "AI 伺服器",
    horizon: "1-4w",
    risk: "medium",
    riskLabel: "中等",
    score: 84,
    heat: "strong",
    heatLabel: "大尾魚",
    summary: "AI 伺服器主線代表股，延續性強，走勢通常比小型題材股乾淨。",
    reason: "月營收維持高年增，市場把它當作 AI 硬體需求最直接的觀察點之一。",
    catalyst: "4 月營收、法人活動、AI server 訂單能見度。",
    entry: "只考慮整理後再轉強的型態，不追連續噴出段。",
    riskNote: "若營收動能放緩或跌回前波突破區，代表短線節奏轉弱。",
    tags: ["AI", "ODM", "營收延續"],
    size: "m",
    hot: false,
  },
  {
    ticker: "2368",
    name: "金像電",
    theme: "pcb",
    themeLabel: "AI PCB",
    horizon: "1-4w",
    risk: "high",
    riskLabel: "積極",
    score: 76,
    heat: "hot",
    heatLabel: "火熱魚",
    summary: "AI 伺服器 PCB 指標股，趨勢強，但短線很吃進場位置。",
    reason: "受惠 AI 伺服器、800G 交換器與資料中心升級，市場願意給更高評價。",
    catalyst: "PCB 報價、AI 伺服器訂單、800G 交換器題材。",
    entry: "只看回檔後重新轉強，不在連續急拉時追價。",
    riskNote: "高價股波動很大，若開高走低或跌破短線支撐，容易快速回吐。",
    tags: ["AI PCB", "高波動", "800G"],
    size: "s",
    hot: true,
  },
  {
    ticker: "6274",
    name: "台燿",
    theme: "pcb",
    themeLabel: "CCL",
    horizon: "1-4w",
    risk: "medium",
    riskLabel: "中等",
    score: 79,
    heat: "breakout",
    heatLabel: "突破魚",
    summary: "CCL 題材延伸股，適合觀察回檔整理後能否挑戰壓力。",
    reason: "高階材料升級帶動 CCL 族群評價重估，台燿是資金輪動時容易被看見的標的。",
    catalyst: "CCL 報價、高速傳輸材料需求、PCB 族群續強。",
    entry: "等回檔量縮後，若再放量站上壓力區才列入進攻。",
    riskNote: "若只跟著族群短線衝高、沒有量能延續，容易成為隔日回吐股。",
    tags: ["CCL", "回檔突破", "族群輪動"],
    size: "s",
    hot: false,
  },
  {
    ticker: "3231",
    name: "緯創",
    theme: "ai",
    themeLabel: "AI 伺服器",
    horizon: "1-4w",
    risk: "high",
    riskLabel: "積極",
    score: 78,
    heat: "watch",
    heatLabel: "觀察魚",
    summary: "動能很強，但節奏更吃盤勢，適合願意承受較高波動的人。",
    reason: "月營收成長快，市場對 AI 伺服器擴產與出貨延續有期待。",
    catalyst: "4 月營收、產能擴張與 AI server 進度。",
    entry: "只在拉回整理後介入，急噴日不追。",
    riskNote: "跌破整理平台且放量時，籌碼容易快速轉亂。",
    tags: ["波動較大", "AI", "進攻型"],
    size: "m",
    hot: true,
  },
  {
    ticker: "6669",
    name: "緯穎",
    theme: "ai",
    themeLabel: "AI 伺服器",
    horizon: "1-4w",
    risk: "medium",
    riskLabel: "中等",
    score: 83,
    heat: "breakout",
    heatLabel: "突破魚",
    summary: "AI 伺服器高價指標，適合放在回檔後轉強的觀察名單。",
    reason: "AI 伺服器出貨動能讓高階 ODM 族群維持市場關注。",
    catalyst: "月營收、雲端客戶拉貨、AI server 訂單能見度。",
    entry: "若回檔守住整理區，再帶量突破短線壓力，可列為強勢續攻型。",
    riskNote: "高價股一旦大盤轉弱，修正幅度通常比大型權值股更明顯。",
    tags: ["AI 伺服器", "高價股", "突破型"],
    size: "m",
    hot: false,
  },
  {
    ticker: "2308",
    name: "台達電",
    theme: "power",
    themeLabel: "電源 / 散熱",
    horizon: "1-3m",
    risk: "medium",
    riskLabel: "中等",
    score: 81,
    heat: "strong",
    heatLabel: "大尾魚",
    summary: "AI 基建鏈中的防守型選手，電源與散熱題材有延續性。",
    reason: "資料中心升級趨勢讓電源與散熱角色更被重視，市場偏好度提升。",
    catalyst: "月營收、資料中心電源需求、AI 基建持續擴張。",
    entry: "可等回檔量縮再觀察，適合分批追蹤。",
    riskNote: "若連續急漲後跌破短線支撐，容易轉成高檔橫盤。",
    tags: ["防守型", "AI 基建", "穩健"],
    size: "m",
    hot: false,
  },
  {
    ticker: "3017",
    name: "奇鋐",
    theme: "power",
    themeLabel: "散熱",
    horizon: "1-4w",
    risk: "medium",
    riskLabel: "中等",
    score: 80,
    heat: "breakout",
    heatLabel: "突破魚",
    summary: "AI 機櫃散熱需求是長線題材，短線適合找回檔後轉強。",
    reason: "AI 伺服器功耗提升，散熱供應鏈容易在資金輪動時接棒。",
    catalyst: "AI 機櫃、液冷/散熱規格升級、法人對散熱族群評價。",
    entry: "等回檔後不再破低，並且放量站回壓力區再追蹤。",
    riskNote: "若散熱族群整體轉弱，單檔很難獨強太久。",
    tags: ["散熱", "回檔突破", "AI 機櫃"],
    size: "m",
    hot: false,
  },
  {
    ticker: "3324",
    name: "雙鴻",
    theme: "power",
    themeLabel: "散熱",
    horizon: "1-4w",
    risk: "high",
    riskLabel: "積極",
    score: 74,
    heat: "watch",
    heatLabel: "觀察魚",
    summary: "散熱題材彈性大，但波動也大，適合當進攻型觀察牌。",
    reason: "AI 伺服器散熱規格升級讓市場願意追蹤相關供應鏈。",
    catalyst: "液冷散熱需求、AI 機櫃出貨、同族群資金輪動。",
    entry: "只看拉回後再轉強，不追單日急漲。",
    riskNote: "若高檔量縮無法續攻，短線容易回到箱型整理。",
    tags: ["散熱", "高波動", "AI 機櫃"],
    size: "s",
    hot: true,
  },
  {
    ticker: "6770",
    name: "力積電",
    theme: "memory",
    themeLabel: "記憶體 / 反轉",
    horizon: "1-4w",
    risk: "high",
    riskLabel: "積極",
    score: 69,
    heat: "watch",
    heatLabel: "觀察魚",
    summary: "有記憶體漲價與本業轉盈題材，但短線更像反彈型、節奏要抓細。",
    reason: "Q1 轉盈與 DRAM/NAND 報價調漲帶來修復想像，但上方套牢仍重。",
    catalyst: "Q2 營收改善預期、記憶體報價、法說後市場重新定價。",
    entry: "只適合低接或等站回關鍵壓力區後確認，不適合追開高。",
    riskNote: "容易出現開高走低，若跌破近支撐且量放大，要把風險放前面。",
    tags: ["反轉", "記憶體", "高波動"],
    size: "s",
    hot: true,
  },
  {
    ticker: "2344",
    name: "華邦電",
    theme: "memory",
    themeLabel: "記憶體 / 反轉",
    horizon: "1-4w",
    risk: "high",
    riskLabel: "積極",
    score: 71,
    heat: "breakout",
    heatLabel: "突破魚",
    summary: "記憶體族群回檔後若止穩，華邦電適合觀察是否重新突破。",
    reason: "NAND/NOR 與記憶體報價題材延續，族群容易因報價或同業消息再度點火。",
    catalyst: "記憶體報價、同族群股價反彈、法人對產業循環修復的看法。",
    entry: "等回檔不破前低，重新站上短線均線後再看。",
    riskNote: "記憶體股容易開高殺低，若量大但收黑，隔日要降低期待。",
    tags: ["記憶體", "回檔突破", "反轉"],
    size: "s",
    hot: true,
  },
  {
    ticker: "2408",
    name: "南亞科",
    theme: "memory",
    themeLabel: "DRAM / 反轉",
    horizon: "1-4w",
    risk: "high",
    riskLabel: "積極",
    score: 70,
    heat: "watch",
    heatLabel: "觀察魚",
    summary: "DRAM 反轉題材明確，但短線籌碼常很急，適合只放觀察池。",
    reason: "若記憶體報價與美光等同業情緒延續，南亞科容易被資金輪動到。",
    catalyst: "DRAM 報價、美光與國際記憶體股表現、族群量能。",
    entry: "等拉回後量縮止穩，隔日再帶量轉強才考慮。",
    riskNote: "若只是題材開高，沒有族群同步量能，容易當天回吐。",
    tags: ["DRAM", "反轉", "族群看盤"],
    size: "s",
    hot: true,
  },
  {
    ticker: "3260",
    name: "威剛",
    theme: "memory",
    themeLabel: "記憶體模組",
    horizon: "1-4w",
    risk: "medium",
    riskLabel: "中等",
    score: 77,
    heat: "breakout",
    heatLabel: "突破魚",
    summary: "記憶體模組與報價循環受惠股，比純晶圓股多一點營運彈性。",
    reason: "市場看好記憶體循環修復時，模組廠通常會被一起重新評價。",
    catalyst: "DRAM/NAND 報價、庫存評價回升、法人評等與目標價調整。",
    entry: "回測支撐不破後，若突破前高壓力再列入短線名單。",
    riskNote: "若報價題材熄火，股價容易從突破型變成箱型震盪。",
    tags: ["記憶體", "模組", "突破型"],
    size: "s",
    hot: false,
  },
  {
    ticker: "2454",
    name: "聯發科",
    theme: "foundry",
    themeLabel: "半導體設計",
    horizon: "1-4w",
    risk: "medium",
    riskLabel: "中等",
    score: 72,
    heat: "hot",
    heatLabel: "火熱魚",
    summary: "題材漂亮，但急漲後更容易高檔震盪，適合等冷卻。",
    reason: "AI 邊緣運算與高速運算話題會吸引資金，但短線追高勝率未必最好。",
    catalyst: "法說、AI 晶片合作題材、法人目標價調整。",
    entry: "等拉回或整理，不建議在題材最熱時直接追。",
    riskNote: "一旦市場從熱門 AI 轉向，回吐速度可能很快。",
    tags: ["熱門", "設計股", "題材強"],
    size: "s",
    hot: true,
  },
];

const EXTRA_STOCKS = [
  {
    ticker: "3008",
    name: "大立光",
    theme: "optical",
    themeLabel: "光學鏡頭",
    horizon: "1-3m",
    risk: "medium",
    riskLabel: "中等",
    score: 78,
    heat: "strong",
    heatLabel: "大尾魚",
    summary: "高階鏡頭代表股，適合觀察消費電子復甦與光學規格升級。",
    reason: "光學族群若開始輪動，大立光通常會被視為高階鏡頭與蘋果鏈指標。",
    catalyst: "手機新機週期、車用鏡頭、AR/AI 裝置規格升級。",
    entry: "等量縮守住月線，或站回季線後再觀察是否轉為中期修復。",
    riskNote: "若新品需求不如預期或跌破季線，光學股容易重新回到整理。",
    tags: ["光學", "鏡頭", "高價股"],
    size: "m",
    hot: false,
  },
  {
    ticker: "3406",
    name: "玉晶光",
    theme: "optical",
    themeLabel: "光學鏡頭",
    horizon: "1-4w",
    risk: "high",
    riskLabel: "積極",
    score: 74,
    heat: "breakout",
    heatLabel: "突破魚",
    summary: "光學鏡頭彈性股，若族群轉強，短線反應通常比大型股更快。",
    reason: "資金偏好光學題材時，玉晶光常被拿來觀察鏡頭鏈的攻擊力。",
    catalyst: "手機鏡頭規格升級、新品拉貨、同族群量能擴散。",
    entry: "適合等突破後回測不破，或量縮守住短均線再看。",
    riskNote: "高波動光學股容易開高走低，若量增收黑要降低期待。",
    tags: ["光學", "鏡頭", "高波動"],
    size: "s",
    hot: true,
  },
  {
    ticker: "3362",
    name: "先進光",
    theme: "optical",
    themeLabel: "光學鏡頭",
    horizon: "1-4w",
    risk: "high",
    riskLabel: "積極",
    score: 72,
    heat: "watch",
    heatLabel: "觀察魚",
    summary: "中小型光學股，適合放在默默轉強與族群輪動觀察池。",
    reason: "光學鏈若從大型股擴散到中小型股，先進光容易被短線資金注意。",
    catalyst: "光學族群轉強、鏡頭規格升級、量能從低檔放大。",
    entry: "先看能否站回月線並維持量能，不急著追單日急漲。",
    riskNote: "若只是題材跟漲、沒有量能延續，容易隔日回吐。",
    tags: ["光學", "中小型", "默默轉強"],
    size: "s",
    hot: true,
  },
  {
    ticker: "3019",
    name: "亞光",
    theme: "optical",
    themeLabel: "光學元件",
    horizon: "1-4w",
    risk: "medium",
    riskLabel: "中等",
    score: 73,
    heat: "watch",
    heatLabel: "觀察魚",
    summary: "光學與影像應用題材，適合觀察低檔整理後是否慢慢墊高。",
    reason: "若光學族群轉強，亞光有機會跟著鏡頭、影像與車用題材被重估。",
    catalyst: "車用影像、消費電子回溫、光學族群資金輪動。",
    entry: "以月線附近轉強為主，不追沒有整理過的長紅。",
    riskNote: "若站上均線後又快速跌回，代表族群力道不足。",
    tags: ["光學", "影像", "車用"],
    size: "s",
    hot: false,
  },
  {
    ticker: "3450",
    name: "聯鈞",
    theme: "optical",
    themeLabel: "光通訊",
    horizon: "1-4w",
    risk: "high",
    riskLabel: "積極",
    score: 80,
    heat: "breakout",
    heatLabel: "突破魚",
    summary: "光通訊族群攻擊型標的，適合觀察高速傳輸題材是否延續。",
    reason: "AI 資料中心帶動高速光通訊需求時，聯鈞容易被資金列入觀察。",
    catalyst: "800G/1.6T 光模組、資料中心升級、同族群突破。",
    entry: "等突破後回測不破，或放量站回短線壓力再觀察。",
    riskNote: "光通訊短線容易急漲急跌，若爆量長黑要先保守。",
    tags: ["光通訊", "高速傳輸", "AI 資料中心"],
    size: "m",
    hot: true,
  },
  {
    ticker: "4979",
    name: "華星光",
    theme: "optical",
    themeLabel: "光通訊",
    horizon: "1-4w",
    risk: "high",
    riskLabel: "積極",
    score: 79,
    heat: "hot",
    heatLabel: "火熱魚",
    summary: "光通訊人氣股，題材強但更要注意進場位置。",
    reason: "高速光收發模組與 AI 資料中心題材會讓華星光成為族群溫度計。",
    catalyst: "光模組規格升級、海外資料中心需求、光通訊族群輪動。",
    entry: "只看拉回後再轉強，不在連續急拉時追價。",
    riskNote: "若族群退潮，高人氣股通常修正速度也快。",
    tags: ["光通訊", "光模組", "高人氣"],
    size: "s",
    hot: true,
  },
  {
    ticker: "3163",
    name: "波若威",
    theme: "optical",
    themeLabel: "光通訊",
    horizon: "1-4w",
    risk: "high",
    riskLabel: "積極",
    score: 76,
    heat: "breakout",
    heatLabel: "突破魚",
    summary: "光通訊與網通題材股，適合看是否有量價同步轉強。",
    reason: "高速傳輸題材延伸時，波若威常被短線資金拿來觀察族群彈性。",
    catalyst: "光通訊需求、網通設備升級、族群成交量放大。",
    entry: "等量能溫和放大且站上月線，再列入進攻觀察。",
    riskNote: "若只有量沒有價，或突破後跌回，代表假突破風險提高。",
    tags: ["光通訊", "網通", "突破型"],
    size: "s",
    hot: true,
  },
  {
    ticker: "3363",
    name: "上詮",
    theme: "optical",
    themeLabel: "光通訊",
    horizon: "1-4w",
    risk: "high",
    riskLabel: "積極",
    score: 75,
    heat: "watch",
    heatLabel: "觀察魚",
    summary: "光通訊中小型牌，適合用量能和均線確認是否真的轉強。",
    reason: "同族群輪動時，上詮有機會跟著高速傳輸題材被市場重新注意。",
    catalyst: "光通訊族群續強、資料中心題材、成交量回升。",
    entry: "先看月線是否由壓力變支撐，再考慮短線觀察。",
    riskNote: "中小型股流動性較不穩，急漲後要小心回吐。",
    tags: ["光通訊", "中小型", "量能觀察"],
    size: "s",
    hot: true,
  },
  {
    ticker: "3081",
    name: "聯亞",
    theme: "optical",
    themeLabel: "光通訊",
    horizon: "1-3m",
    risk: "medium",
    riskLabel: "中等",
    score: 77,
    heat: "strong",
    heatLabel: "大尾魚",
    summary: "光通訊磊晶與元件代表，適合觀察中期題材是否延續。",
    reason: "高速傳輸與資料中心升級會讓光通訊上游元件重新被追蹤。",
    catalyst: "光通訊規格升級、AI 資料中心需求、法人對族群評價調整。",
    entry: "適合等整理後站回短中期均線，不追單日題材急拉。",
    riskNote: "若光通訊族群量能退潮，股價容易回到區間整理。",
    tags: ["光通訊", "上游元件", "中期觀察"],
    size: "s",
    hot: false,
  },
  {
    ticker: "2393",
    name: "億光",
    theme: "optical",
    themeLabel: "LED / 光電",
    horizon: "1-3m",
    risk: "medium",
    riskLabel: "中等",
    score: 70,
    heat: "watch",
    heatLabel: "觀察魚",
    summary: "LED 與光電元件股，適合觀察低基期修復與量能變化。",
    reason: "光電族群若出現低檔輪動，億光可作為較穩健的觀察牌。",
    catalyst: "LED 需求回溫、車用與感測應用、族群低基期反彈。",
    entry: "等站上月線後量能不退，再看是否進一步挑戰季線。",
    riskNote: "若營運題材沒有延續，反彈容易變成短線行情。",
    tags: ["LED", "光電", "低基期"],
    size: "s",
    hot: false,
  },
  {
    ticker: "3714",
    name: "富采",
    theme: "optical",
    themeLabel: "LED / 光電",
    horizon: "1-3m",
    risk: "medium",
    riskLabel: "中等",
    score: 69,
    heat: "watch",
    heatLabel: "觀察魚",
    summary: "LED 與光電整合股，適合用月線和季線觀察修復力道。",
    reason: "Mini LED、車用與特殊照明題材若回溫，富采有機會被重新觀察。",
    catalyst: "LED 需求、Mini LED 應用、光電族群低檔轉強。",
    entry: "先看量能是否溫和放大並站穩月線，避免追短線急拉。",
    riskNote: "若跌回整理區，代表修復還不夠成熟。",
    tags: ["LED", "Mini LED", "光電"],
    size: "s",
    hot: false,
  },
  {
    ticker: "0050",
    name: "元大台灣50",
    theme: "etf",
    themeLabel: "ETF / 台灣50",
    horizon: "1-3m",
    risk: "low",
    riskLabel: "低風險",
    score: 82,
    heat: "strong",
    heatLabel: "大尾魚",
    summary: "台股大型權值 ETF，適合作為大盤方向與長期核心觀察牌。",
    reason: "想看整體台股主線時，0050 能代表大型權值股的趨勢溫度。",
    catalyst: "大盤趨勢、權值股表現、外資與 ETF 資金流向。",
    entry: "較適合分批或等回測月線，不需要用追價方式操作。",
    riskNote: "若大盤跌破季線，ETF 也會跟著承壓，需降低短線期待。",
    tags: ["ETF", "台灣50", "核心配置"],
    size: "m",
    hot: false,
  },
  {
    ticker: "006208",
    name: "富邦台50",
    theme: "etf",
    themeLabel: "ETF / 台灣50",
    horizon: "1-3m",
    risk: "low",
    riskLabel: "低風險",
    score: 80,
    heat: "strong",
    heatLabel: "大尾魚",
    summary: "追蹤台灣50的 ETF，適合想看大盤核心資產的人。",
    reason: "成分股集中大型權值，波動通常比單一題材股更容易掌控。",
    catalyst: "台股權值股趨勢、指數資金、半導體權值表現。",
    entry: "以分批或回測均線觀察為主，不需要追短線波動。",
    riskNote: "若權值股轉弱，台50 ETF 也會進入整理。",
    tags: ["ETF", "台灣50", "低波動"],
    size: "m",
    hot: false,
  },
  {
    ticker: "0056",
    name: "元大高股息",
    theme: "etf",
    themeLabel: "ETF / 高股息",
    horizon: "1-3m",
    risk: "low",
    riskLabel: "低風險",
    score: 75,
    heat: "watch",
    heatLabel: "觀察魚",
    summary: "高股息 ETF 代表，適合觀察配息題材與防守資金。",
    reason: "市場震盪時，高股息 ETF 常成為追求現金流資金的觀察方向。",
    catalyst: "除息季、成分股調整、殖利率與資金輪動。",
    entry: "適合分批，不適合只因短線漲幅追價。",
    riskNote: "高股息也會受成分股與大盤影響，配息不等於沒有波動。",
    tags: ["ETF", "高股息", "防守"],
    size: "s",
    hot: false,
  },
  {
    ticker: "00878",
    name: "國泰永續高股息",
    theme: "etf",
    themeLabel: "ETF / 高股息",
    horizon: "1-3m",
    risk: "low",
    riskLabel: "低風險",
    score: 77,
    heat: "watch",
    heatLabel: "觀察魚",
    summary: "高股息人氣 ETF，適合觀察配息與長期持有需求。",
    reason: "00878 流動性高，常被投資人用來觀察高股息 ETF 人氣。",
    catalyst: "配息公告、成分股調整、ETF 申購買盤。",
    entry: "適合分批與長期觀察，短線過熱時可以等回檔。",
    riskNote: "若高股息族群集中轉弱，ETF 淨值也會跟著波動。",
    tags: ["ETF", "高股息", "人氣"],
    size: "s",
    hot: false,
  },
  {
    ticker: "00919",
    name: "群益台灣精選高息",
    theme: "etf",
    themeLabel: "ETF / 高股息",
    horizon: "1-3m",
    risk: "medium",
    riskLabel: "中等",
    score: 76,
    heat: "watch",
    heatLabel: "觀察魚",
    summary: "高息 ETF 人氣牌，適合觀察高股息資金是否延續。",
    reason: "配息與規模成長讓 00919 常被高股息投資人追蹤。",
    catalyst: "配息政策、成分股調整、ETF 資金流入。",
    entry: "若價格離均線過遠，等回測再看會比較舒服。",
    riskNote: "高配息題材太熱時，也可能出現短線溢價與回檔。",
    tags: ["ETF", "高息", "人氣"],
    size: "s",
    hot: false,
  },
  {
    ticker: "00713",
    name: "元大台灣高息低波",
    theme: "etf",
    themeLabel: "ETF / 高息低波",
    horizon: "1-3m",
    risk: "low",
    riskLabel: "低風險",
    score: 78,
    heat: "strong",
    heatLabel: "大尾魚",
    summary: "高息低波 ETF，適合觀察較穩健的防守型牌面。",
    reason: "若市場震盪但資金仍偏好台股收益型商品，00713 會有參考價值。",
    catalyst: "低波動成分股表現、配息、資金防守需求。",
    entry: "適合分批與回測均線觀察，不追短線急拉。",
    riskNote: "低波動不是不會跌，大盤系統性回檔時仍要控管部位。",
    tags: ["ETF", "高息低波", "防守"],
    size: "s",
    hot: false,
  },
  {
    ticker: "00929",
    name: "復華台灣科技優息",
    theme: "etf",
    themeLabel: "ETF / 科技高息",
    horizon: "1-3m",
    risk: "medium",
    riskLabel: "中等",
    score: 74,
    heat: "watch",
    heatLabel: "觀察魚",
    summary: "科技高息 ETF，適合想同時看科技股與配息題材的人。",
    reason: "成分偏科技時，會同時受到電子股景氣與高息資金影響。",
    catalyst: "科技股輪動、配息公告、ETF 成分調整。",
    entry: "等科技族群回穩或站回月線再觀察。",
    riskNote: "科技股波動比純防守型高股息更大，需留意大盤電子權值走勢。",
    tags: ["ETF", "科技", "高息"],
    size: "s",
    hot: false,
  },
  {
    ticker: "00940",
    name: "元大台灣價值高息",
    theme: "etf",
    themeLabel: "ETF / 價值高息",
    horizon: "1-3m",
    risk: "medium",
    riskLabel: "中等",
    score: 72,
    heat: "watch",
    heatLabel: "觀察魚",
    summary: "價值高息 ETF，適合觀察高股息資金是否轉向不同選股邏輯。",
    reason: "高股息 ETF 之間會有資金輪動，00940 可作為人氣與價值策略觀察牌。",
    catalyst: "配息、成分股調整、ETF 資金流向。",
    entry: "適合等價格穩定後分批，不用追短線人氣。",
    riskNote: "新興或高人氣 ETF 仍可能有折溢價與波動風險。",
    tags: ["ETF", "價值", "高息"],
    size: "s",
    hot: false,
  },
  {
    ticker: "00881",
    name: "國泰台灣5G+",
    theme: "etf",
    themeLabel: "ETF / 科技",
    horizon: "1-3m",
    risk: "medium",
    riskLabel: "中等",
    score: 73,
    heat: "breakout",
    heatLabel: "突破魚",
    summary: "科技題材 ETF，適合觀察半導體與AI供應鏈是否同步轉強。",
    reason: "想看科技族群整體方向時，00881 可作為單一股票之外的觀察牌。",
    catalyst: "AI、半導體、5G 與電子權值族群輪動。",
    entry: "等科技股整理後站回月線，再觀察是否有續攻力道。",
    riskNote: "科技 ETF 仍會受電子權值波動影響，不等於低波動。",
    tags: ["ETF", "科技", "AI"],
    size: "s",
    hot: false,
  },
  {
    ticker: "00922",
    name: "國泰台灣領袖50",
    theme: "etf",
    themeLabel: "ETF / 大型股",
    horizon: "1-3m",
    risk: "low",
    riskLabel: "低風險",
    score: 76,
    heat: "strong",
    heatLabel: "大尾魚",
    summary: "大型龍頭股 ETF，適合觀察台股核心資產是否維持強勢。",
    reason: "當市場偏好大型股與龍頭股時，00922 可作為核心方向的參考牌。",
    catalyst: "大型權值股趨勢、外資買盤、指數資金流向。",
    entry: "適合分批或回測均線後觀察，不追短線急漲。",
    riskNote: "若權值股集體轉弱，ETF 也會跟著回檔。",
    tags: ["ETF", "大型股", "核心"],
    size: "s",
    hot: false,
  },
];

stocks = [...stocks, ...EXTRA_STOCKS];

const state = {
  selectedId: null,
  pinnedTicker: null,
  bucket: [],
  favorites: [],
  marketUpdatedAt: null,
  marketMode: "preview",
  universeCount: stocks.length,
  isScanningMarket: false,
  isRefreshingMarket: false,
};

const HORIZON_LABELS = {
  all: "全部時間",
  "1-4w": "1-4 週",
  "1-3m": "1-3 個月",
};

const HEAT_LABELS = {
  strong: "權杖牌",
  watch: "星幣牌",
  breakout: "寶劍牌",
  hot: "聖杯牌",
};

const CARD_ARCANA = {
  strong: {
    symbol: "I",
    title: "力量",
    meaning: "代表趨勢續航與主力穩定，適合觀察強勢股是否沿均線向上推進。",
  },
  watch: {
    symbol: "II",
    title: "星辰",
    meaning: "代表耐心等待與修復，適合觀察低調轉強但還沒有全面發動的股票。",
  },
  breakout: {
    symbol: "III",
    title: "戰車",
    meaning: "代表突破、速度與方向感，適合觀察量價是否同步推升。",
  },
  hot: {
    symbol: "IV",
    title: "太陽",
    meaning: "代表人氣與曝光度很高，機會明亮，但也要小心追價與過熱。",
  },
};

const STRATEGY_GROUPS = [
  {
    id: "ma",
    title: "均線條件",
    description: "先看股價有沒有站上關鍵均線，再判斷趨勢是不是完整。",
  },
  {
    id: "trend",
    title: "趨勢打法",
    description: "偏向波段派常用的月線、季線與回檔轉強邏輯。",
  },
  {
    id: "momentum",
    title: "動能量價",
    description: "給喜歡追蹤突破、量能放大的使用者一組快篩按鈕。",
  },
];

const STRATEGY_DEFINITIONS = [
  { id: "aboveMa5", group: "ma", label: "站上 5 日線", shortLabel: "5 日站上" },
  { id: "aboveMa20", group: "ma", label: "站上月線（20 日）", shortLabel: "月線站上" },
  { id: "aboveMa60", group: "ma", label: "站上季線（60 日）", shortLabel: "季線站上" },
  { id: "aboveMa120", group: "ma", label: "站上半年線（120 日）", shortLabel: "半年站上" },
  { id: "aboveMa240", group: "ma", label: "站上年線（240 日）", shortLabel: "年線站上" },
  { id: "bullishStack", group: "ma", label: "多頭排列", shortLabel: "多頭排列" },
  { id: "ma20Up", group: "trend", label: "月線翻揚", shortLabel: "月線翻揚" },
  { id: "ma60Up", group: "trend", label: "季線翻揚", shortLabel: "季線翻揚" },
  { id: "holdMa20", group: "trend", label: "回檔守月線", shortLabel: "守月線" },
  { id: "reboundStrong", group: "trend", label: "低檔轉強", shortLabel: "低檔轉強" },
  { id: "newHigh20", group: "momentum", label: "接近 20 日高點", shortLabel: "近 20 高" },
  { id: "breakoutVolume", group: "momentum", label: "爆量突破", shortLabel: "爆量突破" },
  { id: "priceVolumeUp", group: "momentum", label: "量增價揚", shortLabel: "量價齊揚" },
];

const horizonFilter = document.querySelector("#horizon-filter");
const riskFilter = document.querySelector("#risk-filter");
const themeFilter = document.querySelector("#theme-filter");
const avoidHotToggle = document.querySelector("#avoid-hot-toggle");
const fishCount = document.querySelector("#fish-count");
const avgScore = document.querySelector("#avg-score");
const pondSurface = document.querySelector("#pond-surface");
const detailCard = document.querySelector("#detail-card");
const quickDetailCard = document.querySelector("#quick-detail-card");
const detailTemplate = document.querySelector("#detail-template");
const bucketList = document.querySelector("#bucket-list");
const aquariumSurface = document.querySelector("#aquarium-surface");
const aquariumCount = document.querySelector("#aquarium-count");
const pondStatus = document.querySelector("#pond-status");
const selectedSummary = document.querySelector("#selected-summary");
const castingLine = document.querySelector("#casting-line");
const bobber = document.querySelector("#bobber");
const castRandomBtn = document.querySelector("#cast-random-btn");
const refreshPondBtn = document.querySelector("#refresh-pond-btn");
const mobileCastBtn = document.querySelector("#mobile-cast-btn");
const mobileResetBtn = document.querySelector("#mobile-reset-btn");
const installBtn = document.querySelector("#install-btn");
const mobileInstallBtn = document.querySelector("#mobile-install-btn");
const installDialog = document.querySelector("#install-dialog");
const installMessage = document.querySelector("#install-message");
const tickerSearchForm = document.querySelector("#ticker-search-form");
const tickerSearchInput = document.querySelector("#ticker-search-input");
const strategyFilters = document.querySelector("#strategy-filters");
const strategySummary = document.querySelector("#strategy-summary");
const clearStrategyBtn = document.querySelector("#clear-strategy-btn");
const strategyPanel = document.querySelector("#strategy-panel");
const pondCard = document.querySelector(".pond");
const controlPanel = document.querySelector(".control-panel");

const FILTER_STORAGE_KEY = "stock-fishing-filters-v2";
const BUCKET_STORAGE_KEY = "stock-fishing-bucket";
const FAVORITES_STORAGE_KEY = "stock-fishing-favorites";
const MARKET_STORAGE_KEY = "stock-fishing-market-data-v2";
const MARKET_SCAN_STORAGE_KEY = "stock-fishing-market-scan-v2";
const MARKET_DATA_MAX_AGE_MS = 10 * 60 * 1000;
const MARKET_SCAN_MAX_AGE_MS = 30 * 60 * 1000;
const MARKET_TICK_INTERVAL_MS = 60 * 1000;
const DIRECT_TWSE_QUOTES_URL = "https://openapi.twse.com.tw/v1/exchangeReport/STOCK_DAY_ALL";
const DIRECT_TPEX_QUOTES_URL = "https://www.tpex.org.tw/openapi/v1/tpex_mainboard_quotes";
let deferredInstallPrompt = null;

stocks.forEach((stock) => {
  stock.baseScore = stock.score;
});

function formatNumber(value, digits = 2) {
  if (!Number.isFinite(value)) {
    return "—";
  }

  return new Intl.NumberFormat("zh-TW", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits === 0 ? 0 : value % 1 === 0 ? 0 : Math.min(2, digits),
  }).format(value);
}

function formatSigned(value, digits = 2) {
  if (!Number.isFinite(value)) {
    return "—";
  }

  const sign = value > 0 ? "+" : "";
  return `${sign}${formatNumber(value, digits)}`;
}

function formatPrice(value) {
  if (!Number.isFinite(value)) {
    return "—";
  }

  return formatNumber(value, value >= 100 ? 1 : 2);
}

function formatMarketUpdatedAt(value) {
  if (!value) {
    return "";
  }

  return new Intl.DateTimeFormat("zh-TW", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function isLocalFileMode() {
  return window.location.protocol === "file:";
}

function isFreshTimestamp(value, maxAgeMs) {
  if (!value) {
    return false;
  }

  const time = new Date(value).getTime();
  return Number.isFinite(time) && Date.now() - time <= maxAgeMs;
}

function getDirectionClass(stock) {
  const change = stock.market?.changePct;
  if (!Number.isFinite(change)) {
    return "flat";
  }

  if (change > 0) {
    return "up";
  }

  if (change < 0) {
    return "down";
  }

  return "flat";
}

function getDirectionSymbol(stock) {
  const direction = getDirectionClass(stock);
  if (direction === "up") {
    return "▲";
  }

  if (direction === "down") {
    return "▼";
  }

  return "◆";
}

function getMarketModeLabel() {
  if (state.marketMode === "scan") {
    return "全市場";
  }

  if (state.marketMode === "live") {
    return "即時";
  }

  if (state.marketMode === "public") {
    return "公開盤後";
  }

  if (state.marketMode === "preview") {
    return "本機預覽";
  }

  if (state.marketMode === "unavailable") {
    return "股價未連線";
  }

  return "等待市場資料";
}

function getFishShapeClass(stock) {
  const shapeByTheme = {
    ai: "shape-ray",
    pcb: "shape-angler",
    foundry: "shape-orca",
    power: "shape-sail",
    memory: "shape-guppy",
    optical: "shape-ray",
    etf: "shape-orca",
  };

  return shapeByTheme[stock.theme] || "shape-guppy";
}

function getCardSuitLabel(stock) {
  return HEAT_LABELS[stock.heat] || stock.heatLabel || "觀察牌";
}

function getArcanaSymbol(stock) {
  return CARD_ARCANA[stock.heat]?.symbol || "V";
}

function getArcanaTitle(stock) {
  return CARD_ARCANA[stock.heat]?.title || "命運";
}

function getArcanaMeaning(stock) {
  return CARD_ARCANA[stock.heat]?.meaning || "代表市場正在轉動，適合先看價格、均線與量能是否同方向。";
}

function getTarotReading(stock) {
  const direction = getDirectionClass(stock);
  const score = getScore(stock);
  const directionText =
    direction === "up" ? "今天牌面偏正位，短線買盤仍在。" :
    direction === "down" ? "今天牌面偏逆位，先留意回檔壓力。" :
    "今天牌面中性，等待更明確的價格訊號。";
  const scoreText =
    score >= 88 ? "牌力很強，適合放在優先觀察名單。" :
    score >= 75 ? "牌力中上，適合搭配均線與量能確認。" :
    "牌力還在醞釀，適合小心觀察，不急著追。";

  return `${getArcanaTitle(stock)}：${getArcanaMeaning(stock)} ${directionText} ${scoreText}`;
}

function getCompactTarotReading(stock) {
  const direction = getDirectionClass(stock);
  const directionText =
    direction === "up" ? "正位，買盤仍在" :
    direction === "down" ? "逆位，留意回檔" :
    "中性，等待訊號";
  const focusByHeat = {
    strong: "趨勢續航",
    watch: "低調醞釀",
    breakout: "突破推進",
    hot: "人氣明亮",
  };

  return `${getArcanaTitle(stock)}牌：${focusByHeat[stock.heat] || "命運轉動"}。${directionText}`;
}

function roundTo(value, digits = 2) {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function parseMarketNumber(value) {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : null;
  }

  if (typeof value !== "string") {
    return null;
  }

  const normalized = value.replace(/,/g, "").replace(/--/g, "").trim();
  if (!normalized) {
    return null;
  }

  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}

function pickMarketField(row, names) {
  for (const name of names) {
    if (row?.[name] !== undefined && row[name] !== null && row[name] !== "") {
      return row[name];
    }
  }
  return null;
}

function isDirectEtfQuote(symbol, name) {
  return /^00\d{2,4}$/.test(symbol) || /(ETF|指數股票型基金|高股息|台灣50|高息|低波)/i.test(name);
}

function isDirectTradableQuote(symbol, name) {
  if (!/^\d{4,6}$/.test(symbol)) {
    return false;
  }

  if (isDirectEtfQuote(symbol, name)) {
    return true;
  }

  if (!/^\d{4}$/.test(symbol)) {
    return false;
  }

  return !/(ETN|權證|牛證|熊證|受益證券|存託憑證)/i.test(name);
}

function getDirectSignal(changePct, value) {
  if (changePct >= 4.5) {
    return "hot";
  }

  if (changePct >= 2.2) {
    return "breakout";
  }

  if (changePct >= 0.4 && (!Number.isFinite(value) || value < 1_200_000_000)) {
    return "strong";
  }

  return "watch";
}

function getDirectScore(changePct, value, isEtf) {
  let score = isEtf ? 68 : 58;
  if (changePct > 0) score += Math.min(16, changePct * 4);
  if (changePct < 0) score += Math.max(-12, changePct * 3);
  if (Number.isFinite(value) && value > 20_000_000) score += 6;
  if (Number.isFinite(value) && value > 500_000_000) score += 4;
  if (changePct > 5.5) score -= 8;
  return Math.max(42, Math.min(92, Math.round(score)));
}

function normalizeDirectQuote(row, source) {
  const isTwse = source === "twse";
  const symbol = String(
    pickMarketField(row, isTwse ? ["Code", "證券代號", "code"] : ["SecuritiesCompanyCode", "Code", "代號", "股票代號"])
      || ""
  ).trim();
  const name = String(
    pickMarketField(row, isTwse ? ["Name", "證券名稱", "name"] : ["CompanyName", "Name", "名稱", "股票名稱"])
      || ""
  ).trim();
  const price = parseMarketNumber(
    pickMarketField(row, isTwse ? ["ClosingPrice", "收盤價"] : ["Close", "ClosingPrice", "收盤價"])
  );
  const change = parseMarketNumber(
    pickMarketField(row, isTwse ? ["Change", "漲跌價差", "漲跌"] : ["Change", "漲跌", "漲跌價差"])
  );
  const volume = parseMarketNumber(
    pickMarketField(row, isTwse ? ["TradeVolume", "成交股數"] : ["TradingShares", "TradeVolume", "成交股數", "成交仟股"])
  );
  const value = parseMarketNumber(
    pickMarketField(row, isTwse ? ["TradeValue", "成交金額"] : ["TransactionAmount", "TradeValue", "成交金額"])
  );

  if (!isDirectTradableQuote(symbol, name) || !Number.isFinite(price) || price <= 0) {
    return null;
  }

  const safeChange = Number.isFinite(change) ? change : 0;
  const previousClose = price - safeChange;
  const changePct = previousClose ? (safeChange / previousClose) * 100 : 0;
  const isEtf = isDirectEtfQuote(symbol, name);
  const signal = getDirectSignal(changePct, value);
  const score = getDirectScore(changePct, value, isEtf);

  return {
    symbol,
    name,
    source,
    price: roundTo(price, 2),
    change: roundTo(safeChange, 2),
    changePct: roundTo(changePct, 2),
    volume: Number.isFinite(volume) ? roundTo(volume, 0) : null,
    value: Number.isFinite(value) ? roundTo(value, 0) : null,
    volumeRatio20: null,
    momentum20d: roundTo(changePct, 2),
    distanceTo20dHigh: null,
    distanceTo60dHigh: null,
    reboundFrom20dLow: null,
    high20: null,
    high60: null,
    low20: null,
    min5Close: null,
    ma5: null,
    ma20: null,
    ma60: null,
    ma120: null,
    ma240: null,
    prevMa20: null,
    prevMa60: null,
    signal,
    score,
    updatedAt: new Date().toISOString(),
  };
}

async function fetchDirectPublicQuotes() {
  const [twseResult, tpexResult] = await Promise.allSettled([
    fetch(DIRECT_TWSE_QUOTES_URL, { cache: "no-store" }).then((response) => {
      if (!response.ok) throw new Error(`TWSE ${response.status}`);
      return response.json();
    }),
    fetch(DIRECT_TPEX_QUOTES_URL, { cache: "no-store" }).then((response) => {
      if (!response.ok) throw new Error(`TPEx ${response.status}`);
      return response.json();
    }),
  ]);
  const quotes = [];

  if (twseResult.status === "fulfilled" && Array.isArray(twseResult.value)) {
    quotes.push(...twseResult.value.map((row) => normalizeDirectQuote(row, "twse")).filter(Boolean));
  }

  if (tpexResult.status === "fulfilled" && Array.isArray(tpexResult.value)) {
    quotes.push(...tpexResult.value.map((row) => normalizeDirectQuote(row, "tpex")).filter(Boolean));
  }

  if (!quotes.length) {
    const errors = [twseResult, tpexResult]
      .filter((result) => result.status === "rejected")
      .map((result) => result.reason?.message || "unknown")
      .join(", ");
    throw new Error(errors || "No direct public quotes");
  }

  return quotes;
}

function inferDirectTheme(name, symbol = "") {
  if (isDirectEtfQuote(symbol, name)) return ["etf", "ETF"];
  if (/(光|鏡頭|光通|光學|LED|雷射|光電|光纖)/.test(name)) return ["optical", "光通訊 / 光電"];
  if (/(AI|智|伺服|雲|資通|資訊|電腦|網通)/i.test(name)) return ["ai", "AI / 伺服器"];
  if (/(PCB|板|銅箔|基板|玻纖|載板)/i.test(name)) return ["pcb", "PCB / CCL"];
  if (/(晶|半導|IC|矽|封測|聯電|台積|世界)/.test(name)) return ["foundry", "晶圓代工 / IC 設計"];
  if (/(電源|散熱|風扇|電池|能源|電機)/.test(name)) return ["power", "電源 / 散熱"];
  if (/(記憶|南亞科|華邦|群聯|威剛|創見)/.test(name)) return ["memory", "記憶體 / 儲存"];
  return ["quiet", "默默轉強"];
}

function createDirectStockCard(quote) {
  const [theme, themeLabel] = inferDirectTheme(quote.name, quote.symbol);
  const isEtf = theme === "etf";
  const marketLabel = quote.source === "tpex" ? "上櫃" : "上市";

  return {
    ticker: quote.symbol,
    name: quote.name,
    theme,
    themeLabel,
    horizon: isEtf ? "1-3m" : "1-4w",
    risk: isEtf ? "low" : quote.score >= 76 ? "medium" : "high",
    riskLabel: isEtf ? "低風險" : quote.score >= 76 ? "中等" : "積極",
    score: quote.score,
    heat: quote.signal,
    heatLabel: HEAT_LABELS[quote.signal] || "觀察牌",
    summary: `${quote.name} 目前使用公開盤後資料顯示價格，適合先放入觀察清單。`,
    reason: "Netlify Functions 尚未連線時，先用證交所 / 櫃買公開盤後資料建立牌面，避免顯示錯誤示範股價。",
    catalyst: "盤後收盤價、漲跌幅與成交金額變化。",
    entry: "公開盤後資料不是逐筆即時報價，適合先觀察，買賣前仍要用券商報價確認。",
    riskNote: "若 Functions 尚未部署成功，均線與量價條件會比完整版少，請把這張牌當作初步觀察。",
    tags: [marketLabel, "公開盤後", themeLabel],
    size: quote.score >= 82 ? "m" : "s",
    hot: quote.signal === "hot",
    baseScore: quote.score,
    liveScore: quote.score,
    market: quote,
  };
}

async function refreshWithDirectPublicQuotes(symbols = stocks.map((stock) => stock.ticker)) {
  const wanted = new Set(symbols);
  const quotes = await fetchDirectPublicQuotes();
  const data = {};
  quotes.forEach((quote) => {
    if (wanted.has(quote.symbol)) {
      data[quote.symbol] = quote;
    }
  });

  if (!Object.keys(data).length) {
    throw new Error("No matching direct public quotes");
  }

  state.marketUpdatedAt = new Date().toISOString();
  state.marketMode = "public";
  applyMarketData(data);
  localStorage.setItem(
    MARKET_STORAGE_KEY,
    JSON.stringify({ updatedAt: state.marketUpdatedAt, data, mode: "public" })
  );
  return data;
}

async function scanWithDirectPublicQuotes(limit = 72) {
  const quotes = await fetchDirectPublicQuotes();
  const cards = quotes
    .map(createDirectStockCard)
    .sort((left, right) => {
      const rightValue = right.market?.value || 0;
      const leftValue = left.market?.value || 0;
      return getScore(right) - getScore(left) || rightValue - leftValue;
    })
    .slice(0, limit);

  if (!cards.length) {
    throw new Error("No direct public scan cards");
  }

  applyScannedStocks(cards, {
    updatedAt: new Date().toISOString(),
    universeCount: quotes.length,
  });
  localStorage.setItem(
    MARKET_SCAN_STORAGE_KEY,
    JSON.stringify({
      updatedAt: state.marketUpdatedAt,
      universeCount: state.universeCount,
      stocks,
    })
  );
  return cards;
}

function applyPreviewMarketMode() {
  stocks.forEach((stock) => {
    delete stock.market;
    stock.liveScore = stock.baseScore || stock.score;
  });
  state.marketMode = "preview";
  state.marketUpdatedAt = null;
}

function applyUnavailableMarketMode() {
  stocks.forEach((stock) => {
    delete stock.market;
    stock.liveScore = stock.baseScore || stock.score;
  });
  state.marketMode = "unavailable";
  state.marketUpdatedAt = null;
}

function normalizeTickerInput(value) {
  return String(value || "").replace(/\D/g, "").slice(0, 6);
}

function createCustomStock(ticker) {
  const isEtf = ticker.startsWith("00");
  return {
    ticker,
    name: isEtf ? "自選 ETF" : "自選股票",
    theme: isEtf ? "etf" : "quiet",
    themeLabel: isEtf ? "ETF / 自選" : "自選觀察",
    horizon: "1-4w",
    risk: isEtf ? "low" : "medium",
    riskLabel: isEtf ? "低風險" : "中等",
    score: isEtf ? 72 : 68,
    heat: "watch",
    heatLabel: "觀察魚",
    summary: "這是你手動叫出的自選牌；本機只作介面預覽，部署成功後才會顯示市場資料。",
    reason: "自選牌適合拿來快速查看價格、均線、動能和是否命中專業選股條件。",
    catalyst: "可觀察股價是否站上月線、季線，並搭配量能是否溫和放大。",
    entry: "先等資料更新與技術條件確認，不建議只因為叫出卡牌就追價。",
    riskNote: "若沒有即時資料或均線尚未確認，請把它當作觀察名單，不當作直接買賣訊號。",
    tags: [isEtf ? "ETF" : "自選", "代號叫牌", "手動加入"],
    size: "s",
    hot: false,
  };
}

function ensureStockCard(ticker) {
  let stock = stocks.find((item) => item.ticker === ticker);
  if (stock) {
    return stock;
  }

  stock = createCustomStock(ticker);
  stock.baseScore = stock.score;
  stock.liveScore = stock.score;
  stocks = [stock, ...stocks];
  state.universeCount = Math.max(state.universeCount, stocks.length);
  return stock;
}

async function refreshSingleStockMarket(stock) {
  if (!stock?.ticker || isLocalFileMode()) {
    return;
  }

  try {
    const response = await fetch(`/.netlify/functions/market-data?symbols=${stock.ticker}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`Market data request failed: ${response.status}`);
    }

    const payload = await response.json();
    if (!payload.data?.[stock.ticker]) {
      return;
    }

    state.marketUpdatedAt = payload.updatedAt || new Date().toISOString();
    if (state.marketMode !== "scan") {
      state.marketMode = "live";
    }
    applyMarketData(payload.data);
    renderFish();
    renderAquarium();

    const selectedStock = stocks.find((item) => item.ticker === stock.ticker);
    if (selectedStock && state.selectedId === selectedStock.ticker) {
      renderQuickDetail(selectedStock, "代號叫牌");
      renderDetail(selectedStock);
    }
  } catch (error) {
    console.warn("Single symbol refresh failed", error);
    try {
      await refreshWithDirectPublicQuotes([stock.ticker]);
      renderFish();
      renderAquarium();

      const selectedStock = stocks.find((item) => item.ticker === stock.ticker);
      if (selectedStock && state.selectedId === selectedStock.ticker) {
        renderQuickDetail(selectedStock, "公開盤後");
        renderDetail(selectedStock);
      }
    } catch (directError) {
      console.warn("Single symbol direct public refresh failed", directError);
    }
  }
}

function summonTickerCard(rawTicker) {
  const ticker = normalizeTickerInput(rawTicker);
  if (!ticker) {
    pondStatus.textContent = "請先輸入股票代號";
    tickerSearchInput?.focus();
    return;
  }

  const stock = ensureStockCard(ticker);
  state.pinnedTicker = ticker;
  state.selectedId = ticker;
  renderFish();

  const card = [...document.querySelectorAll(".fish")].find(
    (element) => element.dataset.ticker === ticker
  );
  if (card) {
    catchFish(stock, card, { modeLabel: "代號叫牌" });
  } else {
    renderQuickDetail(stock, "代號叫牌");
    renderDetail(stock);
    addToBucket(stock);
  }

  if (tickerSearchInput) {
    tickerSearchInput.value = "";
    tickerSearchInput.blur();
  }
  pondStatus.textContent = `叫出 ${stock.ticker} ${stock.name}`;
  refreshSingleStockMarket(stock);
}

function renderStrategyFilters() {
  strategyFilters.innerHTML = STRATEGY_GROUPS.map((group) => {
    const items = STRATEGY_DEFINITIONS.filter((definition) => definition.group === group.id)
      .map(
        (definition) => `
          <label class="strategy-pill" data-strategy-pill="${definition.id}">
            <input type="checkbox" data-strategy-filter value="${definition.id}" />
            <span>${definition.label}</span>
          </label>
        `
      )
      .join("");

    return `
      <section class="strategy-group">
        <h4>${group.title}</h4>
        <p>${group.description}</p>
        <div class="strategy-grid">${items}</div>
      </section>
    `;
  }).join("");
}

function mountFilterPanelInDeck() {
  if (!controlPanel || !pondCard || controlPanel.dataset.deckMounted === "true") {
    return;
  }

  controlPanel.dataset.deckMounted = "true";
  controlPanel.classList.add("deck-filter-panel");
  const header = controlPanel.querySelector(".panel-head");
  const title = header?.querySelector("h2");
  const description = header?.querySelector("p");
  if (title) {
    title.textContent = "牌庫篩選";
  }
  if (description) {
    description.textContent = "篩選與專業條件集中在這裡，抽牌前先決定牌庫範圍。";
  }

  if (!controlPanel.querySelector(".deck-filter-details")) {
    const details = document.createElement("details");
    details.className = "deck-filter-details";
    details.open = true;

    const summary = document.createElement("summary");
    summary.className = "deck-filter-summary";
    if (header) {
      summary.appendChild(header);
    }

    const toggleLabel = document.createElement("span");
    toggleLabel.className = "mini-btn deck-filter-toggle";
    summary.appendChild(toggleLabel);

    const body = document.createElement("div");
    body.className = "deck-filter-body";
    [...controlPanel.childNodes].forEach((node) => {
      body.appendChild(node);
    });

    details.append(summary, body);
    controlPanel.appendChild(details);
  }

  pondCard.insertBefore(controlPanel, selectedSummary);
}

function getStrategyCheckboxes() {
  return [...document.querySelectorAll("[data-strategy-filter]")];
}

function getActiveStrategyIds() {
  return getStrategyCheckboxes()
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
}

function getActiveStrategyDefinitions() {
  const activeIds = new Set(getActiveStrategyIds());
  return STRATEGY_DEFINITIONS.filter((definition) => activeIds.has(definition.id));
}

function syncStrategyPillStates() {
  document.querySelectorAll("[data-strategy-pill]").forEach((pill) => {
    const checkbox = pill.querySelector("input");
    pill.classList.toggle("active", Boolean(checkbox?.checked));
  });
}

function updateStrategySummary() {
  const activeDefinitions = getActiveStrategyDefinitions();
  if (!activeDefinitions.length) {
    strategySummary.textContent = "目前未啟用進階條件";
    clearStrategyBtn.hidden = true;
    strategyPanel?.classList.remove("has-active-filters");
    return;
  }

  const labels = activeDefinitions.slice(0, 3).map((definition) => definition.label);
  const overflow =
    activeDefinitions.length > labels.length ? ` 等 ${activeDefinitions.length} 個條件` : "";
  strategySummary.textContent = `已啟用：${labels.join("、")}${overflow}`;
  clearStrategyBtn.hidden = false;
  strategyPanel?.classList.add("has-active-filters");
}

function buildFallbackTechnicalState(stock) {
  const strength = getScore(stock);
  const isStrong = stock.heat === "strong";
  const isBreakout = stock.heat === "breakout";
  const isHot = stock.heat === "hot";

  return {
    aboveMa5: strength >= 70,
    aboveMa20: strength >= 75,
    aboveMa60: strength >= 80,
    aboveMa120: strength >= 84,
    aboveMa240: strength >= 88,
    bullishStack: strength >= 84 && (isStrong || isBreakout) && !isHot,
    ma20Up: strength >= 76 || isStrong || isBreakout,
    ma60Up: strength >= 82 && (isStrong || isBreakout),
    holdMa20: isStrong || (strength >= 78 && !isHot),
    reboundStrong: isBreakout || (isHot && strength >= 74),
    newHigh20: isBreakout || (isHot && strength >= 78),
    breakoutVolume: isBreakout || (isHot && strength >= 80),
    priceVolumeUp: strength >= 75 && (isStrong || isBreakout || isHot),
  };
}

function isAboveLine(price, line) {
  return Number.isFinite(price) && Number.isFinite(line) && price >= line;
}

function buildTechnicalState(stock) {
  const market = stock.market;

  if (!market?.price) {
    return buildFallbackTechnicalState(stock);
  }

  const aboveMa20 = isAboveLine(market.price, market.ma20);
  const distance20 = market.distanceTo20dHigh;
  const volumeRatio20 = market.volumeRatio20;

  return {
    aboveMa5: isAboveLine(market.price, market.ma5),
    aboveMa20,
    aboveMa60: isAboveLine(market.price, market.ma60),
    aboveMa120: isAboveLine(market.price, market.ma120),
    aboveMa240: isAboveLine(market.price, market.ma240),
    bullishStack:
      Number.isFinite(market.ma5) &&
      Number.isFinite(market.ma20) &&
      Number.isFinite(market.ma60) &&
      Number.isFinite(market.ma120) &&
      market.ma5 > market.ma20 &&
      market.ma20 > market.ma60 &&
      market.ma60 > market.ma120,
    ma20Up:
      Number.isFinite(market.ma20) &&
      Number.isFinite(market.prevMa20) &&
      market.ma20 > market.prevMa20,
    ma60Up:
      Number.isFinite(market.ma60) &&
      Number.isFinite(market.prevMa60) &&
      market.ma60 > market.prevMa60,
    holdMa20:
      aboveMa20 &&
      Number.isFinite(market.min5Close) &&
      Number.isFinite(market.ma20) &&
      market.min5Close >= market.ma20 * 0.985 &&
      Number.isFinite(distance20) &&
      distance20 <= -2 &&
      distance20 >= -12,
    reboundStrong:
      Number.isFinite(market.reboundFrom20dLow) &&
      market.reboundFrom20dLow >= 8 &&
      aboveMa20 &&
      Number.isFinite(market.changePct) &&
      market.changePct > -1,
    newHigh20: Number.isFinite(distance20) && distance20 >= -1.2,
    breakoutVolume:
      Number.isFinite(distance20) &&
      distance20 >= -1.2 &&
      Number.isFinite(volumeRatio20) &&
      volumeRatio20 >= 1.25,
    priceVolumeUp:
      Number.isFinite(market.changePct) &&
      market.changePct > 0 &&
      Number.isFinite(volumeRatio20) &&
      volumeRatio20 >= 1.1,
  };
}

function getMatchedStrategyDefinitions(stock, ids = STRATEGY_DEFINITIONS.map((item) => item.id)) {
  const technicalState = buildTechnicalState(stock);
  return STRATEGY_DEFINITIONS.filter(
    (definition) => ids.includes(definition.id) && technicalState[definition.id]
  );
}

function getScore(stock) {
  return stock.liveScore || stock.score;
}

function getDefaultStatusText(filtered = getFilteredStocks()) {
  if (state.isRefreshingMarket) {
    return "更新盤勢中";
  }

  if (!filtered.length) {
    return "條件太嚴格";
  }

  if (state.marketUpdatedAt) {
    return `${getMarketModeLabel()} ${formatMarketUpdatedAt(state.marketUpdatedAt)}`;
  }

  return getActiveStrategyIds().length ? `命中 ${filtered.length} 張牌` : "等待抽牌";
}

function getEmptyStateMessage() {
  const active = getActiveStrategyDefinitions();
  if (!active.length) {
    return "目前沒有符合條件的股票牌，試著調整主題、風險或更新盤勢資料。";
  }

  const preview = active.slice(0, 2).map((item) => item.label).join("、");
  return `目前沒有同時符合 ${preview} 的股票牌，放寬 1-2 個條件會比較容易看到牌庫。`;
}

function getFilteredStocks() {
  const activeStrategyIds = getActiveStrategyIds();

  return stocks.filter((stock) => {
    if (stock.ticker === state.pinnedTicker) {
      return true;
    }

    const matchesHorizon =
      horizonFilter.value === "all" || stock.horizon === horizonFilter.value;
    const matchesRisk = riskFilter.value === "all" || stock.risk === riskFilter.value;
    const matchesTheme = themeFilter.value === "all" || stock.theme === themeFilter.value;
    const matchesHeat = !avoidHotToggle.checked || !stock.hot;
    const matchesStrategies =
      !activeStrategyIds.length ||
      activeStrategyIds.every((strategyId) => buildTechnicalState(stock)[strategyId]);

    return matchesHorizon && matchesRisk && matchesTheme && matchesHeat && matchesStrategies;
  });
}

function sortStocksForDisplay(items) {
  const activeIds = getActiveStrategyIds();

  return [...items].sort((left, right) => {
    const rightPinned = right.ticker === state.pinnedTicker ? 1 : 0;
    const leftPinned = left.ticker === state.pinnedTicker ? 1 : 0;
    const rightActiveCount = getMatchedStrategyDefinitions(right, activeIds).length;
    const leftActiveCount = getMatchedStrategyDefinitions(left, activeIds).length;
    const rightTotalCount = getMatchedStrategyDefinitions(right).length;
    const leftTotalCount = getMatchedStrategyDefinitions(left).length;
    const rightChange = right.market?.changePct || 0;
    const leftChange = left.market?.changePct || 0;

    return (
      rightPinned - leftPinned ||
      rightActiveCount - leftActiveCount ||
      rightTotalCount - leftTotalCount ||
      getScore(right) - getScore(left) ||
      rightChange - leftChange ||
      left.ticker.localeCompare(right.ticker)
    );
  });
}

function getFishScale(size, compact) {
  if (compact) {
    if (size === "l") return 0.98;
    if (size === "s") return 0.88;
    return 0.94;
  }

  if (size === "l") return 0.92;
  if (size === "s") return 0.82;
  return 0.86;
}

function getPondLayout(total) {
  const compact = window.innerWidth < 780;
  const measuredWidth = pondSurface.clientWidth || (compact ? window.innerWidth - 48 : 720);
  const surfaceWidth = Math.max(measuredWidth, compact ? 260 : 720);
  const columns = compact ? 2 : surfaceWidth < 920 ? 4 : 5;
  const gapX = compact ? 10 : 16;
  const gapY = compact ? 14 : 22;
  const paddingX = compact ? 12 : 18;
  const paddingTop = compact ? 16 : 26;
  const cellWidth =
    (surfaceWidth - paddingX * 2 - gapX * Math.max(columns - 1, 0)) / columns;
  const rowHeight = compact ? 232 : 252;
  const rows = Math.max(1, Math.ceil(total / columns));
  const surfaceHeight = paddingTop + rows * rowHeight + Math.max(0, rows - 1) * gapY + 52;

  return {
    compact,
    columns,
    gapX,
    gapY,
    paddingX,
    paddingTop,
    rowHeight,
    cellWidth,
    surfaceWidth,
    surfaceHeight,
  };
}

function makeFishPosition(stock, index, layout) {
  const row = Math.floor(index / layout.columns);
  const col = index % layout.columns;
  const scale = getFishScale(stock.size, layout.compact);
  const width = Math.max(
    layout.compact ? 112 : 136,
    Math.min(layout.compact ? 156 : 178, Math.floor(layout.cellWidth * scale))
  );
  const staggerX = row % 2 === 1 ? (layout.compact ? 2 : 8) : 0;
  const staggerY = col % 2 === 1 ? (layout.compact ? 6 : 10) : 0;
  const unclampedLeft =
    layout.paddingX + col * (layout.cellWidth + layout.gapX) + (layout.cellWidth - width) / 2 + staggerX;
  const left = Math.max(
    layout.paddingX,
    Math.min(unclampedLeft, layout.surfaceWidth - width - layout.paddingX)
  );
  const top = layout.paddingTop + row * (layout.rowHeight + layout.gapY) + staggerY;

  return {
    left: `${Math.round(left)}px`,
    top: `${Math.round(top)}px`,
    width: `${width}px`,
  };
}

function getFishSubtitle(stock, compact) {
  const matchedStrategies = getMatchedStrategyDefinitions(stock);
  const topStrategy = matchedStrategies[0]?.shortLabel || getCardSuitLabel(stock);

  if (stock.market?.price) {
    const changeLabel = `${formatSigned(stock.market.changePct, 2)}%`;
    if (compact) {
      return `${changeLabel} · ${topStrategy}`;
    }

    return `${formatPrice(stock.market.price)} · ${changeLabel} · ${topStrategy}`;
  }

  if (compact) {
    return `${topStrategy} · ${getScore(stock)} 分`;
  }

  return `${topStrategy} · ${stock.themeLabel}`;
}

function applyMarketData(data) {
  stocks.forEach((stock) => {
    const market = data[stock.ticker];
    if (!market) {
      return;
    }

    stock.market = market;
    stock.liveScore = Math.round(stock.baseScore * 0.45 + market.score * 0.55);
    stock.heat = market.signal || stock.heat;
    stock.heatLabel = HEAT_LABELS[stock.heat] || stock.heatLabel;
    stock.hot = stock.heat === "hot";
  });
}

function applyScannedStocks(scannedStocks, metadata = {}) {
  if (!Array.isArray(scannedStocks) || !scannedStocks.length) {
    return;
  }

  const favoriteTickers = new Set(state.favorites.map((stock) => stock.ticker));
  stocks = scannedStocks.map((stock) => ({
    ...stock,
    baseScore: stock.score,
    hot: stock.hot || stock.heat === "hot",
  }));
  state.universeCount = metadata.universeCount || stocks.length;
  state.marketUpdatedAt = metadata.updatedAt || new Date().toISOString();
  state.marketMode = "scan";
  state.bucket = state.bucket
    .map((saved) => stocks.find((stock) => stock.ticker === saved.ticker) || saved)
    .filter(Boolean);
  state.favorites = [
    ...stocks.filter((stock) => favoriteTickers.has(stock.ticker)),
    ...state.favorites.filter((stock) => !stocks.find((item) => item.ticker === stock.ticker)),
  ].slice(0, 12);
}

function restoreMarketScan() {
  if (isLocalFileMode()) {
    return false;
  }

  try {
    const cached = JSON.parse(localStorage.getItem(MARKET_SCAN_STORAGE_KEY) || "null");
    if (!cached?.stocks?.length) {
      return false;
    }

    if (!isFreshTimestamp(cached.updatedAt, MARKET_SCAN_MAX_AGE_MS)) {
      localStorage.removeItem(MARKET_SCAN_STORAGE_KEY);
      return false;
    }

    applyScannedStocks(cached.stocks, cached);
    return true;
  } catch (error) {
    console.warn("Failed to restore market scan", error);
    return false;
  }
}

async function scanFullMarket() {
  if (isLocalFileMode()) {
    applyPreviewMarketMode();
    pondStatus.textContent = "本機預覽不顯示股價，上傳後會更新市場資料";
    renderBucket();
    renderAquarium();
    renderFish();
    return;
  }

  if (state.isScanningMarket) {
    return;
  }

  state.isScanningMarket = true;
  pondStatus.textContent = "全市場掃描中";

  try {
    const response = await fetch("/.netlify/functions/market-scan?limit=72&candidates=180", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Market scan failed: ${response.status}`);
    }

    const payload = await response.json();
    applyScannedStocks(payload.stocks || [], {
      updatedAt: payload.updatedAt,
      universeCount: payload.universeCount,
    });
    localStorage.setItem(
      MARKET_SCAN_STORAGE_KEY,
      JSON.stringify({
        updatedAt: payload.updatedAt,
        universeCount: payload.universeCount,
        stocks,
      })
    );
    resetFilters();
    pondStatus.textContent = `全市場 ${state.universeCount} 檔，選出 ${stocks.length} 檔`;
  } catch (error) {
    console.warn("Market scan failed", error);
    try {
      await scanWithDirectPublicQuotes(72);
      resetFilters();
      pondStatus.textContent = `公開盤後 ${state.universeCount} 檔，選出 ${stocks.length} 張牌`;
    } catch (directError) {
      console.warn("Direct public market scan failed", directError);
      if (!state.marketUpdatedAt) {
        applyUnavailableMarketMode();
      }
      pondStatus.textContent = "股價功能未連線，請用 Git 或 Netlify CLI 部署 Functions";
    }
  } finally {
    state.isScanningMarket = false;
    renderBucket();
    renderAquarium();
    renderFish();
  }
}

function restoreMarketData() {
  if (isLocalFileMode()) {
    return false;
  }

  try {
    const cached = JSON.parse(localStorage.getItem(MARKET_STORAGE_KEY) || "null");
    if (!cached?.data) {
      return false;
    }

    if (!isFreshTimestamp(cached.updatedAt, MARKET_DATA_MAX_AGE_MS)) {
      localStorage.removeItem(MARKET_STORAGE_KEY);
      return false;
    }

    state.marketUpdatedAt = cached.updatedAt;
    state.marketMode = cached.mode || "live";
    applyMarketData(cached.data);
    return true;
  } catch (error) {
    console.warn("Failed to restore market data", error);
    return false;
  }
}

async function refreshMarketData() {
  if (state.isRefreshingMarket) {
    return;
  }

  if (isLocalFileMode()) {
    applyPreviewMarketMode();
    renderBucket();
    renderFish();
    renderAquarium();
    const selectedStock = stocks.find((stock) => stock.ticker === state.selectedId);
    if (selectedStock) {
      renderQuickDetail(selectedStock);
      renderDetail(selectedStock);
    }
    pondStatus.textContent = "本機預覽不顯示股價，上傳後會更新市場資料";
    return;
  }

  state.isRefreshingMarket = true;
  pondStatus.textContent = "更新盤勢中";

  try {
    const symbols = stocks.map((stock) => stock.ticker).join(",");
    const response = await fetch(`/.netlify/functions/market-data?symbols=${symbols}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Market data request failed: ${response.status}`);
    }

    const payload = await response.json();
    state.marketUpdatedAt = payload.updatedAt;
    state.marketMode = "live";
    applyMarketData(payload.data || {});
    localStorage.setItem(
      MARKET_STORAGE_KEY,
      JSON.stringify({ updatedAt: payload.updatedAt, data: payload.data || {}, mode: "live" })
    );
  } catch (error) {
    console.warn("Market data refresh failed", error);
    try {
      await refreshWithDirectPublicQuotes();
      pondStatus.textContent = `公開盤後 ${formatMarketUpdatedAt(state.marketUpdatedAt)}`;
    } catch (directError) {
      console.warn("Direct public market data failed", directError);
      if (
        !state.marketUpdatedAt ||
        (state.marketMode !== "live" && state.marketMode !== "public") ||
        !isFreshTimestamp(state.marketUpdatedAt, MARKET_DATA_MAX_AGE_MS)
      ) {
        applyUnavailableMarketMode();
      }
      pondStatus.textContent = "股價功能未連線，請用 Git 或 Netlify CLI 部署 Functions";
    }
  } finally {
    state.isRefreshingMarket = false;
    renderBucket();
    renderFish();
    renderAquarium();

    const selectedStock = stocks.find((stock) => stock.ticker === state.selectedId);
    if (selectedStock) {
      renderQuickDetail(selectedStock);
      renderDetail(selectedStock);
    }
  }
}

function saveState() {
  const deckFilterDetails = controlPanel?.querySelector(".deck-filter-details");
  const filters = {
    horizon: horizonFilter.value,
    risk: riskFilter.value,
    theme: themeFilter.value,
    avoidHot: avoidHotToggle.checked,
    strategies: getActiveStrategyIds(),
    filterPanelOpen: deckFilterDetails ? deckFilterDetails.open : true,
  };

  localStorage.setItem(FILTER_STORAGE_KEY, JSON.stringify(filters));
  localStorage.setItem(
    BUCKET_STORAGE_KEY,
    JSON.stringify(state.bucket.map((stock) => stock.ticker))
  );
  localStorage.setItem(
    FAVORITES_STORAGE_KEY,
    JSON.stringify(state.favorites.map((stock) => stock.ticker))
  );
}

function loadState() {
  try {
    const savedFilters = JSON.parse(localStorage.getItem(FILTER_STORAGE_KEY) || "null");
    if (savedFilters) {
      horizonFilter.value = savedFilters.horizon || "all";
      riskFilter.value = savedFilters.risk || "all";
      themeFilter.value = savedFilters.theme || "all";
      avoidHotToggle.checked = Boolean(savedFilters.avoidHot);
      const deckFilterDetails = controlPanel?.querySelector(".deck-filter-details");
      if (deckFilterDetails && typeof savedFilters.filterPanelOpen === "boolean") {
        deckFilterDetails.open = savedFilters.filterPanelOpen;
      }

      (savedFilters.strategies || []).forEach((strategyId) => {
        const checkbox = document.querySelector(
          `[data-strategy-filter][value="${strategyId}"]`
        );
        if (checkbox) {
          checkbox.checked = true;
        }
      });
    }

    const savedBucket = JSON.parse(localStorage.getItem(BUCKET_STORAGE_KEY) || "[]");
    state.bucket = savedBucket
      .map((ticker) => stocks.find((stock) => stock.ticker === ticker))
      .filter(Boolean);

    const savedFavorites = JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) || "[]");
    state.favorites = savedFavorites
      .map((ticker) => stocks.find((stock) => stock.ticker === ticker))
      .filter(Boolean);
  } catch (error) {
    console.warn("Failed to restore local state", error);
  }

  syncStrategyPillStates();
  updateStrategySummary();
  if (strategyPanel && getActiveStrategyIds().length) {
    strategyPanel.open = true;
  }
}

function renderFish() {
  const filtered = sortStocksForDisplay(getFilteredStocks());
  pondSurface.querySelectorAll(".fish").forEach((fish) => fish.remove());

  const layout = getPondLayout(filtered.length || 1);
  pondSurface.style.minHeight = layout.compact
    ? "430px"
    : `${Math.max(470, layout.surfaceHeight)}px`;

  filtered.forEach((stock, index) => {
    const fish = document.createElement("button");
    const position = makeFishPosition(stock, index, layout);
    const facingLeft = index % 2 === 1;

    fish.className = `fish tarot-card ${stock.heat} theme-${stock.theme} ${getFishShapeClass(stock)} trend-${getDirectionClass(stock)} ${facingLeft ? "facing-left" : ""}`;
    fish.style.left = position.left;
    fish.style.top = position.top;
    fish.style.width = position.width;
    fish.style.animationDelay = `${index * 120}ms`;
    fish.dataset.ticker = stock.ticker;
    fish.classList.toggle("selected", stock.ticker === state.selectedId);
    fish.innerHTML = `
      <div class="card-inner">
        <div class="card-face card-front">
          <span class="card-orbit">${getArcanaSymbol(stock)}</span>
          <span class="card-kicker">${getCardSuitLabel(stock)} / ${getArcanaTitle(stock)}</span>
          <strong>${stock.ticker} ${stock.name}</strong>
          <span class="fish-price ${getDirectionClass(stock)}">${getDirectionSymbol(stock)} ${getFishSubtitle(stock, layout.compact)}</span>
          <span class="card-score">牌力 ${getScore(stock)}</span>
        </div>
        <div class="card-face card-back">
          ${getCardBackHtml(stock)}
        </div>
      </div>
    `;
    attachCardInteractions(fish, stock);
    pondSurface.appendChild(fish);
  });

  fishCount.textContent = String(filtered.length);
  avgScore.textContent = filtered.length
    ? String(
        Math.round(filtered.reduce((sum, stock) => sum + getScore(stock), 0) / filtered.length)
      )
    : "0";

  const selectedVisible = filtered.find((stock) => stock.ticker === state.selectedId);
  if (!filtered.length) {
    pondStatus.textContent = getDefaultStatusText(filtered);
    detailCard.className = "detail-card empty";
    detailCard.innerHTML = `<p class="detail-empty">${getEmptyStateMessage()}</p>`;
    renderSelectedSummary(null);
    renderQuickEmpty(getEmptyStateMessage());
  } else if (!selectedVisible) {
    pondStatus.textContent = getDefaultStatusText(filtered);
    renderSelectedSummary(null);
    renderQuickEmpty("左右滑動卡牌，長按或點選一張牌，就會在這裡看到股票分析。");
  } else {
    renderQuickDetail(selectedVisible);
  }

  saveState();
}

function getCardBackHtml(stock) {
  const matchedStrategies = getMatchedStrategyDefinitions(stock);
  const nonLineStrategies = matchedStrategies.filter((item) => item.group !== "ma");
  const matchedLabels = nonLineStrategies.length
    ? nonLineStrategies.slice(0, 3).map((item) => item.shortLabel || item.label)
    : matchedStrategies.length
      ? ["均線條件"]
      : ["等待訊號"];
  const priceValue = stock.market?.price ? formatPrice(stock.market.price) : getMarketModeLabel();
  const changeValue = Number.isFinite(stock.market?.changePct)
    ? `${formatSigned(stock.market.changePct, 2)}%`
    : "";
  const momentumLine = Number.isFinite(stock.market?.momentum20d)
    ? `${formatSigned(stock.market.momentum20d, 2)}%`
    : "等待資料";
  const volumeLine = Number.isFinite(stock.market?.volumeRatio20)
    ? `${formatNumber(stock.market.volumeRatio20, 2)}x`
    : "等待資料";
  const lineLabels = getLineSummaryLabels(stock);

  return `
    <span class="card-back-label">目前選牌</span>
    <strong class="card-back-title">${escapeHtml(stock.ticker)} ${escapeHtml(stock.name)}</strong>
    <div class="card-back-meaning"><span>牌義</span><b>${escapeHtml(getCompactTarotReading(stock))}</b></div>
    <div class="card-back-price ${getDirectionClass(stock)}"><b>${escapeHtml(priceValue)}</b>${changeValue ? `<em>${escapeHtml(changeValue)}</em>` : ""}</div>
    <div class="card-back-metrics">
      <span><em>牌力</em><b>${getScore(stock)}</b></span>
      <span><em>20 日</em><b>${escapeHtml(momentumLine)}</b></span>
      <span><em>量比</em><b>${escapeHtml(volumeLine)}</b></span>
    </div>
    <div class="card-back-chips">
      <span class="chip-heading">篩選</span>
      ${matchedLabels.map((label) => `<span>${escapeHtml(label)}</span>`).join("")}
    </div>
    <div class="card-back-lines">
      ${lineLabels.map((label) => `<span>${escapeHtml(label)}</span>`).join("")}
    </div>
  `;
}

function animateCast(targetFish) {
  const pondBox = pondSurface.getBoundingClientRect();
  const fishBox = targetFish.getBoundingClientRect();
  const targetX = fishBox.left - pondBox.left + fishBox.width / 2;
  const targetY = fishBox.top - pondBox.top + fishBox.height / 2;

  pondSurface.style.setProperty("--draw-x", `${targetX}px`);
  pondSurface.style.setProperty("--draw-y", `${targetY}px`);
  pondSurface.classList.remove("is-drawing");
  targetFish.classList.remove("revealed");
  void pondSurface.offsetWidth;
  pondSurface.classList.add("is-drawing");
  targetFish.classList.add("revealed");

  window.setTimeout(() => {
    pondSurface.classList.remove("is-drawing");
    targetFish.classList.remove("revealed");
  }, 1200);
}

function makeChip(text, className = "chip") {
  const chip = document.createElement("span");
  chip.className = className;
  chip.textContent = text;
  return chip;
}

function getLineStatusLabel(price, line) {
  if (!Number.isFinite(price) || !Number.isFinite(line)) {
    return "等待資料";
  }

  return price >= line ? "股價站上" : "股價跌破";
}

function getLineStatusWord(price, line) {
  if (!Number.isFinite(price) || !Number.isFinite(line)) {
    return "等待";
  }

  return price >= line ? "站上" : "跌破";
}

function getLineSummaryLabels(stock) {
  if (!stock.market?.ma5) {
    return ["等待均線"];
  }

  const groups = [
    ["5日", stock.market.ma5],
    ["月線", stock.market.ma20],
    ["季線", stock.market.ma60],
  ].reduce(
    (result, [label, value]) => {
      result[getLineStatusWord(stock.market.price, value)].push(label);
      return result;
    },
    { 站上: [], 跌破: [], 等待: [] }
  );

  return Object.entries(groups)
    .filter(([, labels]) => labels.length)
    .map(([status, labels]) => `${status}：${labels.join("、")}`);
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[char]);
}

function renderQuickEmpty(message = "左右滑動卡牌，長按或點選一張牌，就會在這裡看到股票分析。") {
  quickDetailCard.className = "quick-detail-card empty";
  quickDetailCard.innerHTML = `<p>${escapeHtml(message)}</p>`;
}

function renderSelectedSummary(stock) {
  if (!stock) {
    selectedSummary.className = "selected-summary empty";
    selectedSummary.innerHTML = `
      <span>目前選牌</span>
      <strong>尚未選牌</strong>
      <em>抽牌或左右滑動點選卡牌後，這裡會保留最新紀錄。</em>
    `;
    return;
  }

  const priceLine = stock.market?.price
    ? `${formatPrice(stock.market.price)} / ${formatSigned(stock.market.changePct, 2)}%`
    : getMarketModeLabel();
  const matchedCount = getMatchedStrategyDefinitions(stock).length;

  selectedSummary.className = `selected-summary active ${getDirectionClass(stock)}`;
  selectedSummary.innerHTML = `
    <span>目前選牌</span>
    <strong>${escapeHtml(stock.ticker)} ${escapeHtml(stock.name)}</strong>
    <em>${escapeHtml(priceLine)} / 牌力 ${getScore(stock)} / 命中 ${matchedCount} 招</em>
    <p class="selected-reading">${escapeHtml(getTarotReading(stock))}</p>
  `;
}

function renderQuickDetail(stock, modeLabel = "目前選牌") {
  renderSelectedSummary(stock);
  const matchedStrategies = getMatchedStrategyDefinitions(stock);
  const matchedLabels = matchedStrategies.length
    ? matchedStrategies.slice(0, 5).map((item) => item.shortLabel || item.label)
    : ["等待明確訊號"];
  const marketLine = stock.market?.price
    ? `${formatPrice(stock.market.price)} / ${formatSigned(stock.market.changePct, 2)}%`
    : getMarketModeLabel();
  const momentumLine = Number.isFinite(stock.market?.momentum20d)
    ? `${formatSigned(stock.market.momentum20d, 2)}%`
    : "等待資料";
  const volumeLine = Number.isFinite(stock.market?.volumeRatio20)
    ? `${formatNumber(stock.market.volumeRatio20, 2)}x`
    : "等待資料";
  const lineLabels = stock.market?.ma5
    ? [
        ["5 日", stock.market.ma5],
        ["月線", stock.market.ma20],
        ["季線", stock.market.ma60],
        ["半年", stock.market.ma120],
      ].map(([label, value]) => `${label} ${getLineStatusLabel(stock.market.price, value)}`)
    : ["等待均線資料"];

  quickDetailCard.className = "quick-detail-card active";
  quickDetailCard.innerHTML = `
    <div class="quick-detail-head">
      <div>
        <p class="quick-eyebrow">${escapeHtml(modeLabel)}</p>
        <h3>${escapeHtml(stock.ticker)} ${escapeHtml(stock.name)}</h3>
      </div>
      <span class="quick-price ${getDirectionClass(stock)}">${escapeHtml(marketLine)}</span>
    </div>
    <p class="quick-summary">${escapeHtml(stock.summary)}</p>
    <div class="quick-metrics">
      <div><span>牌力</span><strong>${getScore(stock)}</strong></div>
      <div><span>20 日動能</span><strong>${escapeHtml(momentumLine)}</strong></div>
      <div><span>量比</span><strong>${escapeHtml(volumeLine)}</strong></div>
    </div>
    <p class="quick-tarot-reading">${escapeHtml(getTarotReading(stock))}</p>
    <div class="quick-chip-row">
      ${matchedLabels.map((label) => `<span>${escapeHtml(label)}</span>`).join("")}
    </div>
    <div class="quick-line-row">
      ${lineLabels.map((label) => `<span>${escapeHtml(label)}</span>`).join("")}
    </div>
    <dl class="quick-notes">
      <div><dt>觀察</dt><dd>${escapeHtml(stock.reason)}</dd></div>
      <div><dt>進場</dt><dd>${escapeHtml(stock.entry)}</dd></div>
      <div><dt>風險</dt><dd>${escapeHtml(stock.riskNote)}</dd></div>
    </dl>
    <button class="quick-favorite-btn ${isFavorite(stock) ? "active" : ""}" type="button" data-quick-favorite>
      ${isFavorite(stock) ? "已在牌盒，點我移除" : "加入我的牌盒"}
    </button>
  `;

  quickDetailCard.querySelector("[data-quick-favorite]").addEventListener("click", () => {
    toggleFavorite(stock);
  });
}

function attachCardInteractions(card, stock) {
  let pressTimer = null;
  let didLongPress = false;
  let startX = 0;
  let startY = 0;

  const clearPressTimer = () => {
    if (pressTimer) {
      window.clearTimeout(pressTimer);
      pressTimer = null;
    }
  };

  card.addEventListener("pointerdown", (event) => {
    if (event.button && event.button !== 0) {
      return;
    }

    startX = event.clientX;
    startY = event.clientY;
    didLongPress = false;
    clearPressTimer();
    pressTimer = window.setTimeout(() => {
      didLongPress = true;
      catchFish(stock, card, { modeLabel: "長按解讀" });
      if (navigator.vibrate) {
        navigator.vibrate(12);
      }
    }, 520);
  });

  card.addEventListener("pointermove", (event) => {
    const moved = Math.abs(event.clientX - startX) + Math.abs(event.clientY - startY);
    if (moved > 14) {
      clearPressTimer();
    }
  });

  ["pointerup", "pointerleave", "pointercancel"].forEach((eventName) => {
    card.addEventListener(eventName, clearPressTimer);
  });

  card.addEventListener("contextmenu", (event) => event.preventDefault());
  card.addEventListener("click", (event) => {
    if (didLongPress) {
      event.preventDefault();
      didLongPress = false;
      return;
    }

    catchFish(stock, card);
  });
}

function catchFish(stock, fishEl, options = {}) {
  state.selectedId = stock.ticker;
  pondStatus.textContent = `抽到 ${stock.ticker} ${stock.name}`;
  document.querySelectorAll(".fish").forEach((fish) => fish.classList.remove("selected"));
  fishEl.classList.add("selected");
  if (window.innerWidth < 780) {
    fishEl.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
  }
  animateCast(fishEl);
  renderQuickDetail(stock, options.modeLabel || "目前選牌");
  renderDetail(stock);
  addToBucket(stock);
}

function renderDetail(stock) {
  const fragment = detailTemplate.content.cloneNode(true);
  const matchedStrategies = getMatchedStrategyDefinitions(stock);
  const chipRow = fragment.querySelector(".chip-row");
  const matchRow = fragment.querySelector(".match-row");
  const techGrid = fragment.querySelector(".tech-grid");
  const pricePill = fragment.querySelector(".price-pill");
  const favoriteBtn = fragment.querySelector(".favorite-btn");

  fragment.querySelector(".detail-kicker").textContent = `${stock.themeLabel} / ${stock.riskLabel} / ${HORIZON_LABELS[stock.horizon]}`;
  fragment.querySelector("h3").textContent = `${stock.ticker} ${stock.name}`;
  fragment.querySelector(".score-pill").textContent = `綜合 ${getScore(stock)} 分`;
  pricePill.textContent = stock.market?.price
    ? `${formatPrice(stock.market.price)} / ${formatSigned(stock.market.changePct, 2)}%`
    : getCardSuitLabel(stock);
  pricePill.className = `price-pill ${getDirectionClass(stock)}`;
  favoriteBtn.textContent = isFavorite(stock) ? "從牌盒移除" : "加入我的牌盒";
  favoriteBtn.classList.toggle("active", isFavorite(stock));
  favoriteBtn.addEventListener("click", () => toggleFavorite(stock));
  fragment.querySelector(".detail-summary").textContent = stock.summary;
  fragment.querySelector(".reason").textContent = stock.reason;
  fragment.querySelector(".catalyst").textContent = stock.catalyst;
  fragment.querySelector(".entry").textContent = stock.entry;
  fragment.querySelector(".risk").textContent = stock.riskNote;

  stock.tags.forEach((tag) => {
    chipRow.appendChild(makeChip(tag));
  });
  chipRow.appendChild(makeChip(getCardSuitLabel(stock)));

  if (stock.market?.price) {
    [
      `20 日動能 ${formatSigned(stock.market.momentum20d, 2)}%`,
      `離 20 日高點 ${formatSigned(stock.market.distanceTo20dHigh, 2)}%`,
      `量比 20 日均量 ${formatNumber(stock.market.volumeRatio20, 2)}x`,
      `20 日區間 ${formatPrice(stock.market.low20)} - ${formatPrice(stock.market.high20)}`,
    ].forEach((label) => chipRow.appendChild(makeChip(label)));
  }

  if (matchedStrategies.length) {
    matchedStrategies.forEach((definition) => {
      matchRow.appendChild(makeChip(definition.label, "match-chip"));
    });
  } else {
    matchRow.appendChild(
      makeChip("目前沒有明顯的技術條件同時命中", "match-chip muted")
    );
  }

  if (stock.market?.ma5) {
    [
      { label: "5 日線", value: stock.market.ma5 },
      { label: "20 日月線", value: stock.market.ma20 },
      { label: "60 日季線", value: stock.market.ma60 },
      { label: "120 日半年線", value: stock.market.ma120 },
      { label: "240 日年線", value: stock.market.ma240 },
    ].forEach((line) => {
      const card = document.createElement("div");
      card.className = "tech-card";
      card.innerHTML = `
        <span>${line.label}</span>
        <strong>${formatPrice(line.value)}</strong>
        <em>${getLineStatusLabel(stock.market.price, line.value)}</em>
      `;
      techGrid.appendChild(card);
    });
  } else {
    const note = document.createElement("p");
    note.className = "detail-note";
    note.textContent = "等待盤勢資料更新後，這裡會顯示 5 / 20 / 60 / 120 / 240 日線快照。";
    techGrid.appendChild(note);
  }

  detailCard.className = "detail-card";
  detailCard.innerHTML = "";
  detailCard.appendChild(fragment);
}

function addToBucket(stock) {
  const exists = state.bucket.find((item) => item.ticker === stock.ticker);
  if (!exists) {
    state.bucket.unshift(stock);
  } else {
    state.bucket = [stock, ...state.bucket.filter((item) => item.ticker !== stock.ticker)];
  }

  state.bucket = state.bucket.slice(0, 6);
  renderBucket();
  saveState();
}

function renderBucket() {
  if (!state.bucket.length) {
    bucketList.innerHTML = '<p class="bucket-empty">抽牌紀錄還是空的。</p>';
    return;
  }

  bucketList.innerHTML = "";
  state.bucket.forEach((stock) => {
    const item = document.createElement("div");
    item.className = "bucket-item";
    const matchedCount = getMatchedStrategyDefinitions(stock).length;
    const marketLine = stock.market?.price
      ? ` / ${formatPrice(stock.market.price)} / ${formatSigned(stock.market.changePct, 2)}%`
      : "";

    item.innerHTML = `
      <div>
        <strong>${stock.ticker} ${stock.name}</strong>
        <p>${stock.themeLabel} / ${getScore(stock)} 分 / 命中 ${matchedCount} 招${marketLine}</p>
      </div>
      <button type="button">翻牌</button>
    `;

    item.querySelector("button").addEventListener("click", () => {
      const fish = [...document.querySelectorAll(".fish")].find(
        (element) => element.dataset.ticker === stock.ticker
      );
      if (fish) {
        catchFish(stock, fish);
      } else {
        state.selectedId = stock.ticker;
        renderQuickDetail(stock);
        renderDetail(stock);
        pondStatus.textContent = `${stock.ticker} ${stock.name} 目前不在牌庫篩選清單`;
      }
    });

    bucketList.appendChild(item);
  });
}

function isFavorite(stock) {
  return state.favorites.some((item) => item.ticker === stock.ticker);
}

function toggleFavorite(stock) {
  if (isFavorite(stock)) {
    state.favorites = state.favorites.filter((item) => item.ticker !== stock.ticker);
  } else {
    state.favorites.unshift(stock);
  }

  state.favorites = state.favorites.slice(0, 12);
  saveState();
  renderAquarium();
  renderDetail(stock);
  renderQuickDetail(stock);
}

function renderAquarium() {
  aquariumCount.textContent = String(state.favorites.length);

  if (!state.favorites.length) {
    aquariumSurface.innerHTML =
      '<p class="aquarium-empty">還沒有收藏的股票牌。先抽一張牌，再加入我的牌盒。</p>';
    return;
  }

  aquariumSurface.innerHTML = "";
  state.favorites.forEach((stock, index) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = `tank-fish ${stock.heat} theme-${stock.theme} ${getFishShapeClass(stock)} trend-${getDirectionClass(stock)}`;
    item.style.animationDelay = `${index * 160}ms`;
    item.innerHTML = `
      <span class="tank-symbol">${getArcanaSymbol(stock)} / ${stock.ticker}</span>
      <strong>${stock.name}</strong>
      <span class="tank-price ${getDirectionClass(stock)}">
        ${getDirectionSymbol(stock)}
        ${stock.market?.price ? formatPrice(stock.market.price) : getCardSuitLabel(stock)}
      </span>
      <span class="tank-change ${getDirectionClass(stock)}">
        ${stock.market?.price ? `${formatSigned(stock.market.changePct, 2)}%` : getMarketModeLabel()}
      </span>
    `;
    item.addEventListener("click", () => {
      const fish = [...document.querySelectorAll(".fish")].find(
        (element) => element.dataset.ticker === stock.ticker
      );
      if (fish) {
        catchFish(stock, fish);
      } else {
        state.selectedId = stock.ticker;
        renderQuickDetail(stock);
        renderDetail(stock);
        pondStatus.textContent = `牌盒 ${stock.ticker} ${stock.name}`;
      }
    });
    aquariumSurface.appendChild(item);
  });
}

function clearStrategyFilters() {
  getStrategyCheckboxes().forEach((checkbox) => {
    checkbox.checked = false;
  });
  syncStrategyPillStates();
  updateStrategySummary();
}

function resetFilters() {
  state.pinnedTicker = null;
  horizonFilter.value = "all";
  riskFilter.value = "all";
  themeFilter.value = "all";
  avoidHotToggle.checked = false;
  clearStrategyFilters();
  renderFish();
  pondStatus.textContent = "牌陣已重設";
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js").catch((error) => {
      console.warn("Service worker registration failed", error);
    });
  }
}

function setInstallButtonsVisible(isVisible) {
  [installBtn, mobileInstallBtn].forEach((button) => {
    if (!button) {
      return;
    }

    button.hidden = false;
    button.classList.toggle("install-ready", isVisible);
  });
}

async function promptInstall() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    setInstallButtonsVisible(false);
    return;
  }

  installMessage.textContent =
    "如果你是用 iPhone 開啟，請用 Safari 的分享選單加入主畫面；Android 常見的瀏覽器則可以用右上角的安裝或加入主畫面。";
  installDialog?.showModal();
}

function castRandomFish() {
  const filtered = sortStocksForDisplay(getFilteredStocks());
  if (!filtered.length) {
    pondStatus.textContent = "目前沒有股票牌可以抽";
    return;
  }

  const pool = filtered.slice(0, Math.min(5, filtered.length));
  const chosen = pool[Math.floor(Math.random() * pool.length)];
  const fish = [...document.querySelectorAll(".fish")].find(
    (element) => element.dataset.ticker === chosen.ticker
  );

  if (fish) {
    catchFish(chosen, fish);
  }
}

function attachEvents() {
  [horizonFilter, riskFilter, themeFilter, avoidHotToggle].forEach((element) =>
    element.addEventListener("change", renderFish)
  );

  strategyFilters.addEventListener("change", (event) => {
    if (!(event.target instanceof HTMLInputElement)) {
      return;
    }

    if (!event.target.matches("[data-strategy-filter]")) {
      return;
    }

    syncStrategyPillStates();
    updateStrategySummary();
    renderFish();
  });

  clearStrategyBtn.addEventListener("click", () => {
    clearStrategyFilters();
    renderFish();
  });
  controlPanel?.querySelector(".deck-filter-details")?.addEventListener("toggle", saveState);
  castRandomBtn?.addEventListener("click", castRandomFish);
  mobileCastBtn.addEventListener("click", castRandomFish);
  tickerSearchForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    summonTickerCard(tickerSearchInput?.value);
  });
  tickerSearchInput?.addEventListener("input", () => {
    tickerSearchInput.value = normalizeTickerInput(tickerSearchInput.value);
  });
  installBtn?.addEventListener("click", promptInstall);
  mobileInstallBtn?.addEventListener("click", promptInstall);
  refreshPondBtn?.addEventListener("click", refreshMarketData);
  mobileResetBtn.addEventListener("click", resetFilters);
  window.addEventListener("resize", renderFish);
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    setInstallButtonsVisible(true);
  });
  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    setInstallButtonsVisible(false);
  });
}

function startMarketTicker() {
  window.setInterval(() => {
    if (state.marketMode === "preview") {
      return;
    }

    if (state.marketMode === "scan") {
      scanFullMarket();
      return;
    }

    refreshMarketData();
  }, MARKET_TICK_INTERVAL_MS);
}

mountFilterPanelInDeck();
renderStrategyFilters();
loadState();
const hasScannedMarket = restoreMarketScan();
if (!hasScannedMarket) {
  restoreMarketData();
}
if (isLocalFileMode() || !state.marketUpdatedAt) {
  applyPreviewMarketMode();
}
attachEvents();
renderBucket();
renderAquarium();
renderFish();
if (isLocalFileMode()) {
  pondStatus.textContent = "本機預覽不顯示股價，上傳後會更新市場資料";
} else {
  scanFullMarket();
}
startMarketTicker();
registerServiceWorker();
