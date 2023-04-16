function dropdown() {

    document.getElementById("dropdown").classList.toggle("show");

};
//dropdown function gets element with id "dropdown" in html (which is the menu) and toggles show status for it when clicked//

// https://www.w3schools.com/howto/howto_js_dropdown.asp#:~:text=Example%20Explained,dropdown%20menu%20correctly%20with%20CSS. //

//i used https://www.computerhope.com/cgi-bin/text-tool.pl for easy keying in of data//

//this is where i input all the data into different categories//

const title = [
    "Shingeki+no+Kyojin:+The+Final+Season+-+Kanketsu-hen",
    "Fullmetal+Alchemist:+Brotherhood",
    "Bleach:+Sennen+Kessen-hen",
    "Steins;Gate",
    "Gintama°",
    "Kaguya-sama+wa+Kokurasetai:+Ultra+Romantic",
    "Shingeki+no+Kyojin+Season+3+Part+2",
    "Gintama:+The+Final",
    "Gintama'",
    "Hunter+x+Hunter+(2011)",
    "Ginga+Eiyuu+Densetsu",
    "Gintama':+Enchousen",
    "Fruits+Basket:+The+Final",
    "Gintama.",
    "Kaguya-sama+wa+Kokurasetai:+First+Kiss+wa+Owaranai",
    "3-gatsu+no+Lion+2nd+Season",
    "Clannad:+After+Story",
    "Gintama",
    "Koe+no+Katachi",
    "Gintama+Movie+2:+Kanketsu-hen+-+Yorozuya+yo+Eien+Nare",
    "Bocchi+the+Rock!",
    "Code+Geass:+Hangyaku+no+Lelouch+R2",
    "Violet+Evergarden+Movie",
    "Owarimonogatari+2nd+Season",
    "Gintama.:+Shirogane+no+Tamashii-hen+-+Kouhan-sen",
    "Monster",
    "Kimi+no+Na+wa.",
    "Gintama.:+Shirogane+no+Tamashii-hen",
    "Kimetsu+no+Yaiba:+Yuukaku-hen",
    "Kingdom+3rd+Season",
    "Mob+Psycho+100+II",
    "Shingeki+no+Kyojin:+The+Final+Season",
    "Kizumonogatari+III:+Reiketsu-hen",
    "Sen+to+Chihiro+no+Kamikakushi",
    "Haikyuu!!+Karasuno+Koukou+vs.+Shiratorizawa+Gakuen+Koukou",
    "Monogatari+Series:+Second+Season",
    "Shingeki+no+Kyojin:+The+Final+Season+Part+2",
    "Shiguang+Dailiren",
    "Cowboy+Bebop",
    "Hajime+no+Ippo",
    "Kingdom+4th+Season",
    "Mob+Psycho+100+III",
    "Mushishi+Zoku+Shou+2nd+Season",
    "Shouwa+Genroku+Rakugo+Shinjuu:+Sukeroku+Futatabi-hen",
    "Vinland+Saga",
    "Vinland+Saga+Season+2",
    "Mushoku+Tensei:+Isekai+Ittara+Honki+Dasu+Part+2",
    "Rurouni+Kenshin:+Meiji+Kenkaku+Romantan+-+Tsuioku-hen",
    "86+Part+2",
    "Ashita+no+Joe+2",
    "Code+Geass:+Hangyaku+no+Lelouch",
    "Mushishi+Zoku+Shou",
    "Odd+Taxi",
    "Fate/stay+night+Movie:+Heaven's+Feel+-+III.+Spring+Song",
    "Great+Teacher+Onizuka",
    "JoJo+no+Kimyou+na+Bouken+Part+6:+Stone+Ocean+Part+3",
    "Made+in+Abyss:+Retsujitsu+no+Ougonkyou",
    "One+Piece",
    "Mononoke+Hime",
    "Violet+Evergarden",
    "Made+in+Abyss",
    "Mushishi",
    "Spy+x+Family",
    "Hajime+no+Ippo:+New+Challenger",
    "Howl+no+Ugoku+Shiro",
    "Jujutsu+Kaisen",
    "Natsume+Yuujinchou+Shi",
    "Shigatsu+wa+Kimi+no+Uso",
    "Bungou+Stray+Dogs+4th+Season",
    "Haikyuu!!+Second+Season",
    "Kaguya-sama+wa+Kokurasetai?+Tensai-tachi+no+Renai+Zunousen",
    "Chainsaw+Man",
    "Kimetsu+no+Yaiba+Movie:+Mugen+Ressha-hen",
    "Made+in+Abyss+Movie+3:+Fukaki+Tamashii+no+Reimei",
    "Suzume+no+Tojimari",
    "Tengen+Toppa+Gurren+Lagann",
    "Mo+Dao+Zu+Shi:+Wanjie+Pian",
    "Natsume+Yuujinchou+Roku",
    "Ping+Pong+the+Animation",
    "Shingeki+no+Kyojin+Season+3",
    "Cyberpunk:+Edgerunners",
    "Death+Note",
    "Evangelion:+3.0+1.0+Thrice+Upon+a+Time",
    "Seishun+Buta+Yarou+wa+Yumemiru+Shoujo+no+Yume+wo+Minai",
    "Suzumiya+Haruhi+no+Shoushitsu",
    "Mushishi+Zoku+Shou:+Suzu+no+Shizuku",
    "Hajime+no+Ippo:+Rising",
    "JoJo+no+Kimyou+na+Bouken+Part+5:+Ougon+no+Kaze",
    "Kizumonogatari+II:+Nekketsu-hen",
    "Natsume+Yuujinchou+San",
    "Ookami+Kodomo+no+Ame+to+Yuki",
    "Natsume+Yuujinchou+Go",
    "Shouwa+Genroku+Rakugo+Shinjuu",
    "Tengen+Toppa+Gurren+Lagann+Movie+2:+Lagann-hen",
    "Yojouhan+Shinwa+Taikei",
    "Ousama+Ranking",
    "Fruits+Basket+2nd+Season",
    "Karakai+Jouzu+no+Takagi-san+Movie",
    "Kenpuu+Denki+Berserk",
    "Kimi+no+Suizou+wo+Tabetai",
    "Fate/Zero+2nd+Season",
    "Haikyuu!!+To+the+Top+Part+2",
    "Zoku+Natsume+Yuujinchou",
    "Neon+Genesis+Evangelion:+The+End+of+Evangelion",
    "Mushishi:+Hihamukage",
    "Slam+Dunk",
    "Bakuman.+3rd+Season",
    "Kara+no+Kyoukai+Movie+5:+Mujun+Rasen",
    "Nana",
    "Perfect+Blue",
    "Shingeki+no+Kyojin",
    "Shoujo☆Kageki+Revue+Starlight+Movie",
    "Sora+yori+mo+Tooi+Basho",
    "Steins;Gate+0",
    "Yuru+Camp△+Season+2",
    "Yakusoku+no+Neverland",
    "Gintama+Movie+1:+Shinyaku+Benizakura-hen",
    "Gintama.:+Porori-hen",
    "Koukaku+Kidoutai:+Stand+Alone+Complex+2nd+GIG",
    "Road+of+Naruto",
    "Summertime+Render",
    "Samurai+Champloo",
    "Fate/stay+night+Movie:+Heaven's+Feel+-+II.+Lost+Butterfly",
    "Hotaru+no+Haka",
    "Kimetsu+no+Yaiba",
    "Ansatsu+Kyoushitsu+2nd+Season",
    "JoJo+no+Kimyou+na+Bouken+Part+4:+Diamond+wa+Kudakenai",
    "Uchuu+Kyoudai",
    "One+Punch+Man",
    "Shingeki+no+Kyojin+Season+2",
    "Mob+Psycho+100",
    "Aria+the+Origination",
    "Banana+Fish",
    "Jujutsu+Kaisen+0+Movie",
    "Rainbow:+Nisha+Rokubou+no+Shichinin",
    "Yuru+Camp△+Movie",
    "Chihayafuru+3",
    "Gintama:+The+Semi-Final",
    "Mahou+Shoujo+Madoka★Magica+Movie+3:+Hangyaku+no+Monogatari",
    "Kono+Subarashii+Sekai+ni+Shukufuku+wo!+Movie:+Kurenai+Densetsu",
    "Nichijou",
    "Fruits+Basket:+Prelude",
    "Golden+Kamuy+3rd+Season",
    "Yuu☆Yuu☆Hakusho",
    "Zoku+Owarimonogatari",
    "Mo+Dao+Zu+Shi",
    "Owarimonogatari",
    "Re:Zero+kara+Hajimeru+Isekai+Seikatsu+2nd+Season+Part+2",
    "Steins;Gate+Movie:+Fuka+Ryouiki+no+Déjà+vu",
    "Mushishi+Zoku+Shou:+Odoro+no+Michi",
    "Saenai+Heroine+no+Sodatekata+Fine",
    "The+First+Slam+Dunk",
    "Tian+Guan+Ci+Fu+Special",
    "Haikyuu!!",
    "JoJo+no+Kimyou+na+Bouken+Part+3:+Stardust+Crusaders+2nd+Season",
    "Karakai+Jouzu+no+Takagi-san+3",
    "Gintama:+Yorinuki+Gintama-san+on+Theater+2D",
    "Grand+Blue",
    "Kono+Oto+Tomare!+Part+2",
    "Mo+Dao+Zu+Shi:+Xian+Yun+Pian",
    "Mononoke",
    "Saiki+Kusuo+no+Ψ-nan+2",
    "Koukaku+Kidoutai:+Stand+Alone+Complex",
    "Saiki+Kusuo+no+Ψ-nan",
    "Josee+to+Tora+to+Sakana-tachi",
    "Vivy:+Fluorite+Eye's+Song",
    "Violet+Evergarden+Gaiden:+Eien+to+Jidou+Shuki+Ningyou",
    "Wu+Liuqi:+Xuanwu+Guo+Pian",
    "Major+S5",
    "Natsume+Yuujinchou+Movie:+Utsusemi+ni+Musubu",
    "Shingeki+no+Kyojin:+Kuinaki+Sentaku",
    "Hunter+x+Hunter",
    "Kaguya-sama+wa+Kokurasetai:+Tensai-tachi+no+Renai+Zunousen",
    "Gintama°:+Aizome+Kaori-hen",
    "Houseki+no+Kuni",
    "Kara+no+Kyoukai+Movie+7:+Satsujin+Kousatsu+(Go)",
    "Natsume+Yuujinchou+Roku+Specials",
    "Sayonara+no+Asa+ni+Yakusoku+no+Hana+wo+Kazarou",
    "Tensei+shitara+Slime+Datta+Ken+2nd+Season",
    "Tian+Guan+Ci+Fu",
    "3-gatsu+no+Lion",
    "Chihayafuru+2",
    "Cross+Game",
    "Kamisama+Hajimemashita:+Kako-hen",
    "Kaze+ga+Tsuyoku+Fuiteiru",
    "Barakamon",
    "Cowboy+Bebop:+Tengoku+no+Tobira",
    "Kimetsu+no+Yaiba:+Mugen+Ressha-hen",
    "Non+Non+Biyori+Nonstop",
    "Kizumonogatari+I:+Tekketsu-hen",
    "Made+in+Abyss+Movie+2:+Hourou+Suru+Tasogare",
    "Mahou+Shoujo+Madoka★Magica+Movie+2:+Eien+no+Monogatari",
    "Mushoku+Tensei:+Isekai+Ittara+Honki+Dasu",
    "Yahari+Ore+no+Seishun+Love+Comedy+wa+Machigatteiru.+Kan",
    "Baccano!",
    "Fumetsu+no+Anata+e",
    "Haikyuu!!+To+the+Top",
    "Kage+no+Jitsuryokusha+ni+Naritakute!",
    "Kaze+no+Tani+no+Nausicaä",
    "Mahou+Shoujo+Madoka★Magica",
    "Usagi+Drop",
    "Yoru+ni+Kakeru",
    "Bakuman.+2nd+Season",
    "Gintama:+Shiroyasha+Koutan",
    "Hellsing+Ultimate",
    "K-On!+Movie",
    "Re:Zero+kara+Hajimeru+Isekai+Seikatsu+2nd+Season",
    "Kiseijuu:+Sei+no+Kakuritsu",
    "Neon+Genesis+Evangelion",
    "Psycho-Pass",
    "Spy+x+Family+Part+2",
    "Boku+no+Hero+Academia+6th+Season",
    "Bakemonogatari",
    "Dr.+Stone:+Ryuusui",
    "Given",
    "Gotcha!",
    "Kidou+Senshi+Gundam:+The+Origin",
    "Kingdom+2nd+Season",
    "Uchuu+Senkan+Yamato+2199",
    "Versailles+no+Bara",
    "Violet+Evergarden:+Kitto+Ai+wo+Shiru+Hi+ga+Kuru+no+Darou",
    "Major+S6",
    "Natsume+Yuujinchou:+Itsuka+Yuki+no+Hi+ni",
    "One+Outs",
    "Kobayashi-san+Chi+no+Maid+Dragon+S",
    "Natsume+Yuujinchou+Go+Specials",
    "Ookami+to+Koushinryou+II",
    "Romeo+no+Aoi+Sora",
    "Tensei+shitara+Slime+Datta+Ken+2nd+Season+Part+2",
    "Fate/stay+night:+Unlimited+Blade+Works+2nd+Season",
    "Initial+D+First+Stage",
    "Katanagatari",
    "Kawaki+wo+Ameku",
    "Kemono+no+Souja+Erin",
    "Ano+Hi+Mita+Hana+no+Namae+wo+Bokutachi+wa+Mada+Shiranai.",
    "Boku+dake+ga+Inai+Machi",
    "Evangelion:+2.0+You+Can+(Not)+Advance",
    "Hunter+x+Hunter:+Original+Video+Animation",
    "IDOLiSH7+Third+Beat!+Part+2",
    "Natsume+Yuujinchou",
    "NHK+ni+Youkoso!",
    "Sakamichi+no+Apollon",
    "Shelter+(Music)",
    "Kuroko+no+Basket+3rd+Season",
    "Tenki+no+Ko",
    "Blue+Lock",
    "Detective+Conan+Movie+06:+The+Phantom+of+Baker+Street",
    "Diamond+no+Ace:+Second+Season",
    "Hibike!+Euphonium+2",
    "Ashita+no+Joe",
];

