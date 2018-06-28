// ǎěǐǒǔ
// āēīōū

let vocabulary = [
	{
		name: "Lektion 1",
		charCacheFile: "/cache/lection01_char_cache.json",
		words: [
			{
				german: "du, Sie",
				mandarin: "你",
				pinyin: "nǐ"
			},
			{
				german: "gut, in Ordnung",
				mandarin: "好",
				pinyin: "hǎo"
			},
			{
				german: "Fragepartikel",// für Entscheidungsfragen",
				mandarin: "吗",
				pinyin: "ma"
			},
			{
				german: "ich",
				mandarin: "我",
				pinyin: "wǒ"
			},
			{
				german: "sehr",
				mandarin: "很",
				pinyin: "hěn"
			},
			{
				german: "Modalpartikel",// für elliptische Fragen",
				mandarin: "呢",
				pinyin: "ne"
			},
			{
				german: "auch, ebenso",
				mandarin: "也",
				pinyin: "yě"
			}
		]
	},
	{
		name: "Lektion 2",
		charCacheFile: "/cache/lection02_char_cache.json",
		words: [
			{
				german: "beschäftigt sein",
				mandarin: "忙",
				pinyin: "máng"
			},
			{
				german: "Vater",
				mandarin: "爸爸",
				pinyin: "bàba"
			},
			{
				german: "Mutter",
				mandarin: "妈妈",
				pinyin: "māma"
			},
			{
				german: "sie (3. Person Plural)",
				mandarin: "他们",
				pinyin: "tāmen"
			},
			{
				german: "er",
				mandarin: "他",
				pinyin: "tā"
			},
			{
				german: "alle",
				mandarin: "都",
				pinyin: "dōu"
			},
			{
				german: "kein, nicht",
				mandarin: "不",
				pinyin: "bù"
			},
			{
				german: "männlich",
				mandarin: "男",
				pinyin: "nán"
			},
			{
				german: "Freund(-in)",
				mandarin: "朋友",
				pinyin: "péngyou"
			},
			{
				german: "älterer Bruder",
				mandarin: "哥哥",
				pinyin: "gēge"
			},
			{
				german: "wollen",
				mandarin: "要",
				pinyin: "yào"
			},
			{
				german: "Kaffee",
				mandarin: "咖啡",
				pinyin: "kāfēi"
			},
			{
				german: "jüngerer Bruder",
				mandarin: "弟弟",
				pinyin: "dìdi"
			},
			{
				german: "wir",
				mandarin: "我们",
				pinyin: "wǒmen"
			},
			{
				german: "trinken",
				mandarin: "喝",
				pinyin: "hē"
			}
		]
	},
	{
		name: "Lektion 3",
		charCacheFile: "/cache/lection03_char_cache.json",
		words: [
			{
				german: "sie (3. Person Singular)",
				mandarin: "她",
				pinyin: "tā"
			},
			{
				german: "sein",
				mandarin: "是",
				pinyin: "shì"
			},
			{
				german: "welche (-r, -s)",
				mandarin: "哪",
				pinyin: "nǎ"
			},
			{
				german: "Land, Staat",
				mandarin: "国",
				pinyin: "guó"
			},
			{
				german: "Mensch, Person",
				mandarin: "人",
				pinyin: "rén"
			},
			{
				german: "das, dort",
				mandarin: "那",
				pinyin: "nà"
			},
			{
				german: "wer",
				mandarin: "谁",
				pinyin: "shéi"
			},
			{
				german: "Lehrer(-in)",
				mandarin: "老师",
				pinyin: "lǎoshī"
			},
			{
				german: "China",
				mandarin: "中国",
				pinyin: "zhōngguó"
			},
			{
				german: "Sie (höfliche Anrede)",
				mandarin: "您",
				pinyin: "nín"
			},
			{
				german: "dies hier",
				mandarin: "这",
				pinyin: "zhè"
			},
			{
				german: "Fremdsprache",
				mandarin: "外语",
				pinyin: "wàiyǔ"
			},
			{
				german: "Arzt, Ärztin",
				mandarin: "医生",
				pinyin: "yīshēng"
			},
			{
				german: "Großmutter väterlicherseits",
				mandarin: "奶奶",
				pinyin: "nǎinai"
			},
			{
				german: "Großmutter mütterlicherseits",
				mandarin: "外婆",
				pinyin: "wàipó"
			}
		]
	},
	{
		name: "Lektion 4",
		charCacheFile: "/cache/lection04_char_cache.json",
		words: [
			{
				german: "jmd. kennen, kennenlernen",
				mandarin: "认识",
				pinyin: "rènshi"
			},
			{
				german: "glücklich, erfreut",
				mandarin: "高兴",
				pinyin: "gāoxìng"
			},
			{
				german: "können, dürfen",
				mandarin: "可以",
				pinyin: "kěyǐ"
			},
			{
				german: "hereinkommen",
				mandarin: "进来",
				pinyin: "jìnlai"
			},
			{
				german: "bitten",
				mandarin: "请",
				pinyin: "qǐng"
			},
			{
				german: "Journalist(-in)",
				mandarin: "记者",
				pinyin: "jìzhě"
			},
			{
				german: "Gestatten Sie mir die Frage...?",
				mandarin: "请问",
				pinyin: "qǐngwèn"
			},
			{
				german: "Mit wem habe ich die Ehre?",
				mandarin: "贵姓",
				pinyin: "guìxìng"
			},
			{
				german: "Nachname",
				mandarin: "姓",
				pinyin: "xìng"
			},
			{
				german: "heißen, jmd. rufen",
				mandarin: "叫",
				pinyin: "jiào"
			},
			{
				german: "Herr",
				mandarin: "先生",
				pinyin: "xiānsheng"
			},
			{
				german: "Sprache",
				mandarin: "语言",
				pinyin: "yǔyán"
			},
			{
				german: "Institut, Hochschule",
				mandarin: "学院",
				pinyin: "xuéyuàn"
			},
			{
				german: "Attributpartikel",
				mandarin: "的",
				pinyin: "de"
			},
			{
				german: "Schüler(-in), Student(-in)",
				mandarin: "学生",
				pinyin: "xuésheng"
			},
			{
				german: "was",
				mandarin: "什么",
				pinyin: "shénme"
			},
			{
				german: "lernen, studieren",
				mandarin: "学习",
				pinyin: "xuéxí"
			},
			{
				german: "Chinesisch",
				mandarin: "汉语",
				pinyin: "hànyǔ"
			},
			{
				german: "Großbritannien",
				mandarin: "英国",
				pinyin: "yīngguó"
			},
			{
				german: "Kanada",
				mandarin: "加拿大",
				pinyin: "jiānádà"
			},
			{
				german: "USA",
				mandarin: "美国",
				pinyin: "měiguó"
			}
		]
	},
	{
		name: "Lektion 5",
		charCacheFile: "/cache/lection05_char_cache.json",
		words: [
			{
				german: "Speisesaal, Restaurant",
				mandarin: "餐厅",
				pinyin: "cāntīng"
			},
			{
				german: "anwesend sein, sich befinden",
				mandarin: "在",
				pinyin: "zài"
			},
			{
				german: "wo",
				mandarin: "哪儿",
				pinyin: "nǎr"
			},
			{
				german: "Wohnheim",
				mandarin: "宿舍",
				pinyin: "sùshè"
			},
			{
				german: "weiblich",
				mandarin: "女",
				pinyin: "nǔ"		//"nǚ"
			},
			{
				german: "sitzen, sich setzen",
				mandarin: "坐",
				pinyin: "zuò"
			},
			{
				german: "sich bedanken",
				mandarin: "谢谢",
				pinyin: "xièxie"
			},
			{
				german: "Entschuldigung!",
				mandarin: "对不起",
				pinyin: "dùibuqǐ"
			},
			{
				german: "wissen",
				mandarin: "知道",
				pinyin: "zhīdao"
			},
			{
				german: "Das macht nichts!, Schon gut!",
				mandarin: "没关系",
				pinyin: "méi guānxi"
			},
			{
				german: "auf Wiedersehen",
				mandarin: "再见",
				pinyin: "zàijiàn"
			},
			{
				german: "noch einmal, wieder",
				mandarin: "再",
				pinyin: "zài"
			},
			{
				german: "Fräulein",
				mandarin: "小姐",
				pinyin: "xiǎojiě"
			},
			{
				german: "Stockwerk, Etage",
				mandarin: "层",
				pinyin: "céng"
			},
			{
				german: "Nummer",
				mandarin: "号",
				pinyin: "hào"
			},
			{
				german: "nicht brauchen",
				mandarin: "不用",
				pinyin: "búyòng"
			},
			{
				german: "hier",
				mandarin: "这儿",
				pinyin: "zhèr"
			},
			{
				german: "spät",
				mandarin: "晚",
				pinyin: "wǎn"
			},
			{
				german: "Modal-/Aspektpartikel",
				mandarin: "了",
				pinyin: "le"
			}
		]
	},
	{
		name: "Lektion 6",
		charCacheFile: "/cache/lection06_char_cache.json",
		words: [
			{
				german: "gehen",
				mandarin: "去",
				pinyin: "qù"
			},
			{
				german: "schwimmen",
				mandarin: "游泳",
				pinyin: "yóuyǒng"
			},
			{
				german: "gestern",
				mandarin: "昨天",
				pinyin: "zuótiān"
			},
			{
				german: "Pekingoper",
				mandarin: "京剧",
				pinyin: "jīngjù"
			},
			{
				german: "wie wäre es, wenn...?, was hältst du von...?",
				mandarin: "怎么样",
				pinyin: "zěnmeyàng"
			},
			{
				german: "interessant",
				mandarin: "有意思",
				pinyin: "yǒu yìsi"
			},
			{
				german: "heute",
				mandarin: "今天",
				pinyin: "jīntiān"
			},
			{
				german: "Tag",
				mandarin: "天",
				pinyin: "tiān"
			},
			{
				german: "Wetter",
				mandarin: "天气",
				pinyin: "tiānqì"
			},
			{
				german: "sehr, äußerst",
				mandarin: "太",
				pinyin: "tài"
			},
			{
				german: "Zeit(punkt)",
				mandarin: "时候",
				pinyin: "shíhou"
			},
			{
				german: "jetzt",
				mandarin: "现在",
				pinyin: "xiànzài"
			},
			{
				german: "morgen",
				mandarin: "明天",
				pinyin: "míngtiān"
			},
			{
				german: "haben, besitzen, vorhanden sein",
				mandarin: "有",
				pinyin: "yǒu"
			},
			{
				german: "Zeit(dauer)",
				mandarin: "时间",
				pinyin: "shíjiān"
			},
			{
				german: "sagen, sprechen",
				mandarin: "说",
				pinyin: "shuō"
			},
			{
				german: "-mal",
				mandarin: "遍",
				pinyin: "biàn"
			},
			{
				german: "Ball spielen",
				mandarin: "打球",
				pinyin: "dǎ qiú"
			},
			{
				german: "bedauern, bedauerlicherweise, leider",
				mandarin: "抱歉",
				pinyin: "bàoqiàn"
			},
			{
				german: "befürchten, vielleicht",
				mandarin: "恐怕",
				pinyin: "kǒngpà"
			},
			{
				german: "in Ordnung sein, es geht",
				mandarin: "行",
				pinyin: "xíng"
			}
		]
	},
	{
		name: "Lektion 7",
		charCacheFile: "/cache/lection07_char_cache.json",
		words: [
			{
				german: "mit der Schule/dem Semester beginnen",
				mandarin: "开学",
				pinyin: "kāixué"
			},
			{
				german: "öffnen, beginnen",
				mandarin: "开",
				pinyin: "kāi"
			},
			{
				german: "hoch, groß",
				mandarin: "高",
				pinyin: "gāo"
			},
			{
				german: "(an-)sehen, (an-)schauen",
				mandarin: "看",
				pinyin: "kàn"
			},
			{
				german: "fragen",
				mandarin: "问",
				pinyin: "wèn"
			},
			{
				german: "einmal, mal kurz",
				mandarin: "一下",
				pinyin: "yíxià"
			},
			{
				german: "Visitenkarte",
				mandarin: "名片",
				pinyin: "míngpiàn"
			},
			{
				german: "ah!, oh!",
				mandarin: "啊",
				pinyin: "à"
			},
			{
				german: "Professor(-in)",
				mandarin: "教授",
				pinyin: "jiàoshòu"
			},
			{
				german: "lehren, unterrichten",
				mandarin: "教",
				pinyin: "jiào"
			},
			{
				german: "jmd./etw. vorstellen",
				mandarin: "介绍",
				pinyin: "jièshào"
			},
			{
				german: "Name, Bezeichnung",
				mandarin: "名字",
				pinyin: "míngzi"
			},
			{
				german: "Chinesisch",
				mandarin: "中文",
				pinyin: "zhōngwén"
			},
			{
				german: "Fachgebiet, Studienrichtung",
				mandarin: "专业",
				pinyin: "zhuānyè"
			},
			{
				german: "bildende Kunst",
				mandarin: "美术",
				pinyin: "měishù"
			},
			{
				german: "schön",
				mandarin: "美",
				pinyin: "měi"
			},
			{
				german: "Literatur",
				mandarin: "文学",
				pinyin: "wénxué"
			},
			{
				german: "Fakultät, Fachbereich",
				mandarin: "系",
				pinyin: "xì"
			}
		]
	},
	{
		name: "Lektion 8",
		charCacheFile: "/cache/lection08_char_cache.json",
		words: [
			{
				german: "Familie; Zuhause, Heim",
				mandarin: "家",
				pinyin: "jiā"
			},
			{
				german: "wie viel, wie viele",
				mandarin: "几",
				pinyin: "jǐ"
			},
			{
				german: "Zähleinheitswort für Familienmitglieder",
				mandarin: "口",
				pinyin: "kǒu"
			},
			{
				german: "Foto",
				mandarin: "照片",
				pinyin: "zhàopiàn"
			},
			{
				german: "und",
				mandarin: "和",
				pinyin: "hé"
			},
			{
				german: "allgemeines Zähleinheitswort",
				mandarin: "个",
				pinyin: "gè"
			},
			{
				german: "ältere Schwester",
				mandarin: "姐姐",
				pinyin: "jiějie"
			},
			{
				german: "zwei",
				mandarin: "两",
				pinyin: "liǎng"
			},
			{
				german: "außerdem, dazu noch",
				mandarin: "还",
				pinyin: "hái"
			},
			{
				german: "insgesamt",
				mandarin: "一共",
				pinyin: "yígòng"
			},
			{
				german: "jüngere Schwester",
				mandarin: "妹妹",
				pinyin: "mèimei"
			},
			{
				german: "klein; jung",
				mandarin: "小",
				pinyin: "xiǎo"
			},
			{
				german: "Hund",
				mandarin: "狗",
				pinyin: "gǒu"
			},
			{
				german: "Zähleinheitswort für flache Gegenstände",
				mandarin: "张",
				pinyin: "zhāng"
			},
			{
				german: "selbstverständlich, natürlich",
				mandarin: "当然",
				pinyin: "dāngrán"
			},
			{
				german: "wahr, echt; wirklich",
				mandarin: "真",
				pinyin: "zhēn"
			},
			{
				german: "niedlich, liebenswert",
				mandarin: "可爱",
				pinyin: "kě'ài"
			},
			{
				german: "nicht",
				mandarin: "没",
				pinyin: "méi"
			},
			{
				german: "machen, tun",
				mandarin: "做",
				pinyin: "zuò"
			},
			{
				german: "arbeiten; Arbeit",
				mandarin: "工作",
				pinyin: "gōngzuò"
			},
			{
				german: "groß",
				mandarin: "大",
				pinyin: "dà"
			},
			{
				german: "wie viel, wie viele",
				mandarin: "工作",
				pinyin: "duōshao"
			},
			{
				german: "mögen, etw. gern haben",
				mandarin: "多少",
				pinyin: "xǐhuan"
			},
			{
				german: "Ausland",
				mandarin: "外国",
				pinyin: "wàiguó"
			},
			{
				german: "hundert",
				mandarin: "百",
				pinyin: "bǎi"
			}
		]
	},
	{
		name: "Lektion 9",
		charCacheFile: "/cache/lection09_char_cache.json",
		words: [
			{
				german: "dieses Jahr",
				mandarin: "今年",
				pinyin: "jīnnián"
			},
			{
				german: "Lebensjahr",
				mandarin: "岁",
				pinyin: "suì"
			},
			{
				german: "wie, wie ist...?",
				mandarin: "怎么样",
				pinyin: "zěnmeyàng"
			},
			{
				german: "Unterricht; Lektion",
				mandarin: "课",
				pinyin: "kè"
			},
			{
				german: "Woche",
				mandarin: "星期",
				pinyin: "xīngqī"
			},
			{
				german: "Vormittag, vormittags",
				mandarin: "上午",
				pinyin: "shàngwǔ"
			},
			{
				german: "Nachmittag, nachmittags",
				mandarin: "下午",
				pinyin: "xiàwǔ"
			},
			{
				german: "Sonntag",
				mandarin: "星期日",
				pinyin: "xīngqīrì"
			},
			{
				german: "Geburtstag",
				mandarin: "生日",
				pinyin: "shēngri"
			},
			{
				german: "wie alt",
				mandarin: "多大",
				pinyin: "duō dà"
			},
			{
				german: "geboren werden",
				mandarin: "出生",
				pinyin: "chūshēng"
			},
			{
				german: "im Tierkreisjahr ... geboren sein",
				mandarin: "属",
				pinyin: "shǔ"
			},
			{
				german: "Treffen, Party",
				mandarin: "聚会",
				pinyin: "jùhuì"
			},
			{
				german: "jm. gratulieren, jm. beglückwünschen",
				mandarin: "祝贺",
				pinyin: "zhùhè"
			},
			{
				german: "teilnehmen, mitmachen",
				mandarin: "参加",
				pinyin: "cānjiā"
			},
			{
				german: "essen",
				mandarin: "吃",
				pinyin: "chī"
			},
			{
				german: "Kuchen",
				mandarin: "蛋糕",
				pinyin: "dàngāo"
			},
			{
				german: "etw. kaufen",
				mandarin: "买",
				pinyin: "mǎi"
			},
			{
				german: "Flasche",
				mandarin: "瓶",
				pinyin: "píng"
			},
			{
				german: "Rotwein",
				mandarin: "红葡萄酒",
				pinyin: "hóngpútaojiǔ"
			},
			{
				german: "Peking",
				mandarin: "北京",
				pinyin: "Běijīng"
			},
			{
				german: "glücklich, vergnügt, fröhlich",
				mandarin: "快乐",
				pinyin: "kuàilè"
			},
			{
				german: "schön, hübsch",
				mandarin: "漂亮",
				pinyin: "piàoliang"
			},
			{
				german: "gebratene Ente",
				mandarin: "烤鸭",
				pinyin: "kǎoyā"
			},
			{
				german: "nochmal, wieder",
				mandarin: "再",
				pinyin: "zài"
			},
			{
				german: "Geburtstagsnudeln",
				mandarin: "寿面",
				pinyin: "shòumiàn"
			}
		]
	},
	{
		name: "Lektion 10",
		charCacheFile: "/cache/lection10_char_cache.json",
		words: [
			{
				german: "in, an, auf",
				mandarin: "在",
				pinyin: "zài"
			},
			{
				german: "CD",
				mandarin: "光盘",
				pinyin: "guāngpán"
			},
			{
				german: "Musik",
				mandarin: "音乐",
				pinyin: "yīnyuè"
			},
			{
				german: "Markthalle, Kaufhaus",
				mandarin: "商场",
				pinyin: "shāngchǎng"
			},
			{
				german: "oft, häufig",
				mandarin: "常常",
				pinyin: "chángcháng"
			},
			{
				german: "mit jm.; jm. folgen",
				mandarin: "跟",
				pinyin: "gēn"
			},
			{
				german: "bekannt, berühmt",
				mandarin: "有名",
				pinyin: "yǒumíng"
			},
			{
				german: "Buch",
				mandarin: "书",
				pinyin: "shū"
			},
			{
				german: "Zeitung",
				mandarin: "报",
				pinyin: "bào"
			},
			{
				german: "Schreibheft",
				mandarin: "本子",
				pinyin: "běnzi"
			},
			{
				german: "dort",
				mandarin: "那儿",
				pinyin: "nàr"
			},
			{
				german: "Herr",
				mandarin: "先生",
				pinyin: "xiānsheng"
			},
			{
				german: "Meister; Chef (als Anrede)",
				mandarin: "师傅",
				pinyin: "shīfu"
			},
			{
				german: "Apfel mit Bananengeschmack",
				mandarin: "香蕉苹果",
				pinyin: "xiāngjiāopíngguǒ"
			},
			{
				german: "Entschuldigung!, Verzeihung!",
				mandarin: "对不起",
				pinyin: "duìbuqǐ"
			},
			{
				german: "wie, auf welche Weise",
				mandarin: "怎么",
				pinyin: "zěnme"
			},
			{
				german: "einfach, leicht",
				mandarin: "容易",
				pinyin: "róngyì"
			},
			{
				german: "Weintraube",
				mandarin: "葡萄",
				pinyin: "pútao"
			},
			{
				german: "Geld",
				mandarin: "钱",
				pinyin: "qián"
			},
			{
				german: "Gewichtseinheit, 500 Gramm",
				mandarin: "斤",
				pinyin: "jīn"
			},
			{
				german: "Währungseinheit, 10 毛",
				mandarin: "块",
				pinyin: "kuài"
			},
			{
				german: "Währungseinheit, ein Zehntel 块",
				mandarin: "毛",
				pinyin: "máo"
			},
			{
				german: "teuer; wertvoll",
				mandarin: "贵",
				pinyin: "guì"
			},
			{
				german: "machen, tun",
				mandarin: "做",
				pinyin: "zuò"
			},
			{
				german: "Währungseinheit, ein Hundertstel 块",
				mandarin: "分",
				pinyin: "fēn"
			},
			{
				german: "jm. etw. schenken",
				mandarin: "送",
				pinyin: "sòng"
			},
			{
				german: "geben",
				mandarin: "给",
				pinyin: "gěi"
			},
			{
				german: "jm. Wechselgeld herausgeben",
				mandarin: "找",
				pinyin: "zhǎo"
			}
		]
	},
	{
		name: "Lektion 11",
		charCacheFile: "/cache/lection11_char_cache.json",
		words: [
			{
				german: "können, zu etw. fähig sein",
				mandarin: "会",
				pinyin: "huì"
			},
			{
				german: "ein bisschen, etwas",
				mandarin: "一点儿",
				pinyin: "yìdiǎnr"
			},
			{
				german: "Fahrer, Chauffeur",
				mandarin: "司机",
				pinyin: "sījī"
			},
			{
				german: "Uhr (Uhrzeitangabe)",
				mandarin: "点",
				pinyin: "diǎn"
			},
			{
				german: "fehlen; ...vor... (Uhrzeitangabe)",
				mandarin: "差",
				pinyin: "chà"
			},
			{
				german: "Viertelstunde",
				mandarin: "刻",
				pinyin: "kè"
			},
			{
				german: "zurückkehren",
				mandarin: "回",
				pinyin: "huí"
			},
			{
				german: "zum Unterricht gehen; Unterricht haben",
				mandarin: "上课",
				pinyin: "shàngkè"
			},
			{
				german: "können, in der Lage sein",
				mandarin: "能",
				pinyin: "néng"
			},
			{
				german: "ankommen, eintreffen",
				mandarin: "到",
				pinyin: "dào"
			},
			{
				german: "ach woher denn!",
				mandarin: "哪里",
				pinyin: "nǎli"
			},
			{
				german: "unterrichten, lehren",
				mandarin: "教",
				pinyin: "jiāo"
			},
			{
				german: "Englisch",
				mandarin: "英语",
				pinyin: "yīngyǔ"
			},
			{
				german: "Enkeltochter",
				mandarin: "孙女儿",
				pinyin: "sūnnür"
			},
			{
				german: "(Lebens-)Alter",
				mandarin: "岁数",
				pinyin: "suìshu"
			},
			{
				german: "noch, immer noch",
				mandarin: "还",
				pinyin: "hái"
			},
			{
				german: "Minute",
				mandarin: "分",
				pinyin: "fēn"
			},
			{
				german: "tschüss, bye bye",
				mandarin: "拜拜",
				pinyin: "báibái"
			},
			{
				german: "warum",
				mandarin: "为什么",
				pinyin: "wèishénme"
			},
			{
				german: "wegen; für",
				mandarin: "为",
				pinyin: "wèi"
			},
			{
				german: "gestern",
				mandarin: "昨天",
				pinyin: "zuótiān"
			},
			{
				german: "Ding, Sache",
				mandarin: "东西",
				pinyin: "dōngxi"
			},
			{
				german: "spielen; sich vergnügen",
				mandarin: "玩儿",
				pinyin: "wánr"
			},
			{
				german: "Abend, abends",
				mandarin: "晚上",
				pinyin: "wǎnshang"
			},
			{
				german: "halb; Hälfte",
				mandarin: "半",
				pinyin: "bàn"
			},
			{
				german: "schreiben",
				mandarin: "写",
				pinyin: "xiě"
			},
			{
				german: "chinesisches Schriftzeichen",
				mandarin: "汉字",
				pinyin: "hànzì"
			},
			{
				german: "schlafen",
				mandarin: "睡觉",
				pinyin: "shuìjiào"
			},
			{
				german: "aufstehen, das Bett verlassen",
				mandarin: "起床",
				pinyin: "qǐchuáng"
			},
			{
				german: "sollen; müssen",
				mandarin: "应该",
				pinyin: "yīnggāi"
			},
			{
				german: "Frage",
				mandarin: "问题",
				pinyin: "wèntí"
			},
			{
				german: "können; dürfen",
				mandarin: "可以",
				pinyin: "kěyǐ"
			}
		]
	},
	{
		name: "Lektion 12",
		charCacheFile: "/cache/lection12_char_cache.json",
		words: [
			{
				german: "an ganzen Körper; ganzer Körper",
				mandarin: "全身",
				pinyin: "quánshēn"
			},
			{
				german: "behaglich, angenehm; sich wohl fühlen",
				mandarin: "舒服",
				pinyin: "shūfu"
			},
			{
				german: "jede, jeder, jedes",
				mandarin: "每",
				pinyin: "měi"
			},
			{
				german: "trainieren",
				mandarin: "锻炼",
				pinyin: "duànliàn"
			},
			{
				german: "Kopf",
				mandarin: "头",
				pinyin: "tóu"
			},
			{
				german: "schmerzhaft, etw. schmerzt",
				mandarin: "疼",
				pinyin: "téng"
			},
			{
				german: "Kehle; Stimme",
				mandarin: "嗓子",
				pinyin: "sǎngzi"
			},
			{
				german: "denken; glauben, meinen; wollen, möchten",
				mandarin: "想",
				pinyin: "xiǎng"
			},
			{
				german: "Krankenhaus",
				mandarin: "医院",
				pinyin: "yīyuàn"
			},
			{
				german: "zum Arzt gehen",
				mandarin: "看病",
				pinyin: "kànbìng"
			},
			{
				german: "Körper; Gesundheit",
				mandarin: "身体",
				pinyin: "shēntǐ"
			},
			{
				german: "Modalpartikel",
				mandarin: "巴",
				pinyin: "ba"
			},
			{
				german: "oder",
				mandarin: "还是",
				pinyin: "háishi"
			},
			{
				german: "gemeinsam, zusammen",
				mandarin: "一起",
				pinyin: "yìqǐ"
			},
			{
				german: "kalt",
				mandarin: "冷",
				pinyin: "lěng"
			},
			{
				german: "etw. anziehen; etw. anhaben",
				mandarin: "穿",
				pinyin: "chuān"
			},
			{
				german: "Kleidung",
				mandarin: "衣服",
				pinyin: "yīfu"
			},
			{
				german: "sich ausruhen",
				mandarin: "休息",
				pinyin: "xiūxi"
			},
			{
				german: "für, zu Gunsten js.",
				mandarin: "给",
				pinyin: "gěi"
			},
			{
				german: "sich anmelden; etw. registrieren lassen",
				mandarin: "挂号",
				pinyin: "guàhào"
			},
			{
				german: "ein bisschen, etwas",
				mandarin: "有点儿",
				pinyin: "yǒudiǎnr"
			},
			{
				german: "sich entzünden; entzündet sein",
				mandarin: "发炎",
				pinyin: "fāyán"
			},
			{
				german: "Fieber haben",
				mandarin: "发烧",
				pinyin: "fāshāo"
			},
			{
				german: "sich erkälten; Erkältung",
				mandarin: "感冒",
				pinyin: "gǎnmào"
			},
			{
				german: "im Krankenhaus liefen, stationär behandelt werden",
				mandarin: "住院",
				pinyin: "zhùyuàn"
			},
			{
				german: "Wasser",
				mandarin: "水",
				pinyin: "shuǐ"
			},
			{
				german: "Medizin",
				mandarin: "药",
				pinyin: "yào"
			},
			{
				german: "etw. tun wollen; bereit/gewillt sein",
				mandarin: "愿意",
				pinyin: "yuànyì"
			},
			{
				german: "traditionelle chinesische Medizin",
				mandarin: "中药",
				pinyin: "zhōngyào"
			},
			{
				german: "westliche Medizin",
				mandarin: "西药",
				pinyin: "xīyào"
			}
		]
	},
	{
		name: "Zahlen und Daten",
		charCacheFile: "/cache/numbersdates_char_cache.json",
		words: [
			{
				german: "Null",
				mandarin: "零",
				pinyin: "líng"
			},
			{
				german: "Eins",
				mandarin: "一",
				pinyin: "yī"
			},
			{
				german: "Zwei",
				mandarin: "二",
				pinyin: "èr"
			},
			{
				german: "Drei",
				mandarin: "三",
				pinyin: "sān"
			},
			{
				german: "Vier",
				mandarin: "四",
				pinyin: "sì"
			},
			{
				german: "Fünf",
				mandarin: "五",
				pinyin: "wǔ"
			},
			{
				german: "Sechs",
				mandarin: "六",
				pinyin: "liù"
			},
			{
				german: "Sieben",
				mandarin: "七",
				pinyin: "qī"
			},
			{
				german: "Acht",
				mandarin: "八",
				pinyin: "bā"
			},
			{
				german: "Neun",
				mandarin: "九",
				pinyin: "jiǔ"
			},
			{
				german: "Zehn",
				mandarin: "十",
				pinyin: "shí"
			},
			{
				german: "(Kalender-)Jahr",
				mandarin: "年",
				pinyin: "nián"
			},
			{
				german: "Monat",
				mandarin: "月",
				pinyin: "yuè"
			},
			{
				german: "Monatstag",
				mandarin: "日",
				pinyin: "rì"
			},
			{
				german: "Monatstag, Nummer",
				mandarin: "号",
				pinyin: "hào"
			},
			{
				german: "Woche",
				mandarin: "星期",
				pinyin: "xīngqī"
			},
			{
				german: "Tag, Himmel",
				mandarin: "天",
				pinyin: "tiān"
			},
			{
				german: "Vormittag",
				mandarin: "上午",
				pinyin: "shàngwǔ"
			},
			{
				german: "Mittag",
				mandarin: "中午",
				pinyin: "zhōngwǔ"
			},
			{
				german: "Nachmittag",
				mandarin: "下午",
				pinyin: "xiàwǔ"
			},
			{
				german: "Abend",
				mandarin: "晚上",
				pinyin: "wǎnshang"
			},
			{
				german: "früh morgens",
				mandarin: "早上",
				pinyin: "zǎoshang"
			},
			{
				german: "wie viel",
				mandarin: "几",
				pinyin: "jī"
			},
			{
				german: "Geburtstag",
				mandarin: "生日",
				pinyin: "shēngrì"
			}
		]
	}
];


/*
	types of questions:

		german --> mandarin (multiple choice for single symbol, keyboard for multiple)
		german --> pinyin (keyboard)

		mandarin --> german (keyboard for short words, word chooser for long ones)
		mandarin --> pinyin (keyboard)

		pinyin --> german (keyboard for short words, word chooser for long ones)
		pinyin --> mandarin (multiple choice for single symbol, keyboard for multiple)
	


	input methods:

		keyboard (german)
		keyboard (pinyin)
		keyboard (mandarin)

		word chooser (german)

		multiple choice (mandarin)
*/
