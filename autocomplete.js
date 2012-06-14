


function enableAutocomplete()
{
    var snapshot = document.evaluate('//@autocomplete',
        document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null),
        numItems = snapshot.snapshotLength - 1;

    for (var i = numItems; i >= 0; i--)
        snapshot.snapshotItem(i).nodeValue = 'on';
}



window.addEventListener('DOMContentLoaded', enableAutocomplete, false);
