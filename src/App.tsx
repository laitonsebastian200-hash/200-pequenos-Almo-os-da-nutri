/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Flame, 
  UtensilsCrossed, 
  ShoppingBasket, 
  ChefHat, 
  Heart, 
  ChevronDown, 
  ChevronUp,
  Mail,
  Printer,
  Smartphone,
  Monitor,
  RefreshCcw,
  PlusCircle
} from 'lucide-react';

const CHECKOUT_URL = "https://pay.hotmart.com/T105311278S?bid=1775764121994";

const CTAButton = ({ children, className = "", toCheckout = false }: { children: React.ReactNode, className?: string, toCheckout?: boolean }) => (
  <motion.a
    href={toCheckout ? CHECKOUT_URL : "#pricing"}
    target={toCheckout ? "_blank" : undefined}
    rel={toCheckout ? "noopener noreferrer" : undefined}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`inline-block bg-brand-green text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wider text-lg text-center cursor-pointer ${className}`}
  >
    {children}
  </motion.a>
);

interface RecipeCardProps {
  title: string;
  time: string;
  calories: string;
  image: string;
  key?: number | string;
}

const RecipeCard = ({ title, time, calories, image }: RecipeCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
  >
    <div className="relative h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-3 right-3 bg-white/90 p-1.5 rounded-full text-brand-brown">
        <Heart className="w-5 h-5 fill-brand-brown" />
      </div>
    </div>
    <div className="p-5 text-center">
      <h3 className="font-serif font-bold text-lg leading-tight mb-2 uppercase">{title}</h3>
      <p className="text-sm text-gray-500 font-medium uppercase tracking-tighter">
        {time} | {calories}
      </p>
    </div>
  </motion.div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-brand-brown/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex justify-between items-center text-left font-bold text-brand-brown hover:text-brand-green transition-colors"
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const recipes = [
    { title: "Ovos de frigideira com frios", time: "10 Minutos", calories: "195 Calorias", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800" },
    { title: "Pizza rápida de frigideira", time: "3 Ingredientes", calories: "207 Calorias", image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=800" },
    { title: "Panqueca fit de banana", time: "7 Minutos", calories: "183 Calorias", image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&q=80&w=800" },
    { title: "Omelete de frios tostada", time: "9 Minutos", calories: "125 Calorias", image: "https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?auto=format&fit=crop&q=80&w=800" },
    { title: "Salada de frutas digestivas", time: "6 Frutas", calories: "120 Calorias", image: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&q=80&w=800" },
    { title: "Pão cremoso gratinado", time: "8 Minutos", calories: "170 Calorias", image: "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?auto=format&fit=crop&q=80&w=800" },
    { title: "Shake detox saborosos", time: "6 Minutos", calories: "120 Calorias", image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&q=80&w=800" },
    { title: "Bolo de banana de caneca", time: "3 Ingredientes", calories: "175 Calorias", image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="min-h-screen selection:bg-brand-green selection:text-white">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 text-center max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-brand-brown mb-2 leading-tight"
        >
          200 PEQUENOS-ALMOÇOS
          <span className="block text-3xl md:text-5xl font-normal mt-2">DA NUTRI (COM SABOR)</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-brand-brown/80 max-w-3xl mx-auto mb-10"
        >
          Receitas <span className="font-bold">baixas em calorias</span> criadas pela nutricionista Carolina Vasconcelos, com um sabor verdadeiramente <span className="font-bold">delicioso</span>.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-3xl overflow-hidden mb-12 shadow-2xl">
          {[
            "https://files.greatpages.com.br/arquivos/paginas_editor/454234-db461bf3517ef23f5e33a5fff10e12ad.png",
            "https://files.greatpages.com.br/arquivos/paginas_editor/454234-660cfb2384ab7e1bada661aaacc364a1.png",
            "https://files.greatpages.com.br/arquivos/paginas_editor/454234-8120bd804fc48698d6fc37c11537e29e.png",
            "https://files.greatpages.com.br/arquivos/paginas_editor/454234-405a6435ca1abdbb63da1df0c765cf54.png"
          ].map((src, i) => (
            <img 
              key={i} 
              src={src} 
              alt="Breakfast Recipe" 
              className="w-full h-48 md:h-64 object-cover"
              referrerPolicy="no-referrer"
            />
          ))}
        </div>

        <CTAButton>QUERO AS RECEITAS!</CTAButton>
      </section>

      {/* What you'll find */}
      <section className="bg-brand-brown py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-12 uppercase">O QUE VAI ENCONTRAR:</h2>
          
          <div className="bg-brand-cream rounded-3xl p-8 md:p-12 shadow-inner">
            <ul className="space-y-6 text-lg md:text-xl font-medium">
              {[
                { icon: <Flame className="text-brand-green" />, text: "Receitas até 350 calorias" },
                { icon: <Heart className="text-brand-green" />, text: "Com sabores realmente deliciosos" },
                { icon: <ChefHat className="text-brand-green" />, text: "Ricas em proteínas e vitaminas essenciais" },
                { icon: <Clock className="text-brand-green" />, text: "Preparadas em apenas 15 minutos" },
                { icon: <ShoppingBasket className="text-brand-green" />, text: "Com ingredientes comuns" },
                { icon: <UtensilsCrossed className="text-brand-green" />, text: "Só precisa de liquidificadora e frigideira" },
                { icon: <CheckCircle2 className="text-brand-green" />, text: "Passo a passo de preparação" },
              ].map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="text-center mt-12">
            <CTAButton>QUERO AS RECEITAS!</CTAButton>
          </div>
        </div>
      </section>

      {/* Recipe Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase">VEJA O QUE VAI APRENDER:</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {recipes.map((recipe, idx) => (
            <RecipeCard 
              key={idx} 
              title={recipe.title}
              time={recipe.time}
              calories={recipe.calories}
              image={recipe.image}
            />
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-4xl md:text-5xl font-serif font-black mb-8">+200 OUTRAS<br/><span className="font-normal text-3xl md:text-4xl">opções da Nutri</span></h3>
          <CTAButton>QUERO AS RECEITAS!</CTAButton>
        </div>
      </section>

      {/* Bio Section */}
      <section className="bg-brand-dark py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://i.pinimg.com/736x/95/14/91/951491846e356ed46400276ad1420c23.jpg" 
              alt="Carolina Vasconcelos" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 leading-tight">CARDÁPIO FEITO PELA NUTRICIONISTA</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 uppercase">CAROLINA VASCONCELOS</h3>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
              Carolina, nutricionista especializada em alimentação funcional, criou mais de 200 receitas de pequenos-almoços saudáveis, verdadeiramente deliciosos e prontos em até 15 minutos. Cada receita foi pensada para nutrir o seu corpo sem abdicar do prazer de comer.
            </p>
            <div className="flex items-center gap-4 text-brand-green font-bold text-xl">
              <CheckCircle2 className="w-8 h-8" />
              <span>Plano validado por especialistas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-2">RECEBA AINDA</h2>
          <h3 className="text-4xl md:text-6xl font-black mb-16 uppercase">+ 3 BÓNUS EXCLUSIVOS:</h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { title: "BÓNUS 1", subtitle: "200 SOBREMESAS SEM AÇÚCAR", price: "R$ 19,90", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800" },
              { title: "BÓNUS 2", subtitle: "30 MARMITAS FIT PARA CONGELAR", price: "R$ 12,90", image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800" },
              { title: "BÓNUS 3", subtitle: "60 SUMOS DETOX", price: "R$ 9,90", image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&q=80&w=800" },
            ].map((bonus, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-brand-brown rounded-3xl p-6 text-white shadow-xl"
              >
                <img src={bonus.image} alt={bonus.title} className="w-full h-48 object-cover rounded-2xl mb-6" referrerPolicy="no-referrer" />
                <h4 className="font-bold text-xl mb-2">{bonus.title}</h4>
                <p className="font-black text-lg mb-4 leading-tight">{bonus.subtitle}</p>
                <p className="text-sm">
                  <span className="line-through opacity-50">{bonus.price}</span> HOJE É <span className="text-brand-green font-bold">GRÁTIS</span>
                </p>
              </motion.div>
            ))}
          </div>
          
          <CTAButton>QUERO AS RECEITAS!</CTAButton>
        </div>
      </section>

      {/* Problems & Advantages */}
      <section className="bg-brand-brown py-20 px-4 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 uppercase">PARA QUEM ENFRENTA:</h2>
          <div className="space-y-4 mb-20">
            {[
              "Falta de opções saudáveis para o pequeno-almoço",
              "Dificuldade em perder peso e alimentar-se bem",
              "Falta de receitas saborosas que nutrem",
              "Falta de receitas rápidas para o pequeno-almoço",
              "Falta de nutrientes essenciais para o dia"
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-4 text-lg md:text-xl">
                <XCircle className="text-red-500 shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className="bg-white text-brand-brown rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-12 uppercase">VEJA AS VANTAGENS:</h2>
            <div className="space-y-4 mb-12">
              {[
                "Plano criado por uma nutricionista",
                "Mais de 200 opções saudáveis",
                "Muito baixas em calorias",
                "Um sabor novo todos os dias, sem enjoar",
                "Preparadas em menos de 15 minutos",
                "Não precisa de utensílios profissionais",
                "Nutrição completa para começar bem o dia"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-4 text-lg md:text-xl font-medium">
                  <CheckCircle2 className="text-brand-green shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <CTAButton className="w-full md:w-auto">QUERO AS RECEITAS!</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-brand-cream">
        <div className="max-w-4xl mx-auto bg-brand-dark rounded-[3rem] p-8 md:p-16 text-white text-center shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/20 blur-3xl rounded-full -mr-32 -mt-32"></div>
          
          <div className="relative z-10">
            <div className="mb-12 flex justify-center gap-4">
              <img src="https://files.greatpages.com.br/arquivos/paginas_editor/454234-db461bf3517ef23f5e33a5fff10e12ad.png" alt="Ebook" className="w-32 h-48 object-cover rounded-lg shadow-lg rotate-[-5deg]" referrerPolicy="no-referrer" />
              <img src="https://files.greatpages.com.br/arquivos/paginas_editor/454234-660cfb2384ab7e1bada661aaacc364a1.png" alt="Ebook" className="w-32 h-48 object-cover rounded-lg shadow-lg rotate-[5deg] -ml-12 mt-4" referrerPolicy="no-referrer" />
            </div>

            <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase leading-tight">
              200 PEQUENOS-ALMOÇOS<br/>
              <span className="font-serif font-normal text-2xl md:text-4xl">da Nutri (com sabor)</span>
            </h2>

            <ul className="space-y-3 text-lg md:text-xl mb-12 text-white/80">
              <li>+200 sobremesas sem açúcar</li>
              <li>+ 30 marmitas fit para congelar</li>
              <li>+ 60 sumos detox</li>
              <li>+ Acesso vitalício</li>
              <li>+ Futuras atualizações</li>
            </ul>

            <div className="mb-12">
              <p className="text-xl md:text-2xl opacity-60 line-through">de R$ 29,90 por</p>
              <p className="text-6xl md:text-8xl font-black text-white">R$ 10,00</p>
            </div>

            <CTAButton toCheckout className="w-full md:w-auto">QUERO AS RECEITAS!</CTAButton>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-lg">
          <div className="w-32 h-32 shrink-0 bg-yellow-100 rounded-full flex items-center justify-center border-4 border-yellow-500">
            <div className="text-center">
              <span className="block text-4xl font-black text-yellow-600">7</span>
              <span className="block text-xs font-bold text-yellow-600 uppercase">Dias</span>
              <span className="block text-[10px] font-bold text-yellow-600 uppercase">Garantia</span>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-brand-brown mb-2 uppercase">SATISFAÇÃO GARANTIDA OU RISCO ZERO</h2>
            <p className="text-gray-600 leading-relaxed">
              Tem 7 dias para testar o produto. Se não ficar satisfeito, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracias.
            </p>
          </div>
        </div>
      </section>

      {/* How you'll receive */}
      <section className="bg-brand-brown py-20 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-16 uppercase">COMO IREI RECEBER AS RECEITAS:</h2>
          
          <div className="grid sm:grid-cols-2 gap-8 text-left mb-16">
            {[
              { icon: <Mail />, text: "Recebe diretamente no e-mail" },
              { icon: <Printer />, text: "Pode imprimir em papel" },
              { icon: <Smartphone />, text: "Pode ver no telemóvel" },
              { icon: <Monitor />, text: "Pode visualizar no computador ou tablet" },
              { icon: <PlusCircle />, text: "Novas receitas todos os meses" },
              { icon: <RefreshCcw />, text: "Perdeu as receitas? Nós enviamos de novo" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 text-lg">
                <div className="p-2 bg-white/10 rounded-lg">{item.icon}</div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          
          <CTAButton>QUERO AS RECEITAS!</CTAButton>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center text-brand-brown mb-12 uppercase">PERGUNTAS FREQUENTES:</h2>
          
          <div className="space-y-2">
            <FAQItem 
              question="Como vou receber o e-book após a compra?" 
              answer="Assim que seu pagamento for aprovado, você receberá um e-mail com todas as instruções para baixar o e-book e os bónus. O acesso é imediato e o material será seu para sempre."
            />
            <FAQItem 
              question="O e-book é físico ou digital?" 
              answer="O e-book é 100% digital (PDF), o que permite que você o acesse de qualquer dispositivo (telemóvel, tablet ou computador) e comece a cozinhar imediatamente."
            />
            <FAQItem 
              question="As receitas são difíceis de fazer?" 
              answer="Não! Todas as receitas foram pensadas para serem práticas, rápidas e com ingredientes que você já tem em casa. O passo a passo é muito simples."
            />
            <FAQItem 
              question="Tenho pouco tempo. O e-book ainda é para mim?" 
              answer="Com certeza. A maioria das receitas demora menos de 15 minutos a preparar, ideal para quem tem manhãs ocupadas mas não quer abdicar da saúde."
            />
            <FAQItem 
              question="O pagamento é seguro?" 
              answer="Sim, utilizamos as plataformas de pagamento mais seguras do mercado, com criptografia de ponta para garantir a proteção dos seus dados."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark py-12 px-4 text-white/40 text-center text-sm">
        <p>&copy; 2026 Carolina Vasconcelos Nutrição. Todos os direitos reservados.</p>
        <div className="mt-4 flex justify-center gap-8">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
        </div>
      </footer>
    </div>
  );
}
