import { useState, type FormEvent } from 'react';
import { TabType, UserProfile } from '../types';
import { INITIAL_USER } from '../data/mockData';

interface LoginViewProps {
  setActiveTab: (tab: TabType) => void;
  user: UserProfile | null;
  onLogin: (u: UserProfile) => void;
  onLogout: () => void;
}

export default function LoginView({
  setActiveTab,
  user,
  onLogin,
  onLogout
}: LoginViewProps) {
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const loggedUser: UserProfile = {
      ...INITIAL_USER,
      name: name.trim() || (email ? email.split('@')[0] : 'Người Giữ Sử'),
      email: email || 'user@manhghephonviet.vn'
    };
    onLogin(loggedUser);
    setSuccessMessage('Đăng nhập thành công! Đang lưu phiên trải nghiệm.');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="w-full flex-grow bg-[#FDFBF7] py-16 px-6 flex items-center justify-center">
      <div className="w-full max-w-md bg-[#FFF8F6] rounded-3xl border-2 border-[#C5B358] shadow-2xl p-8 relative overflow-hidden">
        {/* Background watermark */}
        <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none text-[#570000]">
          <span className="material-symbols-outlined text-[200px]">temple_buddhist</span>
        </div>

        {/* Back to Home Button */}
        <div className="mb-6 flex justify-between items-center">
          <button
            type="button"
            onClick={() => {
              setActiveTab('trangchu');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-bold text-[#570000] flex items-center gap-1 hover:underline cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span>Về Trang Chủ</span>
          </button>

          <span className="text-[10px] bg-[#FFE9E6] text-[#570000] font-bold px-2.5 py-1 rounded-full uppercase">
            Hồ sơ Hồn Việt
          </span>
        </div>

        {user ? (
          /* Logged-in profile view */
          <div className="space-y-6 text-center animate-fadeIn">
            <div className="relative inline-block">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-[#C5B358] shadow-lg mx-auto"
              />
              <span className="absolute bottom-0 right-0 bg-[#570000] text-[#D4AF37] text-xs font-bold px-2 py-0.5 rounded-full border border-[#C5B358]">
                Lv.{user.level}
              </span>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-[#570000]">{user.name}</h3>
              <p className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider">
                {user.title}
              </p>
              <p className="text-[11px] text-stone-500 text-center">
                {user.email === 'nguyenvanan@gmail.com' ? 'n********an@gmail.com' : user.email}
              </p>
            </div>

            {/* Profile badges */}
            <div className="grid grid-cols-3 gap-2 bg-white p-4 rounded-2xl border border-[#C5B358]/50 text-center">
              <div>
                <span className="text-base font-bold text-[#570000]">{user.xp}</span>
                <p className="text-[9px] text-stone-500 uppercase font-bold">Điểm XP</p>
              </div>
              <div>
                <span className="text-base font-bold text-[#D4AF37]">{user.starsCount}</span>
                <p className="text-[9px] text-stone-500 uppercase font-bold">Điểm Sao</p>
              </div>
              <div>
                <span className="text-base font-bold text-[#007A33]">{user.lotusPoints}</span>
                <p className="text-[9px] text-stone-500 uppercase font-bold">Hoa Sen</p>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('trochoi');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full bg-[#570000] hover:bg-[#800000] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer"
              >
                Tiếp tục khám phá
              </button>

              <button
                type="button"
                onClick={onLogout}
                className="w-full bg-transparent border border-stone-300 text-stone-600 hover:bg-stone-100 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                Đăng xuất
              </button>
            </div>
          </div>
        ) : (
          /* Login / Register Form */
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-[#570000] uppercase mb-1">
                {authMode === 'login' ? 'ĐĂNG NHẬP' : 'ĐĂNG KÝ'}
              </h2>
              <p className="text-xs text-stone-500">
                {authMode === 'login'
                  ? 'Đăng nhập để lưu tiến trình khám phá và điểm thưởng'
                  : 'Trở thành thành viên của Mảnh Ghép Hồn Việt'}
              </p>
            </div>

            {/* Switch Tabs */}
            <div className="flex bg-[#FFE9E6] p-1 rounded-full">
              <button
                type="button"
                onClick={() => setAuthMode('login')}
                className={`flex-1 py-2 rounded-full text-xs font-bold uppercase transition-all cursor-pointer ${
                  authMode === 'login' ? 'bg-[#570000] text-white shadow' : 'text-[#570000]'
                }`}
              >
                Đăng nhập
              </button>
              <button
                type="button"
                onClick={() => setAuthMode('register')}
                className={`flex-1 py-2 rounded-full text-xs font-bold uppercase transition-all cursor-pointer ${
                  authMode === 'register' ? 'bg-[#570000] text-white shadow' : 'text-[#570000]'
                }`}
              >
                Đăng ký
              </button>
            </div>

            {successMessage && (
              <div className="p-3 bg-emerald-100 border border-emerald-500 text-emerald-800 text-xs rounded-xl text-center font-bold animate-fadeIn">
                {successMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {authMode === 'register' && (
                <div>
                  <label className="block text-xs font-bold uppercase text-[#570000] mb-1">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nguyễn Văn An"
                    className="w-full p-3 bg-white border border-[#C5B358] rounded-xl text-xs text-[#261816] focus:outline-none focus:border-[#570000]"
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold uppercase text-[#570000] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nguyenvanan@gmail.com"
                  className="w-full p-3 bg-white border border-[#C5B358] rounded-xl text-xs text-[#261816] focus:outline-none focus:border-[#570000]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-[#570000] mb-1">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full p-3 bg-white border border-[#C5B358] rounded-xl text-xs text-[#261816] focus:outline-none focus:border-[#570000]"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#570000] hover:bg-[#800000] text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                >
                  {authMode === 'login' ? 'Đăng Nhập Ngay' : 'Tạo Tài Khoản Mới'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
