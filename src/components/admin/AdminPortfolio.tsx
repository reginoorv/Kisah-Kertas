import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { Edit2, Trash2, Plus, X } from 'lucide-react';

interface PortfolioItem {
  id: string;
  coupleName: string;
  date: string;
  location: string;
  imageUrl: string;
  type: 'fisik' | 'digital';
}

export default function AdminPortfolio() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    coupleName: '',
    date: '',
    location: '',
    imageUrl: '',
    type: 'fisik'
  });

  const fetchItems = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, 'portofolio'));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as PortfolioItem[];
      setItems(data);
    } catch (error) {
      console.error("Error fetching portfolio:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleOpenModal = (item?: PortfolioItem) => {
    if (item) {
      setFormData({
        coupleName: item.coupleName,
        date: item.date,
        location: item.location,
        imageUrl: item.imageUrl,
        type: item.type
      });
      setEditingId(item.id);
    } else {
      setFormData({
        coupleName: '',
        date: '',
        location: '',
        imageUrl: '',
        type: 'fisik'
      });
      setEditingId(null);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateDoc(doc(db, 'portofolio', editingId), formData);
      } else {
        await addDoc(collection(db, 'portofolio'), formData);
      }
      
      handleCloseModal();
      fetchItems();
    } catch (error) {
      console.error("Error saving item:", error);
      alert("Gagal menyimpan data.");
    }
  };

  const handleDelete = async (id: string) => {
    setItems(items.filter(item => item.id !== id)); // Optimistic UI
    try {
      await deleteDoc(doc(db, 'portofolio', id));
    } catch (error) {
      console.error("Error deleting item:", error);
      fetchItems(); // Revert on error
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-serif text-3xl text-charcoal">Kelola Portofolio</h1>
        <button 
          onClick={() => handleOpenModal()}
          className="bg-copper text-ivory px-6 py-3 font-sans text-xs uppercase tracking-widest hover:bg-charcoal transition-colors flex items-center gap-2"
        >
          <Plus size={16} /> Tambah Baru
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-2 border-copper border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(item => (
            <div key={item.id} className="bg-white border-[0.5px] border-sand p-4 flex flex-col">
              <div className="aspect-[4/5] bg-sand mb-4 overflow-hidden relative">
                {item.imageUrl ? (
                  <img src={item.imageUrl} alt={item.coupleName} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-smoke text-xs uppercase tracking-widest">No Image</div>
                )}
                <div className="absolute top-2 right-2 bg-ivory px-2 py-1 text-[10px] uppercase tracking-widest text-charcoal shadow-sm">
                  {item.type}
                </div>
              </div>
              <h3 className="font-serif text-xl text-charcoal mb-1">{item.coupleName}</h3>
              <p className="font-sans text-xs text-smoke uppercase tracking-widest mb-4">{item.date} • {item.location}</p>
              
              <div className="mt-auto flex gap-2 pt-4 border-t-[0.5px] border-sand">
                <button 
                  onClick={() => handleOpenModal(item)}
                  className="flex-1 flex items-center justify-center gap-2 py-2 border-[0.5px] border-charcoal text-charcoal text-xs uppercase tracking-widest hover:bg-charcoal hover:text-ivory transition-colors"
                >
                  <Edit2 size={14} /> Edit
                </button>
                <button 
                  onClick={() => handleDelete(item.id)}
                  className="flex-1 flex items-center justify-center gap-2 py-2 border-[0.5px] border-red-200 text-red-600 text-xs uppercase tracking-widest hover:bg-red-50 transition-colors"
                >
                  <Trash2 size={14} /> Hapus
                </button>
              </div>
            </div>
          ))}
          {items.length === 0 && (
            <div className="col-span-full py-12 text-center border-[0.5px] border-dashed border-smoke/30">
              <p className="font-sans text-smoke">Belum ada data portofolio.</p>
            </div>
          )}
        </div>
      )}

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-charcoal/50 z-50 flex items-center justify-center p-4">
          <div className="bg-ivory w-full max-w-lg max-h-[90vh] overflow-y-auto p-8 border-[0.5px] border-copper/30 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-serif text-2xl text-charcoal">{editingId ? 'Edit Portofolio' : 'Tambah Portofolio'}</h2>
              <button onClick={handleCloseModal} className="text-smoke hover:text-charcoal transition-colors">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-sans text-xs font-medium uppercase tracking-widest text-charcoal mb-2">Nama Pasangan</label>
                <input 
                  type="text" 
                  value={formData.coupleName} 
                  onChange={e => setFormData({...formData, coupleName: e.target.value})}
                  className="w-full border-b border-sand bg-transparent py-2 font-sans text-charcoal focus:outline-none focus:border-copper"
                  placeholder="Romeo & Juliet"
                  required 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-xs font-medium uppercase tracking-widest text-charcoal mb-2">Tanggal</label>
                  <input 
                    type="text" 
                    value={formData.date} 
                    onChange={e => setFormData({...formData, date: e.target.value})}
                    className="w-full border-b border-sand bg-transparent py-2 font-sans text-charcoal focus:outline-none focus:border-copper"
                    placeholder="Oktober 2025"
                    required 
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs font-medium uppercase tracking-widest text-charcoal mb-2">Lokasi</label>
                  <input 
                    type="text" 
                    value={formData.location} 
                    onChange={e => setFormData({...formData, location: e.target.value})}
                    className="w-full border-b border-sand bg-transparent py-2 font-sans text-charcoal focus:outline-none focus:border-copper"
                    placeholder="Bali, Indonesia"
                    required 
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block font-sans text-xs font-medium uppercase tracking-widest text-charcoal mb-2">Jenis</label>
                  <select 
                    value={formData.type} 
                    onChange={e => setFormData({...formData, type: e.target.value as 'fisik' | 'digital'})}
                    className="w-full border-b border-sand bg-transparent py-2 font-sans text-charcoal focus:outline-none focus:border-copper"
                  >
                    <option value="fisik">Fisik</option>
                    <option value="digital">Digital</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-sans text-xs font-medium uppercase tracking-widest text-charcoal mb-2">URL Gambar</label>
                <input 
                  type="url" 
                  value={formData.imageUrl} 
                  onChange={e => setFormData({...formData, imageUrl: e.target.value})}
                  className="w-full border-b border-sand bg-transparent py-2 font-sans text-charcoal focus:outline-none focus:border-copper"
                  placeholder="https://..."
                  required 
                />
              </div>

              <div className="pt-6">
                <button 
                  type="submit"
                  className="w-full bg-charcoal text-ivory font-sans text-sm font-medium uppercase tracking-widest py-4 hover:bg-copper transition-colors"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
