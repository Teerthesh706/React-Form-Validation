import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"; 

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phoneCode: "",
    phoneNumber: "",
    country: "",
    city: "",
    panNo: "",
    aadharNo: "",
  });

  const countryListAlpha2 = {
    AF: "Afghanistan",
    AL: "Albania",
    DZ: "Algeria",
    AS: "American Samoa",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AQ: "Antarctica",
    AG: "Antigua and Barbuda",
    AR: "Argentina",
    AM: "Armenia",
    AW: "Aruba",
    AU: "Australia",
    AT: "Austria",
    AZ: "Azerbaijan",
    BS: "Bahamas (the)",
    BH: "Bahrain",
    BD: "Bangladesh",
    BB: "Barbados",
    BY: "Belarus",
    BE: "Belgium",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermuda",
    BT: "Bhutan",
    BO: "Bolivia (Plurinational State of)",
    BQ: "Bonaire, Sint Eustatius and Saba",
    BA: "Bosnia and Herzegovina",
    BW: "Botswana",
    BV: "Bouvet Island",
    BR: "Brazil",
    IO: "British Indian Ocean Territory (the)",
    BN: "Brunei Darussalam",
    BG: "Bulgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    CV: "Cabo Verde",
    KH: "Cambodia",
    CM: "Cameroon",
    CA: "Canada",
    KY: "Cayman Islands (the)",
    CF: "Central African Republic (the)",
    TD: "Chad",
    CL: "Chile",
    CN: "China",
    CX: "Christmas Island",
    CC: "Cocos (Keeling) Islands (the)",
    CO: "Colombia",
    KM: "Comoros (the)",
    CD: "Congo (the Democratic Republic of the)",
    CG: "Congo (the)",
    CK: "Cook Islands (the)",
    CR: "Costa Rica",
    HR: "Croatia",
    CU: "Cuba",
    CW: "Curaçao",
    CY: "Cyprus",
    CZ: "Czechia",
    CI: "Côte d'Ivoire",
    DK: "Denmark",
    DJ: "Djibouti",
    DM: "Dominica",
    DO: "Dominican Republic (the)",
    EC: "Ecuador",
    EG: "Egypt",
    SV: "El Salvador",
    GQ: "Equatorial Guinea",
    ER: "Eritrea",
    EE: "Estonia",
    SZ: "Eswatini",
    ET: "Ethiopia",
    FK: "Falkland Islands (the) [Malvinas]",
    FO: "Faroe Islands (the)",
    FJ: "Fiji",
    FI: "Finland",
    FR: "France",
    GF: "French Guiana",
    PF: "French Polynesia",
    TF: "French Southern Territories (the)",
    GA: "Gabon",
    GM: "Gambia (the)",
    GE: "Georgia",
    DE: "Germany",
    GH: "Ghana",
    GI: "Gibraltar",
    GR: "Greece",
    GL: "Greenland",
    GD: "Grenada",
    GP: "Guadeloupe",
    GU: "Guam",
    GT: "Guatemala",
    GG: "Guernsey",
    GN: "Guinea",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HT: "Haiti",
    HM: "Heard Island and McDonald Islands",
    VA: "Holy See (the)",
    HN: "Honduras",
    HK: "Hong Kong",
    HU: "Hungary",
    IS: "Iceland",
    IN: "India",
    ID: "Indonesia",
    IR: "Iran (Islamic Republic of)",
    IQ: "Iraq",
    IE: "Ireland",
    IM: "Isle of Man",
    IL: "Israel",
    IT: "Italy",
    JM: "Jamaica",
    JP: "Japan",
    JE: "Jersey",
    JO: "Jordan",
    KZ: "Kazakhstan",
    KE: "Kenya",
    KI: "Kiribati",
    KP: "Korea (the Democratic People's Republic of)",
    KR: "Korea (the Republic of)",
    KW: "Kuwait",
    KG: "Kyrgyzstan",
    LA: "Lao People's Democratic Republic (the)",
    LV: "Latvia",
    LB: "Lebanon",
    LS: "Lesotho",
    LR: "Liberia",
    LY: "Libya",
    LI: "Liechtenstein",
    LT: "Lithuania",
    LU: "Luxembourg",
    MO: "Macao",
    MG: "Madagascar",
    MW: "Malawi",
    MY: "Malaysia",
    MV: "Maldives",
    ML: "Mali",
    MT: "Malta",
    MH: "Marshall Islands (the)",
    MQ: "Martinique",
    MR: "Mauritania",
    MU: "Mauritius",
    YT: "Mayotte",
    MX: "Mexico",
    FM: "Micronesia (Federated States of)",
    MD: "Moldova (the Republic of)",
    MC: "Monaco",
    MN: "Mongolia",
    ME: "Montenegro",
    MS: "Montserrat",
    MA: "Morocco",
    MZ: "Mozambique",
    MM: "Myanmar",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Netherlands (the)",
    NC: "New Caledonia",
    NZ: "New Zealand",
    NI: "Nicaragua",
    NE: "Niger (the)",
    NG: "Nigeria",
    NU: "Niue",
    NF: "Norfolk Island",
    MP: "Northern Mariana Islands (the)",
    NO: "Norway",
    OM: "Oman",
    PK: "Pakistan",
    PW: "Palau",
    PS: "Palestine, State of",
    PA: "Panama",
    PG: "Papua New Guinea",
    PY: "Paraguay",
    PE: "Peru",
    PH: "Philippines (the)",
    PN: "Pitcairn",
    PL: "Poland",
    PT: "Portugal",
    PR: "Puerto Rico",
    QA: "Qatar",
    MK: "Republic of North Macedonia",
    RO: "Romania",
    RU: "Russian Federation (the)",
    RW: "Rwanda",
    RE: "Réunion",
    BL: "Saint Barthélemy",
    SH: "Saint Helena, Ascension and Tristan da Cunha",
    KN: "Saint Kitts and Nevis",
    LC: "Saint Lucia",
    MF: "Saint Martin (French part)",
    PM: "Saint Pierre and Miquelon",
    VC: "Saint Vincent and the Grenadines",
    WS: "Samoa",
    SM: "San Marino",
    ST: "Sao Tome and Principe",
    SA: "Saudi Arabia",
    SN: "Senegal",
    RS: "Serbia",
    SC: "Seychelles",
    SL: "Sierra Leone",
    SG: "Singapore",
    SX: "Sint Maarten (Dutch part)",
    SK: "Slovakia",
    SI: "Slovenia",
    SB: "Solomon Islands",
    SO: "Somalia",
    ZA: "South Africa",
    GS: "South Georgia and the South Sandwich Islands",
    SS: "South Sudan",
    ES: "Spain",
    LK: "Sri Lanka",
    SD: "Sudan (the)",
    SR: "Suriname",
    SJ: "Svalbard and Jan Mayen",
    SE: "Sweden",
    CH: "Switzerland",
    SY: "Syrian Arab Republic",
    TW: "Taiwan",
    TJ: "Tajikistan",
    TZ: "Tanzania, United Republic of",
    TH: "Thailand",
    TL: "Timor-Leste",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad and Tobago",
    TN: "Tunisia",
    TR: "Turkey",
    TM: "Turkmenistan",
    TC: "Turks and Caicos Islands (the)",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ukraine",
    AE: "United Arab Emirates (the)",
    GB: "United Kingdom of Great Britain and Northern Ireland (the)",
    UM: "United States Minor Outlying Islands (the)",
    US: "United States of America (the)",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VU: "Vanuatu",
    VE: "Venezuela (Bolivarian Republic of)",
    VN: "Viet Nam",
    VG: "Virgin Islands (British)",
    VI: "Virgin Islands (U.S.)",
    WF: "Wallis and Futuna",
    EH: "Western Sahara",
    YE: "Yemen",
    ZM: "Zambia",
    ZW: "Zimbabwe",
    AX: "Åland Islands",
  };

  const countryCities = {
    "AF": ["Kabul", "Kandahar", "Herat", "Mazar-i-Sharif", "Jalalabad", "Kunduz", "Lashkar Gah", "Taloqan", "Puli Khumri", "Ghazni"],
    "AL": ["Tirana", "Durrës", "Vlorë", "Shkodër", "Fier", "Kamëz", "Korçë", "Fier-Çifçi", "Berat", "Lushnjë"],
    "DZ": ["Algiers", "Oran", "Constantine", "Annaba", "Blida", "Batna", "Djelfa", "Sétif", "Sidi Bel Abbès", "Biskra"],
    "AS": ["Pago Pago", "Tafuna", "Nu'uuli", "Pava'ia'i", "Fagatogo", "Leone", "Aūa", "Faleniu", "Futiga", "Vaitogi"],
    "AD": ["Andorra la Vella", "Escaldes-Engordany", "Encamp", "Sant Julià de Lòria", "La Massana", "Santa Coloma", "Ordino", "Canillo"],
    "AO": ["Luanda", "Cabinda", "Huambo", "Lobito", "Benguela", "Kuito", "Malanje", "Namibe", "Soyo", "Uíge"],
    "AI": ["The Valley", "Sandy Ground", "Blowing Point Village", "Stoney Ground", "Island Harbour", "George Hill", "West End Village", "Shoal Bay Village", "East End Village", "The Farrington"],
    "AQ": ["McMurdo Station", "Palmer Station", "Amundsen-Scott South Pole Station", "Scott Base", "Rothera Research Station", "Halley Research Station", "Davis Station", "Mawson Station", "Casey Station", "Vostok Station"],
    "AG": ["Saint John's", "All Saints", "Liberta", "Potter's Village", "Bolands", "Swetes", "Piggotts", "Parham", "Freetown", "Willikies"],
    "AR": ["Buenos Aires", "Córdoba", "Rosario", "Mendoza", "Tucumán", "La Plata", "Mar del Plata", "Salta", "Santa Fe", "San Juan"],
    "AM": ["Yerevan", "Gyumri", "Vanadzor", "Vagharshapat", "Hrazdan", "Abovyan", "Kapan", "Ararat", "Armavir", "Gavar"],
    "AW": ["Oranjestad", "San Nicolaas", "Noord", "Santa Cruz", "Paradera", "Tanki Leendert", "Savaneta", "Angochi", "Pos Chiquito", "Santo Domingo"],
    "AU": ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Canberra", "Newcastle", "Central Coast", "Wollongong"],
    "AT": ["Vienna", "Graz", "Linz", "Salzburg", "Innsbruck", "Klagenfurt", "Villach", "Wels", "Sankt Pölten", "Dornbirn"],
    "AZ": ["Baku", "Ganja", "Sumqayit", "Mingachevir", "Lankaran", "Shirvan", "Nakhchivan", "Shaki", "Yevlakh", "Barda"],
    "BS": ["Nassau", "Lucaya", "Freeport", "West End", "Cooper's Town", "Marsh Harbour", "High Rock", "Andros Town", "Clarence Town", "Dunmore Town"],
    "BH": ["Manama", "Riffa", "Muharraq", "Hamad Town", "A'ali", "Isa Town", "Sitrah", "Budaiya", "Jidhafs", "Al-Malikiyah"],
    "BD": ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Comilla", "Tongi", "Jessore", "Narayanganj", "Sylhet", "Mymensingh"],
    "BB": ["Bridgetown", "Speightstown", "Oistins", "Bathsheba", "Holetown", "Crane", "Blackmans", "Greenland", "Hillaby", "Checker Hall"],
    "BY": ["Minsk", "Gomel", "Mogilev", "Vitebsk", "Hrodna", "Brest", "Babruysk", "Orsha", "Pinsk", "Mazyr", "Salihorsk", "Maladzyechna", "Slutsk", "Zhlobin", "Svetlahorsk"],
    "BE": ["Brussels", "Antwerp", "Ghent", "Charleroi", "Liège", "Bruges", "Namur", "Leuven", "Mons", "Aalst"],
    "BZ": ["Belmopan", "Belize City", "San Ignacio", "Orange Walk Town", "San Pedro Town", "Corozal Town", "Dangriga", "Benque Viejo del Carmen", "Punta Gorda", "Valley of Peace"],
    "BJ": ["Porto-Novo", "Cotonou", "Abomey-Calavi", "Djougou", "Parakou", "Bohicon", "Kandi", "Lokossa", "Ouidah", "Tanguiéta"],
    "BM": ["Hamilton", "Saint George", "Somerset", "Southampton", "Saint George's Parish", "Warwick", "Paget", "Devonshire", "Pembroke", "Smith's"],
    "BT": ["Thimphu", "Phuntsholing", "Punakha", "Jakar", "Gelephu", "Trongsa", "Samdrup Jongkhar", "Wangdue Phodrang", "Paro", "Trashigang"],
    "BO": ["Sucre", "La Paz", "Santa Cruz de la Sierra", "Cochabamba", "El Alto", "Oruro", "Tarija", "Potosí", "Sacaba", "Montero"],
    "BQ": ["Kralendijk", "Dorp Antriol", "Rincon", "Dorp Tera Cora", "Dorp Rincón", "Dorp Nikiboko", "Dorp Sint Willebrordus", "Dorp Lagun", "Dorp Fontein", "Dorp Sint Michiel"],
    "BA": ["Sarajevo", "Banja Luka", "Tuzla", "Zenica", "Mostar", "Bihać", "Bugojno", "Brčko", "Bijeljina", "Prijedor"],
    "BW": ["Gaborone", "Francistown", "Molepolole", "Selebi-Phikwe", "Maun", "Serowe", "Kanye", "Mahalapye", "Mogoditshane", "Mochudi"],
    "BV": [""],
    "BR": ["Brasília", "São Paulo", "Rio de Janeiro", "Salvador", "Fortaleza", "Belo Horizonte", "Manaus", "Curitiba", "Recife", "Goiânia"],
    "IO": ["Diego Garcia"],
    "BN": ["Bandar Seri Begawan", "Kuala Belait", "Seria", "Tutong", "Bangar", "Jerudong", "Muara Town", "Kuala Belait", "Kampong Ayer", "Lumapas"],
    "BG": ["Sofia", "Plovdiv", "Varna", "Burgas", "Ruse", "Stara Zagora", "Pleven", "Sliven", "Dobrich", "Shumen"],
    "BF": ["Ouagadougou", "Bobo-Dioulasso", "Koudougou", "Ouahigouya", "Banfora", "Dédougou", "Tenkodogo", "Gaoua", "Kaya", "Fada N'gourma"],
    "BI": ["Bujumbura", "Muyinga", "Gitega", "Ruyigi", "Ngozi", "Rutana", "Bururi", "Makamba", "Muramvya", "Cibitoke"],
    "CV": ["Praia", "Mindelo", "Assomada", "Espargos", "Tarrafal", "Pedra Badejo", "Santa Maria", "Sal Rei", "Calheta de São Miguel", "Vila do Maio"],
    "KH": ["Phnom Penh", "Sihanoukville", "Battambang", "Siem Reap", "Poipet", "Prey Veng", "Kampong Cham", "Ta Khmau", "Kampong Speu", "Kampot"],
    "CM": ["Yaoundé", "Douala", "Garoua", "Bamenda", "Maroua", "Bafoussam", "Mokolo", "Ngaoundéré", "Bertoua", "Ebolowa"],
    "CA": ["Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Québec City", "Hamilton", "Kitchener"],
    "KY": ["George Town", "West Bay", "Bodden Town", "East End", "North Side", "Sister Islands", "Cayman Brac", "Little Cayman"],
    "CF": ["Bangui", "Bimbo", "Berbérati", "Carnot", "Bambari", "Bria", "Bouar", "Bossangoa", "Nola", "Obo"],
    "TD": ["N'Djamena", "Moundou", "Sarh", "Abéché", "Kélo", "Koumra", "Pala", "Am Timan", "Bongor", "Mongo"],
    "CL": ["Santiago", "Puente Alto", "Viña del Mar", "Antofagasta", "Valparaíso", "Talcahuano", "San Bernardo", "Temuco", "Concepción", "Rancagua"],
    "CN": ["Shanghai", "Beijing", "Guangzhou", "Shenzhen", "Tianjin", "Wuhan", "Dongguan", "Chongqing", "Chengdu", "Nanjing"],
    "CX": ["Flying Fish Cove"],
    "CC": ["West Island", "Home Island"],
    "CO": ["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena", "Cúcuta", "Soledad", "Ibagué", "Bucaramanga", "Soacha"],
    "KM": ["Moroni", "Mutsamudu", "Fomboni", "Domoni", "Tsimbeo", "Moya", "Koki", "Dziani", "Itsandzeni", "Sima"],
    "CD": ["Kinshasa", "Lubumbashi", "Mbuji-Mayi", "Kananga", "Kisangani", "Bukavu", "Tshikapa", "Kolwezi", "Likasi", "Goma", "Kolwezi", "Uvira", "Kikwit", "Kalemie", "Mbandaka", "Matadi"],
    "CG": ["Brazzaville", "Pointe-Noire", "Dolisie", "Nkayi", "Kindamba", "Impfondo", "Bétou", "Loandjili", "Madingou", "Sibiti"],
    "CK": ["Avarua"],
    "CR": ["San José", "Puerto Limón", "Liberia", "Puntarenas", "San Vicente", "Purral", "Turrialba", "San Isidro", "San Rafael Abajo", "Alajuela"],
    "HR": ["Zagreb", "Split", "Rijeka", "Osijek", "Zadar", "Slavonski Brod", "Pula", "Sesvete", "Karlovac", "Varaždin"],
    "CU": ["Havana", "Santiago de Cuba", "Camagüey", "Holguín", "Guantánamo", "Santa Clara", "Las Tunas", "Bayamo", "Cienfuegos", "Pinar del Río"],
    "CW": ["Willemstad", "Sint Michiel Liber", "Dorp Soto", "Dorp Rincon", "Dorp Antriol", "Tera Kora", "Dorp Barber", "Dorp Sint Willebrordus", "Dorp Sint Michiel", "Dorp Santa Catharina"],
    "CY": ["Nicosia", "Limassol", "Larnaca", "Famagusta", "Paphos", "Kyrenia", "Protaras", "Morphou", "Aradippou", "Paralimni"],
    "CZ": ["Prague", "Brno", "Ostrava", "Plzeň", "Liberec", "Olomouc", "Ústí nad Labem", "Hradec Králové", "České Budějovice", "Pardubice"],
    "CI": ["Abidjan", "Bouaké", "Daloa", "Yamoussoukro", "San-Pédro", "Divo", "Korhogo", "Anyama", "Man", "Abobo"],
    "DK": ["Copenhagen", "Aarhus", "Odense", "Aalborg", "Esbjerg", "Randers", "Kolding", "Horsens", "Vejle", "Roskilde"],
    "DJ": ["Djibouti", "Ali Sabieh", "Tadjoura", "Obock", "Dikhil", "Arta", "Holhol", "Dorra", "Gâlâfi", "Loyada"],
    "DM": ["Roseau", "Portsmouth", "Marigot", "Berekua", "Mahaut", "Saint Joseph", "La Plaine", "Grand Bay", "Saint George's", "Wesley"],
    "DO": ["Santo Domingo", "Santiago de los Caballeros", "Santo Domingo Este", "Santo Domingo Oeste", "Santo Domingo Norte", "San Pedro de Macorís", "La Romana", "Bella Vista", "San Cristóbal", "Puerto Plata"],
    "EC": ["Guayaquil", "Quito", "Cuenca", "Santo Domingo de los Colorados", "Machala", "Manta", "Portoviejo", "Duran", "Ambato", "Riobamba"],
    "EG": ["Cairo", "Alexandria", "Giza", "Shubra El Kheima", "Port Said", "Suez", "Luxor", "al-Mansura", "El-Mahalla El-Kubra", "Tanta"],
    "SV": ["San Salvador", "Soyapango", "Santa Ana", "San Miguel", "Mejicanos", "Santa Tecla", "Apopa", "Delgado", "Sonsonate", "San Marcos"],
    "GQ": ["Malabo", "Bata", "Ebebiyín", "Aconibe", "Anisoc", "Luba", "Evinayong", "Mongomo", "Mikomeseng", "Rebola"],
    "ER": ["Asmara", "Keren", "Massawa", "Assab", "Mendefera", "Barentu", "Adi Keyh", "Edd", "Arqo", "Teseney"],
    "EE": ["Tallinn", "Tartu", "Narva", "Pärnu", "Kohtla-Järve", "Viljandi", "Rakvere", "Sillamäe", "Maardu", "Kuressaare"],
    "SZ": ["Mbabane", "Manzini", "Lobamba", "Siteki", "Piggs Peak", "Malkerns", "Mhlume", "Hluti", "Big Bend", "Simunye"],
    "ET": ["Addis Ababa", "Dire Dawa", "Mek'ele", "Adama", "Hawassa", "Bahir Dar", "Jimma", "Gondar", "Debre Markos", "Dessie"],
    "FK": ["Stanley"],
    "FO": ["Tórshavn", "Klaksvík", "Runavík", "Tvøroyri", "Fuglafjørður", "Vestmanna", "Sørvágur", "Miðvágur", "Sandur", "Kollafjørður"],
    "FJ": ["Suva", "Lautoka", "Nadi", "Nasinu", "Labasa", "Ba", "Levuka", "Sigatoka", "Rakiraki", "Savusavu"],
    "FI": ["Helsinki", "Espoo", "Tampere", "Vantaa", "Oulu", "Turku", "Jyväskylä", "Lahti", "Kuopio", "Kouvola"],
    "FR": ["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille"],
    "GF": ["Cayenne", "Saint-Laurent-du-Maroni", "Matoury", "Kourou", "Rémire-Montjoly", "Macouria", "Mana", "Maripasoula", "Papaïchton", "Saint-Georges"],
    "PF": ["Papeete", "Faaa", "Punaauia", "Pirae", "Mahina", "Paea", "Pirae", "Punaauia", "Papeete", "Mahina", "Paea", "Arue", "Pirae", "Faaa", "Papara"],
    "TF": ["Amsterdam", "Saint-Pierre"],
    "GA": ["Libreville", "Port-Gentil", "Franceville", "Oyem", "Moanda", "Mouila", "Lambaréné", "Tchibanga", "Koulamoutou", "Makokou"],
    "GM": ["Banjul", "Serekunda", "Brikama", "Bakau", "Banjulinding", "Farafenni", "Lamin", "Sukuta", "Basse Santa Su", "Gunjur"],
    "GE": ["Tbilisi", "Kutaisi", "Batumi", "Rustavi", "Zugdidi", "Gori", "Poti", "Samtredia", "Khashuri", "Senaki"],
    "DE": ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Dortmund", "Essen", "Leipzig"],
    "GH": ["Accra", "Kumasi", "Tamale", "Takoradi", "Atsiaman", "Tema", "Teshie", "Cape Coast", "Sekondi-Takoradi", "Obuasi"],
    "GI": ["Gibraltar"],
    "GR": ["Athens", "Thessaloniki", "Patras", "Heraklion", "Larissa", "Volos", "Ioannina", "Chania", "Chalcis", "Serres"],
    "GL": ["Nuuk", "Sisimiut", "Ilulissat", "Qaqortoq", "Aasiaat", "Maniitsoq", "Tasiilaq", "Paamiut", "Narsaq", "Nanortalik"],
    "GD": ["St. George's", "Grenville", "Gouyave", "Victoria", "Sauteurs", "Hillsborough", "Guoyave", "Grenville", "Victoria", "Sauteurs"],
    "GP": ["Les Abymes", "Baie-Mahault", "Le Gosier", "Fort-de-France", "Sainte-Anne", "Petit-Bourg", "Le Moule", "Sainte-Rose", "Capesterre-Belle-Eau", "Sainte-Luce"],
    "GU": ["Dededo", "Yigo", "Tamuning", "Mangilao", "Barrigada", "Santa Rita", "Chalan-Pago-Ordot", "Agat", "Yona", "Inarajan"],
    "GT": ["Guatemala City", "Mixco", "Villa Nueva", "Petapa", "San Juan Sacatepéquez", "Quetzaltenango", "Villa Canales", "Escuintla", "Chinautla", "Chimaltenango"],
    "GG": ["Saint Peter Port", "St Martin", "St Sampson", "Vale", "St Andrews", "St Pierre du Bois", "St Saviour", "Castel", "Forest", "St Martins"],
    "GN": ["Conakry", "Nzérékoré", "Kindia", "Kankan", "Kissidougou", "Labe", "Gueckedou", "Boke", "Mamou", "Fria"],
    "GW": ["Bissau", "Bafatá", "Gabú", "Bissora", "Bissorã", "Bubaque", "Cacheu", "Canchungo", "Catió", "Farim"],
    "GY": ["Georgetown", "Linden", "New Amsterdam", "Bartica", "Skeldon", "Rosignol", "Mahaica Village", "Vreed-en-Hoop", "Fort Wellington", "Mahaicony Village"],
    "HT": ["Port-au-Prince", "Carrefour", "Delmas", "Pétion-Ville", "Port-de-Paix", "Jacmel", "Cap-Haïtien", "Léogâne", "Les Cayes", "Saint-Marc"],
    "HM": [""],
    "VA": ["Vatican City"],
    "HN": ["Tegucigalpa", "San Pedro Sula", "Choloma", "La Ceiba", "El Progreso", "Ciudad Choluteca", "Comayagua", "Puerto Cortés", "La Lima", "Danlí"],
    "HK": ["Hong Kong", "Kowloon", "Tsuen Wan", "Yuen Long Kau Hui", "Tuen Mun", "Tai Po", "Sha Tin", "Tung Chung", "Sai Kung", "Yung Shue Wan"],
    "HU": ["Budapest", "Debrecen", "Szeged", "Miskolc", "Pécs", "Győr", "Nyíregyháza", "Kecskemét", "Székesfehérvár", "Szombathely"],
    "IS": ["Reykjavik", "Kópavogur", "Hafnarfjörður", "Akureyri", "Reykjanesbær", "Garðabær", "Mosfellsbær", "Árborg", "Akranes", "Fjarðabyggð"],
    "IN": ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Surat", "Pune", "Jaipur"],
    "ID": ["Jakarta", "Surabaya", "Bandung", "Medan", "Semarang", "Makassar", "Palembang", "Depok", "Tangerang", "South Tangerang"],
    "IR": ["Tehran", "Mashhad", "Isfahan", "Karaj", "Tabriz", "Shiraz", "Ahvaz", "Qom", "Kermanshah", "Urmia"],
    "IQ": ["Baghdad", "Basrah", "Sulaymaniyah", "Erbil", "Najaf", "Karbala", "Nasiriyah", "Amara", "Dhi Qar", "Diwaniyah"],
    "IE": ["Dublin", "Cork", "Limerick", "Galway", "Waterford", "Drogheda", "Dundalk", "Bray", "Swords", "Navan"],
    "IM": ["Douglas", "Peel", "Ramsey", "Castletown", "PortErin", "St. John's", "Laxey", "Onchan", "Baldrine", "Port St Mary", "Ballasalla", "Port Erin", "Andreas", "Ballasalla"],
    "IL": ["Jerusalem", "Tel Aviv", "Haifa", "Rishon LeZion", "Petah Tikva", "Ashdod", "Netanya", "Beer Sheva", "Holon", "Bnei Brak"],
    "IT": ["Rome", "Milan", "Naples", "Turin", "Palermo", "Genoa", "Bologna", "Florence", "Bari", "Catania"],
    "JM": ["Kingston", "New Kingston", "Spanish Town", "Portmore", "Montego Bay", "Mandeville", "May Pen", "Old Harbour", "Linstead", "Half Way Tree"],
    "JP": ["Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Fukuoka", "Kobe", "Kawasaki", "Kyoto", "Saitama"],
    "JE": ["Saint Helier", "St Brelade", "St Clement", "St Helier", "St John", "St Lawrence", "St Martin", "St Mary", "St Ouen", "St Peter"],
    "JO": ["Amman", "Zarqa", "Irbid", "Russeifa", "Al Quwaysimah", "Wadi Al Seer", "Tila Al Ali", "Aqaba", "Madaba", "As Salt"],
    "KZ": ["Almaty", "Nur-Sultan", "Shymkent", "Karaganda", "Aktobe", "Taraz", "Pavlodar", "Ust-Kamenogorsk", "Semey", "Kostanay"],
    "KE": ["Nairobi", "Mombasa", "Nakuru", "Eldoret", "Kisumu", "Thika", "Malindi", "Kitale", "Garissa", "Kakamega"],
    "KI": ["South Tarawa", "Betio Village", "Bikenibeu Village", "Teaoraereke Village", "Butaritari Village", "Bairiki Village", "Temaraia Village", "Bonriki Village", "Rawannawi Village", "Rungata"],
    "KP": ["Pyongyang", "Hamhung", "Chongjin", "Nampo", "Sinuiju", "Wonsan", "Kaesong", "Sariwon", "Haeju", "Kanggye"],
    "KR": ["Seoul", "Busan", "Incheon", "Daegu", "Daejeon", "Gwangju", "Suwon", "Ulsan", "Changwon", "Seongnam"],
    "KW": ["Kuwait City", "Al Ahmadi", "Hawalli", "As Salimiyah", "Sabah as Salim", "Al Farwaniyah", "Al Fahahil", "Kuwait City", "Ar Rumaythiyah", "Ar Riqqah"],
    "KG": ["Bishkek", "Osh", "Jalal-Abad", "Karakol", "Tokmok", "Uzgen", "Balykchy", "Kara-Balta", "Naryn", "Talas"],
    "LA": ["Vientiane", "Pakxe", "Savannakhet", "Luang Prabang", "Xam Nua", "Thakhek", "Muang Xay", "Phonsavan", "Vang Vieng", "Phonthong"],
    "LV": ["Riga", "Daugavpils", "Liepāja", "Jelgava", "Jūrmala", "Ventspils", "Rēzekne", "Valmiera", "Ogre", "Tukums"],
    "LB": ["Beirut", "Tripoli", "Sidon", "Tyre", "Jounieh", "Zahle", "Byblos", "Baalbek", "Bchamoun", "Batroun"],
    "LS": ["Maseru", "Teyateyaneng", "Mafeteng", "Hlotse", "Mohale's Hoek", "Maputsoe", "Quthing", "Qacha's Nek", "Butha-Buthe", "Nako"],
    "LR": ["Monrovia", "Gbarnga", "Kakata", "Bensonville", "Harper", "Voinjama", "Buchanan", "Zwedru", "New Yekepa", "Greenville"],
    "LY": ["Tripoli", "Benghazi", "Misrata", "Tarhuna", "Al Khums", "Az Zawiyah", "Zliten", "Tobruk", "Sabha", "Sirte"],
    "LI": ["Vaduz", "Schellenberg", "Ruggell", "Schaan", "Triesen", "Balzers", "Triesenberg", "Mauren", "Eschen", "Gamprin"],
    "LT": ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys", "Alytus", "Dainava (Kaunas)", "Eiguliai", "Marijampolė", "Mazeikiai"],
    "LU": ["Luxembourg", "Esch-sur-Alzette", "Differdange", "Dudelange", "Ettelbruck", "Diekirch", "Wiltz", "Rumelange", "Grevenmacher", "Echternach"],
    "MO": ["Macau"],
    "MG": ["Antananarivo", "Toamasina", "Antsirabe", "Fianarantsoa", "Mahajanga", "Toliara", "Antsiranana", "Antanifotsy", "Ambovombe", "Ambilobe"],
    "MW": ["Lilongwe", "Blantyre", "Mzuzu", "Zomba", "Kasungu", "Mangochi", "Karonga", "Salima", "Nkhata Bay", "LiLongwe"],
    "MY": ["Kuala Lumpur", "George Town", "Ipoh", "Shah Alam", "Petaling Jaya", "Johor Bahru", "Kuching", "Kota Kinabalu", "Seremban", "Sandakan"],
    "MV": ["Malé", "Fuvahmulah", "Thinadhoo", "Naifaru", "Maafushi", "Kulhudhuffushi", "Hithadhoo", "Dhidhdhoo", "Eydhafushi", "Dhihdhoo", "Funadhoo"],
    "ML": ["Bamako", "Sikasso", "Mopti", "Koutiala", "Kayes", "Ségou", "Gao", "Markala", "Kati", "Kolokani"],
    "MT": ["Birkirkara", "Qormi", "Mosta", "Żabbar", "San Pawl il-Baħar", "Saint John", "Fgura", "Żejtun", "Sliema", "Santa Venera"],
    "MH": ["Majuro", "Ebeye", "Jabor", "Wotje", "Majuro", "Arno", "Mili", "Enewetak", "Kwajalein", "Bikini"],
    "MQ": ["Fort-de-France", "Le Lamentin", "Le Robert", "Sainte-Marie", "Le François", "Ducos", "Saint-Joseph", "Les Trois-Îlets", "Sainte-Luce", "Rivière-Pilote"],
    "MR": ["Nouakchott", "Nouadhibou", "Néma", "Kaédi", "Rosso", "Atar", "Zouérat", "Chinguetti", "Bogue", "Boutilimit"],
    "MU": ["Port Louis", "Beau Bassin-Rose Hill", "Vacoas-Phoenix", "Curepipe", "Quatre Bornes", "Triolet", "Goodlands", "Centre de Flacq", "Bel Air Rivière Sèche", "Mahébourg"],
    "YT": ["Mamoudzou", "Koungou", "Dzaoudzi", "Dembeni", "Sada", "Bandraboua", "Bandrélé", "Chiconi", "Chirongui", "Mtsamboro"],
    "MX": ["Mexico City", "Iztapalapa", "Ecatepec", "Guadalajara", "Puebla", "Ciudad Juárez", "Tijuana", "León", "Gustavo A. Madero", "Zapopan"],
    "FM": ["Weno", "Colonia", "Moen", "Tole", "Kolonia", "Tafunsak", "Fananu", "Penias", "Paata", "Nukuoro"],
    "MD": ["Chișinău", "Tiraspol", "Bălți", "Bender", "Rîbnița", "Cahul", "Ungheni", "Soroca", "Orhei", "Dubăsari"],
    "MC": ["Monaco", "Monte Carlo", "La Condamine", "Fontvieille", "Moneghetti", "Les Moneghetti", "La Condamine", "Jardin Exotique", "Saint Roman", "Larvotto"],
    "MN": ["Ulaanbaatar", "Erdenet", "Darkhan", "Choibalsan", "Ölgii", "Khovd", "Arvaikheer", "Ulaangom", "Hovd", "Moron"],
    "ME": ["Podgorica", "Nikšić", "Herceg Novi", "Pljevlja", "Budva", "Bar", "Berane", "Ulcinj", "Tivat", "Kotor"],
    "MS": ["Plymouth", "Brades"],
    "MA": ["Casablanca", "Rabat", "Fes", "Sale", "Marrakech", "Agadir", "Tangier", "Oujda", "Kenitra", "Tetouan"],
    "MZ": ["Maputo", "Matola", "Beira", "Nampula", "Chimoio", "Nacala Porto", "Quelimane", "Tete", "Xai-Xai", "Maxixe"],
    "MM": ["Yangon", "Mandalay", "Naypyidaw", "Mawlamyine", "Bago", "Pathein", "Monywa", "Sittwe", "Meiktila", "Myeik"],
    "NA": ["Windhoek", "Rundu", "Walvis Bay", "Oshakati", "Swakopmund", "Katima Mulilo", "Grootfontein", "Rehoboth", "Otjiwarongo", "Okahandja"],
    "NR": ["Yaren"],
    "NP": ["Kathmandu", "Pokhara", "Patan", "Biratnagar", "Birgunj", "Dharan", "Bharatpur", "Janakpur", "Dhangadhi", "Butwal"],
    "NL": ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven", "Tilburg", "Groningen", "Almere Stad", "Breda", "Nijmegen"],
    "NC": ["Nouméa", "Mont-Dore", "Dumbéa", "Païta", "Wé", "Koné", "Bourail", "La Foa", "Tontouta", "Pouembout"],
    "NZ": ["Auckland", "Wellington", "Christchurch", "Manukau", "Waitakere", "North Shore", "Hamilton", "Dunedin", "Tauranga", "Lower Hutt"],
    "NI": ["Managua", "León", "Masaya", "Chinandega", "Matagalpa", "Estelí", "Granada", "Ciudad Sandino", "Jinotega", "Juigalpa"],
    "NE": ["Niamey", "Zinder", "Maradi", "Agadez", "Alaghsas", "Tahoua", "Dosso", "Birni N Konni", "Tessaoua", "Gaya"],
    "NG": ["Lagos", "Kano", "Ibadan", "Kaduna", "Port Harcourt", "Benin City", "Maiduguri", "Zaria", "Aba", "Jos"],
    "NU": ["Alofi"],
    "NF": ["Kingston", "Burnt Pine", "Emily Bay", "Cascade", "Anson Bay", "Longridge", "Windward Side", "Steephill", "Balls Point", "Middlegate"],
    "MP": ["Saipan", "San Jose Village", "Garapan", "Dandan", "Kagman", "Chalan Kanoa", "San Roque", "Capitol Hill", "Tanapag", "San Vicente"],
    "NO": ["Oslo", "Bergen", "Trondheim", "Stavanger", "Drammen", "Fredrikstad", "Kristiansand", "Sandnes", "Tromsø", "Sarpsborg", "Skien", "Ålesund", "Sandefjord", "Haugesund", "Tønsberg"],
    "OM": ["Muscat", "Seeb", "Salalah", "Bawshar", "Sohar", "As Suwayq", "Ibri", "Saham", "Barka", "Rustaq"],
    "PK": ["Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Multan", "Hyderabad", "Gujranwala", "Peshawar", "Quetta", "Islamabad"],
    "PW": ["Ngerulmud", "Melekeok"],
    "PS": ["Gaza", "Hebron", "Nablus", "Rafah", "Khan Yunis", "Jabalia", "Dair al Balah", "Beit Lahia", "Deir al-Balah", "Bayt Lahm"],
    "PA": ["Panama City", "San Miguelito", "Tocumen", "David", "Arraiján", "Colón", "Las Cumbres", "La Chorrera", "Pacora", "Santiago"],
    "PG": ["Port Moresby", "Lae", "Arawa", "Mount Hagen", "Popondetta", "Madang", "Kokopo", "Mendi", "Kimbe", "Goroka"],
    "PY": ["Asunción", "Ciudad del Este", "San Lorenzo", "Capiatá", "Lambaré", "Fernando de la Mora", "Limpio", "Ñemby", "Encarnación", "Colonia Mariano Roque Alonso"],
    "PE": ["Lima", "Arequipa", "Callao", "Trujillo", "Chiclayo", "Iquitos", "Huancayo", "Piura", "Chimbote", "Cusco"],
    "PH": ["Quezon City", "Manila", "Caloocan", "Davao City", "Cebu City", "Zamboanga City", "Taguig", "Antipolo", "Pasig", "Cagayan de Oro"],
    "PN": ["Adamstown"],
    "PL": ["Warsaw", "Kraków", "Łódź", "Wrocław", "Poznań", "Gdańsk", "Szczecin", "Bydgoszcz", "Lublin", "Katowice"],
    "PT": ["Lisbon", "Porto", "Vila Nova de Gaia", "Amadora", "Braga", "Setúbal", "Coimbra", "Queluz", "Funchal", "Cacém"],
    "PR": ["San Juan", "Bayamón", "Carolina", "Ponce", "Caguas", "Guaynabo", "Mayagüez", "Trujillo Alto", "Arecibo", "Fajardo"],
    "QA": ["Doha", "Ar Rayyan", "Umm Şalāl Muḩammad", "Al Wakrah", "Al Khawr", "Dukhān", "Al Shamal", "Al Khor", "Madinat ash Shamal", "Al Wukayr"],
    "RE": ["Saint-Denis", "Saint-Paul", "Saint-Pierre", "Le Tampon", "Saint-André", "Saint-Louis", "Le Port", "Saint-Joseph", "Saint-Benoît", "Sainte-Marie"],
    "RO": ["Bucharest", "Cluj-Napoca", "Timișoara", "Iași", "Constanța", "Craiova", "Brașov", "Galați", "Ploiești", "Oradea"],
    "RU": ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod", "Kazan", "Chelyabinsk", "Omsk", "Samara", "Ufa"],
    "RW": ["Kigali", "Butare", "Gitarama", "Ruhengeri", "Gisenyi", "Byumba", "Cyangugu", "Kibuye", "Nyanza", "Kibungo"],
    "BL": ["Gustavia"],
    "SH": ["Jamestown"],
    "KN": ["Basseterre", "Sandy Point Town", "Charlestown", "Dieppe Bay Town", "Gingerland", "Cayon", "Monkey Hill", "Trinity", "Palmetto Point", "Saint Paul’s"],
    "LC": ["Castries", "Bisee", "Vieux Fort"],
    "MF": ["Marigot"],
    "PM": ["Saint-Pierre"],
    "VC": ["Kingstown", "Kingstown Park"],
    "WS": ["Apia", "Asau", "Mulifanua", "Faleula", "Siusega", "Fasitoouta", "Safotu", "Vaiusu", "Satupa‘itea", "Gataivai"],
    "SM": ["San Marino", "Serravalle", "Borgo Maggiore", "Domagnano", "Fiorentino", "Acquaviva", "Faetano", "Chiesanuova", "Montegiardino", "Fiorentino"],
    "ST": ["São Tomé", "Santo António", "Cruz", "São João dos Angolares", "Guadalupe", "Santana", "São Tomé", "Neves", "Água Izé", "Trindade"],
    "SA": ["Riyadh", "Jeddah", "Mecca", "Medina", "Sulţānah", "Dammam", "Ta’if", "Tabuk", "Buraidah", "Khamis Mushait"],
    "SN": ["Dakar", "Grand Dakar", "Thiès", "Pikine", "M'bour", "Ziguinchor", "Touba", "Kaolack", "Saint-Louis", "Rufisque"],
    "RS": ["Belgrade", "Novi Sad", "Niš", "Zemun", "Kragujevac", "Čačak", "Subotica", "Leskovac", "Novi Pazar", "Kraljevo"],
    "SC": ["Victoria", "Anse Etoile", "Anse Royale", "Cascade", "Takamaka", "Baie Lazare", "Beau Vallon", "Bel Ombre", "La Passe", "Grand Anse Mahe"],
    "SL": ["Freetown", "Bo", "Kenema", "Koidu", "Makeni", "Lunsar", "Port Loko", "Kabala", "Kailahun", "Magburaka"],
    "SG": ["Singapore"],
    "SX": ["Philipsburg"],
    "SK": ["Bratislava", "Košice", "Prešov", "Žilina", "Nitra", "Banská Bystrica", "Trnava", "Martin", "Trenčín", "Poprad"],
    "SI": ["Ljubljana", "Maribor", "Celje", "Kranj", "Velenje", "Koper", "Novo Mesto", "Ptuj", "Trbovlje", "Kamnik"],
    "SB": ["Honiara", "Gizo", "Auki", "Malu'u", "Buala", "Kirakira", "Tulagi", "Lata", "Munda", "Taro"],
    "SO": ["Mogadishu", "Hargeisa", "Bosaso", "Berbera", "Kismayo", "Jamaame", "Baidoa", "Burao", "Borama", "Beledweyne"],
    "ZA": ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Port Elizabeth", "Bloemfontein", "Soweto", "East Rand", "Vereeniging", "Pietermaritzburg"],
    "GS": ["Grytviken"],
    "SS": ["Juba", "Wau", "Malakal", "Yei", "Nimule", "Torit", "Yambio", "Bor", "Rumbek", "Aweil"],
    "ES": ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Málaga", "Murcia", "Palma", "Las Palmas de Gran Canaria", "Bilbao"],
    "LK": ["Colombo", "Dehiwala-Mount Lavinia", "Moratuwa", "Jaffna", "Negombo", "Pita Kotte", "Sri Jayawardenepura Kotte", "Kandy", "Trincomalee", "Kalmunai"],
    "SD": ["Khartoum", "Omdurman", "Port Sudan", "Kassala", "Al-Ubayyid", "Gedaref", "Kūstī", "Wad Madani", "El Fasher", "Ad-Damazin"],
    "SR": ["Paramaribo", "Lelydorp", "Brokopondo", "Nieuw Nickerie", "Moengo", "Nieuw Amsterdam", "Mariënburg", "Wageningen", "Albina", "Groningen"],
    "SJ": ["Longyearbyen"],
    "SZ": ["Mbabane", "Manzini", "Lobamba", "Siteki", "Piggs Peak", "Mhlume", "Hluti", "Simunye", "Big Bend", "Malkerns"],
    "SE": ["Stockholm", "Gothenburg", "Malmö", "Uppsala", "Sollentuna", "Södermalm", "Västerås", "Örebro", "Linköping", "Helsingborg"],
    "CH": ["Zurich", "Geneva", "Basel", "Lausanne", "Bern", "Winterthur", "Lucerne", "St. Gallen", "Lugano", "Biel/Bienne"],
    "SY": ["Damascus", "Aleppo", "Homs", "Hama", "Latakia", "Dayr al-Zawr", "Ar Raqqah", "Al Hasakah", "Duma", "Idlib"],
    "TW": ["Taipei", "Kaohsiung", "Taichung", "Tainan", "Banqiao", "Taoyuan City", "Taipei", "Keelung", "Hsinchu", "Changhua City"],
    "TJ": ["Dushanbe", "Khujand", "Kŭlob", "Qŭrghonteppa", "Istaravshan", "Konibodom", "Tursunzoda", "Isfara", "Panjakent", "Kŭlob"],
    "TZ": ["Dar es Salaam", "Dodoma", "Mwanza", "Zanzibar City", "Arusha", "Mbeya", "Morogoro", "Tanga", "Kahama", "Tabora"],
    "TH": ["Bangkok", "Nonthaburi", "Samut Prakan", "Nakhon Ratchasima", "Chiang Mai", "Udon Thani", "Hat Yai", "Pak Kret", "Si Racha", "Phuket"],
    "TL": ["Dili", "Same", "Maliana", "Suai", "Lospalos", "Aileu", "Maliana", "Baucau", "Viqueque", "Manatuto"],
    "TG": ["Lomé", "Sokodé", "Kara", "Palimé", "Atakpamé", "Bassar", "Tsevie", "Aneho", "Sansanné-Mango", "Dapaong"],
    "TK": ["Nukunonu"],
    "TO": ["Nuku'alofa", "Neiafu", "Haveluloto", "Vaini", "Pangai", "‘Ohonua", "Hihifo", "Tatakamotonga", "‘Utulau", "Kolonga"],
    "TT": ["Chaguanas", "San Fernando", "Port of Spain", "Arima", "Marabella", "Point Fortin", "Tunapuna", "Scarborough", "Sangre Grande", "Paradise"],
    "TN": ["Tunis", "Sfax", "Sousse", "Ettadhamen", "Kairouan", "Bizerte", "Gabès", "Aryanah", "Gafsa", "El Mourouj"],
    "TR": ["Istanbul", "Ankara", "Izmir", "Bursa", "Adana", "Gaziantep", "Konya", "Antalya", "Mersin", "Kayseri"],
    "TM": ["Ashgabat", "Turkmenabat", "Daşoguz", "Mary", "Balkanabat", "Bayramaly", "Türkmenbaşy", "Tejen", "Abadan", "Yolöten"],
    "TC": ["Cockburn Town"],
    "TV": ["Funafuti"],
    "UG": ["Kampala", "Gulu", "Lira", "Mbarara", "Jinja", "Bwizibwera", "Mbale", "Mukono", "Kasese", "Masaka", "Entebbe"],
    "UA": ["Kyiv", "Kharkiv", "Odesa", "Dnipro", "Donetsk", "Zaporizhzhia", "Lviv", "Kryvyi Rih", "Mykolaiv", "Mariupol"],
    "AE": ["Dubai", "Abu Dhabi", "Sharjah", "Al Ain", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain", "Khor Fakkan", "Dibba Al-Fujairah"],
    "GB": ["London", "Birmingham", "Manchester", "Glasgow", "Newcastle upon Tyne", "Sheffield", "Liverpool", "Leeds", "Bristol", "Edinburgh"],
    "US": ["New York City", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"],
    "UY": ["Montevideo", "Salto", "Ciudad de la Costa", "Paysandú", "Las Piedras", "Rivera", "Maldonado", "Tacuarembó", "Melo", "Mercedes"],
    "UZ": ["Tashkent", "Namangan", "Samarkand", "Andijan", "Bukhara", "Nukus", "Qarshi", "Jizzax", "Urganch", "Fergana"],
    "VU": ["Port Vila", "Luganville", "Norsup", "Port Olry", "Isangel", "Sola", "Lakatoro", "Saratamata", "Leava", "Lénakel"],
    "VE": ["Caracas", "Maracaibo", "Maracay", "Valencia", "Barquisimeto", "Ciudad Guayana", "Barcelona", "Maturín", "Puerto La Cruz", "Petare"],
    "VN": ["Ho Chi Minh City", "Hanoi", "Haiphong", "Da Nang", "Biên Hòa", "Nha Trang", "Hue", "Can Tho", "Rạch Giá", "Qui Nhơn"],
    "WF": ["Mata-Utu"],
    "EH": ["El-Aaiún"],
    "YE": ["Sana'a", "Al Hudaydah", "Ta'izz", "Aden", "Ibb", "Dhamar", "Al-Mukalla", "Zinjibar", "Sayyan", "Hajjah"],
    "ZM": ["Lusaka", "Kitwe", "Ndola", "Kabwe", "Chingola", "Mufulira", "Luanshya", "Livingstone", "Kasama", "Chipata"],
    "ZW": ["Harare", "Bulawayo", "Chitungwiza", "Mutare", "Gweru", "Epworth", "Kwekwe", "Kadoma", "Masvingo", "Chinhoyi"]
  };

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = "First Name is required";
    if (!formData.lastName) tempErrors.lastName = "Last Name is required";
    if (!formData.username) tempErrors.username = "Username is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      tempErrors.email = "Invalid email address";
    }
    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (!isValidPassword(formData.password)) {
      tempErrors.password = "Password must be between 8 and 20 characters and contain one uppercase letter, one lowercase letter, one digit and one special character.";
    }
    if (!formData.phoneCode) {
      tempErrors.phoneCode = "Country code is required";
    } else if (!isValidCountryCode(formData.phoneCode)) {
      tempErrors.phoneCode = "Invalid country code";
    }
    if (!formData.phoneNumber)
      tempErrors.phoneNumber = "Phone Number is required";
    if (!formData.country) tempErrors.country = "Country is required";
    if (!formData.city) tempErrors.city = "City is required";
    if (!formData.panNo) {
      tempErrors.panNo = "PAN Number is required";
    } else if (!isValidPAN(formData.panNo)) {
      tempErrors.panNo = "Invalid PAN Number";
    }
    if (!formData.aadharNo) {
      tempErrors.aadharNo = "Aadhar Number is required";
    } else if (!isValidAadhar(formData.aadharNo)) {
      tempErrors.aadharNo = "Invalid Aadhar Number";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const isValidCountryCode = (code) => {
    const codeRegex = /^\+[0-9]{2,4}$/;
    return codeRegex.test(code);
  };

  const isValidPAN = (pan) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    return panRegex.test(pan);
  };

  const isValidAadhar = (aadhar) => {
    const aadharRegex = /^\d{12}$/;
    return aadharRegex.test(aadhar);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/details", { state: { formData } });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <span className="error-message">{errors.firstName}</span>
          )}
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && (
            <span className="error-message">{errors.lastName}</span>
          )}
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && (
            <span className="error-message">{errors.username}</span>
          )}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>
        <div>
          <label>Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="button" onClick={togglePasswordVisibility}>
            {showPassword ? "Hide" : "Show"}
          </button>
          
          {errors.password && (
            <span className="error-message">{errors.password}</span>
          )}
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneCode"
            placeholder="Country Code"
            value={formData.phoneCode}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneCode && (
            <span className="error-message">{errors.phoneCode}</span>
          )}
          {errors.phoneNumber && (
            <span className="error-message">{errors.phoneNumber}</span>
          )}
        </div>
        <div>
          <label>Country:</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            {Object.entries(countryListAlpha2).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
          {formData.country && (
        <div>
          <label>City:</label>
          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="">Select City</option>
            {countryCities[formData.country].map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
        </div>
      )}
        </div>
        <div>
          <label>PAN Number:</label>
          <input
            type="text"
            name="panNo"
            value={formData.panNo}
            onChange={handleChange}
          />
          {errors.panNo && (
            <span className="error-message">{errors.panNo}</span>
          )}
        </div>
        <div>
          <label>Aadhar Number:</label>
          <input
            type="text"
            name="aadharNo"
            value={formData.aadharNo}
            onChange={handleChange}
          />
          {errors.aadharNo && (
            <span className="error-message">{errors.aadharNo}</span>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
