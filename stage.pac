var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+stage", {
    "+stage": function(url, host, scheme) {
        "use strict";
        if (/^git\.inven\.co\.kr$/.test(host)) return "DIRECT";
        if (/^member\.inven\.co\.kr$/.test(host)) return "DIRECT";
        if (/^upload\.inven\.co\.kr$/.test(host)) return "DIRECT";
        if (/^upload2\.inven\.co\.kr$/.test(host)) return "DIRECT";
        if (/^mail\.inven\.co\.kr$/.test(host)) return "DIRECT";
        if (/^static\.inven\.co\.kr$/.test(host)) return "DIRECT";
        if (/^kstatic\.inven\.co\.kr$/.test(host)) return "DIRECT";
        if (/^ads\.inven\.co\.kr$/.test(host)) return "DIRECT";
        if (/^iadmin\.inven\.co\.kr$/.test(host)) return "DIRECT";
        if (/^ca\.inven\.co\.kr$/.test(host)) return "DIRECT";
        if (/^ca-edge\.inven\.co\.kr$/.test(host)) return "DIRECT";
        if (/^optimal\.inven\.co\.kr$/.test(host)) return "DIRECT";
        if (/^optimalmo\.inven\.co\.kr$/.test(host)) return "DIRECT";
        if (/^upload3\.inven\.co\.kr$/.test(host)) return "DIRECT";
        if (/(?:^|\.)inven\.co\.kr$/.test(host)) return "+stage_base";
        return "DIRECT";
    },
    "+stage_base": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "PROXY 10.50.140.174:8700";
    }
});
