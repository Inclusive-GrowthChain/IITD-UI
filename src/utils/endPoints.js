export const root = {
  // baseUrl: "http://172.18.13.104:3000/api/", //Local URL
  // baseUrl: "http://3.7.253.48:3000/api", //Production URL
  // imgUrl: "http://3.7.253.48:3000",
  baseUrl: "http://52.66.41.156:3000/api",
  imgUrl: "http://52.66.41.156:3000/"
};

const endPoints = {
  login: "/login",
  userDetails: "/profile",
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
  forgotPassword: "/forgotpassword",
  updatePassword: "/updatepassword",

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
    products: "/farmer/fpo/products",
    loans: "/loanwindow/loan?type=farmer",
    produce: "/farmer",
    purchaseTransaction : "/fpo/transaction/api/transactions",
    updateProfile: "/profile",
    lacProducts: "/farmer/fpo/lacproducts",
    placeRequirements: "/farmer/requirements"
  },

  // Fpo
  fpo: {
    interstRate: "/fpo/intrest-rate",
    products: "/fpo/product",
    farmers: "/fpo/farmer",
    lac: "/fpo/lac",
    itemsName: "/fpo/items/store",
    lacType: "/fpo/items/lac",
    purchase: "/fpo/transaction/api/transaction",
    sale: "/fpo/transaction/api/transaction",
    userDetails: "/fpo/farmer/details",
    loanData: "/loans/history?type=farmer&userId=",
    requirements: "/fpo/requirements",
    procurements: "/fpo/farmerproduce",
    resetPasswordFarmer: "/fpo/farmer/forgotpassword"
  },

  userList: {
    corporateClient: "/user/list/corporateclient",
    samunnati: "/user/list/lendingpartner",
    farmer: "/user/list/farmer",
    nisa: "/user/list/nisa",
    fpo: "/list/fpo",
    fpolist: "/user/list/fpo"
  },

  samunnati: {
    loanwindow: "/loanwindow/list/samunnati?windowType=",
  },
};

export default endPoints;
