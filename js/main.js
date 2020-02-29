< !doctype html >
    <
    html lang = "en" >

    <
    head >
    <
    title > Title < /title>
    <!-- Required meta tags -->
    <
    meta charset = "utf-8" >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1, shrink-to-fit=no" >


    <
    script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" > < /script> <
    link rel = "stylesheet"
href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
integrity = "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
crossorigin = "anonymous" >
    <
    link rel = "stylesheet"
href = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css" >
    <
    script src = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" > < /script>

<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/chosen/1.8.7/chosen.jquery.js"></script>
<
link rel = "stylesheet"
href = "https://cdnjs.cloudflare.com/ajax/libs/chosen/1.8.7/chosen.min.css" > -->

    <
    link rel = "stylesheet"
href = "https://cdnjs.cloudflare.com/ajax/libs/jquery-typeahead/2.11.0/jquery.typeahead.css" >
    <
    script src = "https://cdnjs.cloudflare.com/ajax/libs/jquery-typeahead/2.11.0/jquery.typeahead.js" > < /script>

<
link rel = "stylesheet"
href = "https://cdnjs.cloudflare.com/ajax/libs/jquery-typeahead/2.11.0/jquery.typeahead.min.css" >
    <
    script src = "https://cdnjs.cloudflare.com/ajax/libs/jquery-typeahead/2.11.0/jquery.typeahead.min.js" > < /script>


<
script src = "https://cdnjs.cloudflare.com/ajax/libs/corejs-typeahead/1.3.0/bloodhound.js" > < /script> <
    script src = "https://cdnjs.cloudflare.com/ajax/libs/corejs-typeahead/1.3.0/typeahead.bundle.js" > < /script> <
    script src = "https://cdnjs.cloudflare.com/ajax/libs/corejs-typeahead/1.3.0/typeahead.jquery.js" > < /script>

<
link rel = "stylesheet"
href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
integrity = "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
crossorigin = "anonymous" >
    <
    style >
    .tt - query {
        /* UPDATE: newer versions use tt-input instead of tt-query */
        box - shadow: inset 0 1 px 1 px rgba(0, 0, 0, 0.075);
    }

.tt - hint {
    color: #999;

        }

        

        .tt-menu {

            /* UPDATE: newer versions use tt-menu instead of tt-dropdown-menu */

            width: 200px;

            margin-top: 12px;

            padding: 8px 0;

            background-color: # fff;
    border: 1 px solid# ccc;
    border: 1 px solid rgba(0, 0, 0, 0.2);
    border - radius: 8 px;
    box - shadow: 0 5 px 10 px rgba(0, 0, 0, .2);
}

.tt - suggestion {
    padding: 3 px 20 px;
    font - size: 18 px;
    line - height: 24 px;
    cursor: pointer;
}

.tt - suggestion: hover {
        color: #f0f0f0;
        background - color: #0097cf;

        }

        

        .tt-suggestion p {

            margin: 0;

        }

        

        .tt-cursor {

            color: # f0f0f0;
        background - color: #0097cf;

        }

        

        .show-all {

            padding-top: 2px;

            line-height: 30px;

            padding-left: 10px;

            background-color: darkgray;

        }

        

        .notf {

            color: red;

            padding: 3px 20px;

        }

        

        .show-menu {

            display: flex;

        }

    </style>



</head>







