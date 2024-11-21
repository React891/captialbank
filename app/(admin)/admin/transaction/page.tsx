import TableLayout from "@/components/admin/TableLayout";
import TableBody from "@/components/global/TableBody";
import TableHead from "@/components/global/TableHead";

export default function page() {
  const data = [
    {
        accountHolder: "John Doe",
        accountNumber: "1234567890",
        id: 1,
        date: "2024-11-15",
        category: "Shopping",
        amount: 120.49,
        status: "success",
    },
    {
        accountHolder: "Jane Smith",
        accountNumber: "2345678901",
        id: 2,
        date: "2024-11-18",
        category: "Transport",
        amount: 15.25,
        status: "success",
    },
    {
        accountHolder: "Michael Brown",
        accountNumber: "3456789012",
        id: 3,
        date: "2024-11-19",
        category: "Food & Drink",
        amount: 8.75,
        status: "success",
    },
    {
        accountHolder: "Emily Davis",
        accountNumber: "4567890123",
        id: 4,
        date: "2024-11-20",
        category: "Entertainment",
        amount: 13.99,
        status: "pending",
    },
    {
        accountHolder: "Chris Wilson",
        accountNumber: "5678901234",
        id: 5,
        date: "2024-11-20",
        category: "Groceries",
        amount: 62.3,
        status: "success",
    },
    {
        accountHolder: "Olivia Johnson",
        accountNumber: "6789012345",
        id: 6,
        date: "2024-11-22",
        category: "Technology",
        amount: 799.0,
        status: "pending",
    },
    {
        accountHolder: "William Martinez",
        accountNumber: "7890123456",
        id: 7,
        date: "2024-11-23",
        category: "Fuel",
        amount: 45.67,
        status: "success",
    },
    {
        accountHolder: "Sophia Garcia",
        accountNumber: "8901234567",
        id: 8,
        date: "2024-11-24",
        category: "Fitness",
        amount: 30.0,
        status: "success",
    },
    {
        accountHolder: "James Lee",
        accountNumber: "9012345678",
        id: 9,
        date: "2024-11-25",
        category: "Travel",
        amount: 250.0,
        status: "success",
    },
    {
        accountHolder: "Amelia Taylor",
        accountNumber: "0123456789",
        id: 10,
        date: "2024-11-26",
        category: "Entertainment",
        amount: 9.99,
        status: "success",
    },
];

  const keys = [
    "accountHolder",
    "accountNumber",
    "id",
    "date",
    "category",
    "amount",
    "status",
  ];
  return (
    <div className="p-4">
      <TableLayout>
        <thead>
          <TableHead data={keys} />
        </thead>
        <thead>
          <TableBody data={data} />
        </thead>
      </TableLayout>
    </div>
  );
}
