import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getUserDetails } from "./actions/auth";
import { useAuthStore } from "./store/useAuthStore";
import { cookies } from "./utils/sendApiReq";

import Loader from "./comp/Common/Loader";

import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import RequirementGathering from "./comp/Fpo/RequirementGathering";

const Register = lazy(() => import("./comp/Auth/Register"));
const Login = lazy(() => import("./comp/Auth/Login"));

const TemplateSupport = lazy(() => import("./comp/Template/Support"));

const FarmerTransactionHistory = lazy(() =>
  import("./comp/Farmer/TransactionHistory")
);
const FarmerTrainingUpdate = lazy(() =>
  import("./comp/Farmer//TrainingUpdate")
);
const FarmerCropAdvisory = lazy(() => import("./comp/Farmer/CropAdvisory"));
const FarmerSellingPrice = lazy(() => import("./comp/Farmer/SellingPrice"));
const FarmerDashboard = lazy(() => import("./comp/Farmer/DashBoard"));
const FarmerSettings = lazy(() => import("./comp/Farmer/Settings"));
const FarmerStore = lazy(() => import("./comp/Farmer/Store"));
const FarmerLoan = lazy(() => import("./comp/Farmer/Loan"));
const FarmerWrapper = lazy(() => import("./comp/Farmer"));
const FarmerInputRequirement = lazy(() => import("./comp/Farmer/InputRequirement"))

const FpoCorporateCustomer = lazy(() => import("./comp/Fpo/CorporateCustomer"));
const FpoLacProcurement = lazy(() => import("./comp/Fpo/LacProcurement"));
const FpoLabTesting = lazy(() => import("./comp/Fpo/LabTesting"));
const FpoFarmerLoan = lazy(() => import("./comp/Fpo/FarmerLoan"));
const FpoFarmerInfo = lazy(() => import("./comp/Fpo/FarmerInfo"));
const FpoSetting = lazy(() => import("./comp/Fpo/Settings"));
const FpoFarmer = lazy(() => import("./comp/Fpo/Farmer"));
const FpoStore = lazy(() => import("./comp/Fpo/Store"));
const FpoLoan = lazy(() => import("./comp/Fpo/FpoLoan"));
const FpoWrapper = lazy(() => import("./comp/Fpo"));

const AdminDashboard = lazy(() => import("./comp/Admin/Dashboard"));
const AdminWrapper = lazy(() => import("./comp/Admin"));
const LicenseKey = lazy(() => import("./comp/Admin/LicenseKey"));

const NisaTrainingUpdate = lazy(() => import("./comp/Nisa/TrainingUpdate"));
const NisaCropAdvisory = lazy(() => import("./comp/Nisa/CropAdvisory"));
const NisaLabTesting = lazy(() => import("./comp/Nisa/LabTesting"));
const NisaSettings = lazy(() => import("./comp/Nisa/Settings"));
const NisaWrapper = lazy(() => import("./comp/Nisa"));

const SammunatiFarmerSubLoanPage = lazy(() =>
  import("./comp/Samunnati/FarmerSubLoan")
);
const SammunatiFPOSubLoan = lazy(() => import("./comp/Samunnati/FpoSubLoan"));
const SamunnatiFarmerLoan = lazy(() => import("./comp/Samunnati/FarmerLoan"));
const SammunatiFpoDetail = lazy(() => import("./comp/Samunnati/FpoDetail"));
const SammunatiSettings = lazy(() => import("./comp/Samunnati/Settings"));
const SamunnatiFPOLoan = lazy(() => import("./comp/Samunnati/FpoLoan"));
const SamunnatiFPOInfo = lazy(() => import("./comp/Samunnati/FpoInfo"));
const SamunnatiWrapper = lazy(() => import("./comp/Samunnati"));

const CorporateClientLacBidding = lazy(() =>
  import("./comp/CorporateClient/Bidding")
);
const CorporateClientSettings = lazy(() =>
  import("./comp/CorporateClient/Settings")
);
const CorporateClientWrapper = lazy(() => import("./comp/CorporateClient"));

