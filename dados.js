// dados.js
// Arquivo único de dados (promotores + lojas)
// Não contém lógica, apenas informação

const promotores = {
  "Alan Nogueira": [
    "Atacadão Resende",
    "Dom Atacadista Resende",
    "163 - Havan - Resende",
    "1197 - Lasa - Barra Mansa",
    "230 - Lasa - SHC Resende",
    "606 - Lasa - Patix Mix Resende Express",
    "684 - Lasa - Resende Express",
    "Raia Resende B",
    "Spani Atacadista Resende"
  ],

  "Alexandra": [
    "Assaí Barra da Tijuca",
    "Caçula Barra da Tijuca",
    "100 - Lasa SHC Via Parque RJ",
    "858 - Lasa SHC Uptown Express",
    "Lilipe Festas",
    "Aidan Barra",
    "Upup Doces e Festas LTDA",
    "Vivian Festas Barra da Tijuca"
  ],

  "Rickson": [
    "Assaí - Conviva Barra",
    "DP Barra da Tijuca 5",
    "Drogaria Venancio - Av Embaixador Abelardo Bueno",
    "Drogaria Venancio - Av Érico Veríssimo",
    "Drogaria Venancio - Av Emb. Abelardo Bueno 800",
    "Drogaria Venancio Barra da Tijuca 1",
    "Drogaria Venancio Barra da Tijuca 2",
    "Drogasmil - Av das Américas 3501",
    "Drogasmil Barra da Tijuca Cod. 29",
    "1073 - Lasa - SHC Metropolitano",
    "979 - Lasa - SHC Downtown Express",
    "Prezunic Jardim Oceânico",
    "1417 - PA Barra",
    "Raia RJ Barra da Tijuca K"
  ],

  "Claudenice": [
    "Atacadão Juiz de Fora",
    "224 - Drogaria Araújo Getúlio Vargas",
    "1166 - Lasa - SHC Jardim Norte",
    "14 - Lasa - Juiz de Fora",
    "385 - Lasa - Rui Barbosa",
    "Mart Minas Juiz de Fora",
    "Villefort Juiz de Fora"
  ],

  "Damiao": [
    "Venancio - Recreio dos Bandeirantes",
    "Drogasmil Barra da Tijuca Cod. 45",
    "1033 - Lasa - SHC Américas",
    "5296 - Americanas Express - Av das Américas",
    "534 - Lasa - SHC Rio Design Barra Express",
    "Prezunic Barra",
    "Prezunic Recreio",
    "Pão de Açúcar Recreio Shopping",
    "Raia Recreio dos Bandeirantes - A"
  ],

  "Heyder": [
    "Assaí Bangu",
    "Atacadão Bangu",
    "Caçula Bangu",
    "Drogasmil Bangu",
    "227 - Lasa - SHC Bangu",
    "892 - Lasa - Bangu",
    "Superdoces Bangu"
  ],

  "Leticia": [
    "323 - Assaí Juiz de Fora",
    "Carrefour Juiz de Fora",
    "234 - Drogaria Araújo Alto dos Passos JF",
    "Drogaria Pacheco Alto dos Passos JF",
    "223 - Lasa - SHC Alameda",
    "294 - Lasa - SHC Independência",
    "Mart Minas Teixeiras Juiz de Fora",
    "Tete Festas São Sebastião JF",
    "Tete Festas Floriano Centro JF"
  ],

  "Marcia": [
    "338 - Santa Cruz Varandas",
    "Assaí Cesário de Melo",
    "90 - Lasa - SHC Park Campo Grande",
    "Prezunic Campo Grande"
  ],

  "Maria": [
    "Atacadão Barra da Tijuca",
    "Carrefour Barra da Tijuca",
    "DP Shopping Barra Shopping",
    "Drogaria Pacheco Barra Península",
    "Drogasmil Barra da Tijuca Cod. 66",
    "Farmalife - Barra Shopping",
    "67 - Lasa - SHC BarraShop RJ",
    "Prezunic Marapendi",
    "Raia Barra Shopping",
    "Raia Shopping New York"
  ],

  "Mellysa": [
    "Caçula Campo Grande",
    "Dom Atacadista Campo Grande",
    "Drogaria Pacheco Campo Grande 4",
    "Drogaria Pacheco Campo Grande 5",
    "Drogaria Pacheco Campo Grande 6",
    "Drogaria Pacheco Campo Grande 7",
    "32 - Lasa - Campo Grande RJ",
    "424 - Lasa - Barcelos Domingos",
    "Superdoce Campo Grande",
    "Ufa Campo Grande"
  ],

  "Nathani": [
    "Assaí Freguesia",
    "Drogaria Pacheco - Estrada do Pau Ferro 355",
    "Drogaria Pacheco Freguesia 6",
    "Drogaria Pacheco Pechincha 4",
    "1451 - Lasa Park Jacarepaguá",
    "554 - Lasa - Freguesia Express",
    "77 - Lasa - SHC Shop Rio",
    "Prezunic Anil",
    "Prezunic Freguesia",
    "Prezunic Pechincha - Jacarepaguá"
  ],

  "Patricia": [
    "Atacadão Realengo",
    "Carrefour Sulacap",
    "Dom Atacadista Realengo",
    "Drogaria Pacheco Realengo 2",
    "Drogaria Pacheco Realengo 1",
    "1062 - Lasa - SHC Parque Sulacap",
    "Prezunic Realengo"
  ],

  "Paulo": [
    "Atacadão Jacarepaguá",
    "Caçula - Plaza Taquara",
    "Dom Atacadista Taquara",
    "139 - Lasa - Taquara",
    "1578 - Lasa - SHC Plaza Taquara",
    "Prezunic Jauru",
    "Prezunic Taquara",
    "Ufa Taquara"
  ],

  "Priscila": [
    "Assaí Santa Cruz",
    "Atacadão Santa Cruz",
    "Cia do Doce Santa Cruz",
    "369 - Lasa - SHC Pátio Mix",
    "471 - Lojas Americanas - R. Dr. Monteiro de Azevedo 34 - Itaguaí - RJ",
    "570 - Lasa - SHC Santa Cruz Express",
    "Superdoces Santa Cruz"
  ],

  "William": [
    "Assaí Campo Grande RJ",
    "Atacadão Campo Grande",
    "Carrefour Campo Grande",
    "Drogaria Pacheco Campo Grande 9",
    "Drogasmil Campo Grande Cod. 4",
    "95 - Lasa - SHC Campo Grande"
  ]
};

