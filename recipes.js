const RECIPES = [

/* 🍝 BEISPIEL REZEPT */
{
    id: "1",
    title: "Spaghetti aglio e olio",
    category: [ "Pasta" ],
    image: "images/spaghetti-aglio-e-olio.jpeg",
    time:{
        preparation:"5 min",
        cooking: "25 min",
        total:"30 min"
    },
    related: [2, 5, 8],
    portions: 6,
    difficulty: "Einfach",
    rating: 4.6,
    description: "Der italienische Klassiker. Mit wenigen Zutaten zum großen Genuss.",

    /* 🍽️ ZUTATEN */
    ingredients: [
        "600g Spaghetti (Nr. 5)",
        "7 große Knoblauchzehen",
        "1/2 TL Chiliflocken",
        "80ml Olivenöl",
        "Salz",
        "Pfeffer",
        "Parmesan (optional)",
    ],

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
        "Den Knoblauch schälen, 4 der Knoblauchzehen mit einer Knoblauchpresse in eine kleine Schale pressen, den Rest in dünne Scheiben schneiden und mit in die Schale geben.",

        "In einer Pfanne das Olivenöl bei mittlerer Hitze <b>MIT</b> dem Knoblauch und dem Chili zusammen unter gelegentlichem Rühren langsam erhitzen, bis der Knoblauch stark duftet und leicht goldgelb wird (ca. 15 min).",

        "Währenddessen die Spaghetti in kochendem Salzwasser (3,5l mit ca. 35g Salz) kochen.",

        "Dann die Pfanne von der heißen Herdplatte ziehen, die Nudeln ca. 2 min vor Ende der Kochzeit in die Soße geben und einrühren.",

        "Auf die Herdplatte zurückziehen, ca. 2 Kellen Pastawasser dazugeben und die Nudeln unter Rühren auf höchster Stufe fertig kochen.",

        "Pfeffern und nach Belieben mit Parmesan servieren.",
    ]
},


{
    id: "2",
    title: "Ananassalat",
    category: ["Salate"],
    image: "images/ananassalat.jpeg",
    time:{
        preparation:"45 min",
        total:"45 min"
    },
    related: ["1", "10", "20"],
    portions: 6,
    difficulty: "Einfach",
    rating: 4.6,
    description: "Süß-sauer trifft auf herzhaft-salzig.",

    /* 🍽️ ZUTATEN */
    ingredients: [
        "450g TK-Prinzessinnenbohnen",
        "1 Ananas (ca. 1,6kg)",
        "1 Salatgurke",
        "3 rote Spitzpaprika",
        "1 große rote Zwiebel",
        "2 Rollen Ziegenkäse (à 180g)",
        "150g Bacon",

        "3 EL Olivenöl",
        "1 TL Limettensaft",
        "1/2 TL Chiliflocken",
        "Salz",
        "Pfeffer",
    ],

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
        "Einen kleinen Topf mit Salzwasser zum Kochen bringen.",

        "Jede Ziegenkäserolle in 10 Scheiben schneiden und jede Scheibe nochmals vierteln.",

        "Jede Baconscheibe in 8 gleich große Stücke schneiden, jedes Ziegenkäsestück mit einem Baconstück umwickeln und auf ein mit Backpapier belegtes Backblech legen.",

        "Die Bohnen in das Wasser geben, aufkochen, ca. 7 min sanft köcheln lassen, in ein Sieb abgießen, kalt abspülen und abtropfen lassen.",

        "Die Gurke schälen, halbieren, erneut vierteln und in kleine Würfel schneiden.",

        "Die Zwiebel schälen und fein hacken.",

        "Die Paprika in kleine Würfel schneiden.",

        "Für das Dressing alle Zutaten vermengen.",

        "Die Ziegenkäsescheiben im Ofen bei höchster Grillstufe ca. 7 min im oberen Drittel backen, bis der Bacon knusprig ist.",

        "In der Zwischenzeit den Strunk von der Ananas entfernen, die Schale abschneiden und das Fruchtfleisch in Würfel schneiden, dabei die holzige Mitte herausschneiden.",

        "Den Käse aus dem Ofen nehmen, die Ananas, die Bohnen, die Gurke, die Zwiebel und die Paprika in eine große Schüssel geben, mit dem Dressing vermengen und mit einem Teil der Ziegenkäsestückchen toppen.",
    ]
},


{
    id: "3",
    title: "Ameisenkuchen mit Kirschen",
    category: ["süßes Gebäck"],
    image: "images/ameisenkuchen-mit-kirschen.jpeg",
    time:{
        preparation:"10 min",
        baking:"45 min",
        cooling:"1 Std.",
        total:"1 Std. 55 min"
    },
    related: ["9", "40", "36"],
    portions: "1 Kuchen",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Der einfache Klassiker mit Kirschen.",

    /* 🍽️ ZUTATEN */
    ingredients: [
        "115g Glaskirschen (abgetropft)",
        "280g Mehl",
        "20g Speisestärke",
        "175g Zucker",
        "1 TL Zitronenschale",
        "1 TL Vanilleextrakt",
        "300ml Milch",
        "100ml neutrales Öl",
        "1/2 Pck. Backpulver",
        "1/2 TL Natron",
        "1 EL Apfelessig",
        "100g Schokostreusel",
        "1 Prise Salz",
    ],

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
        "Den Ofen auf 180°C Ober-/Unterhitze vorheizen und eine Kastenform (30x11cm) gut einfetten.",

        "Die Kirschen halbieren.",

        "Das Mehl mit der Speisestärke, dem Zucker, dem Backpulver, dem Salz, dem Natron und der Zitronenschale vermengen und in der Mitte eine Mulde formen.",

        "Die Milch, das Öl, den Apfelessig sowie den Vanilleextrakt dazugeben und alles kurz mit einem Schneebesen verrühren, bis sich alles verbunden hat.",

        "Die Kirschen und die Streusel dazugeben und vorsichtig unterheben, in die Kastenform geben und glattstreichen.",

        "Im vorgeheizten Backofen ca. 45 min backen (Stäbchenprobe!) und nach ca. 15 min einmal der Länge nach einschneiden.",

        "Vollständig auskühlen lassen und dann aus der Form lösen.",
    ]
},


{
    id: "4",
    title: "Thüringer Klöße",
    category: ["Beilage"],
    image: "images/Thüringer-Klöße.jpeg",
    time:{
        preparation:"35 min",
        cooking:"15 min",
        total:"50 min"
    },
    related: ["2", "7", "33"],
    portions: "12 kleine Klöße",
    difficulty: "Einfach",
    rating: 1,
    description: "Der Beilagenklassiker. Ob zu Fleisch, Soße oder Gemüse. Einfach immer köstlich.",

    /* 🍽️ ZUTATEN */
    ingredients: {

    "Kloßteig": [
        "1,5kg mehligkochende Kartoffeln",
        "1/2 TL Salz"
    ],

    "Semmelbrösel": [
        "1 Kaisersemmel",
        "30g Butter",
        "Salz",
        "Pfeffer",
    ]
},

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
        "1/3 der Kartoffeln (=500g) ungeschält in Salzwasser ca. 25 min weich kochen und abkühlen. (Diesen Schritt kannst du auch schon am Vortag machen)",

        "Ein Küchentuch in eine Glasschüssel legen und die restlichen 2/3 der rohen Kartoffeln (=1kg) schälen und mit einer Sternreibe fein hineinraspeln.",

        "Die Flüssigkeit aus den geraspelten Kartoffeln mit dem Tuch gut auspressen und beiseitestellen, bis sich die Stärke abgesetzt hat (ca. 10 min).",

        "In der Zwischenzeit die Butter in einer Pfanne schmelzen, das Brötchen in Würfel schneiden und in der Pfanne mit Salz und Pfeffer knusprig braten.",

        "Dann einen großen Topf mit Salzwasser zum Kochen bringen.",

        "Vorsichtig das Wasser von der abgesetzten Stärke abgießen, mit einem Löffel gut umrühren, die gekochten Kartoffeln durch eine Kartoffelpresse pressen und mit den geraspelten Kartoffeln, Stärke und dem Salz gut vermengen, bis sich alles gut verbunden hat und man einen gut formbaren Teig erhält. (Nicht zu lange, da er sonst zäh wird)",

        "Je ein Stück Teig nehmen, zu einer Kugel formen, flach drücken, einen Semmelbrösel hineingeben, verschließen und wieder zu einer Kugel formen.",

        "Die Hitze reduzieren, bis das Salzwasser nur noch siedet.",

        "Die Klöße mit einer Schaumkelle hineingeben und bei geschlossenem Deckel auf mittlerer Hitze ca. 15 min ziehen lassen, bis sie an der Oberfläche schwimmen, und mit einer Schaumkelle herausnehmen.",
    ]
},
{
    id: "5",
    title: "Asianstyle Pilz-Brokkoli-Pfanne",
    category: ["Vegetarisch", "Vegan", "Reis"],
    image: "images/Asianstyle-Pilz-Brokkoli-Pfanne.jpeg",
    time:{
        preparation:"22 min",
        cooking:"18 min",
        total:"40 min"
    },
    related: ["2", "10", "25"],
    portions: 6,
    difficulty: "Einfach",
    rating: 4.6,
    description: "Pilz-Brokkoli-Pfanne mit einem Hauch von Asien",

    /* 🍽️ ZUTATEN */
    ingredients: {
        "Gemüse": [
            "800g Champignons",
            "2 Brokkoli",
            "1 große Gemüsezwiebel",
            "2 Knoblauchzehen",
            "Erdnussöl"
        ],

        "Soße": [
            "150ml Gemüsebrühe",
            "4 EL Sojasauce",
            "1 TL Reisessig",
            "1 TL Honig",
            "2 EL Speisestärke",
            "1 TL Sesamöl",
            "1/2 TL Chiliflocken"
        ],

        "Beilage": [
            "300g Basmatireis",
            "450ml Wasser",
            "Salz"
        ],
    },

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
        "Einen Topf mit Salzwasser zum Kochen bringen.",

        "Den Reis waschen, bis das Wasser klar ist, in einen Topf mit dem Wasser geben und ca. 15 min einweichen lassen, aufkochen und bei mittlerer Hitze und geschlossenem Deckel ca. 8 min sanft köcheln, bis das Wasser absorbiert wurde.",

        "Währenddessen die Zwiebel schälen, vierteln und in Streifen schneiden. Vom Brokkoli den Strunk entfernen und den Kopf in kleinere Röschen schneiden. Die Pilze putzen, halbieren und in Scheiben schneiden.",

        "Den Brokkoli in das kochende Salzwasser geben und 1 min blanchieren. Mit einer Schaumkelle herausnehmen und mit kaltem Wasser abschrecken.",

        "Für die Soße die Stärke in etwas Wasser glattrühren und mit den restlichen Zutaten für die Soße vermischen.",

        "In der Zwischenzeit in einer beschichteten Pfanne etwas Erdnussöl erhitzen.",

        "Die Zwiebeln dazugeben und ca. 1–2 min unter Rühren braten.",

        "Den Knoblauch solange unterrühren, bis er duftet. Dann die Pilze dazugeben und ca. 5 min unter gelegentlichem Rühren braten, bis sie braun sind.",

        "Den Brokkoli in die Pfanne geben und weitere 5 Minuten unter gelegentlichem Rühren braten. Dabei nach ca. 1–2 min das Wasser abgießen.",

        "Die Soße dazugeben, aufkochen und ca. 5 min fertig köcheln.",

        "Vom Herd nehmen und ca. 5 min abkühlen lassen, sodass die Soße noch etwas andicken kann. Gut durchrühren und mit Reis servieren.",
    ]
},


{
    id: "6",
    title: "Avocadocreme",
    category: ["Aufstriche & Dips", "Vegetarisch"],
    image: "images/avocadocreme.jpeg",
    time: "5 min",
    related: ["9", "5", "38"],
    portions: "6 kleine Portionen",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Ein cremiger Aufstrich. Perfekt für Burger, Sandwiches, Wraps & Co.",

    /* 🍽️ ZUTATEN */
    ingredients: [
        "2 Avocados",
        "100g Frischkäse",
        "1 Spritzer Limettensaft",
        "Salz",
        "Pfeffer",
    ],

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
        "Die Avocados schälen, den Kern entfernen und mit den restlichen Zutaten in einem Häcksler glatt pürieren.",
    ]
},


{
    id: "7",
    title: "Bananenmuffins",
    category: ["süßes Gebäck"],
    image: "images/bananenmuffin.jpg",
    time:{
        preparation:"5 min",
        baking:"20 min",
        total:"25 min"
    },
    related: ["2", "22", "32"],
    portions: "4 Stück",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Schnelle Muffins mit Zutaten, die du sicher schon zuhause hast.",

    /* 🍽️ ZUTATEN */
    ingredients: [
        "50g Mehl (Type 405)",
        "20g Zucker",
        "2g Backpulver",
        "2g Natron",
        "1 Prise Salz",
        "15g Bananenkabapulver",
        "50ml Milch",
        "15ml Sprudelwasser",
        "20ml neutrales Öl",
        "1 TL Apfelessig",
    ],

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
        "Den Ofen auf 180°C Ober-/Unterhitze vorheizen und ein Muffinblech einfetten (alternativ mit Muffinförmchen auskleiden).",

        "Alle trockenen Zutaten in einer Schüssel vermengen, in der Mitte eine Mulde formen, die flüssigen Zutaten dazugeben und alles mit einem Schneebesen nur solange verrühren, bis sich alle Zutaten miteinander verbunden haben und kein trockenes Mehl mehr zu sehen ist.",

        "Den Teig in die vorbereitete Muffinform geben und im vorgeheizten Backofen auf mittlerer Schiene ca. 20 min backen. (Stäbchenprobe!)",
    ]
},


{
    id: "8",
    title: "Blauschimmelkäsesalat",
    category: ["Salate", "Vegetarisch"],
    image: "images/blauschimmelkäsesalat.jpg",
    time:{
        preparation:"45 min",
        total:"45 min"
    },
    related: ["15", "38", "28"],
    portions: "6 Portionen",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Ein einfacher Herbstsalat mit cremigem Blauschimmelkäse, süßem Obst und knackigen Nüssen.",

    ingredients: {
        "Salat": [
            "400g Blauschimmelkäse",
            "2 Birnen",
            "150g Feldsalat",
            "2 rote Zwiebeln",
            "300g rote Weintrauben",
            "50g gehackte Walnüsse"
        ],

        "Kartoffeln": [
            "500g Drillingskartoffeln",
            "1 TL getrockneter Thymian",
            "1 EL Olivenöl",
            "1 TL Salz",
            "Pfeffer"
        ],

        "Dressing": [
            "3 EL Olivenöl",
            "1 EL Wasser",
            "2 TL Balsamicoessig",
            "1 TL Honig",
            "1 TL Senf",
            "1/2 TL Orangenschale",
            "Salz",
            "Pfeffer"
        ]
    },

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
        "Die Kartoffeln in kleine Würfel schneiden, mit Salz und Wasser bedecken, aufkochen und ca. 8 min garen, abgießen und ca. 10 min (am besten auf einer flachen Fläche) ausdampfen lassen.",

        "In der Zwischenzeit den Ofen auf 200°C Umluft vorheizen.",

        "Die Kartoffeln mit den restlichen Zutaten vermengen, auf ein mit Backpapier belegtes Backblech nicht überlappend verteilen und im vorgeheizten Backofen ca. 30 min goldbraun backen. In den letzten 5 min auf Grill knusprig backen und nach der Hälfte der Zeit einmal wenden.",

        "Die Zwiebel schälen und in kleine Würfel hacken. Die Strünke von den Weintrauben entfernen, halbieren und die Birnen in Würfel schneiden.",

        "Für das Dressing alle Zutaten mit einem Schneebesen gut verrühren.",

        "Die Kartoffeln in eine große Schüssel geben, das Gemüse, den Salat und das Dressing hinzufügen und vermengen. Den Käse würfeln, vorsichtig unterheben und mit den Nüssen servieren.",
    ]
},

