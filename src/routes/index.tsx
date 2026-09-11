import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Code2, Command, Gauge, Layers3, Sparkles, WandSparkles, Zap } from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const CHECKOUT_URL = "https://pay.cakto.com.br/xk9fr3o_1101819";

const features = [
  { icon: Zap, title: "Quick Fix", text: "Resolva ajustes e correções recorrentes sem transformar cada detalhe em uma longa sequência de prompts." },
  { icon: Sparkles, title: "Skills personalizadas", text: "Crie um fluxo de trabalho mais consistente com instruções pensadas para o seu jeito de construir no Lovable." },
  { icon: Command, title: "Commands", text: "Acesse ações rápidas para acelerar tarefas repetitivas e manter o projeto andando." },
  { icon: Code2, title: "Correções rápidas", text: "Menos tempo brigando com pequenos bugs, estilos quebrados e alterações que deveriam ser simples." },
];

const included = ["Uso do LovaRpm", "Quick Fix", "Skills personalizadas", "Commands", "Correções rápidas", "Atualizações futuras", "Remoção de badge quando aplicável"];

function Logo() {
  return <a href="#top" className="brand"><span className="brand-mark"><Gauge size={20}/></span><span>Lova<span>Rpm</span></span></a>;
}

function PurchaseButton({ className = "", label = "Baixar LovaRpm" }: { className?: string; label?: string }) {
  return <a className={`button button-primary ${className}`.trim()} href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">{label} <ArrowRight size={18}/></a>;
}

function Index() {
  return (
    <main id="top" className="site-shell">
      <nav className="nav container">
        <Logo />
        <div className="nav-links"><a href="#recursos">Recursos</a><a href="#como-funciona">Como funciona</a><a href="#preco">Preço</a></div>
        <a className="button button-small" href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">Baixar LovaRpm <ArrowRight size={15}/></a>
      </nav>

      <section className="hero container">
        <div className="hero-glow" />
        <div className="eyebrow"><span className="pulse"/> Feito para quem constrói com Lovable</div>
        <h1>Menos prompts.<br/><span>Mais velocidade.</span></h1>
        <p className="hero-copy">O LovaRpm coloca ferramentas rápidas no seu fluxo para corrigir, ajustar e acelerar projetos no Lovable sem perder tempo com tarefas repetitivas.</p>
        <div className="hero-actions"><PurchaseButton/><a className="button button-ghost" href="#recursos">Ver recursos</a></div>
        <div className="micro-proof"><Check size={15}/> Instalação simples <span/> <Check size={15}/> Fluxo mais rápido <span/> <Check size={15}/> Atualizações contínuas</div>

        <div className="product-window">
          <div className="window-top"><div className="dots"><i/><i/><i/></div><div className="window-title"><Gauge size={15}/> LovaRpm</div><div className="status"><span/> Ativo</div></div>
          <div className="window-body">
            <aside><div className="mini-logo"><Gauge size={18}/></div><button className="active"><Zap size={17}/> Quick Fix</button><button><Sparkles size={17}/> Skills</button><button><Command size={17}/> Commands</button></aside>
            <div className="quick-panel"><div className="panel-head"><div><small>QUICK FIX</small><h3>O que você quer corrigir?</h3></div><WandSparkles size={22}/></div><div className="fake-input">Descreva o ajuste que você precisa...<span>⌘ ↵</span></div><div className="quick-grid"><div><Code2/><b>Corrigir layout</b><small>Ajuste rápido de UI</small></div><div><Layers3/><b>Organizar seção</b><small>Estrutura e espaçamento</small></div><div><Sparkles/><b>Melhorar visual</b><small>Refine o acabamento</small></div></div></div>
          </div>
        </div>
      </section>

      <section id="preco" className="pricing-section section container">
        <div className="section-heading"><span>PREÇO DE LANÇAMENTO</span><h2>Comece hoje por menos do que<br/>um café por semana.</h2><p>Acesso completo ao LovaRpm com atualizações contínuas e novas funcionalidades.</p></div>
        <div className="pricing-card">
          <div className="launch-badge">OFERTA DE LANÇAMENTO</div>
          <p className="old-price">R$ 199</p>
          <div className="price"><span>R$</span><strong>25</strong><span>/mês</span></div>
          <p className="price-note">Tudo que você precisa para deixar seu fluxo no Lovable mais rápido.</p>
          <div className="divider"/>
          <div className="included">{included.map(item => <div key={item}><span><Check size={14}/></span>{item}</div>)}</div>
          <PurchaseButton className="price-button" />
          <small className="fine-print">Oferta promocional sujeita a alteração sem aviso prévio.</small>
        </div>
      </section>

      <section id="recursos" className="section container features-section">
        <div className="section-heading left"><span>RECURSOS</span><h2>O trabalho repetitivo<br/>não precisa ser lento.</h2><p>Ferramentas práticas para os pontos do processo que mais roubam tempo.</p></div>
        <div className="feature-grid">{features.map(({icon: Icon,title,text}) => <article key={title}><div className="feature-icon"><Icon size={21}/></div><h3>{title}</h3><p>{text}</p><div className="card-line"/></article>)}</div>
      </section>

      <section id="como-funciona" className="section container workflow">
        <div className="workflow-card"><div><span className="section-kicker">UM FLUXO MAIS DIRETO</span><h2>Você continua criando.<br/><em>O LovaRpm cuida do atrito.</em></h2><p>Use os atalhos e recursos do LovaRpm durante o desenvolvimento para resolver tarefas comuns com menos etapas e manter o foco no que realmente importa: colocar o projeto no ar.</p><a className="text-link" href="#preco">Começar agora <ArrowRight size={17}/></a></div><div className="steps"><div><b>01</b><span><strong>Abra seu projeto</strong><small>Continue trabalhando normalmente no Lovable.</small></span></div><div><b>02</b><span><strong>Use o LovaRpm</strong><small>Escolha o recurso certo para o ajuste que precisa.</small></span></div><div><b>03</b><span><strong>Ganhe velocidade</strong><small>Resolva tarefas recorrentes com menos fricção.</small></span></div></div></div>
      </section>

      <section id="download" className="final-cta container"><div className="cta-glow"/><span>PRONTO PARA ACELERAR?</span><h2>Seu projeto não precisa<br/>de mais um prompt gigante.</h2><p>Leve o LovaRpm para o seu fluxo e construa com mais ritmo.</p><PurchaseButton/></section>

      <footer className="container footer"><Logo/><p>Ferramentas para acelerar seu fluxo no Lovable.</p><span>© 2026 LovaRpm</span></footer>
    </main>
  );
}