const genre = [
    "Action,+Drama,+Suspense",
    "Action,+Adventure,+Drama,+Fantasy",
    "Action,+Adventure,+Fantasy",
    "Drama,+Sci-Fi,+Suspense",
    "Action,+Comedy,+Sci-Fi",
    "Comedy,+Romance",
    "Action,+Drama",
    "Action,+Comedy,+Drama,+Sci-Fi",
    "Action,+Comedy,+Sci-Fi",
    "Action,+Adventure,+Fantasy",
    "Drama,+Sci-Fi",
    "Action,+Comedy,+Sci-Fi",
    "Drama,+Romance,+Supernatural",
    "Action,+Comedy,+Sci-Fi",
    "Comedy,+Drama,+Romance",
    "Drama,+Slice+of+Life",
    "Drama,+Romance,+Supernatural",
    "Action,+Comedy,+Sci-Fi",
    "Award+Winning,+Drama",
    "Action,+Comedy,+Sci-Fi",
    "Comedy",
    "+Action,+Award+Winning,+Drama,+Sci-Fi",
    "Award+Winning,+Drama,+Fantasy",
    "Comedy,+Mystery,+Supernatural",
    "Action,+Comedy,+Sci-Fi",
    "Drama,+Mystery,+Suspense",
    "Award+Winning,+Drama,+Supernatural",
    "Action,+Comedy,+Sci-Fi",
    "Action,+Fantasy",
    "Action",
    "Action,+Comedy,+Supernatural",
    "Action,+Drama",
    "Action,+Mystery,+Supernatural",
    "Adventure,+Award+Winning,+Supernatural",
    "Sports",
    "Comedy,+Mystery,+Romance,+Supernatural",
    "Action,+Drama",
    "Drama,+Supernatural",
    "Action,+Award+Winning,+Sci-Fi",
    "Sports",
    "Action",
    "Action,+Comedy,+Supernatural",
    "Adventure,+Fantasy,+Mystery,+Slice+of+Life,+Supernatural",
    "Drama",
    "Action,+Adventure,+Drama",
    "Action,+Adventure,+Drama",
    "Drama,+Fantasy,+Ecchi",
    "Action,+Drama,+Romance",
    "Action,+Drama,+Sci-Fi",
    "Drama, Sports",
    "Action,+Award+Winning,+Drama,+Sci-Fi",
    "Adventure,+Fantasy,+Mystery,+Slice+of+Life,+Supernatural",
    "Award+Winning,+Mystery",
    "Action,+Fantasy,+Supernatural",
    "Comedy,+Drama",
    "Action,+Adventure,+Supernatural",
    "Adventure,+Drama,+Fantasy,+Mystery,+Sci-Fi",
    "Action,+Adventure,+Fantasy",
    "Action,+Adventure,+Award+Winning,+Fantasy",
    "Drama,+Fantasy",
    "Adventure,+Drama,+Fantasy,+Mystery,+Sci-Fi",
    "Adventure,+Fantasy,+Mystery,+Slice+of+Life,+Supernatural",
    "Action,+Award+Winning,+Comedy",
    "Sports",
    "Adventure,+Award+Winning,+Drama,+Fantasy,+Romance",
    "Action,+Award+Winning,+Fantasy",
    "Drama,+Slice+of+Life,+Supernatural",
    "Drama,+Romance",
    "Action,+Mystery,+Supernatural",
    "Sports",
    "Comedy",
    "Action,+Fantasy",
    "Action,+Fantasy",
    "Adventure,+Drama,+Fantasy,+Mystery,+Sci-Fi",
    "Fantasy",
    "Action,+Adventure,+Award+Winning,+Sci-Fi",
    "Action,+Adventure,+Drama,+Fantasy,+Mystery",
    "Drama,+Slice+of+Life,+Supernatural",
    "Award+Winning,+Drama,+Sports",
    "Action,+Drama",
    "Action,+Sci-Fi",
    "Supernatural,+Suspense",
    "Action,+Award+Winning,+Drama,+Sci-Fi,+Suspense",
    "Drama,+Romance,+Supernatural",
    "Award+Winning,+Mystery,+Sci-Fi,+Supernatural",
    "Adventure,+Fantasy,+Mystery,+Slice+of+Life,+Supernatural",
    "Sports",
    "Action,+Adventure,+Supernatural",
    "Action,+Mystery,+Supernatural",
    "Drama,+Slice+of+Life,+Supernatural",
    "Award+Winning,+Fantasy,+Slice+of+Life",
    "Drama,+Slice+of+Life,+Supernatural",
    "Drama",
    "Action,+Sci-Fi",
    "Award+Winning,+Comedy,+Mystery,+Romance",
    "Adventure,+Fantasy",
    "Drama,+Romance,+Supernatural",
    "Romance,+Comedy,+Drama",
    "Action,+Adventure,+Drama,+Fantasy,+Horror",
    "Drama,+Romance",
    "Action,+Fantasy,+Supernatural",
    "Sports",
    "Drama,+Slice+of+Life,+Supernatural",
    "Avant+Garde,+Drama,+Sci-Fi",
    "Adventure,+Fantasy,+Mystery,+Slice+of+Life,+Supernatural",
    "Sports",
    "Comedy,+Drama,+Romance",
    "Action,+Drama,+Mystery,+Romance,+Supernatural,+Suspense",
    "Drama,+Romance",
    "Avant+Garde,+Drama,+Horror",
    "Action,+Award+Winning,+Drama,+Suspense",
    "Action,+Drama,+Music,+Psychological",
    "Adventure,+Comedy,+Drama",
    "Drama,+Sci-Fi,+Suspense",
    "Slice+of+Life",
    "Mystery,+Sci-Fi,+Suspense",
    "Action,+Comedy,+Sci-Fi",
    "Action,+Comedy,+Sci-Fi",
    "Action,+Mystery,+Sci-Fi",
    "Action,+Fantasy",
    "Mystery,+Supernatural,+Suspense",
    "Action,+Adventure,+Comedy",
    "Action,+Fantasy,+Supernatural",
    "Drama",
    "Action,+Award+Winning,+Fantasy",
    "Action,+Comedy",
    "Action,+Adventure,+Supernatural",
    "Comedy,+Sci-Fi",
    "Action,+Comedy",
    "Action,+Drama,+Suspense",
    "Action,+Comedy,+Supernatural",
    "Fantasy,+Sci-Fi,+Slice+of+Life",
    "Action,+Adventure,+Drama,+Suspense",
    "Action,+Fantasy",
    "Drama, Suspense",
    "Slice+of+Life",
    "Drama,+Sports",
    "Action,+Comedy",
    "Award+Winning,+Drama,+Mystery,+Suspense",
    "Adventure,+Comedy,+Fantasy",
    "Comedy",
    "Drama,+Romance",
    "Action,+Adventure",
    "Action,+Comedy,+Supernatural",
    "Comedy,+Mystery,+Supernatural",
    "Action,+Adventure,+Drama,+Fantasy,+Mystery",
    "Comedy,+Mystery,+Supernatural",
    "Drama,+Fantasy,+Suspense",
    "Drama,+Sci-Fi",
    "Adventure,+Fantasy,+Mystery,+Slice+of+Life,+Supernatural",
    "Comedy,+Romance",
    "Sports",
    "Drama,+Supernatural",
    "Sports",
    "Action,+Adventure,+Drama,+Supernatural",
    "Comedy",
    "Action,+Comedy,+Sci-Fi",
    "Comedy",
    "Drama,+Romance",
    "Action,+Adventure,+Drama,+Fantasy,+Mystery",
    "Fantasy,+Horror,+Mystery,+Supernatural",
    "Comedy,+Supernatural",
    "Action,+Award+Winning,+Sci-Fi",
    "Comedy,+Supernatural",
    "Drama,+Romance",
    "Action,+Sci-Fi,+Suspense",
    "Drama,+Fantasy",
    "Action,+Adventure,+Comedy,+Drama,+Mystery",
    "Sports",
    "Drama,+Slice+of+Life,+Supernatural",
    "Action",
    "Action,+Adventure,+Fantasy",
    "Comedy",
    "Comedy",
    "Action,+Drama,+Fantasy,+Mystery",
    "Action,+Mystery,+Romance,+Supernatural,+Suspense",
    "Drama,+Slice+of+Life,+Supernatural",
    "Drama,+Fantasy",
    "Action,+Adventure,+Comedy,+Fantasy",
    "Action,+Adventure,+Drama,+Supernatural",
    "Drama,+Slice+of+Life",
    "Drama,+Sports",
    "Drama,+Romance,+Sports",
    "Comedy,+Fantasy,+Romance",
    "Drama,+Sports",
    "Slice+of+Life",
    "Action,+Sci-Fi",
    "Action,+Fantasy",
    "Slice+of+Life",
    "Action,+Mystery,+Supernatural",
    "Adventure,+Drama,+Fantasy,+Mystery,+Sci-Fi",
    "Drama,+Suspense",
    "Drama,+Fantasy,+Ecchi",
    "Comedy,+Romance",
    "Action,+Comedy,+Mystery,+Supernatural",
    "Adventure,+Drama,+Supernatural",
    "Sports",
    "Action,+Comedy,+Fantasy",
    "Adventure,+Award+Winning,+Fantasy",
    "Award+Winning,+Drama,+Suspense",
    "Slice+of+Life",
    "Music",
    "Comedy,+Drama,+Romance",
    "Action,+Comedy,+Sci-Fi",
    "Action,+Horror,+Supernatural",
    "Award+Winning,+Comedy",
    "Drama,+Fantasy,+Suspense",
    "Action,+Horror,+Sci-Fi",
    "Action,+Avant+Garde,+Award+Winning,+Drama,+Sci-Fi,+Suspense",
    "Action,+Sci-Fi,+Suspense",
    "Action,+Comedy",
    "Action",
    "Mystery,+Romance,+Supernatural",
    "Adventure,+Comedy,+Sci-Fi",
    "Boys+Love,+Drama,+Romance",
    "Fantasy",
    "Action,+Sci-Fi",
    "Action",
    "Action,+Drama,+Sci-Fi",
    "Drama,+Romance",
    "Drama,+Fantasy",
    "Sports",
    "Drama,+Slice+of+Life,+Supernatural",
    "Sports",
    "Fantasy,+Slice+of+Life",
    "Drama,+Slice+of+Life,+Supernatural",
    "Adventure,+Fantasy,+Romance",
    "Adventure,+Drama,+Slice+of+Life",
    "Action,+Adventure,+Comedy,+Fantasy",
    "Action,+Fantasy,+Supernatural",
    "Action,+Drama",
    "Action,+Adventure,+Romance",
    "",
    "Drama,+Fantasy",
    "Drama,+Supernatural",
    "Mystery,+Supernatural,+Suspense",
    "Action,+Drama,+Sci-Fi",
    "Action,+Adventure,+Fantasy",
    "Drama",
    "Drama,+Slice+of+Life,+Supernatural",
    "Comedy,+Drama,+Romance",
    "Drama,+Romance",
    "Sci-Fi",
    "Sports",
    "Award+Winning,+Drama,+Fantasy,+Romance",
    "Sports",
    "Adventure,+Mystery",
    "Sports",
    "Drama",
    "Drama,+Sports",
]