{
id: "9",
    title: "Crispy Chicken Salad",
    category: ["Salate"],
    image: "images/Crispy-Chicken-Salad.jpeg",
                     time:{
    preparation:"40 min",
    cooling: "2 Std",
    cooking: "20 min",
    total:"3 Std."
},
related: ["45", "7", "20"],
    portions: "6 Portionen",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Frisches, buntes und knackiges Gemüse mit saftigem Hähnchen in knuspriger Panade.",

 ingredients: {
    "Hähnchen": [
        "3 Hähnchenbrustfilets",
        "200g Joghurt",
        "1 TL Knoblauchpulver",
        "1 TL Paprikapulver",
        "1 TL italienische Kräuter",
        "1/4 TL Zitronenschale",
        "Salz",
        "Pfeffer"
    ],

    "Panade": [
        "40g Mehl",
        "10g Speisestärke",
        "1/2 TL Paprikapulver",
        "1/2 TL Knoblauchpulver",
        "100g Paniermehl",
        "Salz",
        "Pfeffer",
        "neutrales Öl",
    ],

    "Salat": [
        "1 Romanasalat",
        "400g Kirschtomaten",
        "1 Salatgurke",
        "1 Avocado",
        "1 rote Zwiebel",
        "1 rote Spitzpaprika",
        "60g Parmesan",
     
    ],

    "Dressing":[
        "80g Joghurt",
        "2 TL Olivenöl",
        "2 EL Wasser",
        "1 EL getrocknete Salatkräuter",
        "1 TL Balsamicoessig",
        "1/2 TL Knoblauchpulver",
        "1/2 TL Senf",
        "Salz",
        "Pfeffer"
    ]
},

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
       
       {
        text: "Die Filets längs halbieren, sodass flachere und möglichst gleichmäßig dicke Stücke entstehen.",
       },

{
    text:"Den Joghurt mit den Gewürzen vermischen und über die Hähnchenstücke in einen flachen Behälter geben. Alles gut einmassieren, sodass das Fleisch vollständig bedeckt ist. Abdecken und für 2-3 Stunden im Kühlschrank marinieren lassen.",
},

"Etwa kurz vor Ende der Marinierzeit den Romanasalat für den Salat klein schneiden, waschen und gut trocknen. Die Zwiebel schälen und fein hacken. Die Gurke und die Paprika in kleine Würfel schneiden, die Avocado schälen, entkernen und ebenfalls würfeln. Die Tomaten je nach Größe halbieren oder vierteln und den Parmesan hobeln.", 

{
    text:"Alles zusammen in eine große Schüssel geben.",
    images: 
    ["images/wow.jpeg"]
},

"Für die Panade zwei Teller vorbereiten: Auf dem ersten Teller das Mehl mit der Speisestärke und den Gewürzen vermischen. Auf dem zweiten Teller das Paniermehl verteilen.",

"Währenddessen so viel Öl in einer Pfanne bei mittlerer Hitze erhitzen, dass der Boden <b>gerade so</b> bedeckt ist.",

"Die Hähnchenstücke etwas abtropfen lassen und gegebenenfalls leicht abstreifen. Zuerst im Mehl wenden, sodass sie leicht bedeckt sind, anschließend mehrfach im Paniermehl wenden und die Panade gut andrücken. Die panierten Hähnchenstücke in die Pfanne geben und bei mittlerer Hitze ca. 5 Minuten pro Seite goldbraun braten. Nach dem Braten etwa 5 Minuten ruhen lassen und anschließend in mundgerechte Stücke schneiden.",

"Während das Hähnchen ruht, alle Zutaten für das Dressing miteinander verrühren, bis ein cremiges Dressing entsteht. Dieses über den Salat geben und alles gut vermengen.",

"Zum Servieren den Salat auf Tellern anrichten und das knusprige Hähnchen darauf verteilen.",

    ],
},

{
    id: "10",
    title: "Dreierlei Karlsbader Schnitte",
    category: ["herzhaftes Gebäck"],
    image: "images/Karlsbader-Schnitte.jpeg",
    time:{
        preparation:"5 min",
        baking:"15 min",
        total:"20 min"
    },
    related: ["42", "36", "27"],
    portions: "20 Brote",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Drei verschiedene Varianten. Aber eins haben sie alle gemeinsam: Schnell, einfach und super lecker!",

    ingredients: {
        " ": [
            "1 großes Weißbrot (z.B. 750g Brotbackmischung oder 20 Scheiben Toastbrot)"
        ],

        "Schinken, Ei (8 Brote)": [
            "4 Scheiben Prosciutto Cotto (ca. 115g)",
            "4 Scheiben Emmentaler (ca. 125g)",
            "8 Eier"
        ],

        "Salami (6 Brote)": [
            "30 kleine Scheiben Edelsalami (ca. 100g)",
            "6 Scheiben Schmelzkäse"
        ],

        "Schinken, Ananas": [
            "3 Scheiben Prosciutto Cotto (ca. 85g)",
            "6 Scheiben Ananas",
            "6 Schmelzkäsescheiben",
        ],

        "Nach Belieben": [
            "Paprikapulver edelsüß"
        ]
    },

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
        "Den Ofen auf 180°C Ober-/Unterhitze vorheizen.",

        "Das Brot in Scheiben schneiden und auf einem mit Backpapier belegten Backblech verteilen.",

        "Nach Belieben belegen, z.B. 1. halbe Scheibe Schinken, halbe Scheibe Emmentaler und Spiegelei; 2. 5 Scheiben Salami und 1 Scheibe Schmelzkäse; 3. halbe Scheibe Schinken, (eine Scheibe Ananas), 1 Scheibe Schmelzkäse und evtl. mit etwas Paprikapulver bestreuen.",

        "Die Brote im Ofen ca. 10–15 min backen, bis der Käse schön geschmolzen ist.",

        "Für die Ei-Variante in der Zwischenzeit die Spiegeleier braten. Dafür etwas Öl in einer Pfanne erhitzen, die Eier hineinschlagen, ca. 5 min braten, umdrehen und ca. 2 min fertig braten (für ein festes Eigelb).",
    ]
},


{
    id: "11",
    title: "Brezel Hawaii",
    category: ["herzhaftes Gebäck"],
    image: "images/brezel-hawaii.jpeg",
    time:{
        preparation:"15 min",
        baking:"15 min",
        total:"30 min"
    },
    related: ["2", "19", "41"],
    portions: "3 Stück",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Fluffiger Brezelteig getoppt mit salzigem Schinken, saftiger Ananas und leckerem Käse.",

    ingredients: [
        "3 80g-gelaugte <a href='recipe.html?id=35'>Brezelteiglinge</a> (alternativ 3 angetaute TK-Brezeln)",
        "30g Kochschinken",
        "50g Dosenananas",
        "120g geriebener Gouda (z.B. mittelalt)",
    ],

    steps: [
        "Den Ofen mind. 15 min auf 230°C Ober-/Unterhitze vorheizen.",

        "Die Ananasstücke in kleine Würfel schneiden und den Schinken in kleinere Stücke reißen.",

        "Ca. 3/4 des Käses gleichmäßig über den Brezeln verteilen, die Ananas und den Schinken darauf verteilen und den restlichen Käse darüber streuen.",

        "Die Brezeln ca. 15 min im vorgeheizten Backofen backen.",
    ]
},


{
    id: "12",
    title: "Bohneneintopf",
    category: ["Vegetarisch"],
    image: "images/bohneneintopf.jpg",
    time:{
        preparation:"5 min",
        cooking:"40 min",
        total:"45 min"
    },
    related: ["10", "13", "32"],
    portions: "6",
    difficulty: "Einfach",
    rating: 5,
    description: "Leckere Bohnen in würziger Tomatensoße.",

    ingredients: [
        "2 Dosen weiße Bohnen (à 800g)",
        "2 EL Tomatenmark",
        "400g gehackte Tomaten",
        "400g Tomate al Frito",
        "125ml Gemüsebrühe",
        "6 Knoblauchzehen",
        "2 Zwiebeln",
        "2 TL Kreuzkümmelpulver",
        "1 TL Paprikapulver",
        "1/2 TL Kurkumapulver",
        "1/4 TL Ingwerpulver",
        "1 TL getrocknete Petersilie",
        "Salz",
        "Pfeffer",
    ],

    steps: [
        "Die Zwiebeln schälen und fein hacken. Den Knoblauch schälen und pressen.",

        "Etwas Olivenöl in einem beschichteten Topf erhitzen und die Zwiebeln bei mittlerer bis hoher Hitze ca. 5 min glasig dünsten.",

        "Den Knoblauch dazugeben und ca. 1 Minute mit anschwitzen. Das Tomatenmark unterrühren und ca. 2 min mitbraten. Die Gewürze, Salz und Pfeffer dazugeben und ca. 30 sek unterrühren und mit anschwitzen.",

        "Mit Gemüsebrühe und gehackten Tomaten ablöschen, aufkochen und auf mittlerer Hitze ca. 10 min köcheln.",

        "In der Zwischenzeit die Bohnen abgießen.",

        "Die Bohnen und das Tomate al Frito dazugeben, erneut aufkochen und ca. 20 min bei mittelhoher Hitze unter gelegentlichem Rühren fertig köcheln.",

        "Die Petersilie unterrühren, salzen, pfeffern und mit Brötchen servieren.",
    ]
},


{
    id: "13",
    title: "Brokkolisuppe",
    tips: [
        "Dazu schmecken Garnelen oder Pfannenbrot hervorragend.",
        "Falls dir die Suppe zu dick ist, kannst du nach dem Kochen noch mehr Gemüsebrühe dazugeben."
    ],
    category: ["Suppen & Eintöpfe", "Vegetarisch"],
    image: "images/brokkolisuppe.jpeg",
    time:{
        preparation:"10 min",
        cooking:"40 min",
        total:"50 min"
    },
        related: ["29", "5", "42"],
    portions: "6 Portionen",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Cremige, warme Brokkolisuppe. Perfekt für kalte Tage.",

    ingredients: {
        "": [
            "170g TK-Brokkoli",
            "1,5kg Kartoffeln",
            "2 Zwiebeln",
            "1,2l Gemüsebrühe",
            "250ml Kochsahne",
            "1/2 TL Knoblauchpulver",
            "Salz",
            "Pfeffer"
        ],

      
    },
    steps: [
        "Die Zwiebeln schälen und vierteln. Die Kartoffeln schälen und in kleine Würfel schneiden.",

        "Etwas Öl in einem großen Topf erhitzen und die Zwiebeln darin ca. 3 min anbraten, die Kartoffeln dazugeben und mit der Gemüsebrühe ablöschen. Den Deckel schließen und die Kartoffeln für circa 20 Minuten gar kochen.",

        "Wenn die Kartoffeln gar sind, den Brokkoli dazugeben und weitere 10 Minuten köcheln lassen.",

        "Den Topf vom Herd nehmen, die Sahne dazugeben. Salzen, pfeffern, das Knoblauchpulver dazugeben und alles gut durchpürieren.",

        "Noch einmal aufkochen lassen und servieren.",
    ]
},


{
    id: "0",
    title: "Bruschetta",
    tips: [
        "Je länger das Topping zieht, desto besser und intensiver schmeckt es.",
    ],
    category: ["Brot", "Vegetarisch"],
    image: "images/bruschetta.jpg",
    time:{
        preparation:"10 min",
        cooling:"2 Std.",
        total:"2 Std. 10 min"
    },
        related: ["1", "19", "32"],
    portions: "12 Portionen",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Knusprig-fluffiges italienisches Brot mit herrlich aromatischem Tomatentopping.",

    ingredients: {
        "": [
            "7 große Tomaten",
            "5 Knoblauchzehen",
            "2 TL getrockneter Basilikum",
            "5 TL Olivenöl",
            "Salz",
            "Pfeffer"
        ],

      
    },
    steps: [
        "Die Tomaten fein würfeln und in eine Schüssel mit Deckel geben.",

        "Den Knoblauch schälen und zu den Tomaten pressen. Mit Salz und Pfeffer würzen, den Basilikum sowie das Öl dazugeben, alles vermengen, mit dem Deckel verschließen und mind. eine Stunde im Kühlschrank ziehen lassen.",

        "Das Brot in Scheiben schneiden, mit etwas Olivenöl bestreichen und in einer beschichteten Pfanne ohne Öl kurz anrösten.",

        "Das Topping auf die Brotscheiben geben und servieren.",
    ]
},


{
    id: "14",
    title: "Cannelloni Caprese",
    category: ["Pasta"],
    image: "images/canneloni-caprese.jpeg",
    time:{
        preparation:"30 min",
        cooking:"30 min",
        total:"1 Std."
    },
        related: ["1", "4", "26"],
    portions: "6 Portionen",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Leckere Cannelloni, gefüllt mit saftigen Tomaten und geschmolzenem Mozzarella, in einer cremigen Tomatensauce.",

    ingredients: {
        "Nudeln": [
            "270g Cannelloni (30 Stück)",
            "5 Pck. Mini-Mozzarella (à 250g)",
            "450g Datteltomaten",
            "250g geriebener Käse (z.B. Gouda)"
        ],

        "Sauce": [
            "500g passierte Tomaten",
            "1 EL Tomatenmark",
            "3 Knoblauchzehen",
            "2 EL Olivenöl",
            "500ml Kochsahne",
            "1 TL italienische Kräuter",
            "Salz",
            "Pfeffer"
        ],
    },

    steps: [
        "Den Knoblauch schälen und pressen.",

        "Das Olivenöl in einem kleinen Topf erhitzen. Den Knoblauch bei mittlerer Hitze ca. 30 sek in dem Öl anschwitzen, bis es duftet. Das Tomatenmark dazugeben und unter Rühren ca. 1–2 min mitrösten. Mit den passierten Tomaten ablöschen, die italienischen Kräuter dazugeben, aufkochen und bei mittlerer Hitze ca. 15 min sanft köcheln lassen.",

        "In der Zwischenzeit den Ofen auf 200°C Ober-/Unterhitze vorheizen, die Tomaten halbieren und den Mozzarella abgießen.",

        "Jede Cannelloni mit 1 Mozzarellakugel, 1 Tomatenhälfte, 1 Mozzarellakugel und 1 Tomatenhälfte füllen. Dies solange wiederholen, bis alle Cannelloni gefüllt sind.",

        "Die Cannelloni einschichtig in eine große Auflaufform (ca. 40cm x 30cm) geben.",

        "Die restlichen Mozzarellakugeln halbieren. Die Tomatensauce vom Herd nehmen, ordentlich salzen und pfeffern und die Sahne unterrühren. Die Sauce gleichmäßig über die Cannelloni gießen, den geriebenen Käse darüber streuen und die halbierten Mozzarellakugeln gleichmäßig darüber verteilen.",

        "Die Cannelloni im vorgeheizten Backofen ca. 30 min backen, bis der Käse goldbraun ist und die Nudeln weich sind."
    ]
},

{
    id: "15",
    title: "Cheesescones",
    tips: [
    "Lieber zu wenig als zu viel kneten, damit die Butter nicht zu warm wird."
],
    category: ["herzhaftes Gebäck"], 
    image: "images/cheesescone.jpeg",
            time:{
    preparation:"10 min",
   baking:"15 min",
   cooling: "15 min",
    total:" 40 min"
},
    related: ["17", "16", "37"],
    portions: "8 Stück",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Der englische Teeklassiker, mal anders.",

    /* 🍽️ ZUTATEN */
    ingredients: [
        
        "250g Mehl (Type 405)",
        "60g sehr kalte Butter",
        "1 Pck. Backpulver",
        "80g kräftiger Käse (z.B. Red Leicester)",
        "150ml kalte Milch (und etwas mehr zum Bestreichen)",
        "1/2 TL Salz",
        "1 TL Paprikapulver",
    ],

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
        "Den Ofen auf 220°C Ober-/Unterhitze vorheizen.",

"Das Mehl mit dem Salz und dem Paprikapulver in einer Schüssel vermengen. Die Butter in sehr kleine Stücke schneiden und alles mit den Händen zu einem krümeligen Sand kneten und reiben.",

"Den Käse fein dazureiben und unterrühren.",

"In der Mitte eine Mulde formen, die Milch hineinschütten und mit einem Löffel das Mehl unterheben, nur solange, bis die Milch sich gut verteilt hat. (Jetzt solltest du eine Art großen Klümpchen-Teig haben)",

"Etwas zusammendrücken, damit man ihn auf eine Arbeitsfläche geben kann. Dann den Teig zu einem ca. 2 cm dicken Rechteck vorsichtig ausrollen, das obere Drittel zur Mitte falten und das untere Drittel darüber klappen. Den Teig um 90 Grad drehen, erneut vorsichtig zu einem ca. 2 cm dicken Rechteck ausrollen, wieder das obere Drittel zur Mitte falten und das untere Drittel darüber klappen. Noch einmal um 90 Grad drehen und zu einem ca. 3 cm dicken Rechteck ausrollen.",

"Mit einem Glas Kreise ausstechen, hierbei nur herunterdrücken und nicht drehen, sodass die Schichten an den Seiten nicht verschlossen werden. (Alternativ kannst du auch Vierecke ausschneiden)",

"<i><b>Wenn du noch etwas Zeit hast, stell die Scones am besten noch 10-15 min in den Kühlschrank, sodass die Butter schön kalt ist und die Scones besser aufgehen.</b></i>",

"Die Teiglinge auf ein Backblech mit Backpapier legen, mit etwas Milch bestreichen. Die Ofentemperatur auf 200 Grad reduzieren, die Scones in den Ofen schieben und im vorgeheizten Ofen ca. 12-15 min goldbraun backen.",
       
    ]

    
},

