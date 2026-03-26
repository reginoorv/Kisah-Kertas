import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { Lock } from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      setError('Email atau password salah.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white p-10 shadow-2xl border-[0.5px] border-sand">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-full bg-sand flex items-center justify-center text-copper mb-6">
            <Lock size={20} />
          </div>
          <h1 className="font-serif text-3xl text-charcoal mb-2">Ruang Karya</h1>
          <p className="font-sans text-sm text-smoke text-center">
            Akses khusus untuk mengelola katalog dan portofolio Surat Rasa.
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 text-sm font-sans mb-6 border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block font-sans text-xs font-medium uppercase tracking-widest text-charcoal mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-sand bg-transparent py-3 font-sans text-charcoal focus:outline-none focus:border-copper transition-colors"
              placeholder="admin@suratrasa.com"
              required
            />
          </div>
          <div>
            <label className="block font-sans text-xs font-medium uppercase tracking-widest text-charcoal mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-sand bg-transparent py-3 font-sans text-charcoal focus:outline-none focus:border-copper transition-colors"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-charcoal text-ivory font-sans text-sm font-medium uppercase tracking-widest py-4 hover:bg-copper transition-colors disabled:opacity-50"
          >
            {loading ? 'Memasuki Ruang...' : 'Masuk'}
          </button>
        </form>
      </div>
    </div>
  );
}
