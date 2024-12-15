const colors = {
  red: {
    "001": { rgb: "rgb(171, 39,  79 )",     hex: "#AB274F",     hsl: "hsl(341.82, 62.86%, 41.18%)" },       // Amaranth Purple
    "002": { rgb: "rgb(124, 9,   2  )",     hex: "#7C0902",     hsl: "hsl(3.44, 96.83%, 24.71%)" },         // Barn Red
    "003": { rgb: "rgb(254, 111, 94 )",     hex: "#FE6F5E",     hsl: "hsl(6.37, 98.77%, 68.24%)" },         // Bittersweet
    "004": { rgb: "rgb(191, 79,  81 )",     hex: "#BF4F51",     hsl: "hsl(358.93, 46.67%, 52.94%)" },       // Bittersweet Shimmer
    "005": { rgb: "rgb(102, 0,   0  )",     hex: "#660000",     hsl: "hsl(0, 100%, 20%)" },                 // Blood Red
    "006": { rgb: "rgb(251, 96,  127)",     hex: "#FB607F",     hsl: "hsl(345.71, 95.69%, 68.04%)" },       // Bright Pink Crayola
    "007": { rgb: "rgb(128, 0,   32 )",     hex: "#800020",     hsl: "hsl(345, 100%, 25.1%)" },             // Burgundy
    "008": { rgb: "rgb(255, 8,   0  )",     hex: "#FF0800",     hsl: "hsl(0, 100%, 50.2%)" },               // Candy Apple Red
    "009": { rgb: "rgb(253, 188, 180)",     hex: "#FDBCBC",     hsl: "hsl(15, 100%, 85.1%)" },              // Cantaloupe Melon
    "010": { rgb: "rgb(197, 30,  58 )",     hex: "#C51E3A",     hsl: "hsl(348, 70%, 43.1%)" },              // Cardinal
    "011": { rgb: "rgb(150, 0,   24 )",     hex: "#960018",     hsl: "hsl(348, 100%, 29.4%)" },             // Carmine
    "012": { rgb: "rgb(222, 49,  99 )",     hex: "#DE3163",     hsl: "hsl(345, 77%, 53.9%)" },              // Cerise
    "013": { rgb: "rgb(226, 61,  40 )",     hex: "#E23D28",     hsl: "hsl(6.67, 75.69%, 53.33%)" },         // Chili Red
    "014": { rgb: "rgb(88,  17,  26 )",     hex: "#58111A",     hsl: "hsl(349.09, 67.65%, 21.18%)" },       // Chocolate Cosmos
    "015": { rgb: "rgb(228, 77,  46 )",     hex: "#E44D2E",     hsl: "hsl(9.6, 75.69%, 54.71%)" },          // Cinnabar
    "016": { rgb: "rgb(127, 23,  52 )",     hex: "#7F1734",     hsl: "hsl(342.86, 69.23%, 30.98%)" },       // Claret
    "017": { rgb: "rgb(255, 56,  0  )",     hex: "#FF3800",     hsl: "hsl(9.6, 100%, 50%)" },               // Coquelicot
    "018": { rgb: "rgb(248, 131, 121)",     hex: "#F88379",     hsl: "hsl(5.45, 85.71%, 74.51%)" },         // Coral Pink
    "019": { rgb: "rgb(137, 63,  69 )",     hex: "#893F45",     hsl: "hsl(353.33, 37.5%, 40.98%)" },        // Cordovan
    "020": { rgb: "rgb(179, 27,  27 )",     hex: "#B31B1B",     hsl: "hsl(0, 74.19%, 40.98%)" },            // Cornell Red
    "021": { rgb: "rgb(220, 20 , 60 )",     hex: "#DC143C",     hsl: "hsl(348.46, 83.33%, 47.06%)" },       // Crimson
    "022": { rgb: "rgb(139, 0,   0  )",     hex: "#8B0000",     hsl: "hsl(0, 100%, 27.25%)" },              // Dark Red
    "023": { rgb: "rgb(128, 24,  24 )",     hex: "#801818",     hsl: "hsl(0, 68.57%, 29.41%)" },            // Falu Red
    "024": { rgb: "rgb(178, 34,  34 )",     hex: "#B22222",     hsl: "hsl(0, 68.57%, 41.18%)" },            // Fire Brick
    "025": { rgb: "rgb(206, 32,  41 )",     hex: "#CE2029",     hsl: "hsl(357.27, 73.33%, 47.25%)" },       // Fire Engine Red
    "025": { rgb: "rgb(255, 0,   79 )",     hex: "#FF004F",     hsl: "hsl(341.82, 100%, 50%)" },            // Folly
    "026": { rgb: "rgb(115, 54,  53 )",     hex: "#733635",     hsl: "hsl(1.03, 37.5%, 35.1%)" },           // Garnet
    "027": { rgb: "rgb(237, 41,  57 )",     hex: "#ED2939",     hsl: "hsl(354.55, 82.61%, 54.71%)" },       // Imperial Red
    "028": { rgb: "rgb(205, 92,  92 )",     hex: "#CD5C5C",     hsl: "hsl(0, 53.33%, 58.82%)" },            // Indian Red
    "029": { rgb: "rgb(208, 83,  64 )",     hex: "#D05340",     hsl: "hsl(8.57, 59.26%, 55.1%)" },          // Jasper
    "030": { rgb: "rgb(240, 128, 128)",     hex: "#F08080",     hsl: "hsl(0, 72.73%, 72.16%)" },            // Light Coral
    "031": { rgb: "rgb(255, 127, 127)",     hex: "#FF7F7F",     hsl: "hsl(0, 100%, 77.45%)" },              // Light Red
    "032": { rgb: "rgb(165, 0,   33 )",     hex: "#A50021",     hsl: "hsl(348.46, 100%, 32.35%)" },         // Madder
    "033": { rgb: "rgb(192, 64,  0  )",     hex: "#C04000",     hsl: "hsl(15, 100%, 37.65%)" },             // Mahogany
    "034": { rgb: "rgb(128, 0,   0  )",     hex: "#800000",     hsl: "hsl(0, 100%, 25.1%)" },               // Maroon
    "035": { rgb: "rgb(255, 228, 225)",     hex: "#FFE4E1",     hsl: "hsl(6, 100%, 97.06%)" },              // Misty Rose
    "036": { rgb: "rgb(254, 0,   0  )",     hex: "#FE0000",     hsl: "hsl(0, 100%, 50.2%)" },               // Off Red RGB
    "037": { rgb: "rgb(192, 128, 129)",     hex: "#C08081",     hsl: "hsl(0, 33.33%, 64.12%)" },            // Old Rose
    "038": { rgb: "rgb(132, 22,  23 )",     hex: "#841617",     hsl: "hsl(359.09, 70.91%, 30.59%)" },       // OU Crimson
    "039": { rgb: "rgb(153, 0,   0  )",     hex: "#990000",     hsl: "hsl(0, 100%, 30%)" },                 // Penn Red
    "040": { rgb: "rgb(204, 51,  51 )",     hex: "#CC3333",     hsl: "hsl(0, 60%, 52.35%)" },               // Persian Red
    "041": { rgb: "rgb(255, 192, 203)",     hex: "#FFC0CB",     hsl: "hsl(350, 100%, 88.82%)" },            // Pink
    "042": { rgb: "rgb(220, 52,  59 )",     hex: "#DC343B",     hsl: "hsl(358.18, 68.57%, 54.71%)" },       // Poppy
    "043": { rgb: "rgb(255, 0,   0  )",     hex: "#FF0000",     hsl: "hsl(0, 100%, 50%)" },                 // Red
    "044": { rgb: "rgb(165, 42,  42 )",     hex: "#A52A2A",     hsl: "hsl(0, 59.42%, 41.18%)" },            // Red Brown
    "045": { rgb: "rgb(237, 27,  36 )",     hex: "#ED1B24",     hsl: "hsl(357.27, 89.47%, 50.59%)" },       // Red CMYK
    "046": { rgb: "rgb(238, 32,  78 )",     hex: "#EE204E",     hsl: "hsl(342.86, 84.62%, 54.71%)" },       // Red Crayola
    "047": { rgb: "rgb(242, 0,   60 )",     hex: "#F2003C",     hsl: "hsl(345.71, 100%, 47.25%)" },         // Red Munsell
    "048": { rgb: "rgb(196, 2,   52 )",     hex: "#C40234",     hsl: "hsl(351.43, 97.06%, 38.82%)" },       // Red NCS
    "049": { rgb: "rgb(237, 40,  57 )",     hex: "#ED2839",     hsl: "hsl(354.55, 82.61%, 54.71%)" },       // Red Pantone
    "050": { rgb: "rgb(171, 78,  82 )",     hex: "#AB4E52",     hsl: "hsl(358.18, 31.82%, 52.35%)" },       // Redwood
    "051": { rgb: "rgb(230, 0,   38 )",     hex: "#E60026",     hsl: "hsl(351.43, 100%, 45.1%)" },          // Rojo
    "052": { rgb: "rgb(255, 0,   128)",     hex: "#FF0080",     hsl: "hsl(320, 100%, 50%)" },               // Rose
    "053": { rgb: "rgb(103, 72,  70 )",     hex: "#674846",     hsl: "hsl(3.33, 19.05%, 34.12%)" },         // Rose Ebony
    "054": { rgb: "rgb(194, 30,  86 )",     hex: "#C21E56",     hsl: "hsl(337.5, 74.07%, 44.71%)" },        // Rose Red
    "054": { rgb: "rgb(144, 93,  93 )",     hex: "#905D5D",     hsl: "hsl(0, 21.43%, 47.25%)" },            // Rose Taupe
    "055": { rgb: "rgb(171, 78,  82 )",     hex: "#AB4E52",     hsl: "hsl(357.42, 37.35%, 48.82%)" },       // Rose Vale
    "056": { rgb: "rgb(101, 0,   11 )",     hex: "#65000B",     hsl: "hsl(351.43, 100%, 19.8%)" },          // Rosewood
    "057": { rgb: "rgb(188, 143, 143)",     hex: "#BC8F8F",     hsl: "hsl(0, 25%, 64.71%)" },               // Rosy Brown
    "058": { rgb: "rgb(183, 65,  14 )",     hex: "#B7410E",     hsl: "hsl(16.36, 85.71%, 38.04%)" },        // Rust
    "059": { rgb: "rgb(218, 44,  67 )",     hex: "#DA2C43",     hsl: "hsl(351.43, 70.59%, 52.35%)" },       // Rusty Red
    "060": { rgb: "rgb(250, 128, 114)",     hex: "#FA8072",     hsl: "hsl(6, 93.19%, 71.57%)" },            // Salmon
    "061": { rgb: "rgb(255, 145, 164)",     hex: "#FF91A4",     hsl: "hsl(349.41, 100%, 80.59%)" },         // Salmon Pink
    "062": { rgb: "rgb(255, 36,  0  )",     hex: "#FF2400",     hsl: "hsl(5.45, 100%, 50%)" },              // Scarlet
    "063": { rgb: "rgb(212, 69,  0  )",     hex: "#D44500",     hsl: "hsl(16.36, 100%, 41.57%)" },          // Syracuse Red Orange
    "064": { rgb: "rgb(244, 194, 194)",     hex: "#F4C2C2",     hsl: "hsl(0, 53.33%, 86.27%)" },            // Tea Rose Red
    "065": { rgb: "rgb(255, 99,  71 )",     hex: "#FF6347",     hsl: "hsl(9.09, 100%, 64.71%)" },           // Tomato
    "066": { rgb: "rgb(169, 17,  1  )",     hex: "#A91101",     hsl: "hsl(1.03, 98.82%, 33.14%)" },         // Turkey Red
    "067": { rgb: "rgb(227, 66,  52 )",     hex: "#E34234",     hsl: "hsl(4.29, 73.33%, 55.1%)" },          // Vermilion
    "068": { rgb: "rgb(114, 47,  55 )",     hex: "#722F37",     hsl: "hsl(353.33, 41.67%, 33.14%)" },       // Wine
  },
  orange: {
    "001": { rgb: "rgb(255, 79,  0)",       hex: "#FF4F00",     hsl: "hsl(18.59, 100%, 50%)" },             // Aerospace Orange
    "002": { rgb: "rgb(196, 98,  16)",      hex: "#C46210",     hsl: "hsl(27.27, 85.71%, 40%)" },           // Alloy Orange
    "003": { rgb: "rgb(255, 191, 0)",       hex: "#FFBF00",     hsl: "hsl(45, 100%, 50%)" },                // Amber
    "004": { rgb: "rgb(251, 206, 177)",     hex: "#FBCEB1",     hsl: "hsl(20, 90.91%, 85.1%)" },            // Apricot
    "005": { rgb: "rgb(255, 153, 102)",     hex: "#FF9966",     hsl: "hsl(20, 100%, 70%)" },                // Atomic Tangerine
    "006": { rgb: "rgb(150, 75,  0)",       hex: "#964B00",     hsl: "hsl(30, 100%, 29.41%)" },             // Brown
    "007": { rgb: "rgb(191, 87,  0)",       hex: "#BF5700",     hsl: "hsl(24.71, 100%, 37.45%)" },          // Burnt Orange
    "008": { rgb: "rgb(224, 149, 64)",      hex: "#E09540",     hsl: "hsl(30, 73.33%, 58.82%)" },           // Butterscotch
    "009": { rgb: "rgb(237, 145, 33)",      hex: "#ED9121",     hsl: "hsl(30.59, 85.71%, 54.12%)" },        // Carrot Orange
    "010": { rgb: "rgb(247, 231, 206)",     hex: "#F7E7CE",     hsl: "hsl(35, 70.59%, 89.02%)" },           // Champagne
    "011": { rgb: "rgb(255, 127, 80)",      hex: "#FF7F50",     hsl: "hsl(16.08, 100%, 70%)" },             // Coral
    "012": { rgb: "rgb(255, 140, 0)",       hex: "#FF8C00",     hsl: "hsl(33.82, 100%, 50%)" },             // Dark Orange Web
    "013": { rgb: "rgb(237, 201, 175)",     hex: "#EDC9AF",     hsl: "hsl(20, 70.59%, 84.12%)" },           // Desert Sand
    "014": { rgb: "rgb(186, 22,  12)",      hex: "#BA160C",     hsl: "hsl(3.45, 87.88%, 38.82%)" },         // Engineering Orange
    "015": { rgb: "rgb(226, 88,  34)",      hex: "#E25822",     hsl: "hsl(16.88, 76.8%, 50.98%)" },         // Flame
    "016": { rgb: "rgb(254, 90,  29)",      hex: "#FE5A1D",     hsl: "hsl(14.12, 98.67%, 56.67%)" },        // Giants Orange
    "017": { rgb: "rgb(255, 215, 0)",       hex: "#FFD700",     hsl: "hsl(51.43, 100%, 50%)" },             // Gold
    "018": { rgb: "rgb(240, 74,  0)",       hex: "#F04A00",     hsl: "hsl(12.35, 100%, 47.06%)" },          // Golden Gate Bridge
    "019": { rgb: "rgb(218, 165, 32)",      hex: "#DAA520",     hsl: "hsl(42.86, 74.74%, 49.02%)" },        // Goldenrod
    "020": { rgb: "rgb(232, 172, 65)",      hex: "#E8AC41",     hsl: "hsl(38.57, 77.78%, 58.04%)" },        // Hunyadi Yellow
    "021": { rgb: "rgb(254, 216, 177)",     hex: "#FED8B1",     hsl: "hsl(27.27, 98.67%, 86.67%)" },        // Light Orange
    "022": { rgb: "rgb(192, 64,  0)",       hex: "#C04000",     hsl: "hsl(15, 100%, 37.65%)" },             // Mahogany
    "023": { rgb: "rgb(253, 188, 180)",     hex: "#FDBCB4",     hsl: "hsl(15, 100%, 85.1%)" },              // Melon
    "024": { rgb: "rgb(255, 117, 56)",      hex: "#FF7538",     hsl: "hsl(17.14, 100%, 64.12%)" },          // Orange Crayola
    "025": { rgb: "rgb(255, 88,  0)",       hex: "#FF5800",     hsl: "hsl(17.14, 100%, 50%)" },             // Orange Pantone
    "026": { rgb: "rgb(255, 160, 0)",       hex: "#FFA000",     hsl: "hsl(38.82, 100%, 50%)" },             // Orange Peel
    "027": { rgb: "rgb(255, 165, 0)",       hex: "#FFA500",     hsl: "hsl(39.22, 100%, 50%)" },             // Orange Web
    "028": { rgb: "rgb(255, 128, 0)",       hex: "#FF8000",     hsl: "hsl(30, 100%, 50%)" },                // Orange Wheel
    "029": { rgb: "rgb(255, 239, 213)",     hex: "#FFEFDC",     hsl: "hsl(37.5, 100%, 91.18%)" },           // Papaya Whip
    "030": { rgb: "rgb(255, 229, 180)",     hex: "#FFE5B4",     hsl: "hsl(39.13, 100%, 85.1%)" },           // Peach
    "031": { rgb: "rgb(217, 144, 88)",      hex: "#D99058",     hsl: "hsl(24.71, 63.64%, 63.14%)" },        // Persian Orange
    "032": { rgb: "rgb(236, 88,  0)",       hex: "#EC5800",     hsl: "hsl(16.36, 100%, 46.27%)" },          // Persimmon
    "033": { rgb: "rgb(255, 143, 0)",       hex: "#FF8F00",     hsl: "hsl(35.29, 100%, 50%)" },             // Princeton Orange
    "034": { rgb: "rgb(255, 117, 24)",      hex: "#FF7518",     hsl: "hsl(24.71, 100%, 55.1%)" },           // Pumpkin
    "035": { rgb: "rgb(255, 121, 0)",       hex: "#FF7900",     hsl: "hsl(30.59, 100%, 50%)" },             // Safety Orange
    "036": { rgb: "rgb(244, 196, 48)",      hex: "#F4C430",     hsl: "hsl(45.88, 90.48%, 58.04%)" },        // Saffron
    "037": { rgb: "rgb(232, 97,  0)",       hex: "#E86100",     hsl: "hsl(22.35, 100%, 45.49%)" },          // Spanish Orange
    "038": { rgb: "rgb(249, 77,  0)",       hex: "#F94D00",     hsl: "hsl(14.12, 100%, 48.82%)" },          // Tangelo
    "039": { rgb: "rgb(242, 133, 0)",       hex: "#F28500",     hsl: "hsl(30.88, 100%, 47.45%)" },          // Tangerine
    "040": { rgb: "rgb(205, 87,  0)",       hex: "#CD5700",     hsl: "hsl(24.71, 100%, 40.2%)" },           // Tawny
    "041": { rgb: "rgb(181, 105, 23)",      hex: "#B56917",     hsl: "hsl(30.77, 77.27%, 39.02%)" },        // Tigers Eye
    "042": { rgb: "rgb(255, 130, 0)",       hex: "#FF8200",     hsl: "hsl(33.53, 100%, 50%)" },             // UT Orange
    "043": { rgb: "rgb(241, 180, 47)",      hex: "#F1B42F",     hsl: "hsl(42.35, 88.89%, 57.06%)" },        // Xanthous
  },
  brown: {
    "001": { rgb: "rgb(165, 42, 42)", hex: "#A52A2A", hsl: "hsl(0, 59.42%, 40.59%)" }, // Auburn
    "002": { rgb: "rgb(239, 222, 205)", hex: "#EFDECD", hsl: "hsl(25.71, 53.33%, 88.04%)" }, // Almond
    "003": { rgb: "rgb(159, 129, 112)", hex: "#9F8170", hsl: "hsl(24.71, 19.05%, 55.1%)" }, // Beaver
    "004": { rgb: "rgb(245, 245, 220)", hex: "#F5F5DC", hsl: "hsl(60, 55.56%, 91.18%)" }, // Beige
    "005": { rgb: "rgb(61, 43, 31)", hex: "#3D2B1F", hsl: "hsl(24, 32.26%, 18.63%)" }, // Bistre
    "006": { rgb: "rgb(61, 12, 2)", hex: "#3D0C02", hsl: "hsl(9.6, 93.55%, 12.35%)" }, // Black Bean
    "007": { rgb: "rgb(59, 60, 54)", hex: "#3B3C36", hsl: "hsl(60, 5.56%, 22.35%)" }, // Black Olive
    "008": { rgb: "rgb(121, 68, 59)", hex: "#79443B", hsl: "hsl(8.71, 34.44%, 35.29%)" }, // Bole
    "009": { rgb: "rgb(227, 218, 201)", hex: "#E3DAC9", hsl: "hsl(38, 34.4%, 84.5%)" }, // Bone
    "010": { rgb: "rgb(205, 127, 50)", hex: "#CD7F32", hsl: "hsl(30, 60.9%, 49.8%)" }, // Bronze
    "011": { rgb: "rgb(153, 51, 0)", hex: "#993300", hsl: "hsl(18, 100%, 30%)" }, // Brown
    "012": { rgb: "rgb(175, 110, 77)", hex: "#AF6E4D", hsl: "hsl(22, 38.8%, 49.8%)" }, // Brown Sugar
    "013": { rgb: "rgb(218, 160, 109)", hex: "#DAA06D", hsl: "hsl(30, 58.1%, 63.9%)" }, // Buff
    "014": { rgb: "rgb(233, 116, 81)", hex: "#E97451", hsl: "hsl(15, 74.7%, 63.9%)" }, // Burnt Sienna
    "015": { rgb: "rgb(138, 51, 36)", hex: "#8A3324", hsl: "hsl(14, 53.8%, 34.9%)" }, // Burnt Umber
    "016": { rgb: "rgb(193, 154, 107)", hex: "#C19A6B", hsl: "hsl(34, 39.5%, 57.3%)" }, // Camel
    "017": { rgb: "rgb(89, 39, 32)", hex: "#592720", hsl: "hsl(10, 46.7%, 27.3%)" }, // Caput Mortuum
    "018": { rgb: "rgb(204, 127, 59)", hex: "#CC7F3B", hsl: "hsl(30, 69.1%, 53.3%)" }, // Caramel
    "019": { rgb: "rgb(160, 120, 90)", hex: "#A0785A", hsl: "hsl(30, 33.7%, 50.2%)" }, // Chamoisee
    "020": { rgb: "rgb(149, 69, 53)", hex: "#954535", hsl: "hsl(10, 41.2%, 41.6%)" }, // Chestnut
    "021": { rgb: "rgb(123, 63, 0)", hex: "#7B3F00", hsl: "hsl(30, 100%, 24.1%)" }, // Chocolate
    "022": { rgb: "rgb(221, 208, 106)", hex: "#DDD06A", hsl: "hsl(59, 69.6%, 59%)" }, // Citron
    "023": { rgb: "rgb(210, 105, 30)", hex: "#D2691E", hsl: "hsl(25, 75.7%, 49.8%)" }, // Cocoa Brown
    "024": { rgb: "rgb(111, 78, 55)", hex: "#6F4E37", hsl: "hsl(25, 34.4%, 31.8%)" }, // Coffee
    "025": { rgb: "rgb(184, 115, 51)", hex: "#B87333", hsl: "hsl(30, 59.1%, 47.8%)" }, // Copper
    "026": { rgb: "rgb(137, 63, 69)", hex: "#893F45", hsl: "hsl(355.14, 37%, 39.22%)" }, // Cordovan
    "027": { rgb: "rgb(129, 97, 62)", hex: "#81613E", hsl: "hsl(39, 29.5%, 45.5%)" }, // Coyote
    "028": { rgb: "rgb(237, 201, 175)", hex: "#EDC9AF", hsl: "hsl(20, 70.59%, 84.12%)" }, // Desert Sand
    "029": { rgb: "rgb(74, 65, 42)", hex: "#4A412A", hsl: "hsl(30, 24.4%, 22.7%)" }, // Drab Dark Brown
    "030": { rgb: "rgb(218, 200, 174)", hex: "#DAC8AE", hsl: "hsl(43, 31.8%, 77.3%)" }, // Dun
    "031": { rgb: "rgb(225, 169, 95)", hex: "#E1A95F", hsl: "hsl(39, 67.3%, 61.6%)" }, // Earth Yellow
    "032": { rgb: "rgb(194, 178, 128)", hex: "#C2B280", hsl: "hsl(45, 34.4%, 61.4%)" }, // Ecru
    "033": { rgb: "rgb(193, 154, 107)", hex: "#C19A6B", hsl: "hsl(32.79, 40.95%, 58.82%)" }, // Fallow
    "034": { rgb: "rgb(229, 170, 112)", hex: "#E5AA70", hsl: "hsl(32, 68.3%, 70.2%)" }, // Fawn
    "035": { rgb: "rgb(108, 84, 30)", hex: "#6C541E", hsl: "hsl(38, 56.6%, 30.2%)" }, // Field Drab
    "036": { rgb: "rgb(228, 132, 0)", hex: "#E48400", hsl: "hsl(35, 100%, 44.7%)" }, // Fulvous
    "037": { rgb: "rgb(153, 101, 21)", hex: "#996515", hsl: "hsl(35, 69.9%, 34.1%)" }, // Golden Brown
    "038": { rgb: "rgb(218, 165, 32)", hex: "#DAA520", hsl: "hsl(42.86, 74.74%, 49.02%)" }, // Goldenrod
    "039": { rgb: "rgb(218, 145, 0)", hex: "#DA9100", hsl: "hsl(38, 100%, 42.7%)" }, // Harvest Gold
    "040": { rgb: "rgb(195, 176, 145)", hex: "#C3B091", hsl: "hsl(44, 28.6%, 63.9%)" }, // Khaki
    "041": { rgb: "rgb(107, 68, 35)", hex: "#6B4423", hsl: "hsl(30, 41.9%, 27.6%)" }, // Kobicha
    "042": { rgb: "rgb(193, 154, 107)", hex: "#C19A6B", hsl: "hsl(32.79, 40.95%, 58.82%)" }, // Lion
    "043": { rgb: "rgb(103, 76, 71)", hex: "#674C47", hsl: "hsl(10, 17.9%, 33.3%)" }, // Liver
    "044": { rgb: "rgb(192, 64, 0)", hex: "#C04000", hsl: "hsl(15, 100%, 37.65%)" }, // Mahogany
    "045": { rgb: "rgb(128, 0, 0)", hex: "#800000", hsl: "hsl(0, 100%, 25.1%)" }, // Maroon
    "046": { rgb: "rgb(204, 119, 34)", hex: "#CC7722", hsl: "hsl(30, 60.2%, 49.8%)" }, // Ochre
    "047": { rgb: "rgb(146, 102, 68)", hex: "#926644", hsl: "hsl(30, 36.1%, 41.8%)" }, // Raw Umber
    "048": { rgb: "rgb(165, 42, 42)", hex: "#A52A2A", hsl: "hsl(0, 59.42%, 41.18%)" }, // Red Brown
    "049": { rgb: "rgb(164, 90, 82)", hex: "#A45A52", hsl: "hsl(350, 34.7%, 47.8%)" }, // Redwood
    "050": { rgb: "rgb(168, 28, 7)", hex: "#A81C07", hsl: "hsl(7, 89.3%, 35.3%)" }, // Rufous
    "051": { rgb: "rgb(128, 70, 27)", hex: "#80461B", hsl: "hsl(21, 60.5%, 34.5%)" }, // Russet
    "052": { rgb: "rgb(183, 65, 14)", hex: "#B7410E", hsl: "hsl(16.36, 85.71%, 38.04%)" }, // Rust
    "053": { rgb: "rgb(194, 178, 128)", hex: "#C2B280", hsl: "hsl(45.45, 35.11%, 63.14%)" }, // Sand
    "054": { rgb: "rgb(244, 164, 96)", hex: "#F4A460", hsl: "hsl(30, 85.7%, 69.8%)" }, // Sandy Brown
    "055": { rgb: "rgb(203, 161, 53)", hex: "#CBA135", hsl: "hsl(38, 57.9%, 50.2%)" }, // Satin Sheen Gold
    "056": { rgb: "rgb(89, 38, 11)", hex: "#59260B", hsl: "hsl(22, 64.2%, 21.6%)" }, // Seal Brown
    "057": { rgb: "rgb(112, 66, 20)", hex: "#704214", hsl: "hsl(30, 58.3%, 26.3%)" }, // Sepia
    "058": { rgb: "rgb(136, 45, 23)", hex: "#882D17", hsl: "hsl(11, 65.7%, 32.2%)" }, // Sienna
    "059": { rgb: "rgb(203, 65, 11)", hex: "#CB410B", hsl: "hsl(14, 86.6%, 42.4%)" }, // Sinopia
    "060": { rgb: "rgb(210, 180, 140)", hex: "#D2B48C", hsl: "hsl(34, 43.3%, 69.8%)" }, // Tan
    "061": { rgb: "rgb(72, 60, 50)", hex: "#483C32", hsl: "hsl(30, 14.3%, 24.1%)" }, // Taupe
    "062": { rgb: "rgb(205, 87, 0)", hex: "#CD5700", hsl: "hsl(24.71, 100%, 40.2%)" }, // Tawny
    "063": { rgb: "rgb(99, 81, 71)", hex: "#635147", hsl: "hsl(30, 14.9%, 33.3%)" }, // Umber
    "064": { rgb: "rgb(68, 54, 47)", hex: "#44362F", hsl: "hsl(25, 19.6%, 24.7%)" }, // Van Dyke
    "065": { rgb: "rgb(92, 82, 72)", hex: "#5C5248", hsl: "hsl(20, 13.5%, 32.5%)" }, // Walnut Brown
    "066": { rgb: "rgb(100, 84, 82)", hex: "#645452", hsl: "hsl(10, 7.4%, 36.1%)" }, // Wenge
    "067": { rgb: "rgb(245, 222, 179)", hex: "#F5DEB3", hsl: "hsl(39, 76.4%, 83.9%)" }, // Wheat
  },
  yellow: {
    "001": { rgb: "rgb(255, 191, 0)", hex: "#FFBF00", hsl: "hsl(45, 100%, 50%)" }, // Amber
    "002": { rgb: "rgb(251, 206, 177)", hex: "#FBCEB1", hsl: "hsl(20, 90.91%, 85.1%)" }, // Apricot
    "003": { rgb: "rgb(233, 214, 107)", hex: "#E9D66B", hsl: "hsl(58, 74.6%, 66.3%)" }, // Arylide Yellow
    "004": { rgb: "rgb(253, 238, 0)", hex: "#FDEE00", hsl: "hsl(54, 100%, 49.8%)" }, // Aureolin
    "005": { rgb: "rgb(245, 245, 220)", hex: "#F5F5DC", hsl: "hsl(60, 55.56%, 91.18%)" }, // Beige
    "006": { rgb: "rgb(224, 171, 118)", hex: "#E0AB76", hsl: "hsl(34, 57.5%, 65.9%)" }, // Buff
    "007": { rgb: "rgb(255, 239, 0)", hex: "#FFEF00", hsl: "hsl(57, 100%, 50%)" }, // Canary
    "008": { rgb: "rgb(247, 231, 206)", hex: "#F7E7CE", hsl: "hsl(35, 70.59%, 89.02%)" }, // Champagne
    "009": { rgb: "rgb(223, 255, 0)", hex: "#DFFF00", hsl: "hsl(72, 100%, 44.1%)" }, // Chartreuse
    "010": { rgb: "rgb(221, 208, 106)", hex: "#DDD06A", hsl: "hsl(59, 69.6%, 59%)" }, // Citron
    "011": { rgb: "rgb(228, 208, 10)", hex: "#E4D00A", hsl: "hsl(51, 92%, 45.1%)" }, // Citrine
    "012": { rgb: "rgb(255, 248, 231)", hex: "#FFF8E7", hsl: "hsl(51, 100%, 94.1%)" }, // Cosmic Latte
    "013": { rgb: "rgb(255, 253, 208)", hex: "#FFFD D0", hsl: "hsl(60, 100%, 90.2%)" }, // Cream
    "014": { rgb: "rgb(184, 134, 11)", hex: "#B8860B", hsl: "hsl(43, 88%, 38.6%)" }, // Dark Goldenrod
    "015": { rgb: "rgb(205, 178, 128)", hex: "#CDB280", hsl: "hsl(39, 41%, 57.6%)" }, // Ecru
    "016": { rgb: "rgb(238, 220, 130)", hex: "#EEDC82", hsl: "hsl(54, 77%, 70.2%)" }, // Flax
    "017": { rgb: "rgb(239, 155, 15)", hex: "#EF9B0F", hsl: "hsl(39, 92%, 49.8%)" }, // Gamboge
    "018": { rgb: "rgb(255, 215, 0)", hex: "#FFD700", hsl: "hsl(51.43, 100%, 50%)" }, // Gold
    "019": { rgb: "rgb(212, 175, 55)", hex: "#D4AF37", hsl: "hsl(43, 60%, 51.4%)" }, // Gold Metallic
    "020": { rgb: "rgb(218, 165, 32)", hex: "#DAA520", hsl: "hsl(42.86, 74.74%, 49.02%)" }, // Goldenrod
    "021": { rgb: "rgb(230, 168, 23)", hex: "#E6A817", hsl: "hsl(43, 84%, 51.4%)" }, // Harvest Gold
    "022": { rgb: "rgb(252, 247, 94)", hex: "#FCF75E", hsl: "hsl(58, 97%, 74.1%)" }, // Icterine
    "023": { rgb: "rgb(255, 255, 240)", hex: "#FFFFF0", hsl: "hsl(60, 100%, 97.6%)" }, // Ivory
    "024": { rgb: "rgb(248, 222, 126)", hex: "#F8DE7E", hsl: "hsl(48, 91%, 73.3%)" }, // Jasmine
    "025": { rgb: "rgb(250, 202, 22)", hex: "#FACA16", hsl: "hsl(47, 94%, 54.9%)" }, // Jonquil
    "026": { rgb: "rgb(195, 176, 145)", hex: "#C3B091", hsl: "hsl(44, 28.6%, 63.9%)" }, // Khaki
    "027": { rgb: "rgb(255, 250, 205)", hex: "#FFFACD", hsl: "hsl(54, 100%, 90.2%)" }, // Lemon Chiffon
    "028": { rgb: "rgb(227, 255, 0)", hex: "#E3FF00", hsl: "hsl(72, 100%, 44.9%)" }, // Lemon Lime
    "029": { rgb: "rgb(255, 255, 224)", hex: "#FFFFE0", hsl: "hsl(60, 100%, 94.1%)" }, // Light Yellow
    "030": { rgb: "rgb(193, 154, 107)", hex: "#C19A6B", hsl: "hsl(32.79, 40.95%, 58.82%)" }, // Lion
    "031": { rgb: "rgb(251, 236, 93)", hex: "#FBEC5D", hsl: "hsl(55, 89%, 68.6%)" }, // Maize
    "032": { rgb: "rgb(255, 196, 12)", hex: "#FFC40C", hsl: "hsl(45, 98%, 54.9%)" }, // Mikado Yellow
    "033": { rgb: "rgb(227, 249, 136)", hex: "#E3F988", hsl: "hsl(67, 89%, 75.7%)" }, // Mindaro
    "034": { rgb: "rgb(255, 219, 88)", hex: "#FFDB58", hsl: "hsl(48, 100%, 64.3%)" }, // Mustard
    "035": { rgb: "rgb(250, 218, 94)", hex: "#FADA5E", hsl: "hsl(49, 89%, 64.9%)" }, // Naples Yellow
    "036": { rgb: "rgb(255, 222, 173)", hex: "#FFDEAD", hsl: "hsl(39, 100%, 85.1%)" }, // Navajo White
    "037": { rgb: "rgb(207, 181, 59)", hex: "#CFB53B", hsl: "hsl(43, 56%, 51.4%)" }, // Old Gold
    "038": { rgb: "rgb(128, 128, 0)", hex: "#808000", hsl: "hsl(60, 100%, 25.5%)" }, // Olive
    "039": { rgb: "rgb(250, 223, 173)", hex: "#FADFFD", hsl: "hsl(39, 85%, 84.7%)" }, // Peach Yellow
    "040": { rgb: "rgb(209, 226, 49)", hex: "#D1E231", hsl: "hsl(66, 78%, 58.4%)" }, // Pear
    "041": { rgb: "rgb(244, 196, 49)", hex: "#F4C431", hsl: "hsl(44, 88%, 58.8%)" }, // Saffron
    "042": { rgb: "rgb(255, 216, 0)", hex: "#FFD800", hsl: "hsl(52, 100%, 50.2%)" }, // School Bus Yellow
    "043": { rgb: "rgb(255, 186, 0)", hex: "#FFBA00", hsl: "hsl(45, 100%, 50.2%)" }, // Selective Yellow
    "044": { rgb: "rgb(250, 218, 94)", hex: "#FADA5E", hsl: "hsl(49, 89%, 64.9%)" }, // Stil de Grain Yellow
    "045": { rgb: "rgb(228, 217, 111)", hex: "#E4D96F", hsl: "hsl(58, 69%, 62.4%)" }, // Straw
    "046": { rgb: "rgb(255, 204, 51)", hex: "#FFCC33", hsl: "hsl(43, 100%, 60.2%)" }, // Sunglow
    "047": { rgb: "rgb(250, 214, 165)", hex: "#FAD6A5", hsl: "hsl(38, 85%, 84.3%)" }, // Sunset
    "048": { rgb: "rgb(243, 229, 171)", hex: "#F3E5AB", hsl: "hsl(50, 84%, 81.4%)" }, // Vanilla
    "049": { rgb: "rgb(255, 255, 0)", hex: "#FFFF00", hsl: "hsl(60, 100%, 50%)" }, // Yellow
  },
  green: {
    "001": { rgb: "rgb(141, 182, 0)", hex: "#8DB600", hsl: "hsl(74, 100%, 35.7%)" }, // Apple Green
    "002": { rgb: "rgb(0, 255, 191)", hex: "#00FFBF", hsl: "hsl(170, 100%, 50.2%)" }, // Aquamarine
    "003": { rgb: "rgb(123, 160, 91)", hex: "#7BA05B", hsl: "hsl(103, 30%, 45.9%)" }, // Asparagus
    "004": { rgb: "rgb(86, 130, 3)", hex: "#568203", hsl: "hsl(70, 93%, 26.7%)" }, // Avocado
    "005": { rgb: "rgb(102, 255, 0)", hex: "#66FF00", hsl: "hsl(105, 100%, 50%)" }, // Bright Green
    "006": { rgb: "rgb(0, 66, 37)", hex: "#004225", hsl: "hsl(159, 100%, 13%)" }, // British Racing Green
    "007": { rgb: "rgb(27, 77, 62)", hex: "#1B4D3E", hsl: "hsl(161, 61%, 18.2%)" }, // Brunswick Green
    "008": { rgb: "rgb(30, 77, 43)", hex: "#1E4D2B", hsl: "hsl(161, 61%, 20.2%)" }, // Cal Poly Green
    "009": { rgb: "rgb(0, 86, 59)", hex: "#00563B", hsl: "hsl(160, 100%, 20.4%)" }, // Castleton Green
    "010": { rgb: "rgb(172, 225, 175)", hex: "#ACE1AF", hsl: "hsl(123, 58%, 74.5%)" }, // Celadon
    "011": { rgb: "rgb(128, 255, 0)", hex: "#80FF00", hsl: "hsl(72, 100%, 50.2%)" }, // Chartreuse
    "012": { rgb: "rgb(0, 255, 255)", hex: "#00FFFF", hsl: "hsl(180, 100%, 50%)" }, // Cyan
    "013": { rgb: "rgb(1, 50, 32)", hex: "#013220", hsl: "hsl(158, 99%, 9.8%)" }, // Dark Green
    "014": { rgb: "rgb(74, 93, 35)", hex: "#4A5D23", hsl: "hsl(72, 36%, 25.9%)" }, // Dark Moss Green
    "015": { rgb: "rgb(3, 192, 60)", hex: "#03C03C", hsl: "hsl(141, 97%, 37.3%)" }, // Dark Pastel Green
    "016": { rgb: "rgb(23, 114, 69)", hex: "#177245", hsl: "hsl(150, 85%, 30.2%)" }, // Dark Spring Green
    "017": { rgb: "rgb(0, 105, 62)", hex: "#00693E", hsl: "hsl(159, 100%, 20.4%)" }, // Dartmouth Green
    "018": { rgb: "rgb(80, 200, 120)", hex: "#50C878", hsl: "hsl(141, 55%, 49.8%)" }, // Emerald
    "019": { rgb: "rgb(0, 255, 64)", hex: "#00FF40", hsl: "hsl(135, 100%, 50%)" }, // Erin
    "020": { rgb: "rgb(79, 121, 66)", hex: "#4F7942", hsl: "hsl(120, 37%, 34.5%)" }, // Fern Green
    "021": { rgb: "rgb(34, 139, 34)", hex: "#228B22", hsl: "hsl(120, 61%, 34.1%)" }, // Forest Green
    "022": { rgb: "rgb(0, 255, 0)", hex: "#00FF00", hsl: "hsl(120, 100%, 50%)" }, // Green
    "023": { rgb: "rgb(173, 255, 47)", hex: "#ADFF2F", hsl: "hsl(76, 100%, 60.8%)" }, // Green Yellow
    "024": { rgb: "rgb(63, 255, 0)", hex: "#3FFF00", hsl: "hsl(96, 100%, 50.2%)" }, // Harlequin
    "025": { rgb: "rgb(240, 255, 240)", hex: "#F0FFF0", hsl: "hsl(120, 100%, 97.6%)" }, // Honeydew
    "026": { rgb: "rgb(73, 121, 107)", hex: "#49796B", hsl: "hsl(151, 28%, 34.9%)" }, // Hookers Green
    "027": { rgb: "rgb(53, 94, 59)", hex: "#355E3B", hsl: "hsl(160, 34%, 26.9%)" }, // Hunter Green
    "028": { rgb: "rgb(19, 136, 8)", hex: "#138808", hsl: "hsl(129, 88%, 26.5%)" }, // India Green
    "029": { rgb: "rgb(53, 94, 59)", hex: "#355E3B", hsl: "hsl(128.78, 27.89%, 28.82%)" }, // Islamic Green
    "030": { rgb: "rgb(0, 168, 107)", hex: "#00A86B", hsl: "hsl(159, 100%, 32.9%)" }, // Jade
    "031": { rgb: "rgb(41, 171, 135)", hex: "#29AB87", hsl: "hsl(159, 63%, 41.6%)" }, // Jungle Green
    "032": { rgb: "rgb(76, 187, 23)", hex: "#4CBB17", hsl: "hsl(101, 71%, 44.5%)" }, // Kelly Green
    "033": { rgb: "rgb(124, 252, 0)", hex: "#7CFC00", hsl: "hsl(76, 100%, 49%)" }, // Lawn Green
    "034": { rgb: "rgb(144, 238, 144)", hex: "#90EE90", hsl: "hsl(120, 73%, 75.5%)" }, // Light Green
    "035": { rgb: "rgb(192, 255, 0)", hex: "#C0FF00", hsl: "hsl(72, 100%, 49.8%)" }, // Lime
    "036": { rgb: "rgb(50, 205, 50)", hex: "#32CD32", hsl: "hsl(120, 60%, 50.2%)" }, // Lime Green
    "037": { rgb: "rgb(11, 218, 81)", hex: "#0BDA51", hsl: "hsl(150, 96%, 44.3%)" }, // Malachite
    "038": { rgb: "rgb(116, 195, 101)", hex: "#74C365", hsl: "hsl(123, 50%, 58.8%)" }, // Mantis
    "039": { rgb: "rgb(0, 73, 83)", hex: "#004953", hsl: "hsl(180, 100%, 16.5%)" }, // Midnight Green
    "040": { rgb: "rgb(227, 249, 136)", hex: "#E3F988", hsl: "hsl(67, 89%, 75.7%)" }, // Mindaro
    "041": { rgb: "rgb(62, 180, 137)", hex: "#3EB489", hsl: "hsl(161, 53%, 45.1%)" }, // Mint
    "042": { rgb: "rgb(138, 154, 91)", hex: "#8A9A5B", hsl: "hsl(72, 28%, 47.5%)" }, // Moss Green
    "043": { rgb: "rgb(49, 120, 115)", hex: "#317873", hsl: "hsl(169, 35%, 32.9%)" }, // Myrtle Green
    "044": { rgb: "rgb(57, 255, 20)", hex: "#39FF14", hsl: "hsl(105, 100%, 51.8%)" }, // Neon Green
    "045": { rgb: "rgb(0, 128, 0)", hex: "#008000", hsl: "hsl(120, 100%, 25.1%)" }, // Office Green
    "046": { rgb: "rgb(128, 128, 0)", hex: "#808000", hsl: "hsl(60, 100%, 25.5%)" }, // Olive
    "047": { rgb: "rgb(154, 185, 115)", hex: "#9AB973", hsl: "hsl(75, 37%, 53.3%)" }, // Olivine
    "048": { rgb: "rgb(0, 64, 26)", hex: "#00401A", hsl: "hsl(146, 100%, 12.5%)" }, // Pakistan Green
    "049": { rgb: "rgb(80, 200, 120)", hex: "#50C878", hsl: "hsl(140, 52.17%, 54.9%)" }, // Paris Green
    "050": { rgb: "rgb(209, 226, 49)", hex: "#D1E231", hsl: "hsl(66, 78%, 58.4%)" }, // Pear
    "051": { rgb: "rgb(0, 166, 147)", hex: "#00A693", hsl: "hsl(170, 100%, 32.5%)" }, // Persian Green
    "052": { rgb: "rgb(0, 165, 80)", hex: "#00A550", hsl: "hsl(157, 100%, 32.5%)" }, // Pigment Green
    "053": { rgb: "rgb(1, 121, 111)", hex: "#01796F", hsl: "hsl(170, 99%, 23.9%)" }, // Pine Green
    "054": { rgb: "rgb(147, 197, 114)", hex: "#93C572", hsl: "hsl(76, 44%, 58.4%)" }, // Pistachio
    "055": { rgb: "rgb(108, 124, 89)", hex: "#6C7C59", hsl: "hsl(80, 19%, 41.2%)" }, // Reseda Green
    "056": { rgb: "rgb(0, 204, 204)", hex: "#00CCCC", hsl: "hsl(180, 100%, 50.2%)" }, // Robin Egg Blue
    "057": { rgb: "rgb(188, 184, 138)", hex: "#BCB88A", hsl: "hsl(60, 37%, 62.7%)" }, // Sage
    "058": { rgb: "rgb(118, 255, 122)", hex: "#76FF7A", hsl: "hsl(106, 100%, 65.9%)" }, // Screamin' Green
    "059": { rgb: "rgb(46, 139, 87)", hex: "#2E8B57", hsl: "hsl(146, 49%, 35.1%)" }, // Sea Green
    "060": { rgb: "rgb(85, 221, 51)", hex: "#55DD33", hsl: "hsl(93, 81%, 47.8%)" }, // SGBus Green
    "061": { rgb: "rgb(0, 158, 96)", hex: "#009E60", hsl: "hsl(157, 100%, 31.8%)" }, // Shamrock Green
    "062": { rgb: "rgb(167, 252, 0)", hex: "#A7FC00", hsl: "hsl(74, 100%, 49.8%)" }, // Spring Bud
    "063": { rgb: "rgb(0, 255, 127)", hex: "#00FF7F", hsl: "hsl(150, 100%, 50%)" }, // Spring Green
    "064": { rgb: "rgb(208, 240, 192)", hex: "#D0F0C0", hsl: "hsl(90, 50%, 84.7%)" }, // Tea Green
    "065": { rgb: "rgb(0, 128, 128)", hex: "#008080", hsl: "hsl(180, 100%, 25.5%)" }, // Teal
    "066": { rgb: "rgb(64, 224, 208)", hex: "#40E0D0", hsl: "hsl(174, 72%, 56.1%)" }, // Turquoise
    "067": { rgb: "rgb(64, 130, 109)", hex: "#40826D", hsl: "hsl(150, 29%, 38.6%)" }, // Viridian
    "068": { rgb: "rgb(154, 205, 50)", hex: "#9ACD32", hsl: "hsl(83, 61%, 50.2%)" } // Yellow Green
    },
  turquoise: {
    "001": { rgb: "rgb(240, 248, 255)", hex: "#F0F8FF", hsl: "hsl(208, 100%, 97.3%)" }, // Alice Blue
    "002": { rgb: "rgb(15, 255, 255)", hex: "#0FFFFF", hsl: "hsl(180, 100%, 50%)" }, // Aqua
    "003": { rgb: "rgb(127, 255, 212)", hex: "#7FFFD4", hsl: "hsl(160, 100%, 75.5%)" }, // Aquamarine
    "004": { rgb: "rgb(0, 127, 255)", hex: "#007FFF", hsl: "hsl(210, 100%, 50%)" }, // Azure
    "005": { rgb: "rgb(240, 255, 255)", hex: "#F0FFFF", hsl: "hsl(180, 100%, 97.3%)" }, // Azure Web
    "006": { rgb: "rgb(13, 152, 186)", hex: "#0D98BA", hsl: "hsl(193, 85%, 41.6%)" }, // Blue Green
    "007": { rgb: "rgb(0, 191, 255)", hex: "#00BFFF", hsl: "hsl(195, 100%, 50.2%)" }, // Capri
    "008": { rgb: "rgb(0, 109, 111)", hex: "#006D6F", hsl: "hsl(180, 100%, 21.2%)" }, // Caribbean Current
    "009": { rgb: "rgb(178, 255, 255)", hex: "#B2FFFF", hsl: "hsl(180, 100%, 85.1%)" }, // Celeste
    "010": { rgb: "rgb(0, 123, 167)", hex: "#007BA7", hsl: "hsl(197, 100%, 32.5%)" }, // Cerulean
    "011": { rgb: "rgb(0, 255, 255)", hex: "#00FFFF", hsl: "hsl(180, 100%, 50%)" }, // Cyan
    "012": { rgb: "rgb(0, 139, 139)", hex: "#008B8B", hsl: "hsl(180, 100%, 27.3%)" }, // Dark Cyan
    "013": { rgb: "rgb(125, 249, 255)", hex: "#7DF9FF", hsl: "hsl(189, 100%, 73.5%)" }, // Electric Blue
    "014": { rgb: "rgb(21, 244, 238)", hex: "#15F4EE", hsl: "hsl(178, 97%, 54.1%)" }, // Fluorescent Cyan
    "015": { rgb: "rgb(41, 171, 135)", hex: "#29AB87", hsl: "hsl(159, 63%, 41.6%)" }, // Jungle Green
    "016": { rgb: "rgb(58, 176, 158)", hex: "#3AB09E", hsl: "hsl(166, 46%, 47.8%)" }, // Keppel
    "017": { rgb: "rgb(153, 255, 255)", hex: "#99FFFF", hsl: "hsl(180, 100%, 80.4%)" }, // Ice Blue
    "018": { rgb: "rgb(224, 255, 255)", hex: "#E0FFFF", hsl: "hsl(180, 100%, 93.1%)" }, // Light Cyan
    "019": { rgb: "rgb(32, 178, 170)", hex: "#20B2AA", hsl: "hsl(177, 70%, 41.8%)" }, // Light Sea Green
    "020": { rgb: "rgb(223, 255, 253)", hex: "#DFFFFD", hsl: "hsl(160, 100%, 90.2%)" }, // Mint Green
    "021": { rgb: "rgb(62, 180, 137)", hex: "#3EB489", hsl: "hsl(161, 53%, 45.1%)" }, // Mint
    "022": { rgb: "rgb(58, 168, 193)", hex: "#3AA8C1", hsl: "hsl(191, 70%, 49.8%)" }, // Moonstone
    "023": { rgb: "rgb(28, 169, 201)", hex: "#1CA9C9", hsl: "hsl(190, 80%, 45.5%)" }, // Pacific Cyan
    "024": { rgb: "rgb(0, 166, 147)", hex: "#00A693", hsl: "hsl(170, 100%, 32.5%)" }, // Persian Green
    "025": { rgb: "rgb(1, 121, 111)", hex: "#01796F", hsl: "hsl(170, 99%, 23.9%)" }, // Pine Green
    "026": { rgb: "rgb(0, 183, 235)", hex: "#00B7EB", hsl: "hsl(192, 100%, 46.1%)" }, // Process Cyan
    "027": { rgb: "rgb(0, 204, 204)", hex: "#00CCCC", hsl: "hsl(180, 100%, 50.2%)" }, // Robin Egg Blue
    "028": { rgb: "rgb(46, 139, 87)", hex: "#2E8B57", hsl: "hsl(146, 49%, 35.1%)" }, // Sea Green
    "029": { rgb: "rgb(0, 122, 116)", hex: "#007A74", hsl: "hsl(174, 100%, 23.9%)" }, // Skobeloff
    "030": { rgb: "rgb(223, 255, 253)", hex: "#DFFFFD", hsl: "hsl(176.25, 100%, 93.73%)" }, // Sky Blue Crayola
    "031": { rgb: "rgb(0, 255, 127)", hex: "#00FF7F", hsl: "hsl(150, 100%, 50%)" }, // Spring Green
    "032": { rgb: "rgb(0, 128, 128)", hex: "#008080", hsl: "hsl(180, 100%, 25.5%)" }, // Teal
    "033": { rgb: "rgb(129, 216, 208)", hex: "#81D8D0", hsl: "hsl(174, 48%, 60.8%)" }, // Tiffany Blue
    "034": { rgb: "rgb(64, 224, 208)", hex: "#40E0D0", hsl: "hsl(174, 72%, 56.1%)" }, // Turquoise
    "035": { rgb: "rgb(67, 179, 174)", hex: "#43B3AE", hsl: "hsl(174, 47%, 47.8%)" }, // Verdigris
    "036": { rgb: "rgb(0, 204, 255)", hex: "#00CCFF", hsl: "hsl(187, 100%, 50.2%)" }, // Vivid Sky Blue
    "037": { rgb: "rgb(57, 167, 141)", hex: "#39A78D", hsl: "hsl(164, 55%, 41.2%)" }, // Zomp
  },
  blue: {
    "001": { rgb: "rgb(0, 185, 232)", hex: "#00B9E8", hsl: "hsl(191, 100%, 45.5%)" }, // Aero
    "002": { rgb: "rgb(93, 138, 168)", hex: "#5D8AA8", hsl: "hsl(207, 28%, 50.2%)" }, // Air Force Blue
    "003": { rgb: "rgb(114, 160, 193)", hex: "#72A0C1", hsl: "hsl(210, 40%, 57.3%)" }, // Air Superiority Blue
    "004": { rgb: "rgb(240, 248, 255)", hex: "#F0F8FF", hsl: "hsl(208, 100%, 97.3%)" }, // Alice Blue
    "005": { rgb: "rgb(108, 180, 238)", hex: "#6CB4EE", hsl: "hsl(208, 84%, 68.6%)" }, // Argentinian Blue
    "006": { rgb: "rgb(0, 127, 255)", hex: "#007FFF", hsl: "hsl(210, 100%, 50%)" }, // Azure
    "007": { rgb: "rgb(0, 112, 187)", hex: "#0070BB", hsl: "hsl(210, 100%, 36.7%)" }, // Azul
    "008": { rgb: "rgb(137, 207, 240)", hex: "#89CFF0", hsl: "hsl(200, 85%, 74.9%)" }, // Baby Blue
    "009": { rgb: "rgb(0, 50, 98)", hex: "#003262", hsl: "hsl(210, 100%, 19.2%)" }, // Berkeley Blue
    "010": { rgb: "rgb(32, 114, 175)", hex: "#2072AF", hsl: "hsl(204, 69%, 45.1%)" }, // Bice Blue
    "011": { rgb: "rgb(49, 140, 231)", hex: "#318CE7", hsl: "hsl(210, 81%, 60.2%)" }, // Bleu de France
    "012": { rgb: "rgb(0, 0, 255)", hex: "#0000FF", hsl: "hsl(240, 100%, 50%)" }, // Blue
    "013": { rgb: "rgb(102, 153, 204)", hex: "#6699CC", hsl: "hsl(210, 50%, 60%)" }, // Blue Gray
    "014": { rgb: "rgb(0, 149, 182)", hex: "#0095B6", hsl: "hsl(190, 100%, 35.3%)" }, // Bondi Blue
    "015": { rgb: "rgb(0, 112, 255)", hex: "#0070FF", hsl: "hsl(210, 100%, 50%)" }, // Brandeis Blue
    "016": { rgb: "rgb(52, 87, 213)", hex: "#3457D5", hsl: "hsl(222, 74%, 51.4%)" }, // Byzantine Blue
    "017": { rgb: "rgb(133, 176, 154)", hex: "#85B09A", hsl: "hsl(150, 28%, 58.4%)" }, // Cambridge Blue
    "018": { rgb: "rgb(123, 175, 212)", hex: "#7BAFD4", hsl: "hsl(204, 47%, 63.1%)" }, // Carolina Blue
    "019": { rgb: "rgb(73, 151, 208)", hex: "#4997D0", hsl: "hsl(204, 59%, 54.1%)" }, // Celestial Blue
    "020": { rgb: "rgb(36, 107, 206)", hex: "#246BCE", hsl: "hsl(211, 73%, 48.2%)" }, // Celtic Blue
    "021": { rgb: "rgb(0, 123, 167)", hex: "#007BA7", hsl: "hsl(197, 100%, 32.5%)" }, // Cerulean
    "022": { rgb: "rgb(70, 143, 234)", hex: "#468FEA", hsl: "hsl(215, 82%, 58.6%)" }, // Chefchaouen Blue
    "023": { rgb: "rgb(59, 0, 219)", hex: "#3B00DB", hsl: "hsl(257, 100%, 42.7%)" }, // Chrysler Blue
    "024": { rgb: "rgb(0, 71, 171)", hex: "#0047AB", hsl: "hsl(212, 100%, 33.5%)" }, // Cobalt Blue
    "025": { rgb: "rgb(185, 217, 235)", hex: "#B9D9EB", hsl: "hsl(204, 56%, 82.7%)" }, // Columbia Blue
    "026": { rgb: "rgb(100, 149, 237)", hex: "#6495ED", hsl: "hsl(219, 79%, 66.7%)" }, // Cornflower Blue
    "027": { rgb: "rgb(31, 117, 254)", hex: "#1F75FE", hsl: "hsl(217, 98%, 54.5%)" }, // Blue Crayola
    "028": { rgb: "rgb(0, 0, 184)", hex: "#0000B8", hsl: "hsl(240, 100%, 36.1%)" }, // Dark Blue
    "029": { rgb: "rgb(31, 48, 94)", hex: "#1F305E", hsl: "hsl(215, 57%, 24.1%)" }, // Delft Blue
    "030": { rgb: "rgb(21, 96, 189)", hex: "#1560BD", hsl: "hsl(214, 75%, 45.9%)" }, // Denim
    "031": { rgb: "rgb(30, 144, 255)", hex: "#1E90FF", hsl: "hsl(210, 100%, 55.9%)" }, // Dodger Blue
    "032": { rgb: "rgb(0, 0, 156)", hex: "#00009C", hsl: "hsl(240, 100%, 30.6%)" }, // Duke Blue
    "033": { rgb: "rgb(16, 52, 166)", hex: "#1034A6", hsl: "hsl(219, 85%, 35.7%)" }, // Egyptian Blue
    "034": { rgb: "rgb(22, 22, 107)", hex: "#16166B", hsl: "hsl(240, 80%, 27.1%)" }, // Federal Blue
    "035": { rgb: "rgb(96, 130, 182)", hex: "#6082B6", hsl: "hsl(211, 35%, 54.1%)" }, // Glaucous
    "036": { rgb: "rgb(17, 100, 180)", hex: "#1164B4", hsl: "hsl(210, 84%, 42.9%)" }, // Green Blue
    "037": { rgb: "rgb(111, 0, 255)", hex: "#6F00FF", hsl: "hsl(270, 100%, 50.2%)" }, // Electric Indigo
    "038": { rgb: "rgb(0, 114, 187)", hex: "#0072BB", hsl: "hsl(210, 100%, 37.3%)" }, // French Blue
    "039": { rgb: "rgb(153, 255, 255)", hex: "#99FFFF", hsl: "hsl(180, 100%, 80.4%)" }, // Ice Blue
    "040": { rgb: "rgb(75, 0, 130)", hex: "#4B0082", hsl: "hsl(274.62, 100%, 25.49%)" }, // Indigo
    "041": { rgb: "rgb(0, 65, 106)", hex: "#00416A", hsl: "hsl(210, 100%, 26.3%)" }, // Indigo Dye
    "042": { rgb: "rgb(0, 47, 167)", hex: "#002FA7", hsl: "hsl(224, 100%, 32.7%)" }, // International Klein Blue
    "043": { rgb: "rgb(138, 185, 241)", hex: "#8AB9F1", hsl: "hsl(210, 80%, 79.6%)" }, // Jordy Blue
    "044": { rgb: "rgb(38, 97, 156)", hex: "#26619C", hsl: "hsl(207, 63%, 40.8%)" }, // Lapis Lazuli
    "045": { rgb: "rgb(173, 216, 230)", hex: "#ADD8E6", hsl: "hsl(194, 53%, 79.6%)" }, // Light Blue
    "046": { rgb: "rgb(135, 206, 250)", hex: "#87CEFA", hsl: "hsl(197, 92%, 74.5%)" }, // Light Sky Blue
    "047": { rgb: "rgb(96, 80, 220)", hex: "#6050DC", hsl: "hsl(246.86, 66.67%, 58.82%)" }, // Majorelle Blue
    "048": { rgb: "rgb(43, 69, 147)", hex: "#2B4593", hsl: "hsl(218, 58%, 38.8%)" }, // Marian Blue
    "049": { rgb: "rgb(115, 194, 251)", hex: "#73C2FB", hsl: "hsl(200, 94%, 75.1%)" }, // Maya Blue
    "050": { rgb: "rgb(0, 0, 205)", hex: "#0000CD", hsl: "hsl(240, 100%, 40.2%)" }, // Medium Blue
    "051": { rgb: "rgb(123, 104, 238)", hex: "#7B68EE", hsl: "hsl(240, 80%, 67.8%)" }, // Medium Slate Blue
    "052": { rgb: "rgb(25, 25, 112)", hex: "#191970", hsl: "hsl(240, 66%, 27.5%)" }, // Midnight Blue
    "053": { rgb: "rgb(0, 147, 175)", hex: "#0093AF", hsl: "hsl(191, 100%, 34.5%)" }, // Blue Munsell
    "054": { rgb: "rgb(0, 0, 128)", hex: "#000080", hsl: "hsl(240, 100%, 25.1%)" }, // Navy Blue
    "055": { rgb: "rgb(0, 135, 189)", hex: "#0087BD", hsl: "hsl(200, 100%, 37.1%)" }, // Blue NCS
    "056": { rgb: "rgb(70, 102, 255)", hex: "#4666FF", hsl: "hsl(227, 100%, 62.3%)" }, // Neon Blue
    "057": { rgb: "rgb(164, 221, 237)", hex: "#A4DDED", hsl: "hsl(193, 73%, 78.4%)" }, // Non-Photo Blue
    "058": { rgb: "rgb(0, 33, 71)", hex: "#002147", hsl: "hsl(210, 100%, 14.1%)" }, // Oxford Blue
    "059": { rgb: "rgb(39, 59, 226)", hex: "#273BE2", hsl: "hsl(225, 86%, 54.9%)" }, // Palatinate Blue
    "060": { rgb: "rgb(135, 211, 248)", hex: "#87D3F8", hsl: "hsl(197, 84%, 77.1%)" }, // Pale Azure
    "061": { rgb: "rgb(1, 31, 91)", hex: "#011F5B", hsl: "hsl(217, 98%, 17.9%)" }, // Penn Blue
    "062": { rgb: "rgb(204, 204, 255)", hex: "#CCCCFF", hsl: "hsl(240, 100%, 85.1%)" }, // Periwinkle
    "063": { rgb: "rgb(28, 57, 187)", hex: "#1C39BB", hsl: "hsl(225, 82%, 44.1%)" }, // Persian Blue
    "064": { rgb: "rgb(0, 15, 137)", hex: "#000F89", hsl: "hsl(225, 100%, 27.1%)" }, // Phthalo Blue
    "065": { rgb: "rgb(69, 177, 232)", hex: "#45B1E8", hsl: "hsl(200, 81%, 65.9%)" }, // Picton Blue
    "066": { rgb: "rgb(34, 76, 152)", hex: "#224C98", hsl: "hsl(210, 60%, 41.6%)" }, // Polynesian Blue
    "067": { rgb: "rgb(158, 185, 212)", hex: "#9EB9D4", hsl: "hsl(210, 39%, 70.6%)" }, // Powder Blue
    "068": { rgb: "rgb(0, 49, 83)", hex: "#003153", hsl: "hsl(210, 100%, 16.5%)" }, // Prussian Blue
    "069": { rgb: "rgb(0, 35, 135)", hex: "#002387", hsl: "hsl(225, 100%, 26.5%)" }, // Resolution Blue
    "070": { rgb: "rgb(36, 84, 255)", hex: "#2454FF", hsl: "hsl(227, 100%, 55.1%)" }, // RISD Blue
    "071": { rgb: "rgb(65, 105, 225)", hex: "#4169E1", hsl: "hsl(225, 73%, 57.1%)" }, // Royal Blue Web
    "072": { rgb: "rgb(0, 35, 102)", hex: "#002366", hsl: "hsl(225, 100%, 20%)" }, // Royal Blue Traditional
    "073": { rgb: "rgb(118, 171, 223)", hex: "#76ABDF", hsl: "hsl(214, 60%, 70.2%)" }, // Ruddy Blue
    "074": { rgb: "rgb(15, 82, 186)", hex: "#0F52BA", hsl: "hsl(210, 83%, 43.3%)" }, // Sapphire
    "075": { rgb: "rgb(0, 118, 182)", hex: "#0076B6", hsl: "hsl(204, 100%, 35.7%)" }, // Honolulu Blue
    "076": { rgb: "rgb(75, 97, 209)", hex: "#4B61D1", hsl: "hsl(223, 69%, 55.1%)" }, // Savoy Blue
    "077": { rgb: "rgb(93, 137, 186)", hex: "#5D89BA", hsl: "hsl(210, 42%, 56.5%)" }, // Silver Lake Blue
    "078": { rgb: "rgb(135, 206, 235)", hex: "#87CEEB", hsl: "hsl(197, 71%, 72.5%)" }, // Sky Blue
    "079": { rgb: "rgb(30, 41, 82)", hex: "#1E2952", hsl: "hsl(220, 51%, 22.4%)" }, // Space Cadet
    "080": { rgb: "rgb(70, 130, 180)", hex: "#4682B4", hsl: "hsl(207, 44%, 49.8%)" }, // Steel Blue
    "081": { rgb: "rgb(0, 89, 207)", hex: "#0059CF", hsl: "hsl(214.2, 100%, 40.59%)" }, // Tang Blue
    "082": { rgb: "rgb(45, 104, 196)", hex: "#2D68C4", hsl: "hsl(211, 66%, 47.8%)" }, // True Blue
    "083": { rgb: "rgb(62, 142, 222)", hex: "#3E8EDE", hsl: "hsl(207, 72%, 55.3%)" }, // Tufts Blue
    "084": { rgb: "rgb(39, 116, 174)", hex: "#2774AE", hsl: "hsl(207, 64%, 44.1%)" }, // UCLA Blue
    "085": { rgb: "rgb(18, 10, 143)", hex: "#120A8F", hsl: "hsl(240, 87%, 28.6%)" }, // Ultramarine
    "086": { rgb: "rgb(75, 146, 219)", hex: "#4B92DB", hsl: "hsl(210, 69%, 58.6%)" }, // United Nations Blue
    "087": { rgb: "rgb(175, 219, 245)", hex: "#AFDBF5", hsl: "hsl(198, 88%, 84.3%)" }, // Uranian Blue
    "088": { rgb: "rgb(50, 74, 178)", hex: "#324AB2", hsl: "hsl(225, 58%, 47.1%)" }, // Violet Blue
    "089": { rgb: "rgb(124, 158, 217)", hex: "#7C9ED9", hsl: "hsl(210, 57%, 65.9%)" }, // Vista Blue
    "090": { rgb: "rgb(0, 53, 107)", hex: "#00356B", hsl: "hsl(210, 100%, 21.6%)" }, // Yale Blue
    "091": { rgb: "rgb(46, 80, 144)", hex: "#2E5090", hsl: "hsl(217, 55%, 38.4%)" }, // Yinmn Blue
    "092": { rgb: "rgb(0, 20, 168)", hex: "#0014A8", hsl: "hsl(240, 100%, 32.9%)" }, // Zaffre
  },
  violet: {
    "001": { rgb: "rgb(178, 132, 190)",  hex: "#B284BE", hsl: "hsl(280, 34%, 63.1%)" }, // African Violet
    "002": { rgb: "rgb(153, 102, 204)",  hex: "#9966CC", hsl: "hsl(270, 60%, 60.8%)" }, // Amethyst
    "003": { rgb: "rgb(138, 43, 226)",  hex: "#8A2BE2", hsl: "hsl(270, 76%, 53.9%)" }, // Blue Violet
    "004": { rgb: "rgb(128, 0, 32)",  hex: "#800020", hsl: "hsl(345, 100%, 25.1%)" }, // Burgundy
    "005": { rgb: "rgb(112, 41, 99)",  hex: "#702963", hsl: "hsl(320, 47%, 34.9%)" }, // Byzantium
    "006": { rgb: "rgb(89, 39, 32)",  hex: "#592720", hsl: "hsl(10, 46.7%, 27.3%)" }, // Caput Mortuum
    "007": { rgb: "rgb(222, 49, 99)",  hex: "#DE3163", hsl: "hsl(345, 77%, 53.9%)" }, // Cerise
    "008": { rgb: "rgb(133, 96, 136)",  hex: "#856088", hsl: "hsl(300, 19%, 46.7%)" }, // Chinese Violet
    "009": { rgb: "rgb(48, 25, 52)",  hex: "#301934", hsl: "hsl(309, 32%, 17.3%)" }, // Dark Purple
    "010": { rgb: "rgb(148, 0, 211)",  hex: "#9400D3", hsl: "hsl(282, 100%, 41.6%)" }, // Dark Violet
    "011": { rgb: "rgb(97, 64, 81)",  hex: "#614051", hsl: "hsl(320, 21%, 27.3%)" }, // Eggplant
    "012": { rgb: "rgb(191, 0, 255)",  hex: "#BF00FF", hsl: "hsl(282, 100%, 50.2%)" }, // Electric Purple
    "013": { rgb: "rgb(143, 0, 255)",  hex: "#8F00FF", hsl: "hsl(270, 100%, 50.2%)" }, // Electric Violet
    "014": { rgb: "rgb(86, 60, 92)",  hex: "#563C5C", hsl: "hsl(312, 21%, 29.4%)" }, // English Violet
    "015": { rgb: "rgb(108, 48, 130)",  hex: "#6C3082", hsl: "hsl(295, 38%, 35.3%)" }, // Eminence
    "016": { rgb: "rgb(242, 193, 209)",  hex: "#F2C1D1", hsl: "hsl(10, 76%, 84.7%)" }, // Fairy Tale
    "017": { rgb: "rgb(181, 51, 137)",  hex: "#B53389", hsl: "hsl(320, 59%, 45.9%)" }, // Fandango
    "018": { rgb: "rgb(212, 115, 212)",  hex: "#D473D4", hsl: "hsl(300, 50%, 68.2%)" }, // French Mauve
    "019": { rgb: "rgb(136, 6, 206)",  hex: "#8806CE", hsl: "hsl(273, 93%, 49.4%)" }, // French Violet
    "020": { rgb: "rgb(255, 0, 255)",  hex: "#FF00FF", hsl: "hsl(300, 100%, 50%)" }, // Fuchsia
    "021": { rgb: "rgb(111, 45, 168)",  hex: "#6F2DA8", hsl: "hsl(270, 52%, 39.8%)" }, // Grape
    "022": { rgb: "rgb(223, 115, 255)",  hex: "#DF73FF", hsl: "hsl(300, 100%, 76.1%)" }, // Heliotrope
    "023": { rgb: "rgb(75, 0, 130)",  hex: "#4B0082", hsl: "hsl(274.62, 100%, 25.49%)" }, // Indigo
    "024": { rgb: "rgb(90, 79, 207)",  hex: "#5A4FCF", hsl: "hsl(245.16, 57.14%, 56.08%)" }, // Iris
    "025": { rgb: "rgb(91, 50, 86)",  hex: "#5B3256", hsl: "hsl(324, 32%, 29.6%)" }, // Japanese Violet
    "026": { rgb: "rgb(255, 240, 245)",  hex: "#FFF0F5", hsl: "hsl(340, 100%, 97.1%)" }, // Lavender Blush
    "027": { rgb: "rgb(181, 126, 220)",  hex: "#B57EDC", hsl: "hsl(270, 56%, 70.2%)" }, // Lavender Floral
    "028": { rgb: "rgb(230, 230, 250)",  hex: "#E6E6FA", hsl: "hsl(240, 67%, 94.1%)" }, // Lavender Web
    "029": { rgb: "rgb(200, 162, 200)",  hex: "#C8A2C8", hsl: "hsl(300, 29%, 70.2%)" }, // Lilac
    "030": { rgb: "rgb(96, 80, 220)",  hex: "#6050DC", hsl: "hsl(246.86, 66.67%, 58.82%)" }, // Majorelle Blue
    "031": { rgb: "rgb(255, 0, 255)",  hex: "#FF00FF", hsl: "hsl(300, 100%, 50%)" }, // Magenta
    "032": { rgb: "rgb(136, 0, 133)",  hex: "#880085", hsl: "hsl(301.32, 100%, 26.67%)" }, // Mardi Gras
    "033": { rgb: "rgb(224, 176, 255)",  hex: "#E0B0FF", hsl: "hsl(270, 100%, 83.1%)" }, // Mauve
    "034": { rgb: "rgb(141, 2, 155)",  hex: "#8D029B", hsl: "hsl(300, 98%, 30.2%)" }, // Mauveine
    "035": { rgb: "rgb(123, 104, 238)",  hex: "#7B68EE", hsl: "hsl(248.51, 79.76%, 67.06%)" }, // Medium Slate Blue
    "036": { rgb: "rgb(153, 122, 141)",  hex: "#997A8D", hsl: "hsl(330, 18%, 47.3%)" }, // Mountbatten Pink
    "037": { rgb: "rgb(197, 75, 140)",  hex: "#C54B8C", hsl: "hsl(320, 53%, 48.6%)" }, // Mulberry
    "038": { rgb: "rgb(139, 0, 75)",  hex: "#8B004B", hsl: "hsl(320, 100%, 27.3%)" }, // Murrey
    "039": { rgb: "rgb(218, 112, 214)",  hex: "#DA70D6", hsl: "hsl(307, 59%, 63.9%)" }, // Orchid
    "040": { rgb: "rgb(104, 40, 96)", hex: "#682860", hsl: "hsl(314, 41%, 32.5%)" }, // Palatinate
    "041": { rgb: "rgb(250, 230, 250)", hex: "#FAE6FA", hsl: "hsl(300, 85%, 96.1%)" }, // Pale Purple
    "042": { rgb: "rgb(204, 204, 255)", hex: "#CCCCFF", hsl: "hsl(240, 100%, 90%)" }, // Periwinkle
    "043": { rgb: "rgb(50, 18, 122)", hex: "#32127A", hsl: "hsl(258.46, 74.29%, 27.45%)" }, // Persian Indigo
    "044": { rgb: "rgb(223, 0, 255)", hex: "#DF00FF", hsl: "hsl(292.47, 100%, 50%)" }, // Phlox
    "045": { rgb: "rgb(219, 178, 209)", hex: "#DBB2D1", hsl: "hsl(300, 38%, 74.9%)" }, // Pink Lavender
    "046": { rgb: "rgb(221, 160, 221)", hex: "#DDA0DD", hsl: "hsl(300, 47%, 74.5%)" }, // Plum Web
    "047": { rgb: "rgb(134, 96, 142)", hex: "#86608E", hsl: "hsl(300, 19%, 45.9%)" }, // Pomp and Power
    "048": { rgb: "rgb(204, 136, 153)", hex: "#CC8899", hsl: "hsl(340, 25%, 60.4%)" }, // Puce
    "049": { rgb: "rgb(128, 0, 128)", hex: "#800080", hsl: "hsl(300, 100%, 25.5%)" }, // Purple
    "050": { rgb: "rgb(154, 78, 174)", hex: "#9A4EAE", hsl: "hsl(287.5, 38.1%, 49.41%)" }, // Purpureus
    "051": { rgb: "rgb(102, 51, 153)", hex: "#663399", hsl: "hsl(270, 50%, 40%)" }, // Rebecca Purple
    "052": { rgb: "rgb(120, 81, 169)", hex: "#7851A9", hsl: "hsl(266.59, 35.2%, 49.02%)" }, // Royal Purple
    "053": { rgb: "rgb(199, 21, 133)", hex: "#C71585", hsl: "hsl(320, 72%, 47.1%)" }, // Red Violet
    "054": { rgb: "rgb(50, 23, 77)", hex: "#32174D", hsl: "hsl(270, 54%, 19.61%)" }, // Russian Violet
    "055": { rgb: "rgb(106, 90, 205)", hex: "#6A5ACD", hsl: "hsl(248, 53%, 57.1%)" }, // Slate Blue
    "056": { rgb: "rgb(204, 51, 204)", hex: "#CC33CC", hsl: "hsl(300, 60%, 50%)" }, // Steel Pink
    "057": { rgb: "rgb(81, 40, 136)", hex: "#512888", hsl: "hsl(276, 51%, 34.5%)" }, // Tekhelet
    "058": { rgb: "rgb(216, 191, 216)", hex: "#D8BFD8", hsl: "hsl(300, 24%, 75.3%)" }, // Thistle
    "059": { rgb: "rgb(150, 131, 236)", hex: "#9683EC", hsl: "hsl(240, 79%, 72.2%)" }, // Tropical Indigo
    "060": { rgb: "rgb(102, 2, 60)", hex: "#66023C", hsl: "hsl(336, 98%, 23.5%)" }, // Tyrian Purple
    "061": { rgb: "rgb(100, 83, 148)", hex: "#645394", hsl: "hsl(240, 38%, 43.9%)" }, // Ultra Violet
    "062": { rgb: "rgb(160, 32, 240)", hex: "#A020F0", hsl: "hsl(270, 100%, 58.8%)" }, // Veronica
    "063": { rgb: "rgb(128, 0, 255)", hex: "#8000FF", hsl: "hsl(270, 100%, 50%)" }, // Violet
    "064": { rgb: "rgb(201, 160, 220)", hex: "#C9A0DC", hsl: "hsl(270, 47%, 73.9%)" }, // Wisteria
  },
  pink: {
    "001": { rgb: "rgb(178, 132, 190)", hex: "#B284BE", hsl: "hsl(280, 34%, 63.1%)" }, // African Violet
    "002": { rgb: "rgb(229, 43, 80)", hex: "#E52B50", hsl: "hsl(348.06, 78.15%, 53.33%)" }, // Amaranth
    "003": { rgb: "rgb(171, 39, 79)", hex: "#AB274F", hsl: "hsl(341.82, 62.86%, 41.18%)" }, // Amaranth Purple
    "004": { rgb: "rgb(255, 145, 175)", hex: "#FF91AF", hsl: "hsl(343.64, 100%, 78.43%)" }, // Baker Miller Pink
    "005": { rgb: "rgb(222, 49, 99)", hex: "#DE3163", hsl: "hsl(345, 77%, 53.9%)" }, // Cerise
    "006": { rgb: "rgb(133, 96, 136)", hex: "#856088", hsl: "hsl(300, 19%, 46.7%)" }, // Chinese Violet
    "007": { rgb: "rgb(220, 20, 60)", hex: "#DC143C", hsl: "hsl(348.46, 83.33%, 47.06%)" }, // Crimson
    "008": { rgb: "rgb(139, 0, 139)", hex: "#8B008B", hsl: "hsl(300, 100%, 27.25%)" }, // Dark Magenta
    "009": { rgb: "rgb(97, 64, 81)", hex: "#614051", hsl: "hsl(320, 21%, 27.3%)" }, // Eggplant
    "010": { rgb: "rgb(86, 60, 92)", hex: "#563C5C", hsl: "hsl(312, 21%, 29.4%)" }, // English Violet
    "011": { rgb: "rgb(181, 51, 137)", hex: "#B53389", hsl: "hsl(320, 59%, 45.9%)" }, // Fandango
    "012": { rgb: "rgb(104, 48, 104)", hex: "#683068", hsl: "hsl(300, 33%, 30.6%)" }, // Finn
    "013": { rgb: "rgb(255, 0, 255)", hex: "#FF00FF", hsl: "hsl(300, 100%, 50%)" }, // Fuchsia
    "014": { rgb: "rgb(255, 29, 206)", hex: "#FF1DCE", hsl: "hsl(315, 100%, 53.3%)" }, // Hot Magenta
    "015": { rgb: "rgb(202, 31, 123)", hex: "#CA1F7B", hsl: "hsl(320, 76%, 48.6%)" }, // Magenta Dye
    "016": { rgb: "rgb(255, 0, 144)", hex: "#FF0090", hsl: "hsl(326.12, 100%, 50%)" }, // Magenta CMYK
    "017": { rgb: "rgb(246, 83, 166)", hex: "#F653A6", hsl: "hsl(329.45, 90.06%, 64.51%)" }, // Magenta Crayola
    "018": { rgb: "rgb(208, 65, 126)", hex: "#D0417E", hsl: "hsl(334.41, 60.34%, 53.53%)" }, // Magenta Pantone
    "019": { rgb: "rgb(159, 69, 118)", hex: "#9F4576", hsl: "hsl(327.33, 39.47%, 44.71%)" }, // Magenta Haze
    "020": { rgb: "rgb(197, 75, 140)", hex: "#C54B8C", hsl: "hsl(320, 53%, 48.6%)" }, // Mulberry
    "021": { rgb: "rgb(218, 112, 214)", hex: "#DA70D6", hsl: "hsl(307, 59%, 63.9%)" }, // Orchid
    "022": { rgb: "rgb(142, 69, 133)", hex: "#8E4585", hsl: "hsl(323, 34%, 41.2%)" }, // Plum
    "023": { rgb: "rgb(128, 0, 128)", hex: "#800080", hsl: "hsl(300, 100%, 25.5%)" }, // Purple
    "024": { rgb: "rgb(254, 78, 218)", hex: "#FE4EDA", hsl: "hsl(320, 99%, 69.8%)" }, // Purple Pizzazz
    "025": { rgb: "rgb(142, 58, 89)", hex: "#8E3A59", hsl: "hsl(337.86, 42%, 39.22%)" }, // Quinacridone Magenta
    "026": { rgb: "rgb(227, 11, 92)", hex: "#E30B5C", hsl: "hsl(330, 85%, 50.6%)" }, // Raspberry
    "027": { rgb: "rgb(255, 51, 204)", hex: "#FF33CC", hsl: "hsl(320, 100%, 61.2%)" }, // Razzle Dazzle Rose
    "028": { rgb: "rgb(199, 21, 133)", hex: "#C71585", hsl: "hsl(320, 72%, 47.1%)" }, // Red Violet
    "029": { rgb: "rgb(255, 0, 128)", hex: "#FF0080", hsl: "hsl(330, 100%, 50%)" }, // Rose
    "030": { rgb: "rgb(255, 102, 204)", hex: "#FF66CC", hsl: "hsl(328, 100%, 71.8%)" }, // Rose Pink
    "031": { rgb: "rgb(170, 152, 169)", hex: "#AA98A9", hsl: "hsl(300, 10%, 61.8%)" }, // Rose Quartz
    "032": { rgb: "rgb(252, 15, 192)", hex: "#FC0FC0", hsl: "hsl(322, 100%, 49.8%)" }, // Shocking Pink
    "033": { rgb: "rgb(255, 111, 255)", hex: "#FF6FFF", hsl: "hsl(300, 100%, 82.4%)" }, // Shocking Pink Crayola
    "034": { rgb: "rgb(204, 51, 204)", hex: "#CC33CC", hsl: "hsl(300, 60%, 50%)" }, // Steel Pink
    "035": { rgb: "rgb(207, 113, 175)", hex: "#CF71AF", hsl: "hsl(320, 38%, 62.4%)" }, // Sky Magenta
    "036": { rgb: "rgb(207, 52, 118)", hex: "#CF3476", hsl: "hsl(338, 70%, 47.8%)" }, // Telemagenta
    "037": { rgb: "rgb(238, 130, 238)", hex: "#EE82EE", hsl: "hsl(300, 76%, 72.2%)" }, // Violet Web Color
    "038": { rgb: "rgb(241, 156, 187)", hex: "#F19CBB", hsl: "hsl(338, 74%, 77.3%)" }, // Amaranth Pink
    "039": { rgb: "rgb(222, 93, 131)", hex: "#DE5D83", hsl: "hsl(343, 56%, 58.8%)" },  // Blush
    "040": { rgb: "rgb(246, 83, 166)", hex: "#F653A6", hsl: "hsl(329.45, 90.06%, 64.51%)" }, // Brilliant Rose
    "041": { rgb: "rgb(251, 96, 127)", hex: "#FB607F", hsl: "hsl(349.41, 94.12%, 67.25%)" }, // Brink Pink
    "042": { rgb: "rgb(255, 166, 201)", hex: "#FFA6C9", hsl: "hsl(338, 100%, 79.4%)" }, // Carnation Pink
    "043": { rgb: "rgb(241, 221, 207)", hex: "#F1DDCF", hsl: "hsl(30, 60%, 85.1%)" }, // Champagne Pink
    "044": { rgb: "rgb(255, 183, 197)", hex: "#FFB7C5", hsl: "hsl(351, 100%, 82.4%)" }, // Cherry Blossom Pink
    "045": { rgb: "rgb(168, 81, 110)", hex: "#A8516E", hsl: "hsl(336, 37%, 45.5%)" }, // China Rose
    "046": { rgb: "rgb(255, 127, 80)", hex: "#FF7F50", hsl: "hsl(16.08, 100%, 70%)" }, // Coral
    "047": { rgb: "rgb(248, 131, 121)", hex: "#F88379", hsl: "hsl(5.45, 85.71%, 74.51%)" }, // Coral Pink
    "048": { rgb: "rgb(137, 63, 69)", hex: "#893F45", hsl: "hsl(353.33, 37.5%, 40.98%)" }, // Cordovan
    "049": { rgb: "rgb(245, 111, 161)", hex: "#F56FA1", hsl: "hsl(338, 75%, 70.2%)" }, // Cyclamen
    "050": { rgb: "rgb(255, 20, 147)", hex: "#FF1493", hsl: "hsl(328, 100%, 54.9%)" }, // Deep Pink
    "051": { rgb: "rgb(215, 24, 104)", hex: "#D71868", hsl: "hsl(337, 76%, 49.8%)" }, // Dogwood Rose
    "052": { rgb: "rgb(242, 193, 209)", hex: "#F2C1D1", hsl: "hsl(10, 76%, 84.7%)" }, // Fairy Tale
    "053": { rgb: "rgb(246, 74, 138)", hex: "#F64A8A", hsl: "hsl(340, 83%, 62.4%)" }, // French Rose
    "054": { rgb: "rgb(199, 67, 117)", hex: "#C74375", hsl: "hsl(338, 53%, 48.2%)" }, // Fuchsia Rose
    "055": { rgb: "rgb(255, 0, 79)", hex: "#FF004F", hsl: "hsl(341.82, 100%, 50%)" }, // Folly
    "056": { rgb: "rgb(244, 0, 161)", hex: "#F400A1", hsl: "hsl(323, 100%, 47.8%)" }, // Hollywood Cerise
    "057": { rgb: "rgb(255, 0, 204)", hex: "#FF00CC", hsl: "hsl(320, 100%, 50.2%)" }, // Hot Magenta
    "058": { rgb: "rgb(255, 105, 180)", hex: "#FF69B4", hsl: "hsl(330, 100%, 71.8%)" }, // Hot Pink
    "059": { rgb: "rgb(255, 240, 245)", hex: "#FFF0F5", hsl: "hsl(340, 100%, 97.1%)" }, // Lavender Blush
    "060": { rgb: "rgb(251, 174, 210)", hex: "#FBAED2", hsl: "hsl(327, 89%, 80.4%)" }, // Lavender Pink
    "061": { rgb: "rgb(255, 0, 255)", hex: "#FF00FF", hsl: "hsl(300, 100%, 50%)" }, // Magenta
    "062": { rgb: "rgb(228, 0, 124)", hex: "#E4007C", hsl: "hsl(329, 100%, 44.7%)" }, // Mexican Pink
    "063": { rgb: "rgb(255, 218, 233)", hex: "#FFDAE9", hsl: "hsl(330, 100%, 93.3%)" }, // Mimi Pink
    "064": { rgb: "rgb(255, 228, 225)", hex: "#FFE4E1", hsl: "hsl(6, 100%, 97.06%)" }, // Misty Rose
    "065": { rgb: "rgb(153, 122, 141)", hex: "#997A8D", hsl: "hsl(330, 18%, 47.3%)" }, // Mountbatten Pink
    "066": { rgb: "rgb(192, 128, 129)", hex: "#C08081", hsl: "hsl(0, 33.33%, 64.12%)" }, // Old Rose
    "067": { rgb: "rgb(242, 189, 205)", hex: "#F2BDCD", hsl: "hsl(340, 75%, 84.5%)" }, // Orchid Pink
    "068": { rgb: "rgb(237, 205, 194)", hex: "#EDCDC2", hsl: "hsl(30, 51%, 81.6%)" }, // Pale Dogwood
    "069": { rgb: "rgb(255, 203, 164)", hex: "#FFCB A4", hsl: "hsl(30, 100%, 84.1%)" }, // Peach
    "070": { rgb: "rgb(254, 40, 162)", hex: "#FE28A2", hsl: "hsl(324, 99%, 54.9%)" }, // Persian Rose
    "071": { rgb: "rgb(247, 127, 190)", hex: "#F77FBE", hsl: "hsl(326, 76%, 74.1%)" }, // Persian Pink
    "072": { rgb: "rgb(223, 0, 255)", hex: "#DF00FF", hsl: "hsl(292.47, 100%, 50%)" }, // Phlox
    "073": { rgb: "rgb(255, 192, 203)", hex: "#FFC0CB", hsl: "hsl(350, 100%, 87.1%)" }, // Pink
    "074": { rgb: "rgb(237, 122, 155)", hex: "#ED7A9B", hsl: "hsl(340, 72%, 68.2%)" }, // Rose Pompadour
    "075": { rgb: "rgb(204, 136, 153)", hex: "#CC8899", hsl: "hsl(340, 25%, 60.4%)" }, // Puce
    "076": { rgb: "rgb(227, 37, 107)", hex: "#E3256B", hsl: "hsl(336, 76%, 52.2%)" }, // Razzmatazz
    "077": { rgb: "rgb(179, 68, 108)", hex: "#B3446C", hsl: "hsl(338, 42%, 44.9%)" }, // Raspberry Rose
    "078": { rgb: "rgb(255, 0, 128)", hex: "#FF0080", hsl: "hsl(330, 100.00%, 50.00%)" }, // Rose
    "079": { rgb: "rgb(249, 66, 158)", hex: "#F9429E", hsl: "hsl(331, 85%, 67.8%)" }, // Rose Bonbon
    "080": { rgb: "rgb(103, 72, 70)", hex: "#674846", hsl: "hsl(3.33, 19.05%, 34.12%)" }, // Rose Ebony
    "081": { rgb: "rgb(194, 30, 86)", hex: "#C21E56", hsl: "hsl(337.5, 74.07%, 44.71%)" }, // Rose Red
    "082": { rgb: "rgb(144, 93, 93)", hex: "#905D5D", hsl: "hsl(0, 21.43%, 47.25%)" }, // Rose Taupe
    "083": { rgb: "rgb(171, 78, 82)", hex: "#AB4E52", hsl: "hsl(357.42, 37.35%, 48.82%)" }, // Rose Vale
    "084": { rgb: "rgb(101, 0, 11)", hex: "#65000B", hsl: "hsl(351.43, 100%, 19.8%)" }, // Rosewood
    "085": { rgb: "rgb(188, 143, 143)", hex: "#BC8F8F", hsl: "hsl(0, 25%, 64.71%)" }, // Rosy Brown
    "086": { rgb: "rgb(255, 145, 164)", hex: "#FF91A4", hsl: "hsl(349.41, 100%, 80.59%)" }, // Salmon Pink
    "087": { rgb: "rgb(255, 245, 238)", hex: "#FFF5EE", hsl: "hsl(30, 100%, 97.3%)" }, // Seashell
    "088": { rgb: "rgb(244, 194, 194)", hex: "#F4C2C2", hsl: "hsl(0, 60.00%, 86.67%)" }, // Tea Rose
    "089": { rgb: "rgb(252, 137, 172)", hex: "#FC89AC", hsl: "hsl(338, 91%, 76.9%)" }, // Tickle Me Pink
    "090": { rgb: "rgb(222, 111, 161)", hex: "#DE6FA1", hsl: "hsl(330, 57%, 61.8%)" }, // Thulian Pink
    "091": { rgb: "rgb(255, 111, 255)", hex: "#FF6FFF", hsl: "hsl(300, 100.00%, 82.35%)" }, // Ultra Pink
  },
  white: {
    "001": { rgb: "rgb(237, 234, 224)", hex: "#EDEAE0", hsl: "hsl(60, 26%, 90.2%)" }, // Alabaster
    "002": { rgb: "rgb(240, 248, 255)", hex: "#F0F8FF", hsl: "hsl(208, 100%, 97.3%)" }, // Alice Blue
    "003": { rgb: "rgb(242, 243, 244)", hex: "#F2F3F4", hsl: "hsl(210, 10%, 96.5%)" }, // Anti-Flash White
    "004": { rgb: "rgb(250, 235, 215)", hex: "#FAEBD7", hsl: "hsl(34, 77%, 91.4%)" }, // Antique White
    "005": { rgb: "rgb(240, 255, 255)", hex: "#F0FFFF", hsl: "hsl(180, 100%, 97.06%)" }, // Azure White
    "006": { rgb: "rgb(254, 254, 250)", hex: "#FEFEFA", hsl: "hsl(60, 100%, 98%)" }, // Baby Powder
    "007": { rgb: "rgb(245, 245, 220)", hex: "#F5F5DC", hsl: "hsl(60, 55.56%, 91.18%)" }, // Beige
    "008": { rgb: "rgb(227, 218, 201)", hex: "#E3DAC9", hsl: "hsl(38, 34.4%, 84.5%)" }, // Bone
    "009": { rgb: "rgb(247, 231, 206)", hex: "#F7E7CE", hsl: "hsl(35, 70.59%, 89.02%)" }, // Champagne
    "010": { rgb: "rgb(255, 248, 220)", hex: "#FFF8DC", hsl: "hsl(57, 100%, 93.1%)" }, // Cornsilk
    "011": { rgb: "rgb(255, 248, 231)", hex: "#FFF8E7", hsl: "hsl(51, 100%, 94.1%)" }, // Cosmic Latte
    "012": { rgb: "rgb(255, 253, 208)", hex: "#FFFDD0", hsl: "hsl(60, 100%, 90.2%)" }, // Cream
    "013": { rgb: "rgb(239, 223, 187)", hex: "#EFDFBB", hsl: "hsl(50, 50%, 80.2%)" }, // Dutch White
    "014": { rgb: "rgb(240, 234, 214)", hex: "#F0EAD6", hsl: "hsl(50, 45%, 85.1%)" }, // Eggshell
    "015": { rgb: "rgb(238, 220, 130)", hex: "#EEDC82", hsl: "hsl(54, 77%, 70.2%)" }, // Flax
    "016": { rgb: "rgb(255, 250, 240)", hex: "#FFFAF0", hsl: "hsl(39, 100%, 97.3%)" }, // Floral White
    "017": { rgb: "rgb(248, 248, 255)", hex: "#F8F8FF", hsl: "hsl(240, 100%, 98%)" }, // Ghost White
    "018": { rgb: "rgb(240, 255, 240)", hex: "#F0FFF0", hsl: "hsl(120, 100%, 97.6%)" }, // Honeydew
    "019": { rgb: "rgb(244, 240, 236)", hex: "#F4F0EC", hsl: "hsl(40, 25%, 94.1%)" }, // Isabelline
    "020": { rgb: "rgb(255, 255, 240)", hex: "#FFFFF0", hsl: "hsl(60, 100%, 97.6%)" }, // Ivory
    "021": { rgb: "rgb(255, 240, 245)", hex: "#FFF0F5", hsl: "hsl(340, 100%, 97.1%)" }, // Lavender Blush
    "022": { rgb: "rgb(255, 250, 205)", hex: "#FFFACD", hsl: "hsl(54, 100%, 90.2%)" }, // Lemon Chiffon
    "023": { rgb: "rgb(250, 240, 230)", hex: "#FAF0E6", hsl: "hsl(30, 67%, 94.1%)" }, // Linen
    "024": { rgb: "rgb(248, 244, 255)", hex: "#F8F4FF", hsl: "hsl(240, 100%, 97.3%)" }, // Magnolia
    "025": { rgb: "rgb(245, 255, 250)", hex: "#F5FFFA", hsl: "hsl(150, 100%, 98%)" }, // Mint Cream
    "026": { rgb: "rgb(255, 228, 225)", hex: "#FFE4E1", hsl: "hsl(6, 100%, 97.06%)" }, // Misty Rose
    "027": { rgb: "rgb(255, 222, 173)", hex: "#FFDEAD", hsl: "hsl(39, 100%, 85.1%)" }, // Navajo White
    "028": { rgb: "rgb(233, 255, 219)", hex: "#E9FFDB", hsl: "hsl(87, 100%, 90.6%)" }, // Nyanza
    "029": { rgb: "rgb(253, 245, 230)", hex: "#FDF5E6", hsl: "hsl(39, 85%, 94.1%)" }, // Old Lace
    "030": { rgb: "rgb(255, 239, 213)", hex: "#FFEFD5", hsl: "hsl(37.5, 100%, 91.18%)" }, // Papaya Whip
    "031": { rgb: "rgb(241, 233, 210)", hex: "#F1E9D2", hsl: "hsl(39, 60%, 85.1%)" }, // Parchment
    "032": { rgb: "rgb(255, 229, 180)", hex: "#FFE5B4", hsl: "hsl(39.13, 100%, 85.1%)" }, // Peach
    "033": { rgb: "rgb(234, 224, 200)", hex: "#EAE0C8", hsl: "hsl(43, 60%, 82%)" }, // Pearl
    "034": { rgb: "rgb(229, 228, 226)", hex: "#E5E4E2", hsl: "hsl(60, 4%, 89.4%)" }, // Platinum
    "035": { rgb: "rgb(247, 247, 247)", hex: "#F7F7F7", hsl: "hsl(0, 0%, 97.3%)" }, // Seasalt
    "036": { rgb: "rgb(255, 245, 238)", hex: "#FFF5EE", hsl: "hsl(30, 100%, 97.3%)" }, // Seashell
    "037": { rgb: "rgb(255, 250, 250)", hex: "#FFFAFA", hsl: "hsl(0, 100%, 99.2%)" }, // Snow
    "038": { rgb: "rgb(243, 229, 171)", hex: "#F3E5AB", hsl: "hsl(50, 84%, 81.4%)" }, // Vanilla
    "039": { rgb: "rgb(255, 255, 255)", hex: "#FFFFFF", hsl: "hsl(0, 0%, 100%)" }, // White
    "040": { rgb: "rgb(245, 245, 245)", hex: "#F5F5F5", hsl: "hsl(0, 0%, 96.1%)" }, // White Smoke
  },
  gray: {
    "001": { rgb: "rgb(245, 245, 245)", hex: "#F5F5F5", hsl: "hsl(0, 0%, 96.1%)" }, // White Smoke
    "002": { rgb: "rgb(229, 228, 226)", hex: "#E5E4E2", hsl: "hsl(60, 4%, 89.4%)" }, // Platinum
    "003": { rgb: "rgb(219, 215, 210)", hex: "#DBD7D2", hsl: "hsl(39, 10%, 84.9%)" }, // Timberwolf
    "004": { rgb: "rgb(192, 192, 192)", hex: "#C0C0C0", hsl: "hsl(0, 0%, 75.3%)" }, // Silver
    "005": { rgb: "rgb(190, 191, 197)", hex: "#BEBFC5", hsl: "hsl(210, 4%, 76.5%)" }, // French Gray
    "006": { rgb: "rgb(178, 190, 181)", hex: "#B2BEB5", hsl: "hsl(150, 6%, 72.5%)" }, // Ash Gray
    "007": { rgb: "rgb(170, 152, 169)", hex: "#AA98A9", hsl: "hsl(300, 10%, 61.8%)" }, // Rose Quartz
    "008": { rgb: "rgb(152, 129, 123)", hex: "#98817B", hsl: "hsl(20, 14%, 53.9%)" }, // Cinereous
    "009": { rgb: "rgb(145, 163, 176)", hex: "#91A3B0", hsl: "hsl(210, 13%, 60%)" }, // Cadet Gray
    "010": { rgb: "rgb(140, 146, 172)", hex: "#8C92AC", hsl: "hsl(219, 13%, 59.2%)" }, // Cool Gray
    "011": { rgb: "rgb(139, 133, 137)", hex: "#8B8589", hsl: "hsl(330, 3%, 52.9%)" }, // Taupe Gray
    "012": { rgb: "rgb(132, 132, 130)", hex: "#848482", hsl: "hsl(60, 1%, 51.8%)" }, // Battleship Gray
    "013": { rgb: "rgb(128, 128, 128)", hex: "#808080", hsl: "hsl(0, 0%, 50.2%)" }, // Gray
    "014": { rgb: "rgb(112, 128, 144)", hex: "#708090", hsl: "hsl(210, 13%, 50.2%)" }, // Slate Gray
    "015": { rgb: "rgb(105, 105, 105)", hex: "#696969", hsl: "hsl(0, 0%, 41.2%)" }, // Dim Gray
    "016": { rgb: "rgb(85, 85, 85)", hex: "#555555", hsl: "hsl(0, 0%, 33.3%)" }, // Davy's Gray
    "017": { rgb: "rgb(83, 104, 120)", hex: "#536878", hsl: "hsl(195, 13%, 36.9%)" }, // Payne's Gray
    "018": { rgb: "rgb(96, 130, 182)", hex: "#6082B6", hsl: "hsl(211, 35%, 54.1%)" }, // Glaucous
    "019": { rgb: "rgb(42, 52, 57)", hex: "#2A3439", hsl: "hsl(190, 16%, 18%)" }, // Gunmetal
    "020": { rgb: "rgb(77, 93, 83)", hex: "#4D5D53", hsl: "hsl(141, 13%, 32.9%)" }, // Feldgrau
    "021": { rgb: "rgb(47, 79, 79)", hex: "#2F4F4F", hsl: "hsl(180, 30%, 23.5%)" }, // Dark Slate Gray
  },
  black: {
    "001": { rgb: "rgb(61, 43, 31)", hex: "#3D2B1F", hsl: "hsl(24, 32.26%, 18.63%)" }, // Bistre
    "002": { rgb: "rgb(0, 0, 0)", hex: "#000000", hsl: "hsl(0, 0%, 0%)" }, // Black
    "003": { rgb: "rgb(61, 12, 2)", hex: "#3D0C02", hsl: "hsl(9.6, 93.55%, 12.35%)" }, // Black Bean
    "004": { rgb: "rgb(59, 60, 54)", hex: "#3B3C36", hsl: "hsl(60, 5.56%, 22.35%)" }, // Black Olive
    "005": { rgb: "rgb(75, 54, 33)", hex: "#4B3621", hsl: "hsl(30, 38%, 21.8%)" }, // Cafe Noir
    "006": { rgb: "rgb(48, 25, 52)", hex: "#301934", hsl: "hsl(309, 32%, 17.3%)" }, // Dark Purple
    "007": { rgb: "rgb(54, 69, 79)", hex: "#36454F", hsl: "hsl(210, 18%, 25.1%)" }, // Charcoal
    "008": { rgb: "rgb(85, 93, 80)", hex: "#555D50", hsl: "hsl(81, 10%, 31%)" }, // Ebony
    "009": { rgb: "rgb(27, 27, 27)", hex: "#1B1B1B", hsl: "hsl(0, 0%, 10.6%)" }, // Eerie Black
    "010": { rgb: "rgb(52, 52, 52)", hex: "#343434", hsl: "hsl(0, 0%, 20.4%)" }, // Jet
    "011": { rgb: "rgb(26, 17, 16)", hex: "#1A1110", hsl: "hsl(9, 39%, 7.8%)" }, // Licorice
    "012": { rgb: "rgb(25, 25, 112)", hex: "#191970", hsl: "hsl(240, 66%, 27.5%)" }, // Midnight Blue
    "013": { rgb: "rgb(17, 17, 17)", hex: "#111111", hsl: "hsl(0, 0%, 6.7%)" }, // Night
    "014": { rgb: "rgb(53, 56, 57)", hex: "#353839", hsl: "hsl(180, 3%, 21.2%)" }, // Onyx
    "015": { rgb: "rgb(65, 74, 76)", hex: "#414A4C", hsl: "hsl(180, 8%, 27.1%)" }, // Outer Space
    "016": { rgb: "rgb(36, 33, 36)", hex: "#242124", hsl: "hsl(300, 7%, 13.3%)" }, // Raisin Black
    "017": { rgb: "rgb(1, 11, 19)", hex: "#010B13", hsl: "hsl(210, 88%, 3.1%)" }, // Rich Black
    "018": { rgb: "rgb(50, 23, 77)", hex: "#32174D", hsl: "hsl(270, 54%, 19.61%)" }, // Russian Violet
    "019": { rgb: "rgb(16, 12, 8)", hex: "#100C08", hsl: "hsl(30, 40%, 5.1%)" }, // Smoky Black
    "020": { rgb: "rgb(72, 60, 50)", hex: "#483C32", hsl: "hsl(30, 14.3%, 24.1%)" }, // Taupe

  },
};

