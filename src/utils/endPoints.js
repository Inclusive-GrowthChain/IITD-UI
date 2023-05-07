export const root = {
  baseUrl: "http://13.232.131.203:3000/api",
  imgUrl: "http://13.232.131.203:3000",
}

const endPoints = {
  login: '/login',
  fpoSignup: "/signup/fpo",
  nisaSignup: "/signup/nisa",
  samunnatiSignup: "/signup/samunnati",
  corporateClientSignup: "/signup/corporateclient",
  farmerSignup: "/signup/farmer",

  loanwindow: "/loanwindow",
  uploadImg: '/document',
  auction: "/auction",
  user: "/user",

  // Corporate Client
  corporateClient: {

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
    produce: "/farmer/",
    applyLoan: "/loanwindow",
  },

  // Fpo
  fpo: {
    interstRate: "/fpo/intrest-rate",
    products: "/fpo/product",
    farmers: "/fpo/farmer",
    lac: "/fpo/lac",
    farmerApp: "/user",
  },

  user: {
    corporateClient: "/user/corporateClient",
    fpo: "/user/fpo",
    samunnati: "/user/lendingpartner",
    nisa: "/user/nisa",
  }
}

export default endPoints