{
    id: "16",
    title: "Cordon bleu",
    tips: [
    "Die fertigen Cordon bleues kannst du im Ofen bei ca. 50°C auf einem Kuchenrost warm halten.",
],
    category: ["Fleisch"], 
    image: "images/cordon-bleu.jpeg",
        time:{
    preparation:"30 min",
    cooking:"30 min",
    total:" 1 std"
},
    related: ["44", "46", "12"],
    portions: "7 Stück",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Das unwiderstehliche Schnitzelupgrade.",

    /* 🍽️ ZUTATEN */
    ingredients: [
        
        "7 Putenschnitzel",
        "7 Scheiben Prosciutto Cotto",
        "7 Scheiben Käse (z.B. Emmentaler oder Gouda)",
        "3 Eier (Größe L)",
        "180g Paniermehl",
        "60g Mehl",
        "10g Speisestärke",
        "1 TL Paprikapulver",
        "1/2 TL Knoblauchpulver",
        "Salz",
        "Pfeffer",
        "Butterschmalz",
    ],

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [

"Die Schnitzel jeweils auf einem großen Brett zwischen zwei Stück Frischhaltefolie legen und mit einem Fleischklopfer sehr dünn klopfen.",

"Jedes Schnitzel auf beiden Seiten ordentlich salzen und pfeffern und beiseite stellen.",

"Für die Panierstraße Mehl, Stärke, Knoblauch und Paprikapulver vermengen und auf dem ersten Teller verteilen, das Ei verquirlt mit Salz und Pfeffer auf dem nächsten und das Paniermehl auf dem letzten tiefen Teller verteilen.",

"In einer großen Pfanne 2 große EL Butterschmalz auf mittelhoher Hitze erhitzen.",

"Die Käsescheiben vierteln oder halbieren (je nach Größe des Schnitzels) und die 4 Viertel bzw. 2 Hälften aufeinander legen. Den Stapel auf die eine Hälfte der Schinkenscheibe legen, die andere Hälfte darüber klappen. Das Schinkenpäckchen auf die eine Hälfte des Schnitzels legen, dabei einen kleinen Rand lassen. Die andere Hälfte des Schnitzels darüber klappen und an den Rändern gut andrücken.",

"Jedes Cordon bleu im Mehl und in dem Ei wenden, ins Paniermehl geben, mehrfach wenden und gut andrücken.",

"In die heiße Pfanne geben und ca. 6 min pro Seite in genügend (sodass der Boden gut bedeckt ist) Butterschmalz ausbacken.",

    ]

},

{
    id: "17",
    title: "Cowboy Shakshuka",
    category: ["Vegetarisch"], 
    image: "images/Cowboy-shakshuka.jpeg",
       time:{
    preparation:"5 min",
    cooking:"30 min",
    total:" 35 min"
},
    related: ["37", "31", "42"],
    portions: "4 Portionen",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Western-Bohnenpfanne im Shakshuka-Style.",

    /* 🍽️ ZUTATEN */
    ingredients: [
        
        "3 Dosen baked beans (à 400g)",
        "1 TL Worcestershire Sauce",
        "2 große weiße Zwiebeln",
        "2 große Knoblauchzehen",
        "125g Speckwürfel",
        "1 TL Paprikapulver rosenscharf",
        "1 TL Paprikapulver edelsüß",
        "1/4 TL getrockneter Thymian",
        "4 Eier",
        "Olivenöl",
        "Salz",
        "Pfeffer",

    ],

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
        "Den Knoblauch schälen und pressen.",

"Die Zwiebeln schälen und grob hacken. Den Knoblauch ebenfalls schälen und fein hacken.",

"Eine Pfanne mit etwas Olivenöl erhitzen, die Zwiebeln dazugeben und ca. 2-3 min leicht braun braten.",

"Den Speck hinzufügen und ca. 3 min mitbraten. Die Gewürze und den Knoblauch unter Rühren mitrösten, bis es duftet.",

"Die Bohnen dazugeben, alles mit Salz, Pfeffer, Worcestersauce und Thymian vermischen, aufkochen und auf mittlerer Hitze ca. 3 min köcheln.",

"Nochmals gut durchmischen und glatt streichen. Mit einem Löffel 4 Mulden für die Eier hineindrücken, die Eier wie Spiegeleier hineinschlagen und bei geschlossenem Deckel auf niedriger bis mittlerer Hitze ca. 20 min sanft köcheln, bis die Eier gar sind.",

"Nach Belieben mit Toast servieren.",
  ]

},
{
    id: "18",
    title: "Cracker",
    category: ["Snacks"], 
    image: "images/cracker.jpeg",
    time:{
    preparation:"10 min",
    baking:"10 min",
    cooling:"2 Std.",
    total:" 3 Std."
},
    related: ["10", "9", "3"],
    portions: "1 Blech",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Knusprige Cracker, in leckerer Würze.",

    /* 🍽️ ZUTATEN */
    ingredients: {

       "Mürbeteig":  [ 
        "40g Mehl (Type 405)",
        "20g sehr kalte Butter",
        "10ml eiskaltes Wasser",
    ],

        "Paste": [ 
        "1 EL Olivenöl",
        "1 TL Sojasauce",
        "1 TL Salz",
        "1/2 TL Paprikapulver edelsüß",
        "1/2 TL Knoblauchpulver",

    ],

    "Panade": [
        "1 TL Salz",
        "1/4 TL Paprikapulver",
        "1/4 TL Knoblauchpulver edelsüß"

    ]
},

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [

"Mehl, Butter und Salz für den Teig mit den Händen verkneten, sodass krümeliger „Sand“ entsteht. Eine Mulde in der Mitte formen, Wasser dazugeben und die Mehlkrümel von der Seite unterschieben (am besten nicht mehr kneten), bis alles gerade so zusammenhält. In Frischhaltefolie wickeln und für mind. 2 Stunden im Kühlschrank ruhen lassen. (Am besten über Nacht)",

"Den Teig aus dem Kühlschrank nehmen, damit er ca. 30 Minuten vor dem Ausrollen aus dem Kühlschrank kommt. In der Zwischenzeit den Ofen auf 200°C Ober-/Unterhitze vorheizen und ein Backblech mit Backpapier belegen.",

"Dann den Teig auf einer bemehlten Arbeitsfläche circa 3 mm dick ausrollen und kleine Formen ausstechen. (Alternativ kleine Vierecke ausschneiden)",

"Für die Paste alle Zutaten gut miteinander vermengen und die Cracker damit bestreichen.",

"Die Cracker im vorgeheizten Backofen ca. 9 min backen.",

"Währenddessen die Zutaten für die Panade in einer Box mit Deckel vermengen, die warmen Kekse dazugeben und einmal ordentlich durchschütteln.",
  ]

},

{
    id: "19",
    title: "Eiersalat",
    category: ["Aufstriche & Dips"], 
    image: "images/eiersalat.jpeg",
        time:{
    preparation:"10 min",
    cooking:"10 min",
    total:" 20 min"
},
    related: ["10", "13", "32"],
    portions: "10 Portionen",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Der Eierklassiker, verfeinert mit leckeren Speckwürfeln.",

    /* 🍽️ ZUTATEN */
    ingredients: [
        
        "10 Eier",
        "25g Mayonnaise",
        "200g Schmand",
        "1 TL Senf",
        "6 Cornichons",
        "130g Tiroler Speckwürfel",
        "4 TL saure Gurkenwasser",
        "Schnittlauch",
        "etwas Öl",
        "Salz",
        "Pfeffer"
    ],

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [

"Die Eier ca. 10 min hart kochen. Abschrecken und etwas abkühlen lassen.",

"Währenddessen etwas Öl in einer beschichteten Pfanne erhitzen und die Speckwürfel darin ca. 4 min auf höchster Stufe braten.",

"In der Zwischenzeit den Schmand mit der Mayonnaise, dem Senf und dem Gurkenwasser verrühren. Die Cornichons klein schneiden, den Schnittlauch mit einer Schere in feine Ringe schneiden, den Speck mitsamt der Bratflüssigkeit dazugeben und unterrühren.",

"Die Eier schälen und im Eierschneider in Scheiben schneiden, um 90 Grad drehen und erneut durchschneiden. Die Eier unterheben, salzen und pfeffern und nach Belieben mit Schnittlauch garnieren.",

    ]

},

{
    id: "20",
    title: "Veganer gebratener Blumenkohl",
    category: ["Vegan"], 
    image: "images/Veganer-gebratener-Blumenkohl.jpeg",
        time:{
    preparation:"15 min",
    cooking:"30 min",
    total:" 45 min"
},
    related: ["47","3","2"],
    portions: "6 Portionen",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Blumenkohl in knuspriger Panade, ganz ohne Ei.",

    /* 🍽️ ZUTATEN */
    ingredients: {

        "":[
            "1 großer Blumenkohl",
            "45g Mehl"
    ],

    "Eiersatz": [
    "125g Speisestärke",
    "1 TL Senf",
    "1 TL Paprikapulver",
    "1 TL Knoblauchpulver",
    "1 TL Salz",
    "Pfeffer"
    ],

    "Paniermehl": [
        "150g Paniermehl",
        "etwas Salz"
    ]
},

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [

"Einen großen Topf mit Salzwasser zum Kochen bringen und den Blumenkohl in grobe Röschen schneiden.",

"Die Temperatur des Wassers etwas verringern, sodass es nur noch siedet, und die Röschen darin ca. 2 min blanchieren. Mit einer Schaumkelle herausholen, in ein Sieb geben, mit kaltem Wasser abschrecken und gut abtrocknen.",

"Das Mehl in eine kleine Schale geben. Die Stärke in einer Schüssel mit ca. 120ml kaltem Wasser anrühren (sodass es eine Konsistenz wie ein dünner Crêpe-Teig bekommt). Falls die Mischung im Laufe des Panierens zu dick wird, einfach noch etwas Wasser unterrühren.",

"Die Stärkemischung mit dem Senf, dem Paprikapulver, dem Salz, dem Pfeffer und dem Knoblauchpulver vermengen. Das Paniermehl in einer Schüssel mit etwas Salz vermengen und eine Pfanne mit reichlich Öl erhitzen, sodass der Boden gut bedeckt ist.",

"Jedes Röschen zuerst im Mehl wenden, dann mit einer Gabel in die Stärkemischung tauchen und abtropfen lassen, sodass es gut benetzt ist. Daraufhin im Paniermehl wenden und gut andrücken. Jedes Röschen ca. 5-6 min bei mittlerer Hitze goldbraun anbraten, dabei immer wieder wenden. Auf etwas Küchenpapier abtropfen lassen und nach Belieben mit Ketchup servieren.",
    
    ]

},

{
    id: "21",
    title: "Eifreies Frenchtoast",
    tips: [
        "Die fertigen Brote kannst du im 50°C warmen Ofen warm halten, bis die anderen fertig sind."
    ],
    category: ["Brot"], 
    image: "images/Eifreies-Frenchtoast.jpeg",
        time:{
    preparation:"12 min",
    cooking:"18 min",
    total:" 30 min"
},
    related: ["42", "49", "1"],
    portions: "6 Stück",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Keine Eier zu Hause, aber trotzdem Lust auf Frenchtoast? Das geht ganz einfach mit diesem Rezept!",

    /* 🍽️ ZUTATEN */
    ingredients: {

        "Tränke":[
            "250ml Milch",
            "1 TL Mehl",
            "20g Stärke",
            "1/4 TL Natron",
            "1 TL Balsamicoessig",
            "1/2 TL Paprikapulver",
            "1/2 Knoblauchpulver",
            "1/2 TL Kurkuma",
            "1 Prise Muskatnuss",
            "Salz",
            "Pfeffer",
    ],

    "Brot": [
    "12 Scheiben Weißbrot oder Toastbrot",
    "6 Scheiben Kochschinken",
    "6 Scheiben Gouda",
    ],

    "Ausbacken": [
        "Butter"
    ]
},

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
        "Für die Tränke alle Zutaten in einer flachen Schale mit einem Schneebesen verrühren, bis keine Klümpchen mehr zu sehen sind.",

"Für die Brote je eine Scheibe Toast mit einer Scheibe Schinken und einer Scheibe Gouda belegen und eine zweite Brothälfte daraufklappen.",

"20g Butter in einer Pfanne erhitzen.",

"Jedes Brot nur ganz kurz in die Tränke tauchen, eher dippen und etwas ausdrücken (es saugt sich sehr schnell voll).",

"Je zwei Brote in die Pfanne geben, gut andrücken und bei mittlerer Hitze ca. 3 min pro Seite ausbacken. (Zwischendurch die Tränke immer mal wieder rühren, da sich am Boden die Stärke absetzt)",

"Erneut 20g Butter in der Pfanne erhitzen und die nächsten Brote ausbacken. Solange wiederholen, bis alle Brote fertig sind."
    ]

},

{
    id: "22",
    title: "einfacher Couscoussalat",
    category: ["Vegetarisch", 
        "Salate",
        "Vegan"
     ],
    image: "images/einfacher-Couscoussalat.jpeg",
        time:{
    preparation:"20 min",
    cooking:"5 min",
    total:" 25 min"
},
  related: ["21", "49", "15"],
    portions: "8 Portionen",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Schneller Couscoussalat. Auch super für Meal-Prep.",

    /* 🍽️ ZUTATEN */
    ingredients: [

     
            "500g Couscous",
            "750ml Gemüsebrühe",
            "1 TL Kreuzkümmelpulver",
            "1 TL Paprikapulver edelsüß",
            "1/2 TL Korianderpulver",
            "1/2 TL Ingwerpulver",
            "500g Kirschtomaten",
            "1 Salatgurke",
            "1 Zwiebel",
            "Salz",
            "Pfeffer",
    ],

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
        "Den Couscous nach Packungsbeilage zubereiten.",

"In der Zwischenzeit die Zwiebel schälen und fein hacken, die Gurke sowie die Paprika in Würfel schneiden und die Tomaten je nach Größe halbieren oder vierteln.",

"Den Couscous mit den Gewürzen vermengen, das Gemüse unterheben und direkt servieren oder noch etwas ziehen lassen.",

    ]

},


{
    id: "23",
    title: "einfaches Wiesnhendl",
    tips: [
        "Alles, was übrig bleibt, kannst du abgekühlt, luftdicht verpackt (z.B. in Alufolie oder einer Box) und dann ca. 2 Tage im Kühlschrank aufbewahren."
    ],
    category: ["Fleisch"], 
    image: "images/einfaches-Wiesnhendl.jpeg",
        time:{
    preparation:"30 min",
    cooling:"30 min",
    baking: "1 std 30min",
    total:"2 Std"
},
  related: ["31", "0", "19"],
    portions: "1 Stück (für ca. 6 Portionen)",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Der leckere Oktoberfestklassiker ganz einfach Zuhause gemacht.",

    /* 🍽️ ZUTATEN */
    ingredients: {
        
        "":[
            "<b>BITTE BEACHTE: Du musst das Hähnchen spätestens am Abend vorher aus dem Tiefkühler in den Kühlschrank legen, damit es antauen kann.</b>",
        ],
        "Hähnchen":[
            "1 TK Brathähnchen (1,2 kg)",
            "15g Salz",
            "1 EL Paprikapulver",
            "1 TL Pfeffer",
            "1/2 TL Majoran",
            "1/2 TL Knoblauchpulver",
            "70g sehr weiche Butter",
        
    ],

    "Füllung": [
    "1 kleine Zwiebel",
    "10g Butter",

    ],

    "Bestreichen": [
        "30g weiche Butter",
        "1/2 TL Paprikapulver",
        "1/2 TL Salz",
    ]
},

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
        "Das Hähnchen spätestens am Abend vorher in den Kühlschrank legen, damit es antauen kann.",

"Am nächsten Tag das Hähnchen von innen und außen gut mit Küchenpapier trocken tupfen. Eine Zwiebel schälen und halbieren. Das Salz mit dem Pfeffer, dem Majoran, der Butter, dem Knoblauchpulver und dem Paprikapulver vermengen und das Hähnchen rundherum, von innen und außen, gut mit der Würze einreiben.",

"Die Zwiebel mit der Butter in den Bauch geben und das marinierte Hähnchen für ca. 30min im Kühlschrank ruhen lassen. In der Zwischenzeit den Ofen auf 200°C Ober/Unterhitze vorheizen.",

"Das Hähnchen mit der Brustseite nach oben auf einen Rost legen und so in den vorgeheizten Backofen geben. Ein Backblech mit etwas Wasser (ca. 1 cm) eine Schiene darunter schieben, um das Fett aufzufangen. Das Hähnchen ca. 1 1/2 Std. min schön knusprig braun backen. Dabei das Hähnchen alle 15min mit der Bratflüssigkeit übergießen.",

"Die Butter schmelzen und mit dem Paprikapulver und dem Salz vermengen. 30min vor Ende nicht mit der Bratflüssigkeit übergießen, sondern mit der Butterwürze bestreichen.",

"5 min weiter backen, das Hähnchen wenden und von dieser Seite ebenfalls mit der Butterwürze bestreichen. 15min vor Ende nochmal mit der Bratflüssigkeit übergießen und in den letzten 3 min auf höchster Grillstufe fertig backen, damit die Haut extra knusprig wird.",

    ]

},

