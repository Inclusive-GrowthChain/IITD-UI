import Dropdown from "react-bootstrap/Dropdown";

function DropDownWrapper({ onClk }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Organization Signup
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => onClk("Fpo")}>
          FPO
        </Dropdown.Item>
        <Dropdown.Item onClick={() => onClk("Nisa")}>
          NISA
        </Dropdown.Item>
        <Dropdown.Item onClick={() => onClk("Samunnati")}>
          Samunnati
        </Dropdown.Item>
        <Dropdown.Item onClick={() => onClk("CorporateClient")}>
          Corporate Client
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropDownWrapper