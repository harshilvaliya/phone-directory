"use client";

import { useState, useEffect } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import { FaList, FaPlus } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthForm from "./AuthForm";
import AddEntryForm from "./AddEntryForm";
import EntryList from "./EntryList";
import { PhoneEntry } from "@/app/lib/types";

export default function PhoneDirectoryTabs() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [phoneEntries, setPhoneEntries] = useState<PhoneEntry[]>([]);

  useEffect(() => {
    const storedEntries = localStorage.getItem("phoneEntries");
    if (storedEntries) {
      setPhoneEntries(JSON.parse(storedEntries));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("phoneEntries", JSON.stringify(phoneEntries));
  }, [phoneEntries]);

  const handleAddEntry = (newEntry: PhoneEntry) => {
    setPhoneEntries([...phoneEntries, newEntry]);
  };

  const handleDeleteEntry = (id: number) => {
    setPhoneEntries(phoneEntries.filter((entry) => entry.id !== id));
  };

  if (!isAuthenticated) {
    return <AuthForm onAuthenticate={() => setIsAuthenticated(true)} />;
  }

  return (
    <>
      <Tabs defaultValue="list" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="list">
            <FaList className="mr-2" /> List
          </TabsTrigger>
          <TabsTrigger value="add">
            <FaPlus className="mr-2" /> Add
          </TabsTrigger>
        </TabsList>
        <TabsContent value="list">
          <EntryList entries={phoneEntries} onDeleteEntry={handleDeleteEntry} />
        </TabsContent>
        <TabsContent value="add">
          <AddEntryForm onAddEntry={handleAddEntry} />
        </TabsContent>
      </Tabs>
      <ToastContainer position="bottom-center" />
    </>
  );
}
