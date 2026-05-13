import { useState } from "react";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import InputGroup from "./InputGroup";
import SocialLogins from "./SocialLogins";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Auth logic goes here
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 md:p-12 flex flex-col justify-center h-full z-10 relative">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-white mb-2">
          {isLogin ? "Welcome Back" : "Join the Nexus"}
        </h2>
        <p className="text-slate-400 text-sm">
          {isLogin 
            ? "Enter your credentials to access your digital arsenal." 
            : "Create an account to unlock premium gear and exclusive drops."}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 mb-8">
        {!isLogin && (
          <InputGroup 
            icon={User} 
            type="text" 
            label="Full Name" 
            placeholder="e.g. Koustav Pan" 
          />
        )}
        <InputGroup 
          icon={Mail} 
          type="email" 
          label="Email Address" 
          placeholder="your@email.com" 
        />
        <InputGroup 
          icon={Lock} 
          type="password" 
          label="Password" 
          placeholder="••••••••" 
        />
        
        {isLogin && (
          <div className="flex justify-end w-full -mt-2">
            <a href="#" className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
              Forgot Password?
            </a>
          </div>
        )}

        <button 
          type="submit" 
          className="w-full py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 mt-2 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:-translate-y-0.5"
        >
          {isLogin ? "Sign In" : "Create Account"}
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      <SocialLogins />

      <div className="mt-8 text-center text-sm text-slate-400">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button 
          onClick={() => setIsLogin(!isLogin)}
          className="text-cyan-400 font-bold hover:underline"
        >
          {isLogin ? "Sign Up" : "Log In"}
        </button>
      </div>
    </div>
  );
}