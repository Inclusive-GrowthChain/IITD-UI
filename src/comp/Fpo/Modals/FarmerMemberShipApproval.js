import { useMutation, useQueryClient } from "@tanstack/react-query";
import Confirm from "../../Samunnati/Modals/FpoLoan/Confirm";
import { updateFarmerApplication } from "../../../actions/fpo";

function FarmerMemberShipApproval({ show, data, handleClose }) {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: updateFarmerApplication,
    onSuccess: () => {
      queryClient.invalidateQueries("fpo/farmer-memberships")
      handleClose()
    }
  })

  const onConfirm = () => mutate(data)

  return (
    <Confirm
      show={show}
      title="Famer Membership"
      confirmText={`Are you confirm farmer membership status to be ${data.status}?`}
      handleClose={handleClose}
      onConfirm={onConfirm}
    />
  )
}

export default FarmerMemberShipApproval