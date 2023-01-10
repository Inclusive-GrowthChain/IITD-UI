const data = [
  {
    id: "SAM107254367",
    date: "17-02-22",
    name: "Nylon Bag",
    unitPrice: "10",
    quantity: "2",
    totalAmount: "20",
  },
  {
    id: "SAM107254368",
    date: "17-02-22",
    name: "Nylon Bag 2",
    unitPrice: "30",
    quantity: "2",
    totalAmount: "60",
  },
  {
    id: "SAM107254369",
    date: "17-02-22",
    name: "Nylon Bag 3",
    unitPrice: "10",
    quantity: "2",
    totalAmount: "20",
  },
  {
    id: "SAM107254370",
    date: "19-02-22",
    name: "Nylon Bag 4",
    unitPrice: "10",
    quantity: "6",
    totalAmount: "60",
  },
]

const FirstTab = () => {
  return (
    <div className="firsttab">
      <div className="row">
        <div className="col">
          <div className="card shadow">
            <div className=" table-responsive">
              <table>
                <thead
                  style={{
                    // color: "green",
                    fontSize: "17px",
                    verticalAlign: "top",
                    // textAlign: "center",
                  }}
                >
                  <tr>
                    <th>Purchase Id</th>
                    <th>Date of purchase</th>
                    <th>Item Name</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Total Amount</th>
                  </tr>
                </thead>
                <tbody
                  style={{
                    color: "#000",
                    fontSize: "15px",
                    fontWeight: "500",
                    // textAlign: "center",
                  }}
                >
                  {
                    data.map(d => (
                      <tr key={d.id}>
                        <td>{d.id}</td>
                        <td>{d.date}</td>
                        <td>{d.name}</td>
                        <td>{d.unitPrice}</td>
                        <td>{d.quantity}</td>
                        <td>{d.totalAmount}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstTab;
