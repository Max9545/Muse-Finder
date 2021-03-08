const countryData = [
  {
    "countryName": "Fiji",
    "country": "FJ",
    "value": 0
  },
  {
    "countryName": "Tanzania",
    "country": "TZ",
    "value": 1
  },
  {
    "countryName": "Western Sahara",
    "country": "EH",
    "value": 2
  },
  {
    "countryName": "Canada",
    "country": "CA",
    "value": 3
  },
  {
    "countryName": "United States",
    "country": "US",
    "value": 4
  },
  {
    "countryName": "Kazakhstan",
    "country": "KZ",
    "value": 5
  },
  {
    "countryName": "Uzbekistan",
    "country": "UZ",
    "value": 6
  },
  {
    "countryName": "Papua New Guinea",
    "country": "PG",
    "value": 7
  },
  {
    "countryName": "Indonesia",
    "country": "ID",
    "value": 8
  },
  {
    "countryName": "Argentina",
    "country": "AR",
    "value": 9
  },
  {
    "countryName": "Chile",
    "country": "CL",
    "value": 10
  },
  {
    "countryName": "Democratic Republic of the Congo",
    "country": "CD",
    "value": 11
  },
  {
    "countryName": "Somalia",
    "country": "SO",
    "value": 12
  },
  {
    "countryName": "Kenya",
    "country": "KE",
    "value": 13
  },
  {
    "countryName": "Sudan",
    "country": "SD",
    "value": 14
  },
  {
    "countryName": "Chad",
    "country": "TD",
    "value": 15
  },
  {
    "countryName": "Haiti",
    "country": "HT",
    "value": 16
  },
  {
    "countryName": "Dominican Republic",
    "country": "DO",
    "value": 17
  },
  {
    "countryName": "Russia",
    "country": "RU",
    "value": 18
  },
  {
    "countryName": "Bahamas",
    "country": "BS",
    "value": 19
  },
  {
    "countryName": "Falkland Islands",
    "country": "FK",
    "value": 20
  },
  {
    "countryName": "Norway",
    "country": "NO",
    "value": 21
  },
  {
    "countryName": "Greenland",
    "country": "GL",
    "value": 22
  },
  {
    "countryName": "Timor-Leste",
    "country": "TL",
    "value": 23
  },
  {
    "countryName": "South Africa",
    "country": "ZA",
    "value": 24
  },
  {
    "countryName": "Lesotho",
    "country": "LS",
    "value": 25
  },
  {
    "countryName": "Mexico",
    "country": "MX",
    "value": 26
  },
  {
    "countryName": "Uruguay",
    "country": "UY",
    "value": 27
  },
  {
    "countryName": "Brazil",
    "country": "BR",
    "value": 28
  },
  {
    "countryName": "Bolivia",
    "country": "BO",
    "value": 29
  },
  {
    "countryName": "Peru",
    "country": "PE",
    "value": 30
  },
  {
    "countryName": "Colombia",
    "country": "CO",
    "value": 31
  },
  {
    "countryName": "Panama",
    "country": "PA",
    "value": 32
  },
  {
    "countryName": "Costa Rica",
    "country": "CR",
    "value": 33
  },
  {
    "countryName": "Nicaragua",
    "country": "NI",
    "value": 34
  },
  {
    "countryName": "Honduras",
    "country": "HN",
    "value": 35
  },
  {
    "countryName": "El Salvador",
    "country": "SV",
    "value": 36
  },
  {
    "countryName": "Guatemala",
    "country": "GT",
    "value": 37
  },
  {
    "countryName": "Belize",
    "country": "BZ",
    "value": 38
  },
  {
    "countryName": "Venezuela",
    "country": "VE",
    "value": 39
  },
  {
    "countryName": "Guyana",
    "country": "GY",
    "value": 40
  },
  {
    "countryName": "Suriname",
    "country": "SR",
    "value": 41
  },
  {
    "countryName": "France",
    "country": "FR",
    "value": 42
  },
  {
    "countryName": "Ecuador",
    "country": "EC",
    "value": 43
  },
  {
    "countryName": "Puerto Rico",
    "country": "PR",
    "value": 44
  },
  {
    "countryName": "Jamaica",
    "country": "JM",
    "value": 45
  },
  {
    "countryName": "Cuba",
    "country": "CU",
    "value": 46
  },
  {
    "countryName": "Zimbabwe",
    "country": "ZW",
    "value": 47
  },
  {
    "countryName": "Botswana",
    "country": "BW",
    "value": 48
  },
  {
    "countryName": "Namibia",
    "country": "NA",
    "value": 49
  },
  {
    "countryName": "Senegal",
    "country": "SN",
    "value": 50
  },
  {
    "countryName": "Mali",
    "country": "ML",
    "value": 51
  },
  {
    "countryName": "Mauritania",
    "country": "MR",
    "value": 52
  },
  {
    "countryName": "Benin",
    "country": "BJ",
    "value": 53
  },
  {
    "countryName": "Niger",
    "country": "NE",
    "value": 54
  },
  {
    "countryName": "Nigeria",
    "country": "NG",
    "value": 55
  },
  {
    "countryName": "Cameroon",
    "country": "CM",
    "value": 56
  },
  {
    "countryName": "Togo",
    "country": "TG",
    "value": 57
  },
  {
    "countryName": "Ghana",
    "country": "GH",
    "value": 58
  },
  {
    "countryName": "Côted'Ivoire",
    "country": "CI",
    "value": 59
  },
  {
    "countryName": "Guinea",
    "country": "GN",
    "value": 60
  },
  {
    "countryName": "Guinea-Bissau",
    "country": "GW",
    "value": 61
  },
  {
    "countryName": "Liberia",
    "country": "LR",
    "value": 62
  },
  {
    "countryName": "Sierra Leone",
    "country": "SL",
    "value": 63
  },
  {
    "countryName": "Burkina Faso",
    "country": "BF",
    "value": 64
  },
  {
    "countryName": "Central African Republic",
    "country": "CF",
    "value": 65
  },
  {
    "countryName": "Republic of the Congo",
    "country": "CG",
    "value": 66
  },
  {
    "countryName": "Gabon",
    "country": "GA",
    "value": 67
  },
  {
    "countryName": "Equatorial Guinea",
    "country": "GQ",
    "value": 68
  },
  {
    "countryName": "Zambia",
    "country": "ZM",
    "value": 69
  },
  {
    "countryName": "Malawi",
    "country": "MW",
    "value": 70
  },
  {
    "countryName": "Mozambique",
    "country": "MZ",
    "value": 71
  },
  {
    "countryName": "Eswatini",
    "country": "SZ",
    "value": 72
  },
  {
    "countryName": "Angola",
    "country": "AO",
    "value": 73
  },
  {
    "countryName": "Burundi",
    "country": "BI",
    "value": 74
  },
  {
    "countryName": "Israel",
    "country": "IL",
    "value": 75
  },
  {
    "countryName": "Lebanon",
    "country": "LB",
    "value": 76
  },
  {
    "countryName": "Madagascar",
    "country": "MG",
    "value": 77
  },
  {
    "countryName": "Palestine",
    "country": "PS",
    "value": 78
  },
  {
    "countryName": "The Gambia",
    "country": "GM",
    "value": 79
  },
  {
    "countryName": "Tunisia",
    "country": "TN",
    "value": 80
  },
  {
    "countryName": "Algeria",
    "country": "DZ",
    "value": 81
  },
  {
    "countryName": "Jordan",
    "country": "JO",
    "value": 82
  },
  {
    "countryName": "United Arab Emirates",
    "country": "AE",
    "value": 83
  },
  {
    "countryName": "Qatar",
    "country": "QA",
    "value": 84
  },
  {
    "countryName": "Kuwait",
    "country": "KW",
    "value": 85
  },
  {
    "countryName": "Iraq",
    "country": "IQ",
    "value": 86
  },
  {
    "countryName": "Oman",
    "country": "OM",
    "value": 87
  },
  {
    "countryName": "Vanuatu",
    "country": "VU",
    "value": 88
  },
  {
    "countryName": "Cambodia",
    "country": "KH",
    "value": 89
  },
  {
    "countryName": "Thailand",
    "country": "TH",
    "value": 90
  },
  {
    "countryName": "Lao PDR",
    "country": "LA",
    "value": 91
  },
  {
    "countryName": "Myanmar",
    "country": "MM",
    "value": 92
  },
  {
    "countryName": "Vietnam",
    "country": "VN",
    "value": 93
  },
  {
    "countryName": "Dem. Rep. Korea",
    "country": "KP",
    "value": 94
  },
  {
    "countryName": "Republic of Korea",
    "country": "KR",
    "value": 95
  },
  {
    "countryName": "Mongolia",
    "country": "MN",
    "value": 96
  },
  {
    "countryName": "India",
    "country": "IN",
    "value": 97
  },
  {
    "countryName": "Bangladesh",
    "country": "BD",
    "value": 98
  },
  {
    "countryName": "Bhutan",
    "country": "BT",
    "value": 99
  },
  {
    "countryName": "Nepal",
    "country": "NP",
    "value": 100
  },
  {
    "countryName": "Pakistan",
    "country": "PK",
    "value": 101
  },
  {
    "countryName": "Afghanistan",
    "country": "AF",
    "value": 102
  },
  {
    "countryName": "Tajikistan",
    "country": "TJ",
    "value": 103
  },
  {
    "countryName": "Kyrgyzstan",
    "country": "KG",
    "value": 104
  },
  {
    "countryName": "Turkmenistan",
    "country": "TM",
    "value": 105
  },
  {
    "countryName": "Iran",
    "country": "IR",
    "value": 106
  },
  {
    "countryName": "Syria",
    "country": "SY",
    "value": 107
  },
  {
    "countryName": "Armenia",
    "country": "AM",
    "value": 108
  },
  {
    "countryName": "Sweden",
    "country": "SE",
    "value": 109
  },
  {
    "countryName": "Belarus",
    "country": "BY",
    "value": 110
  },
  {
    "countryName": "Ukraine",
    "country": "UA",
    "value": 111
  },
  {
    "countryName": "Poland",
    "country": "PL",
    "value": 112
  },
  {
    "countryName": "Austria",
    "country": "AT",
    "value": 113
  },
  {
    "countryName": "Hungary",
    "country": "HU",
    "value": 114
  },
  {
    "countryName": "Moldova",
    "country": "MD",
    "value": 115
  },
  {
    "countryName": "Romania",
    "country": "RO",
    "value": 116
  },
  {
    "countryName": "Lithuania",
    "country": "LT",
    "value": 117
  },
  {
    "countryName": "Latvia",
    "country": "LV",
    "value": 118
  },
  {
    "countryName": "Estonia",
    "country": "EE",
    "value": 119
  },
  {
    "countryName": "Germany",
    "country": "DE",
    "value": 120
  },
  {
    "countryName": "Bulgaria",
    "country": "BG",
    "value": 121
  },
  {
    "countryName": "Greece",
    "country": "GR",
    "value": 122
  },
  {
    "countryName": "Turkey",
    "country": "TR",
    "value": 123
  },
  {
    "countryName": "Albania",
    "country": "AL",
    "value": 124
  },
  {
    "countryName": "Croatia",
    "country": "HR",
    "value": 125
  },
  {
    "countryName": "Switzerland",
    "country": "CH",
    "value": 126
  },
  {
    "countryName": "Luxembourg",
    "country": "LU",
    "value": 127
  },
  {
    "countryName": "Belgium",
    "country": "BE",
    "value": 128
  },
  {
    "countryName": "Netherlands",
    "country": "NL",
    "value": 129
  },
  {
    "countryName": "Portugal",
    "country": "PT",
    "value": 130
  },
  {
    "countryName": "Spain",
    "country": "ES",
    "value": 131
  },
  {
    "countryName": "Ireland",
    "country": "IE",
    "value": 132
  },
  {
    "countryName": "New Caledonia",
    "country": "NC",
    "value": 133
  },
  {
    "countryName": "Solomon Islands",
    "country": "SB",
    "value": 134
  },
  {
    "countryName": "New Zealand",
    "country": "NZ",
    "value": 135
  },
  {
    "countryName": "Australia",
    "country": "AU",
    "value": 136
  },
  {
    "countryName": "Sri Lanka",
    "country": "LK",
    "value": 137
  },
  {
    "countryName": "China",
    "country": "CN",
    "value": 138
  },
  {
    "countryName": "Taiwan",
    "country": "TW",
    "value": 139
  },
  {
    "countryName": "Italy",
    "country": "IT",
    "value": 140
  },
  {
    "countryName": "Denmark",
    "country": "DK",
    "value": 141
  },
  {
    "countryName": "United Kingdom",
    "country": "GB",
    "value": 142
  },
  {
    "countryName": "Iceland",
    "country": "IS",
    "value": 143
  },
  {
    "countryName": "Azerbaijan",
    "country": "AZ",
    "value": 144
  },
  {
    "countryName": "Georgia",
    "country": "GE",
    "value": 145
  },
  {
    "countryName": "Philippines",
    "country": "PH",
    "value": 146
  },
  {
    "countryName": "Malaysia",
    "country": "MY",
    "value": 147
  },
  {
    "countryName": "Brunei Darussalam",
    "country": "BN",
    "value": 148
  },
  {
    "countryName": "Slovenia",
    "country": "SI",
    "value": 149
  },
  {
    "countryName": "Finland",
    "country": "FI",
    "value": 150
  },
  {
    "countryName": "Slovakia",
    "country": "SK",
    "value": 151
  },
  {
    "countryName": "Czech Republic",
    "country": "CZ",
    "value": 152
  },
  {
    "countryName": "Eritrea",
    "country": "ER",
    "value": 153
  },
  {
    "countryName": "Japan",
    "country": "JP",
    "value": 154
  },
  {
    "countryName": "Paraguay",
    "country": "PY",
    "value": 155
  },
  {
    "countryName": "Yemen",
    "country": "YE",
    "value": 156
  },
  {
    "countryName": "Saudi Arabia",
    "country": "SA",
    "value": 157
  },
  {
    "countryName": "Northern Cyprus",
    "country": "CYP",
    "value": 158
  },
  {
    "countryName": "Cyprus",
    "country": "CY",
    "value": 159
  },
  {
    "countryName": "Morocco",
    "country": "MA",
    "value": 160
  },
  {
    "countryName": "Egypt",
    "country": "EG",
    "value": 161
  },
  {
    "countryName": "Libya",
    "country": "LY",
    "value": 162
  },
  {
    "countryName": "Ethiopia",
    "country": "ET",
    "value": 163
  },
  {
    "countryName": "Djibouti",
    "country": "DJ",
    "value": 164
  },
  {
    "countryName": "Somaliland",
    "country": "SOM",
    "value": 165
  },
  {
    "countryName": "Uganda",
    "country": "UG",
    "value": 166
  },
  {
    "countryName": "Rwanda",
    "country": "RW",
    "value": 167
  },
  {
    "countryName": "Bosnia and Herzegovina",
    "country": "BA",
    "value": 168
  },
  {
    "countryName": "Macedonia",
    "country": "MK",
    "value": 169
  },
  {
    "countryName": "Serbia",
    "country": "RS",
    "value": 170
  },
  {
    "countryName": "Montenegro",
    "country": "ME",
    "value": 171
  },
  {
    "countryName": "Kosovo",
    "country": "XK",
    "value": 172
  },
  {
    "countryName": "Trinidad and Tobago",
    "country": "TT",
    "value": 173
  },
  {
    "countryName": "South Sudan",
    "country": "SS",
    "value": 174
  }
]

export default countryData