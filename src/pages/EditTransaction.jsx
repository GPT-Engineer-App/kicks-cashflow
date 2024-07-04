import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate, useParams } from "react-router-dom";

const EditTransaction = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    // Fetch transaction details by id and setTransaction
    // Placeholder data for now
    setTransaction({ id, date: "2023-10-01", amount: 100, type: "Income", brand: "Nike" });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update transaction logic here
    navigate("/transactions");
  };

  if (!transaction) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Transaction</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Date</label>
          <Input type="date" value={transaction.date} onChange={(e) => setTransaction({ ...transaction, date: e.target.value })} required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Amount</label>
          <Input type="number" value={transaction.amount} onChange={(e) => setTransaction({ ...transaction, amount: e.target.value })} required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Type</label>
          <Select value={transaction.type} onValueChange={(value) => setTransaction({ ...transaction, type: value })} required>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Income">Income</SelectItem>
              <SelectItem value="Expense">Expense</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Brand</label>
          <Select value={transaction.brand} onValueChange={(value) => setTransaction({ ...transaction, brand: value })} required>
            <SelectTrigger>
              <SelectValue placeholder="Select brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Nike">Nike</SelectItem>
              <SelectItem value="Adidas">Adidas</SelectItem>
              <SelectItem value="Puma">Puma</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default EditTransaction;