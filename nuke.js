javascript: ! function(e) {
    var t = function() {
            null !== e('div[aria-label="Menu"]') ? (e('div[aria-label="Menu"]').click(), setTimeout(o, 200)) : console.log("No chats to delete")
        },
        o = function() {
            for (var e = document.evaluate('//span[text()="Delete Chat"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null), t = 0; t < e.snapshotLength; t++) e.snapshotItem(t).click();
            setTimeout(n, 200)
        },
n = function() {
    const deleteChatButton = document.evaluate('//span[text()="Delete Chat"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (deleteChatButton) {
        const deleteChatButtonParent = deleteChatButton.parentNode;
        if (deleteChatButtonParent) {
            deleteChatButtonParent.click();
        }
    }
    if (null !== document.querySelector('div[aria-label="Menu"]')) {
        setTimeout(t, 600);
    } else {
        console.log("No more chats");
    }
};

    console.log("Deleting Messages"), t()
}(function(e) {
    return document.querySelector(e)
});
