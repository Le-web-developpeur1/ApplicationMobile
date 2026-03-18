import { useEffect, useState } from "react";

export function useRegisterDropdowns() {

    //Sexe
    const [openSexe, setOpenSexe] = useState(false);
    const [sexe, setSexe] = useState(null);
    const [sexeItems, setSexeItems] = useState([
        { label: "Homme", value: "Homme" },
        { label: "Femme", value: "Femme" },
    ]);

    //Region
    const [openRegion, setOpenRegion] = useState(false);
    const [region, setRegion] = useState(null);
    const [regionItems, setRegionItems] = useState([
        { label: "Conakry", value: "conakry"},
        { label: "Kindia", value: "kindia"},
        { label: "Mamou", value: "mamou"},
        { label: "Labe", value: "labe"},
        { label: "Faranah", value: "faranah"},
        { label: "Boke", value: "boke"},
        { label: "Siguiri", value: "siguiri"},
        { label: "N'Zérékoré", value: "zerekore"},
    ]);

    //Ville par région
    const VillesParRegion = {
        conakry: [
            { label: "Ratoma", value: "ratoma"},
            { label: "Matoto", value: "matoto"},
            { label: "Dixinn", value: "dixinn"},
            { label: "Kaloum", value: "kaloum"},
            { label: "Sonfonia", value: "sonfonia"},
        ],
        kindia: [
            { label: "Kindia Centre", value: "kindia centre"},
        ],
        mamou: [
            { label: "Mamou Centre", value: "mamou centre"},
            { label: "Dalaba", value: "dalaba"},
            { label: "Pita", value: "pita"},
        ],
        labe: [
            { label: "Labe Centre", value: "labe centre"},
            { label: "Koubia", value: "koubia"},
            { label: "Tougue", value: "tougue"},
            { label: "Tountouroun", value: "tountouroun"},
            { label: "Thiaguelbori", value: "thiaguelbori"},
        ],
        faranah: [
            { label: "Faranah Centre", value: "faranah centre"},
            { lable: "Guékedou", value: "guekedou"},
        ],
        boke: [
            { label: "Boke Centre", value: "boke centre"},
            { label: "Koundara", value: "koundara"},
            { label: "Gaoual", value: "Gaoual"},
        ],
        siguiri: [
            { label: "Siguiri Centre", value: "siguiri centre"},
            { label: "Dabola", value: "dabola"},
            { label: "Kerouane", value: "kerouane"},
        ],
        zerekore: [
            { label: "N'Zérékoré Centre", value: "zerekore centre"},
            { label: "Beyla", value: "beyla"},
            { label: "Lola", value: "lola"},
        ],
    };

    //Ville
    const [openVille, setOpenVille] = useState(false);
    const [ville, setVille] = useState(null);
    const [villeItems, setVilleItems] = useState([]);

    //Mise à jour automatique des villes selon la région
    useEffect(() => {
        if (region) {
            setVille(null);
            setVilleItems(VillesParRegion[region] || []);
        }
    }, [region]);

    //Pièce d'identités
    const [openPiece, setOpenPiece] = useState(false);
    const [piece, setPiece] = useState(null);
    const [pieceItems, setPieceItems] = useState([
        { label: "Carte d'identité", value: "cardId"},
        { label: "Carte Élécteur", value: "electorCard"},
        { label: "Passeport", value: "passPort"},
        { label: "Autre", value: "autre"},
    ]);

    // Profession
    const [openProfession, setOpenProfession] = useState(false);
    const [profession, setProfession] = useState(null);
    const [professionItems, setProfessionItems] = useState([
        { label: "Développeur", value: "dev"},
        { label: "Commerçant", value: "commerce"},
        { label: "Étudiant", value: "etudiant"},
        { label: "Autres", value: "autres"},
    ]);

    return {

        //Sexe
        openSexe, setOpenSexe, sexe, setSexe, sexeItems, setSexeItems,

        // Région
        openRegion, setOpenRegion, region, setRegion, regionItems, setRegionItems,

        //Ville
        openVille, setOpenVille, ville, setVille, villeItems, setVilleItems,

        //Pièce d'identité
        openPiece, setOpenPiece, piece, setPiece, pieceItems, setPieceItems,
        //Profession
        openProfession, setOpenProfession, profession, setProfession, professionItems, setProfessionItems,
    };

}