function App() {
  const { loggedIn, logIn } = useAuthStore()

  // console.log(userStore,"userStore")
  // const logIn = useAuthStore((s) => {
  //   console.log(s)
  //   return  s.logIn
  // });
  
  const navigate = useNavigate();


  useEffect(() => {
    if (loggedIn) {
      async function fetchData() {
        try {
          const userDetails = await getUserDetails();
          logIn(userDetails);
        } catch (error) {
          console.error("Failed to fetch user details:", error);
        }
      }

      fetchData();
    }
  }, [loggedIn]); // eslint-disable-line react-hooks/exhaustive-deps



  const { isLoading, fetchStatus } = useQuery({
    queryFn: getUserDetails,
    queryKey: ["user-detail"],
    enabled: !!cookies.get("IITD"),
    onSuccess(data) {
      logIn(data);
      const navigationList = {
        fpo: "farmer",
        nisa: "crop-advisory",
        admin: "farmer",
        farmer: "dashboard",
        samunnati: "fpo-loan",
        "iit-dhanbad": "dashboard",
        corporateclient: "lac-bidding",
      };

      let to = navigationList[data.type];

      if (data.type === "lendingpartner") {
        to = navigationList["samunnati"];
        navigate(`/samunnati/${to}`);
        return;
      }
      if (to) navigate(`/${data.type}/${to}`);
    },
  });

  if (isLoading && fetchStatus !== "idle")
    return <Loader wrapperCls="h-screen" />;

  return (
    <Suspense fallback={<Loader wrapperCls="h-screen" />}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Register />} />

        {/* farmer route */}
        <Route path="farmer" element={<ProtectedRoute role={"farmer"} />}>
          <Route path="/farmer" element={<FarmerWrapper />}>
            <Route
              path="transaction-history"
              element={<FarmerTransactionHistory />}
            />
            <Route path="crop-advisory" element={<FarmerCropAdvisory />} />
            <Route path="selling-price" element={<FarmerSellingPrice />} />
            <Route path="training" element={<FarmerTrainingUpdate />} />
            <Route path="dashboard" element={<FarmerDashboard />} />
            <Route path="settings" element={<FarmerSettings />} />
            <Route path="support" element={<TemplateSupport />} />
            <Route path="store" element={<FarmerStore />} />
            <Route path="loan" element={<FarmerLoan />} />
            <Route path="requirement" element={<FarmerInputRequirement />} />
          </Route>
        </Route>

        {/* FPO route */}
        <Route path="fpo" element={<ProtectedRoute role={"fpo"} />}>
          <Route path="/fpo" element={<FpoWrapper />}>
            <Route
              path="corporate-customer"
              element={<FpoCorporateCustomer />}
            />
            <Route
              path="farmer-information/:farmerId"
              element={<FpoFarmerInfo />}
            />
            <Route path="lac-procurement" element={<FpoLacProcurement />} />
            <Route path="lab-testing" element={<FpoLabTesting />} />
            <Route path="farmerloan" element={<FpoFarmerLoan />} />
            <Route path="settings" element={<FpoSetting />} />
            <Route path="support" element={<TemplateSupport />} />
            <Route path="farmer" element={<FpoFarmer />} />
            <Route path="fpoloan" element={<FpoLoan />} />
            <Route path="store" element={<FpoStore />} />
            <Route path="requirement-gathering" element={<RequirementGathering />} />
          </Route>
        </Route>

        {/* Admin route */}

        <Route path="admin" element={<AdminWrapper />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="license-key" element={<LicenseKey />} />
        </Route>

        {/* NISA route */}
        <Route path="nisa" element={<ProtectedRoute role={"nisa"} />}>
          <Route path="/nisa" element={<NisaWrapper />}>
            <Route path="crop-advisory" element={<NisaCropAdvisory />} />
            <Route path="lab-testing" element={<NisaLabTesting />} />
            <Route path="training" element={<NisaTrainingUpdate />} />
            <Route path="settings" element={<NisaSettings />} />
            <Route path="support" element={<TemplateSupport />} />
          </Route>
        </Route>

        {/* Samunnati route */}
        <Route path="samunnati" element={<ProtectedRoute role={"lendingpartner"} />}>
          <Route path="/samunnati" element={<SamunnatiWrapper />}>
            <Route path="support" element={<TemplateSupport />} />
            <Route path="fpo-loan" element={<SamunnatiFPOLoan />} />
            <Route path="fpo-info" element={<SamunnatiFPOInfo />} />
            <Route path="farmer-loan" element={<SamunnatiFarmerLoan />} />
            <Route path="fpo-page/:id" element={<SammunatiFpoDetail />} />
            <Route path="fpo-subloan/:id" element={<SammunatiFPOSubLoan />} />
            <Route
              path="farmer-subloan/:id"
              element={<SammunatiFarmerSubLoanPage />}
            />
            <Route path="settings" element={<SammunatiSettings />} />
          </Route>
        </Route>

        {/* Corporate Client route */}
        <Route path="corporateclient" element={<ProtectedRoute role={"corporateclient"} />}>
          <Route path="/corporateclient" element={<CorporateClientWrapper />}>
            <Route path="lac-bidding" element={<CorporateClientLacBidding />} />
            <Route path="settings" element={<CorporateClientSettings />} />
            <Route path="support" element={<TemplateSupport />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
