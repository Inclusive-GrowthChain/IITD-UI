const data = [
  {
    id: "SAM107254367",
    date: "17-02-22",
    name: "Stick Lac",
    pricePerKg: "100",
    quantity: "2",
    totalAmount: "200",
  },
  {
    id: "SAM107254368",
    date: "17-02-22",
    name: "Seed Lac",
    pricePerKg: "300",
    quantity: "2",
    totalAmount: "600",
  },
  {
    id: "SAM107254369",
    date: "17-02-22",
    name: "Shellac Lac",
    pricePerKg: "150",
    quantity: "6",
    totalAmount: "900",
  },
  {
    id: "SAM107254370",
    date: "19-02-22",
    name: "Stick Lac",
    pricePerKg: "50",
    quantity: "6",
    totalAmount: "300",
  },
];

const SecondTab = () => {
  return (
    <div className="secondtab">
      <div className="row">
        <div className="col">
          <div className="card shadow">
            <div className=" table-responsive p-3">
              <table className="table table-striped">
                <thead
                  style={{
                    // color: "green",
                    fontSize: "15px",
                    verticalAlign: "top",
                  }}
                >
                  <tr>
                    <th>Sale Id</th>
                    <th>Date of Sale</th>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price Per KG</th>
                    <th>Total Amount</th>
                  </tr>
                </thead>
                <tbody
                  style={{
                    color: "#000",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {data.map((d) => (
                    <tr key={d.id}>
                      <td>{d.id}</td>
                      <td>{d.date}</td>
                      <td>{d.name}</td>
                      <td>{d.pricePerKg}</td>
                      <td>{d.quantity}</td>
                      <td>{d.totalAmount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondTab;