{
    id: "24",
    title: "Erdbeermuffins",
    category: ["süßes Gebäck"], 
    image: "images/Erdbeermuffins.jpeg",
        time:{
    preparation:"5 min",
    baking: "15 min",
    cooling:"(60 min)",
    total:" 20 min"
},
  related: ["2", "5", "9"],
    portions: "6 Stück",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Leckere, schnelle Muffins mit Erdbeergeschmack.",

    /* 🍽️ ZUTATEN */
    ingredients: {

        "Muffins":[
            "100g Mehl (Type 405)",
            "50g Zucker",
            "3g Backpulver",
            "2g Natron",
            "1 Prise Salz",
            "15g Kaba Erdbeerpulver",
            "1 TL Vanilleextrakt",
            "100ml Milch",
            "40ml Öl",
            "1 TL Apfelessig",
        
    ],

    "<i>Glasur (optional)": [
    "30g Puderzucker",
    "10g Erdbeerpulver",
    "2 EL Milch</i>",

    ]
},

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
        "Den Ofen auf 180°C Ober/Unterhitze vorheizen und ein Muffinblech mit Papierförmchen auskleiden.", 

"Alle Zutaten für den Teig in einer Schüssel mit einem Schneebesen zu einem glatten Teig rühren. (Nur solange, bis sich alle Zutaten vereint haben)",

"Den Teig mit 2 Löffeln auf die Förmchen verteilen und auf mittlerer Schiene im vorgeheizten Backofen ca. 15min backen. (Stäbchenprobe)",
 

"<i>Optional: Vollständig abkühlen lassen. Dann für die Glasur den Puderzucker mit dem Pulver vermengen und die Milch dazugeben, sodass eine dickflüssige Masse entsteht. Auf den vollständig abgekühlten Muffins verteilen und trocknen lassen.</i>",

    ]


    
},

{
    id: "25",
    title: "Erdbeersalat",
    category: ["Salate", "Vegetarisch"], 
    image: "images/Erdbeersalat.jpeg",
        time:{
    preparation:"30 min",
    total:" 30 min"
},
  related: ["24", "33", "14"],
    portions: "6 Portionen",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Süße Erdbeere trifft auf salzigen Feta, knusprige Kichererbsen und frischen Salat.",

    /* 🍽️ ZUTATEN */
    ingredients: {

        "Salat":[
            "500g Erdbeeren",
            "100g Feldsalat",
            "100g Babyblattspinat",
            "2 Avocados",
            "1 Bund Frühlingszwiebeln",
            "180g Feta",
            "Kürbiskerne",
            
        
    ],

    "Kichererbsen": [
    "1 Dose Kichererbsen (à 400g)",
    "1 TL neutrales Öl",
    "1/2 TL Paprikapulver",
    "1/2 TL Salz",
    "Pfeffer"

    ],

    "Dressing": [
        "3 EL Olivenöl",
        "2 TL Balsamicoessig",
        "1 TL Ahornsirup",
        "1 EL Wasser",
        "1 TL Orangenschale",
        "1 TL fein gehackte Minze",
        "Salz",
        "Pfeffer"
    ]
},

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
        "Die Kichererbsen abgießen, abspülen und gut abtrocknen. Mit Salz, Pfeffer, Paprikapulver und Öl vermengen, im Airfryer nicht überlappend verteilen und bei 190 Grad ca. 20min knusprig backen. (Dabei ca. alle 5min durchschütteln)",

"In der Zwischenzeit die groben Strünke vom Salat und dem Spinat entfernen, die Blätter etwas kleiner zupfen, waschen und trocken tupfen. Die Lauchzwiebeln in feine Ringe schneiden. Die Erdbeeren putzen, den Strunk entfernen und in Scheiben schneiden. Die Avocados schälen, den Kern entfernen und sowie den Feta klein würfeln. Alles in eine Schale geben.",

"Für das Dressing das Öl mit den restlichen Zutaten zu einem cremigen Dressing verrühren. Das Dressing unter den Salat rühren und die Kichererbsen unterheben.", 

    ]


    
},


{
    id: "26",
    title: "Erdnuss-Bananen-Kuchen",
    tips: [
        "Du kannst diesen Kuchen auch wunderbar mit gefrorenen Bananen zubereiten. Dann nimmst du sie am Abend vorher aus dem Tiefkühler und lässt sie über Nacht im Kühlschrank auftauen.",
        "Bei ungefrorenen Bananen gilt: Je brauner die Banane, desto süßer und aromatischer ist sie.",
    
    ],
    category: ["süßes Gebäck"], 
    image: "images/Erdnuss-Bananen-Kuchen.jpeg",
        time:{
    preparation:"15 min",
    baking: "1 std",
    cooling: "30min",
    total:" 1 std 45 min"
},
  related: ["21", "38", "17"],
    portions: "1 Kuchen",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Leckerer Bananenkuchen mit herrlichem Nussgeschmack.",

    /* 🍽️ ZUTATEN */
    ingredients: [
        "ca. 300g überreife Bananen",
        "50g Erdnussbutter",
        "2 Eier (Größe L)",
        "30g brauner Zucker",
        "30g weißer Zucker",
        "100ml Milch",
        "50ml neutrales Öl",
        "50g Schokostreusel",
        "220g Mehl (Type 405)",
        "2 TL Backpulver",
        "1/4 TL Zimt",
        "1 Prise Salz",
        "1 TL Vanilleextrakt",
    ],

        

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
        "Die Eier mit dem Zucker ca. 5min mit dem Rührbesen der Küchenmaschine auf höchster Stufe cremig schlagen.",

"In der Zwischenzeit den Ofen auf 180°C Ober/Unterhitze vorheizen und eine Kastenform (25cm x 8cm) gut einfetten.",

"Das Öl langsam zu der Eier-Zuckermasse dazugießen, das Vanilleextrakt hinzufügen und weitere 2 min mitschlagen.",

"Währenddessen die Bananen zerdrücken und mit der Milch und der Erdnussbutter vermengen. Zu der Eimasse geben und ca. 2 weitere Minuten weiterschlagen.",

"Das Mehl mit dem Backpulver, dem Zimt, den Schokostreuseln und dem Salz vermengen und vorsichtig unter die Eimasse heben.",

"Den Teig in eine vorgefettete Kastenform geben, glattstreichen und im vorgeheizten Backofen ca. 60min backen. Nach ca. 15min einmal längs einschneiden. (Stäbchenprobe!!! – Es sollen nur noch vereinzelte feuchte Krümel am Stäbchen kleben. Dann ist der Kuchen fertig)",

"Den Kuchen auf einem Kuchenrost ca. 30min abkühlen lassen, dann vorsichtig aus der Form lösen."

    ]

    
},

{
    id: "27",
    title: "Erdnusscurry",
    category: ["Vegetarisch", "Vegan", "Reis"], 
    image: "images/Erdnusscurry.jpeg",
    time:{
        preparation:"20 min",
        cooking:"30 min",
        total:"50 min"
    },
      related: ["4", "6", "7"],
    portions: "6 Portionen",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Buntes Gemüse in cremiger Erdnusssoße.",

    /* 🍽️ ZUTATEN */
    ingredients: {
    
        "Curry": [
            "1 Zucchini",
            "1 rote Spitzpaprika",
            "2 rote Zwiebeln",
            "2 Knoblauchzehen",
            "2 Karotten",
            "1 Dose Kidneybohnen (à 400g)",
            "1 Brokkoli",
            "1 Dose Kokosmilch (à 400g)",
            "400ml Gemüsebrühe",
            "90g Erdnussbutter",
            "1/2 TL Chiliflocken",
            "1 TL Kreuzkümmelpulver",
            "6g frischer Ingwer",
            "1 TL Paprikapulver edelsüß",
            "1 TL Kurkuma",
            "1/2 TL Limettensaft",
            "2 EL Erdnussöl",
            "Salz",
            "Pfeffer",
        ],

        "Beilage": [
            "260g Basmatireis",
            "<i>optional gehackte Erdnüsse</i>"
        ]
    },

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
        "Die Zwiebeln schälen, vierteln und in Streifen schneiden. Den Knoblauch sowie den Ingwer schälen und fein hacken.",

        "Die Zucchini in mundgerechte Stücke würfeln. Den Strunk vom Brokkoli entfernen und den Kopf in kleine Röschen schneiden. Die Karotten schälen und wie die Paprika in mundgerechte Streifen schneiden.",

        "Die Bohnen abgießen und abspülen.",

        "Das Erdnussöl in einem großen Topf erhitzen. Die Zwiebeln bei mittlerer Hitze ca. 2–3 Minuten glasig dünsten, die Karotten dazugeben und weitere 2–3 Minuten mit anschwitzen. Den Ingwer, den Knoblauch und die Gewürze unterrühren und kurz mitrösten, bis es duftet.",

        "Mit der Gemüsebrühe ablöschen, die Kokosmilch und die Erdnussbutter unterrühren und aufkochen lassen.",

        "Dann den Brokkoli, die Zucchini, die Paprika und die Bohnen hinzugeben, erneut aufkochen und alles bei mittlerer Hitze ca. 20 Minuten sanft köcheln lassen.",

        "Den Limettensaft unterrühren, mit Salz und Pfeffer abschmecken und nach Belieben mit Reis und Erdnüssen servieren."
    ]
},

{
    id: "28",
    title: "Bulgursalat",
    category: ["Vegetarisch", "Vegan", "Salate"], 
    image: "images/Bulgursalat.jpeg",
    time:{
        preparation:"35 min",
        cooking:"10 min",
        total:"45 min"
    },
      related: ["50", "41", "7"],
    portions: "8 Portionen",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Einfacher Bulgursalat mit knackigem Gemüse, cremiger Avocado und einem Hauch von Mexiko.",

    /* 🍽️ ZUTATEN */
    ingredients: {
    
        "Bulgur": [
            "450g Bulgur",
            "1 L Wasser",
            "1 TL Chili con Carne Gewürz",
        ],

        "Gemüse": [
            "2 Dosen Kidneybohnen (à 400g)",
            "1 Dose Mais (à 340g)",
            "1 Salatgurke",
            "500g Datteltomaten",
            "1 Bund Frühlingszwiebeln",
            "2 Avocados",
            "1 TL italienische Kräuter",
            "Salz",
            "Pfeffer",
        ]
    },

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
        "Einen Topf mit dem Wasser und etwas Salz zum Kochen bringen. In der Zwischenzeit den Bulgur in ein Sieb geben und mit kaltem Wasser waschen, bis das Wasser fast klar ist. Den Bulgur in das kochende Salzwasser geben, aufkochen und ca. 10 Minuten bei niedriger Hitze mit geschlossenem Deckel köcheln lassen. Vom Herd nehmen und bei geschlossenem Deckel 5 Minuten ziehen lassen.",

        "Das Chili con Carne Gewürz unter den fertigen Bulgur mengen, in eine große Schüssel geben und etwas abkühlen lassen.",

        "Währenddessen die Bohnen und den Mais in ein Sieb geben, abspülen und gut abtropfen lassen.",

        "Die Gurke und die Avocado in kleine Würfel, die Frühlingszwiebeln in feine Ringe und die Tomaten in Scheiben schneiden.",

        "Alles außer der Avocado mit den italienischen Kräutern, Salz und Pfeffer unter den etwas abgekühlten Bulgur mengen. Mit einem Teil der Avocado toppen und die restliche Avocado dazu servieren."
    ]
},

{
    id: "29",
    title: "Flammkuchenspaghetti",
    category: ["Fleisch", "Pasta"], 
    image: "images/Flammkuchenspaghetti.jpeg",
    time:{
        preparation:"5 min",
        cooking:"30 min",
        total:"35 min"
    },
      related: ["20", "38", "33"],
    portions:"7 Portionen",
    difficulty:"Einfach",
    rating:4.6,
    description:"Flammkuchen trifft Pasta: Spaghetti in cremiger Soße mit knusprigem Speck.",

    /* 🍽️ ZUTATEN */
    ingredients:[
        "600g Spaghetti (Nr. 5)",
        "2 Pck. Crème fraîche (à 200g)",
        "250g Schinkenwürfel",
        "3 rote Zwiebeln",
        "2 Knoblauchzehen",
        "1/2 TL Muskatnuss",
        "etwas neutrales Öl",
        "Salz",
        "Pfeffer",
    ],

    /* 👨‍🍳 ZUBEREITUNG */
    steps:[
        "Die Nudeln nach Packungsbeilage zubereiten, abgießen, dabei 1 Kelle Pastawasser auffangen. Die Nudeln mit etwas Öl vermengen und beiseitestellen.",

        "In der Zwischenzeit die Zwiebeln und den Knoblauch schälen. Den Knoblauch fein hacken und die Zwiebeln vierteln und in feine Streifen schneiden.",

        "Etwas Öl in einem Topf erhitzen und die Zwiebeln darin ca. 3 Minuten glasig dünsten. Die Schinkenwürfel dazugeben und weitere 2 Minuten mitbraten. Anschließend den Knoblauch hinzufügen und ebenfalls ca. 1 Minute mitbraten.",

        "Die Crème fraîche einrühren, aufkochen lassen und das Pastawasser hinzufügen. Alles kurz aufkochen und ca. 5 Minuten köcheln lassen, bis die Soße leicht angedickt ist. Die Nudeln unterheben, mit Salz, Pfeffer und Muskatnuss würzen, nochmals 1–2 Minuten auf dem Herd ziehen lassen, umrühren und servieren."
    ]
},


{
    id:"30",
    title:"fluffige Pfannkuchen",
    tips:[
        "Die bereits fertigen Pfannkuchen kannst du auf einem Teller bei 50°C im Backofen warm halten."
    ],
    category:["süße Hauptgerichte"], 
    image:"images/fluffige-Pfannkuchen.jpeg",
    time:{
        preparation:"15 min",
        cooking:"30 min",
        total:"45 min"
    },
      related: ["42", "49", "1"],
    portions:"15 Stück",
    difficulty:"Einfach",
    rating:4.6,
    description:"Fluffige Pfannkuchen – ob zum Frühstück oder Abendessen, immer ein Genuss.",

    /* 🍽️ ZUTATEN */
    ingredients:[
        "500g Mehl (Type 405)",
        "2 EL Zucker",
        "1 TL Backpulver",
        "1 TL Salz",
        "8 Eier",
        "940ml Milch",
        "80ml Sprudelwasser",
        "neutrales Öl",
    ],

    /* 👨‍🍳 ZUBEREITUNG */
    steps:[
        "Das Mehl mit Zucker, Salz und Backpulver in einer großen Schüssel vermengen und in der Mitte eine Mulde formen.",

        "Die Eier trennen. Das Eigelb zusammen mit der Milch und dem Sprudelwasser in die Mulde zu den restlichen Zutaten geben. Das Eiweiß in eine separate Schüssel geben.",

        "Alle Zutaten in der großen Schüssel mit einem Schneebesen verrühren, bis keine Mehlklümpchen mehr zu sehen sind. Den Teig beiseitestellen. Während der Teig etwas ruht, das Eiweiß steif schlagen und vorsichtig mit einem Teigschaber unter den Teig heben.",

        "Etwas Öl in einer beschichteten Pfanne erhitzen. Eine große Kelle Teig hineingeben, etwas verteilen und jeden Pfannkuchen ca. 1–3 Minuten pro Seite auf hoher Stufe ausbacken. (Die zweite Seite benötigt meist etwas weniger Zeit.) Wenn der Rand fester geworden ist und sich viele Bläschen gebildet haben, kann der Pfannkuchen gewendet werden. Sollte dabei etwas Teig in die Pfanne spritzen, kann man den Pfannkuchen durch Schwenken der Pfanne bewegen, bis die Spritzer wieder aufgenommen wurden.",

        "Den fertigen Pfannkuchen aus der Pfanne nehmen, erneut etwas Öl hineingeben und den nächsten Pfannkuchen ausbacken."
    ]
},