const studiolist = [
    "eightbit",
    "A1Pictures",
    "Aniplex",
    "Artland",
    "BCMAYPICTURES",
    "BandaiEntertainment",
    "MangaEntertainment",
    "BandaiNamcoPictures",
    "Bones",
    "BrainsBase",
    "MarvyJack",
    "CStation",
    "CloverWorks",
    "CoMixWaveFilms",
    "DavidProduction",
    "Gainax",
    "ProductionIG",
    "TatsunokoProduction",
    "Gallop",
    "StudioComet",
    "GenoStudio",
    "Gonzo",
    "HalFilmMaker",
    "HaolinersAnimationLeague",
    "JCStaff",
    "EggFirm",
    "KFactory",
    "KittyFilmMitakaStudio",
    "Khara",
    "KinemaCitrus",
    "KyotoAnimation",
    "Lerche",
    "Madhouse",
    "MAPPA",
    "Satelight",
    "Graphinica",
    "Manglobe",
    "MushiProduction",
    "Nexus",
    "NipponAnimation",
    "OLM",
    "PICS",
    "Orange",
    "PAWorks",
    "Pierrot",
    "StudioSignpost",
    "PlatinumVision",
    "TransArts",
    "SentaiFilmworks",
    "Shaft",
    "SharefunStudio",
    "ShinEiAnimation",
    "Shuka",
    "SILVERLINK",
    "StudioBind",
    "StudioChizu",
    "StudioDeen",
    "StudioGhibli",
    "StudioLAN",
    "StudioVOLN",
    "Sunrise",
    "SynergySP",
    "TezukaProductions",
    "TMSEntertainment",
    "ToeiAnimation",
    "DandeLionAnimationStudio",
    "TokyoMovieShinsha",
    "Topcraft",
    "Trigger",
    "TROYCA",
    "ufotable",
    "WhiteFox",
    "WitStudio",
    "Xebec",
    "AIC",
    "ZeroG",
]

const popularity = [
    609,
    3,
    508,
    13,
    335,
    221,
    26,
    1581,
    385,
    10,
    724,
    712,
    494,
    744,
    1872,
    550,
    111,
    138,
    19,
    960,
    597,
    47,
    375,
    557,
    1187,
    145,
    11,
    1106,
    108,
    2064,
    76,
    41,
    467,
    44,
    114,
    291,
    124,
    779,
    43,
    369,
    2838,
    376,
    867,
    1203,
    88,
    615,
    233,
    818,
    501,
    2966,
    20,
    762,
    559,
    693,
    217,
    1608,
    591,
    21,
    103,
    50,
    93,
    208,
    91,
    829,
    95,
    17,
    930,
    23,
    1124,
    85,
    96,
    106,
    84,
    504,
    1517,
    64,
    2375,
    1235,
    567,
    18,
    389,
    2,
    639,
    284,
    333,
    1636,
    922,
    154,
    486,
    905,
    219,
    1238,
    788,
    1065,
    484,
    358,
    443,
    2796,
    328,
    174,
    128,
    236,
    916,
    178,
    1528,
    791,
    673,
    951,
    320,
    296,
    1,
    5046,
    426,
    191,
    1078,
    38,
    1363,
    1144,
    999,
    4273,
    519,
    105,
    594,
    303,
    7,
    86,
    131,
    1159,
    4,
    12,
    33,
    1627,
    204,
    281,
    551,
    2538,
    1545,
    2435,
    592,
    249,
    185,
    2101,
    1400,
    289,
    1032,
    1024,
    442,
    203,
    346,
    1953,
    1272,
    4936,
    3320,
    36,
    133,
    1296,
    3137,
    245,
    1340,
    1954,
    717,
    329,
    539,
    136,
    575,
    411,
    541,
    2853,
    2394,
    2441,
    414,
    354,
    54,
    2168,
    479,
    1094,
    3068,
    527,
    183,
    1713,
    288,
    966,
    1656,
    1353,
    777,
    298,
    596,
    338,
    1734,
    399,
    1667,
    1114,
    120,
    272,
    176,
    205,
    179,
    513,
    605,
    98,
    417,
    4781,
    629,
    2433,
    170,
    695,
    135,
    42,
    45,
    59,
    250,
    427,
    83,
    1205,
    380,
    3860,
    2401,
    1700,
    1772,
    2021,
    714,
    2575,
    2239,
    954,
    395,
    3095,
    428,
    2935,
    283,
    194,
    620,
    362,
    3893,
    2128,
    63,
    30,
    392,
    1637,
    5794,
    387,
    255,
    577,
    677,
    242,
    161,
    439,
    2289,
    1541,
    1017,
    2112,
]

const studio = [
    "MAPPA",
    "Bones",
    "Pierrot",
    "White+Fox",
    "Bandai+Namco+Pictures",
    "A-1+Pictures",
    "Wit+Studio",
    "Bandai+Namco+Pictures",
    "Sunrise",
    "Madhouse",
    "K-Factory+Kitty+Film+Mitaka+Studio",
    "Sunrise",
    "TMS+Entertainment",
    "Bandai+Namco+Pictures",
    "A-1+Pictures",
    "Shaft",
    "Kyoto+Animation",
    "Sunrise",
    "Kyoto+Animation",
    "Sunrise",
    "CloverWorks",
    "Sunrise",
    "Kyoto+Animation",
    "Shaft",
    "Bandai+Namco+Pictures",
    "Madhouse",
    "CoMix+Wave+Films",
    "Bandai+Namco+Pictures",
    "ufotable",
    "Pierrot,+Studio+Signpost",
    "Bones",
    "MAPPA",
    "Shaft",
    "Studio+Ghibli",
    "Production+I.G",
    "Shaft",
    "MAPPA",
    "Studio+LAN",
    "Sunrise",
    "Madhouse",
    "Pierrot,+Studio+Signpost",
    "Bones",
    "Artland",
    "Studio+Deen",
    "Wit+Studio",
    "MAPPA",
    "Studio+Bind",
    "Studio+Deen",
    "A-1+Pictures",
    "Tokyo+Movie+Shinsha",
    "Sunrise",
    "Artland",
    "OLM,+P.I.C.S.",
    "ufotable",
    "Pierrot",
    "David+Production",
    "Kinema+Citrus",
    "Toei+Animation",
    "Studio+Ghibli",
    "Kyoto+Animation",
    "Kinema+Citrus",
    "Artland",
    "Wit+Studio,+CloverWorks",
    "Madhouse",
    "Studio+Ghibli",
    "MAPPA",
    "Brain's+Base",
    "A-1+Pictures",
    "Bones",
    "Production+I.G",
    "A-1+Pictures",
    "MAPPA",
    "ufotable",
    "Kinema+Citrus",
    "CoMix+Wave+Films",
    "Gainax",
    "B.CMAY+PICTURES",
    "Shuka",
    "Tatsunoko+Production",
    "Wit+Studio",
    "Trigger",
    "Madhouse",
    "Khara",
    "CloverWorks",
    "Kyoto+Animation",
    "Artland",
    "Madhouse,+MAPPA",
    "David+Production",
    "Shaft",
    "Brain's+Base",
    "Studio+Chizu",
    "Shuka",
    "Studio+Deen",
    "Gainax",
    "Madhouse",
    "Wit+Studio",
    "TMS+Entertainment",
    "Shin-Ei+Animation",
    "OLM",
    "Studio+VOLN",
    "ufotable",
    "Production+I.G",
    "Brain's+Base",
    "Gainax,+Production+I.G",
    "Artland",
    "Toei+Animation",
    "J.C.Staff",
    "ufotable",
    "Madhouse",
    "Madhouse",
    "Wit+Studio",
    "Kinema+Citrus",
    "Madhouse",
    "White+Fox",
    "C-Station",
    "CloverWorks",
    "Sunrise",
    "Bandai+Namco+Pictures",
    "Bandai+Entertainment,+Manga+Entertainment",
    "Pierrot",
    "OLM",
    "Manglobe",
    "ufotable",
    "Studio+Ghibli",
    "ufotable",
    "Lerche",
    "David+Production",
    "A-1+Pictures",
    "Madhouse",
    "Wit+Studio",
    "Bones",
    "Hal+Film+Maker",
    "MAPPA",
    "MAPPA",
    "Madhouse",
    "C-Station",
    "Madhouse",
    "Bandai+Namco+Pictures",
    "Shaft",
    "J.C.Staff",
    "Kyoto+Animation",
    "TMS+Entertainment",
    "Geno+Studio",
    "Pierrot",
    "Shaft",
    "B.CMAY+PICTURES",
    "Shaft",
    "White+Fox",
    "White+Fox",
    "Artland",
    "Aniplex",
    "Toei+Animation,+DandeLion+Animation+Studio",
    "Haoliners+Animation+League",
    "Production+I.G",
    "David+Production",
    "Shin-Ei+Animation",
    "Sunrise",
    "Zero-G",
    "Platinum+Vision",
    "B.CMAY+PICTURES",
    "Toei+Animation",
    "J.C.Staff,+Egg+Firm",
    "Production+I.G",
    "J.C.Staff,+Egg+Firm",
    "Bones",
    "Wit+Studio",
    "Kyoto+Animation",
    "Sharefun+Studio",
    "SynergySP",
    "Shuka",
    "Wit+Studio",
    "Nippon+Animation",
    "A-1+Pictures",
    "Bandai+Namco+Pictures",
    "Orange",
    "ufotable",
    "Shuka",
    "P.A.+Works",
    "8bit",
    "Haoliners+Animation+League",
    "Shaft",
    "Madhouse",
    "SynergySP",
    "TMS+Entertainment",
    "Production+I.G",
    "Kinema+Citrus",
    "Bones",
    "ufotable",
    "SILVER+LINK.",
    "Shaft",
    "Kinema+Citrus",
    "Shaft",
    "Studio+Bind",
    "Sentai+Filmworks",
    "Brain's+Base",
    "Brain's+Base",
    "Production+I.G",
    "Nexus",
    "Topcraft",
    "Shaft",
    "Production+I.G",
    "",
    "J.C.Staff",
    "Sunrise",
    "Madhouse,+Satelight,+Graphinica",
    "Kyoto+Animation",
    "White+Fox",
    "Madhouse",
    "Gainax,+Tatsunoko+Production",
    "Production+I.G",
    "Wit+Studio,+CloverWorks",
    "Bones",
    "Shaft",
    "TMS+Entertainment",
    "Lerche",
    "Bones",
    "Sunrise",
    "Pierrot",
    "Xebec,+AIC",
    "Tokyo+Movie+Shinsha",
    "Kyoto+Animation",
    "SynergySP",
    "Brain's+Base",
    "Madhouse",
    "Kyoto+Animation",
    "Shuka",
    "Brain's+Base,+Marvy+Jack",
    "Nippon+Animation",
    "8bit",
    "ufotable",
    "Gallop,+Studio+Comet",
    "White+Fox",
    "",
    "Production+I.G,+Trans+Arts",
    "A-1+Pictures",
    "A-1+Pictures",
    "Khara",
    "Nippon+Animation",
    "TROYCA",
    "Brain's+Base",
    "Gonzo",
    "Tezuka+Productions,+MAPPA",
    "A-1+Pictures",
    "Production+I.G",
    "CoMix+Wave+Films",
    "8bit",
    "TMS+Entertainment",
    "Production+I.G,+Madhouse",
    "Kyoto+Animation",
    "Mushi+Production",
]

const type = [
    "Special",
    "TV",
    "TV",
    "TV",
    "TV",
    "TV",
    "TV",
    "Movie",
    "TV",
    "TV",
    "OVA",
    "TV",
    "TV",
    "TV",
    "Movie",
    "TV",
    "TV",
    "TV",
    "Movie",
    "Movie",
    "TV",
    "TV",
    "Movie",
    "TV",
    "TV",
    "TV",
    "Movie",
    "TV",
    "TV",
    "TV",
    "TV",
    "TV",
    "Movie",
    "Movie",
    "TV",
    "TV",
    "TV",
    "ONA",
    "TV",
    "TV",
    "TV",
    "TV",
    "TV",
    "TV",
    "TV",
    "TV",
    "TV",
    "OVA",
    "TV",
    "TV",
    "TV",
    "TV",
    "TV",
    "Movie",
    "TV",
    "ONA",
    "TV",
    "TV",
    "Movie",
    "TV",
    "TV",
    "TV",
    "TV",
    "TV",
    "Movie",
    "TV",
    "TV",
    "TV",
    "TV",
    "TV",
    "TV",
    "TV",
    "Movie",
    "Movie",
    "Movie",
    "TV",
    "ONA",
    "TV",
    "TV",
    "TV",
    "ONA",
    "TV",
    "Movie",
    "Movie",
    "Movie",
    "Movie",
    "TV",
    "TV",
    "Movie",
    "TV",
    "Movie",
    "TV",
    "TV",
    "Movie",
    "TV",
    "TV",
    "TV",
    "Movie",
    "TV",
    "Movie",
    "TV",
    "TV",
    "TV",
    "Movie",
    "Special",
    "TV",
    "TV",
    "Movie",
    "TV",
    "Movie",
    "TV",
    "Movie",
    "TV",
    "TV",
    "TV",
    "TV",
    "Movie",
    "TV",
    "TV",
    "ONA",
    "TV",
    "TV",
    "Movie",
    "Movie",
    "TV",
    "TV",
    "TV",
    "TV",
    "TV",
    "TV",
    "TV",
    "TV",
    "TV",
    "Movie",
    "TV",
    "Movie",
    "TV",
    "Special",
    "Movie",
    "Movie",
    "TV",
    "Movie",
    "TV",
    "TV",
    "Movie",
    "ONA",
    "TV",
    "TV",
    "Movie",
    "Special",
    "Movie",
    "Movie",
    "ONA",
    "TV",
    "TV",
    "TV",
    "Movie",
    "TV",
    "TV",
    "ONA",
    "TV",
    "TV",
    "TV",
    "TV",
    "Movie",
    "TV",
    "Movie",
    "ONA",
    "TV",
    "Movie",
    "OVA",
    "TV",
    "TV",
    "OVA",
    "TV",
    "Movie",
    "Special",
    "Movie",
    "TV",
    "ONA",
    "TV",
    "TV",
    "TV",
    "OVA",
    "TV",
    "TV",
    "Movie",
    "TV",
    "TV",
    "Movie",
    "Movie",
    "Movie",
    "TV",
    "TV",
    "TV",
    "TV",
    "TV",
    "TV",
    "Movie",
    "TV",
    "TV",
    "Music",
    "TV",
    "Special",
    "OVA",
    "Movie",
    "TV",
    "TV",
    "TV",
    "TV",
    "TV",
    "TV",
    "TV",
    "Special",
    "TV",
    "Music",
    "OVA",
    "TV",
    "OVA",
    "TV",
    "Special",
    "TV",
    "OVA",
    "TV",
    "TV",
    "Special",
    "TV",
    "TV",
    "TV",
    "TV",
    "TV",
    "TV",
    "Music",
    "TV",
    "TV",
    "TV",
    "Movie",
    "OVA",
    "TV",
    "TV",
    "TV",
    "TV",
    "Music",
    "TV",
    "Movie",
    "TV",
    "Movie",
    "TV",
    "TV",
    "TV",
]

const episodes = [
    2,
    64,
    13,
    24,
    51,
    13,
    10,
    1,
    51,
    148,
    110,
    13,
    13,
    12,
    1,
    22,
    24,
    201,
    1,
    1,
    12,
    25,
    1,
    7,
    14,
    74,
    1,
    12,
    11,
    26,
    13,
    16,
    1,
    1,
    10,
    26,
    12,
    11,
    26,
    75,
    26,
    12,
    10,
    12,
    24,
    24,
    12,
    4,
    12,
    47,
    25,
    10,
    13,
    1,
    43,
    14,
    12,
    ,
    1,
    13,
    13,
    26,
    12,
    26,
    1,
    24,
    13,
    22,
    13,
    25,
    12,
    12,
    1,
    1,
    1,
    27,
    12,
    11,
    11,
    12,
    10,
    37,
    1,
    1,
    1,
    1,
    25,
    39,
    1,
    13,
    1,
    11,
    13,
    1,
    11,
    23,
    25,
    1,
    25,
    1,
    12,
    12,
    13,
    1,
    1,
    101,
    25,
    1,
    47,
    1,
    25,
    1,
    13,
    23,
    13,
    12,
    1,
    13,
    26,
    1,
    25,
    26,
    1,
    1,
    26,
    25,
    39,
    99,
    12,
    12,
    12,
    13,
    24,
    1,
    26,
    1,
    24,
    2,
    1,
    1,
    26,
    1,
    12,
    112,
    6,
    15,
    12,
    12,
    1,
    1,
    1,
    1,
    1,
    25,
    24,
    12,
    2,
    12,
    13,
    8,
    12,
    24,
    26,
    120,
    1,
    13,
    1,
    10,
    25,
    1,
    2,
    62,
    12,
    2,
    12,
    1,
    2,
    1,
    12,
    11,
    22,
    25,
    50,
    4,
    23,
    12,
    1,
    7,
    12,
    1,
    1,
    1,
    11,
    12,
    13,
    20,
    13,
    20,
    1,
    12,
    11,
    1,
    25,
    1,
    10,
    1,
    13,
    24,
    26,
    22,
    13,
    25,
    15,
    1,
    11,
    1,
    6,
    39,
    26,
    40,
    1,
    25,
    1,
    25,
    12,
    2,
    12,
    33,
    12,
    13,
    26,
    12,
    1,
    50,
    11,
    12,
    1,
    8,
    17,
    13,
    24,
    12,
    1,
    25,
    1,
    24,
    1,
    51,
    13,
    79,
]

const duration = [
    61,
    24,
    24,
    24,
    24,
    23,
    23,
    104,
    24,
    23,
    26,
    24,
    23,
    24,
    96,
    25,
    24,
    24,
    130,
    110,
    23,
    24,
    140,
    22,
    24,
    24,
    106,
    24,
    26,
    25,
    24,
    23,
    83,
    124,
    24,
    25,
    23,
    23,
    24,
    23,
    24,
    23,
    23,
    24,
    24,
    25,
    23,
    29,
    23,
    24,
    24,
    24,
    23,
    122,
    25,
    24,
    25,
    24,
    133,
    24,
    25,
    23,
    24,
    23,
    119,
    23,
    24,
    22,
    23,
    24,
    24,
    24,
    116,
    105,
    121,
    24,
    24,
    23,
    23,
    23,
    25,
    23,
    155,
    90,
    161,
    47,
    22,
    23,
    64,
    24,
    117,
    23,
    26,
    125,
    22,
    22,
    23,
    73,
    25,
    108,
    24,
    23,
    24,
    86,
    45,
    23,
    24,
    114,
    23,
    81,
    24,
    120,
    23,
    23,
    23,
    22,
    95,
    23,
    25,
    9,
    23,
    24,
    117,
    88,
    23,
    23,
    23,
    24,
    24,
    24,
    24,
    24,
    22,
    104,
    22,
    120,
    22,
    24,
    116,
    90,
    23,
    68,
    23,
    24,
    28,
    25,
    26,
    29,
    90,
    47,
    114,
    124,
    22,
    24,
    23,
    24,
    96,
    24,
    23,
    24,
    22,
    24,
    25,
    5,
    98,
    24,
    91,
    16,
    24,
    104,
    27,
    23,
    25,
    26,
    24,
    121,
    23,
    115,
    23,
    25,
    25,
    22,
    23,
    30,
    23,
    22,
    115,
    24,
    24,
    64,
    105,
    109,
    23,
    24,
    24,
    25,
    24,
    23,
    117,
    24,
    22,
    4,
    24,
    10,
    49,
    110,
    27,
    23,
    24,
    23,
    24,
    23,
    25,
    54,
    22,
    3,
    71,
    25,
    25,
    24,
    34,
    24,
    23,
    23,
    23,
    23,
    24,
    23,
    23,
    24,
    25,
    50,
    4,
    25,
    22,
    23,
    112,
    24,
    24,
    24,
    24,
    22,
    6,
    24,
    112,
    24,
    107,
    24,
    23,
    25,
]

