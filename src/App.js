import { lazy, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import Loader from './comp/Common/Loader';

const Register = lazy(() => import("./components/Auth/Register"))
const Login = lazy(() => import("./components/Auth/Login"))

const FarmerTransactionHistory = lazy(() => import("./comp/Farmer/TransactionHistory"))
const FarmerTrainingUpdate = lazy(() => import("./comp/Farmer//TrainingUpdate"))
const FarmerCropAdvisory2 = lazy(() => import("./comp/Farmer/CropAdvisory2"))
const FarmerDashboard = lazy(() => import("./comp/Farmer/DashBoard"))
const SellingPrice = lazy(() => import("./pages/farmer/SellingPrice"))
const CropAdvisory = lazy(() => import("./pages/farmer/CropAdvisory"))
const Settings = lazy(() => import("./pages/farmer/Settings"))
const Support = lazy(() => import("./pages/farmer/Support"))
const Store = lazy(() => import("./pages/farmer/Store"))
const Loan = lazy(() => import("./pages/farmer/Loan"))
const FarmerWrapper = lazy(() => import("./comp/Farmer"))

const FarmerInformation = lazy(() => import("./pages/fpo/FarmerInformation"))
const CorporateCustomer = lazy(() => import("./pages/fpo/CorporateCustomer"))
const LacProcurement = lazy(() => import("./pages/fpo/LacProcurement"))
const FpoDashboard = lazy(() => import("./pages/fpo/FpoDashboard"))
const FarmerPage = lazy(() => import("./pages/fpo/FarmerPage"))
const LabTesting = lazy(() => import("./pages/fpo/LabTesting"))
const FarmerLoan = lazy(() => import("./pages/fpo/FarmerLoan"))
const FpoStore = lazy(() => import("./pages/fpo/FpoStore"))
const Supports = lazy(() => import("./pages/fpo/Supports"))
const FpoLoan = lazy(() => import("./pages/fpo/FpoLoan"))
const Setting = lazy(() => import("./pages/fpo/Setting"))
const FpoWrapper = lazy(() => import("./comp/Fpo"))

const CorporateClient = lazy(() => import("./pages/Admin/CorporateClient"))
const AdminDashboard = lazy(() => import("./pages/Admin/AdminDashboard"))
const Samunnati = lazy(() => import("./pages/Admin/Samunnati"))
const Farmer = lazy(() => import("./pages/Admin/Farmer"))
const NISA = lazy(() => import("./pages/Admin/NISA"))
const FPO = lazy(() => import("./pages/Admin/FPO"))
const AdminWrapper = lazy(() => import("./comp/Admin"))

const NISATrainingUpdate = lazy(() => import("./pages/NISA/TrainingUpdate"))
const NISACropAdvisory = lazy(() => import("./pages/NISA/CropAdvisory"))
const NISALabTesting = lazy(() => import("./pages/NISA/LabTesting"))
const NISASettings = lazy(() => import("./pages/NISA/Settings"))
const NISASupport = lazy(() => import("./pages/NISA/Supports"))
const NisaWrapper = lazy(() => import("./comp/Nisa"))

const SammunatiFarmerSubLoanPage = lazy(() => import("./pages/Samunnati/FarmerSubLoanPage"))
const SammunatiFPOSubLoanPage = lazy(() => import("./pages/Samunnati/FpoSubLoanPage"))
const SamunnatiFarmerLoan = lazy(() => import("./pages/Samunnati/FarmerLoan"))
const SammunatiSettings = lazy(() => import("./pages/Samunnati/Settings"))
const SamunnatiFPOLoan = lazy(() => import("./pages/Samunnati/FpoLoan"))
const SamunnatiFPOInfo = lazy(() => import("./pages/Samunnati/FpoInfo"))
const SammunatiFPOPage = lazy(() => import("./pages/Samunnati/FpoPage"))
const SammunatiSupport = lazy(() => import("./pages/Samunnati/Support"))
const SamunnatiWrapper = lazy(() => import("./comp/Samunnati"))

const CorporateClientLacBidding = lazy(() => import("./pages/CorporateClient/CCLACBid"))
const CorporateClientSettings = lazy(() => import("./pages/CorporateClient/Settings"))
const CorporateSupport = lazy(() => import("./pages/CorporateClient/Support"))
const CorporateClientWrapper = lazy(() => import("./comp/CorporateClient"))


function App() {
  return (
    <Suspense fallback={<Loader wrapperCls='h-screen' />}>
      <Routes>
        {/* Farmer login & Signup route */}
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Register />} />

        {/* farmer route */}
        <Route path="farmer" element={<FarmerWrapper />}>
          <Route path="transaction-history" element={<FarmerTransactionHistory />} />
          <Route path="crop-advisory2" element={<FarmerCropAdvisory2 />} />
          <Route path="training" element={<FarmerTrainingUpdate />} />
          <Route path="dashboard" element={<FarmerDashboard />} />
        </Route>

        <Route path="/farmer/loan" element={<Loan />} />
        <Route path="/farmer/store" element={<Store />} />
        <Route path="/farmer/selling-price" element={<SellingPrice />} />
        <Route path="/farmer/settings" element={<Settings />} />
        <Route path="/farmer/support" element={<Support />} />
        <Route path="/farmer/crop-advisory" element={<CropAdvisory />} />


        {/* FPO route */}
        <Route path="fpo" element={<FpoWrapper />} />
        <Route path="/fpo/dashboard" element={<FpoDashboard />} />
        <Route path="/fpo/farmer" element={<FarmerPage />} />
        <Route path="/fpo/farmer-information" element={<FarmerInformation />} />
        <Route path="/fpo/fpo-store" element={<FpoStore />} />
        <Route path="/fpo/lac-procurement" element={<LacProcurement />} />
        <Route path="/fpo/labtesting" element={<LabTesting />} />
        <Route path="/fpo/farmerloan" element={<FarmerLoan />} />
        <Route path="/fpo/fpoloan" element={<FpoLoan />} />
        <Route path="/fpo/corporate-customer" element={<CorporateCustomer />} />
        <Route path="/fpo/support" element={<Supports />} />
        <Route path="/fpo/settings" element={<Setting />} />

        {/* Admin route */}
        <Route path="admin" element={<AdminWrapper />} />
        <Route path="/admin/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin/farmer" element={<Farmer />} />
        <Route path="/admin/fpo" element={<FPO />} />
        <Route path="/admin/nisa" element={<NISA />} />
        <Route path="/admin/samunnati" element={<Samunnati />} />
        <Route path="/admin/corporate-client" element={<CorporateClient />} />

        {/* NISA route */}
        <Route path="nisa" element={<NisaWrapper />} />
        <Route path="/nisa/crop-advisory" element={<NISACropAdvisory />} />
        <Route path="/nisa/training" element={<NISATrainingUpdate />} />
        <Route path="/nisa/lab-testing" element={<NISALabTesting />} />
        <Route path="/nisa/support" element={<NISASupport />} />
        <Route path="/nisa/settings" element={<NISASettings />} />

        {/* Samunnati route */}
        <Route path="samunnati" element={<SamunnatiWrapper />} />
        <Route path="/samunnati/fpo-loan" element={<SamunnatiFPOLoan />} />
        <Route path="/samunnati/fpo-info" element={<SamunnatiFPOInfo />} />
        <Route path="/samunnati/fpo-page" element={<SammunatiFPOPage />} />
        <Route path="/samunnati/fpo-subloan" element={<SammunatiFPOSubLoanPage />} />
        <Route path="/samunnati/farmer-loan" element={<SamunnatiFarmerLoan />} />
        <Route path="/samunnati/farmer-subloan" element={<SammunatiFarmerSubLoanPage />} />
        <Route path="/samunnati/samunnati-support" element={<SammunatiSupport />} />
        <Route path="/samunnati/samunnati-settings" element={<SammunatiSettings />} />

        {/* Corporate Client route */}
        <Route path="corporate-client" element={<CorporateClientWrapper />} />
        <Route path="/corporate-client/lac-bidding" element={<CorporateClientLacBidding />} />
        <Route path="/corporate-client/support" element={<CorporateSupport />} />
        <Route path="/corporate-client/settings" element={<CorporateClientSettings />} />
      </Routes>
    </Suspense>
  );
}

export default App;
