const allergyDict = {
    "sulfates": ["sodium lauryl sulfate", "sodium laureth sulfate", "ammonium lauryl sulfate", "sodium coco-sulfate"
        ["laurylsulfate de sodium", "laurethsulfate de sodium", "laurylsulfate d ammonium", "coco-sulfate de sodium"],
    "parabens": ["methylparaben", "ethylparaben", "propylparaben", "butylparaben", "isobutylparaben"],
    "fragrance": ["parfum", "aroma", "fragrance", "linalool", "limonene", "geraniol", "citronellol", "eugenol"],
    "phenoxyethanol": ["phenoxyethanol", "2-phenoxyethanol"],
    "formaldehyde releasers": ["dmdm hydantoin", "imidazolidinyl urea", "diazolidinyl urea", "quaternium-15"],
    "silicones": ["dimethicone", "cyclomethicone", "amodimethicone", "cyclopentasiloxane", "dimethiconol"],
    "isothiazolinones": ["methylisothiazolinone", "methylchloroisothiazolinone"], // Common in shampoos
    "alcohols (drying)": ["alcohol denat", "isopropyl alcohol", "sd alcohol", "ethanol"],
    "alcohols (fatty/safe)": ["cetyl alcohol", "stearyl alcohol", "cetearyl alcohol"],
    "phthalates": ["diethyl phthalate", "dep"],
    "mineral oil": ["paraffinum liquidum", "petrolatum", "cera microcristallina"],
    "lanolin": ["lanolin", "adeps lanae", "lanolin alcohol"],
    "nut oils": ["prunus amygdalus dulcis oil", "arachis hypogaea oil", "butyrospermum parkii butter"], // Almond, Peanut, Shea
    "coconut derivatives": ["cocos nucifera oil", "cocamidopropyl betaine", "coconut acid"],
    "vitamin c": ["ascorbic acid", "sodium ascorbyl phosphate", "ascorbyl palmitate"],
    "vitamin e": ["tocopherol", "tocopheryl acetate", "tocopheryl nicotinate"] 
        };
        
    const allergyDictFr = { 
    "sulfates": ["laurylsulfate de sodium", "laurethsulfate de sodium", "laurylsulfate d ammonium", "coco-sulfate de sodium"],
    "parabènes": ["méthylparabène", "éthylparabène", "propylparabène", "butylparabène", "isobutylparabène"],
    "parfum": ["parfum", "arôme", "fragrance", "linalol", "limonène", "géraniol", "citronellol", "eugénol"],
    "phénoxyéthanol": ["phénoxyéthanol", "2-phénoxyéthanol"],
    "libérateurs de formaldéhyde": ["DMDM hydantoïne", "imidazolidinylurée", "diazolidinylurée", "quaternium-15"],
    "silicones": ["diméthicone", "cyclométhicone", "amodiméthicone", "cyclopentasiloxane", "diméthiconol"],
    "isothiazolinones": ["méthylisothiazolinone", "méthylchloroisothiazolinone"], // Courant dans les shampoings
    "alcools (séchants)" : ["alcool dénaturé", "alcool isopropylique", "alcool SD", "éthanol"],
    "alcools (gras/sûrs)" : ["alcool cétylique", "alcool stéarylique", "alcool cétéarylique"],
    "phtalates": ["phtalate de diéthyle", "DEP"],
    "huile minérale": ["paraffinum liquidum", "petrolatum", "cera microcristallina"],
    "lanoline": ["lanoline", "adeps lanae", "alcool de lanoline"],
    "huiles de noix": ["huile de prunus amygdalus dulcis", "huile d'arachide hypogaea", "beurre de butyrospermum parki"], // Amande, arachide, karité
    "dérivés de noix de coco": ["huile de cocos nucifera", "cocamidopropyl bétaïne"], 
    "vitamine c" : ["acide ascorbique", "phosphate d'ascorbyle de sodium", "palmitate d'ascorbyle"],
    "vitamine e" : ["tocophérol", "acétate de tocophéryle", "nicotinate de tocophéryle"],
};
