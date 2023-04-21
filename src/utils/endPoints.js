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

  uploadImg: '/document',
  auction: "/auction",

  // Corporate Client
  corporateClient: {
    lacBidding: "/auction",
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

  },

  // Fpo
  fpo: {
    products: "/fpo/product",
    farmers: "/fpo/farmer",
  },
}

export default endPoints