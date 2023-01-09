import { Route, Routes } from "react-router-dom";

import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

import TransactionHistory from "./pages/farmer/TransactionHistory";
import TrainingUpdate from "./pages/farmer/TrainingUpdate";
import SellingPrice from "./pages/farmer/SellingPrice";
import CropAdvisory from "./pages/farmer/CropAdvisory";
import Dashboard from "./pages/farmer/Dashboard";
import Settings from "./pages/farmer/Settings";
import Support from "./pages/farmer/Support";
import Store from "./pages/farmer/Store";
import Loan from "./pages/farmer/Loan";

import FarmerInformation from "./pages/fpo/FarmerInformation";
import CorporateCustomer from "./pages/fpo/CorporateCustomer";
import LacProcurement from "./pages/fpo/LacProcurement";
import FpoDashboard from "./pages/fpo/FpoDashboard";
import FarmerPage from "./pages/fpo/FarmerPage";
import LabTesting from "./pages/fpo/LabTesting";
import FarmerLoan from "./pages/fpo/FarmerLoan";
import FpoStore from "./pages/fpo/FpoStore";
import Supports from "./pages/fpo/Supports";
import FpoLoan from "./pages/fpo/FpoLoan";
import Setting from "./pages/fpo/Setting";

import CorporateClient from "./pages/Admin/CorporateClient";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Samunnati from "./pages/Admin/Samunnati";
import Farmer from "./pages/Admin/Farmer";
import NISA from "./pages/Admin/NISA";
import FPO from "./pages/Admin/FPO";

import NISATrainingUpdate from "./pages/NISA/TrainingUpdate";
import NISACropAdvisory from "./pages/NISA/CropAdvisory";
import NISALabTesting from "./pages/NISA/LabTesting";
import NISASettings from "./pages/NISA/Settings";
import NISASupport from "./pages/NISA/Supports";

import SammunatiFarmerSubLoanPage from "./pages/Samunnati/FarmerSubLoanPage";
import SammunatiFPOSubLoanPage from "./pages/Samunnati/FpoSubLoanPage";
import SamunnatiFarmerLoan from "./pages/Samunnati/FarmerLoan";
import SammunatiSettings from "./pages/Samunnati/Settings";
import SamunnatiFPOLoan from "./pages/Samunnati/FpoLoan";
import SamunnatiFPOInfo from "./pages/Samunnati/FpoInfo";
import SammunatiFPOPage from "./pages/Samunnati/FpoPage";
import SammunatiSupport from "./pages/Samunnati/Support";

import CorporateClientLacBidding from "./pages/CorporateClient/ccLacBidding";
import CorporateClientSettings from "./pages/CorporateClient/Settings";
import CorporateSupport from "./pages/CorporateClient/Support";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Farmer login & Signup route */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />

        {/* farmer route */}
        <Route path="/farmer/dashboard" element={<Dashboard />} />
        <Route path="/farmer/loan" element={<Loan />} />
        <Route path="/farmer/store" element={<Store />} />
        <Route path="/farmer/selling-price" element={<SellingPrice />} />
        <Route path="/farmer/transaction-history" element={<TransactionHistory />} />
        <Route path="/farmer/settings" element={<Settings />} />
        <Route path="/farmer/support" element={<Support />} />
        <Route path="/farmer/crop-advisory" element={<CropAdvisory />} />
        <Route path="/farmer/training" element={<TrainingUpdate />} />

        {/* FPO route */}
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
        <Route path="/admin/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin/farmer" element={<Farmer />} />
        <Route path="/admin/fpo" element={<FPO />} />
        <Route path="/admin/nisa" element={<NISA />} />
        <Route path="/admin/samunnati" element={<Samunnati />} />
        <Route path="/admin/corporate-client" element={<CorporateClient />} />

        {/* NISA route */}
        <Route path="/nisa/crop-advisory" element={<NISACropAdvisory />} />
        <Route path="/nisa/training" element={<NISATrainingUpdate />} />
        <Route path="/nisa/lab-testing" element={<NISALabTesting />} />
        <Route path="/nisa/support" element={<NISASupport />} />
        <Route path="/nisa/settings" element={<NISASettings />} />

        {/* Samunnati route */}
        <Route path="/samunnati/fpo-loan" element={<SamunnatiFPOLoan />} />
        <Route path="/samunnati/fpo-info" element={<SamunnatiFPOInfo />} />
        <Route path="/samunnati/fpo-page" element={<SammunatiFPOPage />} />
        <Route path="/samunnati/fpo-subloan" element={<SammunatiFPOSubLoanPage />} />
        <Route path="/samunnati/farmer-loan" element={<SamunnatiFarmerLoan />} />
        <Route path="/samunnati/farmer-subloan" element={<SammunatiFarmerSubLoanPage />} />
        <Route path="/samunnati/samunnati-support" element={<SammunatiSupport />} />
        <Route path="/samunnati/samunnati-settings" element={<SammunatiSettings />} />

        {/* Corporate Client route */}
        <Route path="/corporate-client/lac-bidding" element={<CorporateClientLacBidding />} />
        <Route path="/corporate-client/support" element={<CorporateSupport />} />
        <Route path="/corporate-client/settings" element={<CorporateClientSettings />} />
      </Routes>
    </div>
  );
}

export default App;
