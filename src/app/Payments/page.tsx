
import { Appcolumns, Payment } from "./Columns";
import { DataTable } from "./DataTable";

const invoices = async (): Promise<Payment[]> => {
  return [
    {
      id: "INV001",
      paymentStatus: "Paid",
      totalAmount: 250.00,
      paymentMethod: "Credit Card",
    },
      {
      id: "INV002",
      paymentStatus: "Pending",
      totalAmount: 150.00,
      paymentMethod: "PayPal",
    },
    {
      id: "INV003",
      paymentStatus: "Pending",
      totalAmount: 150.00,
      paymentMethod: "PayPal",
    },
    {
      id: "INV004",
      paymentStatus: "Unpaid",
      totalAmount: 350.00,
      paymentMethod: "Bank Transfer",
    },
    {
      id: "INV005",
      paymentStatus: "Paid",
      totalAmount: 450.00,
      paymentMethod: "Credit Card",
    },
      {
      id: "INV006",
      paymentStatus: "Pending",
      totalAmount: 150.00,
      paymentMethod: "PayPal",
    },
    {
      id: "INV007",
      paymentStatus: "Paid",
      totalAmount: 550.00,
      paymentMethod: "PayPal",
    },
    {
      id: "INV008",
      paymentStatus: "Pending",
      totalAmount: 200.00,
      paymentMethod: "Bank Transfer",
    },
    {
      id: "INV009",
      paymentStatus: "Unpaid",
      totalAmount: 300.00,
      paymentMethod: "Credit Card",
    },
      {
      id: "INV0010",
      paymentStatus: "Paid",
      totalAmount: 550.00,
      paymentMethod: "PayPal",
    },
      {
      id: "INV0011",
      paymentStatus: "Paid",
      totalAmount: 550.00,
      paymentMethod: "PayPal",
    },
      {
      id: "INV0012",
      paymentStatus: "Paid",
      totalAmount: 550.00,
      paymentMethod: "PayPal",
    },
  ];
}

const page = async () => {

  const data = await invoices();
  return (
    <div>
      <DataTable columns={Appcolumns} data={data} />
      
    </div>
  )
}

export default page