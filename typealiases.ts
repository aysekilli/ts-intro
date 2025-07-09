type Ürün = {
    isim: string,
    fiyat: number,
    tür: string,
    stokta: boolean,
};

//kendimiz bir type ürettik 'Ürün'.

function ürünGirişi1(ürün: Ürün): Ürün{
    return {isim: "Domates", fiyat: 15, tür: "Kırmızı", stokta: true};
};


function ürünGirişi2(ürün: Ürün){
    if (ürün.stokta == true){
        var varmi: string = "var";
    }
    else{ var varmi: string = "yok"}

    console.log("Ürünün ismi: " + ürün.isim)
    console.log("Ürünün fiyatı: " + ürün.fiyat)
    console.log("Ürünün türü: " + ürün.tür)
    console.log("Ürün stokta mı?: " + varmi)
};

ürünGirişi2({isim: "Domates", fiyat: 15, tür: "Kırmızı", stokta: true})

////////////////////////////////////////////////////

//Dokümantasyondan örnek:

type Point = {
    x: number;
    y: number;
};

function printCoordinate(pt: Point){
    console.log("Coordinate of x is: " + pt.x);
    console.log("Coordinate of y is: " + pt.y);
}

printCoordinate({x: 1923, y: 1071});

export {}