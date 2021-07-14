
const products = [
  {
    name: "Hades",
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/ss_8a9f0953e8a014bd3df2789c2835cb787cd3764d.1920x1080.jpg?t=1624463563",
    description:
      "Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion, Transistor, and Pyre.",  
    price: 10,
    countInStock: 15,
    release: "17 Sep, 2020",
    reviews: "Very Positive",
    developer: "Supergiant Games",
    systemReq: ["ios", "windows"],
    genres: ["Action Roguelike", "Indie", "RPG"],
    aboutUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/extras/HadesSteam_1.0D.gif?t=1624463563",
    about:  "Hades is a god-like rogue-like dungeon crawler that combines the best aspects of Supergiant's critically acclaimed titles, including the fast-paced action of Bastion, the rich atmosphere and depth of Transistor, and the character-driven storytelling of Pyre. BATTLE OUT OF HELL: As the immortal Prince of the Underworld, you'll wield the powers and mythic weapons of Olympus to break free from the clutches of the god of the dead himself, while growing stronger and unraveling more of the story with each unique escape attempt. UNLEASH THE FURY OF OLYMPUS: The Olympians have your back! Meet Zeus, Athena, Poseidon, and many more, and choose from their dozens of powerful Boons that enhance your abilities. There are thousands of viable character builds to discover as you go."
  },
  {
    name: "Bastions",
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/107100/ss_7d3cd935098d3cd0603f713017624ef508c86c98.1920x1080.jpg?t=1601950406",
    description:
      "Discover the secrets of the Calamity, a surreal catastrophe that shattered the world to pieces.",  
    price: 7,
    countInStock: 40,
    release: "17 Aug, 2011",
    reviews: "Very Positive",
    developer: "Supergiant Games",
    systemReq: ["ios", "windows"],
    genres: ["Action", "Indie", "Narration"],
    aboutUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/107100/extras/preview-full-Bastion_Combat1.png?t=1601950406",
    about:  "Bastion is an action role-playing experience that redefines storytelling in games, with a reactive narrator who marks your every move. Explore more than 40 lush hand-painted environments as you discover the secrets of the Calamity, a surreal catastrophe that shattered the world to pieces. Wield a huge arsenal of upgradeable weapons and battle savage beasts adapted to their new habitat. Finish the main story to unlock the New Game Plus mode and continue your journey!"
  },
  {
    name: "Pyre",
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/462770/ss_067b04e883dbb3a42a399e391b2c750adb095317.600x338.jpg?t=1601500944",
    description:
      "Pyre is a party-based RPG from the creators of Bastion and Transistor. Lead your band of exiles to freedom through a series of mystical competitions in the Campaign, or challenge a friend to a fast-paced ritual showdown in the head-to-head Versus Mode.",  
    price: 9,
    countInStock: 21,
    release: "26 Jul, 2017",
    reviews: "Very Positive",
    developer: "Supergiant Games",
    systemReq: ["ios", "windows"],
    genres: ["Story Rich", "Indie", "RPG"],
    aboutUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/462770/extras/preview-full-Match2.png?t=1601500944",
    about:  "Pyre is a party-based RPG in which you lead a band of exiles to freedom through ancient competitions spread across a vast, mystical purgatory. Who shall return to glory, and who shall remain in exile to the end of their days?"
  },{
    name: "The Witcher® 3: Wild Hunt",
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/ss_eda99e7f705a113d04ab2a7a36068f3e7b343d17.600x338.jpg?t=1621939214",
    description:
      "As war rages on throughout the Northern Realms, you take on the greatest contract of your life — tracking down the Child of Prophecy, a living weapon that can alter the shape of the world.",  
    price: 15,
    countInStock: 12,
    release: "18 May, 2015",
    reviews: "Overwhelmingly Positive",
    developer: "CD PROJEKT RED",
    systemReq: ["ios", "windows"],
    genres: ["Open World", "RPG", "Atmospheric", "Story Rich"],
    aboutUrl: "https://cdn.akamai.steamstatic.com/steam/apps/292030/extras/W3_1.gif?t=1621939214",
    about:  "The Witcher: Wild Hunt is a story-driven open world RPG set in a visually stunning fantasy universe full of meaningful choices and impactful consequences. In The Witcher, you play as professional monster hunter Geralt of Rivia tasked with finding a child of prophecy in a vast open world rich with merchant cities, pirate islands, dangerous mountain passes, and forgotten caverns to explore."
  },
  {
    name: "DARK SOULS™ III",
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/374320/ss_5efd318b85a3917d1c6e717f4cb813b47547cd6f.600x338.jpg?t=1608544497",
    description:
      "Dark Souls continues to push the boundaries with the latest, ambitious chapter in the critically-acclaimed and genre-defining series. Prepare yourself and Embrace The Darkness!",  
    price: 40,
    countInStock: 23,
    release: "12 Apr, 2016",
    reviews: "Very Positive",
    developer: "FromSoftware, Inc.",
    systemReq: ["windows"],
    genres: ["Dark Fantasy", "RPG", "Souls-like", "Co-op"],
    aboutUrl: "https://cdn.akamai.steamstatic.com/steam/apps/374320/extras/DarkSoulsIII_GIF1.gif?t=1608544497",
    about:  "Get the DARK SOULS™ III Season Pass now and challenge yourself with all the available content!Winner of gamescom award 2015 Best RPG and over 35 E3 2015 Awards and Nominations. DARK SOULS™ III continues to push the boundaries with the latest, ambitious chapter in the critically-acclaimed and genre-defining series. As fires fade and the world falls into ruin, journey into a universe filled with more colossal enemies and environments. Players will be immersed into a world of epic atmosphere and darkness through faster gameplay and amplified combat intensity. Fans and newcomers alike will get lost in the game hallmark rewarding gameplay and immersive graphics. Now only embers remain… Prepare yourself once more and Embrace The Darkness!"
  },{
    name: "DRAGON BALL Z: KAKAROT",
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/851850/ss_99df46ea315597e06b62dfe15107db7b7c8ed1cb.600x338.jpg?t=1623371739",
    description:
      "Relive the story of Goku and other Z Fighters in DRAGON BALL Z: KAKAROT! Beyond the epic battles, experience life in the DRAGON BALL Z world as you fight, fish, eat, and train with Goku, Gohan, Vegeta and others",  
    price: 38,
    countInStock: 33,
    release: "12 Apr, 2016",
    reviews: "Very Positive",
    developer: "CyberConnect2 Co. Ltd.",
    systemReq: ["windows"],
    genres: ["Anime", "Fighting", "Action", "Multiplayer"],
    aboutUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/851850/extras/DBZK_SteamGif_GvF.gif?t=1623371739",
    about:  "Experience the story of DRAGON BALL Z from epic events to light-hearted side quests, including never-before-seen story moments that answer some burning questions of DRAGON BALL lore for the first time! Play through iconic DRAGON BALL Z battles on a scale unlike any other. Fight across vast battlefields with destructible environments and experience epic boss battles against the most iconic foes (Raditz, Frieza, Cell etc…). Increase your power level through RPG mechanics and rise to the challenge!"
  },{
    name: "TEKKEN 7",
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/389730/ss_e4266a29ed7485522c85ff61b454f3765151a0db.1920x1080.jpg?t=1616774938",
    description:
      "Discover the epic conclusion of the long-time clan warfare between members of the Mishima family. Powered by Unreal Engine 4, the legendary fighting game franchise fights back with stunning story-driven cinematic battles and intense duels that can be enjoyed with friends and rivals.",  
    price: 36,
    countInStock: 41,
    release: "2 Jun, 2017",
    reviews: "Very Positive",
    developer: "BANDAI NAMCO Studios Inc.",
    systemReq: ["windows"],
    genres: ["Competitive", "Fighting", "Action", "Multiplayer"],
    aboutUrl: "https://cdn.akamai.steamstatic.com/steam/apps/389730/extras/Gifs-Tekken_3.png?t=1616774938",
    about:  "Discover the epic conclusion of the Mishima clan and unravel the reasons behind each step of their ceaseless fight. Powered by Unreal Engine 4, TEKKEN 7 features stunning story-driven cinematic battles and intense duels that can be enjoyed with friends and rivals alike through innovative fight mechanics. Love, Revenge, Pride. Everyone has a reason to fight. Values are what define us and make us human, regardless of our strengths and weaknesses. There are no wrong motivations, just the path we choose to take. Expand your fighter's journey by purchasing the Tekken 7 Season Pass separately and gain access to stunning additional content"
  },{
    name: "Street Fighter V",
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/310950/ss_0c978ad8752374d09510d6577ac415ce4e355186.600x338.jpg?t=1623810236",
    description:
      "Experience the intensity of head-to-head battles with Street Fighter® V! Choose from 16 iconic characters, then battle against friends online or offline with a robust variety of match options.",  
    price: 33,
    countInStock: 21,
    release: "16 Feb, 2016",
    reviews: "Mostly Positive",
    developer: "Capcom",
    systemReq: ["windows"],
    genres: ["Arcade", "Fighting", "Action", "Multiplayer"],
    aboutUrl: "https://cdn.akamai.steamstatic.com/steam/apps/310950/extras/Ryu-V-Trigger-2_V2.gif?t=1623810236",
    about:  "Experience the intensity of head-to-head battle with Street Fighter® V! Choose from 16 iconic characters, each with their own personal story and unique training challenges, then battle against friends online or offline with a robust variety of match options. Earn Fight Money in Ranked Matches, play for fun in Casual Matches or invite friends into a Battle Lounge and see who comes out on top! PlayStation 4 and Steam players can also play against each other thanks to cross-play compatibility! This version of Street Fighter V displays the “Arcade Edition” title screen and includes Arcade Mode, Team Battle Mode and the online-enabled Extra Battle Mode, where you can earn rewards, XP and Fight Money! Fight Money can be used to purchase additional characters, costumes, stages and more! Download the cinematic story “A Shadow Falls” today for FREE! M. Bison deploys seven Black Moons into orbit, granting him unimaginable power as the earth falls into darkness. Street Fighter V: Champion Edition is the ultimate pack that includes all content (excluding Fighting Chance costumes, brand collaboration costumes and Capcom Pro Tour DLC) from both the original release and Street Fighter V: Arcade Edition. It also includes each character, stage and costume that released after Arcade Edition. That means 40 characters, 34 stages and over 200 costumes!"
  },{
    name: "GUILTY GEAR -STRIVE-",
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1384160/ss_a373027db9e3f72f10637204bad95fb3810a3170.600x338.jpg?t=1625015685",
    description:
      "The cutting-edge 2D/3D hybrid graphics pioneered in the Guilty Gear series have been raised to the next level in “GUILTY GEAR -STRIVE-“. The new artistic direction and improved character animations will go beyond anything you’ve seen before in a fighting game!",  
    price: 42,
    countInStock: 49,
    release: "11 Jun, 2021",
    reviews: "Very Positive",
    developer: "Arc System Works",
    systemReq: ["windows"],
    genres: ["Aminme", "Fighting", "Action", "Arcade"],
    aboutUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1384160/extras/GGST_steamGIF_01.gif?t=1625015685",
    about:  "Discover the Smell of the Game with Guilty Gear -Strive-! Immerse yourself in new gameplay mechanics designed to be simple and welcoming for fighting game newcomers, yet deep and creative for veterans. Ride the Fire into a heavy metal inspired alternate future full of over-the-top action, style and fun! Blazing! “Guilty Gear -Strive-“ is the latest entry in the critically acclaimed Guilty Gear fighting game franchise. Created by Daisuke Ishiwatari and developed by Arc System Works, “Guilty Gear -Strive-“ upholds the series’ reputation for a high octane soundtrack, groundbreaking hybrid 2D/3D cell-shaded graphics and intense, rewarding gameplay."
  },{
    name: "BlazBlue Centralfiction",
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1384160/ss_a373027db9e3f72f10637204bad95fb3810a3170.600x338.jpg?t=1625015685",
    description:
      "Combining 2D fighting game and visual novel, the BlazBlue series has been supported by many fighting game fans. The latest installation, BlazBlue: Centralfiction, serves as the ending to the Azure Saga and reveals the truth that has ever been in mystery.",  
    price: 16,
    countInStock: 19,
    release: "26 Apr, 2017",
    reviews: "Very Positive",
    developer: "Arc System Works",
    systemReq: ["windows"],
    genres: ["Aminme", "Fighting", "Action", "Story Rich"],
    aboutUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/586140/ss_fa0b6df2b7d2c545f4249a87d57e6e29cafa7c7b.1920x1080.jpg?t=1577344312",
    about:  "First time in this series, 「Naoto = Kurogane」 「Hibiki = Kohaku」 「Nine = the = Phantom」 and 「Izanami」 appear as playable characters and three DLC characters from the console version --「Es」 from XBlaze series that shares the same worldview as Blazblue, 「Mai Natsume」 from the BlazeBlue spinoff manga, Remix Heart, and 「Susano'o」, the true form of 「Yuki Terumi」-- newly join to bring to a total of 35 playable characters!"
  },{
    name: "Pocket Bravery",
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1555150/ss_a2f26fdccd35baaf849e0bcab7b23c2965c88803.600x338.jpg?t=1620409794",
    description:
      "Pocket Bravery is an original fighting game in SD style, with charismatic characters, vibrant colors and a combat system based on the classics from the ‘90s. Made to attract experienced players, but also has features to teach new ones.",  
    price: 10,
    countInStock: 59,
    release: "26 Apr, 2021",
    reviews: "No User Review",
    developer: "Statera Studio",
    systemReq: ["windows"],
    genres: ["eSports", "Fighting", "Action", "Multiplayer"],
    aboutUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1555150/extras/combo.gif?t=1620409794",
    about:  "Pocket Bravery is inspired by classics from the 90s, such as Street Fighter, Fatal Fury and The King of Fighters. And its SD aesthetic had an influence on games like Pocket Fighter and other fighting games from Neo Geo Pocket Color. But make no mistake, Pocket Bravery was created to be a new and unique fighting game, with original characters, vibrant colors and a combat system that will impress you, since the game was designed with the focus on high level players. Even so, it has features that will teach beginning players how to develop and evolve in the game."
  },
  {
    name: "Yakuza: Like a Dragon",
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1235140/ss_fe349bb52fa4a8243ba8d9b861bb52c3a4f4b5b0.600x338.jpg?t=1624525656",
    description:
      "Become Ichiban Kasuga, a low-ranking yakuza grunt left on the brink of death by the man he trusted most. Take up your legendary bat and get ready to crack some underworld skulls in dynamic RPG combat set against the backdrop of modern-day Japan.",  
    price: 20,
    countInStock: 51,
    release: "11 Nov, 2020",
    reviews: "Very Positive",
    developer: "Ryu Ga Gotoku Studio",
    systemReq: ["windows"],
    genres: ["eSports", "Fighting", "Action", "Multiplayer"],
    aboutUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1235140/extras/YLAD_STEAM_REVIEW_SCORES_616.jpg?t=1624525656",
    about:  "Ichiban Kasuga, a low-ranking grunt of a low-ranking yakuza family in Tokyo, faces an 18-year prison sentence after taking the fall for a crime he didn't commit. Never losing faith, he loyally serves his time and returns to society to discover that no one was waiting for him on the outside, and his clan has been destroyed by the man he respected most. Ichiban sets out to discover the truth behind his family's betrayal and take his life back, drawing a ragtag group of society’s outcasts to his side: Adachi, a rogue cop, Nanba, a homeless ex-nurse, and Saeko, a hostess on a mission. Together, they are drawn into a conflict brewing beneath the surface in Yokohama and must rise to become the heroes they never expected to be."
  },{
    name: "DEAD OR ALIVE 6",
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/838380/ss_2461d3a6c2dd2c0fd96dd07ad51af9b2e47f7b6d.600x338.jpg?t=1621240090",
    description:
      "DEAD OR ALIVE 6 is fast-paced 3D fighting game, produced by Koei Tecmo Games, featuring stunning graphics and multi-tiered stages that create a truly entertaining competitive experience.",  
    price: 23,
    countInStock: 53,
    release: "1 Mar, 2019",
    reviews: "Mostly Positive",
    developer: "KOEI TECMO GAMES CO., LTD.",
    systemReq: ["windows"],
    genres: ["Sexual Content", "Fighting", "Action", "Anime", "Nudity"],
    aboutUrl: "https://cdn.akamai.steamstatic.com/steam/apps/838380/extras/DOA6_steam_v2_launch.png?t=1621240090",
    about:  "The DEAD OR ALIVE franchise is a AAA fighting game series produced by Koei Tecmo Games' Team NINJA. Composed of fast-paced 3D fighting games that began with the original DEAD OR ALIVE arcade game in 1996, and have since appeared on a multitude of consoles and arcade machines around the world. In DEAD OR ALIVE 6, the world of DOA is brought back more vibrant than ever, featuring both enhanced visuals and an updated combat systems, aimed to provide the highest possible level of new fighting entertainment."
  },{
    name: "NARUTO SHIPPUDEN: Ultimate Ninja STORM 4",
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/349040/ss_4f91876c2dbcc95cd32fdf3d9cf68895737b33ef.600x338.jpg?t=1611701005",
    description:
      "The latest opus in the acclaimed STORM series is taking you on a colourful and breathtaking ride. Take advantage of the totally revamped battle system and prepare to dive into the most epic fights you’ve ever seen !",  
    price: 23,
    countInStock: 53,
    release: "5 Feb, 2016",
    reviews: "Very Positive",
    developer: "CyberConnect2 Co. Ltd.",
    systemReq: ["windows"],
    genres: ["Multiplayer", "Fighting", "Action", "Anime", "Ninja"],
    aboutUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/349040/extras/NS4_GIF_01.gif?t=1611701005",
    about:  "The latest opus in the acclaimed STORM series is taking you on a colourful and breathtaking ride. Take advantage of the totally revamped battle system and prepare to dive into the most epic fights you’ve ever seen in the NARUTO SHIPPUDEN: Ultimate Ninja STORM series!"
  },{
    name: "Metal Revolution / 金属对决",
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/994560/ss_d0fc03830be848af2e0eb1318d4365d973db035f.600x338.jpg?t=1604979804",
    description:
      "Metal Revolution is a new generation of fighting game. The minimalistic controls, deep gameplay, and the cyberpunk robot theme are designed to bring a fresh battle experience. For the fighters who never flinch in the face of furious combat, welcome to Metal Revolution.",  
    price: 32,
    countInStock: 100,
    release: "Coming Soon",
    reviews: "No user reviews",
    developer: "NEXT Studios",
    systemReq: ["windows"],
    genres: ["Multiplayer", "Fighting", "Action"],
    aboutUrl: "https://cdn.akamai.steamstatic.com/steam/apps/994560/extras/MR_Key_Art.png?t=1604979804",
    about:  "Metal Revolution is a new generation of fighting game. The minimalistic controls, deep gameplay, and the cyberpunk robot theme are designed to bring a fresh battle experience. The game is supported across all platforms and multiple languages to let players from around the world seamlessly enjoy fighting in the new gaming era! There is no room for those who hold back, no place for weakness. For the fighters who never flinch in the face of furious combat, welcome to Metal Revolution."
  },{
    name: "Sclash",
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1284130/ss_17dad75be681ad6c6a5f9fe1a047c824942dc32a.1920x1080.jpg?t=1625581370",
    description:
      "Sclash is a plug’n play samurai fighting game full of tension where one hit means death.Play as an experienced samurai and fight your opponent in epic battles where each move matters. Manage well your stamina, breath and take your time to land a deadly hit.",  
    price: 42,
    countInStock: 100,
    release: "Q4 2021",
    reviews: "No user reviews",
    developer: "Bastien BERNAND, Victor CALLO",
    systemReq: ["windows"],
    genres: ["Casual", "Fighting", "Hand-drawn", "Local-multiplayer"],
    aboutUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1284130/extras/Stages-min2_resized.gif?t=1625581370",
    about:  "You have room to breathe: take time to plan your attack and anticipate your opponent's moves! Feel the pressure rising with each move in tense one-hit battles set in gorgeous hand-drawn environments where every slash counts."
  },{
    name: "Puyo Puyo™ Tetris® 2",
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1284130/ss_17dad75be681ad6c6a5f9fe1a047c824942dc32a.1920x1080.jpg?t=1625581370",
    description:
      "Japan’s beloved puzzle game series Puyo Puyo and the world-renowned Tetris® game franchise have teamed up again to deliver even more Puyo-popping and Tetrimino-clearing fun in Puyo Puyo Tetris 2.",  
    price: 32,
    countInStock: 30,
    release: "24 Mar, 2021",
    reviews: "Very Positive",
    developer: "SEGA",
    systemReq: ["windows"],
    genres: ["Casual", "Action", "Arcade", "Anime", "puzzle"],
    aboutUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1259790/extras/FusionSwap_NoRating_1.gif?t=1622826018",
    about:  "Two Legends Reunite for the Ultimate Puzzle Match Japan’s beloved puzzle game series Puyo Puyo and the world-renowned Tetris® game franchise have teamed up again to deliver even more Puyo-popping and Tetrimino-clearing fun!"
  },
  {
    name: "Deep Rock Galactic",
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/548430/ss_4cac98f49fde6e994a64e813baaf7b34a195d2cc.600x338.jpg?t=1624954409",
    description:
      "Deep Rock Galactic is a 1-4 player co-op FPS featuring badass space Dwarves, 100% destructible environments, procedurally-generated caves, and endless hordes of alien monsters.",  
    price: 49,
    countInStock: 20,
    release: "13 May, 2020",
    reviews: "Overwhelmingly Positive",
    developer: "Ghost Ship Games",
    systemReq: ["windows"],
    genres: ["Looter Shooter", "Horror", "exploration"],
    aboutUrl: "https://cdn.akamai.steamstatic.com/steam/apps/548430/extras/AboutThisGame_Top.gif?t=1624954409",
    about:  "Deep Rock Galactic is a 1-4 player co-op FPS featuring badass space Dwarves, 100% destructible environments, procedurally-generated caves, and endless hordes of alien monsters."
  },{
    name: "theHunter: Call of the Wild™",
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/518790/ss_8a75aa823fbaa3a8ec3cf844d1340308250737a4.600x338.jpg?t=1624975291",
    description:
      "Experience an atmospheric hunting game like no other in this realistic and visually breathtaking open world. Immerse yourself in the atmospheric single player campaign, or share the ultimate hunting experience with friends.",  
    price: 10,
    countInStock: 10,
    release: "16 Feb, 2017",
    reviews: "Very Positive",
    developer: "Expansive Worlds",
    systemReq: ["windows"],
    genres: ["Hunting", "Simulation", "open World", "Multiplayer"],
    aboutUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/518790/extras/tHCOTW_constantly_updating.png?t=1624975291",
    about:  "Never before have you experienced a hunting game like theHunter: Call of the Wild. Plunge into an atmospheric open world, teeming with life: from the majestic true-to-life animals to the rustling of leaves above you as you stalk your prey. You can decide to hunt on your own or join up and hunt together with friends. Just remember, you are not just a visitor in this world, you are a living and breathing part of it. As you finally spot the majestic crown of your first red deer through the brush, the feeling is indescribable."
  },{
    name: "Total War: WARHAMMER II",
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/594570/ss_b923ac3082d777893dfd5594f338b2c7dada5133.600x338.jpg?t=1624564632",
    description:
      "Strategy gaming perfected. A breath-taking campaign of exploration, expansion and conquest across a fantasy world. Turn-based civilisation management and real-time epic strategy battles with thousands of troops and monsters at your command.",  
    price: 44,
    countInStock: 40,
    release: "28 Sep, 2017",
    reviews: "Very Positive",
    developer: "CREATIVE ASSEMBLY, Feral Interactive (Mac), Feral Interactive (Linux)",
    systemReq: ["windows"],
    genres: ["Fantasy", "Strategy", "RTS"],
    aboutUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/594570/ss_b923ac3082d777893dfd5594f338b2c7dada5133.600x338.jpg?t=1624564632",
    about:  "Total War: WARHAMMER II is a strategy game of titanic proportions. Choose from four unique, varied factions and wage war your way – mounting a campaign of conquest to save or destroy a vast and vivid fantasy world"
  },{
    name: "Titanfall® 2",
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1237970/ss_9e89b335e17df4e5049ffd30a558ddf50a8e36af.600x338.jpg?t=1619804815",
    description:
      "Respawn Entertainment gives you the most advanced titan technology in its new, single player campaign & multiplayer experience. Combine & conquer with new titans & pilots, deadlier weapons, & customization and progression systems that help you and your titan flow as one unstoppable killing force.",  
    price: 30,
    countInStock: 20,
    release: "28 Oct, 2016",
    reviews: "Overwhelmingly Positive",
    developer: "Respawn Entertainment",
    systemReq: ["windows"],
    genres: ["Shooter", "Actions", "Multiplayer"],
    aboutUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1237970/extras/Ultimate_Edition_content_2.png?t=1619804815",
    about:  "Call down your Titan and get ready for an exhilarating first-person shooter experience in Titanfall® 2! The sequel introduces a new single player campaign that explores the bond between Pilot and Titan. Or blast your way through an even more innovative and intense multiplayer experience - featuring 6 new Titans, deadly new Pilot abilities, expanded customization, new maps, modes, and much more."
  }
  
]

module.exports = products;