const members = [
    347875,
    3109951,
    404036,
    2393767,
    581994,
    772019,
    2045115,
    126411,
    513321,
    2596435,
    299874,
    303048,
    412917,
    291330,
    100847,
    376498,
    1134162,
    1006869,
    2142847,
    224966,
    354287,
    1670371,
    524302,
    373320,
    180818,
    973346,
    2541050,
    195242,
    1161501,
    87348,
    1396286,
    1792439,
    431963,
    1726236,
    1119267,
    639359,
    1077191,
    279830,
    1737593,
    531069,
    50228,
    524158,
    250662,
    178138,
    1294710,
    343567,
    745276,
    266140,
    406768,
    46442,
    2117043,
    284069,
    372968,
    312624,
    774672,
    124312,
    358006,
    2111259,
    1168616,
    1639865,
    1261617,
    782453,
    1270543,
    261340,
    1224115,
    2172366,
    233102,
    2071416,
    190819,
    1335487,
    1222648,
    1166728,
    1339410,
    406426,
    132505,
    1526623,
    68971,
    174484,
    367423,
    2156970,
    509453,
    3646544,
    335420,
    647621,
    583308,
    121292,
    235267,
    932997,
    417993,
    240209,
    772640,
    173807,
    278102,
    204257,
    421380,
    544568,
    455317,
    51581,
    592903,
    868840,
    1059895,
    735480,
    236841,
    859494,
    131609,
    277078,
    317901,
    228244,
    604687,
    632700,
    3673536,
    14905,
    470253,
    814845,
    200839,
    1828212,
    154620,
    187533,
    218620,
    22408,
    397755,
    1168182,
    355414,
    624174,
    2723019,
    1333996,
    1030201,
    184621,
    3001104,
    2511603,
    1913735,
    121935,
    790602,
    654386,
    376061,
    61703,
    129607,
    66472,
    356362,
    703341,
    838490,
    85185,
    148404,
    643141,
    211028,
    212540,
    455848,
    791204,
    563350,
    95490,
    168490,
    15885,
    37640,
    1834323,
    1024367,
    164189,
    41859,
    712136,
    158766,
    95465,
    301388,
    590901,
    380555,
    1011926,
    364158,
    480615,
    378876,
    49829,
    68186,
    65995,
    479077,
    555659,
    1589998,
    80188,
    425008,
    198318,
    43413,
    392856,
    844957,
    114763,
    643278,
    224270,
    119677,
    156243,
    280547,
    629615,
    355019,
    580502,
    113219,
    498415,
    118805,
    193201,
    1109635,
    666880,
    868216,
    788650,
    855653,
    401441,
    350535,
    1216504,
    474733,
    17321,
    340590,
    66519,
    873865,
    312101,
    1017677,
    1750061,
    1682807,
    1546264,
    702329,
    469599,
    1339481,
    177986,
    ,
    ,
    68029,
    115407,
    109983,
    90398,
    302603,
    60276,
    76401,
    226114,
    505995,
    42738,
    469580,
    47115,
    652985,
    808708,
    343120,
    539069,
    27496,
    82493,
    1533937,
    1957605,
    507389,
    121184,
    10566,
    511249,
    695211,
    364061,
    316898,
    715614,
    897817,
    459426,
    73487,
    130376,
    213707,
    83604,
]

const score = [
    9.17,
    9.11,
    9.09,
    9.08,
    9.07,
    9.06,
    9.06,
    9.05,
    9.04,
    9.04,
    9.03,
    9.03,
    9.01,
    8.99,
    8.95,
    8.94,
    8.94,
    8.94,
    8.94,
    8.92,
    8.91,
    8.91,
    8.91,
    8.89,
    8.88,
    8.86,
    8.85,
    8.81,
    8.81,
    8.81,
    8.8,
    8.8,
    8.79,
    8.78,
    8.78,
    8.77,
    8.77,
    8.75,
    8.75,
    8.75,
    8.75,
    8.74,
    8.73,
    8.73,
    8.73,
    8.71,
    8.71,
    8.71,
    8.71,
    8.71,
    8.7,
    8.7,
    8.7,
    8.69,
    8.69,
    8.68,
    8.68,
    8.68,
    8.67,
    8.67,
    8.66,
    8.66,
    8.66,
    8.66,
    8.66,
    8.65,
    8.65,
    8.65,
    8.64,
    8.64,
    8.64,
    8.63,
    8.63,
    8.63,
    8.63,
    8.63,
    8.62,
    8.62,
    8.62,
    8.62,
    8.62,
    8.62,
    8.61,
    8.61,
    8.61,
    8.6,
    8.59,
    8.58,
    8.58,
    8.58,
    8.58,
    8.57,
    8.57,
    8.57,
    8.57,
    8.56,
    8.56,
    8.56,
    8.56,
    8.56,
    8.55,
    8.55,
    8.55,
    8.55,
    8.54,
    8.54,
    8.54,
    8.53,
    8.53,
    8.53,
    8.53,
    8.53,
    8.53,
    8.53,
    8.53,
    8.52,
    8.52,
    8.52,
    8.52,
    8.52,
    8.52,
    8.51,
    8.51,
    8.51,
    8.51,
    8.5,
    8.5,
    8.5,
    8.5,
    8.5,
    8.49,
    8.49,
    8.49,
    8.49,
    8.48,
    8.48,
    8.47,
    8.47,
    8.47,
    8.46,
    8.46,
    8.46,
    8.45,
    8.45,
    8.45,
    8.45,
    8.45,
    8.45,
    8.45,
    8.44,
    8.44,
    8.44,
    8.44,
    8.44,
    8.44,
    8.44,
    8.43,
    8.43,
    8.43,
    8.43,
    8.43,
    8.43,
    8.42,
    8.42,
    8.42,
    8.42,
    8.41,
    8.41,
    8.41,
    8.41,
    8.41,
    8.41,
    8.41,
    8.4,
    8.4,
    8.4,
    8.4,
    8.4,
    8.39,
    8.39,
    8.39,
    8.39,
    8.39,
    8.39,
    8.39,
    8.38,
    8.38,
    8.38,
    8.38,
    8.37,
    8.37,
    8.37,
    8.37,
    8.37,
    8.37,
    8.37,
    8.36,
    8.36,
    8.36,
    8.36,
    8.36,
    8.36,
    8.35,
    8.35,
    8.35,
    8.35,
    8.35,
    8.34,
    8.34,
    8.34,
    8.34,
    8.34,
    8.33,
    8.33,
    8.33,
    8.33,
    8.33,
    8.33,
    8.33,
    8.33,
    8.33,
    8.33,
    8.33,
    8.33,
    8.32,
    8.32,
    8.32,
    8.32,
    8.32,
    8.32,
    8.32,
    8.32,
    8.32,
    8.32,
    8.31,
    8.31,
    8.31,
    8.31,
    8.31,
    8.31,
    8.31,
    8.31,
    8.31,
    8.3,
    8.3,
    8.3,
    8.3,
    8.3,
    8.3,
    8.29,
];

//initializing my arrays before stuffing them//

var top10anime = [];

var anime = [];
var indivanime = [];
var titlee = [];
var popularityy = [];
var studioo = [];
var genree = [];
var typee = [];
var episodess = [];
var durationn = [];
var memberss = [];
var scoree = [];

var eightbit = [];
var A1Pictures = [];
var Aniplex = [];
var Artland = [];
var BCMAYPICTURES = [];
var BandaiEntertainment = [];
var MangaEntertainment = [];
var BandaiNamcoPictures = [];
var Bones = [];
var BrainsBase = [];
var MarvyJack = [];
var CStation = [];
var CloverWorks = [];
var CoMixWaveFilms = [];
var DavidProduction = [];
var Gainax = [];
var ProductionIG = [];
var TatsunokoProduction = [];
var Gallop = [];
var StudioComet = [];
var GenoStudio = [];
var Gonzo = [];
var HalFilmMaker = [];
var HaolinersAnimationLeague = [];
var JCStaff = [];
var EggFirm = [];
var KFactory = [];
var KittyFilmMitakaStudio = [];
var Khara = [];
var KinemaCitrus = [];
var KyotoAnimation = [];
var Lerche = [];
var Madhouse = [];
var MAPPA = [];
var Satelight = [];
var Graphinica = [];
var Manglobe = [];
var MushiProduction = [];
var Nexus = [];
var NipponAnimation = [];
var OLM = [];
var PICS = [];
var Orange = [];
var PAWorks = [];
var Pierrot = [];
var StudioSignpost = [];
var PlatinumVision = [];
var TransArts = [];
var SentaiFilmworks = [];
var Shaft = [];
var SharefunStudio = [];
var ShinEiAnimation = [];
var Shuka = [];
var SILVERLINK = [];
var StudioBind = [];
var StudioChizu = [];
var StudioDeen = [];
var StudioGhibli = [];
var StudioLAN = [];
var StudioVOLN = [];
var Sunrise = [];
var SynergySP = [];
var TezukaProductions = [];
var TMSEntertainment = [];
var ToeiAnimation = [];
var DandeLionAnimationStudio = [];
var TokyoMovieShinsha = [];
var Topcraft = [];
var Trigger = [];
var TROYCA = [];
var ufotable = [];
var WhiteFox = [];
var WitStudio = [];
var Xebec = [];
var AIC = [];
var ZeroG = [];

var TV = [];
var Music = [];
var ONA = [];
var OVA = [];
var Special = [];
var Movie = [];

var thirtyminutes = [];
var onehour = [];
var onehourthirtyminutes = [];
var twohours = [];

var Action = [];
var Drama = [];
var Suspense = [];
var Adventure = [];
var Fantasy = [];
var Comedy = [];
var SciFi = [];
var Romance = [];
var Supernatural = [];
var SliceofLife = [];
var AwardWinning = [];
var Mystery = [];
var Sports = [];
var Life = [];
var Ecchi = [];
var Horror = [];
var AvantGarde = [];
var Music = [];
var Psychological = [];
var Adventure = [];
var Music = [];
var BoysLove = [];

//inputting labels for my charts//

var typelabels = [
    "TV",
    "Original Video Animation",
    "Original Net Animation",
    "Movie",
    "Music",
    "Extra Episodes"
];

var durationlabels = [
    "duration <= 30 minutes",
    "30 minutes < duration <= 60 minutes",
    "60 minutes < duration <= 90 minutes",
    "duration > 90 minutes",
]

const genrelabel = [
    "Action",
    "Drama",
    "Suspense",
    "Adventure",
    "Fantasy",
    "Comedy",
    "Sci-Fi",
    "Romance",
    "Supernatural",
    "SliceofLife",
    "AwardWinning",
    "Mystery",
    "Sports",
    "Life",
    "Ecchi",
    "Horror",
    "AvantGarde",
    "Music",
    "Psychological",
    "Adventure",
    "Music",
    "BoysLove",
];

//using a for loop to run the function for as many times as there are animes//

