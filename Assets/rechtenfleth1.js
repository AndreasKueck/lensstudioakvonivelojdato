// @input Component.Text textComponent
// @input Component.Text eligoTeksto

// var previousText = script.textComponent.text;

var dato0 = "";
var datumojCache = null;
var datumojRecCache = null;

function onUpdateEvent(eventData) {
 dato0 = script.textComponent.text;
// var currentText0 = currentText;
 print("Enigo: " + dato0);
    
 main();
 
function main() {

const zt = -1.0;
        
const jaro = dato0.substr(0,4) * 1.0;
const monato = dato0.substr(4,2) * 1.0;
const tago = dato0.substr(6,2) * 1.0;
        
const monatosignoj = dato0.substr(4,2);
const tagosignoj = dato0.substr(6,2);

var hwbhv = 0.0;
var hwrec = 0.0;
// var testobhv = false;
var abhv = '';
var bbhv = '';
var cbhv = '';
var dbhv = '';
        
// const jaro = dato0.substr(0,4) * 1.0;
// const monato = dato0.substr(4,2) * 1.0;
// const tago = dato0.substr(6,2) * 1.0;

var lauhoro = "Mez-Europa Somera Tempo";
if (monato == 1 || monato == 2 || monato == 12) {lauhoro = "Mez-Europa Tempo";}

/*
var z = new Array(1442);
var h = new Array(1442);
var nw = new Array(1442);
var hw = new Array(1442);
var min = new Array(1442);
var max = new Array(1442);
*/

var z=[];
var h=[];
var nw=[];
var hw=[];
var min = [];
var max=[];

var kk = 1;
for (kk=1;kk<3;kk++) {
var nvo = -999.9;
var zt1 = zt;
var zt2 = 0.0;
var rezulto = '';
var i = 0;
var j = 0;
var k = 0;
var nwminh1 = 999.9;
var nwminz1 = '';
var nwminh2 = 999.9;
var nwminz2 = '';
var hwmaxh1 = -999.9;
var hwmaxz1 = '';
var hwmaxh2 = -999.9;
var hwmaxz2 = '';
if (zt>=0.0) {
zt1 = zt;
if (kk == 1) {
 nvo = niv(zt1, tago, monato, jaro);
} else {
 nvo = nivrec(zt1, tago, monato, jaro);
}
} else {

for (i=-1;i<1442;i++) {
zt1 = i*0.01*5.0/3.0;
zt2 = (zt1 - Math.floor(zt1)) * 3/5 + Math.floor(zt1);
z[i] = zt1;
if (kk == 1) {
 h[i] = niv(zt2, tago, monato, jaro);
} else {
 h[i] = nivrec(zt2, tago, monato, jaro);
}
}
for (i=0;i<1441;i++) {
if (h[i]<(h[i-1]) && h[i]<h[i+1]) {
nw[j] = z[i];
min[j] = h[i];
j++;
}
if (h[i]>h[i-1] && h[i]>h[i+1]) {
hw[k] = z[i];
max[k] = h[i];
k++;
}
}
var lj = nw.length;
var lj1 = Math.floor(lj/2.0);
for (i=0;i<lj1;i++) {
if (min[i]<nwminh1) {
nwminh1 = min[i];
nwminz1 = nw[i];
}
}
for (i=lj1;i<lj;i++) {
if (min[i]<nwminh2) {
nwminh2 = min[i];
nwminz2 = nw[i];
}
}
var lk = hw.length;
var lk1 = Math.floor(lk/2.0);
for (i=0;i<lk1;i++) {
if (max[i]>hwmaxh1) {
hwmaxh1 = max[i];
hwmaxz1 = hw[i];
}
}
for (i=lk1;i<lk;i++) {
if (max[i]>hwmaxh2) {
hwmaxh2 = max[i];
hwmaxz2 = hw[i];
}
}

if (kk == 1) {
  hwbhv = hwmaxz1;
//  if (hwbhv < 2) {
//      hwbhv = hwmaxz2;
//      testobhv = true
//  }
} else {
  hwrec = hwmaxz1;
//  if (testobhv) {hwrec = hwmaxz2;}
  if (hwrec - hwbhv < 0) {hwrec = hwmaxz2;}
}

if (kk == 2) {
  if (monato == 3 || monato == 4 || monato == 10 || monato == 11) {
   if ( 60*Math.floor(hwrec) + 100*3/5*(hwrec-Math.floor(hwrec)) - (60*Math.floor(hwbhv) + 100*3/5*(hwbhv-Math.floor(hwbhv)) ) < 131 ) {
   lauhoro = "Mez-Europa Tempo";}
  }
}

nwminz1 = (nwminz1 - Math.floor(nwminz1)) * 3/5 + Math.floor(nwminz1);
nwminz2 = (nwminz2 - Math.floor(nwminz2)) * 3/5 + Math.floor(nwminz2);
hwmaxz1 = (hwmaxz1 - Math.floor(hwmaxz1)) * 3/5 + Math.floor(hwmaxz1);
hwmaxz2 = (hwmaxz2 - Math.floor(hwmaxz2)) * 3/5 + Math.floor(hwmaxz2);

if (kk == 1) {
print("BHVnwminz1: " + nwminz1 + " nwminz2: " + nwminz2);
}


var rnwz1 = Math.round(nwminz1*100)/100 + " horo ";
var rnwz2 = Math.round(nwminz2*100)/100 + " horo ";
var rhwz1 = Math.round(hwmaxz1*100)/100 + " horo ";
var rhwz2 = Math.round(hwmaxz2*100)/100 + " horo ";
var rnwh1 = Math.round(nwminh1*10)/10 + " m";
var rnwh2 = Math.round(nwminh2*10)/10 + " m";
var rhwh1 = Math.round(hwmaxh1*10)/10 + " m";
var rhwh2 = Math.round(hwmaxh2*10)/10 + " m";
      
var srnwz1 = rnwz1.replace(/\./, ":");
var srnwz2 = rnwz2.replace(/\./, ":");
var srhwz1 = rhwz1.replace(/\./, ":");
var srhwz2 = rhwz2.replace(/\./, ":");
var srnwh1 = rnwh1.replace(/\./, ",");
var srnwh2 = rnwh2.replace(/\./, ",");
var srhwh1 = rhwh1.replace(/\./, ",");
var srhwh2 = rhwh2.replace(/\./, ",");
        
if (/999/.test(srnwh1)) {
            srnwh1 = "";
            srnwz1 = "";
}
if (/999/.test(srnwh2)) {
            srnwh2 = "";
            srnwz2 = "";
}
if (/999/.test(srhwh1)) {
            srhwh1 = "";
            srhwz1 = "";
}
if (/999/.test(srhwh2)) {
            srhwh2 = "";
            srhwz2 = "";
}      
        
if (/\:\d horo/.test(srnwz1)) {srnwz1 = srnwz1.replace(/ horo/, "0 horo");}
if (/\:\d horo/.test(srnwz2)) {srnwz2 = srnwz2.replace(/ horo/, "0 horo");}
if (/\:\d horo/.test(srhwz1)) {srhwz1 = srhwz1.replace(/ horo/, "0 horo");}
if (/\:\d horo/.test(srhwz2)) {srhwz2 = srhwz2.replace(/ horo/, "0 horo");}       
if (!(/\:/.test(srnwz1))) {srnwz1 = srnwz1.replace(/ horo/, ":00 horo");}
if (!(/\:/.test(srnwz2))) {srnwz2 = srnwz2.replace(/ horo/, ":00 horo");}
if (!(/\:/.test(srhwz1))) {srhwz1 = srhwz1.replace(/ horo/, ":00 horo");}
if (!(/\:/.test(srhwz2))) {srhwz2 = srhwz2.replace(/ horo/, ":00 horo");}
if (!(/\d\,\d m/.test(srnwh1))) {srnwh1 = srnwh1.replace(/ m/, ",0 m");}
if (!(/\d\,\d m/.test(srnwh2))) {srnwh2 = srnwh2.replace(/ m/, ",0 m");}
if (!(/\d\,\d m/.test(srhwh1))) {srhwh1 = srhwh1.replace(/ m/, ",0 m");}
if (!(/\d\,\d m/.test(srhwh2))) {srhwh2 = srhwh2.replace(/ m/, ",0 m");}       

srnwz1 = srnwz1.replace(/(\d+):60 horo /, function(match, horo60) {return (parseInt(horo60) + 1) + ":00 horo ";});
srnwz2 = srnwz2.replace(/(\d+):60 horo /, function(match, horo60) {return (parseInt(horo60) + 1) + ":00 horo ";});
srhwz1 = srhwz1.replace(/(\d+):60 horo /, function(match, horo60) {return (parseInt(horo60) + 1) + ":00 horo ";});
srhwz2 = srhwz2.replace(/(\d+):60 horo /, function(match, horo60) {return (parseInt(horo60) + 1) + ":00 horo ";});   
        
if (srnwz1.length == 10) {srnwz1 = "0" + srnwz1;}
if (srnwz2.length == 10) {srnwz2 = "0" + srnwz2;}
if (srhwz1.length == 10) {srhwz1 = "0" + srhwz1;}
if (srhwz2.length == 10) {srhwz2 = "0" + srhwz2;}     

if (kk == 1) {
    abhv = srnwz1;
    bbhv = srnwz2;
    cbhv = srhwz1;
    dbhv = srhwz2;
}

if (kk == 2) {
 if (srnwz1 == abhv) {
     srnwz1 = '';
     srnwh1 = '';
    }
 if (srnwz2 == bbhv) {
     srnwz2 = '';
     srnwh2 = '';
    }
 if (srhwz1 == cbhv) {
     srhwz1 = '';
     srhwh1 = '';
    }
 if (srhwz2 == dbhv) {
     srhwz2 = '';
     srhwh2 = '';
    }
}

rezulto = srnwz1 + srnwh1 + '\n' + srnwz2 + srnwh2 + '\n' + srhwz1 + srhwh1 + '\n' + srhwz2 + srhwh2;
}
if (zt>=0.0) {
   print(Math.round(nvo*1000000)/1000000);
 } else {
 //  print(rezulto);
 //  if (jaro != 0 && /^\d{8}$/.test(dato0)) {
     if (kk == 2) {
      script.eligoTeksto.text = "Jen kelkaj elstaraj akvoniveloj de Weser en Rechtenfleth prognozitaj por " + jaro + "-" + monatosignoj + "-" + tagosignoj + " (privata neoficiala prognozo ne tauga por navigaciaj celoj):" + "\n" + rezulto + "\n" + "horo: " + lauhoro;
      print(rezulto);
     }
 //   } else {
 //    script.eligoTeksto.text = "Enigu la daton per ok ciferoj," + "\n" + "ekz. 20250428, kaj" + "\n" + "poste tushu" + "\n" + "la ekranon."; 
 //  }
 // }
// }
 }
}
}

// Parse-Daten-Caching-Funktion
function parseDatumoj(dataString) {
    var components = [];
    var lines = dataString.trim().split('\n');
    
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        if (line.length === 0) continue;
        
        var parts = line.split(/\s+/);
        if (parts.length < 10) continue;
        
        var component = {
            nomo: parts[0],
            a: parseFloat(parts[1]),
            u: parseFloat(parts[2]) * Math.PI / 180,
            kh0s: parseFloat(parts[3]),
            ks: parseFloat(parts[4]),
            kh0: parseFloat(parts[5]),
            kpp: parseFloat(parts[6]),
            kns: parseFloat(parts[7]),
            kq: parseFloat(parts[8]),
            kn90: parseFloat(parts[9])
        };
        components.push(component);
    }
    
    return components;
}

