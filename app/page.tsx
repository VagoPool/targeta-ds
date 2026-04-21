"use client"
import { motion } from "framer-motion"
import { Smartphone, Globe, Linkedin, ShieldCheck } from "lucide-react"

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6 antialiased">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-sm w-full bg-white rounded-[2.5rem] shadow-xl p-10 border border-slate-100 text-center"
      >
        <div className="flex justify-center items-center gap-2 mb-8 text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Systems Active
        </div>

        <img src="/3.png" alt="Logo" className="w-24 h-24 mx-auto mb-6 object-contain" />
        
        <h1 className="text-2xl font-black text-slate-900 mb-2">DigiSolve</h1>
        <p className="text-slate-400 text-sm mb-10 leading-relaxed">
          Arquitectura digital & <br/> Soluciones de alto impacto.
        </p>

        <div className="flex flex-col gap-3">
          <a href="https://wa.me/52tu_numero" className="flex items-center justify-center gap-3 w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm">
            <Smartphone size={18}/> WhatsApp Support
          </a>
          <a href="#" className="flex items-center justify-center gap-3 w-full py-4 bg-white text-slate-900 border border-slate-100 rounded-2xl font-bold text-sm">
            <Globe size={18}/> Portfolio
          </a>
        </div>

        <div className="mt-12 opacity-20 flex flex-col items-center gap-2">
            <ShieldCheck size={16} />
            <p className="text-[8px] uppercase tracking-[0.3em] font-bold">Secure Environment</p>
        </div>
      </motion.div>
    </main>
  )
}
