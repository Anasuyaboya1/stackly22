import { useState, useEffect } from "react";
// RTL support: Add a toggle for direction
import clsx from "clsx";
import Header from "../components/Header";

export default function UserDetailsSection() {
  // RTL state
  const [isRTL, setIsRTL] = useState(false);
  // Theme state
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  useEffect(() => {
    const syncTheme = () => setTheme(localStorage.getItem("theme") || "light");
    window.addEventListener("storage", syncTheme);
    window.addEventListener("theme-changed", syncTheme);
    return () => {
      window.removeEventListener("storage", syncTheme);
      window.removeEventListener("theme-changed", syncTheme);
    };
  }, []);

  // Real Estate Dashboard Data
  const [properties, setProperties] = useState([]);
  const [sales, setSales] = useState([]);
  const [agents, setAgents] = useState([]);
  const [propertyForm, setPropertyForm] = useState({ title: '', location: '', price: '', type: '', image: '' });
  const [saleForm, setSaleForm] = useState({ property: '', agent: '', date: '', price: '' });

  useEffect(() => {
    // Fetch real estate data from localStorage
    const fetchRealEstate = () => {
      setProperties(JSON.parse(localStorage.getItem('properties') || '[]'));
      setSales(JSON.parse(localStorage.getItem('sales') || '[]'));
      setAgents(JSON.parse(localStorage.getItem('agents') || '[]'));
    };
    fetchRealEstate();
    window.addEventListener('storage', fetchRealEstate);
    return () => window.removeEventListener('storage', fetchRealEstate);
  }, []);

  // Add new property
  const handlePropertySubmit = (e) => {
    e.preventDefault();
    if (!propertyForm.title || !propertyForm.location || !propertyForm.price || !propertyForm.type || !propertyForm.image) return;
    const newProperties = [{ ...propertyForm, createdAt: new Date().toISOString() }, ...properties];
    localStorage.setItem('properties', JSON.stringify(newProperties));
    setProperties(newProperties);
    setPropertyForm({ title: '', location: '', price: '', type: '', image: '' });
  };

  // Add new sale
  const handleSaleSubmit = (e) => {
    e.preventDefault();
    if (!saleForm.property || !saleForm.agent || !saleForm.date || !saleForm.price) return;
    const newSales = [{ ...saleForm, createdAt: new Date().toISOString() }, ...sales];
    localStorage.setItem('sales', JSON.stringify(newSales));
    setSales(newSales);
    setSaleForm({ property: '', agent: '', date: '', price: '' });
  };

  return (
    <div
      className={clsx(
        'min-h-screen w-full',
        theme === 'dark' ? 'bg-[#10141c] text-white' : 'bg-[#f6fafd] text-[#22223b]'
      )}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <Header />
      {/* RTL Toggle Button */}
      <div className="flex justify-end mt-4 mr-4">
        <button
          onClick={() => setIsRTL(rtl => !rtl)}
          className={clsx(
            'px-4 py-2 rounded font-semibold border transition',
            isRTL ? 'bg-[#00bfff] text-white border-[#00bfff]' : 'bg-white text-[#22223b] border-gray-300',
            'hover:bg-[#0099cc] hover:text-white'
          )}
        >
          {isRTL ? 'Switch to LTR' : 'Switch to RTL'}
        </button>
      </div>

  {/* Real Estate Properties Section */}
      <div className={clsx(
        'rounded-xl shadow p-6 mt-16',
        theme === 'dark' ? 'bg-[#181f2a]' : 'bg-white'
      )}>
        <h2 className={clsx('text-2xl font-bold mb-4', 'text-[#00bfff]')}>Properties</h2>
        <form className="mb-6 w-full" onSubmit={handlePropertySubmit}>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input type="text" name="title" value={propertyForm.title} onChange={e => setPropertyForm(prev => ({ ...prev, title: e.target.value }))} placeholder="Property Title" className={clsx('border rounded px-4 py-3 text-lg flex-1 min-w-0', theme === 'dark' ? 'bg-[#232b3b] text-white border-gray-700' : 'bg-white text-[#22223b] border-gray-300')} required />
            <input type="text" name="location" value={propertyForm.location} onChange={e => setPropertyForm(prev => ({ ...prev, location: e.target.value }))} placeholder="Location" className={clsx('border rounded px-4 py-3 text-lg flex-1 min-w-0', theme === 'dark' ? 'bg-[#232b3b] text-white border-gray-700' : 'bg-white text-[#22223b] border-gray-300')} required />
          </div>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input type="text" name="type" value={propertyForm.type} onChange={e => setPropertyForm(prev => ({ ...prev, type: e.target.value }))} placeholder="Type (Apartment, Villa, etc.)" className={clsx('border rounded px-4 py-3 text-lg flex-1 min-w-0', theme === 'dark' ? 'bg-[#232b3b] text-white border-gray-700' : 'bg-white text-[#22223b] border-gray-300')} required />
            <input type="number" name="price" value={propertyForm.price} onChange={e => setPropertyForm(prev => ({ ...prev, price: e.target.value }))} placeholder="Price" className={clsx('border rounded px-4 py-3 text-lg flex-1 min-w-0', theme === 'dark' ? 'bg-[#232b3b] text-white border-gray-700' : 'bg-white text-[#22223b] border-gray-300')} required />
          </div>
          <div className="mb-4">
            <input type="text" name="image" value={propertyForm.image} onChange={e => setPropertyForm(prev => ({ ...prev, image: e.target.value }))} placeholder="Image URL" className={clsx('border rounded px-4 py-3 text-lg w-full', theme === 'dark' ? 'bg-[#232b3b] text-white border-gray-700' : 'bg-white text-[#22223b] border-gray-300')} required />
          </div>
          <div className="flex justify-center">
            <button type="submit" className={clsx('rounded px-5 py-2 text-base font-semibold transition', 'bg-[#00bfff] text-white hover:bg-[#0099cc]')}>Add Property</button>
          </div>
        </form>
        <div>
          {properties.length > 0 ? (
            <ul className="space-y-4">
              {properties.map((property, idx) => (
                <li key={idx} className={clsx('border rounded p-4 flex flex-col md:flex-row md:items-center gap-4', theme === 'dark' ? 'border-gray-700 bg-[#232b3b]' : 'border-gray-200 bg-white')}>
                  <img src={property.image} alt={property.title} className="w-24 h-24 object-cover rounded" />
                  <div className="flex-1">
                    <div className={clsx('font-bold text-lg', 'text-[#00bfff]')}>{property.title}</div>
                    <div className={clsx('text-sm mb-1', theme === 'dark' ? 'text-gray-300' : 'text-gray-600')}>Location: {property.location}</div>
                    <div className={clsx('text-sm mb-1', theme === 'dark' ? 'text-gray-200' : 'text-gray-700')}>Type: {property.type}</div>
                    <div className={clsx('text-sm mb-1', theme === 'dark' ? 'text-gray-200' : 'text-gray-700')}>Price: ${property.price}</div>
                    <div className={clsx('text-xs', 'text-gray-400')}>{new Date(property.createdAt).toLocaleString()}</div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className={clsx('text-center', theme === 'dark' ? 'text-gray-400' : 'text-gray-500')}>No properties added yet.</p>
          )}
        </div>
      </div>

  {/* Sales Section */}
      <div className={clsx('rounded-xl shadow p-6 mt-8', theme === 'dark' ? 'bg-[#181f2a]' : 'bg-white')}>
        <h2 className={clsx('text-2xl font-bold mb-4', 'text-[#00bfff]')}>Recent Sales</h2>
        <form className="mb-6 w-full" onSubmit={handleSaleSubmit}>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input type="text" name="property" value={saleForm.property} onChange={e => setSaleForm(prev => ({ ...prev, property: e.target.value }))} placeholder="Property Title" className={clsx('border rounded px-4 py-3 text-lg flex-1 min-w-0', theme === 'dark' ? 'bg-[#232b3b] text-white border-gray-700' : 'bg-white text-[#22223b] border-gray-300')} required />
            <input type="text" name="agent" value={saleForm.agent} onChange={e => setSaleForm(prev => ({ ...prev, agent: e.target.value }))} placeholder="Agent Name" className={clsx('border rounded px-4 py-3 text-lg flex-1 min-w-0', theme === 'dark' ? 'bg-[#232b3b] text-white border-gray-700' : 'bg-white text-[#22223b] border-gray-300')} required />
          </div>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input type="date" name="date" value={saleForm.date} onChange={e => setSaleForm(prev => ({ ...prev, date: e.target.value }))} className={clsx('border rounded px-4 py-3 text-lg flex-1 min-w-0', theme === 'dark' ? 'bg-[#232b3b] text-white border-gray-700' : 'bg-white text-[#22223b] border-gray-300')} required />
            <input type="number" name="price" value={saleForm.price} onChange={e => setSaleForm(prev => ({ ...prev, price: e.target.value }))} placeholder="Sale Price" className={clsx('border rounded px-4 py-3 text-lg flex-1 min-w-0', theme === 'dark' ? 'bg-[#232b3b] text-white border-gray-700' : 'bg-white text-[#22223b] border-gray-300')} required />
          </div>
          <div className="flex justify-center">
            <button type="submit" className={clsx('rounded px-5 py-2 text-base font-semibold transition', 'bg-[#00bfff] text-white hover:bg-[#0099cc]')}>Add Sale</button>
          </div>
        </form>
        <div>
          {sales.length > 0 ? (
            <ul className="space-y-4">
              {sales.map((sale, idx) => (
                <li key={idx} className={clsx('border rounded p-4 flex flex-col md:flex-row md:items-center gap-4', theme === 'dark' ? 'border-gray-700 bg-[#232b3b]' : 'border-gray-200 bg-white')}>
                  <div className="flex-1">
                    <div className={clsx('font-bold text-lg', 'text-[#00bfff]')}>{sale.property}</div>
                    <div className={clsx('text-sm mb-1', theme === 'dark' ? 'text-gray-300' : 'text-gray-600')}>Agent: {sale.agent}</div>
                    <div className={clsx('text-sm mb-1', theme === 'dark' ? 'text-gray-200' : 'text-gray-700')}>Date: {sale.date}</div>
                    <div className={clsx('text-sm mb-1', theme === 'dark' ? 'text-gray-200' : 'text-gray-700')}>Price: ${sale.price}</div>
                    <div className={clsx('text-xs', 'text-gray-400')}>{new Date(sale.createdAt).toLocaleString()}</div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className={clsx('text-center', theme === 'dark' ? 'text-gray-400' : 'text-gray-500')}>No sales added yet.</p>
          )}
        </div>
      </div>

  {/* Agents Section */}
      <div className={clsx('rounded-xl shadow p-6 mt-8', theme === 'dark' ? 'bg-[#181f2a]' : 'bg-white')}>
        <h2 className={clsx('text-2xl font-bold mb-4', 'text-[#00bfff]')}>Agents</h2>
        <div>
          {agents.length > 0 ? (
            <ul className="space-y-4">
              {agents.map((agent, idx) => (
                <li key={idx} className={clsx('border rounded p-4 flex flex-col md:flex-row md:items-center gap-4', theme === 'dark' ? 'border-gray-700 bg-[#232b3b]' : 'border-gray-200 bg-white')}>
                  <div className="flex-1">
                    <div className={clsx('font-bold text-lg', 'text-[#00bfff]')}>{agent.name}</div>
                    <div className={clsx('text-sm mb-1', theme === 'dark' ? 'text-gray-300' : 'text-gray-600')}>Email: {agent.email}</div>
                    <div className={clsx('text-sm mb-1', theme === 'dark' ? 'text-gray-200' : 'text-gray-700')}>Phone: {agent.phone}</div>
                    <div className={clsx('text-sm mb-1', theme === 'dark' ? 'text-gray-200' : 'text-gray-700')}>Expertise: {agent.expertise}</div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className={clsx('text-center', theme === 'dark' ? 'text-gray-400' : 'text-gray-500')}>No agents added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