{
    id: "31",
    title: "Baguette",
    category: [ "herzhaftes Gebäck" ], 
    image: "images/Baguette.jpeg",
    time:{
        preparation:"20 min",
        cooling: "5 min",
        baking:"20 min",
        rising: "17 Std 30 min",
        total:"18 Std 15 min"
    },
      related: ["42", "10", "21"],
    portions: "1 Stück",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Einfaches, fluffiges Baguette mit herrlich knuspriger Kruste.",

    /* 🍽️ ZUTATEN */
    ingredients: {
    
        "Hinweis":[
            "<b>BITTE BEACHTE: Der Teig muss mindestens 16 Stunden im Kühlschrank ruhen.</b>",
        ],

        "Teig":[
            "250g Mehl (Type 550)",
            "5g Salz",
            "2g Trockenhefe",
            "175ml lauwarmes Wasser (ca. 30°C)",
        ],
    },

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
        "Das Mehl mit dem Salz und der Trockenhefe in einer Schüssel vermengen. In der Mitte eine Mulde formen, das Wasser hineingeben und alles mit einem Löffel vermengen, bis kein trockenes Mehl mehr zu sehen ist.",

        "Eine Box mit Deckel mit etwas Öl einfetten, den Teig hineingeben, abdecken und 30min bei Zimmertemperatur ruhen lassen. Anschließend einmal dehnen und falten: Mit feuchten Händen ein Stück vom Teigrand nehmen, vorsichtig nach oben ziehen, bis ein Widerstand spürbar ist, und zur Mitte klappen. Dies einmal rundherum wiederholen, bis der gesamte Rand gedehnt wurde. Den Teig wieder abdecken, weitere 30min ruhen lassen, erneut dehnen und falten und anschließend für ca. 16 Std. in den Kühlschrank stellen.",

        "Am nächsten Tag den Backofen auf 240°C Ober-/Unterhitze vorheizen und eine feuerfeste Schale mit Wasser auf den Boden des Ofens stellen.",

        "Den Teig mit einer Teigkarte vorsichtig auf eine bemehlte Arbeitsfläche geben und zu einem Rechteck formen. Das untere Drittel des Teiges zur Mitte falten, das obere Drittel darüberklappen und die Naht gut zudrücken. <b>(Dabei möglichst wenig Luft aus dem Teig drücken.)</b>",

        "Den Teigstrang anschließend von der Mitte aus gleichmäßig mit den Händen zu einem ca. 25cm langen Strang ausrollen. Auf ein Baguettebackblech legen (alternativ funktioniert auch ein mit Backpapier belegtes Backblech), abdecken und weitere ca. 45min ruhen lassen.",

        "Das Baguette optional drei Mal mit einem scharfen Messer im 45-Grad-Winkel einschneiden. Im vorgeheizten Backofen 15min backen, anschließend die Wasserschale aus dem Ofen nehmen und das Baguette weitere ca. 5min fertig backen, bis es goldbraun ist und beim Klopfen auf die Unterseite hohl klingt.",

        "Aus dem Ofen nehmen und auf einem Kuchenrost mindestens 5min abkühlen lassen.",
    ]
},

{
    id: "32",
    title: "Bananenbällchen",
    tips: [
        "Du kannst diese Bällchen auch wunderbar mit gefrorenen Bananen zubereiten. Dafür nimmst du sie am Abend vorher aus dem Tiefkühler und lässt sie über Nacht im Kühlschrank auftauen.",
        "Bei ungefrorenen Bananen gilt: Je brauner die Banane, desto süßer und aromatischer ist sie."
    ],
    category: ["süßes Gebäck"], 
    image: "images/Bananenbällchen.jpeg",
    time:{
        preparation:"12 min",
        baking: "15 min",
        total:"30 min"
    },
      related: ["12", "20", "47"],
    portions: "15 Stück",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Schnelle, fluffige Bananenbällchen mit knusprigem Zuckermantel.",

    /* 🍽️ ZUTATEN */
    ingredients: {
    
        "Teig":[
            "140g geschälte Banane",
            "190g Mehl (Type 405)",
            "1 EL Milch",
            "3 TL Backpulver",
            "1 Prise Salz",
        ],

        "Mantel & Füllung":[
            "1 EL Nuss-Nougat-Creme",
            "3 EL Zimt und Zucker",
            "2 EL geschmolzene Butter",
        ],
    },

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
        "Die Banane mit einer Gabel zerdrücken. Das Mehl mit dem Backpulver und dem Salz vermengen, zu der Banane geben und verrühren, bis sich alles grob verbunden hat. Die Milch hinzufügen und alles zu einem glatten Teig verkneten.",

        "Den Teig in 15 gleich große Stücke teilen und jeweils zu kleinen Bällchen formen. Mit etwas Abstand auf einem Backpapier im Airfryer verteilen und ca. 8min bei 170°C backen.",

        "Die warmen Bällchen direkt nach dem Backen mit Butter bestreichen und in Zimt und Zucker wälzen. Sobald sie etwas abgekühlt sind, die Nuss-Nougat-Creme in einen Spritzbeutel geben und jedes Bällchen damit füllen.",
    ]
},

{
    id: "33",
    title: "fluffiges Weißbrot",
    category: [ "herzhaftes Gebäck" ], 
    image: "images/fluffiges-Weißbrot.jpeg",
    time:{
        preparation:"50 min",
        cooling: "2 Std 10 min",
        baking:"45 min",
        rising: "2 Std 30 min",
        total:"6 Std 15 min"
    },
      related: ["46", "36", "26"],
    portions: "1 Brot",
    difficulty: "Mittel",
    rating: 4.6,
    description: "Wunderbar fluffiges Weißbrot mit Tangzhong.",

    /* 🍽️ ZUTATEN */
    ingredients: {
    
        "Tangzhong":[
            "30g Mehl (Type 550)",
            "150ml Milch",
        ],

        "Hauptteig":[
            "470g Mehl (Type 550)",
            "20g Magermilchpulver",
            "9g Salz",
            "5g Trockenhefe",
            "1 Eigelb",
            "15g Honig",
            "1/2 TL Zitronensaft",
            "25g Butter",
            "10g Öl",
            "280g Milch",
            "60ml Wasser"
        ],
    },

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
        "Für den Tangzhong das Mehl mit der Milch in einem kleinen Topf vermengen und bei niedriger bis mittlerer Hitze (ca. 65°C) unter ständigem Rühren erhitzen, bis eine puddingartige Konsistenz entsteht. Vom Herd nehmen, in eine flache Schale umfüllen, mit Frischhaltefolie abdecken und an einem kühlen Ort mindestens 1 1/2 Std. abkühlen lassen. <i>(Alternativ kannst du diesen Schritt auch schon am Vorabend vorbereiten.)</i>",

        "Nach ca. 1 Stunde Kühlzeit das Mehl, das Wasser und die Milch für den Hauptteig kurz vermengen, bis kein trockenes Mehl mehr zu sehen ist. Abdecken und 30min ruhen lassen.",

        "Nach der Ruhezeit das Milchpulver, die Hefe, den Honig, das Eigelb, den Zitronensaft und den abgekühlten Tangzhong dazugeben. Alles mit dem Knethaken der Küchenmaschine ca. 5min auf niedriger Stufe kneten, bis sich alle Zutaten verbunden haben. Anschließend weitere 3min auf niedriger Stufe kneten und dabei das Salz langsam einarbeiten. Danach den Teig weitere 10min auf mittlerer Stufe kneten und anschließend auf höchster Stufe ca. 5min zu einem glatten, elastischen Teig auskneten, bis er den Fenstertest besteht. Die weiche Butter in kleinen Stücken und das Öl dazugeben, weitere ca. 5min auf mittlerer Stufe einarbeiten und anschließend ca. 2min auf höchster Stufe fertig kneten, bis der Teig den Fenstertest erneut besteht.",

        "Den Teig in eine saubere Schüssel geben, mit einem feuchten Tuch abdecken und ca. 1 1/2 Std. bei Raumtemperatur gehen lassen, bis sich das Volumen verdoppelt hat.",

        "Den Teig auf einer leicht geölten Arbeitsfläche vorsichtig in zwei gleich große Teile teilen, rundwirken, auf ein bemehltes Brett legen, mit Mehl bestäuben und ca. 10min im Kühlschrank entspannen lassen.",

        "In der Zwischenzeit eine Kastenform (30cm x 11cm) gut einfetten.",

        "Jedes Teigstück mit etwas Mehl bestäuben und auf einer leicht bemehlten Arbeitsfläche zu einem Rechteck drücken und ziehen, dessen Seiten etwas länger als die Form sind. Den Teig eng und straff aufrollen, die Enden einklappen und beide Teigrollen nebeneinander in die Form legen. Mit etwas Mehl bestäuben, mit einem Tuch abdecken und weitere ca. 60min an einem warmen Ort gehen lassen, bis sich der Teig deutlich vergrößert hat und den Fingertest besteht. Mindestens 30min vor Ende der Gehzeit den Ofen auf 180°C Ober-/Unterhitze vorheizen.",

        "Das fertige Brot erneut mit etwas Mehl bestäuben. Anschließend im unteren Drittel des vorgeheizten Backofens ca. 45min backen, bis es goldbraun ist. <i>(Falls es zu dunkel wird, locker mit Alufolie abdecken.)</i>",

        "Nach dem Backen das Brot aus der Form nehmen, für ca. 15min in ein sauberes Tuch wickeln, anschließend auswickeln, auf ein Kuchenrost legen und vollständig auskühlen lassen.",
    ]
},

{
    id: "34",
    title: "Frikadellen mit Rahmsoße und Nudeln",
    category: ["Fleisch", "Pasta"], 
    image: "images/Frikadellen-mit-Rahmsoße-und-Nudeln.jpeg",
    time:{
        preparation:"15 min",
        cooking: "35 min",
        total:"50 min"
    },
      related: ["47", "34", "5"],
    portions: "8 Portionen",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Saftige Frikadellen mit cremiger Soße und leckeren Nudeln.",

    /* 🍽️ ZUTATEN */
    ingredients: {
    
        "Frikadellen":[
            "1kg gemischtes Hackfleisch",
            "250g Magerquark",
            "100g Paniermehl",
            "2 Eier",
            "2 EL scharfer Senf",
            "2 EL Tomatenmark",
            "2 EL gefriergetrocknete Salatkräuter",
            "1 TL Allkrydda <i>(alternativ Salz)</i>",
            "1 TL Worcestersauce",
            "Pfeffer",
        ],

        "Soße":[
            "Bratfett der Frikadellen",
            "500ml Rinderbrühe",
            "250ml Kochsahne",
            "1 EL Sojasauce",
            "1 TL Senf",
            "2 EL Speisestärke",
            "1/2 TL Knoblauchpulver",
            "1 TL Worcestersauce"
        ],

        "Außerdem": [
            "400g Hörnchennudeln",
            "<i>optional: Preiselbeeren</i>"
        ]
    },

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
        "Die Nudeln nach Packungsbeilage zubereiten, abgießen, mit etwas Öl vermengen und beiseite stellen.",

        "Für die Frikadellen alle Zutaten in eine Schüssel geben und zu einer homogenen Masse verkneten. Aus der Masse ca. 18 Kugeln formen und diese auf einem Brett leicht flach drücken.",

        "So viel Öl in einer Pfanne erhitzen, dass der Boden gerade bedeckt ist. Die Frikadellen bei mittlerer Hitze ca. 7min pro Seite braten. <b>(Die Frikadellen am Rand der Pfanne benötigen meist etwas länger.)</b>",

        "Den Ofen auf ca. 50°C Ober-/Unterhitze vorheizen. Die fertigen Frikadellen auf einen Teller geben und im Ofen warm halten.",

        "Für die Soße die flüssigen Zutaten zum Bratfett der Frikadellen in die Pfanne geben und aufkochen lassen.",

        "Die Speisestärke mit etwas Wasser anrühren und unter Rühren zur Soße geben. Erneut aufkochen und ca. 5min köcheln lassen, bis die Soße eindickt und den Löffeltest besteht. <i>(Dafür einen Löffel in die Soße tauchen und mit dem Finger über die Rückseite streichen. Läuft die Soße nicht zusammen, ist sie fertig.)</i>",
    ]
},

{
    id: "35",
    title: "Brezeln",
    tips: [
        "Du wirst die Brezeln auf zwei Bleche aufteilen müssen. Deshalb kannst du die eine Hälfte der fertigen Teiglinge nach bestandenem Fingertest in den Tiefkühler und die andere Hälfte in den Kühlschrank stellen. Sobald du die eine Hälfte zum Belaugen holst, kannst du die andere in den Tiefkühler stellen."
    ],
    category: ["herzhaftes Gebäck"], 
    image: "images/Brezeln.jpeg",
    time:{
        preparation:"30 min",
        cooling:"30 min",
        baking:"12 min",
        rising:"1 Std 10 min",
        total:"2 Std 22 min"
    },
      related: ["11", "36", "4"],
    portions:"10 Stück",
    difficulty:"Mittel",
    rating:4.6,
    description:"Fluffige Brezeln, ganz einfach selbst gemacht.",

    /* 🍽️ ZUTATEN */
    ingredients:{
        "Teig":[
            "500g Mehl (Type 550)",
            "7g Trockenhefe",
            "275ml kaltes Wasser",
            "10g Honig",
            "25g weiche Butter",
            "13g Salz"
        ],

        "Natronlauge":[
            "1 L Wasser",
            "50g Haushaltsnatron",
        ],

        "Außerdem":[
            "grobes Meersalz"
        ]
    },

    /* 👨‍🍳 ZUBEREITUNG */
    steps:[
        {
            text:"Das Mehl mit der Hefe vermengen. In der Mitte eine Mulde formen und das Wasser, die Butter in kleinen Stücken sowie den Honig hinzufügen. Danach mit dem Knethaken der Küchenmaschine auf mittlerer Stufe ca. 8 Minuten zu einem glatten, elastischen und nicht klebrigen Teig kneten. Das Salz während der ersten 2–3 Minuten nach und nach einarbeiten. Den Teig in Portionen à 83g teilen, rundwirken und auf einem leicht bemehlten Küchentuch ca. 10 Minuten abgedeckt entspannen lassen."
        },

        {
            text:"Die Teiglinge zu ca. 20cm langen Ovalen ausrollen, straff zu einem Strang aufrollen und diesen von innen nach außen zu einem ca. 60cm langen Strang ausrollen.",
            images:[
                "images/fertig.jpeg",
                "images/strang.jpeg"
            ]
        },

        {
            text:"Den Strang U-förmig hinlegen, die oberen Enden überkreuzen, einmal verdrehen, nach vorne klappen und die Enden leicht andrücken.",
            images:[
                "images/1.jpeg",
                "images/2.jpeg",
                "images/3.jpeg",
                "images/4.jpeg"
            ]
        },

        {
            text:"Die fertig geformten Brezeln auf einem leicht bemehlten Küchentuch abgedeckt ca. 60 Minuten ruhen lassen, bis sie den Fingertest bestehen."
        },

        {
            text:"Den Ofen mindestens 20 Minuten auf 230°C Ober-/Unterhitze vorheizen."
        },

        {
            text:"Die Teiglinge, die den Fingertest bestanden haben, mindestens 15 Minuten mitsamt dem Brett in den Tiefkühler geben. In der Zwischenzeit das Wasser in einem kleinen, hohen Topf aufkochen. Dann das Natronpulver dazugeben <b>(Achtung: Es kocht stark hoch!)</b> und die Hitze reduzieren, sodass das Wasser nur noch siedet."
        },

        {
            text:"Jeden angefrorenen Teigling mit einer Schaumkelle mit der Oberseite nach unten in die Lauge geben und ca. 10 Sekunden vollständig bedeckt darin schwimmen lassen. Mit einer Schaumkelle herausnehmen, kurz abtropfen lassen, mit der Oberseite nach oben auf ein mit Backpapier belegtes Backblech legen, mit Salz bestreuen und sofort in den vorgeheizten Backofen geben. Den Ofen etwas beschwaden, die Ofentür schließen und die Brezeln ca. 6 Minuten backen. Danach die Ofentür einmal öffnen, den Dampf entweichen lassen und die Teiglinge je nach Größe weitere ca. 6 Minuten fertig backen, bis sie schön braun sind und sich beim Klopfen auf die Unterseite hohl anhören."
        },

        {
            text:"Auf ein Kuchenrost legen und mindestens 15 Minuten abkühlen lassen."
        },
    ]
},

