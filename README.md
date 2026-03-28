Tio chi estas la Lens-Studio-pakajho por Snapchat-lenso "[Akvoniveloj (dato)](https://www.snapchat.com/lens/be1946fda5944ed4a4976e5e842f115e?type=SNAPCODE&metadata=01)". Ghi prezentas elstarajn akvonivelojn en Rechtenfleth prognozitajn por dato specifebla fare de la lenso-uzanto.

Tiu chi pakajho povas esti uzata, kiel shablono, ekzemple por krei similajn Snapchat-lensojn por aliaj lokoj.

En dosiero [rechtenfleth20260113.js](https://github.com/AndreasKueck/lensstudioakvonivelojdato/blob/main/Assets/rechtenfleth20260113.js) uzighas harmonaj konstituantoj aliaj, ol tiuj donitaj en [TICON-4](https://www.seanoe.org/data/00980/109129/) por Rechtenfleth. Tiuj aliaj harmonaj konstituantoj bazighas sur [propra harmona analizo de akvoniveloj](https://gist.github.com/AndreasKueck/30a62c57832db964fdd3ff38a4e80d69) kaj eligas prognozitajn akvonivelojn kun UTK, kiel tempa referenco.

Jen ret-apo "[Prognozo de akvoniveloj per TICON-4-datumoj](https://script.google.com/a/~/macros/s/AKfycbzgeChQUzIlVM5wmtsrmwZkNNJUZgFLLPvtYkNztVaFhHHq2xp3NqImx2uolmQw_qBG4g/exec)".

Bazo:

1. Kumm, Werner: "Gezeitenkunde : Theorie und Praxis", Delius-Klasing, Bielefeld, 1992, paghoj 126-129.
2. https://refmar.shom.fr/sites/default/files/2024-01/TIPE_formulation.pdf (SHOM-algoritmo)
3. Informoj donitaj en https://gezeiten.bsh.de/rechtenfleth kaj
4. Informoj donitaj en https://www.seanoe.org/data/00980/109129/ (pri TICON-4)

Uzighas ankau informoj donitaj en:
Hart-Davis Michael, Dettmering Denise, Seitz Florian (2025). TICON-4: TIdal CONstants based on GESLA-4 sea-level records. SEANOE. https://doi.org/10.17882/109129
kaj
Piccioni Gaia, Dettmering Denise, Bosch Wolfgang, Seitz Florian (2019). TICON: TIdal CONstants based on GESLA sea-level records from globally located tide gauges. Geoscience Data Journal. 6 (2). 97-104. https://doi.org/10.1002/gdj3.72, https://archimer.ifremer.fr/doc/00838/94993/

Por krei Snapchat-lenson saman au similan al Akvoniveloj (dato), oni procedu jene:

1. Startigu Lens Studio.
2. Konservu la projekton kun ajna nomo, ekzemple nomo123.
3. Klaku al Asset Library.
4. Serchu tie lau Github Konnect.
5. Instalu ghin en Lens Studio.
6. Klaku tie al Github Konnect.
7. Eventuale estas necese antaue instali [Git](https://git-scm.com/download/win) en sia komputilo, por ke Git-komandoj funkciu.
8. En la Git Terminal de Lens Studio enigu `git clone https://github.com/AndreasKueck/lensstudioakvonivelojdato.git` kaj klaku al `Run Git Command`.
9. Tio efikas, ke en via en-komputila projekto-dosierujo nomo123 ekestas dosierujo lensstudioakvonivelojdato kun interalie dosiero lensstudioakvonivelojdato.esproj.
10. Ghin malfermu, kiel novan projekton, modifu kaj laubezone konservu sub alia nomo.

Sugesto:
Se per ret-apo "[Prognozo de akvoniveloj per TICON-4-datumoj](https://script.google.com/a/~/macros/s/AKfycbzgeChQUzIlVM5wmtsrmwZkNNJUZgFLLPvtYkNztVaFhHHq2xp3NqImx2uolmQw_qBG4g/exec)" oni estas kalkulinta akvonivelojn, la tiucele uzitaj harmonaj konstituantoj kaj ligitaj Doodson-numeroj estas en chelo A1 de [tiu Guglo-tabelo](https://docs.google.com/spreadsheets/d/1qFDaJeq2zCPmwGbbxtswWhSrJvBJuNoch3vXrRmheDU/edit?gid=0#gid=0). Ilin oni povas kopii kaj alglui en sia versio de dosiero rechtenfleth20260131.js por sia Snapchat-lenso por loko alia, ol Rechtenfleth, anstatau la harmonajn konstituantojn kaj ligitajn Doodson-numerojn de Rechtenfleth. Tiaokaze oni atentu, ke en rechtenfleth20260113.js estas uzata 531,2452 cm (en la programkodo: `531.2452`), kiel meza akvonivelo, kaj ke ghin oni laubezone modifu.

## Permesilo ("License")

Chi tiu projekto estas publikigita sub la [MIT-permesilo](./LICENSE).

Vi estas libera uzi, modifi kaj distribui chi tiun Lens-Studio-projekton, se vi konservas la kopirajtan avizon.
