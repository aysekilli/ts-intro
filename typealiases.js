"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//kendimiz bir type ürettik 'Ürün'.
function ürünGirişi1(ürün) {
    return { isim: "Domates", fiyat: 15, tür: "Kırmızı", stokta: true };
}
;
function ürünGirişi2(ürün) {
    if (ürün.stokta == true) {
        var varmi = "var";
    }
    else {
        var varmi = "yok";
    }
    console.log("Ürünün ismi: " + ürün.isim);
    console.log("Ürünün fiyatı: " + ürün.fiyat);
    console.log("Ürünün türü: " + ürün.tür);
    console.log("Ürün stokta mı?: " + varmi);
}
;
ürünGirişi2({ isim: "Domates", fiyat: 15, tür: "Kırmızı", stokta: true });
function printCoordinate(pt) {
    console.log("Coordinate of x is: " + pt.x);
    console.log("Coordinate of y is: " + pt.y);
}
printCoordinate({ x: 1923, y: 1071 });
