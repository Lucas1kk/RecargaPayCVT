/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { VideoPlayer } from './components/VideoPlayer';
import { CommentsSection } from './components/Comments';
import { ArrowRight, ShieldCheck, Zap, Gift, CreditCard, Sparkles, Lock, BadgeCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const VIMEO_URL = "https://player.vimeo.com/video/1170383756";
  const AFFILIATE_LINK = "https://recargapay.com.br/r/jossal502-yVO";

  return (
    <div className="min-h-screen premium-bg font-sans text-white selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden">
      
      {/* Ambient Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-amber-600/10 rounded-full blur-[120px] animate-[float_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-yellow-600/10 rounded-full blur-[120px] animate-[float_15s_ease-in-out_infinite_reverse]" />
      </div>

      {/* Announcement Bar */}
      <div className="relative z-10 bg-black/60 backdrop-blur-md border-b border-amber-500/10 text-center py-3 px-4 text-sm font-medium tracking-wide flex items-center justify-center flex-wrap">
        <span className="inline-block animate-pulse mr-2 text-amber-400">⚡</span>
        <span className="bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent font-bold uppercase">
          Atenção:
        </span>
        <span className="ml-2 text-gray-300">Oferta Disponível!</span>
      </div>

      <main className="relative z-10 container mx-auto px-4 py-12 md:py-20 max-w-5xl">
        
        {/* Hero Headline */}
        <div className="text-center mb-12 md:mb-16 space-y-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-black/40 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-widest mb-8 hover:bg-green-500/10 transition-colors cursor-default shadow-[0_0_15px_rgba(34,197,94,0.15)]"
            >
              <BadgeCheck size={16} className="text-green-400" />
              Página verificada.
            </motion.div>
            
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6 text-white"
            >
              Ative seu bônus de <br className="hidden md:block" />
              <span className="gold-text drop-shadow-[0_0_25px_rgba(232,181,82,0.2)]">
                boas-vindas no RecargaPay
              </span>
            </motion.h1>
            
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium"
            >
              Entenda como novos usuários podem receber benefícios ao criar conta no RecargaPay
            </motion.p>
          </motion.div>
        </div>

        {/* Video Section */}
        <motion.div 
          className="mb-16 relative max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
        >
          {/* Gold Glow behind video */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/0 via-amber-500/20 to-yellow-600/0 rounded-2xl blur-xl opacity-50 animate-pulse" />
          
          <div className="relative rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-black">
            <VideoPlayer url={VIMEO_URL} />
          </div>
          
          <p className="text-center text-xs text-gray-500 mt-6 flex items-center justify-center gap-2 uppercase tracking-widest font-semibold">
            <ShieldCheck size={14} className="text-amber-500" />
            Conteúdo Verificado • Acesso Seguro
          </p>
        </motion.div>

        {/* Main CTA Section */}
        <div className="flex flex-col items-center justify-center space-y-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full text-center relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            
            <a 
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center w-full md:w-auto min-w-[340px] px-10 py-5 text-xl md:text-2xl font-black gold-button rounded-full transition-all duration-300 overflow-hidden group-hover:scale-105"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
              <span className="relative z-10 flex items-center gap-3 tracking-wide">
                RESGATAR MEUS R$20
                <ArrowRight className="group-hover:translate-x-2 transition-transform" strokeWidth={3} />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          <BenefitCard 
            icon={<Gift className="text-amber-400" size={28} />}
            title="Bônus Instantâneo"
            description="Link exclusivo que ativa R$20 de saldo na sua carteira imediatamente após o cadastro."
          />
          <BenefitCard 
            icon={<Zap className="text-amber-400" size={28} />}
            title="Pix no Crédito"
            description="Transforme o limite do seu cartão em dinheiro na conta. Pague boletos e faça Pix parcelado."
          />
          <BenefitCard 
            icon={<CreditCard className="text-amber-400" size={28} />}
            title="Cashback Infinito"
            description="O único app que devolve dinheiro real em praticamente todos os pagamentos que você faz."
          />
        </div>

        {/* Comments Section */}
        <CommentsSection />

      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 mt-20 py-12 bg-black/40 backdrop-blur-lg">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm mb-6">
            Conteúdo informativo destinado a apresentar tutoriais, dicas e orientações sobre aplicativos financeiros e serviços digitais.
          </p>
          <div className="flex justify-center gap-8 text-xs text-gray-400 uppercase tracking-widest font-semibold">
            <span className="hover:text-amber-400 cursor-pointer transition-colors">Termos</span>
            <span className="hover:text-amber-400 cursor-pointer transition-colors">Privacidade</span>
            <span className="hover:text-amber-400 cursor-pointer transition-colors">Contato</span>
          </div>
          <p className="text-gray-600 text-[10px] mt-8 font-mono">
            © {new Date().getFullYear()} PREMIUM_INVITE_SYSTEM. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="glass-panel-gold p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group border border-white/5 hover:border-amber-500/30">
      <div className="bg-black/40 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
