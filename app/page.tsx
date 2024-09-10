import PhoneDirectoryTabs from "./components/phone-directory/PhoneDirectoryTabs";

export default function Home() {
  return (
    <main className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Phone Directory</h1>
        <PhoneDirectoryTabs />
      </div>
    </main>
  );
}