function niv(zt1, tago, monato, jaro) {  
var zp = (zt1 - Math.floor(zt1)) * 5 / 3 + Math.floor(zt1);
var gt = Math.floor(30.6001 * (1 + monato + 12 * Math.floor(1 / (monato + 1) + 0.7))) + Math.floor(365.25 * (jaro - Math.floor(1 / (monato + 1) + 0.7))) + tago + zp / 24 - 723258;
var s = 78.16001 + 13.17639673 * gt;
var h0 = 279.82 + 0.98564734 * gt;
var pp = 349.5 + 0.11140408 * gt;
var ns = 208.1 + 0.05295392 * gt;
var n90 = 90;
var q = 282.6 + 0.000047069 * gt;
if (!datumojCache) {
const datumoj =`M2 166.224391 -14.504264 2 0 0 0 0 0 0
N2 26.546899 -39.404821 2 -1 0 1 0 0 0
S2 42.511529 60.676529 2 2 -2 0 0 0 0
K2 12.586781 56.25745 2 2 0 0 0 0 0
2N2 1.202315 -11.067041 2 -2 0 2 0 0 0
S1 1.226173 50.589354 1 1 -1 0 0 1 1
K1 7.620117 42.700262 1 1 0 0 0 0 1
P1 3.352258 55.668833 1 1 -2 0 0 0 -1
O1 9.151704 -107.880711 1 -1 0 0 0 0 -1
Q1 2.593002 -160.743279 1 -2 0 1 0 0 -1
M1 0.510804 27.127923 1 0 0 1 0 0 1
M4 14.714908 158.242045 4 0 0 0 0 0 0
MM 2.19322 -150.818643 0 1 0 -1 0 0 0
MF 1.039093 -168.133468 0 2 0 0 0 0 0
SA 8.87049 -120.638827 0 0 1 0 0 -1 0
SSA 4.815637 -170.690257 0 0 2 0 0 0 0
T2 2.537516 34.362535 2 2 -3 0 0 1 0
J1 0.430848 110.905598 1 2 0 -1 0 0 1
L2 15.080065 1.786733 2 1 0 -1 0 0 2
R2 0.43249 -29.976249 2 2 -1 0 0 -1 2
2Q1 0.622309 108.379258 1 -3 0 2 0 0 -1
MSF 1.909984 58.912687 0 2 -2 0 0 0 0
MSQM 1.414087 -124.191988 0 4 -2 0 0 0 0
EP2 4.790201 49.755467 2 -3 2 1 0 0 0
M3 0.641036 -144.138324 3 0 0 0 0 0 2
MU2 18.289435 67.633095 2 -2 2 0 0 0 0
MTM 0.385056 -166.258466 0 3 0 -1 0 0 0
NU2 9.605575 -64.030548 2 -1 2 -1 0 0 0
LAMBDA2 6.301992 -1.770258 2 1 -2 1 0 0 2
MN4 4.674938 133.366682 4 -1 0 1 0 0 0
MS4 9.908322 -122.916804 4 2 -2 0 0 0 0
MKS2 1.953138 168.201774 2 -1 0 0 0 0 0
N4 0.334837 159.794764 4 -2 0 2 0 0 0
M6 4.814563 -1.906769 6 0 0 0 0 0 0
M8 1.187044 -68.00887 8 0 0 0 0 0 0
S4 1.292783 13.660732 4 4 -4 0 0 0 0
OO1 0.647826 -57.203215 1 3 0 0 0 0 1
S3 0.119592 177.821313 3 3 -3 0 0 0 2
MA2 6.796788 -58.263122 2 0 -1 0 0 0 0
MB2 1.649284 48.406597 2 0 1 0 0 0 0
T3 0.176176 64.910209 3 3 -4 0 0 0 0
R3 0.325688 -56.988232 3 3 -2 0 0 0 0
RHO1 0.630733 161.428005 1 -2 2 -1 0 0 -1
SGM 0.35758 -82.749088 1 -3 2 0 0 0 -1
3L2 1.609866 85.850177 2 1 0 0 0 0 0
3N2 0.864954 28.398819 2 0 2 0 0 0 0
2SM2 3.951389 -77.734936 2 4 -4 0 0 0 0
2MS6 5.111525 71.813048 6 2 -2 0 0 0 0
2MK5 0.831783 -82.011195 5 1 0 0 0 0 1
2MO5 0.540223 -94.627095 5 -1 0 0 0 0 -1`;
 datumojCache = parseDatumoj(datumoj);
}

var h2 = 0;
    for (var idx = 0; idx < datumojCache.length; idx++) {
        var c = datumojCache[idx];
        
        var argument = (c.kh0s * zp * 15 + s * (c.ks - c.kh0s) + h0 * (c.kh0 + c.kh0s) + 
                       pp * c.kpp + ns * c.kns + q * c.kq + n90 * c.kn90) * Math.PI / 180 - c.u;
        
        h2 += c.a * Math.cos(argument);
        
        if (c.nomo == 'M2') {
            argument = (c.kh0s * zp * 15 + s * (c.ks - c.kh0s) + h0 * (c.kh0 + c.kh0s) + 
                       pp * c.kpp + ns * (c.kns - 1) + q * c.kq + n90 * c.kn90) * Math.PI / 180 - c.u;
            h2 -= c.a / 27 * Math.cos(argument);
        }
        if (c.nomo == 'O1') {
            argument = (c.kh0s * zp * 15 + s * (c.ks - c.kh0s) + h0 * (c.kh0 + c.kh0s) + 
                       pp * c.kpp + ns * (c.kns - 1) + q * c.kq + n90 * c.kn90) * Math.PI / 180 - c.u;
            h2 += c.a / 5.3 * Math.cos(argument);
        }
        if (c.nomo == 'K1') {
            argument = (c.kh0s * zp * 15 + s * (c.ks - c.kh0s) + h0 * (c.kh0 + c.kh0s) + 
                       pp * c.kpp + ns * (c.kns + 1) + q * c.kq + n90 * c.kn90) * Math.PI / 180 - c.u;
            h2 += c.a / 7.4 * Math.cos(argument);
        }
        if (c.nomo == 'S2') {
            argument = (c.kh0s * zp * 15 + s * (c.ks - c.kh0s) + h0 * (c.kh0 + c.kh0s + 2) + 
                       pp * c.kpp + ns * (c.kns + 1) + q * c.kq + n90 * c.kn90) * Math.PI / 180 - c.u;
            h2 += c.a / 12 * Math.cos(argument);
        }
    }
    
    h2 = h2 / 100 + 498.0 / 100;
    return h2;
}

