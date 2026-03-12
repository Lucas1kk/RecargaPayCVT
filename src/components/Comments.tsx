import React, { useState } from 'react';
import { Star, ThumbsUp, CheckCircle2, User, MessageSquare } from 'lucide-react';
import { cn } from '../lib/utils';

const FAKE_COMMENTS = [
  {
    id: 1,
    name: "Carlos Eduardo",
    time: "há 2 minutos",
    text: "Cara, muito obrigado! Consegui os R$20 de desconto na hora. Salvou demais pra pagar a conta de luz aqui.",
    likes: 142
  },
  {
    id: 2,
    name: "Fernanda Lima",
    time: "há 5 minutos",
    text: "Eu não acreditava que funcionava, mas baixei pelo link e deu certo. O cashback é real mesmo!",
    likes: 89
  },
  {
    id: 3,
    name: "Roberto Santos",
    time: "há 12 minutos",
    text: "O melhor app de pagamentos. Uso pra tudo agora, principalmente pra recarga de celular que volta dinheiro.",
    likes: 56
  },
  {
    id: 4,
    name: "Juliana Martins",
    time: "há 25 minutos",
    text: "Top demais! O vídeo explicou certinho. Já mandei pro meu marido baixar também.",
    likes: 34
  },
  {
    id: 5,
    name: "Marcos Vinícius",
    time: "há 1 hora",
    text: "Alguém sabe se ainda tá valendo? Acabei de fazer e funcionou!",
    likes: 21
  }
];

export function CommentsSection() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFakeSuccess, setShowFakeSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setShowFakeSuccess(true);
      setName('');
      setComment('');
      
      // Hide success message after a few seconds
      setTimeout(() => setShowFakeSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="w-full max-w-3xl mx-auto glass-panel-gold rounded-2xl p-6 md:p-8 mt-12 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none" />
      
      <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
        <span className="bg-black/40 text-amber-400 p-2 rounded-lg border border-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.1)]">
          <MessageSquare size={20} />
        </span>
        Comentários da Comunidade
      </h3>

      {/* Comment List */}
      <div className="space-y-6 mb-12 relative z-10">
        {FAKE_COMMENTS.map((comment) => (
          <div key={comment.id} className="flex gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 group">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-black border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-sm shadow-lg">
                {comment.name.charAt(0)}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-bold text-gray-200 text-sm group-hover:text-amber-400 transition-colors">{comment.name}</h4>
                <span className="text-xs text-gray-500 font-mono">{comment.time}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-2">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Fake Comment Form */}
      <div className="border-t border-white/10 pt-8 relative z-10">
        <h4 className="font-semibold text-white mb-4">Deixe seu comentário</h4>
        
        {showFakeSuccess ? (
          <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-4 rounded-xl text-sm flex items-center gap-3 animate-in fade-in zoom-in duration-300">
            <CheckCircle2 size={18} />
            Seu comentário foi enviado para moderação e aparecerá em breve!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wider">Nome Completo</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={16} className="text-gray-500 group-focus-within:text-amber-400 transition-colors" />
                </div>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-gray-200 text-sm transition-all placeholder:text-gray-600"
                  placeholder="Seu nome"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="comment" className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wider">Comentário</label>
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={3}
                className="block w-full p-3 bg-black/40 border border-white/10 rounded-xl focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-gray-200 text-sm transition-all resize-none placeholder:text-gray-600"
                placeholder="Escreva sua opinião..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full md:w-auto px-8 py-3 rounded-xl font-bold text-black transition-all shadow-lg",
                isSubmitting 
                  ? "bg-gray-700 cursor-not-allowed text-gray-400" 
                  : "bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] active:scale-95"
              )}
            >
              {isSubmitting ? 'Enviando...' : 'Publicar Comentário'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
