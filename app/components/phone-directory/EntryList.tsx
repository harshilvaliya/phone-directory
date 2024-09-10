"use client";

import { Button } from "@/app/components/ui/button";
import { FaTrash, FaCopy } from "react-icons/fa";
import { toast } from "react-toastify";
import { PhoneEntry } from "@/app/lib/types";

interface EntryListProps {
  entries: PhoneEntry[];
  onDeleteEntry: (id: number) => void;
}

export default function EntryList({ entries, onDeleteEntry }: EntryListProps) {
  const handleCopyNumber = (number: string) => {
    navigator.clipboard.writeText(number);
    toast.success("Number copied to clipboard");
  };

  return (
    <div className="space-y-4 mt-4">
      {entries.map((entry) => (
        <div
          key={entry.id}
          className="flex justify-between items-center bg-gray-50 p-4 rounded"
        >
          <div>
            <h3 className="font-semibold">{entry.name}</h3>
            <p className="text-gray-600">{entry.number}</p>
          </div>
          <div className="flex space-x-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => handleCopyNumber(entry.number)}
            >
              <FaCopy className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="destructive"
              onClick={() => onDeleteEntry(entry.id)}
            >
              <FaTrash className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
