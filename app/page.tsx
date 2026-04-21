"use client"
import { motion } from "framer-motion"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <img src="/3.png" alt="Logo" className="w-32 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-slate-800">DigiSolve</h1>
        <p className="text-slate-500">Arquitectura Digital</p>
      </motion.div>
    </main>
  )
}