for (i = 0; i < 250; i++) {

    indivanime =
    {
        titlee: title[i],
        popularityy: popularity[i],
        studioo: studio[i],
        genree: genre[i],
        typee: type[i],
        episodess: episodes[i],
        durationn: duration[i],
        memberss: members[i],
        scoree: score[i],
    },

        //pushing the anime into the arrays if they fall under a certain category//

        anime.push(indivanime);

    if (indivanime.typee.includes("TV")) {
        TV.push(indivanime)
    };
    if (indivanime.typee.includes("Music")) {
        Music.push(indivanime)
    };
    if (indivanime.typee.includes("ONA")) {
        ONA.push(indivanime)
    };
    if (indivanime.typee.includes("Special")) {
        Special.push(indivanime)
    };
    if (indivanime.typee.includes("Movie")) {
        Movie.push(indivanime)
    };
    if (indivanime.typee.includes("OVA")) {
        OVA.push(indivanime)
    };
    if (indivanime.studioo.includes("MAPPA")) {
        MAPPA.push(indivanime)
    }
    if (indivanime.studioo.includes("8bit")) {
        eightbit.push(indivanime)
    };
    if (indivanime.studioo.includes("A-1+Pictures")) {
        A1Pictures.push(indivanime)
    };
    if (indivanime.studioo.includes("Aniplex")) {
        Aniplex.push(indivanime)
    };
    if (indivanime.studioo.includes("Artland")) {
        Artland.push(indivanime)
    };
    if (indivanime.studioo.includes("B.CMAY+PICTURES")) {
        BCMAYPICTURES.push(indivanime)
    };
    if (indivanime.studioo.includes("Bandai+Entertainment")) {
        BandaiEntertainment.push(indivanime)
    };
    if (indivanime.studioo.includes("Manga+Entertainment")) {
        MangaEntertainment.push(indivanime)
    };
    if (indivanime.studioo.includes("Bandai+Namco+Pictures")) {
        BandaiNamcoPictures.push(indivanime)
    };
    if (indivanime.studioo.includes("Bones")) {
        Bones.push(indivanime)
    };
    if (indivanime.studioo.includes("Brain's+Base")) {
        BrainsBase.push(indivanime)
    };
    if (indivanime.studioo.includes("Marvy+Jack")) {
        MarvyJack.push(indivanime)
    };
    if (indivanime.studioo.includes("C-Station")) {
        CStation.push(indivanime)
    };
    if (indivanime.studioo.includes("CloverWorks")) {
        CloverWorks.push(indivanime)
    };
    if (indivanime.studioo.includes("CoMix+Wave+Films")) {
        CoMixWaveFilms.push(indivanime)
    };
    if (indivanime.studioo.includes("David+Production")) {
        DavidProduction.push(indivanime)
    };
    if (indivanime.studioo.includes("Gainax")) {
        Gainax.push(indivanime)
    };
    if (indivanime.studioo.includes("Production+I.G")) {
        ProductionIG.push(indivanime)
    };
    if (indivanime.studioo.includes("Tatsunoko+Production")) {
        TatsunokoProduction.push(indivanime)
    };
    if (indivanime.studioo.includes("Gallop")) {
        Gallop.push(indivanime)
    };
    if (indivanime.studioo.includes("Studio+Comet")) {
        StudioComet.push(indivanime)
    };
    if (indivanime.studioo.includes("Geno+Studio")) {
        GenoStudio.push(indivanime)
    };
    if (indivanime.studioo.includes("Gonzo")) {
        Gonzo.push(indivanime)
    };
    if (indivanime.studioo.includes("Hal+Film+Maker")) {
        HalFilmMaker.push(indivanime)
    };
    if (indivanime.studioo.includes("J.C.Staff")) {
        JCStaff.push(indivanime)
    };
    if (indivanime.studioo.includes("Egg+Firm")) {
        EggFirm.push(indivanime)
    };
    if (indivanime.studioo.includes("K-Factory")) {
        KFactory.push(indivanime)
    };
    if (indivanime.studioo.includes("Haoliners+Animation+League")) {
        HaolinersAnimationLeague.push(indivanime)
    };
    if (indivanime.studioo.includes("Kitty+Film+Mitaka+Studio")) {
        KittyFilmMitakaStudio.push(indivanime)
    };
    if (indivanime.studioo.includes("Khara")) {
        Khara.push(indivanime)
    };
    if (indivanime.studioo.includes("Kinema+Citrus")) {
        KinemaCitrus.push(indivanime)
    };
    if (indivanime.studioo.includes("Kyoto+Animation")) {
        KyotoAnimation.push(indivanime)
    };
    if (indivanime.studioo.includes("Lerche")) {
        Lerche.push(indivanime)
    };
    if (indivanime.studioo.includes("Madhouse")) {
        Madhouse.push(indivanime)
    };
    if (indivanime.studioo.includes("Satelight")) {
        Satelight.push(indivanime)
    };
    if (indivanime.studioo.includes("Graphinica")) {
        Graphinica.push(indivanime)
    };
    if (indivanime.studioo.includes("Manglobe")) {
        Manglobe.push(indivanime)
    };
    if (indivanime.studioo.includes("Mushi+Production")) {
        MushiProduction.push(indivanime)
    };
    if (indivanime.studioo.includes("Nexus")) {
        Nexus.push(indivanime)
    };
    if (indivanime.studioo.includes("Nippon+Animation")) {
        NipponAnimation.push(indivanime)
    };
    if (indivanime.studioo.includes("OLM")) {
        OLM.push(indivanime)
    };
    if (indivanime.studioo.includes("P.I.C.S.")) {
        PICS.push(indivanime)
    };
    if (indivanime.studioo.includes("Orange")) {
        Orange.push(indivanime)
    };
    if (indivanime.studioo.includes("P.A.+Works")) {
        PAWorks.push(indivanime)
    };
    if (indivanime.studioo.includes("Pierrot")) {
        Pierrot.push(indivanime)
    };
    if (indivanime.studioo.includes("Studio+Signpost")) {
        StudioSignpost.push(indivanime)
    };
    if (indivanime.studioo.includes("Platinum+Vision")) {
        PlatinumVision.push(indivanime)
    };
    if (indivanime.studioo.includes("Trans+Arts")) {
        TransArts.push(indivanime)
    };
    if (indivanime.studioo.includes("Sentai+Filmworks")) {
        SentaiFilmworks.push(indivanime)
    };
    if (indivanime.studioo.includes("Shaft")) {
        Shaft.push(indivanime)
    };
    if (indivanime.studioo.includes("Sharefun+Studio")) {
        SharefunStudio.push(indivanime)
    };
    if (indivanime.studioo.includes("Shin-Ei+Animation")) {
        ShinEiAnimation.push(indivanime)
    };
    if (indivanime.studioo.includes("Shuka")) {
        Shuka.push(indivanime)
    };
    if (indivanime.studioo.includes("SILVER+LINK.")) {
        SILVERLINK.push(indivanime)
    };
    if (indivanime.studioo.includes("Studio+Bind")) {
        StudioBind.push(indivanime)
    };
    if (indivanime.studioo.includes("Studio+Chizu")) {
        StudioChizu.push(indivanime)
    };
    if (indivanime.studioo.includes("Studio+Deen")) {
        StudioDeen.push(indivanime)
    };
    if (indivanime.studioo.includes("Studio+Ghibli")) {
        StudioGhibli.push(indivanime)
    };
    if (indivanime.studioo.includes("Studio+LAN")) {
        StudioLAN.push(indivanime)
    };
    if (indivanime.studioo.includes("Studio+VOLN")) {
        StudioVOLN.push(indivanime)
    };
    if (indivanime.studioo.includes("Sunrise")) {
        Sunrise.push(indivanime)
    };
    if (indivanime.studioo.includes("SynergySP")) {
        SynergySP.push(indivanime)
    };
    if (indivanime.studioo.includes("Tezuka+Productions")) {
        TezukaProductions.push(indivanime)
    };
    if (indivanime.studioo.includes("TMS+Entertainment")) {
        TMSEntertainment.push(indivanime)
    };
    if (indivanime.studioo.includes("Toei+Animation")) {
        ToeiAnimation.push(indivanime)
    };
    if (indivanime.studioo.includes("DandeLion+Animation+Studio")) {
        DandeLionAnimationStudio.push(indivanime)
    };
    if (indivanime.studioo.includes("Tokyo+Movie+Shinsha")) {
        TokyoMovieShinsha.push(indivanime)
    };
    if (indivanime.studioo.includes("Topcraft")) {
        Topcraft.push(indivanime)
    };
    if (indivanime.studioo.includes("Trigger")) {
        Trigger.push(indivanime)
    };
    if (indivanime.studioo.includes("TROYCA")) {
        TROYCA.push(indivanime)
    };
    if (indivanime.studioo.includes("ufotable")) {
        ufotable.push(indivanime)
    };
    if (indivanime.studioo.includes("White+Fox")) {
        WhiteFox.push(indivanime)
    };
    if (indivanime.studioo.includes("Wit+Studio")) {
        WitStudio.push(indivanime)
    };
    if (indivanime.studioo.includes("Xebec")) {
        Xebec.push(indivanime)
    };
    if (indivanime.studioo.includes("AIC")) {
        AIC.push(indivanime)
    };
    if (indivanime.studioo.includes("Zero-G")) {
        ZeroG.push(indivanime)
    };
    if (indivanime.titlee.includes("Gintama°")) {
        top10anime.push(indivanime)
    };
    if (indivanime.titlee.includes("Steins;Gate")) {
        top10anime.push(indivanime)
    };
    if (indivanime.titlee.includes("Fullmetal+Alchemist:+Brotherhood")) {
        top10anime.push(indivanime)
    };
    if (indivanime.titlee.includes("Shingeki+no+Kyojin:+The+Final+Season+-+Kanketsu-hen")) {
        top10anime.push(indivanime)
    };
    if (indivanime.titlee.includes("Gintama:+The+Final")) {
        top10anime.push(indivanime)
    };
    if (indivanime.titlee.includes("Hunter+x+Hunter+(2011)")) {
        top10anime.push(indivanime)
    };
    if (indivanime.titlee.includes("Gintama'")) {
        top10anime.push(indivanime)
    };
    if (indivanime.titlee.includes("Kaguya-sama+wa+Kokurasetai:+Ultra+Romantic")) {
        top10anime.push(indivanime)
    };
    if (indivanime.titlee.includes("Bleach:+Sennen+Kessen-hen")) {
        top10anime.push(indivanime)
    };
    if (indivanime.titlee.includes("Shingeki+no+Kyojin+Season+3+Part+2")) {
        top10anime.push(indivanime)
    };
    if (indivanime.durationn <= 30) {
        thirtyminutes.push(indivanime)
    }
    if (indivanime.durationn <= 60) {
        onehour.push(indivanime)
    };
    if (indivanime.durationn <= 90) {
        onehourthirtyminutes.push(indivanime)
    };
    if (indivanime.durationn > 90) {
        twohours.push(indivanime)
    };
    if (indivanime.genree.includes("Action")) {
        Action.push(indivanime)
    };
    if (indivanime.genree.includes("Drama")) {
        Drama.push(indivanime)
    };
    if (indivanime.genree.includes("Suspense")) {
        Suspense.push(indivanime)
    };
    if (indivanime.genree.includes("Adventure")) {
        Adventure.push(indivanime)
    };
    if (indivanime.genree.includes("Comedy")) {
        Comedy.push(indivanime)
    };
    if (indivanime.genree.includes("Fantasy")) {
        Fantasy.push(indivanime)
    };
    if (indivanime.genree.includes("Sci-Fi")) {
        SciFi.push(indivanime)
    };
    if (indivanime.genree.includes("Romance")) {
        Romance.push(indivanime)
    };
    if (indivanime.genree.includes("Supernatural")) {
        Supernatural.push(indivanime)
    };
    if (indivanime.genree.includes("Slice+of+Life")) {
        SliceofLife.push(indivanime)
    };
    if (indivanime.genree.includes("Award+Winning")) {
        AwardWinning.push(indivanime)
    };
    if (indivanime.genree.includes("Mystery")) {
        Mystery.push(indivanime)
    };
    if (indivanime.genree.includes("Sports")) {
        Sports.push(indivanime)
    };
    if (indivanime.genree.includes("Life")) {
        Life.push(indivanime)
    };
    if (indivanime.genree.includes("Ecchi")) {
        Ecchi.push(indivanime)
    };
    if (indivanime.genree.includes("Horror")) {
        Horror.push(indivanime)
    };
    if (indivanime.genree.includes("Avant+Garde")) {
        AvantGarde.push(indivanime)
    };
    if (indivanime.genree.includes("Music")) {
        Music.push(indivanime)
    };
    if (indivanime.genree.includes("Psychological")) {
        Psychological.push(indivanime)
    };
    if (indivanime.genree.includes("Adventure")) {
        Adventure.push(indivanime)
    };
    if (indivanime.genree.includes("Boys+Love")) {
        BoysLove.push(indivanime)
    };

}

