import { useState } from "react";

function useModal() {
  const [modal, setModal] = useState({ state: false, data: {} })

  const updateModal = (state, val = {}) => setModal({ state, data: val })
  const closeModal = () => setModal({ state: "", data: {} })

  return { modal, updateModal, closeModal }
}

export default useModal