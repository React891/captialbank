import TableLayout from '@/components/admin/TableLayout';
import TableBody from '@/components/global/TableBody';
import TableHead from '@/components/global/TableHead';
import React from 'react'

export default function page() {
    const keys = [
        "Sender",
        "Sender Bank Name",
        "Sender Account Number",
        "Recipient",
        "Recipient Account Number",
        "Amount",
        "Transaction ID"
    ];

    const data = [
        {
            Sender: "Michael Brown",
            SenderBankName: "Capital Trust",
            SenderAccountNumber: "1234567890",
            Recipient: "Emily Davis",
            RecipientAccountNumber: "2345678901",
            Amount: 500.0,
            TransactionID: "T123456789",
        },
        {
            Sender: "Chris Wilson",
            SenderBankName: "Federal Bank",
            SenderAccountNumber: "2345678901",
            Recipient: "Olivia Johnson",
            RecipientAccountNumber: "3456789012",
            Amount: 750.0,
            TransactionID: "T234567890",
        },
        {
            Sender: "William Martinez",
            SenderBankName: "Chase",
            SenderAccountNumber: "3456789012",
            Recipient: "Sophia Garcia",
            RecipientAccountNumber: "4567890123",
            Amount: 300.0,
            TransactionID: "T345678901",
        },
        {
            Sender: "James Lee",
            SenderBankName: "HSBC",
            SenderAccountNumber: "4567890123",
            Recipient: "Amelia Taylor",
            RecipientAccountNumber: "5678901234",
            Amount: 200.0,
            TransactionID: "T456789012",
        },
        {
            Sender: "Olivia Johnson",
            SenderBankName: "Standard Chartered",
            SenderAccountNumber: "5678901234",
            Recipient: "Michael Brown",
            RecipientAccountNumber: "6789012345",
            Amount: 1000.0,
            TransactionID: "T567890123",
        },
        {
            Sender: "Sophia Garcia",
            SenderBankName: "Wells Fargo",
            SenderAccountNumber: "6789012345",
            Recipient: "James Lee",
            RecipientAccountNumber: "7890123456",
            Amount: 350.0,
            TransactionID: "T678901234",
        },
        {
            Sender: "Amelia Taylor",
            SenderBankName: "Chase",
            SenderAccountNumber: "7890123456",
            Recipient: "Chris Wilson",
            RecipientAccountNumber: "8901234567",
            Amount: 600.0,
            TransactionID: "T789012345",
        },
        {
            Sender: "Emily Davis",
            SenderBankName: "Citi Bank",
            SenderAccountNumber: "8901234567",
            Recipient: "William Martinez",
            RecipientAccountNumber: "9012345678",
            Amount: 250.0,
            TransactionID: "T890123456",
        },
        {
            Sender: "Michael Brown",
            SenderBankName: "Capital Trust",
            SenderAccountNumber: "9012345678",
            Recipient: "Olivia Johnson",
            RecipientAccountNumber: "0123456789",
            Amount: 800.0,
            TransactionID: "T901234567",
        },
        {
            Sender: "Chris Wilson",
            SenderBankName: "Federal Bank",
            SenderAccountNumber: "0123456789",
            Recipient: "Sophia Garcia",
            RecipientAccountNumber: "1234567890",
            Amount: 450.0,
            TransactionID: "T012345678",
        },
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
  )
}
