import Header from "@/components/common/Header";

function App() {
  return (
    <div className="flex h-screen bg-background">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-auto p-6 space-y-6">
          <h1>Hello World</h1>
        </main>
      </div>
    </div>
  );
}

export default App;
