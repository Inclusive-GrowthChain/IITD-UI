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
const FarmerLoan = lazy(() => import("./comp/Farmer/Loan"))
const FarmerWrapper = lazy(() => import("./comp/Farmer"))

const CorporateCustomer = lazy(() => import("./pages/fpo/CorporateCustomer"))
const FpoFarmerLoan = lazy(() => import("./pages/fpo/FarmerLoan"))
const FpoLoan = lazy(() => import("./pages/fpo/FpoLoan"))
const Setting = lazy(() => import("./pages/fpo/Setting"))

const FpoLacProcurement = lazy(() => import("./comp/Fpo/LacProcurement"))
const FpoLabTesting = lazy(() => import("./comp/Fpo/LabTesting"))
const FpoFarmerInfo = lazy(() => import("./comp/Fpo/FarmerInfo"))
const FpoDashboard = lazy(() => import("./comp/Fpo/Dashboard"))
const FpoFarmer = lazy(() => import("./comp/Fpo/Farmer"))
const FpoStore = lazy(() => import("./comp/Fpo/Store"))
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
const NisaLabTesting = lazy(() => import("./comp/Nisa/LabTesting"))
const NisaSettings = lazy(() => import("./comp/Nisa/Settings"))
const NisaWrapper = lazy(() => import("./comp/Nisa"))

const SammunatiFarmerSubLoanPage = lazy(() => import("./pages/Samunnati/FarmerSubLoanPage"))
const SammunatiFPOSubLoanPage = lazy(() => import("./pages/Samunnati/FpoSubLoanPage"))
const SamunnatiFarmerLoan = lazy(() => import("./pages/Samunnati/FarmerLoan"))
const SammunatiSettings = lazy(() => import("./pages/Samunnati/Settings"))
const SamunnatiFPOLoan = lazy(() => import("./pages/Samunnati/FpoLoan"))
const SamunnatiFPOInfo = lazy(() => import("./pages/Samunnati/FpoInfo"))
const SammunatiFPOPage = lazy(() => import("./pages/Samunnati/FpoPage"))
const SamunnatiWrapper = lazy(() => import("./comp/Samunnati"))

const CorporateClientLacBidding = lazy(() => import("./comp/CorporateClient/Bidding"))
const CorporateClientSettings = lazy(() => import("./comp/CorporateClient/Settings"))
const CorporateClientWrapper = lazy(() => import("./comp/CorporateClient"))

const IITDhanbadDashboard = lazy(() => import("./comp/IITDhanbad/Dashboard"))
const IITDhanbadUsers = lazy(() => import("./comp/IITDhanbad/Users"))
const IITDhanbadSettings = lazy(() => import("./comp/IITDhanbad/Settings"))
const IITDhanbadWrapper = lazy(() => import("./comp/IITDhanbad"))

function App() {
  return (
    <Suspense fallback={<Loader wrapperCls='h-screen' />}>
      <Routes>
        {/* Farmer login & Signup route */}
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Register />} />

        {/* farmer route */}
        <Route path="farmer" element={<FarmerWrapper />}>farmer/selling-price
          <Route path="transaction-history" element={<FarmerTransactionHistory />} />
          <Route path="crop-advisory2" element={<FarmerCropAdvisory2 />} />
          <Route path="selling-price" element={<FarmerSellingPrice />} />
          <Route path="training" element={<FarmerTrainingUpdate />} />
          <Route path="dashboard" element={<FarmerDashboard />} />
          <Route path="settings" element={<FarmerSettings />} />
          <Route path="support" element={<TemplateSupport />} />
          <Route path="store" element={<FarmerStore />} />
          <Route path="loan" element={<FarmerLoan />} />
        </Route>


        {/* FPO route */}
        <Route path="fpo" element={<FpoWrapper />}>
          <Route path="farmer-information" element={<FpoFarmerInfo />} />
          <Route path="lac-procurement" element={<FpoLacProcurement />} />
          <Route path="lab-testing" element={<FpoLabTesting />} />
          <Route path="dashboard" element={<FpoDashboard />} />
          <Route path="support" element={<TemplateSupport />} />
          <Route path="farmer" element={<FpoFarmer />} />
          <Route path="store" element={<FpoStore />} />
        </Route>

        <Route path="/fpo/farmerloan" element={<FpoFarmerLoan />} />
        <Route path="/fpo/fpoloan" element={<FpoLoan />} />
        <Route path="/fpo/corporate-customer" element={<CorporateCustomer />} />
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
          <Route path="lab-testing" element={<NisaLabTesting />} />
          <Route path="training" element={<NisaTrainingUpdate />} />
          <Route path="settings" element={<NisaSettings />} />
          <Route path="support" element={<TemplateSupport />} />
        </Route>


        {/* Samunnati route */}
        <Route path="samunnati" element={<SamunnatiWrapper />}>
          <Route path="support" element={<TemplateSupport />} />
        </Route>

        <Route path="/samunnati/fpo-loan" element={<SamunnatiFPOLoan />} />
        <Route path="/samunnati/fpo-info" element={<SamunnatiFPOInfo />} />
        <Route path="/samunnati/fpo-page" element={<SammunatiFPOPage />} />
        <Route path="/samunnati/fpo-subloan" element={<SammunatiFPOSubLoanPage />} />
        <Route path="/samunnati/farmer-loan" element={<SamunnatiFarmerLoan />} />
        <Route path="/samunnati/farmer-subloan" element={<SammunatiFarmerSubLoanPage />} />
        <Route path="/samunnati/samunnati-settings" element={<SammunatiSettings />} />


        {/* Corporate Client route */}
        <Route path="corporate-client" element={<CorporateClientWrapper />}>
          <Route path="lac-bidding" element={<CorporateClientLacBidding />} />
          <Route path="settings" element={<CorporateClientSettings />} />
          <Route path="support" element={<TemplateSupport />} />
        </Route>

        {/* IIT Dhanbad route */}
        <Route path="iit-dhanbad" element={<IITDhanbadWrapper />}>
          <Route path="dashboard" element={<IITDhanbadDashboard />} />
          <Route path="users" element={<IITDhanbadUsers />} />
          <Route path="settings" element={<IITDhanbadSettings />} />
          <Route path="support" element={<TemplateSupport />} />
        </Route>

      </Routes>
    </Suspense>
  )
}

export default App