function nivrec(zt1, tago, monato, jaro) {  
var zp = (zt1 - Math.floor(zt1)) * 5 / 3 + Math.floor(zt1);
var gt = Math.floor(30.6001 * (1 + monato + 12 * Math.floor(1 / (monato + 1) + 0.7))) + Math.floor(365.25 * (jaro - Math.floor(1 / (monato + 1) + 0.7))) + tago + zp / 24 - 723258;
var s = 78.16001 + 13.17639673 * gt;
var h0 = 279.82 + 0.98564734 * gt;
var pp = 349.5 + 0.11140408 * gt;
var ns = 208.1 + 0.05295392 * gt;
var n90 = 90;
var q = 282.6 + 0.000047069 * gt;
if (!datumojRecCache) {
const datumoj =`M2 167.629548 47.836365 2 0 0 0 0 0 0
N2 26.039477 23.046126 2 -1 0 1 0 0 0
S2 42.549517 126.656466 2 2 -2 0 0 0 0
K2 11.350885 130.908521 2 2 0 0 0 0 0
2N2 2.683922 -0.254494 2 -2 0 2 0 0 0
S1 2.058661 107.830448 1 1 -1 0 0 1 1
K1 6.96055 76.664837 1 1 0 0 0 0 1
P1 3.044731 81.925439 1 1 -2 0 0 0 -1
O1 9.088436 -78.257406 1 -1 0 0 0 0 -1
Q1 2.664446 -137.276421 1 -2 0 1 0 0 -1
M1 0.013549 -113.594196 1 0 0 1 0 0 1
M4 10.558413 -76.941451 4 0 0 0 0 0 0
MM 1.900374 150.338915 0 1 0 -1 0 0 0
MF 0.77021 112.794567 0 2 0 0 0 0 0
SA 6.88441 -124.719123 0 0 1 0 0 -1 0
SSA 4.508969 -138.603842 0 0 2 0 0 0 0
T2 8.212984 40.764552 2 2 -3 0 0 1 0
J1 0.32047 -150.563419 1 2 0 -1 0 0 1
L2 14.799484 63.847187 2 1 0 -1 0 0 2
R2 5.609959 -124.085939 2 2 -1 0 0 -1 2
2Q1 0.586942 164.700898 1 -3 0 2 0 0 -1
MSF 3.350943 69.975527 0 2 -2 0 0 0 0
MSQM 0.792814 58.609242 0 4 -2 0 0 0 0
EP2 4.563018 106.269631 2 -3 2 1 0 0 0
M3 0.380419 -41.453867 3 0 0 0 0 0 2
MU2 20.809972 127.63422 2 -2 2 0 0 0 0
MTM 0.326597 -137.149989 0 3 0 -1 0 0 0
NU2 10.487963 -0.098977 2 -1 2 -1 0 0 0
LAMBDA2 7.207337 61.722308 2 1 -2 1 0 0 2
MN4 3.204605 -100.468458 4 -1 0 1 0 0 0
MS4 7.705688 6.939514 4 2 -2 0 0 0 0
MKS2 8.934313 -173.385865 2 -1 0 0 0 0 0
N4 0.636153 -121.24702 4 -2 0 2 0 0 0
M6 5.60635 -156.34312 6 0 0 0 0 0 0
M8 0.896519 165.418185 8 0 0 0 0 0 0
S4 1.145832 154.028132 4 4 -4 0 0 0 0
OO1 0.241736 -111.40369 1 3 0 0 0 0 1
S3 0.152364 -164.660196 3 3 -3 0 0 0 2
MA2 31.881759 21.759628 2 0 -1 0 0 0 0
MB2 25.920599 -118.278371 2 0 1 0 0 0 0
T3 0.036066 35.721118 3 3 -4 0 0 0 0
R3 0.382437 49.429173 3 3 -2 0 0 0 0
RHO1 0.578226 -141.179556 1 -2 2 -1 0 0 -1
SGM 0.398459 -127.402836 1 -3 2 0 0 0 -1
3L2 0.581042 154.449985 2 1 0 0 0 0 0
3N2 0.694782 60.686977 2 0 2 0 0 0 0
2SM2 4.647548 -11.458023 2 4 -4 0 0 0 0
2MS6 6.086048 -84.770248 6 2 -2 0 0 0 0
2MK5 0.919433 95.905264 5 1 0 0 0 0 1
2MO5 0.593631 98.984883 5 -1 0 0 0 0 -1`;
 datumojRecCache = parseDatumoj(datumoj);
}

var h2 = 0;
    for (var idx = 0; idx < datumojRecCache.length; idx++) {
        var c = datumojRecCache[idx];
        
        var argument = (c.kh0s * zp * 15 + s * (c.ks - c.kh0s) + h0 * (c.kh0 + c.kh0s) + 
                       pp * c.kpp + ns * c.kns + q * c.kq + n90 * c.kn90) * Math.PI / 180 - c.u;
        
        h2 += c.a * Math.cos(argument);
        
        if (c.nomo == 'M2') {
            argument = (c.kh0s * zp * 15 + s * (c.ks - c.kh0s) + h0 * (c.kh0 + c.kh0s) + 
                       pp * c.kpp + ns * (c.kns - 1) + q * c.kq + n90 * c.kn90) * Math.PI / 180 - c.u;
            h2 -= c.a / 27 * Math.cos(argument);
        }
        if (c.nomo == 'O1') {
            argument = (c.kh0s * zp * 15 + s * (c.ks - c.kh0s) + h0 * (c.kh0 + c.kh0s) + 
                       pp * c.kpp + ns * (c.kns - 1) + q * c.kq + n90 * c.kn90) * Math.PI / 180 - c.u;
            h2 += c.a / 5.3 * Math.cos(argument);
        }
        if (c.nomo == 'K1') {
            argument = (c.kh0s * zp * 15 + s * (c.ks - c.kh0s) + h0 * (c.kh0 + c.kh0s) + 
                       pp * c.kpp + ns * (c.kns + 1) + q * c.kq + n90 * c.kn90) * Math.PI / 180 - c.u;
            h2 += c.a / 7.4 * Math.cos(argument);
        }
        if (c.nomo == 'S2') {
            argument = (c.kh0s * zp * 15 + s * (c.ks - c.kh0s) + h0 * (c.kh0 + c.kh0s + 2) + 
                       pp * c.kpp + ns * (c.kns + 1) + q * c.kq + n90 * c.kn90) * Math.PI / 180 - c.u;
            h2 += c.a / 12 * Math.cos(argument);
        }
    }
    
    h2 = h2 / 100 + 507.5 / 100;
    return h2;
}   
 
}

script.createEvent('TouchStartEvent').bind(function(eventData) {
    // Code, der nach dem BerÃ¼hren des Bildschirms ausgefÃ¼hrt werden soll
 onUpdateEvent(eventData);
    print("Bildschirm wurde berÃ¼hrt!");
    // FÃ¼gen Sie hier den weiteren Programmablauf ein
});