{
    id: "36",
    title: "Laugenstangen",
    tips: [
        "Du wirst die Laugenstangen auf zwei Bleche aufteilen müssen. Deshalb kannst du die eine Hälfte der fertigen Teiglinge nach bestandenem Fingertest in den Tiefkühler und die andere Hälfte in den Kühlschrank stellen. Sobald du die eine Hälfte zum Belaugen holst, kannst du die andere in den Tiefkühler stellen."
    ],
    category: ["herzhaftes Gebäck"], 
    image: "images/Laugenstangen.jpeg",
    time:{
        preparation:"30 min",
        cooling:"30 min",
        baking:"12 min",
        rising:"1 Std 10 min",
        total:"2 Std 22 min"
    },
      related: ["33", "36", "9"],
    portions:"10 Stück",
    difficulty:"Mittel",
    rating:4.6,
    description:"Fluffige Laugenstangen, ganz einfach selbst gemacht.",

    /* 🍽️ ZUTATEN */
    ingredients:{
        "Teig":[
            "500g Mehl (Type 550)",
            "7g Trockenhefe",
            "275ml kaltes Wasser",
            "10g Honig",
            "25g weiche Butter",
            "13g Salz"
        ],

        "Natronlauge":[
            "1 L Wasser",
            "50g Haushaltsnatron",
        ],

        "Außerdem":[
            "grobes Meersalz"
        ]
    },

    /* 👨‍🍳 ZUBEREITUNG */
    steps:[
        {
            text:"Das Mehl mit der Hefe vermengen. In der Mitte eine Mulde formen und das Wasser, die Butter in kleinen Stücken sowie den Honig hinzufügen. Danach mit dem Knethaken der Küchenmaschine auf mittlerer Stufe ca. 8 Minuten zu einem glatten, elastischen und nicht klebrigen Teig kneten. Das Salz während der ersten 2–3 Minuten nach und nach einarbeiten. Den Teig in Portionen à 83g teilen, rundwirken und auf einem leicht bemehlten Küchentuch ca. 10 Minuten abgedeckt entspannen lassen."
        },

        {
            text:"Die Teiglinge zu ca. 12cm langen Ovalen ausrollen und straff zu einem Strang aufrollen. Die Naht gut verschließen und den Strang anschließend von innen nach außen noch etwas dünner ausrollen.",
            images:[
                "images/5.jpg",
                "images/6.jpg",
                "images/7.jpg"
            ]
        },

        {
            text:"Die fertig geformten Laugenstangen auf einem leicht bemehlten Küchentuch abgedeckt ca. 60 Minuten ruhen lassen, bis sie den Fingertest bestehen."
        },

        {
            text:"Den Ofen mindestens 20 Minuten auf 230°C Ober-/Unterhitze vorheizen."
        },

        {
            text:"Die Teiglinge, die den Fingertest bestanden haben, mindestens 15 Minuten mitsamt dem Brett in den Tiefkühler geben. In der Zwischenzeit das Wasser in einem kleinen, hohen Topf aufkochen. Dann das Natronpulver dazugeben <b>(Achtung: Es kocht stark hoch!)</b> und die Hitze reduzieren, sodass das Wasser nur noch siedet."
        },

        {
            text:"Jeden angefrorenen Teigling mit einer Schaumkelle mit der Oberseite nach unten in die Lauge geben und ca. 10 Sekunden vollständig bedeckt darin schwimmen lassen. Mit einer Schaumkelle herausnehmen, kurz abtropfen lassen, mit der Oberseite nach oben auf ein mit Backpapier belegtes Backblech legen, dreimal im 45°-Winkel einschneiden, mit Salz bestreuen und sofort in den vorgeheizten Backofen geben. Den Ofen etwas beschwaden, die Ofentür schließen und die Laugenstangen ca. 6 Minuten backen. Danach die Ofentür einmal öffnen, den Dampf entweichen lassen und die Teiglinge je nach Größe weitere ca. 6 Minuten fertig backen, bis sie schön braun sind und sich beim Klopfen auf die Unterseite hohl anhören."
        },

        {
            text:"Auf ein Kuchenrost legen und mindestens 15 Minuten abkühlen lassen."
        },
    ]
},


{
    id: "37",
    title: "Frühlingskartoffelsalat",
    tips:[
        "Du kannst den Salat auch gut schon 1–2 Tage vorher vorbereiten und im Kühlschrank aufbewahren. Dann schmeckt er sogar noch besser."
    ],
    category:["Vegetarisch", "Salate", "Vegan"], 
    image:"images/Frühlingskartoffelsalat.jpeg",
    time:{
        preparation:"20 min",
        cooking:"20 min",
        cooling:"1 Std 10 min",
        total:"1 Std 50 min"
    },
      related: ["12", "22", "32"],
    portions:"6 Portionen",
    difficulty:"Einfach",
    rating:4.6,
    description:"Klassischer Kartoffelsalat mit frühlingshafter Note.",

    /* 🍽️ ZUTATEN */
    ingredients:{
        "Salat":[
            "2kg festkochende Kartoffeln",
            "1 Bund Radieschen",
            "1 Bund Frühlingszwiebeln",
            "1 Salatgurke",
            "1 EL Weißweinessig"
        ],

        "Dressing":[
            "300ml Gemüsebrühe",
            "4 EL Olivenöl",
            "2 EL Senf",
            "1 TL Weißweinessig",
            "1 EL gefriergetrocknete Salatkräuter",
            "Salz",
            "Pfeffer"
        ],
    },

    /* 👨‍🍳 ZUBEREITUNG */
    steps:[
        "Die Kartoffeln in einen Topf geben, vollständig mit Wasser bedecken und aufkochen lassen. Die Hitze etwas reduzieren und ca. 20 Minuten sanft köcheln lassen, bis sie weich sind, wenn man mit einer Gabel hineinsticht. Das Wasser abgießen und die Kartoffeln ca. 5 Minuten ausdampfen lassen, bis man sie einigermaßen anfassen kann.",

        "Die Kartoffeln pellen, in Scheiben schneiden und in eine große Schüssel geben. 1 EL Weißweinessig untermischen und gemeinsam ca. 5 Minuten abkühlen lassen.",

        "In der Zwischenzeit die Frühlingszwiebeln in Ringe schneiden und die Radieschen vierteln und in Scheiben schneiden. Beides zu den Kartoffeln geben.",

        "Die Gemüsebrühe mit Senf, Öl, 1 TL Weißweinessig und den Gartenkräutern vermischen und über die Kartoffeln gießen. Salz und Pfeffer dazugeben und alles gut vermengen. Die Schüssel abdecken und mindestens 1 Stunde ziehen lassen. <b>(Je länger der Salat zieht, desto besser schmeckt er.)</b>",

        "Nach der Ruhezeit die Gurke halbieren, nach Belieben schälen und das Innere mit einem Löffel entfernen. Das feste Gurkenfleisch in Würfel schneiden, zu den Kartoffeln geben und den Salat nochmals mit Salz und Pfeffer abschmecken."
    ]
},

{
    id: "38",
    title: "Auberginen-Zucchini-Pfanne",
    category: ["Vegetarisch", "Beilage", "Vegan"], 
    image: "images/Auberginen-Zucchini-Pfanne.jpeg",
    time:{
        preparation: "5 min",
        cooking: "15 min",
        total:"20 min"
    },
      related: ["51", "15", "1"],
    portions: "3 Portionen",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Schnelle, leckere Gemüsepfanne mit mediterranem Touch.",

    /* 🍽️ ZUTATEN */
    ingredients: [

        "1 große weiße Zwiebel",
        "2 Knoblauchzehen",
        "1 Aubergine",
        "1 große Zucchini",
        "1 TL getrockneter Rosmarin",
        "1 TL getrockneter Thymian",
        "Olivenöl",
        "Salz",
        "Pfeffer"
    ],

        

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
        "Die Zwiebel schälen, vierteln und in dünne Streifen schneiden. Die Zucchini und die Aubergine in grobe Würfel schneiden. Den Knoblauch schälen, grob hacken und in einem kleinen Schälchen mit dem Thymian, dem Rosmarin, Salz und Pfeffer vermengen.",

        "Reichlich Olivenöl in einer Pfanne erhitzen und die Zwiebeln darin bei mittlerer Hitze ca. 5 Minuten anschwitzen.",

        "Die Aubergine dazugeben und unter gelegentlichem Rühren bei höchster Stufe ca. 5 weitere Minuten mitbraten.",

        "Anschließend die Zucchini und den Inhalt des kleinen Schälchens dazugeben und weitere 5 Minuten unter gelegentlichem Rühren fertig braten."
    ]
},

{
    id: "39",
    title: "Fischfilet aus dem Ofen",
    category: ["Fisch"], 
    image: "images/Fischfilet-aus-dem-Ofen.jpeg",
    time:{
        preparation: "45 min",
        baking: "25 min",
        total:"1 Std 10 min"
    },
      related: ["11", "22", "33"],
    portions: "6 Portionen",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Fischfilet mit cremigem Kartoffelpüree, leckerem Spargelbrokkoli und cremiger Zitronensauce.",

    /* 🍽️ ZUTATEN */
    ingredients: {

    "Fisch": [
        "6 TK Fischfilets <i>(z.B. Smoked Haddock (insgesamt ca. 720g))</i>",
        "6 EL Milch",
        "Olivenöl",
        "Zitronenschale",
        "Pfeffer",
        "Salz",
    ],

    "Brokkoli": [
        "300g Spargelbrokkoli",
        "2 Knoblauchzehen",
        "Olivenöl",
        "Salz",
        "Pfeffer",
    ],

    "Kartoffelpüree": [
        "1,5 kg Kartoffeln",
        "30g Butter",
        "200ml Milch",
        "Salz",
        "Pfeffer",
        "1 Prise Muskat"
    ],

    "Sauce": [
        "400ml Milch",
        "200ml Gemüsebrühe",
        "30g Butter",
        "2 EL Mehl",
        "1 EL Senf",
        "1 TL Zitronensaft",
        "Salz",
        "Pfeffer",
    ]
    },
        

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
        "Den Fisch aus dem Gefrierfach nehmen, mit der Plastikverpackung in eine Schale geben und mit kochendem Wasser vollständig bedecken. Ca. 15min auftauen lassen. Währenddessen den Ofen auf 200°C Ober-/Unterhitze vorheizen. Die Kartoffeln schälen, in Würfel schneiden, in einen Topf geben, mit Wasser bedecken, salzen und aufkochen. Anschließend ca. 20min leicht köcheln lassen.",

"Jedes Fischfilet auf ein Stück Alufolie legen. Die Seiten hochklappen, sodass eine kleine Wanne entsteht. Je einen EL Milch darüber geben, mit etwas Olivenöl beträufeln, pfeffern und etwas Zitronenzeste darüberstreuen. Anschließend salzen <i>(Bei Haddock ist zusätzliches Salzen nicht notwendig, da dieser bereits sehr salzig ist.)</i>",

"Die Päckchen verschließen, auf ein Backblech legen und im vorgeheizten Backofen ca. 25min backen. <i>(Je nach Sorte: ca. 25min bei Haddock, eher 20min bei Lachs.)</i>",

"In der Zwischenzeit vom Brokkoli die Blätter entfernen und die holzigen Enden abschneiden. So viel Olivenöl in eine Pfanne geben, dass der Boden bedeckt ist, und bei mittlerer Hitze erhitzen. Den Brokkoli dazugeben und ca. 5min unter gelegentlichem Wenden braten. Den Knoblauch dazugeben, salzen, pfeffern und unter Rühren bzw. Schwenken weitere ca. 2min fertig braten. Anschließend aus der Pfanne nehmen.",

"Die Kartoffeln gut abgießen und mit geöffnetem Deckel etwas ausdampfen lassen.",

"Für die Sauce die Milch mit der Gemüsebrühe vermischen. Die Butter in einem Topf schmelzen, das Mehl mit einem Schneebesen einrühren, bis eine glatte Masse entsteht. Mit der Milchmischung ablöschen, Senf, Zitronensaft, Salz und Pfeffer hinzufügen, aufkochen lassen und bei mittlerer Hitze ca. 10min unter gelegentlichem Rühren köcheln lassen.",

"Währenddessen die Milch, die Butter in kleinen Würfeln sowie Muskat, Salz und Pfeffer zu den Kartoffeln geben und mit einem Kartoffelstampfer zu einem feinen Püree verarbeiten.",

"Sobald der Fisch fertig ist, aus dem Ofen nehmen. Wenn das Fleisch innen flockig und weich ist, ist er gar. Aus der Alufolie nehmen und zusammen mit dem Brokkoli, Kartoffelpüree und der Sauce servieren."
    ]
},

{
    id: "40",
    title: "Thunfisch-Nudel-Salat",
    category: ["Fisch", "Salate"], 
    image: "images/Thunfisch-Nudel-Salat.jpeg",
    time:{
        preparation: "5 min",
        cooking: "10 min",
        total:"15 min"
    },
      related: ["42", "49", "1"],
    portions: "8 Portionen",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Cremig-würzige Fussili mit saftigem Thunfisch und buntem Mexico-Mix.",

    /* 🍽️ ZUTATEN */
    ingredients: [

        "750g Fussili",
        "4 Dosen Thunfisch in Sonnenblumenöl (à 185g)",
        "2 Dosen Mexico-Mix (à 300g)",
        "Salz",
        "Pfeffer"
    ],

        

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
        "Die Nudeln nach Packungsbeilage zubereiten, abgießen und mit dem <b>GESAMTEN</b> Inhalt der Thunfischdosen vermengen. <i>(Also auch das Öl verwenden.)</i>",

"Das Wasser aus den Mexico-Mix-Dosen abgießen. Die Mischung zu den Nudeln geben, reichlich salzen und pfeffern und alles gut miteinander vermengen und warm oder kalt servieren.",
    ]
},

{
    id: "41",
    title: "Überbackene Gnocchipfanne",
    category: ["Pasta"], 
    image: "images/Überbackene-Gnocchipfanne.jpeg",
    time:{
        preparation: "5 min",
        cooking: "10 min",
        total:"15 min"
    },
      related: ["10", "20", "30"],
    portions: "8 Portionen",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Selbstgemachte Gnocchi, goldbraun gebraten in Knoblauch-Kräuterbutter mit einer leckeren Käsekruste.",

    /* 🍽️ ZUTATEN */
    ingredients: {
    
    "Gnocchi":[

        "500g Kartoffeln",
        "100g Mehl <i>(oder mehr nach Bedarf)</i>",
        "3/4 TL Salz",
        "1 Prise Muskat",
    ],

    "Soße":[
        "1 große Knoblauchzehe",
        "1 TL italienische Kräuter",
        "20g Butter",
        "Salz",
        "Pfeffer",
    ],

    "Topping": [
        "40g geriebener Gouda",
        "75g Kirschtomaten",
    ]

},

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
        "Die Kartoffeln schälen, in einen Topf geben, mit Salzwasser bedecken und aufkochen. Anschließend ca. 25min weich kochen. Abgießen, durch eine Kartoffelpresse drücken und etwas ausdampfen lassen. Sobald die Kartoffeln abgekühlt sind, die Gewürze hinzufügen und das Mehl kurz unterkneten. Nicht zu lange kneten, da der Teig sonst klebrig wird.",

        "Den Teig auf einer leicht bemehlten Arbeitsfläche in kleinere Portionen teilen, zu etwa fingerdicken Strängen rollen und ca. 2cm lange Stücke abschneiden.",

        "Die einzelnen Stücke zu kleinen Kugeln formen und mit etwas Mehl bestäuben. <i>(Wer gerne das typische Muster möchte, kann die Stücke nun über die Rückseite einer Gabel rollen.)</i>",

        "Die Temperatur des Wassers reduzieren, sodass es nur noch siedet. Die Gnocchi darin ca. 3-4min kochen, bis sie an die Oberfläche steigen. Mit einer Schaumkelle herausnehmen und in ein Sieb geben.",

        "Die Butter in einer Pfanne bei mittlerer Hitze schmelzen. Die Kräuter dazugeben und den Knoblauch hineinpressen. Ca. 1min anschwitzen, bis es duftet. Die Gnocchi dazugeben und bei hoher Hitze ca. 10min anbraten, bis sie goldbraun sind.",

        "Die Gnocchi in eine flache Auflaufform geben, den Käse darüberstreuen und im Ofen bei höchster Grillstufe ca. 5min goldbraun überbacken.",

        "Währenddessen die Tomaten klein schneiden und die fertigen Gnocchi mit den Tomatenhälften servieren.",
    ]
},

{
    id: "42",
    title: "Glasnudelsalat",
    category: ["Vegetarisch", "Vegan", "Salate"], 
    image: "images/Glasnudelsalat.jpeg",
    time:{
        preparation: "25 min",
        cooking: "5 min",
        total:"30 min"
    },
      related: ["40", "29", "11"],
    portions: "6 Portionen",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Leckerer Glasnudelsalat mit knackigen Sojasprossen, buntem Gemüse und cremigem Erdnussdressing.",

    /* 🍽️ ZUTATEN */
    ingredients:{


    "Salat": [

        "200g Glasnudeln",
        "1 Zucchini",
        "1 Spitzpaprika",
        "2 Karotten",
        "1 Bund Frühlingszwiebeln",
        "180g Sojasprossen",
        "Koriander",
        "weißer Sesam",
        "<i>optional: gehackte Erdnüsse</i>"
    ],

    "Dressing": [
        "75g Erdnussbutter",
        "7 EL heißes Wasser",
        "1 EL Limettensaft",
        "2 TL Sesamöl",
        "1 TL Ingwerpulver",
        "1 TL Chiliflocken",
        "2 EL Sojasauce",
        "etwas Salz",
    ]

    },

    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
        "Die Glasnudeln nach Packungsanleitung in Salzwasser kochen. Anschließend in ein Sieb geben, mit kaltem Wasser abschrecken, mit einer Küchenschere etwas zerkleinern und gut abtropfen lassen.",

        "Die Enden der Zucchini und Karotten entfernen. Die Karotten schälen, beides mit einem Spiralschneider zu Gemüsespaghetti drehen und anschließend etwas kleiner schneiden.",

        "Die Paprika in feine Streifen und die Frühlingszwiebeln in Ringe schneiden. Alles zusammen mit den Glasnudeln und den Sojasprossen in eine große Schüssel geben.",

        "Für das Dressing die Erdnussbutter mit dem heißen Wasser glatt rühren. Sobald sie flüssig ist, die restlichen Zutaten hinzufügen und alles zu einem cremigen Dressing verrühren. Anschließend unter die restlichen Zutaten mischen.",

        "Mit Sesam und etwas gehacktem Koriander garnieren und nach Belieben mit gehackten Erdnüssen servieren.",
    ]
},