//inputting how many data points of each category there are//

const genrenumbers = [
    Action.length,
    Drama.length,
    Suspense.length,
    Adventure.length,
    Fantasy.length,
    Comedy.length,
    SciFi.length,
    Romance.length,
    Supernatural.length,
    SliceofLife.length,
    AwardWinning.length,
    Mystery.length,
    Sports.length,
    Life.length,
    Ecchi.length,
    Horror.length,
    AvantGarde.length,
    Music.length,
    Psychological.length,
    Adventure.length,
    Music.length,
    BoysLove.length,
];

const typesnumbers = [
    TV.length,
    OVA.length,
    ONA.length,
    Special.length,
    Music.length,
    Movie.length,
];

const durationnumbers = [
    thirtyminutes.length,
    onehour.length,
    onehourthirtyminutes.length,
    twohours.length
];

const studionumbers = [
    eightbit.length,
    A1Pictures.length,
    Aniplex.length,
    Artland.length,
    BCMAYPICTURES.length,
    BandaiEntertainment.length,
    MangaEntertainment.length,
    BandaiNamcoPictures.length,
    Bones.length,
    BrainsBase.length,
    MarvyJack.length,
    CStation.length,
    CloverWorks.length,
    CoMixWaveFilms.length,
    DavidProduction.length,
    Gainax.length,
    ProductionIG.length,
    TatsunokoProduction.length,
    Gallop.length,
    StudioComet.length,
    GenoStudio.length,
    Gonzo.length,
    HalFilmMaker.length,
    HaolinersAnimationLeague.length,
    JCStaff.length,
    EggFirm.length,
    KFactory.length,
    KittyFilmMitakaStudio.length,
    Khara.length,
    KinemaCitrus.length,
    KyotoAnimation.length,
    Lerche.length,
    Madhouse.length,
    MAPPA.length,
    Satelight.length,
    Graphinica.length,
    Manglobe.length,
    MushiProduction.length,
    Nexus.length,
    NipponAnimation.length,
    OLM.length,
    PICS.length,
    Orange.length,
    PAWorks.length,
    Pierrot.length,
    StudioSignpost.length,
    PlatinumVision.length,
    TransArts.length,
    SentaiFilmworks.length,
    Shaft.length,
    SharefunStudio.length,
    ShinEiAnimation.length,
    Shuka.length,
    SILVERLINK.length,
    StudioBind.length,
    StudioChizu.length,
    StudioDeen.length,
    StudioGhibli.length,
    StudioLAN.length,
    StudioVOLN.length,
    Sunrise.length,
    SynergySP.length,
    TezukaProductions.length,
    TMSEntertainment.length,
    ToeiAnimation.length,
    DandeLionAnimationStudio.length,
    TokyoMovieShinsha.length,
    Topcraft.length,
    Trigger.length,
    TROYCA.length,
    ufotable.length,
    WhiteFox.length,
    WitStudio.length,
    Xebec.length,
    AIC.length,
    ZeroG.length,
];

const backgroundcolor = [];

//if studio number = 1, give it the darkest grey//

for (j = 0; j < studiolist.length; j++) {
    if (studionumbers[j] == 1) {
        backgroundcolor.push("#4f4f4f");
    } else {
        var greyValue = Math.max(0, 192 - (studionumbers[j] - 2) * 16); // increase the difference between the RGB values//
        backgroundcolor.push(`rgb(${greyValue}, ${greyValue}, ${greyValue})`);
        //push in rgb values into background color for different shades of grey, depending on data point//
    }
}
//i used chatgpt cause it's easier//

const popularitystudio = {

    labels: studiolist,

    datasets: [

        {

            data: studionumbers,

            backgroundColor: backgroundcolor,

            borderColor: "hsla(255,0,0,0)",

        }
    ]
};

//https://stackoverflow.com/questions/57178499/display-all-labels-in-chart-js//

const typesdata = {
    labels: typelabels,
    datasets: [
        {
            data: typesnumbers,
            backgroundColor: backgroundcolor,
            borderColor: "hsla(255,0,0,0)",
        }
    ]
};

const durationdata = {
    labels: durationlabels,
    datasets: [
        {
            data: durationnumbers,
            backgroundColor: backgroundcolor,
            borderColor: "hsla(255,0,0,0)",
        }
    ]
};

const genredata = {
    labels: genrelabel,
    datasets: [
        {
            data: genrenumbers,
            backgroundColor: backgroundcolor,
            borderColor: "hsla(255,0,0,0)",
        }
    ]
};

//https://www.youtube.com/watch?v=jZD43r-hw6Q//
/* how to change chart types with a button*/

var studioconfig = {
    type: "bar",
    data: popularitystudio,
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        scaleShowValues: true,
        scales: {
            xAxes: [{
                ticks: {
                    autoSkip: false,
                    fontFamily: "Roboto"
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'number of anime',
                    fontFamily: "Roboto"
                },
                ticks: {
                    fontFamily: "Roboto"
                }
            }]
        },
        title: {
            display: true,
            text: ["number of animes produced by each studio in top 250 rankings"],
            fontSize: 25,
            fontColor: ("black"),
            fontFamily: "Montserrat"
        },
    }
};

var horizontalbarconfig = {
    type: "horizontalBar",
    data: typesdata,
    options: {
        maintainAspectRatio: false,
        scaleShowValues: true,
        scales: {
            xAxes: [{
                ticks: {
                    autoSkip: false,
                    fontFamily: "Roboto"
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    fontFamily: "Roboto"
                },
                ticks: {
                    autoSkip: false,
                    fontFamily: "Roboto"
                }
            }]
        },
        legend: {
            display: false
        },
        title: {
            display: true,
            text: "types of animation",
            fontSize: 25,
            fontFamily: "Montserrat",
            fontColor: "black",
        },
    }
};

var pieconfig = {
    type: "pie",
    data: typesdata,
    options: {
        maintainAspectRatio: false,
        scaleShowValues: true,
        legend: {
            display: true
        },
        title: {
            display: true,
            text: "types of animation",
            fontSize: 25,
            fontColor: "black",
            fontFamily: "Montserrat"
        },
    }
};

var durationconfig = {
    type: "doughnut",
    data: durationdata,
    options: {
        maintainAspectRatio: false,
        scaleShowValues: true,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: "average duration of episodes of most popular anime",
            fontSize: 25,
            fontColor: "black",
            fontFamily: "Montserrat"
        },
    },
};

var bardatachart3config = {
    type: "bar",
    data: durationdata,
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    autoSkip: false,
                    fontFamily: "Roboto"
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'number of anime',
                    fontFamily: "Roboto"
                },
                ticks: {
                    fontFamily: "Montserrat"
                }
            }]
        },
        maintainAspectRatio: false,
        scaleShowValues: true,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: "average duration of episodes of most popular anime",
            fontSize: 25,
            fontColor: "black",
            fontFamily: "Montserrat"
        },
    },
};

var genreconfig = {
    type: "horizontalBar",
    data: genredata,
    options: {
        maintainAspectRatio: false,
        scaleShowValues: true,
        scales: {
            xAxes: [{
                ticks: {
                    autoSkip: false,
                    fontFamily: "Roboto"
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    fontFamily: "Roboto"
                },
                ticks: {
                    autoSkip: false,
                    fontFamily: "Roboto"
                }
            }
            ]
        },
        legend: {
            display: false
        },
        title: {
            display: true,
            text: "top genres",
            fontSize: 25,
            fontColor: "black",
            fontFamily: "Montserrat"
        },
    }
};

var genrepieconfig = {
    type: "pie",
    data: genredata,
    options: {
        maintainAspectRatio: false,
        scaleShowValues: true,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: "top genres",
            fontSize: 25,
            fontColor: "black",
            fontFamily: "Montserrat"
        },
    }
};

let datachart1 = new Chart(
    document.getElementById("popularitystudio"),
    studioconfig
)

let datachart2 = new Chart(
    document.getElementById("typeschart"),
    pieconfig
)

let datachart3 = new Chart(
    document.getElementById("durationchart"),
    durationconfig
)

let datachart4 = new Chart(
    document.getElementById("genrechart"),
    genreconfig
)

function chartType2(type) {
    if (type == "bar") {
        datachart2.destroy();
        datachart2 = new Chart(
            document.getElementById("typeschart"),
            horizontalbarconfig
        )
    };
    if (type == "pie") {
        datachart2.destroy();
        datachart2 = new Chart(
            document.getElementById("typeschart"),
            pieconfig
        )
    }
};

function chartType3(type) {
    if (type == "doughnut") {
        datachart3.destroy();
        datachart3 = new Chart(
            document.getElementById("durationchart"),
            bardatachart3config
        )
    };
    if (type == "bardatachart3config") {
        datachart3.destroy();
        datachart3 = new Chart(
            document.getElementById("durationchart"),
            durationconfig)
    }
};

function chartType4(type) {
    if (type == "pie") {
        datachart4.destroy();
        datachart4 = new Chart(
            document.getElementById("genrechart"),
            genreconfig
        )
    };
    if (type == "genreconfig") {
        datachart4.destroy();
        datachart4 = new Chart(
            document.getElementById("genrechart"),
            genrepieconfig)
    }
};

window.addEventListener('scroll', function () {
    var element = document.getElementById('datachart3finalanalysiscontainer');
    var element2 = document.getElementById('datachart3finalanalysiscontainer2');
    var position = element.getBoundingClientRect();

    // check if element is visible in viewport
    if (position.top < window.innerHeight && position.bottom >= 0) {
        element.style.opacity = 1;
        element.style.visibility = 'visible';
        element2.style.opacity = 1;
        element2.style.visibility = 'visible';
    } else {
        element.style.opacity = 0;
        element.style.visibility = 'hidden';
        element2.style.opacity = 0;
        element2.style.visibility = 'hidden';
    }
}
);

window.addEventListener('scroll', function () {
    var element3 = document.getElementById('datachart4finalfirstimage');
    var position1 = element3.getBoundingClientRect();
    // check if element is visible in viewport
    if (position1.top < window.innerHeight && position1.bottom >= 0) {
        document.getElementById("datachart4finalfirstimage").style.opacity = 0
        document.getElementById("datachart4finalsecondimage").style.opacity = 1
        document.getElementById("datachart4finalsecondimageanalysis").style.opacity = 1
    } else {
        document.getElementById("datachart4finalfirstimage").style.opacity = 1
        document.getElementById("datachart4finalsecondimage").style.opacity = 0
        document.getElementById("datachart4finalsecondimageanalysis").style.opacity = 0
    }
}
);
/*https://www.w3schools.com/jsref/prop_element_classlist.asp*/https://www.w3schools.com/jsref/prop_element_classlist.asp*/
/* === and not =*/

