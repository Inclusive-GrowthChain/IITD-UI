import { lazy, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import Loader from './comp/Common/Loader';

const Register = lazy(() => import("./comp/Auth/Register"))
const Login = lazy(() => import("./comp/Auth/Login"))

const TemplateSupport = lazy(() => import("./comp/Template/Support"))

const FarmerTransactionHistory = lazy(() => import("./comp/Farmer/TransactionHistory"))
const FarmerTrainingUpdate = lazy(() => import("./comp/Farmer//TrainingUpdate"))
const FarmerCropAdvisory2 = lazy(() => import("./comp/Farmer/CropAdvisory2"))
const FarmerSellingPrice = lazy(() => import("./comp/Farmer/SellingPrice"))
const FarmerDashboard = lazy(() => import("./comp/Farmer/DashBoard"))
const FarmerSettings = lazy(() => import("./comp/Farmer/Settings"))
const FarmerStore = lazy(() => import("./comp/Farmer/Store"))
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

const AdminCorporateClient = lazy(() => import("./comp/Admin/CorporateClient"))
const AdminDashboard = lazy(() => import("./comp/Admin/Dashboard"))
const AdminSamunnati = lazy(() => import("./comp/Admin/Samunnati"))
const AdminFarmer = lazy(() => import("./comp/Admin/Farmer"))
const AdminNISA = lazy(() => import("./comp/Admin/NISA"))
const AdminFPO = lazy(() => import("./comp/Admin/FPO"))
const AdminWrapper = lazy(() => import("./comp/Admin"))

const NisaTrainingUpdate = lazy(() => import("./comp/Nisa/TrainingUpdate"))
const NisaCropAdvisory = lazy(() => import("./comp/Nisa/CropAdvisory"))
const NISALabTesting = lazy(() => import("./pages/NISA/LabTesting"))
const NisaSettings = lazy(() => import("./comp/Nisa/Settings"))
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

const CorporateClientLacBidding = lazy(() => import("./comp/CorporateClient/Bidding"))
const CorporateClientSettings = lazy(() => import("./comp/CorporateClient/Settings"))
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
          <Route path="selling-price" element={<FarmerSellingPrice />} />
          <Route path="training" element={<FarmerTrainingUpdate />} />
          <Route path="dashboard" element={<FarmerDashboard />} />
          <Route path="settings" element={<FarmerSettings />} />
          <Route path="support" element={<TemplateSupport />} />
          <Route path="store" element={<FarmerStore />} />
        </Route>

        <Route path="/farmer/loan" element={<Loan />} />


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
        <Route path="admin" element={<AdminWrapper />}>
          <Route path="corporate-client" element={<AdminCorporateClient />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="samunnati" element={<AdminSamunnati />} />
          <Route path="farmer" element={<AdminFarmer />} />
          <Route path="nisa" element={<AdminNISA />} />
          <Route path="fpo" element={<AdminFPO />} />
        </Route>


        {/* NISA route */}
        <Route path="nisa" element={<NisaWrapper />}>
          <Route path="crop-advisory" element={<NisaCropAdvisory />} />
          <Route path="training" element={<NisaTrainingUpdate />} />
          <Route path="settings" element={<NisaSettings />} />
          <Route path="support" element={<TemplateSupport />} />
        </Route>

        <Route path="/nisa/lab-testing" element={<NISALabTesting />} />


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
        <Route path="corporate-client" element={<CorporateClientWrapper />}>
          <Route path="lac-bidding" element={<CorporateClientLacBidding />} />
          <Route path="settings" element={<CorporateClientSettings />} />
          <Route path="support" element={<TemplateSupport />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App