{
    id: "43",
    title: "Marillenknödel",
    category: ["süßes Gebäck"], 
    image: "images/Marillenknödel.jpeg",
    time:{
        preparation: "20 min",
        cooling: "30 min",
        cooking: "20 min",
        total:"1 std 10 min"
    },
      related: ["4", "45", "13"],
    portions: "3 Portionen",
    difficulty: "Mittel",
    rating: 4.6,
    description: "Fluffige Quarkknödel mit fruchtig-süßer Füllung und knusprigem Mantel.",

    /* 🍽️ ZUTATEN */
    ingredients:{


    "Teig": [

        "250g Quark",
        "125g Mehl (Type 405)",
        "1 Ei",
        "25g Zucker",
        "1 TL Vanillezucker",
        "50g weiche Butter",
        "1 Prise Salz"

    ],

    "Füllung": [
        "6 Aprikosen",
        "3 TL Zucker"
    ],

    "Topping": [
        "80g Semmelbrösel",
        "30g Butter",
        "1 Prise Zimt",
        "1 TL Zucker",
        "1 Prise Salz"
    ]

    },


    /* 👨‍🍳 ZUBEREITUNG */
    steps: [

        "Den Quark in ein sauberes Küchentuch geben und gut ausdrücken.",

        "Für den Teig das Ei mit dem Zucker und dem Vanillezucker mit einem Schneebesen leicht schaumig schlagen. Den ausgedrückten Quark und das Salz unterrühren. Dann das Mehl und die Butter in kleinen Würfeln dazugeben und solange mit einem Löffel verrühren, bis keine großen Butterstückchen mehr zu sehen sind.",

        "Den Teig abdecken und ca. 30min im Kühlschrank ruhen lassen. In der Zwischenzeit einen großen Topf mit leicht gesalzenem Wasser zum Kochen bringen. Die Aprikosen waschen, halbieren und die Kerne entfernen.",

        "In einer kleinen Pfanne die Butter für das Topping schmelzen, bis sie schäumt. Die Brösel mit Zucker, Zimt und Salz vermengen, in der schäumenden Butter ca. 5min knusprig anbraten und anschließend auf einen Teller geben.",

        "Den Teig in 6 Portionen à ca. 80g teilen. Die Hände leicht befeuchten und jeweils eine Portion zu einer Kugel formen. Die Kugel in der Hand flach drücken, eine halbe Aprikose in die Mitte legen, je 1/2 TL Zucker hineingeben, den Teig darum klappen bzw. verstreichen, vorsichtig verschließen und wieder zu einer Kugel formen.",

        "Die Hitze des kochenden Wassers reduzieren, sodass es nur noch siedet. Die Knödel vorsichtig hineingeben, den Deckel schließen und bei mittlerer Hitze ca. 20min ziehen lassen, bis sie aufgestiegen sind und etwas an der Oberfläche schwimmen. <i>(Falls sie nach 20min noch nicht oben schwimmen, vorsichtig mit einer Schaumkelle durchs Wasser fahren, da sie eventuell am Boden festkleben.)</i>",

        "Die Knödel mit einer Schaumkelle herausnehmen, etwas abtropfen lassen und anschließend in den Bröseln wälzen. Mit etwas Puderzucker bestreuen und nach Belieben mit Vanillesoße servieren."

    ]
},

{
    id: "44",
    title: "Gnocchisalat",
    category: ["Salate"], 
    image: "images/Gnocchisalat.jpeg",
    time:{
        preparation: "20 min",
        cooking: "10 min",
        total:"30 min"
    },
      related: ["17", "22", "15"],
    portions: "6 Portionen",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Knuspriger Gnocchi-Salat mit cremigem Avocado-Dressing, frischen Kirschtomaten, würzigem Bacon und gehobeltem Parmesan.",

    /* 🍽️ ZUTATEN */
    ingredients:{


    "Gnocchi": [

        "600g Mini-Gnocchi",
        "1 TL Paprikapulver",
        "1 EL Öl",
        "Salz",
        "Pfeffer"

    ],

    "Salat": [
        "400g Kirschtomaten",
        "150g Bacon",
        "80g Rucola",
        "1 rote Zwiebel",
        "35g gehobelter Parmesan"
    ],

    "Dressing": [
        "1 Avocado",
        "1 kleine Knoblauchzehe",
        "2 EL Olivenöl",
        "12 EL Wasser",
        "1 TL Balsamicoessig",
        "1/2 TL Chiliflocken",
        "Salz",
        "Pfeffer"
    ]

    },


    /* 👨‍🍳 ZUBEREITUNG */
    steps: [

        "1 EL Öl in einer großen Pfanne erhitzen. Das Paprikapulver einrühren, bis es duftet. Die Gnocchi dazugeben, mit Salz und Pfeffer würzen und unter gelegentlichem Wenden ca. 10min knusprig anbraten.",

        "In der Zwischenzeit die Tomaten dritteln und die Zwiebel schälen und fein hacken. Beides in eine große Schüssel geben und etwas abkühlen lassen. Den Rucola waschen, gut trocknen und gegebenenfalls etwas kleiner zupfen.",

        "Den Bacon auf ein mit Backpapier belegtes Backblech legen und im Ofen bei höchster Grillstufe im oberen Drittel ca. 6min knusprig braten. Anschließend herausnehmen und zwischen Küchenpapier abkühlen lassen.",

        "Für das Dressing die Avocado schälen, den Kern entfernen, den Knoblauch schälen und zusammen mit den restlichen Dressing-Zutaten in einen Food Processor geben. Alles cremig pürieren.",

        "Die Gnocchi mit den Tomaten, dem Rucola, dem gehobelten Parmesan und dem Dressing in eine große Schüssel geben und gut vermengen. Den Bacon klein schneiden und über dem Salat verteilen."

    ]
},

{
    id: "45",
    title: "Kirschhefeschnecken",
    category: ["süßes Gebäck", "Vegetarisch"],
    image: "images/Kirschhefeschnecken.jpeg",
    time:{
        preparation: "45 min",
        rising: "1 std 30 min",
        baking: "30 min",
        cooling:"5 min",
        total:"2 std 50 min"
    },
      related: ["2", "39", "21"],
    portions: "10 Stück",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Herrlich fluffige Hefeschnecken mit fruchtiger Kirschfüllung und süßem Zuckerguss.",

    ingredients:{

        "Teig":[
            "300g Mehl (Type 405)",
            "7g Trockenhefe",
            "170ml zimmerwarme Milch",
            "30g Zucker",
            "30g Butter",
            "1 TL Salz"
        ],

        "Füllung":[
            "300g Kirschen",
            "15g Speisestärke",
            "15g brauner Zucker",
            "15g weißer Zucker",
            "1/2 TL Zitronenschale",
            "etwas Vanilleextrakt",
            "10g Butter",
            "1 Prise Salz"
        ],

        "Topping":[
            "100g Puderzucker",
            "ca. 3 EL Wasser"
        ]
    },

    steps:[
        {
            text:"Für die Kirschfüllung die Kirschen waschen, die Stängel und Kerne entfernen und achteln. Die Kirschen mitsamt dem ausgetretenen Saft mit dem weißen Zucker, dem braunen Zucker, dem Vanilleextrakt, der Zitronenschale sowie dem Salz vermengen und beiseitestellen."
        },

        {
            text:"Dann für den Teig das Mehl mit der Hefe, dem Zucker und dem Salz vermengen, in der Mitte eine Mulde formen und die Milch hineingeben."
        },

        {
            text:"Alles mit dem Knethaken der Küchenmaschine auf mittlerer Stufe ca. 5 Minuten kneten. In der Zwischenzeit die Butter in kleine Stücke schneiden. Anschließend die Butter zum Teig geben und weitere 5 Minuten zu einem elastischen, nicht mehr klebrigen Teig kneten."
        },

        {
            text:"Eine Box mit Deckel leicht einölen, den Teig hineingeben, etwas flach drücken und abgedeckt ca. 60 Minuten bei Raumtemperatur ruhen lassen, bis er sein Volumen verdoppelt hat."
        },

        {
            text:"In der Zwischenzeit die Butter in einem Topf schmelzen. Die Kirschen mitsamt dem ausgetretenen Saft dazugeben und aufkochen. Die Speisestärke mit ca. 3 EL Wasser glattrühren, unterrühren und erneut aufkochen. Anschließend ca. 1 Minute bei mittlerer Hitze unter ständigem Rühren köcheln lassen, bis die Masse deutlich angedickt ist. Vom Herd nehmen, in eine Schüssel füllen, direkt an der Oberfläche mit Frischhaltefolie abdecken und beiseitestellen. Eine Auflaufform (ca. 30 × 20 cm) gut einfetten."
        },

        {
            text:"Den Teig auf eine leicht bemehlte Arbeitsfläche geben, mit etwas Mehl bestäuben und zu einem ca. 40 × 35 cm großen Rechteck ausrollen. Die Kirschfüllung gleichmäßig darauf verteilen, dabei rundherum einen etwa 2 cm breiten Rand frei lassen.",
            images:[
                "images/fül.jpeg"
            ]
        },

        {text:"So aufrollen, dass man entlang der kurzen Seite eng aufrollt. Die Naht gut verschließen, die Enden der Rolle leicht abschneiden und die Rolle mit einem scharfen Messer oder einem Stück Zahnseide in ca. 4 cm breite Schnecken schneiden.",
            images: [  "images/rol.jpeg"]
        },

        {
            text:"Die Schnecken mit etwas Abstand in die Auflaufform setzen und abgedeckt ca. 30 Minuten bei Zimmertemperatur ruhen lassen, bis sie ihr Volumen deutlich vergrößert haben. Währenddessen den Ofen auf 180 °C Ober-/Unterhitze vorheizen."
        },

        {
            text:"Die Schnecken im vorgeheizten Backofen ca. 30 Minuten goldbraun backen. Werden sie zu dunkel, die letzten 10 Minuten locker mit Alufolie abdecken."
        },

        {
            text:"Für die Glasur den Puderzucker mit dem Wasser verrühren. Mit einem Löffel auf den noch warmen Hefeschnecken verteilen und diese anschließend noch 5–10 Minuten abkühlen lassen."
        }
    ]
},

{
    id: "46",
    title: "Gyrospasta",
    category: ["Pasta", "Fleisch",], 
    image: "images/Gyrospasta.jpeg",
    time:{
        preparation: "10 min",
        cooling: "1 std 30 min",
        cooking: "20 min",
        total:"2 std"
    },
      related: ["47", "13", "12"],
    portions: "6 Portionen",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Cremige Spaghetti mit würzigem Hähnchen und leckerer Käsekruste.",

    /* 🍽️ ZUTATEN */
    ingredients:{


    "Gyros": [

        "400g Hähnchengeschnetzeltes",
        "4 EL Olivenöl",
        "1 EL Weißweinessig",
        "1 TL Paprikapulver",
        "1 1/2 TL getrockneter Oregano",
        "1/2 TL getrockneter Thymian",
        "1/4 TL getrockneter Majoran",
        "2 Knoblauchzehen",
        "1/2 große weiße Zwiebel",
        "1 TL Salz",
        "Pfeffer"

    ],

    "Außerdem": [
        "500g Spaghetti (Nr. 5)",
        "250ml Kochsahne",
        "250g geriebener Gouda",
    ],

    },


    /* 👨‍🍳 ZUBEREITUNG */
    steps: [
"Die Hähnchenstücke jeweils in dünne Scheiben schneiden. Für die Marinade die Zwiebel und den Knoblauch schälen und fein hacken.  Die restlichen Zutaten für die Marinade mit dem Öl vermengen und zusammen mit dem Knoblauch, der Zwiebel und dem Fleisch in eine Box mit Deckel geben. das Fleisch mit der Würze etwas einmassieren, abdecken und für mind. 1 1/2 Stunden im Kühlschrank ziehen lassen.",

"Kurz vor Ende der Ruhezeit einen Topf mit Salzwasser aufsetzen und einen Topf ohne Öl erhitzen.",

"Das Fleisch, mitsamt der Marinade, in dem Topf ohne Öl, unter gelegentlichem Rühren ca. 8min scharf anbraten. In der Zwischenzeit die Nudeln in dem kochenden Salzwasser ca. 2min bis vor dem Ende der auf der Packung angegebenen Garzeit kochen.",

"Das Fleisch mit der Sahne ablöschen, die Nudeln unterrühren, 1 Kelle Pastawasser dazugeben, aufkochen und ca. 5 fertig kochen, bis die Nudeln al dente sind und die Soße cremig.",

"Die Nudeln in eine kleine Auflaufform füllen, den Käse auf den Nudeln verteilen und im Backofen, bei höchster Grillstufe ca. 7 min goldbraun backen."
    ]
},

{
    id: "47",
    title: "Gurkensalat",
    category: ["Salate", "Beilagen", "Vegan", "Vegetarisch"], 
    image: "images/Gurkensalat.jpeg",
    time:{
        preparation: "5 min",
        resting: "15 min",
        total:"20 min"
    },
    related: ["46", "1", "2"],
    portions: "4 Portionen",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Hauchdünne Gurkenscheiben in leckerem Dressing.",

    /* 🍽️ ZUTATEN */
    ingredients:{

        "Gurke":[
            "1 Salatgurke",
            "1 EL Salz"
        ],

        "Dressing":[
            "2 EL Olivenöl",
            "1 TL Weißweinessig",
            "1 TL gefriergetrocknete Salatkräuter",
            "Salz",
            "Pfeffer"
        ]
    },


    /* 👨‍🍳 ZUBEREITUNG */
    steps:[
        "Die Enden von der Gurke entfernen und die Gurke in feine Scheiben hobeln. Mit dem Salz vermengen und ca. 10-15 Minuten ziehen lassen.",

        "Alle Dressingzutaten miteinander vermischen.",

        "Das überschüssige Wasser von den Gurken abgießen und die Gurken etwas ausdrücken. Das Dressing zu den Gurken geben und alles gut vermischen."
    
    ]
},

{
    id: "48",
    title: "Johannisbeer-Joghurt-Muffins",
    category: ["süßes Gebäck", "Vegetarisch"], 
    image: "images/Johannisbeer-Joghurt-Muffins.jpeg",
    time:{
        preparation: "10 min",
        baking: "22 min",
        cooling: "10 min",
        total:"42 min"
    },
    related: ["45", "40", "2"],
    portions: "12 Stück",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Saftige Muffins mit süß-sauren Johannisbeeren.",

    /* 🍽️ ZUTATEN */
    ingredients:{

        "":[
            "200g Mehl (Type 405)",
            "90g Zucker",
            "1 TL Vanillezucker",
            "2 TL Backpulver",
            "1 Prise Salz",
            "65g Joghurt",
            "120ml Milch",
            "75ml Öl",
            "2 Eier",
            "60g Johannisbeeren (vom Strunk entfernt)"
        ]

    },


    /* 👨‍🍳 ZUBEREITUNG */
    steps:[
        "Den Backofen auf 180 Grad Ober-/Unterhitze vorheizen und ein Muffinblech mit Muffinförmchen auskleiden.",

        "Das Mehl mit dem Salz, dem Backpulver, dem Zucker und dem Vanillezucker in einer Schüssel vermengen und in der Mitte eine Mulde formen.",

        "Das Öl, die Milch, den Joghurt und die Eier in die Mulde geben und alles mit einem Schneebesen verrühren, bis keine Mehlklümpchen mehr zu sehen sind.",

        "Die Johannisbeeren vorsichtig unterheben und den Teig mit einem Eisportionierer auf die vorbereiteten Muffinförmchen aufteilen.",

        "Im vorgeheizten Backofen ca. 22 Minuten backen (Stäbchenprobe!). Aus dem Backofen nehmen, mindestens 10 Minuten abkühlen lassen und anschließend aus der Form lösen."
    ]
},

