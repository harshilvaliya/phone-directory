"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { PhoneEntry } from "@/app/lib/types";

interface AddEntryFormProps {
  onAddEntry: (entry: PhoneEntry) => void;
}

export default function AddEntryForm({ onAddEntry }: AddEntryFormProps) {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleAddEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (newName && newNumber) {
      const newEntry: PhoneEntry = {
        id: Date.now(),
        name: newName,
        number: newNumber,
      };
      onAddEntry(newEntry);
      setNewName("");
      setNewNumber("");
      toast.success("Entry added successfully");
    }
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setNewNumber(value);
    }
  };

  return (
    <form onSubmit={handleAddEntry} className="space-y-4 mt-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="number">Phone Number</Label>
        <Input
          type="tel"
          id="number"
          value={newNumber}
          onChange={handleNumberChange}
          maxLength={10}
          pattern="\d{10}"
          title="Please enter a 10-digit phone number"
          required
        />
      </div>
      <Button type="submit" className="w-full">
        <FaPlus className="mr-2" /> Add Entry
      </Button>
    </form>
  );
}
