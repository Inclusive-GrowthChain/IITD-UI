export const root = {
  baseUrl: "http://13.232.131.203:3000/api",
  imgUrl: "http://13.232.131.203:3000",
};

const endPoints = {
  login: "/login",
  userDetails: "/userDetails",
  fpoSignup: "/signup/fpo",
  nisaSignup: "/signup/nisa",
  farmerSignup: "/signup/farmer",
  samunnatiSignup: "/signup/samunnati",
  corporateClientSignup: "/signup/corporateclient",

  getUserDetilas: "/loanWindow/userDetails",
  loanHistory: "/loans/history",
  loanwindow: "/loanwindow",
  uploadImg: "/document",
  auction: "/auction",
  user: "/user",

  admin: {
    getLicenses: "/licenses"
  },

  // Nisa
  nisa: {
    cropAdvisory: "/nisa/crop-advisory",
    lactTest2: "/nisa/lactest",
    lactTest: "/nisa/lac-test",
    training: "/nisa/traning",
  },

  // Farmer
  farmer: {
    loans: "/loanwindow/loan?type=farmer",
    produce: "/farmer",
    purchaseTransaction : "/fpo/transaction/api/transactions"
  },

  // Fpo
  fpo: {
    interstRate: "/fpo/intrest-rate",
    products: "/fpo/product",
    farmers: "/fpo/farmer",
    lac: "/fpo/lac",
    itemsName: "/items/store",
    lacType: "/items/lac",
    purchase: "/fpo/transaction/api/transaction",
    sale: "/fpo/transaction/api/transaction",
    userDetails: "/userDetails",
    loanData: "/loans/history?type=farmer&userId="
  },

  userList: {
    corporateClient: "/user/list/corporateclient",
    samunnati: "/user/list/lendingpartner",
    farmer: "/user/list/farmer",
    nisa: "/user/list/nisa",
    fpo: "/user/list/fpo",
  },

  samunnati: {
    loanwindow: "/loanwindow/list/samunnati?windowType=",
  },
};

export default endPoints;
