var left = document.getElementById("left");
const leftarray = [];
function initMap() {

    function initMap() {

        const namee = localStorage.getItem("cafe-name");
        const longitudevalue = localStorage.getItem("longitude-value");
        const latitudevalue = localStorage.getItem("latitude-value");
        const content = namee + localStorage.getItem("cafe-content");

        var newcoord = {
            lat: Number(latitudevalue),
            lng: Number(longitudevalue),
            //parsefloat makes it into a number//
            content: namee + "," + content,
        }
            ;

        //sets initial location//
        var initiallocation = { lat: 1.3521, lng: 103.8198 };

        //sets zoom//
        var mapOptions = {
            center: initiallocation,
            zoom: 11.5,

        };
        var googlemap = new google.maps.Map(document.getElementById("map"), mapOptions);

        const websites = [];

        const coord = [
            {
                lat: 1.353135966878527,
                lng: 103.83543142897526,
                name: "<p>Colombus Coffee Co</p>",
                content: "<p>Colombus Coffee Co</p>"
                    +
                    " <p>Casual corner cafe offering brunch staples, waffles & a global menu, plus coffee & pressed juice.</p> "
                    +
                    "<br>"
                    +
                    " <a href=https://www.columbuscoffeeco.com/>Website</a> ",
            }
            ,
            {
                lat: 1.3537848227434839, lng: 103.83432646927247,
                name: "<p>Hello Arigato</p>",
                content: "<p>Hello Arigato</p>"
                    +
                    "<p> Sandos </p>"
                    +
                    "<br>"
                    +
                    "<a href=https://www.helloarigato.com/>Website</a>",

            }
            ,
            {
                lat: 1.353779345634805, lng: 103.83454367206272,
                name: "<p>Salted Caramel </p>",
                content: "<p>Salted Caramel </p>"
                    +
                    "<br>"
                    +
                    "<a href=https://www.saltedcaramel.sg/>Website</a>",

            },
            {
                lat: 1.352772754194051, lng: 103.83452876150669,
                name: "<p>Oaks Coffee</p>",
                content: "<p>Oaks Coffee</p>"
                    +
                    "<br>"
                    +
                    "<a href=https://www.oakscoffeeco.com/>Website</a>",

            },
            {
                lat: 1.3525568965360337, lng: 103.83470712840706,
                name: "<p>One Man Coffee</p>",
                content: "<p>One Man Coffee</p>"
                    +
                    "<br>"
                    +
                    "<a href=http://www.onemancoffee.com.sg/index.html>Website</a>",

            },
            {
                lat: 1.351462486358585, lng: 103.83536169566595,
                name: "<p>Knockhouse Cafe</p>",
                content: "<p>Knockhouse Cafe</p>"
                    +
                    "<br>"
                    +
                    "<a href=https://www.facebook.com/knockhousecafe/>Website</a>",

            },
            {
                lat: 1.3511563982642043, lng: 103.83551702909811,
                name: "<p>SOD Cafe</p>",
                content: "<p>SOD Cafe</p>"
                    +
                    "<br>"
                    +
                    "<a href=https://sodcafe.oddle.me/en_SG/>Website</a>",

            },
            {
                lat: 1.3509173600624746, lng: 103.83560180628885,
                name: "<p>State of Affairs</p>",
                content: "<p>State of Affairs</p>"
                    +
                    "<br>"
                    +
                    "<a href=https://www.stateofaffairs.sg/>Website</a>",

            },
        ];
        if (newcoord.namee == "") {
            coord.push(newcoord);
        }
        else { console.log("no new coord inputted") }


        let numberofcafes = coord.length;

        const markers = [];
        const infowindows = [];
        for (i = 0; i < numberofcafes; i++) {
            var positioncoord = { lat: coord[i].lat, lng: coord[i].lng };
            marker = new google.maps.Marker({
                position: positioncoord,
                map: googlemap,
            }),

                markers.push(marker);
            var infowindow = new google.maps.InfoWindow({
                content: coord[i].content,
            });

            infowindows.push(infowindow);
            function addclick(marker, infowindow) {
                marker.addListener("click", function () {
                    infowindow.open(googlemap, marker);
                });
            }
            addclick(marker, infowindow);
        };

        function pickRandom() {
            var randomcafe = Math.floor(Math.random() * (numberofcafes));
            infowindows[randomcafe].open(googlemap, markers[randomcafe]);
        }
        function clearwindows() {
            for (i = 0; i < numberofcafes; i++) {
                infowindows[i].close();
            }
        }
        clearwindow = document.getElementById("clear");
        clearwindow.addEventListener("click", function () {
            clearwindows()
        });
        randomize = document.getElementById("randomize");
        randomize.addEventListener("click", function () {
            pickRandom()
        });
        for (i = 0; i < numberofcafes; i++) {
            left = coord[i].name;
            leftarray.push(left);
        }
        localStorage.setItem("leftarray", JSON.stringify(leftarray));

    };

    initMap();

};

;