function CoolorsCSS() {
  const styleElement = document.querySelector('style[id^="coolors-styles-"]');
  const styleType = styleElement.id.split("-").pop();

  const elements = document.querySelectorAll(
    '[class^="text-coolors-"], [class^="decoration-coolors-"], [class^="bg-coolors-"], [class^="outline-coolors-"], [class^="border-coolors-"]'
  );

  let cssText = "";

  elements.forEach((element) => {
    const className = element.className;
    const parts = className.split("-");
    const colorType = parts[2];
    const colorCode = parts[3];

    let cssProperty = "";
    if (className.startsWith("text-coolors-")) {
      cssProperty = "color";
    } else if (className.startsWith("decoration-coolors-")) {
      cssProperty = "text-decoration-color";
    } else if (className.startsWith("bg-coolors-")) {
      cssProperty = "background-color";
    } else if (className.startsWith("outline-coolors-")) {
      cssProperty = "outline-color";
    } else if (className.startsWith("border-coolors-")) {
      cssProperty = "border-color";
    }

    if (colors[colorType] && colors[colorType][colorCode]) {
      const color = colors[colorType][colorCode];
      let selectedColor = "";

      if (styleType === "rgb") {
        selectedColor = color.rgb;
      } else if (styleType === "hex") {
        selectedColor = color.hex;
      } else if (styleType === "hsl") {
        selectedColor = color.hsl;
      }

      cssText += `.${className} { ${cssProperty}: ${selectedColor}; }\n`;
    }
  });

  styleElement.textContent = cssText;
}

window.onload = CoolorsCSS;