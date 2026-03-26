import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { LogOut, Image, BookOpen } from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'katalog' | 'portofolio'>('katalog');

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="min-h-screen bg-ivory flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-charcoal text-ivory flex flex-col min-h-[auto] md:min-h-screen border-r-[0.5px] border-copper/20">
        <div className="p-8 border-b-[0.5px] border-copper/20">
          <h2 className="font-serif text-2xl italic text-copper">Ruang Karya</h2>
          <p className="font-sans text-xs text-smoke mt-2 uppercase tracking-widest">Admin Panel</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => setActiveTab('katalog')}
            className={`w-full flex items-center gap-3 px-4 py-3 font-sans text-sm transition-colors ${
              activeTab === 'katalog' ? 'bg-copper text-ivory' : 'text-smoke hover:text-ivory hover:bg-white/5'
            }`}
          >
            <BookOpen size={18} />
            Katalog Undangan
          </button>
          <button
            onClick={() => setActiveTab('portofolio')}
            className={`w-full flex items-center gap-3 px-4 py-3 font-sans text-sm transition-colors ${
              activeTab === 'portofolio' ? 'bg-copper text-ivory' : 'text-smoke hover:text-ivory hover:bg-white/5'
            }`}
          >
            <Image size={18} />
            Portofolio
          </button>
        </nav>

        <div className="p-4 border-t-[0.5px] border-copper/20">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 font-sans text-sm text-smoke hover:text-red-400 transition-colors"
          >
            <LogOut size={18} />
            Keluar
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h1 className="font-serif text-4xl text-charcoal">
              {activeTab === 'katalog' ? 'Kelola Katalog' : 'Kelola Portofolio'}
            </h1>
            <button className="bg-copper text-ivory px-6 py-3 font-sans text-xs uppercase tracking-widest hover:bg-charcoal transition-colors">
              + Tambah Baru
            </button>
          </div>

          <div className="bg-white border-[0.5px] border-sand p-8 shadow-sm">
            <p className="font-sans text-smoke text-center py-12">
              Modul {activeTab} sedang dalam pengembangan. Data akan segera terhubung dengan Firebase.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
