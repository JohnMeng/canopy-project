var items = [
    {
        "type" : "chapter",
        "title" : "Chapter 1: Getting Started",
        "link" : null
    }, {
        "type" : "section",
        "title" : "1.1: About Cloud-Enabled Devices",
        "link" : "c1_1.html"
    }, {
        "type" : "section",
        "title" : "1.2: About Canopy",
        "link" : "c1_2.html"
    }, {
        "type" : "section",
        "title" : "1.3: Canopy Basics",
        "link" : "c1_3.html"
    }, {
        "type" : "section",
        "title" : "1.4: Using Canopy",
        "link" : "using_canopy.html"
    }, {
        "type" : "section",
        "title" : "1.5: Embedded Installation",
        "link" : "embedded_install.html"
    }, {
        "type" : "section",
        "title" : "1.6: Server (Cloud) Installation",
        "link" : "cloud_install.html"
    }, {
        "type" : "chapter",
        "title" : "Chapter 2: Cloud Variables",
        "link" : null
    }, {
        "type" : "section",
        "title" : "2.1: What Are They?",
        "link" : "c2_1.html"
    }
];

function RenderHead() {
    document.write("\
<head>\
    <title>Canopy - Developer Zone</title>\
    <script src='http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js'></script>\
    <script src='../../canopy_project.js'></script>\
    <script src='toc.js'></script>\
    <link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,700|ABeeZee|Titillium+Web:200,300,400,700' rel='stylesheet' type='text/css'>\
    <script type='text/javascript' src='../../3rdparty/shjs/sh_main.min.js'></script>\
    <link type='text/css' rel='stylesheet' href='../../3rdparty/shjs/sh_style.css'>\
    <link href='../../canopy_project.css' rel='stylesheet' type='text/css'>\
</head>\
    ");
}

function RenderBodyStart() {
    document.write("\
<body onload=\"sh_highlightDocument('../../3rdparty/shjs/', '.min.js');\">\
<div class=main-outer>\
    <div class='bg-white centered'>\
        <script> \
            var RELATIVE_PATH = '../../';\
            RenderTopbar('devzone');\
        </script>\
    </div>\
    <div class='bg-lightgray banner-thin centered' >\
        Developer Zone &rarr; The Canopy Book &rarr; Chapter 1\
    </div>\
\
    <div class='book'>\
        <table width=100%>\
            <tr>\
                <td width=1 valign=top nowrap style='padding-right:20px'>\
                    <div class=toc>\
                        <script>RenderToc('using_canopy.html');</script>\
                    </div>\
                </td>\
                <td valign=top>\
\
        <div class='book-content'>\
    ");
}

function RenderToc(page) {
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.link == page) {
            document.write("<div class=toc-" + item.type + "><b><a href='" + item.link + "'>" + item.title + "</a></b></div>");
        } 
        else if (item.link != null) {
            document.write("<div class=toc-" + item.type + "><a href='" + item.link + "'>" + item.title + "</a></div>");
        }
        else {
            document.write("<div class=toc-" + item.type + ">" + item.title + "</div>");
        }
    }
}

function RenderNextPrevButtons(page) {
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.link == page) {
            if (i > 1) {
                document.write("<a href='" + items[i-1].link + "'>Prev</a> | ");
            }
            if (i < items.length - 1) {
                document.write("<a href='" + items[i+1].link + "'>Next</a>");
            }
        } 
    }
}

var gUUID = undefined;
function RenderUUID() {
    if (gUUID == undefined)
    {
        gUUID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
            function(c) { var r = Math.random()*16|0, v = c == 'x'
            ? r : (r&0x3|0x8); return v.toString(16); });
    }
    document.write(gUUID);
}
var gSecretKey = undefined;
function RenderSecretKey() {
    if (gSecretKey == undefined)
    {
        gSecretKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g,
            function(c) { var r = Math.random()*16|0, v = r; return v.toString(16); });

    }
    document.write(gSecretKey);
}

function RenderBodyFooter() {

    RenderNextPrevButtons(BOOK_SECTION_LINK);
    document.write("\
\
<div class=disqussion id=disqus_thread></div>\
<script type='text/javascript'>\
var disqus_shortname = 'canopyiot';\
\
(function() {\
 var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;\
 dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';\
 (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);\
 })();\
</script>\
<noscript>Please enable JavaScript to view the <a href='http://disqus.com/?ref_noscript'>comments powered by Disqus.</a></noscript>\
            \
\
\
                </td>\
            </tr>\
        </table>\
    </div>\
</div>\
\
    ");
    RenderFooter();
    document.write("\
</div>\
</body>\
    ");
}