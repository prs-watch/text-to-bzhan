const searchBZ = (text?: string) => {
    if (text) {
        chrome.tabs.create({
            url: "https://search.bilibili.com/all?keyword=" + text
        })
    }
}

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "text-to-bz",
        title: "B站で「%s」を検索",
        contexts: ["selection"]
    })
})

chrome.contextMenus.onClicked.addListener((info, _tab): void => {
    const text = info.selectionText
    searchBZ(text)
})