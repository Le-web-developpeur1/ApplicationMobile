import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './AppNavigator';
import { RootStackParamList } from './types';

import Confirmation from '@/components/transfert/beneficiare/cashmoov/Confirmation';
import DetailBeneficiare from '@/components/transfert/beneficiare/cashmoov/DetailBeneficiaire';
import ConfirmationOm from '@/components/transfert/beneficiare/orange/ConfirmationOm';
import DetailBeneficiareOm from '@/components/transfert/beneficiare/orange/DetailBeneficiaireOm';
import DetailTranscations from '@/components/transfert/beneficiare/orange/DetailTransactions';
import International from '@/components/transfert/international/International';
import National from '@/components/transfert/national/National';
import RecuPaiement from '@/components/transfert/RecuPaiement';
import TransactionsScreen from '@/screen/transactions/TransactionsScreen';
import OptionTransfert from '@/components/transfert/international/OptionTransfert';
import DetailsInternational from '@/components/transfert/international/details/DetailsInternational';
import RecuPaiementInter from '@/components/transfert/international/details/RecuPaiementInter';
import ConfirmationInter from '@/components/transfert/international/details/ConfirmationInter';
import PaiementScreen from '@/screen/payment/PaymentScreen';
import PaiementFacture from '@/components/paiements/facture/PaiementFacture';
import DetailPaiement from '@/components/paiements/facture/details/DetailPaiement';
import ContactScreen from '@/screen/ContactScreen';
import DetailDebit from '@/components/paiements/facture/details/DetailDebit';
import PaiementProduit from '@/components/paiements/produits/PaiementProduit';
import GiftCard from '@/components/paiements/produits/giftcard/GiftCard';
import ESim from '@/components/paiements/produits/esim/ESim';
import ESimService from '@/components/paiements/produits/esim/EsimService';
import GiftCardService from '@/components/paiements/produits/giftcard/GiftCardService';
import DetailGiftcard from '@/components/paiements/produits/giftcard/DetailGiftCard';
import GiftCardBenef from '@/components/paiements/produits/giftcard/GiftCardBenef';
import GiftCardConfirm from '@/components/paiements/produits/giftcard/GiftCardConfirm';
import DetailEsim from '@/components/paiements/produits/esim/DetailEsim';
import EsimBenef from '@/components/paiements/produits/esim/EsimBenef';
import EsimConfirm from '@/components/paiements/produits/esim/EsimConfirm';
import CreditOption from '@/components/credit/CreditOption';
import CreditDetail from '@/components/credit/CreditDetail';
import CreditConfirm from '@/components/credit/CreditConfirm';
import DetailMarchand from '@/components/paiements/marchand/DetailMarchand';
import QrScanner from '@/features/qrScanner';
import ConfirmMarchand from '@/components/paiements/marchand/ConfirmMarchand';
import RetraitDetail from '@/components/retrait/RetraitDetail';
import RechargeOption from '@/components/recharge/RechargeOption';
import RechargeDetail from '@/components/recharge/RechargeDetail';
import { Overlay } from '@/components/Overlay';
import { ServiceOTP } from '@/screen/lock/ServiceOTP';
import FraisScreen from '@/screen/profil/frais/FraisScreen';
import LangueScreen from '@/screen/profil/langue/LangueScreen';
import HistoriqueScreen from '@/screen/transactions/HistoriqueScreen';
import ServicesScreen from '@/screen/services/ServicesScreen';
import About from '@/screen/profil/About';
import PasswordChange from '@/screen/profil/PasswordChange';
import UpdatePicture from '@/screen/profil/UpdatePicture';
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppWithTabs() {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Tabs' component={AppNavigator}/>

                <Stack.Screen name='Overlay' component={Overlay} options={{ animation: "fade", animationDuration: 500}}/>
                <Stack.Screen name='ServiceOTP' component={ServiceOTP} options={{ animation: "fade", animationDuration: 500}}/>

                                {/** Ecrans Permissions */}
                <Stack.Screen name='ContactScreen' component={ContactScreen} />
                <Stack.Screen name='QrScanner' component={QrScanner}/>

                                {/** Transfert */}
                <Stack.Screen name='Transfert' component={TransactionsScreen} />
                <Stack.Screen name='OptionTransfert' component={OptionTransfert} />
                <Stack.Screen name='ServicesPartenaire' component={ServicesScreen}/>
                <Stack.Screen name='HistoriqueScreen' component={HistoriqueScreen}/>

                            {/** Transfert National */}
                <Stack.Screen name='National' component={National} />
                <Stack.Screen name='DetailBeneficiare' component={DetailBeneficiare} />
                <Stack.Screen name='Confirmation' component={Confirmation} />
                <Stack.Screen name='RecuPaiement' component={RecuPaiement} />

                            {/** Transfert National OM */}
                <Stack.Screen name='DetailTransactions' component={DetailTranscations} />
                <Stack.Screen name='DetailBeneficiareOm' component={DetailBeneficiareOm} />
                <Stack.Screen name='ConfirmationOm' component={ConfirmationOm} />
                
                            {/** Transfert international */}
                <Stack.Screen name='International' component={International} />
                <Stack.Screen name='DetailsInternational' component={DetailsInternational} />
                <Stack.Screen name='ConfirmationInter' component={ConfirmationInter} />
                <Stack.Screen name='RecuPaiementInter' component={RecuPaiementInter} />

                            {/** Paiement */}
                <Stack.Screen name='PaiementOption' component={PaiementScreen}/>
                
                            {/** Paiement Facture */}
                <Stack.Screen name='PaiementFacture' component={PaiementFacture}/>
                <Stack.Screen name='DetailPaiement' component={DetailPaiement}/>
                <Stack.Screen name='DetailDebit' component={DetailDebit}/>

                            {/** Paiements Produits digitaux */}
                <Stack.Screen name='PaiementProduit' component={PaiementProduit}/>

                            {/** E-Sim */}
                <Stack.Screen name='ESim' component={ESim}/>
                <Stack.Screen name='ESimService' component={ESimService}/>
                <Stack.Screen name='DetailEsim' component={DetailEsim}/>
                <Stack.Screen name='EsimBenef' component={EsimBenef}/>
                <Stack.Screen name='EsimConfirm' component={EsimConfirm}/>

                            {/** Gift Card */}
                <Stack.Screen name='GiftCard' component={GiftCard}/>
                <Stack.Screen name='GiftCardService' component={GiftCardService}/>
                <Stack.Screen name='DetailGiftCard' component={DetailGiftcard}/>
                <Stack.Screen name='GiftCardBenef' component={GiftCardBenef}/>
                <Stack.Screen name='GiftCardConfirm' component={GiftCardConfirm}/>

                            {/** Achat de crédit */}
                <Stack.Screen name='CreditOption' component={CreditOption}/>
                <Stack.Screen name='CreditDetail' component={CreditDetail}/>
                <Stack.Screen name='CreditConfirm' component={CreditConfirm}/>

                            {/** Paiement marchand */}
                <Stack.Screen name='DetailMarchand' component={DetailMarchand}/>
                <Stack.Screen name='ConfirmMarchand' component={ConfirmMarchand}/>

                            {/** Retrait */}
                <Stack.Screen name='RetraitDetail' component={RetraitDetail}/>

                            {/** Rechargement */}
                <Stack.Screen name='RechargeOption' component={RechargeOption}/>
                <Stack.Screen name='RechargeDetail' component={RechargeDetail}/>

                            {/** Profil */}
                <Stack.Screen name='FraisScreen' component={FraisScreen}/>
                <Stack.Screen name='LangueScreen' component={LangueScreen}/>
                <Stack.Screen name='About' component={About}/>
                <Stack.Screen name='PasswordChange' component={PasswordChange}/>
                <Stack.Screen name='UpdatePicture' component={UpdatePicture}/>

            </Stack.Navigator>
    );
}

