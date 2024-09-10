"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { toast } from "react-toastify";

interface AuthFormProps {
  onAuthenticate: () => void;
}

export default function AuthForm({ onAuthenticate }: AuthFormProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const correctPassword = "hvpd"; // In a real app, this should be securely stored and hashed

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      onAuthenticate();
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
      toast.error("Incorrect password");
    }
  };

  return (
    <div className="min-h-full flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Phone Directory</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
