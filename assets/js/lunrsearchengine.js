
var documents = [{
    "id": 0,
    "url": "/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "/about/",
    "title": "About",
    "body": "ProjectVW. com 1973 VW Super Beetle "
    }, {
    "id": 2,
    "url": "/about",
    "title": "About BicycleTips.com",
    "body": "So you want to know about BicycleTips. com? You should read our story. Product ReviewsWe are always open to reviewing new products here on BicycleTips. com. If you have a product you would like us to review, please reach out using the form on this page. If a product is provided for review, we will be clear about who provided the product as to not cause confusion for our readers. Ride ReviewsWe post ride reviews from organized, and unorganized rides we partake in. If an organization would like to see their rides highlighted here on BicycleTips. com, please reach out using the form here on this page. "
    }, {
    "id": 3,
    "url": "/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 4,
    "url": "/event-calendar",
    "title": "BicycleTips.com event-calendar",
    "body": "Here you will find a list of events that BicycleTips. com thinks you might be interested in! This is not a comprehensive list of all events across the country, or even events in the Mid West, but it does contain events that we think our readers, and our writers, will likely want to take part in. We’ve tried to create a list of the big events, and calendar entries for the various deadlines for those events, to make it helpful to try to get yourselves registered for events that might sell out. Google Calendar Direct Link Want to get something on the list? Drop us a line "
    }, {
    "id": 5,
    "url": "/",
    "title": "Home",
    "body": "      Featured:                           All Stories:                                                                               1973 VW Super Beetle Wide Fenders              :       When we were redoing our 1973 Super Beetle in the summer of 1998, I wanted to go with wider fenders. We ordered fiberglass fenders from a company called Innovations in. . . :                                                                                               Chris Hammond                          10 Oct 2017                                                                                                              Have you seen my 1973 VW Super Beetle? VIN# 1332543365              :       When I was 17, and my brother was 16, my parents bought us a car. It was a 1973 VW Super Beetle (Vin/Chassis # 1332543365), honestly I didn&#39;t want it,. . . :                                                                                               Chris Hammond                          09 May 2017                                            "
    }, {
    "id": 6,
    "url": "/redirects.json",
    "title": "",
    "body": "{} "
    }, {
    "id": 7,
    "url": "/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 8,
    "url": "/1973-vw-super-beetle-wide-fenders",
    "title": "1973 VW Super Beetle Wide Fenders",
    "body": "2017/10/10 - When we were redoing our 1973 Super Beetle in the summer of 1998, I wanted to go with wider fenders. We ordered fiberglass fenders from a company called Innovations in Fiberglass. I don&#39;t know if they are still in business or not. We put 3&quot; wider fenders on the rear of the car, and 2&quot; wider on the front. &nbsp; Here&#39;s a shot of the front Here&#39;s a shot of the rear "
    }, {
    "id": 9,
    "url": "/have-you-seen-my-1973-vw-super-beetle-vIN-1332543365",
    "title": "Have you seen my 1973 VW Super Beetle? VIN# 1332543365",
    "body": "2017/05/09 - When I was 17, and my brother was 16, my parents bought us a car. It was a 1973 VW Super Beetle (Vin/Chassis # 1332543365), honestly I didn&#39;t want it, my brother wanted a bug, but I was the one who went with dad to test drive it, and I was the one who fell in love with the car and drive my JR/SR years of high school in Northern California, then hauled it to Rolla, Missouri for college. I loved that car, in the summer of 1998 my father and I redid the suspension on the car and sent the car to Bryant Motors in Sedalia, Missouri to get new wider/fiberglass fenders, and a new paint job. The car was there for a good 3 months, maybe more. When we got it back, it was gorgeous. Over the next year or two we replaced the motor, with a 1776 built by Al out in Wentzeville, MO. I got out of school, started working, and the Super Beetle got parked in my parents garage in St. Charles, MO. &nbsp; In early 2001 it was time for my parents to move to South Carolina, and I was going to stay in Missouri, I couldn&#39;t really keep two cars, so we sold the Super Beetle on Ebay. It sold to a family in Alton, Illinois, not far from where we were. They had two young buys (if memory serves me correctly) and the car was for them, fitting as that is how I came across the car. Over the years I wanted the car back, but I was never able to track down any history on Ebay (they limit how far back you can go). One day I was digging through old hard drives, getting them ready for disposal, when I came across a backup of emails from an 18 month timeframe, a timeframe that covered summer 2001, when I had sold the car on Ebay. Digging through those emails, I was able to track down the name of the family who had purchased the car, and via Facebook I was able to track down the father. I reached out to him inquiring about the car. Took a while, but when he replied he told me the car had gone to Ft Drum, NY with one of his boys in the Army, and was sold to another soldier there. Since that time I&#39;ve scoured Craigslist, Ebay, and Google Image search in hopes of finding my 1973 VW Super Beetle again. I have been unsuccessful, but I hold on to hope that one day I will find my first car and buy it back. If you have any leads on the car, please let me know, you can fill out the Contact Form here. -Chris Hammond, Wildwood, Missouri &nbsp; &nbsp; "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});