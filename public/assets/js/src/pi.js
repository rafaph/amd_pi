define(function () {
    var getPiItem = function (k) {
        var a = 1 / Math.pow(16, k),
            b = 4 / (8 * k + 1),
            c = 2 / (8 * k + 4),
            d = 1 / (8 * k + 5),
            e = 1 / (8 * k + 6);
        return a * (b - c - d - e);
    };

    var getPi = function (maxCount) {
        var pi = 0.0,
            k;
        for (k = 0; k < maxCount; k++) {
            pi += getPiItem(k);
        }
        return pi;
    };

    return getPi(200);
});