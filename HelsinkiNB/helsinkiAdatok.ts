let helsinki=[
    "1 1 atletika kalapacsvetes",
    "1 1 uszas 400m_gyorsuszas",
    "1 1 birkozas kotott_fogas_legsuly",
    "1 1 torna talajtorna",
    "1 1 torna felemas_korlat",
    "1 1 vivas kardvivas_egyeni",
    "1 1 okolvivas nagyvaltosuly",
    "1 1 uszas 200m_melluszas",
    "1 1 birkozas kotott_fogas_valtosuly",
    "1 1 uszas 100m_gyorsuszas",
    "1 1 sportloveszet onmukodo_sportpisztoly",
    "1 15 labdarugas ferfi_csapat",
    "1 3 ottusa ferfi_csapat",
    "1 6 vivas kardvivas_csapat",
    "1 5 uszas 4x100m_gyorsuszo_valto",
    "1 13 vizilabda ferfi_csapat",
    "2 1 ottusa ottusa_egyeni",
    "2 1 vivas torvivas_egyeni",
    "2 1 vivas kardvivas_egyeni",
    "2 1 sportloveszet onmukodo_sportpisztoly",
    "2 1 uszas 400m_gyorsuszas",
    "2 1 uszas 200m_melluszas",
    "2 1 kajakkenu kenu_egyes_10000m",
    "2 1 kajakkenu kajak_egyes_1000m",
    "2 1 birkozas kotott_fogas_pehelysuly",
    "2 8 torna noi_osszetett_csapat",
    "3 1 sportloveszet sportpisztoly",
    "3 1 vivas kardvivas_egyeni",
    "3 1 atletika tavolugras",
    "3 1 birkozas szabad_fogas_kozepsuly",
    "3 1 torna felemas_korlat",
    "3 1 torna osszetett_egyeni",
    "3 1 torna gerenda",
    "3 1 torna talajtorna",
    "3 1 atletika kalapacsvetes",
    "3 1 atletika 50km_gyaloglas",
    "3 1 ottusa ottusa_egyeni",
    "3 1 uszas 100m_gyorsuszas",
    "3 4 atletika 4x100m_valtofutas",
    "3 2 kajakkenu kenu_kettes_10000m",
    "3 8 torna keziszer_csapat",
    "3 6 vivas torvivas_csapat",
    "4 1 torna gerenda",
    "4 1 uszas 200m_mell",
    "4 1 birkozas kotottfogas_felnehezsuly",
    "4 1 torna talaj",
    "4 1 birkozas kotottfogas_kozepsuly",
    "4 1 birkozas kotottfogas_konnyusuly",
    "5 1 okolvivas pehelysuly",
    "5 1 okolvivas konnyusuly",
    "5 1 uszas 100m_gyors",
    "5 1 atletika diszkoszvetes",
    "5 1 vivas parbajtor_egyeni",
    "5 2 kajak-kenu kenu_kettes_1000m",
    "5 2 kerekparozas ketuleses_verseny",
    "5 4 uszas 4x200m_gyorsvalto",
    "5 5 vivas parbajtor_csapat",
    "6 1 birkozas kotottfogas_legsuly",
    "6 1 kajak-kenu kajak_egyes_500m",
    "6 1 torna osszetett_egyeni",
    "6 1 kerekparozas repuloverseny",
    "6 1 uszas 400m_gyors",
    "6 1 torna felemaskorlat",
    "6 8 torna osszetett_csapat"
    ];

    interface SportAdat{
        helyezes:number;
        sportolok:number;
        sportag:string;
        versenyszam:any;
    }

    function ObjektumFeltolto(feltoltendoElem:string[]): SportAdat[] {
        var beolvasottAdatok:SportAdat[] = [];
        for (var i:number = 0; i < feltoltendoElem.length; i++) {
            var daraboltAdatok = feltoltendoElem[i].split(" ");
            var ujAdat:SportAdat = {
                helyezes: Number(daraboltAdatok[0]),
                sportolok: Number(daraboltAdatok[1]),
                sportag: daraboltAdatok[2],
                versenyszam: daraboltAdatok[3]
            };
            beolvasottAdatok.push(ujAdat);
        }
        return beolvasottAdatok;
    }
    const sportAdatok: SportAdat[]=ObjektumFeltolto(helsinki);

    function PontszerzoHelyezesekSzama(vizsgaltTomb:SportAdat[]):number{
        return vizsgaltTomb.length;
    }

    function HelyezesekSzamaKiir(kiirandoErtek:number):void{
        console.log("3. Feladat");
        console.log("Pontszerző helyezések száma: "+kiirandoErtek);
    }
    
    HelyezesekSzamaKiir(PontszerzoHelyezesekSzama(sportAdatok));


    function ErmekSzama(vizsgaltTomb:SportAdat[]):void{
        var ElsoHelyezes:number=0;
        var MasodikHelyezes:number=0;
        var HarmadikHelyezes:number=0; 
        for(var i:number=0;i<vizsgaltTomb.length;i++){
            if(vizsgaltTomb[i].helyezes == 1){
                ElsoHelyezes++;
            }
            else if(vizsgaltTomb[i].helyezes == 2){
                MasodikHelyezes++;
            }
            else if(vizsgaltTomb[i].helyezes == 3){
                HarmadikHelyezes++;
            }
        }
        var Osszeg=ElsoHelyezes+MasodikHelyezes+HarmadikHelyezes;
        console.log("4.feladat");
        console.log("Arany:"+ElsoHelyezes);
        console.log("Ezüst:"+MasodikHelyezes);
        console.log("Bronz:"+HarmadikHelyezes);
        console.log("Összesen:"+Osszeg);
    }

ErmekSzama(sportAdatok);

function OsszPontszam(vizsgaltTomb:SportAdat[]):number{
    let osszeg:number=0;
    for(let i:number=0;i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i].helyezes == 1){
            osszeg+7;
        }
        else if(vizsgaltTomb[i].helyezes == 2){
            osszeg+5;
        }
        else if(vizsgaltTomb[i].helyezes == 3){
            osszeg+4;
        }
        else if(vizsgaltTomb[i].helyezes == 4){
            osszeg+3;
        }
        else if(vizsgaltTomb[i].helyezes == 5){
            osszeg+2;
        }
        else if(vizsgaltTomb[i].helyezes == 6){
            osszeg+1;
        }        
    }
    return osszeg;
}   

function OsszPontszamKiir(kiirandoErtek:number):void{
    console.log("5.Feladat");
    console.log("Olimpiai pontok száma:"+kiirandoErtek);
}

OsszPontszamKiir(OsszPontszam(sportAdatok));


function UszasEsTorna(vizsgaltTomb:SportAdat[]):void{
    var Uszas:number=0;
    var Torna:number=0;
    for(var i:number=0;i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i].sportag=="torna"){
            Torna++;
        }
        else if(vizsgaltTomb[i].sportag=="uszas"){
            Uszas++
        }
    }
    if( Torna==Uszas){
        console.log("Egyenlő volt az érmek száma");
    }
    else if(Torna>Uszas){
        console.log("Torna sportágban szereztek több érmet");
    }
    else if(Torna<Uszas){
        console.log("Úszás sportágban szereztek több érmet");
    }       
}

UszasEsTorna(sportAdatok);