<body>







    <div id= "the-basics"
        class = "form-group d-flex justify-content-center mt-5" >
        <
        label
        for = " " > < /label> <
        input class = "typeahead form-control "
        id = "sear"
        type = "text "
        placeholder = "Searching "
        autocomplete = "off" >
        <
        button type = "submit"
        id = "search"
        class = "btn btn-secondary ml-2" > Search < /button> <
        /div>


        <
        script >
        var substringMatcher = function(strs) {
            return function findMatches(q, cb) {
                var matches, substringRegex;

                // an array that will be populated with substring matches
                matches = [];

                // regex used to determine if a string contains the substring `q`
                substrRegex = new RegExp(q, 'i');

                // iterate through the pool of strings and for any string that
                // contains the substring `q`, add it to the `matches` array
                $.each(strs, function(i, str) {
                    if (substrRegex.test(str)) {
                        matches.push(str);
                    }
                });

                cb(matches);
            };
        };

        // var states = ['Google', 'Facebook', 'GitHub'];
        var my_friends = [{
                'name': "Google",
                picture: "data:image/png;base64,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"

            }, {
                name: "FaceBook",
                picture: "data:image/png;base64,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"
            }, {
                'name': "Google",
                picture: "data:image/png;base64,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"

            }, {
                'name': "GitHub",
                picture: "data:image/png;base64,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"

            }, {
                'name': "Firebase",
                picture: "data:image/png;base64,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"

            }, {
                'name': "MongoDb",
                picture: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAABPlBMVEX///9BLx+BxWSOcU5PlUZ/xGFSmUmKbEZQlkZMkkRALR5AKBxDLCFBMB89IxqDyWY8IhR8w11jrVNaqU3y7+tUp0qFzmhtsVpAJxtfrFG6qZd0tWG9trP6+fk5Hg719POIaEHKv69qWVKPg35LSCpzpVV+vmFAIRvS6cjM58GHx2uBvG5ytF/EtqU1FQCkmpVLNCnW0tAsAACtmYKp15ZjgkVOUC7u9+tbbzyyn4mVeVh0qFZGOiTm4+GFeHKg04vC47Xy+fBtmE9WYTbg8NlGXS6SzXmIwHVojEo6FxbYz8Ohim7KxcKZjooxCgBwYFhVQjmupaFTPzZsXVaj04613KVWZTZqgVODs29EPyVRfz9OcjpZgUFnuVhKaTVGUy2KpG+fp36xq42itorBv6Kdl3p/dWFbTj3Jxa/q6ddtQqrcAAAQbklEQVR4nO2de1/ayBrHAwpoJpBQEVMuQUFBaeVSFRUNKlJbEQSs9Kx2W3d7PLt73v8bODPJTC5kEuieLvqR+f2xG5JMaL4+M89lJoHjmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmF6gzvahWq3WJhHchnvOnvrf9cx1tt/aOh3unlwUkfx+f0AX3EI7Lk5Odk9PNxlGp872N093L4r+aDQa8OvERoX2osMQ43Crtf/U/+Jno/T+5vCiGAhEadDoHAP+4u1pi5khx+1v3Rajk5KzMowGLoabs03wbPOkOLHVORFG/cVhK/3UN/FU2j+9iFKHuR9QNHC79dT38STaHxYp7EQxjiSKLvspNhi42Jq5Pny2VRzttIiQ6E9uND/uHRyc12rrpmrnnw/29prNo7xIgRiInmw+9f1MV60LGzxITvS/be59Xr8LRzTJAPCACG7J2l5wfFc7+LiRhw1EO8DhLEUyW0UbvLh41Pxc8yE+gOd97uIhSHjWcW2vmbcbYfRidvhtWUxPFPMbB3cQCvDANkoRnu6r7SX9FhsMXLSe+rampLMLg148frS3DiKA94VdzI0OMMzzkUL44WPeNMHo7lPf15R0GjUsb+McRLy6azjscRAaoe8gaVhgdDbMjxifGD86j0S8hjofv34e8TrugwD38nGMb/jUdzYVberGJ+YPIrInPF848q+kpytBhCN8U8Sj30yEf7s6vvjnyzFkfJHwh+T7CH1UtFpgU7e/wCxEf/t63xWPxtmVL1L75cOb+buxLhncxWfHebSw29gbY1bhQu3Dhw9vlu4L4zD7Lt+Keu996nubgraw43gA3vgi528QvuDSFzCO3+VH3HtnIHTe1ftu3iskQV5j/Y2OL7j0bZz9RT7rziM6A4MfHvo2vCMSufbmDeIH8UF+Y4Y/vpbX8Z0+9c3949ov6n53zxMfAEcmvmDwwZs17zsSZ8R3tAI4bPEiwoebxaQFX/DB2/5kPXQJnLz4yI8EzTUvIIWDJKIH+WF8i8ee/CJ7Or6XX3bRE14xf+zhDuT1fFLnR/AFFz3db+Rcx1d88fiGOr6kh+PlhaYD39I3rzARrOO898VXDfSUDeYc7jAKX1bejuILBmuyB75jvXAVffHTRrc6vg33zsiDFQ1f0o7v3qM4A3yzgu9E87zxprvjlX/9uvKWmJ+JL/je3XvwwC/ORuCH8X10xcffraysrFDwLbp7Gz6Snw18uFbqHjWHC7++WjF7rwUf9B6u+C5x3PzSK6YE34EbCh68evXKYn7BiczvciM+E/j2x+GLvP/qhi/4zdX5YnyBZ5O1pdNp/b+6vA7+yGXH4eP5xdc6PszPim/R52Z+zw1f4mpn5/DwcGdn52rnCm4n1lQTU0w/iI4iJdqZia87Dh+oQXqIHw1f8MHN/J4ZPvWqvhpCWp2r1+dW4fbqan2NUGrX8dHQXEg7Vl+b1ATH4Yt8wfiI87Dhc439nhk+LhNrX83NzYXWYrGYqm7vzIXgpytVP5iOxdp1eHAHHmon6vBQaHvC645zHYUFA99bJ76gi/OAnvfZuQ4VApuLkQ8JBGmubRyFnzGz2A48tNqmXIGisxPPwIU/fv3aan6j+FxC5+cYuMSs+DhurY4+q+SjiQ8OhZDs4WQXTXuGzWH54euSxo/gS9rx3Qt0fJHkswubR/BxKrK/K7LDgo/bhkeuJnQf3kmbfG/B99ZpfS6h33NM2kbxaZQMZFZ87VUL1zG61fFt0BcYgMUlA98KBZ+L7wU+8fnjS6NBro6tDOFbwwcQvp0Jr+pZsOKPgxif4XuDCzZ83wpUfN4Fq4z2b4Z+DscHaVV1/LHT8HDMHj9kVO3cTnXk5IyqqqORBrzkSHMHPoRpLoR9hBXfWmhudY2bTLhcekQtl4KH5SXIzxXfQvCeWujyKJdm1E63X+a4TqNSknpVdF+prFSSG1XrWdVyVr4uydkBGdtjaqrbz3LpVE8plSoDE0y6k6tcX0vZblXNxFIp3Lybla5LQm9gweXEl0a9N+HAl74KhXYmDfw8i/Wyjs8aOQcXrAouUrHjYr2/OIovncv2BUlJqQ2ppABB6le5TlYpSYIgVUx+sW5F6jV6N5IsZbW9mVz2BjZroGYSEIDUNTg3pH653AOyVOl/ykplrXmuImvNJdzcBR+HXCwGZeLLJObmDicc+YypIv86LQSJfNPxvTYGv+T8vA3fwh0V34HLVFF60IPUhEalX05BAxOg1ZT6uTK8X0HqEWcXy5b6HY0iEGQBbaW7fdgMZG+UXrdxA2GXOpieXGqgZim4D0gl7U+g9vXmak62/lEo+BKmi9U2txPbiUMYNk8aNEO18EwbdeFe4X7ZMD/se4M2fPP0KUvwEeNzTlSmUxVBqAzQPzr2SRZkfbMKUQoYSaahSHizrAhyX7vl2AA2kxpwjEurPQluaUaT6UmK3r0hKnmQUrV9CrlSVxGkT8YfxYlPi1BiBr45lNWtIn+yM2HUDLM2fT0FPe2w4sO919Z5593wbehrhG4pQ0g6C6SBvlkFglLGm5Kg4B45UOQsObknkzNgM5DVLxfrA9DXqKUk0MftKwJmXlakBvkq2Jx813h8ocN2u722vYNS31BiwsGPZG3UuBnhszgPC755LGrewR97JB0ZiC9lbubw7iyQe/rWDSBMoYMRBFm3n0xWlhv4nrqScKN1yq4CMGm1j6+argCFEONSsPf30t74jM6Lx760emVxKWN1gpf30bL/wqKJDw9+8xo6c/Cj4qvp4yk1bkmb+NIN2cDXkzGJaklQUuTkWBYIFXUUX1kS9DEtZ1ifCq+qWV9HEZSO0bwPm8dc8SFmDtcBv+pHsl6vFVYGPsIvmbTBg/hoy4U8V1hZ8eUkA19DwvhSJcv9w92C3BnFNyD44OAm60SQ9WmYBxCf6W5h75Wrrvh2zFTDio9T65NnvXh9n5+2SoPgs4R+9sBlnoYvXMDr+/y0RQZj8VnNRxv93fHBc0v6tTpA0ft+2YYvB72MO746PWzWuU6Yd7T0JVbiAWXZgIZv2Q2fNvbRrI9U+4q070tn5bHWZwxemu914EsRfGpfBn1tq6fo/0fWVzL6Phol3a1PhVlHPU3Dl5gcH1nbTCsaaK7D7nuDhtdwdR2kYBC4pX1fxs36sOuA+AzXqeEzx77eKD54sgxDn06q8Q7T0zqvEVQjfO5jnxWZHd/25PiI70hSJi5o+Obt+CiBi1zDS8NP/w4+VRHAjeX+5Sz2vICCj0tlBaBAB1ImYKqwuRH3aFd187xwhAsZdSmn9U0aO+OsV6QsWom8X9b5mWWDCfDh5WkuC4QyfYvnpeDj+jIJ4Tg09uuJmBs+OBZUyqmOUfbk0tDZCkZzOFC4xX1pFJ8Y7Q6twDIomzMv6S2cd9AKzuBhedT87PgWFp1JG88f4YX11Mwx1qcGLg2Z4INw5Cxuqt5IetaBmpn4ZANftWEZKDVBvyKT/K9akciVtGK9JRqJwfC4bn5E+IxQb+0HZju4mP40avzIiU+4s+FDoYsx9C0iLVDmKgGO+gJDauSuWvD1bHEfxoeyLpyUcTmFnIvwkU4JCWEDS8nQ41TVWMb8qkwWJjA57XPaTP84rj2nzQbhb65ehUJXFptFE0n1GDkztDpp1sGRyI9WNeD5xeVle+S8sGiwg6IUrMIF3HepUV+mmoPJfRb1toyK8tibAarVaZugXM3ogGG4kU2psWqjVNHpxTqwmSCUUalPTWVR+SCF7K9cgmmJULnpZ3u5QTXNGc17evMbQk/VZtogosQaTM22r0Kr9W2jHq+2E9rBq22UtkGw9UnLfUhbftfeK9+Pmt/ColVByjoXPE3k91MWNqd7pXelUun6WorBW39XUpTSO5hjVCW0t/TuWveZag4dqNwo16QKmLu+VqCur8vQDK/hUdQO/QmyCsQOJcuSAnKYXwOdUKmUSkYRsa1N4Gozvbqutk3Tq44crG9PXK9CapHHsigdUR/8LM5j3kpvnrJI0iiVUp8pSg1SSINBmquWB/qmysX0vakyud1qufHpU6Ns3GIq1y1DdXMdLtPVNsvdLoKVKStypSIAGfZno/7AVbs9W3OufZhIkIUEh4nttq0QjQ4m8CKDQ9v6g8l0ix8sovheYOJ7TcFHmSqKkEeK/s+lkZmJ5rrURmVQrXY6g4YgCbgO8wPNf4pwyTTedD4uVBjtvTZ8C/eO4RLc5UV6qfSfUEe4IcTUhpmgTVdnuu8VKc7DDF2w87CNfQvOqO+SOI5pzJCnLCEep5oJ2pQ1xL3Xmbhh37tkhH72vuso0/Agj6stU1hUH5OkT5ZRvi9lJ411f67IQ6l+58O68sNXW+Q8xu/iWY7pPIyaUkDWgu9Gybmf+4+KPFHedBRN+cKCtffa8C06aJORbzpPksP8VjZzjlSp8kMBx08UTtz84oOjbGXkvbr5WUe+L86Rj7jd6TzNVjEnmLhqX0p5nvxPCmcetEfywaILPmfUAmrkLRrTeZK3U4EBcy9VVdVUo9R/Gr+hCY9+/viBY9UFuKPjc458PL8xxZEPqSOVJKWkSDAfyT2N28Aa4vleStG+8MXMe4MmvnuH2yVBi98/tcfIY4NcAyo3eFJ46LFo0n1dghfd/Ex88w7O8jp+g9AMPAbtEJkyiu85vC/wGaHfhuE3nF03nMRelzpF9NJ1gs1PdD5qL78noUvTSNdG6ws88brPalXf9NQi3TfvCOfCBczv1W+45977RpflkoD5+Synn7JOSfelBc/3Or7fsfWNZsfhyDoJmGfkzWlO4dwDlV5Guy9yvxDfyvemS7pxTF6c5n/xz/C6iXhfGP1djuKD9vd1aeno+29ogsNRGOTBBhn4dmf2xc0weMb8RGf07Ct8W1r+5ft36DXCo7bHy4TejLx1zkXkRZKiWCuMJr889B+/fX/8973jJSS8saglML2A+VmKzLqJfspy08Ld798fv1NK0oTeTLy1yktnF8T+/OvONUPSfx4f/1Ac9Ixc7Tk9hPU02iev0RXzTvuT/nh8/JO3U+UttjejEZ9VLdHov7VR/wE0fHZ6EZPeTLsNok0SvogO/8v/+fiXDV8YgKZB7+W/8GsibRovEY8f2P0EfzyCTw5vGPRe/gurJtSW3+DXjNjeyRl+/KtvwRdZT5o9l9Ej2gqY/I4tDoQPP7ZN6+Mvz/PkFeEz8LK0H9CmaX/5mtmB+fBf/zXwAbBnvKE+esLoWWXyE/17BSPN4P/Yxvj4yLEx7LGe61DL+BkFMb6xbhigpGB6hc95k94u87mjapk/gRL3f5ZteS4fCTeNX0YIBIaMnlNnpPyn/ZjCuqWECiIHpukFZrfAN0ZDYwCEKdwewC4YFNZN04Mud8arBB7aurAYYPIgImsu46NomJ4/wFyuh1on5s8YQRdyLkfCB5Yf1GHD3jidFg0D9MfjG3sWeDBeYR13nGAEY/kdLQu8gH+XddzxOjsNmAZowmOmN6lat45fTQ0U2ag3ubbsP8IYCOzO6lz439PZqQkwEJi1n/D8CTob6r+higY91m//hvaHF9CJnMzer+/+LJ1tDdkPuDMxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExjdX/AIPOnMPstCCsAAAAAElFTkSuQmCC"

            },


        ];


        var friends = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            // 
            local: my_friends

        });
        // friends.initialize();
        $('#the-basics .typeahead').typeahead({
            hint: true,
            highlight: true,
            minLength: 1,
        }, {
            name: 'friends',
            // displayKey: 'name',
            source: friends,
            templates: {
                notFound: `<p class="notf"> Not Found</p>`,
                footer: `<h6 class="show-all ">See all of results:</h6/>`,
                suggestion: function(el) {
                    return '<div class="show-menu">' + '<img src="' + el.picture + ' " style="width:30px; margin-right:10px" />' + '<p>' + el.name + '</p>' + '</div>'
                }
            }
        }); <
        /script>


        <
        script >
        <
        /script>

        <
        script src = "https://code.jquery.com/jquery-3.3.1.slim.min.js "
        integrity = "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo "
        crossorigin = "anonymous " > < /script> <
        script src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js "
        integrity = "sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1 "
        crossorigin = "anonymous " > < /script> <
        script src = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js "
        integrity = "sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM "
        crossorigin = "anonymous " > < /script> <
        /body>

        <
        /html>