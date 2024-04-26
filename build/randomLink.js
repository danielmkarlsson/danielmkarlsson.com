function openSite() {
    var links = [
        "./a.html",
        "./b.html",
        "./c.html",
        "./d.html",
    ];

    // get a random number between 0 and the number of links
    var randIdx = Math.floor(Math.random() * (links.length - 1));
    // construct the link to be opened
    var link = 'http://danielmkarlsson.com/' + links[randIdx];

    return link;
};
