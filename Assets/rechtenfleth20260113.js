// @input Component.Text textComponent
// @input Component.Text eligoTeksto

// var previousText = script.textComponent.text;

var datumojCache = null;

function onUpdateEvent(eventData) {
 var dato0 = script.textComponent.text;
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

// var w=[];
var z=[];
var h=[];
var nw=[];
var hw=[];
var min = [];
var max=[];

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
nvo = niv(zt1, tago, monato, jaro);
} else {

for (i=-1;i<1442;i++) {
zt1 = i*0.01*5.0/3.0;
zt2 = (zt1 - Math.floor(zt1)) * 3/5 + Math.floor(zt1);
z[i] = zt1;
h[i] = niv(zt2, tago, monato, jaro);
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

nwminz1 = (nwminz1 - Math.floor(nwminz1)) * 3/5 + Math.floor(nwminz1);
nwminz2 = (nwminz2 - Math.floor(nwminz2)) * 3/5 + Math.floor(nwminz2);
hwmaxz1 = (hwmaxz1 - Math.floor(hwmaxz1)) * 3/5 + Math.floor(hwmaxz1);
hwmaxz2 = (hwmaxz2 - Math.floor(hwmaxz2)) * 3/5 + Math.floor(hwmaxz2);

var rnwz1 = Math.round(nwminz1*100)/100 + " UTK ";
var rnwz2 = Math.round(nwminz2*100)/100 + " UTK ";
var rhwz1 = Math.round(hwmaxz1*100)/100 + " UTK ";
var rhwz2 = Math.round(hwmaxz2*100)/100 + " UTK ";
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
        
if (/\:\d UTK/.test(srnwz1)) {srnwz1 = srnwz1.replace(/ UTK/, "0 UTK");}
if (/\:\d UTK/.test(srnwz2)) {srnwz2 = srnwz2.replace(/ UTK/, "0 UTK");}
if (/\:\d UTK/.test(srhwz1)) {srhwz1 = srhwz1.replace(/ UTK/, "0 UTK");}
if (/\:\d UTK/.test(srhwz2)) {srhwz2 = srhwz2.replace(/ UTK/, "0 UTK");}       
if (!(/\:/.test(srnwz1))) {srnwz1 = srnwz1.replace(/ UTK/, ":00 UTK");}
if (!(/\:/.test(srnwz2))) {srnwz2 = srnwz2.replace(/ UTK/, ":00 UTK");}
if (!(/\:/.test(srhwz1))) {srhwz1 = srhwz1.replace(/ UTK/, ":00 UTK");}
if (!(/\:/.test(srhwz2))) {srhwz2 = srhwz2.replace(/ UTK/, ":00 UTK");}
if (!(/\d\,\d m/.test(srnwh1))) {srnwh1 = srnwh1.replace(/ m/, ",0 m");}
if (!(/\d\,\d m/.test(srnwh2))) {srnwh2 = srnwh2.replace(/ m/, ",0 m");}
if (!(/\d\,\d m/.test(srhwh1))) {srhwh1 = srhwh1.replace(/ m/, ",0 m");}
if (!(/\d\,\d m/.test(srhwh2))) {srhwh2 = srhwh2.replace(/ m/, ",0 m");}       

srnwz1 = srnwz1.replace(/(\d+):60 UTK /, function(match, horo60) {return (parseInt(horo60) + 1) + ":00 UTK ";});
srnwz2 = srnwz2.replace(/(\d+):60 UTK /, function(match, horo60) {return (parseInt(horo60) + 1) + ":00 UTK ";});
srhwz1 = srhwz1.replace(/(\d+):60 UTK/, function(match, horo60) {return (parseInt(horo60) + 1) + ":00 UTK ";});
srhwz2 = srhwz2.replace(/(\d+):60 UTK /, function(match, horo60) {return (parseInt(horo60) + 1) + ":00 UTK ";});   
        
if (srnwz1.length == 9) {srnwz1 = "0" + srnwz1;}
if (srnwz2.length == 9) {srnwz2 = "0" + srnwz2;}
if (srhwz1.length == 9) {srhwz1 = "0" + srhwz1;}
if (srhwz2.length == 9) {srhwz2 = "0" + srhwz2;}     
        
rezulto = srnwz1 + srnwh1 + '\n' + srnwz2 + srnwh2 + '\n' + srhwz1 + srhwh1 + '\n' + srhwz2 + srhwh2;
}
if (zt>=0.0) {
   print(Math.round(nvo*1000000)/1000000);
 } else {
   print(rezulto);
   if (jaro != 0 && /^\d{8}$/.test(dato0)) {
     script.eligoTeksto.text = "Jen kelkaj elstaraj akvoniveloj de Weser en Rechtenfleth prognozitaj por " + jaro + "-" + monatosignoj + "-" + tagosignoj + " (privata neoficiala prognozo ne tauga por navigaciaj celoj):" + "\n" + rezulto + "\n" + "UTK: Universala Tempo Kunordigita";
    } else {
     script.eligoTeksto.text = "Enigu la daton per ok ciferoj," + "\n" + "ekz. 20250428, kaj" + "\n" + "poste tushu" + "\n" + "la ekranon."; 
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
const datumoj =`SA 6.968908 319.260187 0 0 1 0 0 -1 0
SSA 4.256096 221.370938 0 0 2 0 0 0 0
MM 3.420532 95.095623 0 1 0 -1 0 0 0
MSF 2.557205 54.750478 0 2 -2 0 0 0 0
MF 2.62847 134.090797 0 2 0 0 0 0 0
MTM 0.927141 269.415481 0 3 0 -1 0 0 0
MSQM 0.586367 294.650503 0 4 -2 0 0 0 0
2Q1 0.82551 119.684737 1 -3 0 2 0 0 -1
SGM 0.468246 81.4596 1 -3 2 0 0 0 -1
Q1 3.213288 200.408569 1 -2 0 1 0 0 -1
RHO1 0.491126 212.961681 1 -2 2 -1 0 0 -1
O1 10.520074 254.473477 1 -1 0 0 0 0 -1
M1 0.77987 80.758923 1 0 0 1 0 0 1
P1 3.212897 60.639792 1 1 -2 0 0 0 -1
S1 1.85261 253.208041 1 1 -1 0 0 1 1
K1 7.649817 55.53934 1 1 0 0 0 0 1
J1 0.488523 150.3053 1 2 0 -1 0 0 1
OO1 0.596788 213.889151 1 3 0 0 0 0 1
EP2 4.67056 61.882324 2 -3 2 1 0 0 0
2N2 2.021421 304.800608 2 -2 0 2 0 0 0
MU2 22.441928 81.779953 2 -2 2 0 0 0 0
MKS2 13.75177 11.047879 2 -1 0 0 0 0 0
N2 27.277169 337.342351 2 -1 0 1 0 0 0
NU2 10.71709 310.808736 2 -1 2 -1 0 0 0
MA2 6.106076 325.452091 2 0 -1 0 0 0 0
M2 172.563438 0.232191 2 0 0 0 0 0 0
MB2 1.791335 84.393336 2 0 1 0 0 0 0
3N2 2.529533 165.175666 2 0 2 0 0 0 0
LAMBDA2 8.274888 15.531968 2 1 -2 1 0 0 2
L2 16.160735 15.808271 2 1 0 -1 0 0 2
3L2 9.378097 159.672822 2 1 0 0 0 0 0
T2 2.608761 59.154416 2 2 -3 0 0 1 0
S2 45.743507 77.004876 2 2 -2 0 0 0 0
R2 0.538069 0.133908 2 2 -1 0 0 -1 2
K2 16.86265 81.070616 2 2 0 0 0 0 0
2SM2 4.817755 291.924727 2 4 -4 0 0 0 0
M3 0.360602 235.293236 3 0 0 0 0 0 2
T3 0.07349 12.656235 3 3 -4 0 0 0 0
S3 0.076616 140.451454 3 3 -3 0 0 0 2
R3 0.488443 353.338111 3 3 -2 0 0 0 0
N4 0.495054 130.983344 4 -2 0 2 0 0 0
MN4 3.411482 165.190486 4 -1 0 1 0 0 0
M4 10.973372 184.849122 4 0 0 0 0 0 0
MS4 8.606607 265.813108 4 2 -2 0 0 0 0
S4 1.301234 56.171335 4 4 -4 0 0 0 0
2MO5 0.824879 237.489862 5 -1 0 0 0 0 -1
2MK5 1.15173 65.303297 5 1 0 0 0 0 1
M6 7.112251 54.852743 6 0 0 0 0 0 0
2MS6 8.143431 124.356803 6 2 -2 0 0 0 0
M8 1.45909 321.964098 8 0 0 0 0 0 0`;
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
    
    h2 = h2 / 100 +  531.2452 / 100;
    return h2;

}
   
 
}

script.createEvent('TouchStartEvent').bind(function(eventData) {
    // Code, der nach dem BerÃ¼hren des Bildschirms ausgefÃ¼hrt werden soll
 onUpdateEvent(eventData);
    print("Bildschirm wurde berÃ¼hrt!");
    // FÃ¼gen Sie hier den weiteren Programmablauf ein
});