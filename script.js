const farmacias = [
    {
      nombre: "Farmacia Dardati",
      direccion: "Lavalle 64, Rafaela, AF",
      tel: "3492304360",
      lat: -31.2522888,
      lng: -61.4903983
    },
    {
      nombre: "FARMACIAS MORI LIBERTAD",
      direccion: "Libertad 1039, M5521 Mendoza, AF",
      tel: "",
      lat: -32.8967698,
      lng: -68.7863207
    },
    {
      nombre: "FARMACIAS MORI SAN JOSE",
      direccion: "Juan B. Alberdi 362, M5519 San José, Mendoza, AF",
      tel: "",
      lat: -32.8938257,
      lng: -68.8287656
    },
    {
      nombre: "FARMACIAS MORI DORREGO",
      direccion: "Lamadrid 1148, M5519 Dorrego, Mendoza, AF",
      tel: "",
      lat: -32.9039781,
      lng: -68.8248641
    },
    {
      nombre: "FARMACIAS MORI",
      direccion: "Arístides Villanueva 331, M5500 Mendoza, AF",
      tel: "",
      lat: -32.892052,
      lng: -68.855323
    },
    {
      nombre: "FARMACIAS MORI",
      direccion: "Av. España 980, M5500 DFJ, Mendoza, AR",
      tel: "",
      lat: -32.891523,
      lng: -68.8425791
    },
    {
      nombre: "FARMACIAS MORI",
      direccion: "Av. Colón 324, M5500 Mendoza, AR",
      tel: "",
      lat: -32.8946497,
      lng: -68.8449311
    },
    {
      nombre: "FARMACIAS DEL PLATA I",
      direccion: "AV SAN MARTIN 3598, CUIDAD MENDOZA, AR",
      tel: "",
      lat: -32.9507124,
      lng: -68.8548212
    },
    {
      nombre: "FARMACIAS DEL PLATA LA JIRAFA",
      direccion: "BALCARCE 22, LUJAN DE CUYO MENDOZA, AR",
      tel: "",
      lat: -33.0394885,
      lng: -68.8764921
    },
    {
      nombre: "FARMACIAS SANTA ANA III",
      direccion: "SAN MARTIN 400, LUJAN DE CUYO MENDOZA, AR",
      tel: "",
      lat: -33.0009908,
      lng: -68.8671125
    },
    {
        nombre: "FARMACIAS SANTA ANA CENTRAL",
        direccion: "SAN MARTIN 951, LUJAN DE CUYO, MENDOZA, AR",
        tel: "",
        lat: -33.0009908,
        lng: -68.8671125
      },
      {
        nombre: "FARMACIAS SANTA ANA REGIONAL",
        direccion: "SAN MARTIN 900, LUJAN DE CUYO, MENDOZA, AR",
        tel: "",
        lat: -33.0009908,
        lng: -68.8671125
      },
      {
        nombre: "FARMACIAS MORI GODOY CRUZ",
        direccion: "AV SAN MARTIN SUR 2375, GODOY CRUZ, MENDOZA, AR",
        tel: "",
        lat: -32.9440889,
        lng: -68.8513512
      },
      {
        nombre: "FARMACIAS MORI",
        direccion: "JORGE A. CALLE 151, CUIDAD, MENDOZA, AR",
        tel: "",
        lat: -32.8688416,
        lng: -68.8507493
      },
      {
        nombre: "FARMACIAS MORI GODOY CRUZ",
        direccion: "JUAN DE GARAY 30, GODOY CRUZ, MENDOZA, AR",
        tel: "",
        lat: -32.9158519,
        lng: -68.8426254
      },
      {
        nombre: "FARMACIAS MORI",
        direccion: "AV LAS HERAS 323, CUIDAD, MENDOZA, AR",
        tel: "",
        lat: -32.8853878,
        lng: -68.8434691
      },
      {
        nombre: "FARMACIA DEL CENTRO GODOY CRUZ",
        direccion: "RIVADAVIA 898, GODOY CRUZ, MENDOZA, AR",
        tel: "",
        lat: -32.9237586,
        lng: -68.8527057
      },
      {
        nombre: "FARMACIA DEL CENTRO LAS HERAS",
        direccion: "SAN MARTIN 1303, LAS HERAS, MENDOZA, AR",
        tel: "",
        lat: -32.8273612,
        lng: -68.7708862
      },
      {
        nombre: "FARMACIA DEL CENTRO EXPRESS 10",
        direccion: "SAN MARTIN 167, GODOY CRUZ, MENDOZA, AR",
        tel: "",
        lat: -32.9286268,
        lng: -68.8583963
      },
      {
        nombre: "FARMACIA DEL CENTRO 12",
        direccion: "BELGRANO 1425, MENDOZA, MENDOZA, AR",
        tel: "",
        lat: -32.9090241,
        lng: -68.8426387
      },
      {
        nombre: "FARMACIA DEL CENTRO 14",
        direccion: "SAN MARTIN 1301, MENDOZA, MENDOZA, AR",
        tel: "",
        lat: -33.0806497,
        lng: -68.47057
      },
      {
        nombre: "FARMACIA DEL CENTRO MEGASTORE",
        direccion: "SAN MARTIN 1001, MENDOZA, MENDOZA, AR",
        tel: "",
        lat: -33.0806497,
        lng: -68.47057
      },
      {
        nombre: "Farmacia Lavezini",
        direccion: "J. F. Kennedy 625, Choele Choel, Río Negro, AR",
        tel: "",
        lat: -39.2881005,
        lng: -65.6599027
      },
      {
        nombre: "Fcia san cayetano scs",
        direccion: "Av. Lima 470, San Martin, Mendoza, AR",
        tel: "2634630026",
        lat: -33.0733808,
        lng: -68.47389129999999
      },
      {
        nombre: "FARMACIA SAN RAMON",
        direccion: "COLON 142, Mendoza, AR",
        tel: "2614292937",
        lat: -32.8947802,
        lng: -68.842475
      },
      {
        nombre: "FARMACIA DEL MILAGRO",
        direccion: "JUAN BAUTISTA ALBERDI 864, Tucuman, AR",
        tel: "3865541046",
        lat: -26.8408503,
        lng: -65.2167848
      },
      {
        nombre: "FARMACIA MITRE",
        direccion: "AV. BELGRANO 26, Catamarca, AR",
        tel: "3834909415",
        lat: -28.4606537,
        lng: -65.78715869999999
      },
      {
        nombre: "FARMACIA CURA ALVARES PLUS",
        direccion: "Italia 498, Parana, Entre Rios, AR",
        tel: "3434072595",
        lat: -31.7366675,
        lng: -60.53512180000001
      },
      {
        nombre: "FARMACIA CURA ALVAREZ SPOT",
        direccion: "Tucuman 96, Parana, Entre Rios, AR",
        tel: "3436212234",
        lat: -31.729426,
        lng: -60.5350443
      },
      {
        nombre: "FARMACIA PARANA",
        direccion: "Gualeguaychu 655, Parana, Entre Rios, AR",
        tel: "3434327177",
        lat: -31.7395883,
        lng: -60.5232592
      },
      {
        nombre: "FARMACIA MAGNA",
        direccion: "Santiago del Estero 302, Parana, Entre Rios, AR",
        tel: "3434233720",
        lat: -31.7265649,
        lng: -60.53552699999999
      },
      {
        nombre: "FARMACIA CURA ALVAREZ",
        direccion: "Enrique Carbo 702, Parana, Entre Rios, AR",
        tel: "3434318285",
        lat: -31.7414972,
        lng: -60.52347320000001
      },
      {
        nombre: "FARMACIA ROMO",
        direccion: "Av. del Libertador 507, Moreno, Provincia de Buenos Aires, AR",
        tel: "0237 463-7929",
        lat: -34.6440219,
        lng: -58.7891182
      },
      {
        nombre: "FCIA. ALTO PATAGONIA SCS",
        direccion: "Sarmiento 4114, Bahía Blanca, Provincia de Buenos Aires, AR",
        tel: "2915222074",
        lat: -38.6855412,
        lng: -62.23202719999999
      },
      {
        nombre: "FCIA. ALBERDI",
        direccion: "ALBERDI 758, Concepción del Uruguay, Entre Ríos, AR",
        tel: "03442 42-2332",
        lat: -32.486217,
        lng: -58.23281199999999
      },
      {
        nombre: "FARMASALUD",
        direccion: "CASEROS 438, VILLA DE SOTO, Córdoba, AR",
        tel: "03549 43-9661",
        lat: -30.8554647,
        lng: -64.9990583
      },
      {
        nombre: "FARMACIA DEL SUR",
        direccion: "20 DE junio 793, RIO GRANDE, TIERRA DEL FUEGO, AR",
        tel: "02064 42-5691",
        lat: -53.766245,
        lng: -67.7120842
      },
      {
        nombre: "FCIA. DEL PUEBLO EXPRES",
        direccion: "SAN MARTIN 721, RIO GRANDE, TIERRA DEL FUEGO, AR",
        tel: "02964-420683",
        lat: -53.8135067,
        lng: -67.675465
      },
      {
        nombre: "FCIA. DEL PUEBLO",
        direccion: "SAN MARTIN 402, RIO GRANDE, TIERRA DEL FUEGO, AR",
        tel: "02964-422525",
        lat: -53.8134775,
        lng: -67.6753598
      },
      {
        nombre: "FCIA. DEL PUEBLO II",
        direccion: "VIEDMA 778, RIO GRANDE, TIERRA DEL FUEGO",
        tel: "02964-427112",
        lat: -53.7695385,
        lng: -67.7164374
      },
      {
        nombre: "FCIA. SAN MARTIN",
        direccion: "SUC PERITO MORENO 1550, USHUAIA, TIERRA DEL FUEGO",
        tel: "02901-43-3262",
        lat: -54.7988818,
        lng: -68.2777534
      },
      {
        nombre: "FCIA. SAN MARTIN",
        direccion: "AV. SAN MARTIN 1241, USHUAIA, TIERRA DEL FUEGO",
        tel: "02901-42-4752",
        lat: -54.8088994,
        lng: -68.3149233
      },
      {
        nombre: "FCIA. SALK KUANIP II",
        direccion: "L. LUGONES 1893, USHUAIA, TIERRA DEL FUEGO",
        tel: "2901-422-797",
        lat: -54.8131679,
        lng: -68.3243449
      },
      {
        nombre: "FCIA. ALEM",
        direccion: "AV. LEANDRO N. ALEM 2654, USHUAIA, TIERRA DEL FUEGO",
        tel: "02901-425-045",
        lat: -54.8108172,
        lng: -68.3419854
      },
      {
        nombre: "FARMATOTAL",
        direccion: "MAGALLANES 853, USHUAIA, TIERRA DEL FUEGO",
        tel: "02901-436-010",
        lat: -54.8042865,
        lng: -68.3120071
      },
      {
        nombre: "FCIA. ECONOFARMA",
        direccion: "AV. LEANDRO N. ALEM 1407, USHUAIA, TIERRA DEL FUEGO",
        tel: "02901-425-305",
        lat: -54.8027251,
        lng: -68.3215911
      },
      {
        nombre: "FCIA. ACIGAMI",
        direccion: "FACUNDO QUIROGA 1668, USHUAIA, TIERRA DEL FUEGO",
        tel: "02901-43-3752",
        lat: -54.8019121,
        lng: -68.3029511
      },
      {
        nombre: "FCIA LA PLAZOLETA",
        direccion: "ACONQUIJA 2099, YERBA BUENA, TUCUMAN",
        tel: "0381-4256840",
        lat: -26.8117766,
        lng: -65.3011188
      },
      {
        nombre: "FCIA LA BOTICA",
        direccion: "D. DEL VILLAROEL 256, FAMAILLÁ, TUCUMAN",
        tel: "03863-431-011",
        lat: -27.0560551,
        lng: -65.4021683
      },
      {
        nombre: "FCIA LA BOTICA",
        direccion: "D. DEL VILLAROEL 256, FAMAILLÁ, TUCUMAN",
        tel: "03863-431-011",
        lat: -27.0560551,
        lng: -65.4021683
      },
      {
        nombre: "FCIA SUFARM",
        direccion: "AV PERON 1900, YERBA BUENA, TUCUMAN",
        tel: "0381-6838347",
        lat: -26.7998877,
        lng: -65.2977908
      },
      {
        nombre: "FCIA SAN PABLO",
        direccion: "SAN MARTIN 1538, CONCEPCIÓN, TUCUMAN",
        tel: "03865-421-697",
        lat: -27.3453363,
        lng: -65.5883464
      },
      {
        nombre: "FCIA DEL PUEBLO",
        direccion: "AV ACONAQUIJA 1812, YERBA BUENA, TUCUMAN",
        tel: "381-4251040",
        lat: -26.8119881,
        lng: -65.3013529
      },
      {
        nombre: "FCIA LA UNION",
        direccion: "A ACONQUIJA 1931, YERBA BUENA, TUCUMAN",
        tel: "381-425-5180",
        lat: -26.8120683,
        lng: -65.2974018
      },
      {
        nombre: "FCIA LA PLAZOLETA",
        direccion: "S LORENZO ESQ. CHACAB., SAN MIGUEL DE TUCUMAN, TUCUMAN",
        tel: "0381-4223020",
        lat: -26.8280595,
        lng: -65.2317063
      },
      {
        nombre: "FCIA LA PLAZOLETA",
        direccion: "AV. REP. DEL LÍBANO 987, SAN MIGUEL DE TUCUMAN, TUCUMAN",
        tel: "0381-4323175",
        lat: -26.8147988,
        lng: -65.2148323
      },
      {
        nombre: "FCIA LA UNION",
        direccion: "9 DE JULIO ESQ. C. ALVAREZ, SAN MIGUEL DE TUCUMAN, TUCUMAN",
        tel: "422-7379",
        lat: -26.8322867,
        lng: -65.2050651
      },
      {
        nombre: "FCIA LA PLAZOLETA",
        direccion: "AV. JUAN B JUSTO 949, SAN MIGUEL DE TUCUMAN, TUCUMAN",
        tel: "0381-4217135",
        lat: -26.8194311,
        lng: -65.193745
      },
      {
        nombre: "FCIA LA UNION",
        direccion: "25 DE May 0653, SAN MIGUEL DE TUCUMAN, TUCUMAN",
        tel: "421-2200",
        lat: -26.8180323,
        lng: -65.221915
      },
      {
        nombre: "FCIA LA UNION",
        direccion: "25 DE Mayo 0653, SAN MIGUEL DE TUCUMAN, TUCUMAN",
        tel: "421-2200",
        lat: -26.8180323,
        lng: -65.221915
      },
      {
        nombre: "FCIA LA UNION",
        direccion: "MAIPU 198, SAN MIGUEL DE TUCUMAN, TUCUMAN",
        tel: "430-3403",
        lat: -26.8277876,
        lng: -65.2072828
      },
      {
        nombre: "FCIA ELINA",
        direccion: "SIMÓN BOLIVAR 500, SAN MIGUEL DE TUCUMAN, TUCUMAN",
        tel: "0381-424-4934",
        lat: -26.8402519,
        lng: -65.2085953
      },
      {
        nombre: "FCIA LA UNION",
        direccion: "SAN MARTIN 623, SAN MIGUEL DE TUCUMAN, TUCUMAN",
        tel: "421-9296",
        lat: -26.8291908,
        lng: -65.2062446
      },
      {
        nombre: "FCIAS. DEL PUEBLO",
        direccion: "25 DE Mayo 0789, SAN MIGUEL DE TUCUMAN, TUCUMAN",
        tel: "4 DE Mayo 13471",
        lat: -26.8161502,
        lng: -65.2214551
      },
      {
        nombre: "FCIAS. DEL PUEBLO",
        direccion: "VIRGEN DE LA MERCED 561, SAN MIGUEL DE TUCUMAN, TUCUMAN",
        tel: "4524603",
        lat: -26.8240006,
        lng: -65.1998298
      },
      {
        nombre: "FCIAS. DEL PUEBLO",
        direccion: "JUNIN 691, SAN MIGUEL DE TUCUMAN, TUCUMAN",
        tel: "4211877",
        lat: -26.8207002,
        lng: -65.20655
      },
      {
        nombre: "FCIAS. DEL PUEBLO",
        direccion: "MAIPU 27, SAN MIGUEL DE TUCUMAN, TUCUMAN",
        tel: "4220439",
        lat: -26.8301475,
        lng: -65.2076907
      },
      {
        nombre: "FCIAS. DEL PUEBLO",
        direccion: "AV BELGRANO 2847, SAN MIGUEL DE TUCUMAN, TUCUMAN",
        tel: "4527784",
        lat: -26.8114184,
        lng: -65.2373585
      },
      {
        nombre: "FCIAS. DEL PUEBLO",
        direccion: "25 DE Mayo 0313, SAN MIGUEL DE TUCUMAN, TUCUMAN",
        tel: "27 DE August 13444",
        lat: -26.822393,
        lng: -65.2231214
      },
      {
        nombre: "FCIAS. DEL PUEBLO",
        direccion: "LAPRIDA 3, SAN MIGUEL DE TUCUMAN, TUCUMAN",
        tel: "4227513",
        lat: -26.8310647,
        lng: -65.2031234
      },
      {
        nombre: "FCIAS. DEL PUEBLO",
        direccion: "AV ALEM 199, SAN MIGUEL DE TUCUMAN, TUCUMAN",
        tel: "4244504",
        lat: -26.8308392,
        lng: -65.2194699
      },
      {
        nombre: "FCIA ACCIÓN SOCIAL",
        direccion: "SAN MARTIN 864, SAN MIGUEL DE TUCUMAN, TUCUMAN",
        tel: "0381-484-1300",
        lat: -26.8287391,
        lng: -65.2100475
      },
      {
        nombre: "FCIA ACCIÓN SOCIAL",
        direccion: "UNIV. ACCIÓN SOCIAL, SAN MIGUEL DE TUCUMAN, TUCUMAN",
        tel: "",
        lat: -26.8324287,
        lng: -65.2191976
      },
      {
        nombre: "FCIA LLANOS",
        direccion: "AVELLANEDA 261, TERMAS DE RIO HONDO, SANTIAGO DEL ESTERO",
        tel: "3858-42-8884",
        lat: -27.4970338,
        lng: -64.8537926
      },
      {
        nombre: "FARMACIA SUR",
        direccion: "M 37 L 4 SAINT GERMEN, SANTIAGO DEL ESTERO, SANTIAGO DEL ESTERO, AF",
        tel: "0385-627-2322",
        lat: -27.8152542,
        lng: -64.2484448
      },
      {
        nombre: "FARMACIE IV",
        direccion: "AV BELGRANO NOR 219, SANTIAGO DEL ESTERO, SANTIAGO DEL ESTERO",
        tel: "0384-699-7330",
        lat: -27.7729599,
        lng: -64.2747182
      },
      {
        nombre: "FARMACIE II",
        direccion: "24 DE September 0439, SANTIAGO DEL ESTERO, SANTIAGO DEL ESTERO",
        tel: "0385-422-3775",
        lat: -27.7833574,
        lng: -64.264167
      },
      {
        nombre: "FARMACIE III",
        direccion: "AV BELGRANO SUR 1695, SANTIAGO DEL ESTERO, SANTIAGO DEL ESTERO",
        tel: "0385-429-9534",
        lat: -27.8003907,
        lng: -64.2530084
      },
      {
        nombre: "FCIA LA ESQUINA",
        direccion: "LA PLATA 99, SANTIAGO DEL ESTERO, SANTIAGO DEL ESTERO",
        tel: "385-421-1772",
        lat: -27.7854142,
        lng: -64.2591492
      },
      {
        nombre: "FARMACIE I",
        direccion: "SAEN PEÑA 115, SANTIAGO DEL ESTERO, SANTIAGO DEL ESTERO",
        tel: "0385-428-3336",
        lat: -27.7881822,
        lng: -64.264207
      },
      {
        nombre: "FCIA ALVAREZ",
        direccion: "ROCA SUR 640, SANTIAGO DEL ESTERO, SANTIAGO DEL ESTERO",
        tel: "385-421-3126",
        lat: -27.7849679,
        lng: -64.2560947
      },
      {
        nombre: "FCIA. SINDICAL BANCARIA",
        direccion: "BROWN 125, SAN ANTONIO OESTE, RIO NEGRO",
        tel: "0292-021-1450",
        lat: -40.7333763,
        lng: -64.9535634
      },
      {
        nombre: "FCIA DI PASCUALE",
        direccion: "SAN MARTIN 628, GENERAL CONESA, RIO NEGRO",
        tel: "0293-149-8459",
        lat: -40.1021876,
        lng: -64.4567367
      },
      {
        nombre: "FCIA MICHELLI",
        direccion: "VIEDMA Y CONESA S/N, LAS GRUTAS, RIO NEGRO",
        tel: "0293-449-7272",
        lat: -40.8107881,
        lng: -65.0879162
      },
      {
        nombre: "FCIA. LA BANCARIA",
        direccion: "SAN MARTIN 745, RIO COLORADO, RIO NEGRO",
        tel: "0293-143-1703",
        lat: -38.9945991,
        lng: -64.0975004
      },
      {
        nombre: "FCIA. PHARMACY 2",
        direccion: "AV. 7 LAGOS 850, VILLA LA ANGOSTURA, NEUQUEN",
        tel: "11-3036-5152",
        lat: -40.7555812,
        lng: -71.6563931
      },
      {
        nombre: "FCIA. ZONA VITAL",
        direccion: "MITRE 609, SAN CARLOS DE BARILOCHE, RIO NEGRO",
        tel: "0294-442-6054",
        lat: -41.1346177,
        lng: -71.3010015
      },
      {
        nombre: "FCIA. PHARMACY AVENIDA",
        direccion: "AV. ARRAYANES 275, VILLA LA ANGOSTURA, NEUQUEN",
        tel: "02944-256-805",
        lat: -40.7624757,
        lng: -71.642197
      },
      {
        nombre: "FCIA. DR. PASTEUR",
        direccion: "ELORDI 1164, SAN CARLOS DE BARILOCHE, RIO NEGRO",
        tel: "0294-429-676",
        lat: -41.1447661,
        lng: -71.2971881
      },
      {
        nombre: "FCIA. VEGA",
        direccion: "RUTA 40 Y Q. MARTIN, SAN MARTIN DE LOS ANDES, NEUQUEN",
        tel: "02972-421-605",
        lat: -40.1368259,
        lng: -71.2880127
      },
      {
        nombre: "FCIA. ROCA",
        direccion: "MARIANO MORENO 717, SAN MARTIN DE LOS ANDES, NEUQUEN",
        tel: "02972-412-747 / 02972-422-537",
        lat: -40.1573401,
        lng: -71.3538761
      },
      {
        nombre: "FCIA SAN RAFAEL",
        direccion: "AV LIBERTADOR 707, SAN VICENTE, MISIONES",
        tel: "3755-46-0683",
        lat: -26.996299,
        lng: -54.486262
      },
      {
        nombre: "FCIA. GALENICA",
        direccion: "VILLEGAS 890, SAN MARTIN DE LOS ANDES, NEUQUEN",
        tel: "02944-422-537",
        lat: -40.157472,
        lng: -71.3494767
      },
      {
        nombre: "FCIA FARMAMUNDO",
        direccion: "CONSTITUCION 347, SAN VICENTE, MISIONES",
        tel: "3755461379",
        lat: -26.9980466,
        lng: -54.4806111
      },
      {
        nombre: "FCIA IRUPE",
        direccion: "AV DEL LIBERTADOR 801, SAN VICENTE, MISIONES",
        tel: "3755-460641",
        lat: -26.9960767,
        lng: -54.4851888
      },
      {
        nombre: "FCIA. SALUD",
        direccion: "SARMIENTO 455, OBERA, MISIONES",
        tel: "0375-540-8940",
        lat: -27.4837591,
        lng: -55.1163107
      },
      {
        nombre: "FCIA GABRIEL BIS",
        direccion: "AVENIDA LIBERTAD 799, OBERA, MISIONES",
        tel: "03755 40-7770",
        lat: -27.4887335,
        lng: -55.1104455
      },
      {
        nombre: "FCIA.LUNA",
        direccion: "RALFSINGER 142, OBERA, MISIONES",
        tel: "03755-426-680",
        lat: -27.4861891,
        lng: -55.1185471
      },
      {
        nombre: "FCIA MODERNA",
        direccion: "CORDOBA 24, OBERA, MISIONES",
        tel: "03755-42-1108",
        lat: -27.4862898,
        lng: -55.1224524
      },
      {
        nombre: "FCIA PASTORI",
        direccion: "AV. LIBERTAD 559, OBERA, MISIONES",
        tel: "03755 40-8800",
        lat: -27.4871972,
        lng: -55.1133368
      },
      {
        nombre: "SAN FRANCISCO 2",
        direccion: "LAVALLE ESQ. 19 DE ABRIL, SAN SALVADOR, JUJUY",
        tel: "388-422-7221",
        lat: -24.1889153,
        lng: -65.3045039
      },
      {
        nombre: "FCIA. CASTORE",
        direccion: "SAN NICOLÁS DE BARI 534, LA RIOJA, LA RIOJA",
        tel: "0383-469-9498",
        lat: -29.4135818,
        lng: -66.8555659
      },
      {
        nombre: "FCIA EL BOTICARIO",
        direccion: "CLAUDIO RODRIGO 154, EL DORADO, MISIONES",
        tel: "03751 42-6811",
        lat: -26.4070199,
        lng: -54.6052544
      },
      {
        nombre: "FCIA CARRILLO",
        direccion: "GUEMES 1018, SAN SALVADOR, JUJUY",
        tel: "388-422-2917",
        lat: -24.1833132,
        lng: -65.3073922
      },
      {
        nombre: "FCIA SAN FRANCISCO",
        direccion: "BELGRANO Y LAVALLE, SAN SALVADOR, JUJUY",
        tel: "388-423-7333",
        lat: -24.1853383,
        lng: -65.3028442
      },
      {
        nombre: "FCIA SAN MARTIN",
        direccion: "AV SAN MARTIN 244, SAN SALVADOR, JUJUY",
        tel: "388-424-1219",
        lat: -24.1863295,
        lng: -65.296714
      },
      {
        nombre: "FCIA EL INCA",
        direccion: "ALVEAR 1198, SAN SALVADOR, JUJUY",
        tel: "0388-4228436",
        lat: -24.1845204,
        lng: -65.3096187
      },
      {
        nombre: "FCIA. RASELLO",
        direccion: "ESTRADA 1644, VILLA ELISA, ENTRE RÍOS",
        tel: "03447-481207",
        lat: -32.1604251,
        lng: -58.3992302
      },
      {
        nombre: "FCIA SIUFI",
        direccion: "ALVEAR 1062, SAN SALVADOR, JUJUY",
        tel: "388-423-1705",
        lat: -24.1844364,
        lng: -65.3078185
      },
      {
        nombre: "FCIA. MODERNA",
        direccion: "SAN MARTIN 1101, PARANÁ, ENTRE RÍOS",
        tel: "0343-431300",
        lat: -31.7413197,
        lng: -60.5115471
      },
      {
        nombre: "FCIA. DEL CENTRO",
        direccion: "MAIPU 165, VICTORIA, ENTRE RÍOS",
        tel: "03436-42-1605",
        lat: -32.624078,
        lng: -60.1551383
      },
      {
        nombre: "FCIA. JACOB",
        direccion: "SAN MARTÍN 201, SAN SALVADOR, ENTRE RÍOS",
        tel: "03454-911-434",
        lat: -31.6265217,
        lng: -58.504473
      },
      {
        nombre: "FCIA. LUZ Y FUERZA",
        direccion: "CORRIENTES 667, PARANÁ, ENTRE RÍOS",
        tel: "0343-423-0019",
        lat: -31.7247114,
        lng: -60.5250452
      },
      {
        nombre: "FCIA. LUZ Y FUERZA",
        direccion: "BELGRANO 166, PARANÁ, ENTRE RÍOS",
        tel: "0343-423-1864",
        lat: -31.7356759,
        lng: -60.5269735
      },
      {
        nombre: "FCIA AMUR",
        direccion: "CERVANTES 99, PARANÁ, ENTRE RÍOS",
        tel: "0343-421-7015",
        lat: -31.729904,
        lng: -60.530569
      },
      {
        nombre: "FCIA. MARRONE",
        direccion: "25 DE Mayo 30, Libertador San Martín, ENTRE RÍOS",
        tel: "0343-491-0484",
        lat: -32.075771,
        lng: -60.4636985
      },
      {
        nombre: "FCIA. AMUR",
        direccion: "CERVANTES 865, GUALEGUYCHU, ENTRE RÍOS",
        tel: "3446434710",
        lat: -33.0001003,
        lng: -58.5174389
      },
      {
        nombre: "FCIA. LIBERTADOR",
        direccion: "25 DE Mayo 302, Libertador San Martín, ENTRE RÍOS",
        tel: "0343-491-0129",
        lat: -32.0745184,
        lng: -60.4616182
      },
      {
        nombre: "FCIA. LEDESMA",
        direccion: "GDOR ANTELO 295, FEDERAL, ENTRE RÍOS",
        tel: "0345-442-2767",
        lat: -30.9572822,
        lng: -58.7760226
      },
      {
        nombre: "FCIA. NUEVA PASTEUR",
        direccion: "RIVADAVIA 1156, GUALEGUYCHU, ENTRE RÍOS",
        tel: "03446-43-5001",
        lat: -33.0077778,
        lng: -58.5111667
      },
      {
        nombre: "FCIA. REAL",
        direccion: "BELGRANO 295, GRAL. RAMÍREZ, ENTRE RÍOS",
        tel: "0343-498-2660",
        lat: -32.1737892,
        lng: -60.1992203
      },
      {
        nombre: "FCIA. FEDERACION",
        direccion: "LAS MAGNOLIAS 1087, FEDERACION, ENTRE RÍOS",
        tel: "0345-648-1640",
        lat: -30.9830315,
        lng: -57.9236457
      },
      {
        nombre: "FARMAFULL",
        direccion: "URQUIZA 536, CONCORDIA, ENTRE RÍOS",
        tel: "345-422-6761",
        lat: -31.3989034,
        lng: -58.0183203
      },
      {
        nombre: "FCIA. CARDOZO",
        direccion: "EVA PERON Y MITRE, DIAMANTE, ENTRE RÍOS",
        tel: "0343-498-2660",
        lat: -32.0676609,
        lng: -60.6414633
      },
      {
        nombre: "FARMAFULL",
        direccion: "URDINARRAIN 31, CONCORDIA, ENTRE RÍOS",
        tel: "4227737",
        lat: -31.3946848,
        lng: -58.0187979
      },
      {
        nombre: "FARMAFULL",
        direccion: "PELLEGRINI 889, CONCORDIA, ENTRE RÍOS",
        tel: "4222823",
        lat: -31.3913921,
        lng: -58.017434
      },
      {
        nombre: "FARMAFULL",
        direccion: "SAN JUAN 1390, CONCORDIA, ENTRE RÍOS",
        tel: "4216080",
        lat: -31.3845385,
        lng: -58.0108474
      },
      {
        nombre: "FARMAFULL",
        direccion: "SAN JUAN 1390, CONCORDIA, ENTRE RÍOS",
        tel: "4216080",
        lat: -31.3845385,
        lng: -58.0108474
      },
      {
        nombre: "FCIA. SUAREZ",
        direccion: "SARMIENTO Y J. D. PERON, CONCEPCION DEL URUGUAY, ENTRE RÍOS",
        tel: "03442-430-602",
        lat: -32.4909566,
        lng: -58.2300824
      },
      {
        nombre: "FCIA ENTRE RIOS",
        direccion: "J J DE URQUIZA 288, CONCEPCION DEL URUGUAY, ENTRE RÍOS",
        tel: "03442-425856",
        lat: -32.4807198,
        lng: -58.2335952
      },
      {
        nombre: "FCIA. VELEZ SÁRSFIELD",
        direccion: "V. SÁRSFIELD 248, CONCORDIA, ENTRE RÍOS",
        tel: "0345-421-3356",
        lat: -31.3934226,
        lng: -58.0225347
      },
      {
        nombre: "FCIA. CENTENARIO 2",
        direccion: "SAN MARTIN Y PERON, COLON, ENTRE RÍOS",
        tel: "03447-425-377",
        lat: -32.1554884,
        lng: -58.1922627
      },
      {
        nombre: "FCIA DEL PUEBLO",
        direccion: "SARMIENTO 2646, CHAJARI, ENTRE RÍOS",
        tel: "03456-421050",
        lat: -30.7575401,
        lng: -57.980032
      },
      {
        nombre: "FCIA. BELLAFARMA",
        direccion: "Buenos Aires 126, CRESPO, ENTRE RÍOS",
        tel: "0343 495-4118",
        lat: -34.6036844,
        lng: -58.3815591
      },
      {
        nombre: "FCIA LA TERMINAL",
        direccion: "AV MAIPU 2460, CORRIENTES, CORRIENTES",
        tel: "3783-344-6875",
        lat: -27.4974045,
        lng: -58.8160535
      },
      {
        nombre: "FCIA LA TERMINAL",
        direccion: "AV MAIPU 2460, CORRIENTES, CORRIENTES",
        tel: "3783-344-6875",
        lat: -27.4974045,
        lng: -58.8160535
      },
      {
        nombre: "FCIA. BOTIQUÍN",
        direccion: "RUTA 118 Km. 63, SANTA ROSA, CORRIENTES",
        tel: "03782-494-351",
        lat: -28.2632423,
        lng: -58.1167029
      },
      {
        nombre: "FCIA ANASTASI",
        direccion: "MARIANO MORENO 505, CORRIENTES, CORRIENTES",
        tel: "37-4466508",
        lat: -27.4724901,
        lng: -58.8445047
      },
      {
        nombre: "FCIA SAN LUIS",
        direccion: "JUNIN 602, CORRIENTES, CORRIENTES",
        tel: "379-442-5080",
        lat: -27.4671022,
        lng: -58.8428867
      },
      {
        nombre: "FCIA FATIMA PAOLA",
        direccion: "AV. SARMIENTO 369 AV1 E/8 Y 10, R. S. PEÑA, CHACO",
        tel: "3644184276",
        lat: -26.8004428,
        lng: -60.4312354
      },
      {
        nombre: "FCIA POLINI",
        direccion: "SAN MARTIN 298, SANTA SYLVINA, CHACO",
        tel: "3735-492399",
        lat: -27.8315995,
        lng: -61.1360334
      },
      {
        nombre: "RED GRAL PAZ",
        direccion: "SANTA FE 124, RESISTENCIA, CHACO",
        tel: "362-445-1962",
        lat: -27.4484209,
        lng: -58.9857602
      },
      {
        nombre: "FCIA MARKONICH",
        direccion: "TUCUMAN 556, QUITILPI, CHACO",
        tel: "364-448-0146",
        lat: -26.8719089,
        lng: -60.2170254
      },
      {
        nombre: "FCIA POLINI",
        direccion: "MORENO 197, R. S. PEÑA, CHACO",
        tel: "3731-422-378",
        lat: -26.8004428,
        lng: -60.4312354
      },
      {
        nombre: "FCIA POLINI",
        direccion: "ALBERDI 31, CNEL DU GRATY, CHACO",
        tel: "3735-498-488",
        lat: -26.5857656,
        lng: -60.9540073
      },
      {
        nombre: "FCIA PINTO III",
        direccion: "25 DE mayo 0555, CHARATA, CHACO",
        tel: "3731-421583",
        lat: -27.21708,
        lng: -61.1907341
      },
      {
        nombre: "FCIA SAN CARLOS",
        direccion: "M MORENO 601, GRAL PINEDO, CHACO",
        tel: "3731-480319",
        lat: -27.3264305,
        lng: -61.2846855
      },
      {
        nombre: "FCIA PINTO IV",
        direccion: "25 DE May 1038, LAS BREÑAS, CHACO",
        tel: "3731-430300",
        lat: -27.0892409,
        lng: -61.0836495
      },
      {
        nombre: "FCIAS RED COLON",
        direccion: "AV COLÓN ESQ AV OCAMPO, SAN FERNANDO DEL VALLE DE CATAMARCA, CATAMARCA",
        tel: "383-4437340",
        lat: -28.4708894,
        lng: -65.8050682
      },
      {
        nombre: "FCIAS MINERVA",
        direccion: "PTE CASTILLO Y 9 DE JULIO, VALLE VIEJO, CATAMARCA",
        tel: "383-444-4635",
        lat: -28.4484926,
        lng: -65.7191769
      },
      {
        nombre: "FCIAS RED COLON",
        direccion: "AV PTE CASTILLO 946, VALLE VIEJO, CATAMARCA",
        tel: "383-4347344",
        lat: -28.4603641,
        lng: -65.7589465
      },
      {
        nombre: "FCIAS MEDIPLUS",
        direccion: "RIVADAVIA 715, SAN FERNANDO DEL VALLE DE CATAMARCA, CATAMARCA",
        tel: "383-342-5901",
        lat: -28.4697585,
        lng: -65.7784441
      },
      {
        nombre: "FCIAS MEDIPLUS",
        direccion: "RIVADAVIA 715, SAN FERNANDO DEL VALLE DE CATAMARCA, CATAMARCA",
        tel: "383-342-5901",
        lat: -28.4697585,
        lng: -65.7784441
      },
      {
        nombre: "FCIAS RED COLON",
        direccion: "AV ILLIA ESQ AV FIGUEROA, SAN FERNANDO DEL VALLE DE CATAMARCA, CATAMARCA",
        tel: "",
        lat: -28.4611462,
        lng: -65.8016647
      },
      {
        nombre: "FCIAS MINERVA",
        direccion: "9 DE JULIO ESQ. MINERVA, SAN FERNANDO DEL VALLE DE CATAMARCA, CATAMARCA",
        tel: "",
        lat: -28.4682731,
        lng: -65.7796745
      },
      {
        nombre: "FCIAS MINERVA",
        direccion: "AYACUCHO ESQ CHACABUCO, SAN FERNANDO DEL VALLE DE CATAMARCA, CATAMARCA",
        tel: "",
        lat: -28.469581,
        lng: -65.7795441
      },
      {
        nombre: "FCIAS MINERVA",
        direccion: "PRADO ESQ. MAIPU, SAN FERNANDO DEL VALLE DE CATAMARCA, CATAMARCA",
        tel: "",
        lat: -28.4756531,
        lng: -65.7809493
      },
      {
        nombre: "FCIAS MINERVA",
        direccion: "OCAMPO Y AHUMADA, SAN FERNANDO DEL VALLE DE CATAMARCA, CATAMARCA",
        tel: "383-443-7308",
        lat: -28.492438,
        lng: -65.7821152
      },
      {
        nombre: "FCIAS MINERVA",
        direccion: "AV REPUBLICA 1001 ESQ SAMIENTO, SAN FERNANDO DEL VALLE DE CATAMARCA, CATAMARCA",
        tel: "383-443-7308",
        lat: -28.4700152,
        lng: -65.7801136
      },
      {
        nombre: "FCIAS MINERVA",
        direccion: "M BOTELLO Y RIVADAVIA, SAN FERNANDO DEL VALLE DE CATAMARCA, CATAMARCA",
        tel: "383-443-7332",
        lat: -28.4682424,
        lng: -65.7783455
      },
      {
        nombre: "FCIA SAN NICOLAS",
        direccion: "WARNES 281, TARTAGAL, SALTA",
        tel: "3873423677",
        lat: -22.5185401,
        lng: -63.8031725
      },
      {
        nombre: "FCIA AV TARTAGAL",
        direccion: "ALBERDI 798, TARTAGAL, SALTA",
        tel: "3873513558",
        lat: -22.5167201,
        lng: -63.7986793
      },
      {
        nombre: "FCIAS MINERVA",
        direccion: "RIVADAVIA 652, SAN FERNANDO DEL VALLE DE CATAMARCA, CATAMARCA",
        tel: "383-443-7308",
        lat: -28.4688028,
        lng: -65.7780525
      },
      {
        nombre: "FCIA EL PEREGRINO",
        direccion: "AV GRAK PIZARRO 145, ORAN, SALTA",
        tel: "3878427215",
        lat: -23.128383,
        lng: -64.3216987
      },
      {
        nombre: "FCIA ALVARADO",
        direccion: "ALVARADO Y PELLEGRINI, ORAN, SALTA",
        tel: "3878421654",
        lat: -23.1341049,
        lng: -64.3232368
      },
      {
        nombre: "FCIA AV SALVADOR MAZZA",
        direccion: "AV S MARTIN E INDEP 2, SALVADOR MAZZA, SALTA",
        tel: "3873471999",
        lat: -22.0554561,
        lng: -63.6885824
      },
      {
        nombre: "FCIA DEL NORTE",
        direccion: "24 DE September 0569, EMBARCACIÓN, SALTA",
        tel: "3878471793",
        lat: -23.210322,
        lng: -64.0973059
      },
      {
        nombre: "FCIA VITAL",
        direccion: "SARAVIA 17, GRAL GUEMES, SALTA",
        tel: "3874911294",
        lat: -24.6735053,
        lng: -65.0450802
      },
      {
        nombre: "FCIA DE LA ESQUINA",
        direccion: "GRAL M GUEMES 203, CAFAYATE, SALTA",
        tel: "3868422122",
        lat: -26.066486,
        lng: -65.9739991
      },
      {
        nombre: "FCIAS DEL VALLE",
        direccion: "MENDOZA ESQ JUJUY, SALTA, SALTA",
        tel: "3874227408",
        lat: -24.7943167,
        lng: -65.4169938
      },
      {
        nombre: "FCIAS DEL VALLE",
        direccion: "AV BELGRANO 396, SALTA, SALTA",
        tel: "3874213962",
        lat: -24.7873985,
        lng: -65.4079567
      },
      {
        nombre: "FCIAS DEL VALLE",
        direccion: "ALVARADO ESQ BS AS, SALTA, SALTA",
        tel: "3874219053",
        lat: -24.7905682,
        lng: -65.4098241
      },
      {
        nombre: "FCIAS DEL VALLE",
        direccion: "AV VIRREY TOLEDO 932, SALTA, SALTA",
        tel: "3874310204",
        lat: -24.778744,
        lng: -65.403106
      },
      {
        nombre: "FCIA SUDAMERICANA",
        direccion: "ALBERDI 102, SALTA, SALTA",
        tel: "387213100",
        lat: -24.791129,
        lng: -65.4114703
      },
      {
        nombre: "FCIA AVENIDA AGUARAY",
        direccion: "AV M MORENO Y V BRITO 402, AGUARAY, SALTA",
        tel: "3873460777",
        lat: -22.2432406,
        lng: -63.7346423
      },
      {
        nombre: "FCIA SAN FRANCISCO",
        direccion: "DEAN FUNES 596, SALTA, SALTA",
        tel: "3874222094",
        lat: -24.782896,
        lng: -65.407501
      },
      {
        nombre: "DEL PUEBLO II",
        direccion: "VIEDMA 778, RIO GRANDE, Tierra del Fuego, AR",
        tel: "2964-427112",
        lat: -53.7695385,
        lng: -67.7164374
      },
      {
        nombre: "SAN MARTIN II",
        direccion: "P. MORENO 1550, ROSARIO, SANTA FE, Argentina",
        tel: "2901-43-3262",
        lat: -32.9533453,
        lng: -60.6530794
      },
      {
        nombre: "DEL PUEBLO",
        direccion: "SAN MARTIN 402, RIO GRANDE, Tierra del Fuego, AR",
        tel: "2964-422525",
        lat: -53.8134628,
        lng: -67.6753067
      },
      {
        nombre: "DEL PUEBLO EXPRES",
        direccion: "SAN MARTIN 721, RIO GRANDE, Tierra del fuego, AR",
        tel: "2964-420683",
        lat: -53.8135131,
        lng: -67.675488
      },
      {
        nombre: "DEL SUR",
        direccion: "-404151, RIO GRANDE, Tierra del fuego, AR",
        tel: "296-442-5691",
        lat: -53.7860374,
        lng: -67.7002243
      },
      {
        nombre: "SAN MARTIN II",
        direccion: "AV. SAN MARTIN 1241, ROSARIO, SANTA FE, Argentina",
        tel: "2901-42-4752",
        lat: -32.9525507,
        lng: -60.6379437
      },
      {
        nombre: "SALK KUANIP II",
        direccion: "L. LUGONES 1893, ROSARIO, SANTA FE, Argentina",
        tel: "2901-422-797",
        lat: -32.9149881,
        lng: -60.8394677
      },
      {
        nombre: "SALK",
        direccion: "JAINEN 158, ROSARIO, SANTA FE, Argentina",
        tel: "02901-516-880",
        lat: -32.9587022,
        lng: -60.6930416
      },
      {
        nombre: "FCIA MUTUAL AMUR",
        direccion: "MITRE 753, VENADO TUERTO, SANTA FE, Argentina",
        tel: "3462316675",
        lat: -33.7488585,
        lng: -61.9638607
      },
      {
        nombre: "ALEM",
        direccion: "AV. L. N. ALEM 2654, ROSARIO, SANTA FE, Argentina",
        tel: "2901-425-045",
        lat: -32.9698775,
        lng: -60.6339791
      },
      {
        nombre: "FCIA MARINA",
        direccion: "MAIPU 752, VENADO TUERTO, SANTA FE, Argentina",
        tel: "3462439331",
        lat: -33.7465328,
        lng: -61.9657246
      },
      {
        nombre: "FCIA LANZO",
        direccion: "AV IRIONDO 2531, SAN JUSTO, SANTA FE, Argentina",
        tel: "3498427378",
        lat: -30.790317,
        lng: -60.5926881
      },
      {
        nombre: "FCIA DIAZ",
        direccion: "C PELLEGRINI 2490, LAGUNA PAIVA, SANTA FE, Argentina",
        tel: "3424940001",
        lat: -31.3087676,
        lng: -60.6557793
      },
      {
        nombre: "FCIA LZUAZQUITA",
        direccion: "C PELLEGRINI 2490, LAGUNA PAIVA, SANTA FE, Argentina",
        tel: "3424940001",
        lat: -31.3087676,
        lng: -60.6557793
      },
      {
        nombre: "FCIA GALUCCI",
        direccion: "PASEO DE LOS ANDES Y LAVALLE, LAS ROSAS, SANTA FE, Argentina",
        tel: "3471452694",
        lat: -32.4772095,
        lng: -61.580726
      },
      {
        nombre: "FCIA COLLA",
        direccion: "BELGRANO 845, SAN CARLOS CENTRO, SANTA FE, Argentina",
        tel: "3404422111",
        lat: -31.7303161,
        lng: -61.0921963
      },
      {
        nombre: "FCIA MARIN",
        direccion: "DR ALDO BUSTOS 2059, HUMBOLDT, SANTA FE, Argentina",
        tel: "3496481101",
        lat: -31.4023,
        lng: -61.085747
      },
      {
        nombre: "FCIA CIRELLI",
        direccion: "25 DE May 1654, SANTO TOMÉ, SANTA FE, Argentina",
        tel: "3424740427",
        lat: -28.5524101,
        lng: -56.0452135
      },
      {
        nombre: "FCIA LZUAZQUITA",
        direccion: "AV SAN MARTIN 1129, LAGUNA PAIVA, SANTA FE, Argentina",
        tel: "3424941393",
        lat: -31.3081758,
        lng: -60.6597656
      },
      {
        nombre: "FCIA BUCCI",
        direccion: "CARLOS CASADO 1315, FIRMAT, SANTA FE, Argentina",
        tel: "3465424393",
        lat: -33.4544801,
        lng: -61.4910009
      },
      {
        nombre: "FCIA ACERBI",
        direccion: "SAN MARTÍN 1380, FIRMAT, SANTA FE, Argentina",
        tel: "346566915",
        lat: -31.6106578,
        lng: -60.697294
      },
      {
        nombre: "FCIA PH",
        direccion: "CORDOBA 2576 LOC 2, FUNES, SANTA FE, Argentina",
        tel: "3412311303",
        lat: -32.9215358,
        lng: -60.8109887
      },
      {
        nombre: "FCIA QUASSOLLO",
        direccion: "SARMIENTO 2343, SANTO TOMÉ, SANTA FE, Argentina",
        tel: "3424747428",
        lat: -28.5524101,
        lng: -56.0452135
      },
      {
        nombre: "FCIA SOLSONA",
        direccion: "SARMIENTO 598, BIGAND, SANTA FE, Argentina",
        tel: "3464461286",
        lat: -33.3728244,
        lng: -61.1863914
      },
      {
        nombre: "FCIA SCHNEIDER",
        direccion: "AV CÓRDOBA 2251, ESPERANZA, SANTA FE, Argentina",
        tel: "3496420834",
        lat: -31.447223,
        lng: -60.9371316
      },
      {
        nombre: "FCIA lngONI",
        direccion: "SAAVEDRA 1806, ESPERANZA, SANTA FE, Argentina",
        tel: "3496425313",
        lat: -31.4501458,
        lng: -60.9368838
      },
      {
        nombre: "FARMASHOP",
        direccion: "ESPAÑA 901, ROSARIO, SANTA FE, Argentina",
        tel: "3414265761",
        lat: -32.9587022,
        lng: -60.6930416
      },
      {
        nombre: "FCIA MONTES",
        direccion: "PTE ROCA 901, ROSARIO, SANTA FE, Argentina",
        tel: "3414219943",
        lat: -32.9464594,
        lng: -60.6453503
      },
      {
        nombre: "FCIA FELIZIANI",
        direccion: "LIBERTAD 296, BIGAND, SANTA FE, Argentina",
        tel: "3464461010",
        lat: -33.3723736,
        lng: -61.1852951
      },
      {
        nombre: "FCIA MUTUAL AMUR",
        direccion: "PTE ROCA 835, ROSARIO, SANTA FE, Argentina",
        tel: "3414240313",
        lat: -32.9456988,
        lng: -60.6451751
      },
      {
        nombre: "FARMASHOP",
        direccion: "CÓRDOBA 2999, ROSARIO, SANTA FE, Argentina",
        tel: "8107777795",
        lat: -32.9418861,
        lng: -60.6640892
      },
      {
        nombre: "FARMASHOP",
        direccion: "1 DE May 1698, ROSARIO, SANTA FE, Argentina",
        tel: "3414482387",
        lat: -32.9585154,
        lng: -60.6326002
      },
      {
        nombre: "FCIA MEBA MUTUAL",
        direccion: "ENTRE RIOS 721, ROSARIO, SANTA FE, Argentina",
        tel: "3415975169",
        lat: -32.9449565,
        lng: -60.6405827
      },
      {
        nombre: "FCIA CAPPONE",
        direccion: "BV OROÑO 918, ROSARIO, SANTA FE, Argentina",
        tel: "3414400954",
        lat: -32.9450946,
        lng: -60.6539477
      },
      {
        nombre: "FCIA CRUZ DEL PORTAL",
        direccion: "VICTOR MERCANTE 431, ROSARIO, SANTA FE, Argentina",
        tel: "3414548686",
        lat: -32.9097017,
        lng: -60.6844533
      },
      {
        nombre: "FCIA DEL LEON",
        direccion: "CORDOBA 1704, ROSARIO, SANTA FE, Argentina",
        tel: "3414499494",
        lat: -32.9448052,
        lng: -60.6467035
      },
      {
        nombre: "FARMAVITAL",
        direccion: "AV. FRANCIA 1085, ROSARIO, SANTA FE, Argentina",
        tel: "",
        lat: -32.9452004,
        lng: -60.6660762
      },
      {
        nombre: "FARMAVITAL",
        direccion: "AV. OVIDIO LAGOS 1399, ROSARIO, SANTA FE, Argentina",
        tel: "341-499-8660",
        lat: -32.9495693,
        lng: -60.6631571
      },
      {
        nombre: "FARMAVITAL",
        direccion: "AV. PELLEGRINI 1795, ROSARIO, SANTA FE, Argentina",
        tel: "",
        lat: -32.9557848,
        lng: -60.650565
      },
      {
        nombre: "FARMAVIP",
        direccion: "SAN LORENZO 1160, ROSARIO, SANTA FE, Argentina",
        tel: "",
        lat: -32.9438406,
        lng: -60.6383547
      },
      {
        nombre: "FARMAVIP",
        direccion: "GALINDO 3460, ROSARIO, SANTA FE, Argentina",
        tel: "",
        lat: -32.9338049,
        lng: -60.8204051
      },
      {
        nombre: "FARMAVITAL",
        direccion: "MENDOZA 2595, ROSARIO, SANTA FE, Argentina",
        tel: "341-425-8360",
        lat: -32.948044,
        lng: -60.6599212
      },
      {
        nombre: "FARMAVIP",
        direccion: "CORDOBA 2394, ROSARIO, SANTA FE, Argentina",
        tel: "",
        lat: -32.9431554,
        lng: -60.6558919
      },
      {
        nombre: "FARMAVIP",
        direccion: "AV. PELLEGRINI 1197, ROSARIO, SANTA FE, Argentina",
        tel: "",
        lat: -32.9572154,
        lng: -60.6422333
      },
      {
        nombre: "FARMAVIP",
        direccion: "EVA PERON 8055, ROSARIO, SANTA FE, Argentina",
        tel: "",
        lat: -32.9292288,
        lng: -60.7358592
      },
      {
        nombre: "CAPPONE",
        direccion: "BV. OROÑO 918, ROSARIO, SANTA FE, Argentina",
        tel: "341-440-0954",
        lat: -32.9450946,
        lng: -60.6539477
      },
      {
        nombre: "FARMAVIP",
        direccion: "A. J. PAZ 1065 BIS, ROSARIO, SANTA FE, Argentina",
        tel: "-",
        lat: -32.9193203,
        lng: -60.7777228
      },
      {
        nombre: "CAPPONE",
        direccion: "BV. OROÑO 918, ROSARIO, SANTA FE, Argentina",
        tel: "341-440-0954",
        lat: -32.9450946,
        lng: -60.6539477
      },
      {
        nombre: "FCIA DE LA PLAZA",
        direccion: "LAPRIDA 772, ROSARIO, SANTA FE, Argentina",
        tel: "3414482371",
        lat: -32.9469783,
        lng: -60.6339978
      },
      {
        nombre: "PH FARMACIA",
        direccion: "ROSARIO, SANTA FE, Argentina",
        tel: "-",
        lat: -32.9587022,
        lng: -60.6930416
      },
      {
        nombre: "FCIA SAIA",
        direccion: "FRANCIA 1501, ROSARIO, SANTA FE, Argentina",
        tel: "3414309427",
        lat: -32.9424581,
        lng: -60.6465076
      },
      {
        nombre: "FCIA FERRAN",
        direccion: "SARMIENTO 3098, ROSARIO, SANTA FE, Argentina",
        tel: "3414808142",
        lat: -32.9731938,
        lng: -60.6450331
      },
      {
        nombre: "MILAN",
        direccion: "BV. VILLADA 2041, CASILDA, SANTA FE, Argentina",
        tel: "0346-442-7235",
        lat: -33.0389446,
        lng: -61.1692007
      },
      {
        nombre: "EMBON",
        direccion: "TUCUMAN 1902 | CORDOBA 1299, ROSARIO, SANTA FE, Argentina",
        tel: "341-425-9090",
        lat: -32.9460738,
        lng: -60.6408381
      },
      {
        nombre: "FCIA DEL SIGLO",
        direccion: "CORDOBA 1469, ROSARIO, SANTA FE, Argentina",
        tel: "3414487978",
        lat: -32.9456668,
        lng: -60.6433604
      },
      {
        nombre: "AZANZA",
        direccion: "SAN MARTIN 2983, SANTA FE, SANTA FE, Argentina",
        tel: "342-4811118",
        lat: -31.6413886,
        lng: -60.7051326
      },
      {
        nombre: "BIANUCCI",
        direccion: "H. YRIGOYEN 1701, CASILDA, SANTA FE, Argentina",
        tel: "0346-442-0048",
        lat: -33.0413815,
        lng: -61.1625546
      },
      {
        nombre: "LUZ Y FUERZA",
        direccion: "288368, SANTA FE, SANTA FE, Argentina",
        tel: "342-455-8368",
        lat: -31.6106578,
        lng: -60.697294
      },
      {
        nombre: "ZENTNER",
        direccion: "SAN JERÓNIMO 3101, SANTA FE, SANTA FE, Argentina",
        tel: "342-453-2805",
        lat: -31.6396601,
        lng: -60.7061742
      },
      {
        nombre: "FCIA. SANTA BÁRBARA",
        direccion: "LOS PICAFLORES ESQ MAITENES, VILLA PEHUENIA, NEUQUEN, Argentina",
        tel: "02942-36-0648",
        lat: -38.885036,
        lng: -71.1731467
      },
      {
        nombre: "FCIAS. DEL PUEBLO",
        direccion: "SAN MARTIN 373, ZAPALA, NEUQUEN, Argentina",
        tel: "02942-43-0883",
        lat: -38.9042967,
        lng: -70.0643373
      },
      {
        nombre: "ACOSTA",
        direccion: "SUIPACHA Y 25 DE MAYO, SANTA FE, SANTA FE, Argentina",
        tel: "342-455-3399",
        lat: -31.6402596,
        lng: -60.7039283
      },
      {
        nombre: "FCIA. DE LA COSTA",
        direccion: "AV. RAUL ALFONSIN 950, VIEDMA, RIO NEGRO, Argentina",
        tel: "0292-028-5833",
        lat: -40.8027314,
        lng: -63.0172304
      },
      {
        nombre: "FCIA. LA BANCARIA",
        direccion: "TUCUMAN 205, VIEDMA, RIO NEGRO, Argentina",
        tel: "0292-043-0085",
        lat: -40.8132509,
        lng: -62.9920903
      },
      {
        nombre: "PERFUMERIA BASILE",
        direccion: "BUENOS AIRES 88, VIEDMA, RIO NEGRO, Argentina",
        tel: "0292-042-7735",
        lat: -40.8075559,
        lng: -62.9915572
      },
      {
        nombre: "FCIAS. PATAGÓNICAS",
        direccion: "RIVADAVIA 348, TRELLEW, CHUBUT, Argentina",
        tel: "(0280)- 432-3328",
        lat: -43.252795,
        lng: -65.3086797
      },
      {
        nombre: "FCIAS. PATAGÓNICAS",
        direccion: "RIVADAVIA 348, TRELLEW, CHUBUT, Argentina",
        tel: "(0280)- 432-3328",
        lat: -43.252795,
        lng: -65.3086797
      },
      {
        nombre: "FCIAS. PATAGÓNICAS",
        direccion: "PELLEGRINI Y MICHAEL JONE, TRELLEW, CHUBUT, Argentina",
        tel: "(0280)426-8084",
        lat: -43.2781818,
        lng: -65.3189099
      },
      {
        nombre: "FCIA. SADER",
        direccion: "MITRE 1122, TRELLEW, CHUBUT, Argentina",
        tel: "0280 442-9686",
        lat: -43.2626356,
        lng: -65.3035247
      },
      {
        nombre: "FCIA. SADER",
        direccion: "Michael Jones 1346, TRELLEW, CHUBUT, Argentina",
        tel: "442-2072",
        lat: -43.2700454,
        lng: -65.3071982
      },
      {
        nombre: "FCIA. GUTIERREZ",
        direccion: "28 de Julio 660, TRELLEW, CHUBUT, Argentina",
        tel: "0280 442-0131",
        lat: -43.2565115,
        lng: -65.313914
      },
      {
        nombre: "FCIA. SADER",
        direccion: "BELGRANO 790, TRELLEW, CHUBUT, Argentina",
        tel: "0280 443-0700",
        lat: -43.2576154,
        lng: -65.3029795
      },
      {
        nombre: "FCIA. SOCIAL VI",
        direccion: "URUGUAY 325, SARMIENTO, CHUBUT, Argentina",
        tel: "(0297) 489 4220",
        lat: -45.5883245,
        lng: -69.068389
      },
      {
        nombre: "FCIA. SENILLOSA",
        direccion: "NEUQUEN 156, SENILLOSA, NEUQUEN, Argentina",
        tel: "0299-492-0877",
        lat: -39.0105587,
        lng: -68.4271499
      },
      {
        nombre: "FCIA SOCIAL",
        direccion: "SAN MARTIN 791, TRELLEW, CHUBUT, Argentina",
        tel: "",
        lat: -43.255949,
        lng: -65.3164775
      },
      {
        nombre: "FCIA. ROCA",
        direccion: "MARIANO MORENO 717, SAN MARTIN DE LOS ANDES, NEUQUEN, Argentina",
        tel: "02972-412-747",
        lat: -40.1573401,
        lng: -71.3538761
      },
      {
        nombre: "FCIA. VEGA",
        direccion: "RUTA 40 Y Q. MARTIN, SAN MARTIN DE LOS ANDES, NEUQUEN, Argentina",
        tel: "02972-421-605",
        lat: -40.1368259,
        lng: -71.2880127
      },
      {
        nombre: "FCIA. DR. PASTEUR",
        direccion: "ELORDI 1164, SAN CARLOS DE BARILOCHE, RIO NEGRO, Argentina",
        tel: "0294-429-676",
        lat: -41.1447661,
        lng: -71.2971881
      },
      {
        nombre: "FCIA. ZONA VITAL",
        direccion: "MITRE 609, SAN CARLOS DE BARILOCHE, RIO NEGRO, Argentina",
        tel: "0294-442-6054",
        lat: -41.1346177,
        lng: -71.3010015
      },
      {
        nombre: "FCIA. GALENICA",
        direccion: "VILLEGAS 890, SAN MARTIN DE LOS ANDES, NEUQUEN, Argentina",
        tel: "02944-422-537",
        lat: -40.157472,
        lng: -71.3494767
      },
      {
        nombre: "FCIA. DON OLEGARIO",
        direccion: "R. DE ESCALADA 1124, SAN ANTONIO OESTE, RIO NEGRO, Argentina",
        tel: "0293-449-3488",
        lat: -40.7333763,
        lng: -64.9535634
      },
      {
        nombre: "FCIA. GUZMAN",
        direccion: "SAN MARTIN Y ALEM S/N, SAN ANTONIO OESTE, RIO NEGRO, Argentina",
        tel: "0293-449-3360",
        lat: -40.7306723,
        lng: -64.9519439
      },
      {
        nombre: "FCIA. SINDICAL BANCARIA",
        direccion: "BROWN 125, SAN ANTONIO OESTE, RIO NEGRO, Argentina",
        tel: "0292-021-1450",
        lat: -40.7333763,
        lng: -64.9535634
      },
      {
        nombre: "FCIA SOCIAL",
        direccion: "CAPITAN FRAGATA MOYANO 1711, RADA TILLY, CHUBUT, Argentina",
        tel: "(0297) 445 - 2008",
        lat: -45.9278847,
        lng: -67.5559124
      },
      {
        nombre: "FCIA. LA BANCARIA",
        direccion: "SAN MARTIN 745, RIO COLORADO, RIO NEGRO, Argentina",
        tel: "0293-143-1703",
        lat: -38.9945991,
        lng: -64.0975004
      },
      {
        nombre: "FCIA DE LA VILLA",
        direccion: "AV ALTE BROWN 642, RADA TILLY, CHUBUT, Argentina",
        tel: "(0297) 445 - 2425",
        lat: -45.9234376,
        lng: -67.5604745
      },
      {
        nombre: "FCIA DE LA VILLA",
        direccion: "AV ALTE BROWN 642, RADA TILLY, CHUBUT, Argentina",
        tel: "(0297) 445 - 2425",
        lat: -45.9234376,
        lng: -67.5604745
      },
      {
        nombre: "FCIA FRANCA",
        direccion: "AV ALTE BROWN 738, RADA TILLY, CHUBUT, Argentina",
        tel: "(0297) 15 - 426 -9303",
        lat: -45.9232609,
        lng: -67.5619017
      },
      {
        nombre: "FCIA. OESTE",
        direccion: "21695, PUERTO MADRYN, CHUBUT, Argentina",
        tel: "0280 419-0033",
        lat: -42.7636217,
        lng: -65.0348311
      },
      {
        nombre: "FCIA. PROSALUD",
        direccion: "Bartolomé Mitre 705, PUERTO MADRYN, CHUBUT, Argentina",
        tel: "0280 447-3895",
        lat: -42.7717459,
        lng: -65.0330901
      },
      {
        nombre: "FCIAS. PATAGÓNICAS",
        direccion: "JULIO A. ROCA Y BELGRANO, PUERTO MADRYN, CHUBUT, Argentina",
        tel: "(0280)455-4402",
        lat: -42.7684483,
        lng: -65.0383115
      },
      {
        nombre: "FCIA. DEL PUEBLO",
        direccion: "SAN MARTIN 39, PLOTTIER, NEUQUEN, Argentina",
        tel: "0299-493-5143",
        lat: -38.9538646,
        lng: -68.2258179
      },
      {
        nombre: "FCIA. DEL BOSQUE",
        direccion: "ISLAS MALVINAS 525, NEUQUEN, NEUQUEN, Argentina",
        tel: "0299-443-898",
        lat: -38.9476928,
        lng: -68.0515935
      },
      {
        nombre: "FCIA. FILIBERTI",
        direccion: "GATICA 2316, NEUQUEN, NEUQUEN, Argentina",
        tel: "0299-448-4269",
        lat: -38.9795912,
        lng: -68.0732461
      },
      {
        nombre: "FCIA. JUNIN",
        direccion: "ALDERETE 1557, NEUQUEN, NEUQUEN, Argentina",
        tel: "0299-453-81371",
        lat: -38.9511133,
        lng: -68.0381194
      },
      {
        nombre: "FCIA. LANIN",
        direccion: "ALDERETE 1557, NEUQUEN, NEUQUEN, Argentina",
        tel: "0299-453-81371",
        lat: -38.9511133,
        lng: -68.0381194
      },
      {
        nombre: "FCIA DEL PUEBLO",
        direccion: "HIPER LA ANONIMA AV. ARGENTINA 1000, NEUQUEN, NEUQUEN, Argentina",
        tel: "0299-442-2375",
        lat: -38.9447673,
        lng: -68.0597211
      },
      {
        nombre: "FCIA DEL PUEBLO",
        direccion: "DR. RAMON Y RUTA 7, NEUQUEN, NEUQUEN, Argentina",
        tel: "0299-434-0301",
        lat: -38.9516784,
        lng: -68.0591888
      },
      {
        nombre: "FCIA DEL PUEBLO",
        direccion: "DR. RAMON 4100, NEUQUEN, NEUQUEN, Argentina",
        tel: "0299-445-0917",
        lat: -38.9420907,
        lng: -68.1154742
      },
      {
        nombre: "FCIA DEL PUEBLO CENTRAL",
        direccion: "SUC. SAN MARTIN 99, NEUQUEN, NEUQUEN, Argentina",
        tel: "0299-445-7200",
        lat: -38.9548729,
        lng: -68.0606294
      },
      {
        nombre: "FCIA DEL PUEBLO",
        direccion: "PORTAL LA PATAGONIA JUMBO, NEUQUEN, NEUQUEN, Argentina",
        tel: "0299-446-3300",
        lat: -38.9607403,
        lng: -68.0943254
      },
      {
        nombre: "FCIA DEL PUEBLO",
        direccion: "ITALIA 40, NEUQUEN, NEUQUEN, Argentina",
        tel: "0299-448-7224",
        lat: -38.941688,
        lng: -67.9930003
      },
      {
        nombre: "FCIA. PHARMACY DEL PORTAL",
        direccion: "RUTA 22 Y VITERBORI, GENERAL ROCA, RIO NEGRO, Argentina",
        tel: "0298-440-3745",
        lat: -39.0451024,
        lng: -67.5792373
      },
      {
        nombre: "FCIA. PHARMACY ROCA",
        direccion: "DALMAS PATRICIAS, GENERAL ROCA, RIO NEGRO, Argentina",
        tel: "0298-442-6428",
        lat: -39.0190506,
        lng: -67.59793
      },
      {
        nombre: "FCIA MICHELLI",
        direccion: "VIEDMA Y CONESA S/N, LAS GRUTAS, RIO NEGRO, Argentina",
        tel: "0293-449-7272",
        lat: -40.8107881,
        lng: -65.0879162
      },
      {
        nombre: "FCIAS. PATAGÓNICAS",
        direccion: "-495488, ESQUEL, CHUBUT, Argentina",
        tel: "(0280) 426-8073",
        lat: -42.9095281,
        lng: -71.3143117
      },
      {
        nombre: "FCIAS. PATAGÓNICAS",
        direccion: "-495488, ESQUEL, CHUBUT, Argentina",
        tel: "(0280) 426-8073",
        lat: -42.9095281,
        lng: -71.3143117
      },
      {
        nombre: "FCIA DI PASCUALE",
        direccion: "SAN MARTIN 628, GENERAL CONESA, RIO NEGRO, Argentina",
        tel: "0293-149-8459",
        lat: -40.1021876,
        lng: -64.4567367
      },
      {
        nombre: "FCIAS. PATAGÓNICAS",
        direccion: "SAN MARTIN 880, COMODORO RIVADAVIA, CHUBUT, Argentina",
        tel: "(0297) 444-3438",
        lat: -45.8610623,
        lng: -67.4873691
      },
      {
        nombre: "FCIA. SAN PABLO",
        direccion: "AV. DEL TRABAJO 395, CUTRAL CO, NEUQUEN, Argentina",
        tel: "0299-486-2227",
        lat: -38.933724,
        lng: -69.229549
      },
      {
        nombre: "FCIA SOCIAL",
        direccion: "AV. ALVEAR 978, ESQUEL, CHUBUT, Argentina",
        tel: "02945) 451600",
        lat: -42.9127004,
        lng: -71.3232223
      },
      {
        nombre: "FCIA SOCIAL",
        direccion: "AV. RIVADAVIA 1255, COMODORO RIVADAVIA, CHUBUT, Argentina",
        tel: "(0297) 444-1125",
        lat: -45.8620482,
        lng: -67.4931218
      },
      {
        nombre: "FCIA SOCIAL",
        direccion: "RIVADAVIA 1598, COMODORO RIVADAVIA, CHUBUT, Argentina",
        tel: "(0297) 444 - 2600",
        lat: -45.86255,
        lng: -67.4986153
      },
      {
        nombre: "FCIA SOCIAL",
        direccion: "AV. ALEJANDRO MAIZ 625, COMODORO RIVADAVIA, CHUBUT, Argentina",
        tel: "(0297) 453 - 5044",
        lat: -45.7952289,
        lng: -67.4227222
      },
      {
        nombre: "FCIA SOCIAL",
        direccion: "AV KENNEDY 2772, COMODORO RIVADAVIA, CHUBUT, Argentina",
        tel: "(0297) 448 - 5434",
        lat: -45.8755562,
        lng: -67.5314111
      },
      {
        nombre: "FCIA SOCIAL",
        direccion: "MITRE 867, COMODORO RIVADAVIA, CHUBUT, Argentina",
        tel: "(0297) 444 - 2604",
        lat: -45.861393,
        lng: -67.4827636
      },
      {
        nombre: "FCIA SOCIAL",
        direccion: "SAN MARTIN 801, COMODORO RIVADAVIA, CHUBUT, Argentina",
        tel: "(0297) 444 - 2866",
        lat: -45.8609338,
        lng: -67.486304
      },
      {
        nombre: "FCIA SOCIAL",
        direccion: "AV TEHUELCHES 125, COMODORO RIVADAVIA, CHUBUT, Argentina",
        tel: "(0297) 444 - 8450",
        lat: -45.8353558,
        lng: -67.4783376
      },
      {
        nombre: "FCIA. FARMASALUD",
        direccion: "SARMIENTO 231, CHOS MALAL, NEUQUEN, Argentina",
        tel: "0294-845-0378",
        lat: -37.3756693,
        lng: -70.2743508
      },
      {
        nombre: "FCIA. DEL PUEBLO",
        direccion: "ESPAÑA 252, CIPOLLETTI, RIO NEGRO, Argentina",
        tel: "0299-477-6191",
        lat: -38.9385786,
        lng: -67.9962965
      },
      {
        nombre: "FCIA. DEL SOL",
        direccion: "MENGUELE 224, CIPOLLETTI, RIO NEGRO, Argentina",
        tel: "0299-477-8448",
        lat: -38.938771,
        lng: -67.9954929
      },
      {
        nombre: "FCIA. SUYAI",
        direccion: "VILLEGAS 503, CIPOLLETTI, RIO NEGRO, Argentina",
        tel: "0299-4776659",
        lat: -38.9357596,
        lng: -67.9966113
      },
      {
        nombre: "FCIA DEL PUEBLO",
        direccion: "AV. EVA PERON 187, CALETA OLIVIA, SANTA CRUZ, Argentina",
        tel: "0297-485-1403",
        lat: -46.4437505,
        lng: -67.5145869
      },
      {
        nombre: "FCIA. AGOSTINI",
        direccion: "BUENOS AIRES 486, CENTENARIO, NEUQUEN, Argentina",
        tel: "0299-489-8092",
        lat: -38.8280868,
        lng: -68.1353772
      },
      {
        nombre: "FCIA. SAN PATRICIO",
        direccion: "CHAÑAR 100, CHAÑAR, NEUQUEN, Argentina",
        tel: "0299-485-5138",
        lat: -38.9610083,
        lng: -68.0375267
      },
      {
        nombre: "FCIA DEL BARRIO",
        direccion: "AV. TIERRA DEL FUEGO 707, CALETA OLIVIA, SANTA CRUZ, Argentina",
        tel: "0297-485-3622",
        lat: -46.4456109,
        lng: -67.5330206
      },
      {
        nombre: "FCIA DEL CERRO",
        direccion: "AV. INDEPENDENCIA 82, CALETA OLIVIA, SANTA CRUZ, Argentina",
        tel: "0297-485-7886",
        lat: -46.4430828,
        lng: -67.5185874
      },
      {
        nombre: "FARMASUR",
        direccion: "HIPER CARREFOUR - H. BEGHIN 762, CALETA OLIVIA, SANTA CRUZ, Argentina",
        tel: "0297-485-5011",
        lat: -46.444561,
        lng: -67.5344161
      },
      {
        nombre: "FARMASUR",
        direccion: "AV. ALVEAR 789, CALETA OLIVIA, SANTA CRUZ, Argentina",
        tel: "02945-451600",
        lat: -46.4425647,
        lng: -67.5171533
      },
      {
        nombre: "FCIA DE LA CIUDAD",
        direccion: "LEANDRO ALEM 287, CALETA OLIVIA, SANTA CRUZ, Argentina",
        tel: "0297-485-358",
        lat: -46.4326545,
        lng: -67.521881
      },
      {
        nombre: "FCIA DE LA GENTE",
        direccion: "MAXIMO BEREZOSKI 297, CALETA OLIVIA, SANTA CRUZ, Argentina",
        tel: "0297-485-0857",
        lat: -46.4513148,
        lng: -67.5222628
      },
      {
        nombre: "FARMASUR",
        direccion: "EVA PERON ESQ. SALVADOR GAVIOTA, CALETA OLIVIA, SANTA CRUZ, Argentina",
        tel: "0297-485-5011",
        lat: -46.4504284,
        lng: -67.5043722
      },
      {
        nombre: "FARMASUR",
        direccion: "INDEPENDENCIA 1371, CALETA OLIVIA, SANTA CRUZ, Argentina",
        tel: "0297-485-5011",
        lat: -46.4542876,
        lng: -67.5305796
      },
      {
        nombre: "FARMASUR",
        direccion: "AV. SAN MARTIN 50, CALETA OLIVIA, SANTA CRUZ, Argentina",
        tel: "0297-485-5011",
        lat: -46.4413058,
        lng: -67.5177912
      },
      {
        nombre: "MODERNA",
        direccion: "MARCOS JUÁREZ 1900, VILLA NUEVA, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.422064,
        lng: -63.2552123
      },
      {
        nombre: "DANIOTTI",
        direccion: "PTE. PERÓN 265, VILLA TORTORAL, CÓRDOBA, Argentina",
        tel: "3524-47-0998",
        lat: -30.7039634,
        lng: -64.0641359
      },
      {
        nombre: "FCIA. DEL PUEBLO",
        direccion: "AV. ROCA 498, ALLEN, RIO NEGRO, Argentina",
        tel: "0298-445-3935",
        lat: -38.9819096,
        lng: -67.8306414
      },
      {
        nombre: "MODERNA",
        direccion: "ELPIDIO GONZALEZ 274, VILLA MARIA, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.416255,
        lng: -63.2619978
      },
      {
        nombre: "ECO FARMA",
        direccion: "MARCOS JUÁREZ 584, VILLA NUEVA, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.4346809,
        lng: -63.2475696
      },
      {
        nombre: "MODERNA",
        direccion: "BARTOLOME MITRE 54, VILLA MARIA, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.413572,
        lng: -63.2458661
      },
      {
        nombre: "MODERNA",
        direccion: "SAN MARTIN 13, VILLA MARIA, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.4113949,
        lng: -63.2434844
      },
      {
        nombre: "MODERNA",
        direccion: "9 DE JULIO 0155, VILLA MARIA, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.4104614,
        lng: -63.243645
      },
      {
        nombre: "MODERNA",
        direccion: "ENTRE RIOS 737, VILLA MARIA, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.4152337,
        lng: -63.2453425
      },
      {
        nombre: "MODERNA",
        direccion: "BV. VELEZ SARSFIELD ESQ. BV. ITALIA, VILLA MARIA, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.408969,
        lng: -63.2567431
      },
      {
        nombre: "MODERNA",
        direccion: "BUENOS AIRES 1301, VILLA MARIA, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.4096851,
        lng: -63.2412725
      },
      {
        nombre: "FARMAVIDA",
        direccion: "CORRIENTES 720, VILLA MARIA, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.4145775,
        lng: -63.2461822
      },
      {
        nombre: "FARMAVIDA",
        direccion: "CORRIENTES 720, VILLA MARIA, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.4145775,
        lng: -63.2461822
      },
      {
        nombre: "FARMAVIDA",
        direccion: "ALDO SERRANO 2078, VILLA MARIA, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.3934166,
        lng: -63.2607833
      },
      {
        nombre: "FARMAVIDA",
        direccion: "SAN JUAN 1270, VILLA MARIA, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.4072719,
        lng: -63.2441972
      },
      {
        nombre: "FARMAVIDA",
        direccion: "SARMIENTO 1966, VILLA MARIA, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.4116891,
        lng: -63.2272326
      },
      {
        nombre: "FARMAVIDA",
        direccion: "SAN MARTIN 400, VILLA MARIA, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.415012,
        lng: -63.240353
      },
      {
        nombre: "FARMAVIDA",
        direccion: "LA RIOJA 1199, VILLA MARIA, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.4068017,
        lng: -63.2458473
      },
      {
        nombre: "FARMAVIDA",
        direccion: "ITALIA ESQ. NACIONES UNIDAS, VILLA MARIA, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.4104614,
        lng: -63.243645
      },
      {
        nombre: "FARMAVIDA",
        direccion: "SAN JUAN 1510, VILLA MARIA, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.4053457,
        lng: -63.2412119
      },
      {
        nombre: "ECO FARMA",
        direccion: "ENTRE RÍOS ESQ. BELGRANO, VILLA MARIA, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.4162825,
        lng: -63.2467752
      },
      {
        nombre: "FARMAVIDA",
        direccion: "MENDOZA 1190, VILLA MARIA, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.4136073,
        lng: -63.2399962
      },
      {
        nombre: "FARMAVIDA",
        direccion: "CHILE 158, VILLA MARIA, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.4076433,
        lng: -63.2416881
      },
      {
        nombre: "ANTONIOLLI XVI",
        direccion: "AV. CARLOS GAUSS 5905, VILLA BELGRANO, CÓRDOBA, Argentina",
        tel: "0351-328-4848",
        lat: -31.3537123,
        lng: -64.2497396
      },
      {
        nombre: "ALTAMIRANO",
        direccion: "25 DE MAYO ESQ. SAN JUAN, VILLA DEL ROSARIO, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.557435,
        lng: -63.5360073
      },
      {
        nombre: "MI FARMACIA",
        direccion: "RIO DE JANEIRO 1043, VILLA ALLENDE, CÓRDOBA, Argentina",
        tel: "3543-436301",
        lat: -31.2980652,
        lng: -64.2882302
      },
      {
        nombre: "RED",
        direccion: "AV. GOYCOCHEA 1168, VILLA ALLENDE, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.2999311,
        lng: -64.2885456
      },
      {
        nombre: "VIG FARMA",
        direccion: "AV. GOYCOCHEA 557, VILLA ALLENDE, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.296277,
        lng: -64.2932906
      },
      {
        nombre: "NG",
        direccion: "AV. RAMON CARCANO 610, CARLOS PAZ, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4320407,
        lng: -64.4978869
      },
      {
        nombre: "SANCHEZ ANTONIOLLI",
        direccion: "AVDA. CARCANO 427, CARLOS PAZ, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4293499,
        lng: -64.496956
      },
      {
        nombre: "ASIS",
        direccion: "ELPIDIO GONZALEZ 61, VILLA ALLENDE, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.2948705,
        lng: -64.2994004
      },
      {
        nombre: "HOSPITAL ITALIANO",
        direccion: "SARMIENTO 1037 DINOMALL, SALSIPUEDES, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.1265447,
        lng: -64.295472
      },
      {
        nombre: "BOSCHETTI",
        direccion: "L. DE LA TORRE 96, CARLOS PAZ, CÓRDOBA, Argentina",
        tel: "3541-433-424",
        lat: -31.3128053,
        lng: -64.2951688
      },
      {
        nombre: "MONDINO",
        direccion: "AV. SAN MARTIN 59, CARLOS PAZ, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4204074,
        lng: -64.4982571
      },
      {
        nombre: "PONETE",
        direccion: "AV. SAN MARTIN 802, RIO TERCERO, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.1796849,
        lng: -64.1162864
      },
      {
        nombre: "PONETE",
        direccion: "GARIBALDI 329, RIO TERCERO, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.1768654,
        lng: -64.1075537
      },
      {
        nombre: "PONETE",
        direccion: "LIBERTAD ESQ. TREJO, RIO TERCERO, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.1766541,
        lng: -64.1130995
      },
      {
        nombre: "PONETE",
        direccion: "IRIGOYEN ESQ. CONSTITUCION, RIO TERCERO, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.1766541,
        lng: -64.1130995
      },
      {
        nombre: "PONETE",
        direccion: "INT. MAGNASCO ESQ. R. S. PEÑA, RIO TERCERO, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.1744447,
        lng: -64.107316
      },
      {
        nombre: "PONETE",
        direccion: "GRAL SAVIO ESQ. SAN MIGUEL, RIO TERCERO, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.1701568,
        lng: -64.1234618
      },
      {
        nombre: "PASTERIS DE SCLAUSERO",
        direccion: "INDEPENDENCIA 138, RIO TERCERO, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.177348,
        lng: -64.1049622
      },
      {
        nombre: "PASTERIS DE SCLAUSERO",
        direccion: "-630627, RIO TERCERO, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.1766541,
        lng: -64.1130995
      },
      {
        nombre: "PASTERIS DE SCLAUSERO",
        direccion: "LIBERTAD 50, RIO TERCERO, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.1731732,
        lng: -64.1105108
      },
      {
        nombre: "PONETE",
        direccion: "ACUÑA ESQ. FRAY JUSTO S.M. DE ORO, RIO TERCERO, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.1766541,
        lng: -64.1130995
      },
      {
        nombre: "DEL SUD",
        direccion: "ALVEAR 1227, RIO CUARTO, CÓRDOBA, Argentina",
        tel: "0358-4645697",
        lat: -33.1285169,
        lng: -64.3519371
      },
      {
        nombre: "PARIS",
        direccion: "URUGUAY 156, RIO TERCERO, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.1751557,
        lng: -64.1086164
      },
      {
        nombre: "PARIS",
        direccion: "VELEZ SARSFIELD 375, RIO TERCERO, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.1720275,
        lng: -64.114743
      },
      {
        nombre: "DEL SUD",
        direccion: "ALVEAR 872, RIO CUARTO, CÓRDOBA, Argentina",
        tel: "0358-4780132",
        lat: -33.1245166,
        lng: -64.3506701
      },
      {
        nombre: "DEL SUD",
        direccion: "SAN MARTIN 2108, RIO CUARTO, CÓRDOBA, Argentina",
        tel: "0358-4652777",
        lat: -33.11674,
        lng: -64.3754384
      },
      {
        nombre: "DEL SUD",
        direccion: "H. IRIGOYEN 1039, RIO CUARTO, CÓRDOBA, Argentina",
        tel: "0358-4644637 / 0800-555-0393",
        lat: -33.1276942,
        lng: -64.3474045
      },
      {
        nombre: "DEL SUD",
        direccion: "AV. ITALIA 1302, RIO CUARTO, CÓRDOBA, Argentina",
        tel: "0358-4651269",
        lat: -33.1296139,
        lng: -64.3512398
      },
      {
        nombre: "DEL SUD",
        direccion: "AV. SABATTINI 3104, RIO CUARTO, CÓRDOBA, Argentina",
        tel: "0358-4646258",
        lat: -33.1504369,
        lng: -64.3582345
      },
      {
        nombre: "DEL SUD",
        direccion: "J. J. CASTELLI 1095/97, RIO CUARTO, CÓRDOBA, Argentina",
        tel: "0358-155622348",
        lat: -33.1389803,
        lng: -64.3748378
      },
      {
        nombre: "DEL SUD",
        direccion: "MISIONES 150, RIO CUARTO, CÓRDOBA, Argentina",
        tel: "0353-4900115",
        lat: -33.1146607,
        lng: -64.3377995
      },
      {
        nombre: "DEL SUD",
        direccion: "AV. SAN MARTIN 1030, RIO CUARTO, CÓRDOBA, Argentina",
        tel: "0358-4782211",
        lat: -33.120655,
        lng: -64.358559
      },
      {
        nombre: "DEL PUEBLO",
        direccion: "TEJERINA 241, RIO CUARTO, CÓRDOBA, Argentina",
        tel: "",
        lat: -33.1115187,
        lng: -64.3711308
      },
      {
        nombre: "DEL PUEBLO",
        direccion: "CONSTITUCION 901, RIO CUARTO, CÓRDOBA, Argentina",
        tel: "",
        lat: -33.1251091,
        lng: -64.3499191
      },
      {
        nombre: "GARCIA COCCO",
        direccion: "SAN JUAN 288, RIO CUARTO, CÓRDOBA, Argentina",
        tel: "358-4990748",
        lat: -33.1191858,
        lng: -64.3499779
      },
      {
        nombre: "GARCIA COCCO",
        direccion: "BV ROCA 941, RIO CUARTO, CÓRDOBA, Argentina",
        tel: "358-4626894",
        lat: -33.1296399,
        lng: -64.3392434
      },
      {
        nombre: "GARCIA COCCO",
        direccion: "RIVADAVIA 297, RIO CUARTO, CÓRDOBA, Argentina",
        tel: "358-4671750",
        lat: -33.1259366,
        lng: -64.3459707
      },
      {
        nombre: "GARCIA COCCO",
        direccion: "H. IRIGOYEN 1001, RIO CUARTO, CÓRDOBA, Argentina",
        tel: "358-4700280",
        lat: -33.1273232,
        lng: -64.3473136
      },
      {
        nombre: "GRAL PAZ",
        direccion: "AV. SAN MARTIN 3145, RIO CEBALLOS, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.1816738,
        lng: -64.314694
      },
      {
        nombre: "GRAL PAZ",
        direccion: "AV. SAN MARTIN 3145, RIO CEBALLOS, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.1816738,
        lng: -64.314694
      },
      {
        nombre: "GARCIA COCCO",
        direccion: "ITALIA 1198, RIO CUARTO, CÓRDOBA, Argentina",
        tel: "358-4623562",
        lat: -33.1283442,
        lng: -64.3511588
      },
      {
        nombre: "SANCHEZ ANTONIOLLI",
        direccion: "RUTA C45 KM 1 CETRO. COMERCIAL SHELL, MALAGUEÑO, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.6510685,
        lng: -64.1839995
      },
      {
        nombre: "SANAT ALLENDE",
        direccion: "OBISPO ORO 40, NUEVA CORDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4246213,
        lng: -64.1869364
      },
      {
        nombre: "ANTONILLI III",
        direccion: "P. CABRERA 4660, M. DE SOBREMONTE, CÓRDOBA, Argentina",
        tel: "0800-888-4552",
        lat: -31.361808,
        lng: -64.2040076
      },
      {
        nombre: "VIG FARMA",
        direccion: "RUTA 38 ESQ. LAS SIERRAS, LA FALDA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.1097212,
        lng: -64.4844973
      },
      {
        nombre: "VIG FARMA",
        direccion: "-541098, LA FALDA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.0944026,
        lng: -64.4828401
      },
      {
        nombre: "VIG FARMA",
        direccion: "AV. KENNEDY 166, LA FALDA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.0913941,
        lng: -64.4860429
      },
      {
        nombre: "VIG FARMA",
        direccion: "EDEN 604, LA FALDA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.0929708,
        lng: -64.4801842
      },
      {
        nombre: "VIG FARMA",
        direccion: "SARMIENTO 248, LA FALDA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.0942379,
        lng: -64.4841916
      },
      {
        nombre: "VIG FARMA",
        direccion: "SARMIENTO 248, LA FALDA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.0942379,
        lng: -64.4841916
      },
      {
        nombre: "VIG FARMA",
        direccion: "ESPAÑA 103, LA FALDA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.3520332,
        lng: -64.2347046
      },
      {
        nombre: "VIG FARMA",
        direccion: "25 DE mayo 0222, LA CUMBRE, CÓRDOBA, Argentina",
        tel: "",
        lat: -30.9827625,
        lng: -64.4913931
      },
      {
        nombre: "GRAL PAZ",
        direccion: "SARMIENTO 436, LA FALDA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.0939988,
        lng: -64.4818847
      },
      {
        nombre: "MODERNA",
        direccion: "HIPOLITO YRIGOYEN 346, LA CARLOTTA, CÓRDOBA, Argentina",
        tel: "",
        lat: -33.4141523,
        lng: -63.2956399
      },
      {
        nombre: "VIG FARMA",
        direccion: "BELGRANO 232, LA CUMBRE, CÓRDOBA, Argentina",
        tel: "",
        lat: -30.9825895,
        lng: -64.4936672
      },
      {
        nombre: "DANIOTTI",
        direccion: "TUCUMAN 532, JESÚS MARÍA, CÓRDOBA, Argentina",
        tel: "3525-40-0606",
        lat: -30.9792142,
        lng: -64.0967615
      },
      {
        nombre: "DANIOTTI",
        direccion: "ITALIA 399, JESÚS MARÍA, CÓRDOBA, Argentina",
        tel: "3525-40-0603",
        lat: -30.9815529,
        lng: -64.0957996
      },
      {
        nombre: "GRAL PAZ",
        direccion: "AV. SAN MARTIN 945, HUERTA GRANDE, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.0749448,
        lng: -64.492381
      },
      {
        nombre: "DANIOTTI",
        direccion: "VICENTE AGUERO 336, JESÚS MARÍA, CÓRDOBA, Argentina",
        tel: "3525-40-0200",
        lat: -30.9792315,
        lng: -64.0904126
      },
      {
        nombre: "VIG FARMA",
        direccion: "AV. SAN MARTIN 1125, COSQUIN, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.2442999,
        lng: -64.4658767
      },
      {
        nombre: "VIG FARMA",
        direccion: "RIVADAVIA 490 LOC. A, CRUZ DEL EJE, CÓRDOBA, Argentina",
        tel: "",
        lat: -30.7218548,
        lng: -64.8086431
      },
      {
        nombre: "AMUR",
        direccion: "BV 25 DE MAYO 360, FREYRE, CÓRDOBA, Argentina",
        tel: "0358-446-2786",
        lat: -31.162416,
        lng: -62.1005258
      },
      {
        nombre: "ANTONIOLLI XXI",
        direccion: "BEDOYA 695, COFICO, CÓRDOBA, Argentina",
        tel: "0800-888-4552",
        lat: -31.3983058,
        lng: -64.1866206
      },
      {
        nombre: "GRAL PAZ",
        direccion: "PRESIDENTE PERON 937, COSQUIN, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.2423763,
        lng: -64.466826
      },
      {
        nombre: "VIG FARMA",
        direccion: "PERON 803, COSQUIN, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.2410805,
        lng: -64.466372
      },
      {
        nombre: "SV FARMA",
        direccion: "AV. GRAL PAZ 334, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4114186,
        lng: -64.1849668
      },
      {
        nombre: "SV FARMA",
        direccion: "MARCELO T DE ALVEAR 802, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4238679,
        lng: -64.1936894
      },
      {
        nombre: "SV FARMA",
        direccion: "RECTA MARTINOLLI 6761, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.3483215,
        lng: -64.2582674
      },
      {
        nombre: "FARMA VIDA",
        direccion: "-520717, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4200833,
        lng: -64.1887761
      },
      {
        nombre: "SANCHEZ ANTONIOLLI",
        direccion: "BEDOYA 695, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.3983058,
        lng: -64.1866206
      },
      {
        nombre: "SANCHEZ ANTONIOLLI",
        direccion: "AV. PRESIDENTE ILLIA 417, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4221958,
        lng: -64.1803987
      },
      {
        nombre: "SV FARMA",
        direccion: "AV. COLON 215, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4129789,
        lng: -64.1860173
      },
      {
        nombre: "SANCHEZ ANTONIOLLI",
        direccion: "DEFENSA 1753, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4200833,
        lng: -64.1887761
      },
      {
        nombre: "SANCHEZ ANTONIOLLI",
        direccion: "CONGRESO 5476, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4742488,
        lng: -64.2253538
      },
      {
        nombre: "SANCHEZ ANTONIOLLI",
        direccion: "AV. RENAULT 1916, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4726376,
        lng: -64.2321826
      },
      {
        nombre: "SANCHEZ ANTONIOLLI",
        direccion: "AVDA. VÉLEZ SARSFIELD 4101, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.457854,
        lng: -64.2005787
      },
      {
        nombre: "SANCHEZ ANTONIOLLI",
        direccion: "AV. FUERZA AÉREA 2804, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.431097,
        lng: -64.2259214
      },
      {
        nombre: "SANCHEZ ANTONIOLLI",
        direccion: "NACIONES UNIDAS 927, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4412557,
        lng: -64.2076005
      },
      {
        nombre: "SANCHEZ ANTONIOLLI",
        direccion: "AVDA. VÉLEZ SARSFIELD 3426, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4496836,
        lng: -64.2000139
      },
      {
        nombre: "SANCHEZ ANTONIOLLI",
        direccion: "AV. FUERZA AÉREA 4730, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4325145,
        lng: -64.2482306
      },
      {
        nombre: "SANCHEZ ANTONIOLLI",
        direccion: "AV. FUERZA AÉREA 3735, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4322317,
        lng: -64.2371952
      },
      {
        nombre: "SANCHEZ ANTONIOLLI",
        direccion: "AV. MONSEÑOR P. CABRERA 4660, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.361808,
        lng: -64.2040076
      },
      {
        nombre: "SANCHEZ ANTONIOLLI",
        direccion: "ROSALES 5395, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4306648,
        lng: -64.1170076
      },
      {
        nombre: "SANCHEZ ANTONIOLLI",
        direccion: "LEARTES 2484, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.43899,
        lng: -64.139304
      },
      {
        nombre: "SANCHEZ ANTONIOLLI",
        direccion: "AVDA. GAUSS 5906, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.3537861,
        lng: -64.2497675
      },
      {
        nombre: "SANCHEZ ANTONIOLLI",
        direccion: "AVDA. LEANDRO ALEM 1570, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.3866367,
        lng: -64.1600002
      },
      {
        nombre: "SANCHEZ ANTONIOLLI",
        direccion: "AV. DONATO ALVAREZ 7914, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.3310124,
        lng: -64.2643346
      },
      {
        nombre: "SANAT ALLENDE",
        direccion: "OBISPO ORO 40, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4246213,
        lng: -64.1869364
      },
      {
        nombre: "SANAT ALLENDE",
        direccion: "INDEPENDENCIA 765, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4251827,
        lng: -64.1877595
      },
      {
        nombre: "SANAT ALLENDE",
        direccion: "LAPLACE 5749, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.3580391,
        lng: -64.2427314
      },
      {
        nombre: "RED",
        direccion: "O'HIGGINS 5450 CNO. A SAN CARLOS, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.1754275,
        lng: -65.1021949
      },
      {
        nombre: "ROSSO",
        direccion: "SAN JERONIMO 3105, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4235302,
        lng: -64.144141
      },
      {
        nombre: "SANAT ALLENDE",
        direccion: "AV. H YRIGOYEN 384, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "0351-4269295",
        lat: -31.4247721,
        lng: -64.1869194
      },
      {
        nombre: "RED",
        direccion: "AV. RECTA MARTINOLLI 8853, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.3443513,
        lng: -64.2874157
      },
      {
        nombre: "RED",
        direccion: "AV. COLON 5034, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.3958849,
        lng: -64.2456423
      },
      {
        nombre: "RED",
        direccion: "AV. RECTA MARTINOLI 6187, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.3495368,
        lng: -64.2529152
      },
      {
        nombre: "RED",
        direccion: "EMILIO LAMARCA 4135, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.382252,
        lng: -64.2432014
      },
      {
        nombre: "RED",
        direccion: "RAFAEL NÚÑEZ 3686, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.37646,
        lng: -64.2261
      },
      {
        nombre: "RED",
        direccion: "DUARTE QUIRÓS 1400, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4125384,
        lng: -64.2044727
      },
      {
        nombre: "RED",
        direccion: "RAFAEL NÚÑEZ 3686, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.37646,
        lng: -64.2261
      },
      {
        nombre: "RED",
        direccion: "DUARTE QUIRÓS 1400, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4125384,
        lng: -64.2044727
      },
      {
        nombre: "RED",
        direccion: "AV. PEDRO LAPLACE 5890, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.3580043,
        lng: -64.2409687
      },
      {
        nombre: "MUNDIAL",
        direccion: "FRAY JOSÉ LEÓN TORRES ESQ. MARIANO FRAGUEIRO 2398, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.3876715,
        lng: -64.1836059
      },
      {
        nombre: "MUNDIAL",
        direccion: "JOSÉ BAIGORRI 747, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.3922554,
        lng: -64.1850136
      },
      {
        nombre: "MODERNA",
        direccion: "BV. CHACABUCO 502, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.423286,
        lng: -64.182758
      },
      {
        nombre: "MODERNA",
        direccion: "JUAN OCA BALDA 772, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.3742669,
        lng: -64.1634999
      },
      {
        nombre: "MORA",
        direccion: "RECTA MARTINOLI 7850 HIPER-MERCARDO CARREFOUR, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.3468519,
        lng: -64.2694437
      },
      {
        nombre: "MUNDIAL",
        direccion: "AV. RAFAEL NÚÑEZ 4406, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.3611923,
        lng: -64.2380837
      },
      {
        nombre: "LÍDER",
        direccion: "MATEO LUQUE 1296, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4383212,
        lng: -64.1764644
      },
      {
        nombre: "MODERNA",
        direccion: "AV. VELEZ SARSFIELD 144, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4168956,
        lng: -64.187697
      },
      {
        nombre: "LÍDER",
        direccion: "AV. RECTA MARTINOLI 7415, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.3478026,
        lng: -64.2638347
      },
      {
        nombre: "LÍDER",
        direccion: "EGUIA ZANON 9107 PUNTO W-VILLA WARCALDE, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.34132,
        lng: -64.2935727
      },
      {
        nombre: "LÍDER",
        direccion: "SHOPPING PATIO OLMOS. ISLA ISDIN, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4196385,
        lng: -64.1880995
      },
      {
        nombre: "LÍDER",
        direccion: "AV. COLÓN 820, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4200833,
        lng: -64.1887761
      },
      {
        nombre: "LÍDER",
        direccion: "AV. PABLO RICHIERI 3316, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4511811,
        lng: -64.1763163
      },
      {
        nombre: "LÍDER",
        direccion: "H. PRIMO 208, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4091299,
        lng: -64.1845149
      },
      {
        nombre: "LÍDER",
        direccion: "ONCATIVO 1366, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "0810-888-1414",
        lat: -31.4095302,
        lng: -64.1666552
      },
      {
        nombre: "LÍDER",
        direccion: "LAPRIDA 41, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.2955092,
        lng: -64.2978725
      },
      {
        nombre: "LÍDER",
        direccion: "BELGRANO 66, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.415525,
        lng: -64.1886423
      },
      {
        nombre: "LÍDER",
        direccion: "JUJUY 520, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4080741,
        lng: -64.1882319
      },
      {
        nombre: "LÍDER",
        direccion: "O'HIGGINS 5591, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4776611,
        lng: -64.1681803
      },
      {
        nombre: "LÍDER",
        direccion: "O'HIGGINS 5845, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4804055,
        lng: -64.1683765
      },
      {
        nombre: "LÍDER",
        direccion: "SANTA ROSA 167, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4117993,
        lng: -64.185026
      },
      {
        nombre: "LÍDER",
        direccion: "SANTA ROSA 794, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4093857,
        lng: -64.1933651
      },
      {
        nombre: "LÍDER",
        direccion: "SANTA ROSA 1565, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4062444,
        lng: -64.2037589
      },
      {
        nombre: "JULIETA",
        direccion: "RECTA MARTINOLI 8960, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.3420128,
        lng: -64.289583
      },
      {
        nombre: "LÍDER",
        direccion: "AV. GRAL PAZ 285, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.411999,
        lng: -64.1854799
      },
      {
        nombre: "LÍDER",
        direccion: "AV. R. NÚÑEZ 4220, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4200833,
        lng: -64.1887761
      },
      {
        nombre: "RED GRAL PAZ",
        direccion: "RAFAEL NÚÑEZ 3686, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "351-4822-5358",
        lat: -31.37646,
        lng: -64.2261
      },
      {
        nombre: "RED GRAL PAZ",
        direccion: "RAFAEL NÚÑEZ 3686, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "351-4822-5358",
        lat: -31.37646,
        lng: -64.2261
      },
      {
        nombre: "INST. MOD. DE CARDIOLOGÍA",
        direccion: "SAGRADA FAMILIA 359, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.3957675,
        lng: -64.2357313
      },
      {
        nombre: "RED GRAL PAZ",
        direccion: "DUARTE QUIRÓS 1400, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "3514828101",
        lat: -31.4125384,
        lng: -64.2044727
      },
      {
        nombre: "RED GRAL PAZ",
        direccion: "AV. PEDRO LAPLACE 5890, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "0810-444-4729",
        lat: -31.3580043,
        lng: -64.2409687
      },
      {
        nombre: "RED GRAL PAZ",
        direccion: "AV. RECTA MARTINOLI 6137, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "0354-448-880",
        lat: -31.349732,
        lng: -64.2524599
      },
      {
        nombre: "RED GRAL PAZ",
        direccion: "SANTA FE 124, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "3624451962",
        lat: -31.4094217,
        lng: -64.2009523
      },
      {
        nombre: "RED GRAL PAZ",
        direccion: "AV. RAFAEL NUÑEZ 6474, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.3426797,
        lng: -64.2524876
      },
      {
        nombre: "RED GRAL PAZ",
        direccion: "AV. ARMADA ARGENTINA 510, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4552885,
        lng: -64.2088599
      },
      {
        nombre: "RED GRAL PAZ",
        direccion: "ALFONSINA STORNI 37, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.3536633,
        lng: -64.1754214
      },
      {
        nombre: "RED GRAL PAZ",
        direccion: "VILLAVICENCIO 710, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4548289,
        lng: -64.2086095
      },
      {
        nombre: "RED GRAL PAZ",
        direccion: "AV. CIRCUNVALACIÓN COLECTORA NORTE SALIDA 1B, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.356556,
        lng: -64.1837192
      },
      {
        nombre: "RED GRAL PAZ",
        direccion: "HUMBERTO PRIMO Y TUCUMÁN, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4090083,
        lng: -64.1856671
      },
      {
        nombre: "RED GRAL PAZ",
        direccion: "ROMA 557, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4097358,
        lng: -64.1646656
      },
      {
        nombre: "RED GRAL PAZ",
        direccion: "CHACABUCO 787, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.426625,
        lng: -64.183734
      },
      {
        nombre: "RED GRAL PAZ",
        direccion: "COLÓN 745, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4200833,
        lng: -64.1887761
      },
      {
        nombre: "DI FARMA I",
        direccion: "AV. 24 DE SEPTIEMBRE 1372, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4138102,
        lng: -64.165084
      },
      {
        nombre: "DI FARMA I",
        direccion: "RIVERA INDARTE 1398, ESQ. J. DEL CAMPILLO, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4018769,
        lng: -64.179041
      },
      {
        nombre: "RED GRAL PAZ",
        direccion: "-400768, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4620568,
        lng: -64.1630853
      },
      {
        nombre: "DI FARMA I",
        direccion: "ALTOLAGUIRRE 2244, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4799706,
        lng: -64.1423444
      },
      {
        nombre: "DI FARMA I",
        direccion: "ALTOLAGUIRRE 2619, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4799706,
        lng: -64.1423444
      },
      {
        nombre: "DI FARMA I",
        direccion: "ALTOLAGUIRRE 2619, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4799706,
        lng: -64.1423444
      },
      {
        nombre: "DI FARMA I",
        direccion: "ALTOLAGUIRRE 1701, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4799706,
        lng: -64.1423444
      },
      {
        nombre: "HOSPITAL ITALIANO",
        direccion: "AV. GRAL. DEHEZA 514, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4094381,
        lng: -64.1634471
      },
      {
        nombre: "HOSPITAL ITALIANO",
        direccion: "AV. COLON 502, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4114272,
        lng: -64.1899294
      },
      {
        nombre: "HOSPITAL ITALIANO",
        direccion: "ONCATIVO 1501, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4087981,
        lng: -64.1650003
      },
      {
        nombre: "HOSPITAL ITALIANO",
        direccion: "AV. RAFAEL NUÑEZ 3672, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.3763734,
        lng: -64.2257698
      },
      {
        nombre: "FARMASUT",
        direccion: "AMBROSIO OLMOS 595, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.429449,
        lng: -64.186218
      },
      {
        nombre: "DEQUINO II",
        direccion: "PASEO LIBERTAD POETA LUGONES LOC. 240, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "3516513768",
        lat: -31.3628779,
        lng: -64.2177533
      },
      {
        nombre: "HOSPITAL ITALIANO",
        direccion: "ROMA 550, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4094206,
        lng: -64.164021
      },
      {
        nombre: "FARMASUT",
        direccion: "GRAL. GUEMES 529, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.2472313,
        lng: -64.4744465
      },
      {
        nombre: "FARMASUT",
        direccion: "BV. GUZMAN 65, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4176212,
        lng: -64.1764066
      },
      {
        nombre: "FARMASUT",
        direccion: "DEAN FUNES 444, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4141492,
        lng: -64.1898558
      },
      {
        nombre: "FARMASUT",
        direccion: "DESTRADA 199, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4200833,
        lng: -64.1887761
      },
      {
        nombre: "FARMASUT",
        direccion: "PARANA 497, CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4239308,
        lng: -64.1797826
      },
      {
        nombre: "FARMASUT",
        direccion: "GRAL. DEHEZA 208 ESQ. 24 DE SEP., CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4124728,
        lng: -64.162324
      },
      {
        nombre: "MODERNA",
        direccion: "PIO ANGULO 899 ESQ. SAN JUAN, BELL VILLE, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.6316364,
        lng: -62.698658
      },
      {
        nombre: "VIG FARMA",
        direccion: "BS. AS. 118, CAPILLA DEL MONTE, CÓRDOBA, Argentina",
        tel: "",
        lat: -30.8598108,
        lng: -64.523439
      },
      {
        nombre: "SANCHEZ",
        direccion: "ANTONIOLLI URQUIZA 381, ARROYITO, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4385507,
        lng: -64.1485043
      },
      {
        nombre: "MODERNA",
        direccion: "HIPÓLITO IRIGOYEN 495, BELL VILLE, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.6324988,
        lng: -62.6923374
      },
      {
        nombre: "MODERNA",
        direccion: "SARMIENT 79 ESQ. TUCUMAN, BELL VILLE, CÓRDOBA, Argentina",
        tel: "",
        lat: -32.6293155,
        lng: -62.6961329
      },
      {
        nombre: "PALAVECINO MARIA BELEN",
        direccion: ", CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4200833,
        lng: -64.1887761
      },
      {
        nombre: "ERICA BOLCATO",
        direccion: ", CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4200833,
        lng: -64.1887761
      },
      {
        nombre: "GISELA SANCHEZ",
        direccion: ", CÓRDOBA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.4200833,
        lng: -64.1887761
      },
      {
        nombre: "GRAL PAZ",
        direccion: "LUCAS V. CÓRDOBA 240, ALTA GRACIA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.6549859,
        lng: -64.4342005
      },
      {
        nombre: "OLSINA",
        direccion: "BELGRANO 199, ALTA GRACIA, CÓRDOBA, Argentina",
        tel: "",
        lat: -31.6577854,
        lng: -64.4313162
      },
      {
        nombre: "FCIA PEROGGI",
        direccion: "H IRIGOYEN 548, AZUL, Provincia de Buenos Aires, Argentina",
        tel: "2281423256",
        lat: -36.778632,
        lng: -59.8610441
      },
      {
        nombre: "FCIA SILVETTI",
        direccion: "J.L DE ATUCHA 330, ZÁRATE, Provincia de Buenos Aires, Argentina",
        tel: "",
        lat: -34.0938146,
        lng: -59.029162
      },
      {
        nombre: "FCIA MERLO",
        direccion: "MON VANEVA 534, AZUL, Provincia de Buenos Aires, Argentina",
        tel: "2281427267",
        lat: -36.7749672,
        lng: -59.8540382
      },
      {
        nombre: "FCIA SONCINI",
        direccion: "H YRIGOYEN 650, AZUL, Provincia de Buenos Aires, Argentina",
        tel: "2281424169",
        lat: -36.7799415,
        lng: -59.8592707
      },
      {
        nombre: "FCIA. SOCIAL ESPAÑOLA",
        direccion: "INDEPENDENCIA 899, ZÁRATE, Provincia de Buenos Aires, Argentina",
        tel: "03487-438-514",
        lat: -34.0982854,
        lng: -59.0241581
      },
      {
        nombre: "FCIA. STRICKER",
        direccion: "ALMIRANTE BROWN 23, ZARATE, Provincia de Buenos Aires, Argentina",
        tel: "011 7547-9114",
        lat: -34.0964071,
        lng: -59.0258781
      },
      {
        nombre: "FCIA. BAZZINI",
        direccion: "SANTOS VEGA 6217, V. BOSCH, Provincia de Buenos Aires, Argentina",
        tel: "4844-2427",
        lat: -34.5847213,
        lng: -58.5789896
      },
      {
        nombre: "FCIA. 365 CURIE",
        direccion: "AV. MAIPU 1860, VICENTE LOPEZ, Provincia de Buenos Aires, Argentina",
        tel: "4791-4040",
        lat: -34.5202722,
        lng: -58.4859347
      },
      {
        nombre: "FCIA. JUSTA LIMA",
        direccion: "J.L DE ATUCHA 1245, ZÁRATE, Provincia de Buenos Aires, Argentina",
        tel: "03487-426-886",
        lat: -34.0870888,
        lng: -59.0338594
      },
      {
        nombre: "FCIA. IPHARM PLUS",
        direccion: "CENTRO COMERCIAL NORDELTA, Benavidez, Provincia de Buenos Aires, Argentina",
        tel: "4871 4293",
        lat: -34.4026444,
        lng: -58.6684776
      },
      {
        nombre: "LA MAS FARMA ESCALADA",
        direccion: "AV H YIRIGOYEN 6053, REMEDIOS DE ESCALADA, Provincia de Buenos Aires, Argentina",
        tel: "4853-7030",
        lat: -34.7253955,
        lng: -58.3955491
      },
      {
        nombre: "FCIA. REVELANT",
        direccion: "J. HERNÁNDEZ 3000, V. BALLESTER, Provincia de Buenos Aires, Argentina",
        tel: "4768-5536",
        lat: -34.5530901,
        lng: -58.5555092
      },
      {
        nombre: "FCIA. SAID",
        direccion: "PTE. PERÓN 1874, SAN MIGUEL, Provincia de Buenos Aires, Argentina",
        tel: "4664-2903",
        lat: -34.543055,
        lng: -58.7118577
      },
      {
        nombre: "FCIA TKL",
        direccion: "AV R BALBIN 1181, SAN MIGUEL, Provincia de Buenos Aires, Argentina",
        tel: "4664-9418",
        lat: -34.5421174,
        lng: -58.711734
      },
      {
        nombre: "FCIA. IPHARM",
        direccion: "CENTRO COMERCIAL NORDELTA, Benavidez, Provincia de Buenos Aires, Argentina",
        tel: "4871 5666",
        lat: -34.4026444,
        lng: -58.6684776
      },
      {
        nombre: "FCIA. UOM",
        direccion: "18 December 1848, SAN MARTÍN, Provincia de Buenos Aires, Argentina",
        tel: "4713-7930",
        lat: -34.5806387,
        lng: -58.53765
      },
      {
        nombre: "FCIA.CENTRAL",
        direccion: "SAN LORENZO 2102, SAN MARTÍN, Provincia de Buenos Aires, Argentina",
        tel: "4755-0650",
        lat: -34.577064,
        lng: -58.538698
      },
      {
        nombre: "FCIA. DI BONA",
        direccion: "TRIBULATO Y D´ELIA, SAN MIGUEL, Provincia de Buenos Aires, Argentina",
        tel: "4451-2321",
        lat: -34.5397689,
        lng: -58.7119586
      },
      {
        nombre: "FCIA. SUTIAGA",
        direccion: "56236, SAN MARTÍN, Provincia de Buenos Aires, Argentina",
        tel: "4752-8579",
        lat: -34.5757521,
        lng: -58.5370965
      },
      {
        nombre: "FCIA. TERÁN",
        direccion: "SAN LORENZO 2200, SAN MARTÍN, Provincia de Buenos Aires, Argentina",
        tel: "4755-6853",
        lat: -34.5763205,
        lng: -58.5397631
      },
      {
        nombre: "FCIA. GIOVO",
        direccion: "H. IRIGOYEN 2480, SAN JUSTO, Provincia de Buenos Aires, Argentina",
        tel: "4651-1905",
        lat: -34.6782277,
        lng: -58.5605298
      },
      {
        nombre: "FCIA. NUEVA MILENIO",
        direccion: "ARIETA 3552, SAN JUSTO, Provincia de Buenos Aires, Argentina",
        tel: "4651-2424",
        lat: -34.6819128,
        lng: -58.5558223
      },
      {
        nombre: "FCIA. FABRIS",
        direccion: "AV. CENTENARIO 448, SAN ISIDRO, Provincia de Buenos Aires, Argentina",
        tel: "4743-1797",
        lat: -34.4715718,
        lng: -58.5150007
      },
      {
        nombre: "FARMA 365",
        direccion: "AV SANTA FE 408, SAN ISIDRO, Provincia de Buenos Aires, Argentina",
        tel: "11-3881-2407",
        lat: -34.4771902,
        lng: -58.5095267
      },
      {
        nombre: "FCIA DODERA",
        direccion: "Bartolomé Mitre 71, RAMOS MEJÍA, Provincia de Buenos Aires, Argentina",
        tel: "4658-8556",
        lat: -34.6418242,
        lng: -58.5633324
      },
      {
        nombre: "FCIA. DENICOLA",
        direccion: "AV. LIRIO 671, SAN FCO. SOLANO, Provincia de Buenos Aires, Argentina",
        tel: "4277-0133",
        lat: -34.7861129,
        lng: -58.3153145
      },
      {
        nombre: "FCIA. CANAL",
        direccion: "3 de Febrero 1, SAN FERNANDO, Provincia de Buenos Aires, Argentina",
        tel: "011 4744-7712",
        lat: -34.4350232,
        lng: -58.5660892
      },
      {
        nombre: "FCIA NOVELLI",
        direccion: "AV LA PLATA 1400, QUILMES, Provincia de Buenos Aires, Argentina",
        tel: "4045-2909",
        lat: -34.7334568,
        lng: -58.2793906
      },
      {
        nombre: "FCIA. SOCIAL",
        direccion: "AV. DE MAYO 39, RAMOS MEJÍA, Provincia de Buenos Aires, Argentina",
        tel: "4656-7196",
        lat: -34.6413513,
        lng: -58.5658685
      },
      {
        nombre: "FCIA. PASTEUR",
        direccion: "AV. MITRE ESQ. SALTA, QUILMES, Provincia de Buenos Aires, Argentina",
        tel: "011-5600-2609",
        lat: -34.7429052,
        lng: -58.2314132
      },
      {
        nombre: "FCIA. EZPELETA",
        direccion: "AV. SAN MARTÍN 5535, QUILMES, Provincia de Buenos Aires, Argentina",
        tel: "011-6363-8462",
        lat: -34.7532332,
        lng: -58.2319928
      },
      {
        nombre: "FCIA. VERGARA",
        direccion: "AV. VERGARA 98, QUILMES, Provincia de Buenos Aires, Argentina",
        tel: "011-5945-9965",
        lat: -34.7586239,
        lng: -58.2368223
      },
      {
        nombre: "FICA. VELAZCO",
        direccion: "AV. LA PLATA 1702, QUILMES, Provincia de Buenos Aires, Argentina",
        tel: "011-2295-5848",
        lat: -34.7374953,
        lng: -58.276969
      },
      {
        nombre: "FCIA. SANTORO",
        direccion: "AV. MITRE 1650, QUILMES, Provincia de Buenos Aires, Argentina",
        tel: "011-2295-5848",
        lat: -34.7379663,
        lng: -58.2393521
      },
      {
        nombre: "FCIA GIL",
        direccion: "CHILE ESQ. ASUNCIÓN, QUILMES, Provincia de Buenos Aires, Argentina",
        tel: "011-3877-7231",
        lat: -34.7206336,
        lng: -58.2546051
      },
      {
        nombre: "FCIA. PRIETO CENTRO",
        direccion: "ALSINA 121, QUILMES, Provincia de Buenos Aires, Argentina",
        tel: "4254-5536",
        lat: -34.7221188,
        lng: -58.259306
      },
      {
        nombre: "FCIA. CAPECE",
        direccion: "AV H. YRIGOYEN 887, QUILMES, Provincia de Buenos Aires, Argentina",
        tel: "011-3854-9898",
        lat: -34.7281074,
        lng: -58.2568743
      },
      {
        nombre: "FCIA. SEPP",
        direccion: "PRIMERA JUNTA 203, QUILMES, Provincia de Buenos Aires, Argentina",
        tel: "011-2787-1242",
        lat: -34.7325305,
        lng: -58.2491044
      },
      {
        nombre: "FCIA. VIDELA",
        direccion: "VIDELA 267, QUILMES, Provincia de Buenos Aires, Argentina",
        tel: "4253-0298",
        lat: -34.719847,
        lng: -58.2570064
      },
      {
        nombre: "FCIA. FIALCO",
        direccion: "LAMADRID 338, QUILMES, Provincia de Buenos Aires, Argentina",
        tel: "4251-2046",
        lat: -34.7156699,
        lng: -58.2721383
      },
      {
        nombre: "FCIA. CECILIA SORIA SCS",
        direccion: "AV LAGOMARISNO 1910, PILAR, Provincia de Buenos Aires, Argentina",
        tel: "158937410",
        lat: -34.4513441,
        lng: -58.8804935
      },
      {
        nombre: "FCIA. MAGA SHOP DEL ESTE",
        direccion: "LAVALLE 895, QUILMES, Provincia de Buenos Aires, Argentina",
        tel: "4257-0604",
        lat: -34.7267348,
        lng: -58.2540555
      },
      {
        nombre: "FCIA. MINETTI",
        direccion: "JOSÉ MARÍA ZAPIOLA 496, PASO DEL REY, Provincia de Buenos Aires, Argentina",
        tel: "0237-463-4488",
        lat: -34.6392954,
        lng: -58.7374536
      },
      {
        nombre: "FCIA. BARETTA",
        direccion: "VERGANI 835, PILAR, Provincia de Buenos Aires, Argentina",
        tel: "0230-442-8630",
        lat: -34.460683,
        lng: -58.9103792
      },
      {
        nombre: "FCIA LA QUINTA PLUS",
        direccion: "AV MAIPU 2102, OLIVOS, Provincia de Buenos Aires, Argentina",
        tel: "4795-6380",
        lat: -34.5171743,
        lng: -58.4877568
      },
      {
        nombre: "FCIA SELMA",
        direccion: ", OLIVOS, Provincia de Buenos Aires, Argentina",
        tel: "",
        lat: -34.5105515,
        lng: -58.4963913
      },
      {
        nombre: "FCIA. NOGUES",
        direccion: "MIRAFLORES 193, PABLO NOGUES, Provincia de Buenos Aires, Argentina",
        tel: "02320-48-3981",
        lat: -34.4949293,
        lng: -58.7096597
      },
      {
        nombre: "FCIA. PACHECO",
        direccion: "SGO. DEL ESTERO 22, PACHECO, Provincia de Buenos Aires, Argentina",
        tel: "4740-6533",
        lat: -34.4587005,
        lng: -58.632391
      },
      {
        nombre: "FCIA. COMUNITARIA",
        direccion: "9 de Julio 162, MORÓN, Provincia de Buenos Aires, AR",
        tel: "4628-7091",
        lat: -34.6481844,
        lng: -58.6195696
      },
      {
        nombre: "FCIA. PPAL. TESEI",
        direccion: "AV. VERGARA 2284, MORÓN, Provincia de Buenos Aires, AR",
        tel: "4450-5164",
        lat: -34.6159404,
        lng: -58.6344462
      },
      {
        nombre: "FCIA ROZA",
        direccion: "LEANDRO N ALEM 202, MONTEGRANDE, Provincia de Buenos Aires, Argentina",
        tel: "",
        lat: -34.8163204,
        lng: -58.4681258
      },
      {
        nombre: "FCIA. SCALA",
        direccion: "B. MITRE 2594, MORENO, Provincia de Buenos Aires, Argentina",
        tel: "0237-462-2872",
        lat: -34.6499337,
        lng: -58.7870481
      },
      {
        nombre: "FCIA. MORON DEL NORTE",
        direccion: "SARMIENTO 779, MORÓN, Provincia de Buenos Aires, AR",
        tel: "4628-3063",
        lat: -34.6479766,
        lng: -58.6252231
      },
      {
        nombre: "FCIA. NUEVA MERLO",
        direccion: "AV. LIBERTADOR 501, MERLO, Provincia de Buenos Aires, Argentina",
        tel: "0220-482-0143",
        lat: -34.6687026,
        lng: -58.7256795
      },
      {
        nombre: "FCIA. MONTEGRANDE",
        direccion: "SOFÍA DE SANTAMARINA 427, MONTEGRANDE, Provincia de Buenos Aires, Argentina",
        tel: "4290-2009",
        lat: -34.8220946,
        lng: -58.471351
      },
      {
        nombre: "FCIA SALVATTO",
        direccion: "CARLOS PELLEGRINI 753, LUJÁN, Provincia de Buenos Aires, Argentina",
        tel: "02323 430519",
        lat: -34.5609636,
        lng: -59.1088622
      },
      {
        nombre: "FCIA. SAN MARTÍN",
        direccion: "SAN MARTÍN 238, LUJÁN, Provincia de Buenos Aires, Argentina",
        tel: "02323-420150",
        lat: -34.5645404,
        lng: -59.1188866
      },
      {
        nombre: "FCIA DEL PUEBLO",
        direccion: "GRAL ALVEAR 202, MARTINEZ, Provincia de Buenos Aires, Argentina",
        tel: "11-3588-9292",
        lat: -34.488315,
        lng: -58.498384
      },
      {
        nombre: "FCIA. DENEVI",
        direccion: "Bartolomé Mitre 17, LUJÁN, Provincia de Buenos Aires, Argentina",
        tel: "02323 43-3117",
        lat: -34.565017,
        lng: -59.1222304
      },
      {
        nombre: "FCIA. MITRE",
        direccion: "BME MITRE 599, LUJÁN, Provincia de Buenos Aires, Argentina",
        tel: "424090",
        lat: -34.5672218,
        lng: -59.1144905
      },
      {
        nombre: "FCIA. COMPAGNUCCI",
        direccion: "SAN MARTIN 1698, LUJÁN, Provincia de Buenos Aires, Argentina",
        tel: "02323-421-212",
        lat: -34.5705953,
        lng: -59.0983533
      },
      {
        nombre: "FCIA. DEL PUEBLO",
        direccion: "LORIA 120, LOMAS DE ZAMORA, Provincia de Buenos Aires, Argentina",
        tel: "4244-0769",
        lat: -34.763434,
        lng: -58.3989996
      },
      {
        nombre: "FCIA ELIB’IAN",
        direccion: "PORTAL LOMAS, LOMAS DE ZAMORA, Provincia de Buenos Aires, Argentina",
        tel: "4231-1861",
        lat: -34.7924421,
        lng: -58.4170329
      },
      {
        nombre: "FCIA. DAVIO",
        direccion: "RIVADAVIA 217, LOS CARDALES, Provincia de Buenos Aires, Argentina",
        tel: "02304-492-623",
        lat: -34.6071577,
        lng: -58.370564
      },
      {
        nombre: "FCIA. ARGENTINA",
        direccion: "ALEM 120, LOMAS DE ZAMORA, Provincia de Buenos Aires, Argentina",
        tel: "4244-1699",
        lat: -34.7591846,
        lng: -58.3995367
      },
      {
        nombre: "FCIA. INGLESA",
        direccion: "LAPRIDA 317, LOMAS DE ZAMORA, Provincia de Buenos Aires, Argentina",
        tel: "4243-0131",
        lat: -34.7604797,
        lng: -58.401247
      },
      {
        nombre: "FCIA. UOM LOMAS",
        direccion: "H. IRIGOYEN 9125, LOMAS DE ZAMORA, Provincia de Buenos Aires, Argentina",
        tel: "4244 5129",
        lat: -34.7619282,
        lng: -58.40306
      },
      {
        nombre: "FCIA. TORRES",
        direccion: "LUJAN 2323, LAVALLOL, Provincia de Buenos Aires, Argentina",
        tel: "4298-1104",
        lat: -34.8115079,
        lng: -58.4334989
      },
      {
        nombre: "FCIA ELIB’IAN",
        direccion: "AV ANTARTIDA ARG 1644, LAVALLOL, Provincia de Buenos Aires, Argentina",
        tel: "4298-0904",
        lat: -34.7965057,
        lng: -58.4292259
      },
      {
        nombre: "FCIA. SOCIAL TEXTIL",
        direccion: "O'HIGGINS 2062, LANÚS, Provincia de Buenos Aires, Argentina",
        tel: "4241-0305",
        lat: -34.7097513,
        lng: -58.3887708
      },
      {
        nombre: "FCIA. ZONA FARMA",
        direccion: "DIPUTADO PEDRERA 1026, LANÚS, Provincia de Buenos Aires, Argentina",
        tel: "4218-2649",
        lat: -34.7067455,
        lng: -58.3917289
      },
      {
        nombre: "FCIA. ZONA FARMA",
        direccion: "INT. QUINDIMIL 1396, LANÚS, Provincia de Buenos Aires, Argentina",
        tel: "0800-999-3786",
        lat: -34.6872336,
        lng: -58.4048866
      },
      {
        nombre: "FCIA. ZONA FARMA",
        direccion: "AV. 9 DE JULIO 2501, LANÚS, Provincia de Buenos Aires, Argentina",
        tel: "4241-9285",
        lat: -34.7177019,
        lng: -58.3768566
      },
      {
        nombre: "FARMA LANÚS",
        direccion: "25 DE May 0171, LANÚS, Provincia de Buenos Aires, Argentina",
        tel: "2806-4541",
        lat: -34.708023,
        lng: -58.3938286
      },
      {
        nombre: "FCIA. UOM",
        direccion: "AV. H. IRIGOYEN 4414, LANÚS, Provincia de Buenos Aires, Argentina",
        tel: "4357-9085",
        lat: -34.7056487,
        lng: -58.3914573
      },
      {
        nombre: "FCIA. DEL SUR",
        direccion: "Av. PRES. HIPÓLITO IRIGOYEN 4401, LANUS, Provincia de Buenos Aires, Argentina",
        tel: "4241-2017",
        lat: -34.7054007,
        lng: -58.3920813
      },
      {
        nombre: "FCIA. PIÑEIRO",
        direccion: "-620766, LANUS, Provincia de Buenos Aires, Argentina",
        tel: "4241-5261",
        lat: -34.7067455,
        lng: -58.3917289
      },
      {
        nombre: "FCIA ESCALADA",
        direccion: "AV. H IRIGOYEN 6053, LANÚS, Provincia de Buenos Aires, Argentina",
        tel: "4853-7030",
        lat: -34.7253955,
        lng: -58.3955491
      },
      {
        nombre: "FCIA. SARTI",
        direccion: "CALLE 38 ESQ. 10, LA PLATA, Provincia de Buenos Aires, Argentina",
        tel: "0221-423-3003",
        lat: -34.9131699,
        lng: -57.9703026
      },
      {
        nombre: "FCIA. ROCHA",
        direccion: "CALLE 7 1249, LA PLATA, Provincia de Buenos Aires, Argentina",
        tel: "0221-421-0856",
        lat: -34.919302,
        lng: -57.943852
      },
      {
        nombre: "FCIA. MANES",
        direccion: "CALLE 49 632, LA PLATA, Provincia de Buenos Aires, Argentina",
        tel: "0221-422-0550",
        lat: -34.9150888,
        lng: -57.9510165
      },
      {
        nombre: "FCIA. MARSICO",
        direccion: "AV. 7 445, LA PLATA, Provincia de Buenos Aires, Argentina",
        tel: "0221-424-3593",
        lat: -34.9081967,
        lng: -57.9589819
      },
      {
        nombre: "FCIA. GARCÍA BUSCARINI",
        direccion: "CALLE 68 Nº1300, LA PLATA, Provincia de Buenos Aires, AR",
        tel: "0221-451-4120",
        lat: -34.9342366,
        lng: -57.9396539
      },
      {
        nombre: "FCIA. LOS HORNOS",
        direccion: "CALLE 60 Nº1985, LA PLATA, Provincia de Buenos Aires, Argentina",
        tel: "0221-351 5003",
        lat: -34.9435805,
        lng: -57.966557
      },
      {
        nombre: "FCIA. OJEDA",
        direccion: "DIAGONAL 80 y 49, LA PLATA, Provincia de Buenos Aires, Argentina",
        tel: "0221-421-7018",
        lat: -34.9042112,
        lng: -57.9492336
      },
      {
        nombre: "FCIA. PAZOS",
        direccion: "AV. PTE. JUAN DE PERON 4708, JOSE C PAZ, Provincia de Buenos Aires, Argentina",
        tel: "02320-22198",
        lat: -34.5320713,
        lng: -58.7258955
      },
      {
        nombre: "FCIA. CAPORALE",
        direccion: "AV. MÁRQUEZ 2866, JOSÉ LEÓN SUÁREZ, Provincia de Buenos Aires, Argentina",
        tel: "4729-3746",
        lat: -34.529389,
        lng: -58.5734048
      },
      {
        nombre: "FCIA EL INDIO",
        direccion: "CALLE 10, 780, LA PLATA, Provincia de Buenos Aires, Argentina",
        tel: "221-483-1213",
        lat: -34.9160303,
        lng: -57.9546649
      },
      {
        nombre: "FARMAGIC",
        direccion: "S. DEL ESTERO 570, I. MASCHUWITZ, Provincia de Buenos Aires, Argentina",
        tel: "03484-436540",
        lat: -34.3965701,
        lng: -58.737883
      },
      {
        nombre: "FCIA. MIGHETTI",
        direccion: "SOLER 136, ITUZAINGÓ, Provincia de Buenos Aires, Argentina",
        tel: "4623-1994",
        lat: -34.658666,
        lng: -58.6678978
      },
      {
        nombre: "FCIA MARTINEZ",
        direccion: "SARMIENTO 927, GRAL RODRIGUEZ, Provincia de Buenos Aires, Argentina",
        tel: "0237 484-3484",
        lat: -34.6066508,
        lng: -58.950074
      },
      {
        nombre: "FCIA URBANA – LAS PAMPAS",
        direccion: "RICARDO BALBIN 5283, HUDSON, Provincia de Buenos Aires, Argentina",
        tel: "-",
        lat: -34.7798616,
        lng: -58.1559831
      },
      {
        nombre: "FCIA. BRAVI",
        direccion: "AV. VERGARA 4129, HURLINGHAM, Provincia de Buenos Aires, Argentina",
        tel: "4452-8521",
        lat: -34.5913796,
        lng: -58.6365247
      },
      {
        nombre: "FCIA AMARELLE",
        direccion: "AV GRAL JOSE DE SAN MARTIN 2944, FLORENCIO VARELA, Provincia de Buenos Aires, Argentina",
        tel: "1122766891",
        lat: -34.8064286,
        lng: -58.277925
      },
      {
        nombre: "FCIA FERRERO",
        direccion: "DEMAESTRI 1531, GRAL RODRIGUEZ, Provincia de Buenos Aires, Argentina",
        tel: "0237 484-4793",
        lat: -34.6070476,
        lng: -58.9445751
      },
      {
        nombre: "FCIA.BANEZ",
        direccion: "PTE J.D.PERON 246, GRAL RODRIGUEZ, Provincia de Buenos Aires, Argentina",
        tel: "484-1624",
        lat: -34.6022327,
        lng: -58.9490187
      },
      {
        nombre: "FCIA DEL PUEBLO",
        direccion: "CONQUISTA DEL DESIERTO 214, EZEIZA, Provincia de Buenos Aires, Argentina",
        tel: "42951052",
        lat: -34.8536083,
        lng: -58.5213284
      },
      {
        nombre: "FCIA MAYDE",
        direccion: "ALEM 349, EZEIZA, Provincia de Buenos Aires, Argentina",
        tel: "-",
        lat: -34.865976,
        lng: -58.5342633
      },
      {
        nombre: "FCIA. JKS",
        direccion: "M. T. DE ALVEAR 602, DON TORCUATO, Provincia de Buenos Aires, Argentina",
        tel: "4748-1020",
        lat: -34.4963183,
        lng: -58.6358733
      },
      {
        nombre: "FCIA MB",
        direccion: "ASBORNO 498, ESCOBAR, Provincia de Buenos Aires, Argentina",
        tel: "0348-442-0758 /15-3472-6636",
        lat: -34.3477365,
        lng: -58.7930408
      },
      {
        nombre: "FCIA. AGOSTINI",
        direccion: "CAMINO CENTENARIO Y DIAG 92, CITY BELL, Provincia de Buenos Aires, Argentina",
        tel: "-",
        lat: -34.86655,
        lng: -58.0442058
      },
      {
        nombre: "FCIA. PALUMBO",
        direccion: "WERNICKE 2851, CIUDAD JARDÍN, Provincia de Buenos Aires, Argentina",
        tel: "4751-1764",
        lat: -34.5962102,
        lng: -58.5913678
      },
      {
        nombre: "FCIA ELIB’IAN",
        direccion: "SHOPPING LAS TOSCAS, CANNING, Provincia de Buenos Aires, Argentina",
        tel: "1168321826",
        lat: -34.8565615,
        lng: -58.5040761
      },
      {
        nombre: "FCIA. CTRAL. CASEROS",
        direccion: "URQUIZA 4812, CASEROS, Provincia de Buenos Aires, Argentina",
        tel: "4750-5638",
        lat: -34.6059726,
        lng: -58.5640553
      },
      {
        nombre: "FCIA FERRAN",
        direccion: "TIMBUES 860, CASTELAR, Provincia de Buenos Aires, Argentina",
        tel: "4628-2322",
        lat: -34.6514164,
        lng: -58.6418943
      },
      {
        nombre: "FCIA. DEL PARANA",
        direccion: "FRENCH 470, CAMPANA, Provincia de Buenos Aires, Argentina",
        tel: "03489-437-000",
        lat: -34.1651933,
        lng: -58.9658852
      },
      {
        nombre: "FCIA. IGLESIAS",
        direccion: "AV BARTOLOME MITRE 1144, CAMPANA, Provincia de Buenos Aires, Argentina",
        tel: "03489 42-1779",
        lat: -34.5394895,
        lng: -58.5073775
      },
      {
        nombre: "FCIA. MÁS FARMA",
        direccion: "MARIANO CASTEX 1621, CANNING, Provincia de Buenos Aires, Argentina",
        tel: "50750293",
        lat: -34.864484,
        lng: -58.5027252
      },
      {
        nombre: "FCIA. DEL PUEBLO",
        direccion: "AV. CENTENARIO 2001, BECCAR, Provincia de Buenos Aires, Argentina",
        tel: "4743-1314",
        lat: -34.4602128,
        lng: -58.5279937
      },
      {
        nombre: "FCIA. BENEDETTO",
        direccion: "CALLE 14 4998, BERAZATEGUI, Provincia de Buenos Aires, Argentina",
        tel: "4226 6771",
        lat: -34.760671,
        lng: -58.2073787
      },
      {
        nombre: "FCIA. ITURRE",
        direccion: "L. DE LA TORRE 1580, BERAZATEGUI, Provincia de Buenos Aires, Argentina",
        tel: "4216 4739",
        lat: -34.762001,
        lng: -58.2112961
      },
      {
        nombre: "FCIA ELIB’IAN",
        direccion: "SEGUI 699, ADROGUE, Provincia de Buenos Aires, Argentina",
        tel: "4214-1932",
        lat: -34.799987,
        lng: -58.3966755
      },
      {
        nombre: "FCIA JOOS",
        direccion: "CALLE 6 N 566, ASCASUBI, Provincia de Buenos Aires, Argentina",
        tel: "2928491008",
        lat: -34.7970813,
        lng: -58.4152553
      },
      {
        nombre: "FCIA ZABALICH",
        direccion: "calle 3 esquina 14 S/N, ASCASUBI, Provincia de Buenos Aires, Argentina",
        tel: "02928-491222",
        lat: -39.3752234,
        lng: -62.6465704
      },
      {
        nombre: "FCIA. ORELLANO",
        direccion: "AV SAN MARTIN 1200, ADROGUE, Provincia de Buenos Aires, Argentina",
        tel: "4293-3575",
        lat: -34.8064649,
        lng: -58.3832558
      },
      {
        nombre: "FCIA. CALVO",
        direccion: "AV. ESPORA 600, ADROGUE, Provincia de Buenos Aires, Argentina",
        tel: "4294-0360",
        lat: -34.7959754,
        lng: -58.3890744
      },
      {
        nombre: "FCAI. UOMAX",
        direccion: "AV. ALTE. BROWN 3323, ADROGUE, Provincia de Buenos Aires, Argentina",
        tel: "60630977",
        lat: -34.7985247,
        lng: -58.3807971
      },
      {
        nombre: "FCIA. FARMAVITAL",
        direccion: "J. B. ALBERDI 4899, VILLA LURO, CAPITAL FEDERAL, Argentina",
        tel: "46355777",
        lat: -34.6446749,
        lng: -58.4953091
      },
      {
        nombre: "FCIA. CENTRAL",
        direccion: "MONROE 4968, VILLA URQUIZA, CAPITAL FEDERAL, Argentina",
        tel: "4523-5148",
        lat: -34.5736515,
        lng: -58.484983
      },
      {
        nombre: "FCIA. FEINSTEIN",
        direccion: "NOTHER 599, ADROGUE, Provincia de Buenos Aires, Argentina",
        tel: "4294 3111",
        lat: -34.8002886,
        lng: -58.3899051
      },
      {
        nombre: "FCIA. FITTIPALDI",
        direccion: "FDEZ. DE ENCISO 3979, VILLA DEVOTO, CAPITAL FEDERAL, Argentina",
        tel: "4504-8509",
        lat: -34.601172,
        lng: -58.5124809
      },
      {
        nombre: "FCIA ANIKA",
        direccion: "CUENCA 2762, VILLA DEL PARQUE, CAPITAL FEDERAL, Argentina",
        tel: "4580-2431",
        lat: -34.6042939,
        lng: -58.4932016
      },
      {
        nombre: "FCIA. DANERI",
        direccion: "CAMPANA 2502, VILLA DEL PARQUE, CAPITAL FEDERAL, Argentina",
        tel: "4504-3441",
        lat: -34.6076215,
        lng: -58.4921846
      },
      {
        nombre: "FCIA. PROFESIONAL",
        direccion: "AV. ÁLVAREZ JONTE 3721, VILLA DEL PARQUE, CAPITAL FEDERAL, Argentina",
        tel: "4639-8445",
        lat: -34.6134285,
        lng: -58.4940207
      },
      {
        nombre: "FCIA ANIKA",
        direccion: "AV. SAN MARTÍN 2711, VILLA CRESPO, CAPITAL FEDERAL, Argentina",
        tel: "4581-3761",
        lat: -34.6029525,
        lng: -58.463873
      },
      {
        nombre: "FCIA ANIKA",
        direccion: "AV. SAN MARTIN 1669, VILLA CRESPO, CAPITAL FEDERAL, Argentina",
        tel: "5195-1141",
        lat: -34.6057786,
        lng: -58.4527193
      },
      {
        nombre: "FCIA MUNDIAL",
        direccion: "AV RICARDO BALBIN 3057, SAAVEDRA, CAPITAL FEDERAL, Argentina",
        tel: "4544-2051",
        lat: -34.5589394,
        lng: -58.4735931
      },
      {
        nombre: "FCIA. TKL AMÉRICA",
        direccion: "AV. CÓRDOBA 1402, TRIBUNALES, CAPITAL FEDERAL, Argentina",
        tel: "4372-9633",
        lat: -34.5994895,
        lng: -58.3869735
      },
      {
        nombre: "FCIA ANIKA",
        direccion: "AV SAN MARTIN 2159, VILLA CRESPO, CAPITAL FEDERAL, Argentina",
        tel: "4581-7491",
        lat: -34.6045209,
        lng: -58.457604
      },
      {
        nombre: "FCIA. LA SANTE 3",
        direccion: "AV. CASEROS 2980, PARQUE PATRICIOS, CAPITAL FEDERAL, Argentina",
        tel: "4912-2893",
        lat: -34.6371742,
        lng: -58.4048199
      },
      {
        nombre: "FCIA MALVINAS",
        direccion: "PARAGUAY 1402, RECOLETA, CAPITAL FEDERAL, Argentina",
        tel: "48164096",
        lat: -34.5984211,
        lng: -58.3871557
      },
      {
        nombre: "FCIA.TKL QUINTANA",
        direccion: "AV QUINTANA 390, RECOLETA, CAPITAL FEDERAL, Argentina",
        tel: "4813-1189",
        lat: -34.5894248,
        lng: -58.3889101
      },
      {
        nombre: "FCIA. LA ESTRELLA",
        direccion: "DEFENSA 201, MONSERRAT, CAPITAL FEDERAL, Argentina",
        tel: "4343-4040",
        lat: -34.6101876,
        lng: -58.3721295
      },
      {
        nombre: "FCIA. TKL SAN AGUSTÍN",
        direccion: "AV. LAS HERAS 2699, PALERMO, CAPITAL FEDERAL, Argentina",
        tel: "4807-2569",
        lat: -34.5844748,
        lng: -58.4002699
      },
      {
        nombre: "FCIA SOFIBA",
        direccion: "GUEMES 3200, PALERMO, CAPITAL FEDERAL, Argentina",
        tel: "48226409",
        lat: -34.5910422,
        lng: -58.4104922
      },
      {
        nombre: "FCIA. OLIVERA",
        direccion: "AV. OLIVERA 139, FLORESTA, CAPITAL FEDERAL, Argentina",
        tel: "4672-5860",
        lat: -34.637066,
        lng: -58.4873188
      },
      {
        nombre: "FCIA. DIRECTORIO",
        direccion: "AV. DIRECTORIO 4701, MATADEROS, CAPITAL FEDERAL, Argentina",
        tel: "4682-3920",
        lat: -34.6484506,
        lng: -58.4884822
      },
      {
        nombre: "FCIA. TKL ETCHEVERRY",
        direccion: "CALLAO 299, CONGRESO, CAPITAL FEDERAL, Argentina",
        tel: "4371-4844",
        lat: -34.6057224,
        lng: -58.3918397
      },
      {
        nombre: "FCIA. ALBERDI",
        direccion: "AV. J. B. ALBERDI 2188, FLORES, CAPITAL FEDERAL, Argentina",
        tel: "4631-0341",
        lat: -34.6303915,
        lng: -58.458428
      },
      {
        nombre: "FCIA. HIRSCHMANN",
        direccion: "AV. EVA PERON 2590, FLORES, CAPITAL FEDERAL, Argentina",
        tel: "4634-0424/ 4631-0728",
        lat: -34.641067,
        lng: -58.456421
      },
      {
        nombre: "FCIA NUEVA LACROZE",
        direccion: "F. LACROZE 2599, COLEGIALES, CAPITAL FEDERAL, Argentina",
        tel: "4554-5535",
        lat: -34.5722033,
        lng: -58.4464756
      },
      {
        nombre: "LA BOTICA DE JULIÁN",
        direccion: "C. PELLEGRINI 423, CENTRO, CAPITAL FEDERAL, Argentina",
        tel: "4322-2888",
        lat: -34.6033962,
        lng: -58.3808159
      },
      {
        nombre: "FCIA. DAMELI",
        direccion: "VIRREY AVILES 3371, COLEGIALES, CAPITAL FEDERAL, Argentina",
        tel: "1145510313",
        lat: -34.5750598,
        lng: -58.4600672
      },
      {
        nombre: "FCIA. LA SANTÉ",
        direccion: "AV. RIVADAVIA 5892, CABALLITO, CAPITAL FEDERAL, Argentina",
        tel: "4431-3107",
        lat: -34.6235595,
        lng: -58.4481821
      },
      {
        nombre: "FCIA MATIENZO",
        direccion: "MATIENZO 1714, CAÑITAS, CAPITAL FEDERAL, Argentina",
        tel: "4771-7545",
        lat: -34.5683281,
        lng: -58.4336917
      },
      {
        nombre: "FCIA. RP WENT",
        direccion: "AV. CORRIENTES 901, CENTRO, CAPITAL FEDERAL, Argentina",
        tel: "4322-2888",
        lat: -34.6034539,
        lng: -58.3796011
      },
      {
        nombre: "FCIA. RP SCANAPIECO",
        direccion: "ESMERALDA 599, CENTRO, CAPITAL FEDERAL, Argentina",
        tel: "4393-9833",
        lat: -34.6000112,
        lng: -58.383326
      },
      {
        nombre: "FCIA. TKL GALESA",
        direccion: "AV. CABILDO 1631, BELGRANO, CAPITAL FEDERAL, Argentina",
        tel: "4783-5210",
        lat: -34.5657358,
        lng: -58.4525855
      },
      {
        nombre: "FARMA PLUS",
        direccion: "CABILDO 2540, BELGRANO, CAPITAL FEDERAL, Argentina",
        tel: "-",
        lat: -34.5581278,
        lng: -58.4604592
      },
      {
        nombre: "FCIA. OGGI",
        direccion: "AV. JUAN DE GARAY 3101, BOEDO, CAPITAL FEDERAL, Argentina",
        tel: "4941-1198",
        lat: -34.6293411,
        lng: -58.4085972
      },
      {
        nombre: "FCIA. TKL GONZÁLEZ",
        direccion: "AV. RIVADAVIA 5415, CABALLITO, CAPITAL FEDERAL, Argentina",
        tel: "4902-3333",
        lat: -34.6204394,
        lng: -58.4417867
      },
      {
        nombre: "PEDIDOS FARMA",
        direccion: "AV CABILDO 2540, BELGRANO, CAPITAL FEDERAL, Argentina",
        tel: "8102209587",
        lat: -34.5581278,
        lng: -58.4604592
      },
      {
        nombre: "FCIA. EL CÓNDOR",
        direccion: "F. LACROZE 1701, BELGRANO, CAPITAL FEDERAL, Argentina",
        tel: "4772-2864",
        lat: -34.5637,
        lng: -58.438979
      },
      {
        nombre: "FCIA. LA FRANCO",
        direccion: "F.LACROZE 2278, BELGRANO, CAPITAL FEDERAL, Argentina",
        tel: "4772-0361",
        lat: -34.5686705,
        lng: -58.4434617
      },
      {
        nombre: "FCIAS. DANESA CONGRESO",
        direccion: "AV. CONGRESO 2486, BELGRANO, CAPITAL FEDERAL, Argentina",
        tel: "4787-3100",
        lat: -34.5559294,
        lng: -58.4631952
      },
      {
        nombre: "FCIA. DANESA CRAMER",
        direccion: "CRAMER 1963, BELGRANO, CAPITAL FEDERAL, Argentina",
        tel: "4782-7532",
        lat: -34.5660309,
        lng: -58.4598648
      },
      {
        nombre: "FCIAS. DANESA JURAMENTO",
        direccion: "JURAMENTO 2484, BELGRANO, CAPITAL FEDERAL, Argentina",
        tel: "4896-1180",
        lat: -34.5626204,
        lng: -58.4573859
      },
      {
        nombre: "FCIA. LELOIR",
        direccion: "LARREA 1249, BARRIO NORTE, CAPITAL FEDERAL, Argentina",
        tel: "4825-8498",
        lat: -34.5930583,
        lng: -58.4002718
      },
      {
        nombre: "FCIAS. DANESA CABILDO",
        direccion: "AV. CABILDO 2171, BELGRANO, CAPITAL FEDERAL, Argentina",
        tel: "4787-3100",
        lat: -34.5613025,
        lng: -58.4570687
      },
      {
        nombre: "FCIA. TKL TEKIEL",
        direccion: "AV. STA. FÉ 2399, BARRIO NORTE, CAPITAL FEDERAL, Argentina",
        tel: "4823-1551",
        lat: -34.5952802,
        lng: -58.3983282
      },
      {
        nombre: "FCIA. DURAND",
        direccion: "AV. DIAZ VELEZ 5101, ALMAGRO, CAPITAL FEDERAL, Argentina",
        tel: "4982-1408",
        lat: -34.6085597,
        lng: -58.4389391
      },
      {
        nombre: "FCIA. SEC",
        direccion: "AV INDEPENDENCIA 2002, BALVANERA, CAPITAL FEDERAL, Argentina",
        tel: "4941-9086",
        lat: -34.6184594,
        lng: -58.3946447
      },
      {
        nombre: "FCIA. TKL FACULTAD",
        direccion: "M. T. DE ALVEAR 2043, BARRIO NORTE, CAPITAL FEDERAL, Argentina",
        tel: "4821-2787/8",
        lat: -34.5971962,
        lng: -58.396664
      },
      {
        nombre: "FCIA TORNO",
        direccion: "AV.R DUNCLER 236, VEDIA, Provincia de Buenos Aires, Argentina",
        tel: "02354-42-0158",
        lat: -34.4979018,
        lng: -61.5423677
      },
      {
        nombre: "FCIA. WAHLMANN",
        direccion: "F. URQUIJO DE SEXE 175, VILLAlngA, Provincia de Buenos Aires, Argentina",
        tel: "0292-849-2080",
        lat: -39.9171779,
        lng: -62.6172179
      },
      {
        nombre: "FCIA VASCA",
        direccion: "Gral. Paz 764, TANDIL, Provincia de Buenos Aires, Argentina",
        tel: "0249 442-3115",
        lat: -37.3227987,
        lng: -59.1335639
      },
      {
        nombre: "FCIA VERA",
        direccion: "AV. ESPAÑA 958, TANDIL, Provincia de Buenos Aires, Argentina",
        tel: "0249 422-1000",
        lat: -37.3206417,
        lng: -59.1337212
      },
      {
        nombre: "FCIA. SINDICAL",
        direccion: "DERQUI 155, TRENQUELAUQUEN, Provincia de Buenos Aires, Argentina",
        tel: "02392-43-3491",
        lat: -34.491177,
        lng: -58.8395414
      },
      {
        nombre: "FCIA BRASIL",
        direccion: "AV. BRASIL 165, TANDIL, Provincia de Buenos Aires, Argentina",
        tel: "0249-424-8988",
        lat: -37.3289619,
        lng: -59.1137505
      },
      {
        nombre: "FCIA DARRAGUEIRA",
        direccion: "DARRAGUEIRA 1970, TANDIL, Provincia de Buenos Aires, Argentina",
        tel: "2494511087",
        lat: -37.3012211,
        lng: -59.1231
      },
      {
        nombre: "FCIA MARZOCCA",
        direccion: "MARCONI 1201, TANDIL, Provincia de Buenos Aires, Argentina",
        tel: "2494428166",
        lat: -37.3193966,
        lng: -59.1296728
      },
      {
        nombre: "FCIA DE LOS ARROYOS",
        direccion: "DE LA NACION 102, SAN NICOLAS, Provincia de Buenos Aires, Argentina",
        tel: "543364423130",
        lat: -33.3294039,
        lng: -60.215702
      },
      {
        nombre: "FCIA FENIX",
        direccion: "GARIBALDI 281, SAN NICOLAS, Provincia de Buenos Aires, Argentina",
        tel: "0336-442-3117",
        lat: -33.334397,
        lng: -60.2167916
      },
      {
        nombre: "FCIA GALENO",
        direccion: "Mitre 913, PUNTA ALTA, Provincia de Buenos Aires, Argentina",
        tel: "2932427373",
        lat: -38.8779183,
        lng: -62.0702714
      },
      {
        nombre: "FCIA CURIE",
        direccion: "25 DE MAYO 571, PUNTA ALTA, Provincia de Buenos Aires, Argentina",
        tel: "02932-43-4000",
        lat: -38.8796383,
        lng: -62.0792419
      },
      {
        nombre: "FCIA BOCASSI",
        direccion: "RAWSON 744, SAN A. DE GILES, Provincia de Buenos Aires, Argentina",
        tel: "2325443233",
        lat: -34.6075488,
        lng: -60.0666631
      },
      {
        nombre: "FCIA FERNÁNDEZ",
        direccion: "MITRE 337, PEHUAJÓ, Provincia de Buenos Aires, Argentina",
        tel: "2396475-000",
        lat: -35.8127089,
        lng: -61.8973346
      },
      {
        nombre: "FCIA. FERNÁNDEZ",
        direccion: "MITRE 337, PEHUAJÓ, Provincia de Buenos Aires, Argentina",
        tel: "02396475-000",
        lat: -35.8127089,
        lng: -61.8973346
      },
      {
        nombre: "FCIA. LOPEZ",
        direccion: "PRESIDENTE HIPOLITO YRIGOYEN 50, PEHUAJÓ, Provincia de Buenos Aires, Argentina",
        tel: "02392-40-1600",
        lat: -36.2792512,
        lng: -62.5471552
      },
      {
        nombre: "FCIA. BASILE",
        direccion: "MARCELINO CRESPO 104, PATAGONES, Provincia de Buenos Aires, Argentina",
        tel: "0292-046-4003",
        lat: -40.8036895,
        lng: -62.9804032
      },
      {
        nombre: "FCIA MELFFI",
        direccion: "NECOCHEA 2986, OLAVARRIA, Provincia de Buenos Aires, Argentina",
        tel: "2284-410011",
        lat: -36.8931272,
        lng: -60.31854
      },
      {
        nombre: "FCIA ALVAREZ",
        direccion: "BELGRANO 2889, OLAVARRIA, Provincia de Buenos Aires, Argentina",
        tel: "2284-420560",
        lat: -36.8936581,
        lng: -60.3207108
      },
      {
        nombre: "FCIA MARTEL",
        direccion: "ESPAÑA 2694, OLAVARRIA, Provincia de Buenos Aires, Argentina",
        tel: "02284-423530",
        lat: -36.8937167,
        lng: -60.3233499
      },
      {
        nombre: "FCIA A CORREA",
        direccion: "BUSTAMANTE 390, MEDANOS, Provincia de Buenos Aires, Argentina",
        tel: "292-743-3131",
        lat: -38.8277842,
        lng: -62.6959963
      },
      {
        nombre: "FCIA LAS DUNAS",
        direccion: "FARO RECALADA 1060, MONTE HERMOSO, Provincia de Buenos Aires, Argentina",
        tel: "02921-482884",
        lat: -38.9871882,
        lng: -61.3013835
      },
      {
        nombre: "FCIA DE LA COSTA",
        direccion: "AVENIDA ARGENTINA 50, MONTE HERMOSO, Provincia de Buenos Aires, Argentina",
        tel: "02921-481884",
        lat: -38.9885458,
        lng: -61.2875301
      },
      {
        nombre: "RIADIGOS",
        direccion: "ALVARADO 2798, MDQ, Provincia de Buenos Aires, Argentina",
        tel: "0223 494-9377",
        lat: -38.00885,
        lng: -57.55748
      },
      {
        nombre: "RIADIGOS",
        direccion: "CASTELLI 1309, MDQ, Provincia de Buenos Aires, Argentina",
        tel: "0223 451-8537",
        lat: -36.0895596,
        lng: -57.8019104
      },
      {
        nombre: "FCIA. S.T.A.R.P.Y.H",
        direccion: "ENTRE ESPAÑA Y LURO, MDQ, Provincia de Buenos Aires, Argentina",
        tel: "0223 473-4838",
        lat: -37.9904122,
        lng: -57.6036157
      },
      {
        nombre: "FCIA FABIO",
        direccion: "CALLE 7 N°324, LIMA, Provincia de Buenos Aires, Argentina",
        tel: "0348-748-2311",
        lat: -34.0447565,
        lng: -59.1961093
      },
      {
        nombre: "FCIA MAINETTI",
        direccion: "1° DE MAYO 1025, LOMA HERMOSA, Provincia de Buenos Aires, Argentina",
        tel: "4841-2077",
        lat: -34.5608684,
        lng: -58.6101864
      },
      {
        nombre: "OCCHI",
        direccion: "J B JUSTO 1302, MDQ, Provincia de Buenos Aires, Argentina",
        tel: "223-593-2933",
        lat: -38.031675,
        lng: -57.5546973
      },
      {
        nombre: "FCIA. VERRILI",
        direccion: "BTO. DE MIGUEL 51, Junín, Provincia de Buenos Aires, Argentina",
        tel: "0236-442-4618",
        lat: -34.5885499,
        lng: -60.949554
      },
      {
        nombre: "FCIA. SAN JORGE",
        direccion: "ALSINA 252, Junín, Provincia de Buenos Aires, Argentina",
        tel: "0236 444-4884",
        lat: -34.5930901,
        lng: -60.9528026
      },
      {
        nombre: "FCIA. RODRIGUEZ",
        direccion: "R.S.PEÑA 136, Junín, Provincia de Buenos Aires, Argentina",
        tel: "0236-442-1211",
        lat: -34.5885499,
        lng: -60.949554
      },
      {
        nombre: "FCIA CACIERO",
        direccion: "GRAL PAZ 249, Junín, Provincia de Buenos Aires, Argentina",
        tel: "246-465-5599",
        lat: -34.5883028,
        lng: -60.9464499
      },
      {
        nombre: "FCIA. RABAGLIO",
        direccion: "ALBERDI 102, Junín, Provincia de Buenos Aires, Argentina",
        tel: "0236-442-8141",
        lat: -34.592847,
        lng: -60.9504017
      },
      {
        nombre: "FCIA. SINDICAL",
        direccion: "GANDINI 30, Junín, Provincia de Buenos Aires, Argentina",
        tel: "0236-442-0314",
        lat: -34.5921373,
        lng: -60.9461453
      },
      {
        nombre: "FCIA. SINDICAL",
        direccion: "ESPAÑA 122, Junín, Provincia de Buenos Aires, Argentina",
        tel: "0236-442-1476",
        lat: -34.5885499,
        lng: -60.949554
      },
      {
        nombre: "FARMEDICA",
        direccion: "ALBERDI 1860, Junín, Provincia de Buenos Aires, Argentina",
        tel: "0236-444-1181",
        lat: -34.5726188,
        lng: -60.972036
      },
      {
        nombre: "FCIA. SILVA",
        direccion: "PELLEGRINI 396, Junín, Provincia de Buenos Aires, Argentina",
        tel: "0236-442-1285",
        lat: -34.5864464,
        lng: -60.9403172
      },
      {
        nombre: "FCIA. MUNDO FARMA I",
        direccion: "ATAL ROCA 65, Junín, Provincia de Buenos Aires, Argentina",
        tel: "0236-444-6191",
        lat: -34.5885499,
        lng: -60.949554
      },
      {
        nombre: "FCIA. MUNDO FARMA II",
        direccion: "BENITO DE MIGUEL 1198, Junín, Provincia de Buenos Aires, Argentina",
        tel: "0236-427-4001",
        lat: -34.6066241,
        lng: -60.9680383
      },
      {
        nombre: "FCIA. SOCIAL",
        direccion: "R. S. PEÑA 41, Junín, Provincia de Buenos Aires, Argentina",
        tel: "0236-442-1510",
        lat: -34.5885499,
        lng: -60.949554
      },
      {
        nombre: "FCIA. DEL ÁGUILA",
        direccion: "RIVADAVIA 117, Junín, Provincia de Buenos Aires, Argentina",
        tel: "0236-442-2049",
        lat: -34.5912651,
        lng: -60.9472397
      },
      {
        nombre: "FCIA. SINDICAL",
        direccion: "CARLOS PEREGRINI 44, CHIVILCOY, Provincia de Buenos Aires, Argentina",
        tel: "02346-42-0657",
        lat: -34.8956061,
        lng: -60.0195104
      },
      {
        nombre: "FCIA. LASPIUR",
        direccion: "SAENZ PEÑA 691, CORONEL PRINGLES, Provincia de Buenos Aires, Argentina",
        tel: "02922 46-2117",
        lat: -34.599205,
        lng: -58.5316813
      },
      {
        nombre: "FCIA. PAUL DE SILVA",
        direccion: "CNEL. SUÁREZ 92, Junín, Provincia de Buenos Aires, Argentina",
        tel: "0236-443-0749",
        lat: -34.5949843,
        lng: -60.9429342
      },
      {
        nombre: "FCIA. BADÍA",
        direccion: "ALTE. BROWN 56, CHACABUCO, Provincia de Buenos Aires, Argentina",
        tel: "02352-428-491",
        lat: -34.6421695,
        lng: -60.4728355
      },
      {
        nombre: "FCIA MUJICA",
        direccion: "ELGUEA ROMÁN 258, CHACABUCO, Provincia de Buenos Aires, Argentina",
        tel: "2352-430497",
        lat: -34.6335378,
        lng: -60.4718399
      },
      {
        nombre: "FCIA. VISCA MODERNA",
        direccion: "CARLOS PEREGRINI 249, CHIVILCOY, Provincia de Buenos Aires, Argentina",
        tel: "02346 - 422514",
        lat: -34.8927832,
        lng: -60.015997
      },
      {
        nombre: "FCIA. BRAGAGNOLO",
        direccion: "ELIZONDO 2308, BRAGADO, Provincia de Buenos Aires, Argentina",
        tel: "02342-48-4403",
        lat: -35.1241314,
        lng: -60.4776578
      },
      {
        nombre: "FCIA BURATOVICH",
        direccion: "SARMIENTO 1054, Mayor Buratovich, Provincia de Buenos Aires, Argentina",
        tel: "0291-4917175",
        lat: -39.261049,
        lng: -62.6144947
      },
      {
        nombre: "FCIA ANZUNELLI",
        direccion: "ROSAS 953, Mayor Buratovich, Provincia de Buenos Aires, Argentina",
        tel: "0291-4917089",
        lat: -39.2611608,
        lng: -62.6106831
      },
      {
        nombre: "FCIA. HINCKLEY",
        direccion: "GRAL PAZ 1125 PB, BRAGADO, Provincia de Buenos Aires, Argentina",
        tel: "(02342) 43 - 0049",
        lat: -35.1177854,
        lng: -60.4925599
      },
      {
        nombre: "FCIA. LA ESTACION",
        direccion: "PELLEGRINI 2057, BRAGADO, Provincia de Buenos Aires, Argentina",
        tel: "02342-43-0189",
        lat: -35.1189355,
        lng: -60.4800132
      },
      {
        nombre: "FCIA ZONA FARMA",
        direccion: "MAIPU 401, BANFIELD, Provincia de Buenos Aires, Argentina",
        tel: "-",
        lat: -34.7437774,
        lng: -58.3900536
      },
      {
        nombre: "FCIA MILANO",
        direccion: "GRAL. ALVEAR 1603, BANFIELD, Provincia de Buenos Aires, Argentina",
        tel: "4202-1241",
        lat: -34.7446112,
        lng: -58.3917316
      },
      {
        nombre: "FCIA.CRUZ ROJA",
        direccion: "RIVADAVIA 1801, BRAGADO, Provincia de Buenos Aires, Argentina",
        tel: "02342-430384",
        lat: -35.1190536,
        lng: -60.4835766
      },
      {
        nombre: "FCIA ZONA FARMA",
        direccion: "AV. ADOLFO ALSINA 390, BANFIELD, Provincia de Buenos Aires, Argentina",
        tel: "-",
        lat: -34.7408256,
        lng: -58.3925921
      },
      {
        nombre: "FCIA NOROESTE",
        direccion: "AVELLANEDA 798, BAHIA BLANCA, Provincia de Buenos Aires, Argentina",
        tel: "0291-4531243",
        lat: -38.722999,
        lng: -62.289247
      },
      {
        nombre: "FCIA. PASTEUR",
        direccion: "ALSINA 110, BAHIA BLANCA, Provincia de Buenos Aires, Argentina",
        tel: "0291-452-8214",
        lat: -38.7174891,
        lng: -62.2636425
      },
      {
        nombre: "FCIA SOS UNDS",
        direccion: "PERU 729, BAHIA BLANCA, Provincia de Buenos Aires, Argentina",
        tel: "4500458 INT 118",
        lat: -38.7183177,
        lng: -62.2663478
      },
      {
        nombre: "FCIA HEGUILEN",
        direccion: "ALEM ESQUINA CARONT, BAHIA BLANCA, Provincia de Buenos Aires, Argentina",
        tel: "0291-4526666",
        lat: -38.7085563,
        lng: -62.2648977
      },
      {
        nombre: "FCIA. MEDRANO",
        direccion: "OHIGGINS 71, BAHIA BLANCA, Provincia de Buenos Aires, Argentina",
        tel: "0291-4512343",
        lat: -38.7200856,
        lng: -62.26667
      },
      {
        nombre: "FCIA. FIORDELMONDO",
        direccion: "REMEDIOS DE ESCALADA 3, BAHIA BLANCA, Provincia de Buenos Aires, Argentina",
        tel: "0291-481 5467",
        lat: -38.7332078,
        lng: -62.2471091
      },
      {
        nombre: "FCIA. GUZMAN",
        direccion: "ALEM 1067, BAHIA BLANCA, Provincia de Buenos Aires, Argentina",
        tel: "0291-4526811",
        lat: -38.7036919,
        lng: -62.2687448
      },
      {
        nombre: "FCIA GELARDI",
        direccion: "ALBERDI 1398, BAHIA BLANCA, Provincia de Buenos Aires, Argentina",
        tel: "0291 482-3131",
        lat: -38.7269983,
        lng: -62.247384
      },
      {
        nombre: "FCIA CARDELLI DUPUY",
        direccion: "SARMIENTO 1298, BAHIA BLANCA, Provincia de Buenos Aires, Argentina",
        tel: "291-4512852",
        lat: -38.706098,
        lng: -62.253729
      },
      {
        nombre: "FCIA. DI NUCCI",
        direccion: "SALTA Y ZAPIOLA, BAHIA BLANCA, Provincia de Buenos Aires, Argentina",
        tel: "0291-4552155",
        lat: -38.7076045,
        lng: -62.2692972
      },
      {
        nombre: "FCIA. ESPAÑOLA",
        direccion: "SAN MARTIN 301, BAHIA BLANCA, Provincia de Buenos Aires, Argentina",
        tel: "2914534567",
        lat: -38.71958,
        lng: -62.26139
      },
      {
        nombre: "FCIA CASTELLI",
        direccion: "CASTELLI 159, BAHIA BLANCA, Provincia de Buenos Aires, Argentina",
        tel: "2914501150",
        lat: -38.7204027,
        lng: -62.2721249
      },
      {
        nombre: "FCIA CHISTICK",
        direccion: "VIEYTES 1460, BAHIA BLANCA, Provincia de Buenos Aires, Argentina",
        tel: "8003331896",
        lat: -38.7073098,
        lng: -62.2852176
      },
      {
        nombre: "FCIA. 12 DE OCTUBRE",
        direccion: "12 DE OCTUBRE 642, BAHIA BLANCA, Provincia de Buenos Aires, Argentina",
        tel: "0291-456-0580",
        lat: -38.706299,
        lng: -62.263953
      },
      {
        nombre: "FCIA. ALEM",
        direccion: "AV. ALEM 201, BAHIA BLANCA, Provincia de Buenos Aires, Argentina",
        tel: "0291-452-3346",
        lat: -38.7125958,
        lng: -62.2615802
      },
      {
        nombre: "FCIA. BELLEI",
        direccion: "ESTOMBA 131, BAHIA BLANCA, Provincia de Buenos Aires, Argentina",
        tel: "0291-452-6606",
        lat: -38.7171638,
        lng: -62.2676268
      },
      {
        nombre: "FCIA. AMECONJ",
        direccion: "AV. VEDIA 849, 9 DE JULIO, Provincia de Buenos Aires, Argentina",
        tel: "02317-521-765",
        lat: -35.4446613,
        lng: -60.8835548
      },
      {
        nombre: "FCIA. BAZZETA",
        direccion: "AV MITRE 2346, 9 DE JULIO, Provincia de Buenos Aires, Argentina",
        tel: "02317-422-584",
        lat: -35.4504744,
        lng: -60.8953084
      },
      {
        nombre: "FCIA. FERRERE",
        direccion: "AV. VEDIA 302, 9 DE JULIO, Provincia de Buenos Aires, Argentina",
        tel: "02317-422-928",
        lat: -35.4509732,
        lng: -60.8794388
      }
  ];
  