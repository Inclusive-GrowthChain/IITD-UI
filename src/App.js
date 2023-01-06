/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

import Dashboard from "./pages/farmer/Dashboard";
import Loan from "./pages/farmer/Loan";
import Store from "./pages/farmer/Store";
import TransactionHistory from "./pages/farmer/TransactionHistory";
import Settings from "./pages/farmer/Settings";
import Support from "./pages/farmer/Support";
import CropAdvisory from "./pages/farmer/CropAdvisory";
import TrainingUpdate from "./pages/farmer/TrainingUpdate";
import SellingPrice from "./pages/farmer/SellingPrice";

import "./index.css";

import FpoDashboard from "./pages/fpo/FpoDashboard";
import FarmerPage from "./pages/fpo/FarmerPage";
import FarmerInformation from "./pages/fpo/FarmerInformation";
import FpoStore from "./pages/fpo/FpoStore";
import LacProcurement from "./pages/fpo/LacProcurement";
import LabTesting from "./pages/fpo/LabTesting";
import FarmerLoan from "./pages/fpo/FarmerLoan";
import FpoLoan from "./pages/fpo/FpoLoan";
import CorporateCustomer from "./pages/fpo/CorporateCustomer";
import Supports from "./pages/fpo/Supports";
import Setting from "./pages/fpo/Setting";

import AdminDashboard from "./pages/Admin/AdminDashboard";
import Farmer from "./pages/Admin/Farmer";
import FPO from "./pages/Admin/FPO";
import NISA from "./pages/Admin/NISA";
import Samunnati from "./pages/Admin/Samunnati";
import CorporateClient from "./pages/Admin/CorporateClient";

import NISA_CropAdvisory from "./pages/NISA/CropAdvisory";
import NISA_TrainingUpdate from "./pages/NISA/TrainingUpdate";
import NISA_Lab_Testing from "./pages/NISA/LabTesting";
import NISA_Support from "./pages/NISA/Supports";
import NISA_Settings from "./pages/NISA/Settings";

import Samunnati_FPO_Loan from "./pages/Samunnati/FpoLoan";
import Samunnati_FPO_Info from "./pages/Samunnati/FpoInfo";
import Sammunati_FPO_Page from "./pages/Samunnati/FpoPage";
import Sammunati_FPO_SubLoan_Page from "./pages/Samunnati/FpoSubLoanPage";
import Samunnati_Farmer_Loan from "./pages/Samunnati/FarmerLoan";
import Sammunati_Farmer_SubLoan_Page from "./pages/Samunnati/FarmerSubLoanPage";
import Sammunati_Support from "./pages/Samunnati/Support";
import Sammunati_Settings from "./pages/Samunnati/Settings";

import Corporate_Client_Lac_Bidding from "./pages/CorporateClient/ccLacBidding";
import Corporate_Support from "./pages/CorporateClient/Support";
import Corporate_Client_Settings from "./pages/CorporateClient/Settings";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Farmer login & Signup route */}
          <Route path="/">
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Register />} />
          </Route>

          {/* farmer route */}
          <Route>
            <Route path="/farmer/dashboard" element={<Dashboard />} />
            <Route path="/farmer/loan" element={<Loan />} />
            <Route path="/farmer/store" element={<Store />} />
            <Route path="/farmer/selling-price" element={<SellingPrice />} />
            <Route
              path="/farmer/transaction-history"
              element={<TransactionHistory />}
            />
            <Route path="/farmer/settings" element={<Settings />} />
            <Route path="/farmer/support" element={<Support />} />
            <Route path="/farmer/crop-advisory" element={<CropAdvisory />} />
            <Route path="/farmer/training" element={<TrainingUpdate />} />
          </Route>

          {/* FPO route */}
          <Route path="/">
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
          </Route>

          {/* Admin route */}
          <Route path="/">
            <Route path="/admin/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/admin/farmer" element={<Farmer />} />
            <Route path="/admin/fpo" element={<FPO />} />
            <Route path="/admin/nisa" element={<NISA />} />
            <Route path="/admin/samunnati" element={<Samunnati />} />
            <Route
              path="/admin/corporate-client"
              element={<CorporateClient />}
            />
          </Route>

          {/* NISA route */}
          <Route path="/">
            <Route path="/nisa/crop-advisory" element={<NISA_CropAdvisory />} />
            <Route path="/nisa/training" element={<NISA_TrainingUpdate />} />
            <Route path="/nisa/lab-testing" element={<NISA_Lab_Testing />} />
            <Route path="/nisa/support" element={<NISA_Support />} />
            <Route path="/nisa/settings" element={<NISA_Settings />} />
          </Route>

          {/* Samunnati route */}
          <Route path="/">
            <Route path="/samunnati/fpo-loan" element={<Samunnati_FPO_Loan />} />
            <Route path="/samunnati/fpo-info" element={<Samunnati_FPO_Info />} />
            <Route path="/samunnati/fpo-page" element={<Sammunati_FPO_Page />} />
            <Route path="/samunnati/fpo-subloan" element={<Sammunati_FPO_SubLoan_Page />} />
            <Route path="/samunnati/farmer-loan" element={<Samunnati_Farmer_Loan />} />
            <Route path="/samunnati/farmer-subloan" element={<Sammunati_Farmer_SubLoan_Page />} />
            <Route path="/samunnati/samunnati-support" element={<Sammunati_Support />} />
            <Route path="/samunnati/samunnati-settings" element={<Sammunati_Settings />} />
          </Route>

          {/* Corporate Client route */}
          <Route path="/">
            <Route path="/corporate-client/lac-bidding" element={<Corporate_Client_Lac_Bidding />} />
            <Route path="/corporate-client/support" element={<Corporate_Support/>} />
            <Route path="/corporate-client/settings" element={<Corporate_Client_Settings/>} />
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
