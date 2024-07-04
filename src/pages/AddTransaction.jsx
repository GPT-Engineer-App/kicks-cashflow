import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

const AddTransaction = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add transaction logic here
    navigate("/transactions");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Transaction</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Date</label>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Amount</label>
          <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Type</label>
          <Select value={type} onValueChange={setType} required>
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
          <Select value={brand} onValueChange={setBrand} required>
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

export default AddTransaction;