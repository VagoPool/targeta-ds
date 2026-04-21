"use client"
import { motion } from "framer-motion"
import { Smartphone, Globe, Linkedin, ShieldCheck } from "lucide-react"

export default function DigiSolveCard() {
  return (
    <main className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6 font-sans overflow-hidden">
      {/* Fondo con un toque tech sutil */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-sm w-full bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-10 border border-white/20 backdrop-blur-sm"
      >
        {/* Status con pulso */}
        <div className="flex justify-center items-center gap-2 mb-10">
          <span className="flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Systems Active</span>
        </div>

        {/* Logo con entrada suave */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="mb-8 flex justify-center"
        >
          <img src="/3.png" alt="Logo" className="w-24 h-24 object-contain drop-shadow-sm" />
        </motion.div>

        <h1 className="text-center text-2xl font-black text-slate-900 tracking-tight mb-2">DigiSolve</h1>
        <p className="text-center text-slate-400 text-sm mb-10 leading-relaxed px-4">
          Arquitectura digital & <br/> Soluciones de alto impacto.
        </p>

        {/* Botones Animados */}
        <div className="space-y-3">
          {[
            { name: 'WhatsApp Support', icon: <Smartphone size={18}/>, color: 'bg-slate-900 text-white', link: 'https://wa.me/52tu_num' },
            { name: 'Our Portfolio', icon: <Globe size={18}/>, color: 'bg-white text-slate-900 border border-slate-100', link: '#' },
            { name: 'LinkedIn', icon: <Linkedin size={18}/>, color: 'bg-white text-slate-900 border border-slate-100', link: '#' }
          ].map((item, i) => (
            <motion.a
              key={item.name}
              href={item.link}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 + 0.5 }}
              whileHover={{ x: 5, backgroundColor: i === 0 ? "#1e293b" : "#f8fafc" }}
              className={`flex items-center justify-between w-full p-4 rounded-2xl font-bold text-sm shadow-sm transition-colors ${item.color}`}
            >
              <span className="flex items-center gap-3">{item.icon} {item.name}</span>
              <span className="opacity-30">→</span>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-2">
            <ShieldCheck size={16} className="text-slate-300" />
            <p className="text-[9px] text-slate-300 uppercase tracking-[0.4em] font-bold">Encrypted & Secure</p>
        </div>
      </motion.div>
    </main>
  )
}
 