var hxh = document.getElementById("hxh");
var animephoto = document.getElementById("animephoto")
var top10title = document.getElementById("top10title")
var top10genre = document.getElementById("top10genre")
var top10studio = document.getElementById("top10studio")
var top10type = document.getElementById("top10type")
var top10episodes = document.getElementById("top10episodes")
var top10duration = document.getElementById("top10duration")

var ranking = document.getElementById("ranking")

hxh.addEventListener("mousemove", function (event) {
    if (event.target === hxh) {
        hxh.style.opacity = 1;
        animephoto.src = "./resources/top10hxh.png";

        top10title.innerHTML = top10anime[9].titlee
        top10genre.innerHTML = top10anime[9].genree
        top10studio.innerHTML = top10anime[9].studioo
        top10type.innerHTML = top10anime[9].typee
        top10episodes.innerHTML = top10anime[9].episodess
        top10duration.innerHTML = top10anime[9].durationn
        ranking.innerHTML = 10
    }
});

hxh.addEventListener("mouseleave", function (event) {
    hxh.style.opacity = 0.3;
    animephoto.src = "resources/fail.jpg";
    top10title.innerHTML = "";
    top10genre.innerHTML = ""
    top10studio.innerHTML = ""
    top10type.innerHTML = ""
    top10episodes.innerHTML = ""
    top10duration.innerHTML = ""
    ranking.innerHTML = ""
})

var gintama2 = document.getElementById("gintama2");
gintama2.addEventListener("mousemove", function (event) {
    if (event.target === gintama2) {
        gintama2.style.opacity = 1
        animephoto.src = "./resources/top10gintama2.webp"
        top10title.innerHTML = top10anime[8].titlee
        top10genre.innerHTML = top10anime[8].genree
        top10studio.innerHTML = top10anime[8].studioo
        top10type.innerHTML = top10anime[8].typee
        top10episodes.innerHTML = top10anime[8].episodess
        top10duration.innerHTML = top10anime[8].durationn
        ranking.innerHTML = 9
    }
});

gintama2.addEventListener("mouseleave", function (event) {
    gintama2.style.opacity = 0.3;
    animephoto.src = "resources/fail.jpg"; top10title.innerHTML = "";
    top10genre.innerHTML = ""
    top10studio.innerHTML = ""
    top10type.innerHTML = ""
    top10episodes.innerHTML = ""
    top10duration.innerHTML = ""
    ranking.innerHTML = ""
})

var gintamafinal = document.getElementById("gintamafinal");
gintamafinal.addEventListener("mousemove", function (event) {
    if (event.target === gintamafinal) {
        gintamafinal.style.opacity = 1
        animephoto.src = "./resources/top10gintamafinal.jpeg"
        top10title.innerHTML = top10anime[7].titlee
        top10genre.innerHTML = top10anime[7].genree
        top10studio.innerHTML = top10anime[7].studioo
        top10type.innerHTML = top10anime[7].typee
        top10episodes.innerHTML = top10anime[7].episodess
        top10duration.innerHTML = top10anime[7].durationn
        ranking.innerHTML = 8
    }
});
gintamafinal.addEventListener("mouseleave", function (event) {
    gintamafinal.style.opacity = 0.3;
    animephoto.src = "resources/fail.jpg"; top10title.innerHTML = "";
    top10genre.innerHTML = ""
    top10studio.innerHTML = ""
    top10type.innerHTML = ""
    top10episodes.innerHTML = ""
    top10duration.innerHTML = ""
    ranking.innerHTML = ""
})

var aot2 = document.getElementById("aot2");
aot2.addEventListener("mousemove", function (event) {
    if (event.target === aot2) {
        aot2.style.opacity = 1
        animephoto.src = "./resources/top10aot2.webp"
        top10title.innerHTML = top10anime[6].titlee
        top10genre.innerHTML = top10anime[6].genree
        top10studio.innerHTML = top10anime[6].studioo
        top10type.innerHTML = top10anime[6].typee
        top10episodes.innerHTML = top10anime[6].episodess
        top10duration.innerHTML = top10anime[6].durationn
        ranking.innerHTML = 7
    }
});
aot2.addEventListener("mouseleave", function (event) {
    aot2.style.opacity = 0.3;
    animephoto.src = "resources/fail.jpg"; top10title.innerHTML = "";
    top10genre.innerHTML = ""
    top10studio.innerHTML = ""
    top10type.innerHTML = ""
    top10episodes.innerHTML = ""
    top10duration.innerHTML = ""
    ranking.innerHTML = ""
})

var kaguya = document.getElementById("kaguya");
kaguya.addEventListener("mousemove", function (event) {
    if (event.target === kaguya) {
        kaguya.style.opacity = 1
        animephoto.src = "./resources/top10kaguya.webp"
        top10title.innerHTML = top10anime[5].titlee
        top10genre.innerHTML = top10anime[5].genree
        top10studio.innerHTML = top10anime[5].studioo
        top10type.innerHTML = top10anime[5].typee
        top10episodes.innerHTML = top10anime[5].episodess
        top10duration.innerHTML = top10anime[5].durationn
        ranking.innerHTML = 6
    }
});
kaguya.addEventListener("mouseleave", function (event) {
    kaguya.style.opacity = 0.3;
    animephoto.src = "resources/fail.jpg"; top10title.innerHTML = "";
    top10genre.innerHTML = ""
    top10studio.innerHTML = ""
    top10type.innerHTML = ""
    top10episodes.innerHTML = ""
    top10duration.innerHTML = ""
    ranking.innerHTML = ""
})

var gintama = document.getElementById("gintama");
gintama.addEventListener("mousemove", function (event) {
    if (event.target === gintama) {
        gintama.style.opacity = 1;
        animephoto.src = "./resources/top10gintama.jpeg"
        top10title.innerHTML = top10anime[4].titlee
        top10genre.innerHTML = top10anime[4].genree
        top10studio.innerHTML = top10anime[4].studioo
        top10type.innerHTML = top10anime[4].typee
        top10episodes.innerHTML = top10anime[4].episodess
        top10duration.innerHTML = top10anime[4].durationn
        ranking.innerHTML = 5
    }
});
gintama.addEventListener("mouseleave", function (event) {
    gintama.style.opacity = 0.3;
    animephoto.src = "resources/fail.jpg"; top10title.innerHTML = "";
    top10genre.innerHTML = ""
    top10studio.innerHTML = ""
    top10type.innerHTML = ""
    top10episodes.innerHTML = ""
    top10duration.innerHTML = ""
    ranking.innerHTML = ""
})


var steinsgate = document.getElementById("steinsgate");
steinsgate.addEventListener("mousemove", function (event) {
    if (event.target === steinsgate) {
        steinsgate.style.opacity = 1;
        animephoto.src = "./resources/top10steinsgate.jpeg"
        top10title.innerHTML = top10anime[3].titlee
        top10genre.innerHTML = top10anime[3].genree
        top10studio.innerHTML = top10anime[3].studioo
        top10type.innerHTML = top10anime[3].typee
        top10episodes.innerHTML = top10anime[3].episodess
        top10duration.innerHTML = top10anime[3].durationn
        ranking.innerHTML = 4
    }
});
steinsgate.addEventListener("mouseleave", function (event) {
    steinsgate.style.opacity = 0.3;
    animephoto.src = "resources/fail.jpg"; top10title.innerHTML = "";
    top10genre.innerHTML = ""
    top10studio.innerHTML = ""
    top10type.innerHTML = ""
    top10episodes.innerHTML = ""
    top10duration.innerHTML = ""
    ranking.innerHTML = ""
})

var bleach = document.getElementById("bleach");
bleach.addEventListener("mousemove", function (event) {
    if (event.target === bleach) {
        bleach.style.opacity = 1
        animephoto.src = "./resources/top10bleach.jpeg"
        top10title.innerHTML = top10anime[2].titlee
        top10genre.innerHTML = top10anime[2].genree
        top10studio.innerHTML = top10anime[2].studioo
        top10type.innerHTML = top10anime[2].typee
        top10episodes.innerHTML = top10anime[2].episodess
        top10duration.innerHTML = top10anime[2].durationn
        ranking.innerHTML = 3
    }
});
bleach.addEventListener("mouseleave", function (event) {
    bleach.style.opacity = 0.3;
    animephoto.src = "resources/fail.jpg"; top10title.innerHTML = ""
    top10genre.innerHTML = ""
    top10studio.innerHTML = ""
    top10type.innerHTML = ""
    top10episodes.innerHTML = ""
    top10duration.innerHTML = ""
    ranking.innerHTML = ""
})

var fullmetal = document.getElementById("fullmetal");
fullmetal.addEventListener("mousemove", function (event) {
    if (event.target === fullmetal) {
        fullmetal.style.opacity = 1
        animephoto.src = "./resources/top10fullmetal.jpeg"
        top10title.innerHTML = top10anime[1].titlee
        top10genre.innerHTML = top10anime[1].genree
        top10studio.innerHTML = top10anime[1].studioo
        top10type.innerHTML = top10anime[1].typee
        top10episodes.innerHTML = top10anime[1].episodess
        top10duration.innerHTML = top10anime[1].durationn
        ranking.innerHTML = 2
    }
});
fullmetal.addEventListener("mouseleave", function (event) {
    fullmetal.style.opacity = 0.3;
    animephoto.src = "resources/fail.jpg"
    top10title.innerHTML = ""
    top10genre.innerHTML = ""
    top10studio.innerHTML = ""
    top10type.innerHTML = ""
    top10episodes.innerHTML = ""
    top10duration.innerHTML = ""
    ranking.innerHTML = ""
})

var aotfinal = document.getElementById("aotfinal");
aotfinal.addEventListener("mousemove", function (event) {
    if (event.target === aotfinal) {
        aotfinal.style.opacity = 1
        animephoto.src = "./resources/top10aot2.webp"
        top10title.innerHTML = top10anime[0].titlee
        top10genre.innerHTML = top10anime[0].genree
        top10studio.innerHTML = top10anime[0].studioo
        top10type.innerHTML = top10anime[0].typee
        top10episodes.innerHTML = top10anime[0].episodess
        top10duration.innerHTML = top10anime[0].durationn
        ranking.innerHTML = 1
    }
});
aotfinal.addEventListener("mouseleave", function (event) {
    aotfinal.style.opacity = 0.3
    animephoto.src = "resources/fail.jpg"
    top10title.innerHTML = ""
    top10genre.innerHTML = ""
    top10studio.innerHTML = ""
    top10type.innerHTML = ""
    top10episodes.innerHTML = ""
    top10duration.innerHTML = ""
    ranking.innerHTML = ""
})

function randomize() {
    var i = Math.floor(Math.random() * 250)
    randomtitle.innerHTML = anime[i].titlee
    randomgenre.innerHTML = anime[i].genree
    randomstudio.innerHTML = anime[i].studioo
    randomtype.innerHTML = anime[i].typee
    randomepisode.innerHTML = anime[i].episodess
    randomduration.innerHTML = anime[i].durationn
}

document.getElementById("randomizebutton").addEventListener("click", function () { randomize() })

//making my image act like a button//