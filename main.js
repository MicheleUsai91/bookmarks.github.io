const BOOKMARKS = {
    "Shopping": [
        { "name": "Amazon", "link": "http://www.amazon.it/", "frequent": 0 },
        { "name": "Subito", "link": "http://www.subito.it/", "frequent": 0 },
        { "name": "AliExpress", "link": "http://it.aliexpress.com/", "frequent": 0 },
        { "name": "ePrice", "link": "http://www.eprice.it/", "frequent": 0 },
        { "name": "Mediaworld", "link": "http://www.mediaworld.it/", "frequent": 0 }
    ],
    "Work": [
        { "name": "Box", "link": "https://app.box.com/folder/0", "frequent": 1 },
        { "name": "GestioneVPN", "link": "https://app.box.com/s/2x6910n37g1ftl4xasq70lbowcevr6m", "frequent": 1 },
        { "name": "Chime", "link": "https://app.chime.aws/", "frequent": 1 },
        { "name": "Fondo EST", "link": "https://my.fondoest.it/", "frequent": 1 },
        { "name": "Webmail", "link": "https://webmailbeta.aruba.it/", "frequent": 1 },
        { "name": "Odoo", "link": "https://pccube.odoo.com/web#cids=1&home=", "frequent": 1 },
        { "name": "Sconti Aziendali", "link": "https://pccube.convenzioniaziendali.it/", "frequent": 1 },
        { "name": "Upwork", "link": "https://www.upwork.com/", "frequent": 1 }
    ],
    "Poste": [
        { "name": "Poste Italiane", "link": "https://www.poste.it/", "frequent": 0 },
        { "name": "PEC Webmail", "link": "https://webmail.postecert.it/certmail/index-rui.jsp?v=3.0.86.0#/", "frequent": 0 }
    ],
    "Personale": [
        { "name": "Agenzia delle Entrate", "link": "https://www.agenziaentrate.gov.it/portale/home/", "frequent": 0 },
        { "name": "Comune di Cagliari", "link": "https://www.comune.cagliari.it/portale/", "frequent": 0 },
        { "name": "Il Portale dell'Automobilista", "link": "https://www.ilportaledellautomobilista.it/web/portale-automobilista/home", "frequent": 0 },
        { "name": "MyAnpal", "link": "https://myanpal.anpal.gov.it/", "frequent": 0 },
        { "name": "Sardegna Lavoro", "link": "https://www.sardegnalavoro.it/", "frequent": 0 },
        { "name": "ACI", "link": "https://www.aci.it/", "frequent": 0 }
    ],
    "Resources": [
        { "name": "DevDocs", "link": "https://devdocs.io/", "frequent": 1 },
        { "name": "Must Read Books", "link": "https://www.reddit.com/r/learnprogramming/comments/83xyow/must_read_books/", "frequent": 1 },
        { "name": "FullStack", "link": "https://fullstackopen.com/en/", "frequent": 1 },
        { "name": "Roadmap WebDev", "link": "https://github.com/kamranahmedse/developer-roadmap", "frequent": 1 },
        { "name": "Advanced Bash-Scripting Guide", "link": "https://tldp.org/LDP/abs/html/", "frequent": 1 },
        { "name": "PHP The Right Way", "link": "https://phptherightway.com/", "frequent": 1 }
    ],
    "Tools": [
        { "name": "GitHub", "link": "https://github.com/", "frequent": 1 },
        { "name": "HexEd", "link": "https://hexed.it/", "frequent": 1 },
        { "name": "Clean Installation", "link": "C:/Users/Michele/Documents/Programmazione/Code/WebApp/CleanInstall/CleanInstall.html", "frequent": 1 },
        { "name": "PHPInfo", "link": "http://localhost:4000/Documents/Programmazione/Code/WebApp/Startpage/Pages/PHPInfo.php", "frequent": 1 },
        { "name": "Overleaf", "link": "https://it.overleaf.com/", "frequent": 1 },
        { "name": "Wiby", "link": "https://wiby.me/", "frequent": 1 },
        { "name": "Wolfram|Alpha", "link": "https://www.wolframalpha.com/", "frequent": 1 },
        { "name": "Chat-GPT", "link": "https://www.pizzagpt.it/", "frequent": 1 },
        { "name": "Tuxbell", "link": "http://tuxbell.com/", "frequent": 0 },
        { "name": "ExRx", "link": "https://exrx.net/", "frequent": 0 },
        { "name": "Phind", "link": "https://www.phind.com/", "frequent": 1 }
    ],
    "Utility": [
        { "name": "Modem", "link": "http://192.168.1.1/", "frequent": 0 },
        { "name": "Router", "link": "http://192.168.0.1/webpages/index.1476264749915.html", "frequent": 0 },
        { "name": "PDFescape", "link": "http://www.pdfescape.com/open/", "frequent": 0 },
        { "name": "SketchUp", "link": "https://app.sketchup.com/app", "frequent": 0 }
    ],
    "Books": [
        { "name": "Libgen", "link": "https://libgen.is/", "frequent": 0 },
        { "name": "Sci-Hub", "link": "https://sci-hub.41610.org/", "frequent": 0 },
        { "name": "Z-Library", "link": "https://z-lib.org/", "frequent": 0 }
    ],
    "Cloud": [
        { "name": "GDrive", "link": "https://drive.google.com/drive/u/0/my-drive", "frequent": 0 },
        { "name": "iCloud", "link": "https://beta.icloud.com/", "frequent": 0 },
        { "name": "OneDrive", "link": "https://onedrive.live.com/", "frequent": 0 }
    ],
    "P2P": [
        { "name": "FitGirl", "link": "https://www.1377x.to/user/FitGirl/", "frequent": 1 },
        { "name": "NAHOMHD", "link": "https://www.1377x.to/user/NAHOMhd/", "frequent": 1 }
    ],
    "Socials": [
        { "name": "LinkedIn", "link": "https://www.linkedin.com/feed/", "frequent": 1 },
        { "name": "Telegram", "link": "https://web.telegram.org/#/login", "frequent": 1 },
        { "name": "Whatsapp", "link": "https://web.whatsapp.com/", "frequent": 1 }
    ],
    "Svago": [
        { "name": "Spotify", "link": "https://open.spotify.com/", "frequent": 0 },
        { "name": "Nexus Mods", "link": "https://www.nexusmods.com/", "frequent": 0 }
    ],
    "Manga": [
        { "name": "Baki-Dou (2018)", "link": "https://mangakatana.com/manga/baki-dou-2018.21422", "frequent": 0 },
        { "name": "Berserk", "link": "https://mangakatana.com/manga/berserk.1087", "frequent": 0 },
        { "name": "Boku no Hero Academia", "link": "https://mangakatana.com/manga/boku-no-hero-academia.551", "frequent": 0 },
        { "name": "Kengan Omega", "link": "https://mangakatana.com/manga/kengan-omega.22093", "frequent": 0 },
        { "name": "Juujika no Rokunin", "link": "https://mangakatana.com/manga/juujika-no-rokunin.25073", "frequent": 0 },
        { "name": "Guard Pass", "link": "https://mangakatana.com/manga/guard-pass.25929", "frequent": 0 },
        { "name": "Made in Abyss", "link": "https://mangakatana.com/manga/made-in-abyss.1224", "frequent": 0 },
        { "name": "Onepunch-Man", "link": "https://mangakatana.com/manga/onepunch-man.437", "frequent": 0 },
        { "name": "Nagatoro", "link": "https://mangakatana.com/manga/please-dont-bully-me-nagatoro.19551", "frequent": 0 },
        { "name": "Sakamoto Days", "link": "https://mangakatana.com/manga/sakamoto-days.25740", "frequent": 0 },
        { "name": "Bakemonogatari", "link": "https://mangakatana.com/manga/bakemonogatari-nishio-ishin.20047", "frequent": 0 },
        { "name": "Chainsaw Man", "link": "https://mangakatana.com/manga/chainsaw-man.21890", "frequent": 0 }
    ],
    "Youtube": [
        { "name": "Youtube", "link": "https://www.youtube.com/", "frequent": 0 },
        { "name": "Dictionary of Obscure Sorrows", "link": "https://www.youtube.com/c/obscuresorrows", "frequent": 0 },
        { "name": "DIY Perks", "link": "https://www.youtube.com/@DIYPerks", "frequent": 0 },
        { "name": "Isaac Arthur", "link": "https://www.youtube.com/@isaacarthur3209", "frequent": 0 },
        { "name": "Jack PGM", "link": "https://www.youtube.com/@JackPGM", "frequent": 0 },
        { "name": "JerryRigEverything", "link": "https://www.youtube.com/@JerryRigEverything", "frequent": 0 },
        { "name": "Kiwami Japan", "link": "https://www.youtube.com/channel/UCg3qsVzHeUt5_cPpcRtoaJQ", "frequent": 0 },
        { "name": "Kurzgesagt", "link": "https://www.youtube.com/@kurzgesagt", "frequent": 0 },
        { "name": "Linus Tech Tips", "link": "https://www.youtube.com/@LinusTechTips", "frequent": 0 },
        { "name": "MelodySheep", "link": "https://www.youtube.com/@melodysheep", "frequent": 0 },
        { "name": "PewDiePie", "link": "https://www.youtube.com/user/PewDiePie", "frequent": 0 },
        { "name": "ShortCircuit", "link": "https://www.youtube.com/@ShortCircuit", "frequent": 0 },
        { "name": "Steve1989MREInfo", "link": "https://www.youtube.com/channel/UC2I6Et1JkidnnbWgJFiMeHA", "frequent": 0 },
        { "name": "Stuff Made Here", "link": "https://www.youtube.com/@StuffMadeHere", "frequent": 0 },
        { "name": "Techquickie", "link": "https://www.youtube.com/@Techquickie", "frequent": 0 },
        { "name": "Veritasium", "link": "https://www.youtube.com/@veritasium", "frequent": 0 }
    ]
}

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('bookmarks_list');

    for (const category in BOOKMARKS) {
        if (BOOKMARKS.hasOwnProperty(category)) {
            const categoryList = document.createElement('ul');
            const categoryTitle = document.createElement('h2');
            categoryTitle.textContent = category.toUpperCase();
            categoryList.appendChild(categoryTitle);

            const BOOKMARKSArray = BOOKMARKS[category];
            for (const bookmark of BOOKMARKSArray) {
                const bookmarkItem = document.createElement('li');
                const bookmarkLink = document.createElement('a');
                bookmarkLink.href = bookmark.link;
                bookmarkLink.textContent = bookmark.name;
                bookmarkItem.appendChild(bookmarkLink);
                categoryList.appendChild(bookmarkItem);
            }
            container.appendChild(categoryList);
        }
    }
});