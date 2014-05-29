(function () {
    "use strict";

    var isDocumentLocation = function (href) {
        // Remove trailing forward slashes if there are any
        var trailingSlashRegex = new RegExp(/\/$/),
            trimmedHref = href.replace(trailingSlashRegex, ''),
            trimmedLocation = (document.location.origin + document.location.pathname).replace(trailingSlashRegex, '');

        return trimmedHref === trimmedLocation;
    };

    document.addEventListener('DOMContentLoaded', function () {
        var addActiveClassLinks = document.getElementsByClassName('js-addactiveclass'),
            e = 0,
            l = addActiveClassLinks.length,
            element;

        for (e; e < l; e += 1) {
            element = addActiveClassLinks[e];
            if (isDocumentLocation(element.href)) {
                if (element.attributes['data-activeclass']) {
                    element.classList.add(element.attributes['data-activeclass'].value);
                }
            }
        }
    });

}());