{
    id: "49",
    title: "Griechischer Salat",
    tips: [
        "Zu diesem Salat passen <a href='recipe.html?id=50'>Griechische Mini-Lagana</a> super."
    ],
    category: ["Salate", "Vegetarisch"],
    image: "images/griechischer-Salat.jpg",
    time:{
        preparation: "30 min",
        total: "30 min"
    },
    related: ["44", "12", "2"],
    portions: "6 Portionen",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Buntes, knackiges Gemüse mit weißen Bohnen in einem cremig-würzigen Dressing.",

    /* 🍽️ ZUTATEN */
    ingredients:{

        "Salat":[
            "2 Salatgurken",
            "600g Fleischtomaten <i>(ca. 3 Stück)</i>",
            "1 Dose weiße Bohnen (à 800g)",
            "2 rote Spitzpaprika",
            "2 rote Zwiebeln",
            "100g grüne Oliven"
        ],

        "Dressing":[
            "75g griechischer Joghurt",
            "4 EL Wasser",
            "3 EL Olivenöl",
            "2 Knoblauchzehen",
            "1 TL getrockneter Oregano",
            "1 TL Zitronenschale",
            "Salz",
            "Pfeffer"
        ]

    },

    /* 👨‍🍳 ZUBEREITUNG */
    steps:[
        "Die Gurken nach Belieben schälen, vierteln und in Scheiben schneiden. Die Tomaten und die Paprika grob würfeln. Die Zwiebeln schälen, vierteln und in feine Ringe schneiden.",

        "Die Bohnen in ein Sieb abgießen und gut abtropfen lassen. Die Oliven halbieren.",

        "Für das Dressing den Knoblauch schälen, durch eine Knoblauchpresse pressen und mit den restlichen Zutaten cremig verrühren.",

        "Das Gemüse, die Bohnen, die Oliven und das Dressing in eine große Schüssel geben und gut vermengen."
    ]
},
{
    id: "50",
    title: "Griechische Mini-Lagana",
    category: ["herzhaftes Gebäck", "Vegetarisch", "Vegan"], 
    image: "images/Mini-Lagana.jpeg",
    time:{
        preparation: "25 min",
        baking: "20 min",
        rising: "1 std 30 min",
        cooling: "10 min",
        total:"2 std 25 min"
    },
    related: ["49", "6", "13"],
    portions: "3 Stück",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Herrlich weiche und fluffige Sesamfladen mit knuspriger, goldbrauner Kruste.",

    /* 🍽️ ZUTATEN */
    ingredients:{

        "Teig":[
            "250g Mehl (Type 550)",
            "160ml lauwarmes Wasser",
            "4g Trockenhefe",
            "5g Salz",
            "1 Prise Zucker",
            "1 EL Olivenöl"
        ],

        "Topping":[
            "weißer Sesam",
            "Wasser"
        ]

    },


    /* 👨‍🍳 ZUBEREITUNG */
    steps:[
        "Das lauwarme Wasser mit dem Zucker und der Hefe verrühren und ca. 5 Minuten ruhen lassen. In der Zwischenzeit das Mehl mit dem Salz in einer Schüssel vermengen, in der Mitte eine Mulde formen und das Hefewasser sowie das Olivenöl dazugeben. Alles ca. 10 Minuten auf mittlerer bis hoher Stufe zu einem klebrigen Teig kneten, bis er sich vom Schüsselrand löst.",

        "Den Teig in eine geölte Schüssel legen, leicht mit Öl bestreichen und abgedeckt bei Zimmertemperatur ca. 60 Minuten gehen lassen, bis er sein Volumen verdoppelt hat.",

        "Den Ofen auf 200 Grad Ober-/Unterhitze vorheizen und ein Backblech mit Backpapier belegen.",

        "Den Teig auf eine leicht bemehlte Arbeitsfläche geben, in 3 Teile à ca. 140g teilen und rundwirken. Jedes Teigstück auf das Backpapier legen und zu einem ca. 1 cm dicken Oval zurechtdrücken.",

        "Abdecken und erneut ca. 30 Minuten gehen lassen.",

        "Dann mit den Fingerspitzen vorsichtig ein Schachbrettmuster in den Teig drücken. Mit etwas Wasser bestreichen, mit Sesam bestreuen und im vorgeheizten Backofen ca. 20 Minuten backen, bis der Boden goldbraun ist und sich das Brot beim Klopfen auf die Unterseite hohl anhört.",

        "Die noch warmen Brote in ein Küchentuch wickeln und ca. 10 Minuten darin auskühlen lassen."
    ]
},
{
    id: "52",
    title: "Hackbällchen-Nudelpfanne",
      tips: [
        "Aus dem restlichen Quark kannst du super <a href='recipe.html?id=51'>Glücksschweinchen</a> backen."
    ],
    category: ["Pasta", "Fleisch"],
    image: "images/hackbällchen-nudelpfanne.jpeg",
    time:{
        preparation: "35 min",
        cooking:"25 min",
        total: "1 std"
    },
    related: ["16", "1", "23"],
    portions: "5 Portionen",
    difficulty: "Mittel",
    rating: 4.6,
    description: "Cremige Pasta mit saftigen, mit Käse gefüllten Hackbällchen.",

    /* 🍽️ ZUTATEN */
    ingredients:{

        "Hackbällchen":[
            "500g Rinderhack",
            "1 Ei",
            "100g Magerquark",
            "50g Paniermehl",
            "1 TL Worcestersauce",
            "1 gehäufter TL Senf",
            "1 große Zwiebel",
            "1 große Knoblauchzehe",
            "1/2 TL Paprikapulver",
            "1 TL getrocknete Petersilie",
            "4 Cheddarscheiben (ca. 100g)",
            "Salz",
            "Pfeffer",
            "Olivenöl"
        ],

        "Soße":[
            "1 EL Tomatenmark",
            "250ml Kochsahne",
            "1 kleine Zwiebel",
            "Bratfett der Hackbällchen"
        ],

        "Außerdem":[
            "500g Farfalle"
        ]

    },


    /* 👨‍🍳 ZUBEREITUNG */
    steps:[

        {
            text:"Für die Hackfleischmasse die Zwiebel schälen und fein hacken. Den Knoblauch ebenfalls schälen und durch eine Knoblauchpresse drücken. Das Hackfleisch mit dem Ei, dem Magerquark, dem Paniermehl, der Worcestersauce, dem Senf, der Zwiebel, dem Knoblauch, dem Paprikapulver, der Petersilie, Salz und Pfeffer vermengen."
        },

        {
            text:"Je 2 Cheddarscheiben übereinanderlegen und 24 kleine Würfelstapel daraus schneiden <i>(sodass jeder Würfelstapel aus zwei Scheiben Käse besteht)</i>. Dies mit den anderen beiden Scheiben wiederholen."
        },

        {
            text:"Je einen leicht gehäuften Teelöffel Hackfleischmasse nehmen, zu einer Kugel formen und flach drücken. Einen Würfelstapel in die Mitte legen, die Seiten darüberklappen und erneut zu einer Kugel formen. Auf diese Weise 48 kleine Bällchen formen.",
            images:[
                "images/flach.jpeg",
                "images/flach2.jpeg",
                "images/flach3.jpeg",
                "images/flach4.jpeg"
            ]
        },

        {
            text:"In einem beschichteten Topf so viel Olivenöl erhitzen, dass der Boden gerade so bedeckt ist. Außerdem einen Topf mit Salzwasser zum Kochen bringen."
        },

        {
            text:"Die Bällchen in 2 Runden (je ca. 24 Bällchen) unter gelegentlichem Wenden rundherum ca. 5 Minuten knusprig anbraten. <i>(Am einfachsten geht das Wenden und Herausnehmen mit einer Schaumkelle.)</i>"
        },

        {
            text:"Die fertigen Bällchen auf einen Teller mit Küchenpapier geben und im 50 Grad warmen Ofen warmhalten."
        },

        {
            text:"Wenn die zweite Runde Hackbällchen in den Topf kommt, die Nudeln in das kochende Salzwasser geben und bis ca. 2 Minuten vor Ende der angegebenen Garzeit kochen."
        },

        {
            text:"In der Zwischenzeit die Zwiebel für die Soße schälen und fein hacken."
        },

        {
            text:"Wenn die zweite Runde Hackbällchen fertig ist, die Hitze reduzieren und die Zwiebel im Bratfett ca. 2 Minuten glasig dünsten. Das Tomatenmark dazugeben und weitere 2 Minuten mitrösten. Die Nudeln dazugeben und mit der Sahne sowie einer kleinen Kelle Pastawasser ablöschen. Alles aufkochen und ca. 5 Minuten unter gelegentlichem Rühren kochen, bis die Soße cremig ist und die Nudeln al dente sind."
        },

        {
            text:"Die Hackbällchen unterheben und ca. 1 Minute fertig kochen."
        }
    ]
},

{
    id: "51",
    title: "Glücksschweinchen",
    category: ["süßes Gebäck", "Vegetarisch"],
    image: "images/glücksschweinchen.jpeg",
    time:{
        preparation: "10 min",
        baking:"20 min",
        total: "30 min"
    },
    related: ["45", "3", "43"],
    portions: "7 Stück",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Fluffige Quark-Öl-Teig-Schweinchen – perfekt für Silvester.",

    /* 🍽️ ZUTATEN */
    ingredients:{

        "Teig":[
            "300g Mehl (type 405)",
            "150g Magerquark",
            "70g Zucker",
            "1 Pck. Backpulver",
            "80ml neutrales Öl",
            "80ml Milch",
            "1 Prise Salz"
        ],

        "Topping":[
            "etwas Nuss-Nougat-Creme"
        ]

    },


    /* 👨‍🍳 ZUBEREITUNG */
    steps:[

        {
            text:"Den Ofen auf 180 Grad Ober/Unterhitze vorheizen."
        },

        {
            text:"Für den Teig alle trockenen Zutaten in einer Schüssel vermengen und in der Mitte eine Mulde formen. Den Quark, die Milch und das Öl mit einem Schneebesen verrühren und in die Mulde geben. Alles mit einem Löffel verrühren, bis sich die Zutaten verbunden haben. Anschließend mit den Händen zu einem glatten Teig verkneten, bis kein trockenes Mehl mehr zu sehen ist."
        },

        {
            text:"Den Teig auf eine leicht bemehlte Arbeitsfläche geben, mit etwas Mehl bestäuben und ca. 1cm dick ausrollen. Mit einem runden Gefäß mit ca. 8cm Durchmesser 7 Kreise ausstechen und mit etwas Abstand auf ein mit Backpapier belegtes Backblech legen. Den restlichen Teig erneut ca. 6mm dick ausrollen und mit einem runden Ausstecher mit 4cm Durchmesser 14 Kreise ausstechen. Die Hälfte davon als Nasen auf die großen Kreise legen. Die restlichen Kreise in der Mitte halbieren und jeweils zwei Hälften als Ohren an den Rand der Schweinchen legen und leicht andrücken.",
            images:[
                "images/schwein.jpeg",
                "images/schwein1.jpeg",
                "images/schwein2.jpeg"
            ]
        },

        {
            text:"Die Schweinchen im vorgeheizten Backofen ca. 20min goldbraun backen."
        },

        {
            text:"Aus dem Ofen nehmen und mit einem Holzspieß etwas Nuss-Nougat-Creme aufnehmen. Je zwei Augen auf die Schweinchen malen und warm oder kalt servieren."
        }

    ]
},

{
    id: "53",
    title: "Köttbullar aus dem Ofen",
    tips: [
        "Zu den Köttbullar passt das <a href='recipe.html?id=54'>cremige Kartoffelpüree</a> super."
    ],
    category: ["Fleisch"],
    image: "images/köttbullar-ofen.jpeg",
    time:{
        preparation: "15 min",
        baking:"25 min",
        total: "40 min"
    },
    related: ["52", "50", "46"],
    portions: "24 Stück",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Saftige Hackbällchen – der schwedische Klassiker aus dem Ofen.",

    /* 🍽️ ZUTATEN */
    ingredients:{

        "":[
            "800g Rinderhackfleisch",
            "70g Paniermehl",
            "150ml Milch",
            "2 Eier",
            "1/2 weiße Zwiebel",
            "1 EL Öl",
            "1 EL Worcestersauce",
            "1 gehäufter TL Senf",
            "3 Kugeln Piment",
            "1 EL Allkrydda <i>(alternativ: Salz)</i>",
            "Pfeffer"
        ]

    },


    /* 👨‍🍳 ZUBEREITUNG */
    steps:[

        {
            text:"Den Ofen auf 200 Grad Ober/Unterhitze vorheizen und eine feuerfeste Schale mit Wasser auf den Ofenboden stellen."
        },

        {
            text:"Das Paniermehl mit der Milch übergießen und etwas quellen lassen."
        },

        {
            text:"In der Zwischenzeit die Zwiebel schälen und fein hacken. Das Öl in einer kleinen Pfanne erhitzen und die Zwiebel darin zusammen mit dem Piment ca. 5min bei mittlerer Hitze glasig dünsten."
        },

        {
            text:"Das Hackfleisch in eine große Schüssel geben. Die Pimentkugeln aus den Zwiebeln entfernen und die Zwiebeln mitsamt Bratfett, die gequollenen Semmelbrösel, die Eier, den Senf, die Worcestersauce, die Allkrydda und den Pfeffer dazugeben. Alles zu einer glatten Masse verkneten."
        },

        {
            text:"Aus der Masse 24 kleine Bällchen formen, auf ein leicht gefettetes Backblech geben und im vorgeheizten Backofen ca. 20min backen. Die Schale mit dem Wasser aus dem Ofen nehmen und die Bällchen anschließend bei höchster Grillstufe ca. 5min fertig backen."
        }

    ]
},

{
    id: "54",
    title: "Cremiges Kartoffelpüree",
    tips: [
        "Im Prinzip kannst du jede Kartoffelsorte für das Püree nehmen, am cremigsten wird es allerdings mit mehligkochenden Kartoffeln."
    ],
    category: ["Beilage", "Vegetarisch"],
    image: "images/kartoffelpüree.jpeg",
    time:{
        preparation: "10 min",
        cooking: "20 min",
        total: "30 min"
    },
    related: ["53", "39", "34"],
    portions: "6 Portionen",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Herrlich cremiges Kartoffelpüree – super einfach, schnell und aus wenigen Zutaten selbst gemacht.",

    /* 🍽️ ZUTATEN */
    ingredients:[
        "1,5 kg Kartoffeln",
        "30g Butter",
        "200ml Milch",
        "Salz",
        "Pfeffer",
        "1 Prise Muskat"
    ],

    /* 👨‍🍳 ZUBEREITUNG */
    steps:[
        "Die Kartoffeln schälen, in grobe Würfel schneiden, in einen Topf geben, mit Salzwasser bedecken, aufkochen und ca. 20min leise köcheln lassen, bis sie beim Einstechen mit einer Gabel weich sind.",

        "Die Kartoffeln gut abgießen, die Milch, die Butter in kleinen Stücken sowie Salz, Pfeffer und Muskat dazugeben und mit einem Kartoffelstampfer zu einem feinen Püree stampfen."
    ]
},

{
    id: "55",
    title: "Linsen mit Spätzle",
    category: ["Fleisch"],
    image: "images/linsen-mit-spätzle.jpeg",
    time:{
        preparation: "5 min",
        cooking: "45 min",
        total: "50 min"
    },
    related: ["21", "19", "4"],
    portions: "8 Portionen",
    difficulty: "Einfach",
    rating: 4.6,
    description: "Der schwäbische Wohlfühlteller mit würzigen Linsen, weichen Spätzle und goldbraun gebratener Wurst.",

    /* 🍽️ ZUTATEN */
    ingredients:{
        "Linsen": [
            "500g Berglinsen",
            "1,5l Gemüsebrühe",
            "150g Bauchspeckstück",
            "1 große Gemüsezwiebel",
            "1 TL Zucker <i>(ca. 5g)</i>",
            "40g Butter",
            "40g Mehl",
            "3 Lorbeerblätter",
            "1 EL Balsamicoessig",
            "Salz",
            "Pfeffer"
        ],

        "Außerdem": [
            "2 Pck. Geflügelfleischwurst (à 500g)",
            "500g Spätzle"
        ]
    },


    /* 👨‍🍳 ZUBEREITUNG */
    steps:[

        "Für die Linsen die Zwiebel schälen und fein würfeln. 100g des Specks in kleine Würfel schneiden.",

        "Die Butter in einem Topf erhitzen und die Zwiebel darin bei mittlerer Hitze ca. 2min glasig dünsten.",

        "Die Speckwürfel dazugeben und weitere 2min auf höchster Stufe unter gelegentlichem Rühren mitrösten. Den Zucker unterrühren und ca. 1min unter gelegentlichem Rühren etwas karamellisieren.",

        "Das Mehl mit einem Schneebesen unterrühren, kurz anschwitzen und mit der Gemüsebrühe ablöschen. Die Linsen, das restliche Speckstück und die Lorbeerblätter hinzufügen, aufkochen und bei mittlerer Hitze ca. 35min unter gelegentlichem Rühren gar kochen.",

        "Währenddessen die Wurst in grobe Würfel schneiden, auf ein doppelt mit Backpapier belegtes Backblech verteilen und im Ofen bei Grillstufe 2 im oberen Drittel ca. 20min goldbraun braten. Dabei nach der Hälfte der Zeit einmal wenden.",

        "Sobald die Wurst im Ofen ist, einen Topf mit Salzwasser zum Kochen bringen. Die Spätzle in das kochende Wasser geben und nach Packungsbeilage gar kochen. Anschließend abgießen und mit etwas Öl vermengen.",

        "Wenn die Linsen fertig sind, den Topf vom Herd nehmen. Das Speckstück und die Lorbeerblätter entfernen, den Essig unterrühren, mit Salz und Pfeffer abschmecken und mindestens 5min ziehen lassen.",

        "Die Wurst aus dem Ofen nehmen und zusammen mit den Spätzle und den Linsen servieren."
    ]
},
];
