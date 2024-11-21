import TableBody from "../global/TableBody";
import TableHead from "../global/TableHead";
import TableLayout from "./TableLayout";

export default function AccountTable() {
    const headData = ['Account Holder', 'Account Number', 'Email', 'Phone', 'Balance', 'Status', 'Active']
    const bodyData = [
        {
            accountHolder: 'Anne Mayers Page',
            accountNumber: "217271112",
            email: "anne22@gmail.com",
            phone: "+1232332233",
            balance: "$5,200",
            status: "pending",
            active: false
        },
        {
            accountHolder: 'John Conor Slaim',
            accountNumber: "467271112",
            email: "conor1@gmail.com",
            phone: "+3782832787",
            balance: "$32,9270",
            status: "failed",
            active: false
        },
        {
            accountHolder: 'Sophia White',
            accountNumber: "876123456",
            email: "sophia.white@gmail.com",
            phone: "+1456789456",
            balance: "$12,000",
            status: "success",
            active: true
        },
        {
            accountHolder: 'Michael Turner',
            accountNumber: "435672123",
            email: "mike.turner@gmail.com",
            phone: "+1345678345",
            balance: "$23,100",
            status: "failed",
            active: false
        },
        {
            accountHolder: 'Emma Watson',
            accountNumber: "564738291",
            email: "emma.watson@gmail.com",
            phone: "+1654329876",
            balance: "$18,900",
            status: "pending",
            active: false
        },
        {
            accountHolder: 'Chris Evans',
            accountNumber: "293847565",
            email: "chris.evans@gmail.com",
            phone: "+1987654321",
            balance: "$45,300",
            status: "success",
            active: true
        },
        {
            accountHolder: 'Olivia Brown',
            accountNumber: "102938475",
            email: "olivia.brown@gmail.com",
            phone: "+1324354657",
            balance: "$7,850",
            status: "failed",
            active: false
        },
        {
            accountHolder: 'Liam Johnson',
            accountNumber: "564738291",
            email: "liam.johnson@gmail.com",
            phone: "+1543289746",
            balance: "$16,720",
            status: "success",
            active: true
        },
        {
            accountHolder: 'Noah Smith',
            accountNumber: "908123456",
            email: "noah.smith@gmail.com",
            phone: "+1987654789",
            balance: "$14,560",
            status: "pending",
            active: false
        },
        {
            accountHolder: 'Ella Davis',
            accountNumber: "302948576",
            email: "ella.davis@gmail.com",
            phone: "+1984538769",
            balance: "$29,340",
            status: "success",
            active: true
        }
    ];
    return (
        <TableLayout>
            <thead>
                <TableHead data={headData} />
            </thead>
            <tbody>
                <TableBody data={bodyData} />
            </tbody>
        </TableLayout>
    )
}

 