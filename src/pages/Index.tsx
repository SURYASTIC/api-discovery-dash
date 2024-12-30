import { Navigation } from "@/components/Navigation";
import { ApiElement } from "@/components/ApiElement";
import { SectionCard } from "@/components/SectionCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Tasks</h1>
        
        <div className="space-y-8">
          <SectionCard title="Task Search">
            <ApiElement 
              apiEndpoint="/api/tasks/search"
              method="POST"
              description="Search tasks with various filters"
            >
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <h3 className="font-medium mb-2">Search Criteria</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Search tasks..."
                    className="w-full p-2 border rounded"
                  />
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Search
                  </button>
                </div>
              </div>
            </ApiElement>
          </SectionCard>

          <SectionCard title="Domain Criteria">
            <div className="space-y-4">
              <ApiElement 
                apiEndpoint="/api/orders/customer"
                method="GET"
                description="Fetch customer orders"
              >
                <div className="p-4 bg-white rounded border cursor-pointer hover:bg-gray-50">
                  Customer Order
                </div>
              </ApiElement>

              <ApiElement 
                apiEndpoint="/api/orders/network"
                method="GET"
                description="Fetch network orders"
              >
                <div className="p-4 bg-white rounded border cursor-pointer hover:bg-gray-50">
                  Network Order
                  <div className="ml-4 mt-2 text-sm text-gray-600">
                    - States and Cities
                  </div>
                </div>
              </ApiElement>

              <ApiElement 
                apiEndpoint="/api/orders/grooms"
                method="GET"
                description="Fetch grooms orders"
              >
                <div className="p-4 bg-white rounded border cursor-pointer hover:bg-gray-50">
                  Grooms Order
                </div>
              </ApiElement>

              <ApiElement 
                apiEndpoint="/api/orders/quick-start"
                method="GET"
                description="Fetch quick start orders"
              >
                <div className="p-4 bg-white rounded border cursor-pointer hover:bg-gray-50">
                  Quick Start Order
                </div>
              </ApiElement>
            </div>
          </SectionCard>
        </div>
      </main>
    </div>
  );
};

export default Index;