export type RootStackParamList = { 
    Tabs: undefined;
    DetailBeneficiare?: {
        phone: string;
        name: string;
    }; 
    Confirmation: { 
        phone: string; 
        name: string; 
        amount: string; 
    }; 
    National: undefined; 
    International: undefined; 
    Settings: undefined; 
    Profile: undefined;
    Transfert: undefined;
    RecuPaiement: {
        phone: string;
        name: string;
        formAmount: string;
        frais: string;
        date: string;
    };
    DetailTransactions: { 
        headerTitle: string;
        montantE: string;
        montantR: string;
        typeTransfert: "entrant" | "sortant";
    };
    DetailBeneficiareOm: {
        headerTitle: string;
        amount: string;
        fraisValue: Number;
        tauxValue: Number;
        montantFacturer: Number;
        typeTransfert: "entrant" | "sortant";
        phone?: string;
        name?: string;
    };
    ConfirmationOm: {
        amount: string;
        fraisValue: Number;
        tauxValue: Number;
        montantFacturer: Number;
        typeTransfert: "entrant" | "sortant";
        phone: string;
        name: string;
    };
    OptionTransfert: {
        country: string;
    };
    DetailsInternational: {
        country: string;
        phone: string;
        name: string;
    };
    ConfirmationInter: {
        gnf: string;
        xof: string;
        fraisValue: Number;
        tauxValue: Number;
        phone: string;
        name: string;
    };
    RecuPaiementInter: {
        gnf: string;
        xof: string;
        frais: string;
        taux: Number;
        phone: string;
        name: string;
    };
    PaiementOption: undefined;
    PaiementFacture: undefined;
    ProduitsDigitaux: undefined;
    DetailPaiement: {
        typeFacture: "postpaye" | "prepaye";
    };
    ContactScreen: {
        returnTo: keyof RootStackParamList;
    };
    DetailDebit: {
        amount?: string;
        name?: string;
        headerTitle: string;
    };
    PaiementProduit: undefined;
    GiftCard: undefined;
    ESim: undefined;
    ESimService: {
        country: string;
    };
    GiftCardService: {
        country: string;
    };
    DetailGiftCard: {
        country: string;
        name: string;
        logo: string;
    };
    GiftCardBenef: {
        country: string;
        name: string;
        euroValue?: string;
        gnfValue?: string;
        euro?: string;
        gnf?: string;
    };
    GiftCardConfirm: {
        name: string;
        euroValue?: string;
        gnfValue?: string;
        euro?: string;
        gnf?: string;
        nom: string;
        email: string;
    };
    DetailEsim: {
        name: string;
        country?: string;
        logo: string;
    };
    EsimBenef: {
        country: string;
        name: string;
        euro?: string;
        gnf?: string;
    };
    EsimConfirm: {
        name: string;
        euro: string;
        gnf: string;
        nom: string;
        email: string;
    };
    CreditOption: undefined;
    CreditDetail: {
        typeCredit?: "pour moi" | "pour autre";
        phone?: string;
    };
    CreditConfirm: {
        amount?: string;
        phone: string;
    };
    DetailMarchand: {
        phone?: string;
        name?: string;
    };
    QrScanner:undefined;
    ConfirmMarchand: {
        name: string;
        amount: string;
        phone: string;
    };
    RetraitDetail: {
        phone?: string;
        name?: string;
    };
    RechargeOption: undefined;
    RechargeDetail?: {
        phone: string;
        name: string;
    };
    Overlay: undefined;
    ServiceOTP: undefined;
    FraisScreen: undefined;
    LangueScreen: undefined;
    HistoriqueScreen: {
        activTab: string;
    };
    ServicesPartenaire: undefined;
    About: undefined;
    PasswordChange: undefined;
    UpdatePicture: undefined;
    TransactionsLimit: undefined;
    FermetureCompte: undefined;
    Disconnected: undefined;
    Confidentialite: undefined;
    RecuTransaction: {
        name: string,
        phone: string,
        amount: string,
        date: string,
        type: string;
        status: string;
    };
    WebScreen: {
        url: string;
    };
    Notifications: undefined;
    Profil: undefined;
};

export type TabParamList = {
    Home: undefined;
    Services: undefined;
    Notifications: undefined;
};
  