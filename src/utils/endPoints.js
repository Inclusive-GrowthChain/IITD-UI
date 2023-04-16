export const root = {
  baseUrl: "http://13.232.131.203:3000/api",
}

const endPoints = {
  login: '/login',
  fpoSignup: "/signup/fpo",
  nisaSignup: "/signup/nisa",
  samunnatiSignup: "/signup/samunnati",
  corporateClientSignup: "/signup/corporateclient",
  farmerSignup: "/signup/farmer",

  uploadImg: '/document',

  // Nisa
  nisa: {
    getLactTest: "/nisa/lac-test",
    getCropAdvisory: "/nisa/crop-advisory"
  },
}

export default endPoints