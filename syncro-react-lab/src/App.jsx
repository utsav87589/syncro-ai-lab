import React, { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted Safely:', formData);
  };

  return (
    // 1. Global Environment & Canvas Layout
    <div className="min-h-screen w-full bg-[#1E1E1E] flex items-center justify-center p-4 antialiased selection:bg-[#8B5CF6]/30">
      
      {/* 2. Main Card Container (`card/auth-form`) */}
      <div className="w-[480px] bg-[#2A2A2A] rounded-[12px] p-[32px] flex flex-col gap-[24px] shadow-2xl border border-white/[0.04]">
        
        {/* Header Block / Brand Entry */}
        <div className="flex flex-col gap-1.5">
          <h2 className="text-xl font-semibold tracking-tight text-white">Create your account</h2>
          <p className="text-sm text-zinc-400">Enter your details below to get started</p>
        </div>

        {/* Core Form Component */}
        <form onSubmit={handleSubmit} className="contents">
          
          {/* 3. Form Fields Block (`stack/form-inputs`) */}
          <div className="flex flex-col gap-[16px]">
            
            {/* Input Group: Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[14px] text-zinc-400 font-normal">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="h-[48px] rounded-[8px] border border-white/[0.08] bg-white/[0.02] px-[16px] text-sm text-white placeholder-zinc-600 focus:border-[#8B5CF6] focus:bg-white/[0.04] focus:outline-none transition-all duration-200"
                required
              />
            </div>

            {/* Input Group: Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[14px] text-zinc-400 font-normal">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
                className="h-[48px] rounded-[8px] border border-white/[0.08] bg-white/[0.02] px-[16px] text-sm text-white placeholder-zinc-600 focus:border-[#8B5CF6] focus:bg-white/[0.04] focus:outline-none transition-all duration-200"
                required
              />
            </div>

            {/* Input Group: Password */}
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-[14px] text-zinc-400 font-normal">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••"
                className="h-[48px] rounded-[8px] border border-white/[0.08] bg-white/[0.02] px-[16px] text-sm text-white placeholder-zinc-600 focus:border-[#8B5CF6] focus:bg-white/[0.04] focus:outline-none transition-all duration-200"
                required
              />
            </div>

          </div>

          {/* 5. Primary Action Button (`button/primary`) */}
          <button
            type="submit"
            className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] active:bg-[#6D28D9] py-[12px] rounded-[8px] text-[14px] font-medium text-white transition-colors duration-200 cursor-pointer shadow-md shadow-[#8B5CF6]/10"
          >
            Sign Up
          </button>

        </form>

        {/* 4. OAuth Divider Block (`stack/oauth-content`) */}
        <div className="flex flex-col gap-[12px]">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/[0.06]"></div>
            </div>
            <span className="relative bg-[#2A2A2A] px-3 text-[12px] tracking-wider text-zinc-500 uppercase">
              Or Continue
            </span>
          </div>

          <button
            type="button"
            onClick={() => console.log('Google Auth Triggered')}
            className="w-full h-[48px] rounded-[8px] border border-white/[0.08] hover:border-white/[0.15] bg-white/[0.01] hover:bg-white/[0.04] text-sm text-white font-medium flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer"
          >
            {/* Minimal Inline Google SVG Icon */}
            <svg className="h-4 w-4" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                fill="#FBBC05"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                fill="#EA4335"
              />
            </svg>
            With Google
          </button>
        </div>

        {/* 6. Footer Block (`group/footer`) */}
        <div className="text-center text-[14px]">
          <span className="text-zinc-500">Already have an account? </span>
          <a
            href="#signin"
            className="text-[#8B5CF6] hover:text-[#9F67FF] font-medium transition-colors duration-150 underline-offset-4 hover:underline"
          >
            Sign In
          </a>
        </div>

      </div>
    </div>
  );
}