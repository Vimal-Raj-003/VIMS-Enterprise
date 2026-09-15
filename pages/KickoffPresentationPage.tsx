import React, { useState, useEffect, useRef } from 'react';
import { Page } from '../types';
import Chart from 'chart.js/auto';
import { commoditiesData, CommodityData } from '../components/presentation/costingData';
import {
  SheetMetalVisualSvg,
  PlasticVisualSvg,
  DieCastingVisualSvg,
  MachiningVisualSvg,
  ForgingVisualSvg,
  SecondaryVisualSvg
} from '../components/presentation/CommoditySVGs';
import { PartHeroVisual } from '../components/presentation/PartHeroSVGs';

interface KickoffPresentationPageProps {
  onNavigate?: (page: Page) => void;
  initialView?: 'view-landing' | 'view-slide1' | 'view-slide2' | 'view-slide3' | 'view-slide4';
}

export const KickoffPresentationPage: React.FC<KickoffPresentationPageProps> = ({ 
  onNavigate,
  initialView = 'view-landing'
}) => {
  const [activeView, setActiveView] = useState<string>(initialView);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [selectedCommodity, setSelectedCommodity] = useState<string>('sheetmetal');
  const [partViewMode, setPartViewMode] = useState<'cad' | 'photo'>('cad');
  const [showPhysics, setShowPhysics] = useState<boolean>(false);

  const chartRef = useRef<Chart | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Theme toggle
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Switch view
  const showView = (viewId: string) => {
    setActiveView(viewId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Active commodity data
  const currentCommodity: CommodityData = commoditiesData[selectedCommodity] || commoditiesData.sheetmetal;

  // Render Chart when Slide 3 is active, or theme/selected commodity changes
  useEffect(() => {
    if (activeView !== 'view-slide3') {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
      return;
    }

    const timer = setTimeout(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const isDark = theme === 'dark';
      const labels = ['Material', 'Process', 'Secondary', 'Overheads', 'Pack/Logistics', 'Margin'];
      const values = currentCommodity.chart;
      const colors = ['#2f7df7', '#38bdf8', '#f5b301', '#a78bfa', '#10b981', '#f97316'];

      if (chartRef.current) {
        chartRef.current.destroy();
      }

      chartRef.current = new Chart(canvas, {
        type: 'doughnut',
        data: {
          labels,
          datasets: [{
            data: values,
            backgroundColor: colors,
            borderColor: isDark ? 'rgba(6,13,31,.6)' : 'rgba(255,255,255,.9)',
            borderWidth: 2,
            hoverOffset: 10
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '62%',
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                color: isDark ? '#cfe6ff' : '#0f172a',
                font: { size: 11 },
                boxWidth: 10,
                padding: 8
              }
            },
            tooltip: {
              callbacks: {
                label: (ctx) => ` ${ctx.label}: ${ctx.parsed}%`
              }
            }
          },
          animation: { animateRotate: true, animateScale: true }
        }
      });
    }, 150);

    return () => {
      clearTimeout(timer);
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [activeView, theme, selectedCommodity]);

  return (
    <div data-theme={theme} className="costing-presentation-root min-h-screen relative">
      {/* SCOPED STYLES STRICTLY MATCHING USER SPECIFICATION */}
      <style>{`
        .costing-presentation-root {
          --bg:#f6f8fc; --bg2:#eef2f9; --ink:#0f172a; --muted:#64748b;
          --navy:#0b1e3f; --navy-2:#102a55; --accent:#2f7df7; --accent-2:#38bdf8;
          --gold:#f5b301; --card:rgba(255,255,255,.85); --card-border:rgba(15,23,42,.08);
          --soft:#ffffff; --soft2:#f8fafc; --tag-bg:rgba(47,125,247,.1);
          --tag-border:rgba(47,125,247,.25); --tag-text:#1e40af;
          --glow:rgba(47,125,247,.15);
          background: var(--bg);
          color: var(--ink);
          font-family: 'Inter', system-ui, sans-serif;
          transition: background .6s ease, color .6s ease;
        }
        .costing-presentation-root[data-theme="dark"] {
          --bg:#060d1f; --bg2:#0b1530; --ink:#e6edf7; --muted:#9fb3cf;
          --card:rgba(255,255,255,.04); --card-border:rgba(255,255,255,.08);
          --soft:#0b1e3f; --soft2:#102a55; --tag-bg:rgba(56,189,248,.12);
          --tag-border:rgba(56,189,248,.3); --tag-text:#cfe6ff;
          --glow:rgba(56,189,248,.2);
        }

        /* Theme toggle */
        .costing-presentation-root .theme-toggle {
          position: fixed; top: 22px; right: 24px; z-index: 100;
          width: 56px; height: 30px; border-radius: 999px; border: 1px solid var(--card-border);
          background: var(--card); backdrop-filter: blur(10px); cursor: pointer;
          display: flex; align-items: center; padding: 3px; transition: all .4s ease;
          box-shadow: 0 4px 14px rgba(0,0,0,.08);
        }
        .costing-presentation-root .theme-toggle .knob {
          width: 24px; height: 24px; border-radius: 50%; display: grid; place-items: center;
          background: linear-gradient(135deg,#f5b301,#f97316); transition: all .5s cubic-bezier(.2,.7,.2,1);
          box-shadow: 0 2px 8px rgba(245,179,1,.4);
        }
        .costing-presentation-root[data-theme="dark"] .theme-toggle .knob {
          transform: translateX(26px);
          background: linear-gradient(135deg,#1e293b,#0f172a);
          box-shadow: 0 2px 8px rgba(56,189,248,.4) inset;
        }
        .costing-presentation-root .theme-toggle .knob svg { width: 14px; height: 14px; }
        .costing-presentation-root[data-theme="dark"] .theme-toggle .knob .sun { display: none; }
        .costing-presentation-root[data-theme="dark"] .theme-toggle .knob .moon { display: block; }
        .costing-presentation-root .theme-toggle .knob .moon { display: none; }

        /* Exit button */
        .costing-presentation-root .exit-site-btn {
          position: fixed; top: 22px; right: 90px; z-index: 100;
          padding: 5px 12px; border-radius: 999px; border: 1px solid var(--card-border);
          background: var(--card); backdrop-filter: blur(10px); cursor: pointer;
          display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600;
          color: var(--ink); box-shadow: 0 4px 14px rgba(0,0,0,.06);
          transition: all .3s ease;
        }
        .costing-presentation-root .exit-site-btn:hover {
          border-color: var(--accent); color: var(--accent); transform: translateY(-1px);
        }

        /* Views */
        .costing-presentation-root .view { display: none; min-height: 100vh; animation: cpFadeIn .5s ease; }
        .costing-presentation-root .view.active { display: block; }
        @keyframes cpFadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }

        /* Landing */
        .costing-presentation-root .landing {
          min-height: 100vh; padding: 80px 56px 60px;
          background:
            radial-gradient(900px 500px at 85% -10%, var(--glow), transparent 60%),
            radial-gradient(700px 500px at -10% 110%, rgba(245,179,1,.06), transparent 60%),
            var(--bg);
          transition: background .6s ease;
        }
        .costing-presentation-root .landing-head { max-width: 1200px; margin: 0 auto 40px; }
        .costing-presentation-root .landing-head .eyebrow {
          display: inline-block; font-size: 11px; letter-spacing: 3px; text-transform: uppercase;
          color: var(--accent); padding: 6px 12px; border: 1px solid var(--tag-border); border-radius: 999px;
          background: var(--tag-bg); margin-bottom: 14px;
        }
        .costing-presentation-root .landing-head h1 { font-size: 44px; font-weight: 700; margin: 0 0 10px; letter-spacing: -.5px; line-height: 1.15; }
        .costing-presentation-root .landing-head h1 span { background: linear-gradient(90deg,var(--accent),var(--gold)); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .costing-presentation-root .landing-head p { color: var(--muted); font-size: 16px; max-width: 680px; margin: 0; }

        .costing-presentation-root .btn-grid {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(2,1fr); gap: 22px;
        }
        .costing-presentation-root .action-btn {
          position: relative; overflow: hidden;
          padding: 28px; border-radius: 20px; cursor: pointer;
          background: var(--card); border: 1px solid var(--card-border);
          backdrop-filter: blur(10px);
          display: flex; gap: 20px; align-items: flex-start;
          transition: transform .4s cubic-bezier(.2,.7,.2,1), box-shadow .4s ease, border-color .4s ease;
          box-shadow: 0 4px 20px rgba(0,0,0,.04);
        }
        .costing-presentation-root .action-btn:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(0,0,0,.12);
          border-color: var(--accent);
        }
        .costing-presentation-root .action-btn::before {
          content: ""; position: absolute; inset: 0; opacity: 0; transition: opacity .4s ease;
          background: linear-gradient(135deg,var(--glow),transparent 70%); pointer-events: none;
        }
        .costing-presentation-root .action-btn:hover::before { opacity: 1; }
        .costing-presentation-root .action-btn .ico {
          flex: none; width: 56px; height: 56px; border-radius: 14px; display: grid; place-items: center;
          background: linear-gradient(135deg,var(--accent),var(--accent-2)); color: #fff;
          box-shadow: 0 8px 20px var(--glow); transition: transform .4s ease;
        }
        .costing-presentation-root .action-btn:hover .ico { transform: scale(1.08) rotate(-4deg); }
        .costing-presentation-root .action-btn.gold .ico { background: linear-gradient(135deg,#f5b301,#f97316); box-shadow: 0 8px 20px rgba(245,179,1,.3); }
        .costing-presentation-root .action-btn.violet .ico { background: linear-gradient(135deg,#8b5cf6,#6366f1); box-shadow: 0 8px 20px rgba(139,92,246,.3); }
        .costing-presentation-root .action-btn.emerald .ico { background: linear-gradient(135deg,#10b981,#06b6d4); box-shadow: 0 8px 20px rgba(16,185,129,.3); }
        .costing-presentation-root .action-btn h3 { margin: 0 0 6px; font-size: 19px; font-weight: 700; color: var(--ink); }
        .costing-presentation-root .action-btn .desc { margin: 0 0 12px; color: var(--muted); font-size: 13.5px; line-height: 1.55; }
        .costing-presentation-root .action-btn .go {
          display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600;
          color: var(--accent); letter-spacing: .5px; text-transform: uppercase;
        }
        .costing-presentation-root .action-btn .go svg { transition: transform .3s ease; }
        .costing-presentation-root .action-btn:hover .go svg { transform: translateX(4px); }

        /* Slides */
        .costing-presentation-root .slide {
          min-height: 100vh; padding: 32px 48px 80px;
          background:
            radial-gradient(900px 500px at 85% -10%, var(--glow), transparent 60%),
            radial-gradient(700px 500px at -10% 110%, rgba(245,179,1,.06), transparent 60%),
            var(--bg);
          transition: background .6s ease;
        }
        .costing-presentation-root .slide-inner { max-width: 1400px; margin: 0 auto; }
        .costing-presentation-root .topbar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
        .costing-presentation-root .back-btn {
          display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; border-radius: 10px;
          background: var(--card); border: 1px solid var(--card-border); cursor: pointer;
          font-size: 13px; font-weight: 600; color: var(--ink); transition: all .3s ease;
        }
        .costing-presentation-root .back-btn:hover { border-color: var(--accent); color: var(--accent); transform: translateX(-3px); }
        .costing-presentation-root .slide-tag {
          font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--muted);
          padding: 6px 12px; border: 1px solid var(--card-border); border-radius: 999px; background: var(--card);
        }

        .costing-presentation-root h1.title { font-size: 36px; font-weight: 700; margin: 0 0 6px; letter-spacing: -.4px; color: var(--ink); }
        .costing-presentation-root h1.title span { background: linear-gradient(90deg,var(--accent),var(--gold)); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .costing-presentation-root .subtitle { color: var(--muted); margin: 0 0 22px; font-size: 15px; max-width: 720px; }

        /* Cards */
        .costing-presentation-root .card {
          background: var(--card); border: 1px solid var(--card-border);
          border-radius: 16px; backdrop-filter: blur(10px); padding: 18px;
          transition: background .6s ease, border-color .6s ease;
        }
        .costing-presentation-root .card.accent { border-color: var(--tag-border); box-shadow: 0 0 0 1px var(--glow) inset; }

        /* Commodity grid */
        .costing-presentation-root .commodity {
          position: relative; overflow: hidden;
          border-radius: 18px; padding: 0;
          background: var(--card); border: 1px solid var(--card-border);
          transition: transform .4s ease, border-color .4s ease, box-shadow .4s ease;
          display: flex; flex-direction: column;
        }
        .costing-presentation-root .commodity:hover { transform: translateY(-6px); border-color: var(--accent); box-shadow: 0 18px 40px rgba(0,0,0,.12); }
        .costing-presentation-root .commodity .visual {
          height: 170px; position: relative; overflow: hidden;
          background: linear-gradient(135deg,#1e293b,#0f172a);
          display: flex; align-items: flex-end; justify-content: center;
        }
        .costing-presentation-root .commodity .visual svg { width: 100%; height: 100%; }
        .costing-presentation-root .commodity .visual::after {
          content: ""; position: absolute; inset: 0;
          background: linear-gradient(180deg,transparent 50%,rgba(0,0,0,.4));
          pointer-events: none;
        }
        .costing-presentation-root .commodity .visual .badge {
          position: absolute; top: 10px; right: 10px; z-index: 2;
          padding: 4px 10px; border-radius: 999px; font-size: 10px; font-weight: 700;
          letter-spacing: 1px; text-transform: uppercase; color: #fff;
          background: rgba(15,23,42,.7); backdrop-filter: blur(6px); border: 1px solid rgba(255,255,255,.15);
        }
        .costing-presentation-root .commodity .body { padding: 16px 18px 18px; flex: 1; display: flex; flex-direction: column; }
        .costing-presentation-root .commodity h3 { margin: 0 0 4px; font-size: 16px; font-weight: 700; display: flex; align-items: center; gap: 8px; color: var(--ink); }
        .costing-presentation-root .commodity .count { font-size: 11.5px; color: var(--muted); margin-bottom: 10px; }
        .costing-presentation-root .tags { display: flex; flex-wrap: wrap; gap: 5px; }
        .costing-presentation-root .tag {
          font-size: 11px; padding: 4px 8px; border-radius: 999px;
          background: var(--tag-bg); color: var(--tag-text); border: 1px solid var(--tag-border);
        }
        .costing-presentation-root .tag.gold { background: rgba(245,179,1,.12); color: #b45309; border-color: rgba(245,179,1,.3); }
        .costing-presentation-root[data-theme="dark"] .tag.gold { color: #ffe2a0; }

        /* Stats */
        .costing-presentation-root .stat b { font-size: 32px; font-weight: 700; background: linear-gradient(90deg,var(--accent),var(--gold)); -webkit-background-clip: text; background-clip: text; color: transparent; display: block; }
        .costing-presentation-root .stat span { color: var(--muted); font-size: 12.5px; }

        /* Inputs */
        .costing-presentation-root .input-card {
          background: var(--card); border: 1px solid var(--card-border);
          border-radius: 14px; padding: 14px 16px; display: flex; gap: 12px; align-items: flex-start;
          transition: transform .35s ease, border-color .35s ease;
        }
        .costing-presentation-root .input-card:hover { transform: translateY(-3px); border-color: var(--accent); }
        .costing-presentation-root .input-ico {
          width: 36px; height: 36px; border-radius: 10px; display: grid; place-items: center; flex: none;
          background: var(--tag-bg); color: var(--accent);
        }

        /* Complexity */
        .costing-presentation-root .complex-card {
          background: var(--card); border: 1px solid var(--card-border); border-radius: 18px;
          padding: 18px; transition: all .4s ease; cursor: pointer; position: relative; overflow: hidden;
        }
        .costing-presentation-root .complex-card:hover { transform: translateY(-4px); border-color: var(--accent); }
        .costing-presentation-root .complex-card .part-visual {
          height: 160px; display: grid; place-items: center; margin-bottom: 12px;
          background: linear-gradient(135deg,#1e293b,#0f172a); border-radius: 12px;
          position: relative; overflow: hidden;
        }
        .costing-presentation-root .complex-card .part-visual svg { width: 80%; height: 80%; max-width: 180px; transition: transform .5s ease; }
        .costing-presentation-root .complex-card:hover .part-visual svg { transform: scale(1.08); }
        .costing-presentation-root .complex-card.s:hover { border-color: #10b981; box-shadow: 0 12px 30px rgba(16,185,129,.15); }
        .costing-presentation-root .complex-card.m:hover { border-color: #f5b301; box-shadow: 0 12px 30px rgba(245,179,1,.15); }
        .costing-presentation-root .complex-card.c:hover { border-color: #ef4444; box-shadow: 0 12px 30px rgba(239,68,68,.15); }
        .costing-presentation-root .pill {
          display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 999px;
          font-size: 12px; font-weight: 600; border: 1px solid var(--card-border); background: var(--card);
        }
        .costing-presentation-root .pill.s { border-color: rgba(16,185,129,.4); color: #059669; background: rgba(16,185,129,.08); }
        .costing-presentation-root .pill.m { border-color: rgba(245,179,1,.4); color: #b45309; background: rgba(245,179,1,.08); }
        .costing-presentation-root .pill.c { border-color: rgba(239,68,68,.4); color: #dc2626; background: rgba(239,68,68,.08); }
        .costing-presentation-root[data-theme="dark"] .pill.s { color: #6ee7b7; }
        .costing-presentation-root[data-theme="dark"] .pill.m { color: #fcd34d; }
        .costing-presentation-root[data-theme="dark"] .pill.c { color: #fca5a5; }

        /* Complexity animation */
        .costing-presentation-root .complex-card .pulse {
          position: absolute; top: 10px; right: 10px; width: 8px; height: 8px; border-radius: 50%; z-index: 2;
        }
        .costing-presentation-root .complex-card.s .pulse { background: #10b981; box-shadow: 0 0 0 0 rgba(16,185,129,.6); animation: cpPulse 2s infinite; }
        .costing-presentation-root .complex-card.m .pulse { background: #f5b301; box-shadow: 0 0 0 0 rgba(245,179,1,.6); animation: cpPulse 1.5s infinite; }
        .costing-presentation-root .complex-card.c .pulse { background: #ef4444; box-shadow: 0 0 0 0 rgba(239,68,68,.6); animation: cpPulse 1s infinite; }
        @keyframes cpPulse {
          0% { box-shadow: 0 0 0 0 currentColor; opacity: 1; }
          70% { box-shadow: 0 0 0 12px transparent; opacity: 0; }
          100% { box-shadow: 0 0 0 0 transparent; opacity: 0; }
        }

        /* Report */
        .costing-presentation-root .report { display: grid; grid-template-columns: 1.3fr 1fr; gap: 22px; }
        .costing-presentation-root .report .left, .costing-presentation-root .report .right {
          background: var(--card); border: 1px solid var(--card-border);
          border-radius: 18px; padding: 20px; display: flex; flex-direction: column;
          max-height: calc(100vh - 220px); overflow: hidden;
        }
        .costing-presentation-root .scroll-area { overflow-y: auto; flex: 1; padding-right: 6px; }
        .costing-presentation-root .scroll-area::-webkit-scrollbar { width: 6px; }
        .costing-presentation-root .scroll-area::-webkit-scrollbar-thumb { background: var(--tag-border); border-radius: 3px; }
        .costing-presentation-root .scroll-area::-webkit-scrollbar-track { background: transparent; }

        /* Commodity selector */
        .costing-presentation-root .commodity-selector {
          display: flex; gap: 8px; padding: 8px; border-radius: 14px; margin-bottom: 14px;
          background: var(--soft2); border: 1px solid var(--card-border);
          overflow-x: auto; flex-wrap: nowrap;
        }
        .costing-presentation-root .commodity-selector::-webkit-scrollbar { height: 0; }
        .costing-presentation-root .cs-btn {
          flex: none; padding: 8px 14px; border-radius: 10px; cursor: pointer;
          background: transparent; border: 1px solid transparent;
          font-size: 12px; font-weight: 600; color: var(--muted);
          display: inline-flex; align-items: center; gap: 6px;
          transition: all .3s ease; white-space: nowrap;
        }
        .costing-presentation-root .cs-btn:hover { color: var(--ink); background: var(--card); }
        .costing-presentation-root .cs-btn.active {
          background: linear-gradient(135deg,var(--accent),var(--accent-2));
          color: #fff; border-color: transparent;
          box-shadow: 0 4px 12px var(--glow);
        }
        .costing-presentation-root .cs-btn .dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }

        .costing-presentation-root .part-hero-container {
          display: flex; flex-direction: column; gap: 8px; margin-bottom: 14px;
        }
        .costing-presentation-root .part-controls-bar {
          display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap;
        }
        .costing-presentation-root .part-view-toggle {
          display: inline-flex; gap: 4px; padding: 4px; border-radius: 10px;
          background: var(--soft2); border: 1px solid var(--card-border);
        }
        .costing-presentation-root .part-mode-btn {
          display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px;
          border-radius: 7px; border: none; background: transparent; cursor: pointer;
          font-size: 11.5px; font-weight: 700; color: var(--muted); transition: all .25s ease;
        }
        .costing-presentation-root .part-mode-btn.active {
          background: var(--card); color: var(--accent);
          box-shadow: 0 2px 8px rgba(0,0,0,.08);
          border: 1px solid var(--card-border);
        }
        .costing-presentation-root .physics-toggle-btn {
          display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px;
          border-radius: 8px; border: 1px dashed var(--card-border); background: var(--card);
          cursor: pointer; font-size: 11.5px; font-weight: 600; color: var(--gold);
          transition: all .25s ease;
        }
        .costing-presentation-root .physics-toggle-btn:hover {
          border-color: var(--gold); background: rgba(245,179,1,.08);
        }

        .costing-presentation-root .part-hero {
          display: grid; grid-template-columns: 1fr 1.2fr; gap: 16px;
          padding: 14px; border-radius: 14px;
          background: linear-gradient(135deg,var(--soft2),var(--bg2));
          border: 1px solid var(--card-border);
        }
        .costing-presentation-root .part-hero .visual {
          display: flex; align-items: center; justify-content: center; min-height: 220px;
          background: radial-gradient(circle at 30% 30%, #1e293b, #020617);
          border-radius: 10px; overflow: hidden; position: relative;
        }
        .costing-presentation-root .part-hero .visual::before {
          content: ""; position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 30% 20%, rgba(56,189,248,.15), transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(245,179,1,.08), transparent 50%);
          pointer-events: none;
        }
        .costing-presentation-root .part-hero .visual svg {
          width: 100%; height: auto; max-height: 240px; position: relative; z-index: 1;
          filter: drop-shadow(0 8px 16px rgba(0,0,0,.5));
        }
        .costing-presentation-root .part-hero .specs { display: flex; flex-direction: column; gap: 6px; font-size: 12px; }
        .costing-presentation-root .part-hero .specs .row { display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px dashed var(--card-border); }
        .costing-presentation-root .part-hero .specs .row:last-child { border: none; }
        .costing-presentation-root .part-hero .specs b { color: var(--ink); }
        .costing-presentation-root .part-hero .specs span { color: var(--muted); }

        /* Physics & Feasibility Panel */
        .costing-presentation-root .physics-panel {
          border-radius: 12px; padding: 14px; margin-top: 4px;
          background: rgba(15,23,42,.6); backdrop-filter: blur(8px);
          border: 1px solid rgba(56,189,248,.25);
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 11.5px; line-height: 1.6; color: #e2e8f0;
        }
        .costing-presentation-root[data-theme="light"] .physics-panel {
          background: #f8fafc; color: #1e293b; border-color: rgba(47,125,247,.3);
        }
        .costing-presentation-root .physics-panel h4 {
          margin: 0 0 8px; font-size: 12px; font-weight: 700; color: #38bdf8;
          display: flex; align-items: center; justify-content: space-between;
        }
        .costing-presentation-root[data-theme="light"] .physics-panel h4 {
          color: #0284c7;
        }
        .costing-presentation-root .physics-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 10px;
        }
        @media (max-width: 768px) {
          .costing-presentation-root .physics-grid { grid-template-columns: 1fr; }
          .costing-presentation-root .part-hero { grid-template-columns: 1fr; }
        }
        .costing-presentation-root .physics-stat {
          padding: 8px 10px; border-radius: 8px;
          background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08);
        }
        .costing-presentation-root[data-theme="light"] .physics-stat {
          background: #ffffff; border-color: #e2e8f0;
        }
        .costing-presentation-root .physics-stat .key {
          font-size: 10.5px; color: var(--muted); text-transform: uppercase; letter-spacing: 0.5px;
        }
        .costing-presentation-root .physics-stat .val {
          font-size: 12px; font-weight: 700; color: var(--accent); margin-top: 2px;
        }
        .costing-presentation-root .physics-stat .formula {
          font-size: 10px; color: #94a3b8; margin-top: 2px; font-style: italic;
        }
        .costing-presentation-root[data-theme="light"] .physics-stat .formula {
          color: #64748b;
        }

        .costing-presentation-root .cost-row {
          display: grid; grid-template-columns: 1fr auto auto; gap: 10px; align-items: center;
          padding: 10px 12px; border-radius: 12px; background: var(--soft2);
          border: 1px solid var(--card-border); margin-bottom: 7px;
          transition: background .3s ease, transform .3s ease;
        }
        .costing-presentation-root .cost-row:hover { background: var(--tag-bg); transform: translateX(4px); }
        .costing-presentation-root .cost-row .label { font-size: 13px; font-weight: 600; color: var(--ink); }
        .costing-presentation-root .cost-row .sub { font-size: 11px; color: var(--muted); }
        .costing-presentation-root .cost-row .val { font-weight: 700; color: var(--ink); font-size: 13.5px; font-variant-numeric: tabular-nums; }
        .costing-presentation-root .cost-row .pct {
          font-size: 10.5px; padding: 3px 8px; border-radius: 999px; background: var(--tag-bg); color: var(--tag-text); font-weight: 600;
        }
        .costing-presentation-root .section-label { font-size: 10.5px; letter-spacing: 2px; text-transform: uppercase; color: var(--muted); margin: 12px 0 6px; font-weight: 700; }

        .costing-presentation-root .total {
          margin-top: 12px; padding: 14px 16px; border-radius: 14px;
          background: linear-gradient(135deg,var(--tag-bg),rgba(245,179,1,.08));
          border: 1px solid var(--tag-border); display: flex; justify-content: space-between; align-items: center;
        }
        .costing-presentation-root .total b { font-size: 22px; color: var(--ink); font-variant-numeric: tabular-nums; }

        .costing-presentation-root .summary-list { display: flex; flex-direction: column; gap: 2px; }
        .costing-presentation-root .summary-list .row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px dashed var(--card-border); font-size: 13px; }
        .costing-presentation-root .summary-list .row:last-child { border: none; }
        .costing-presentation-root .summary-list .row b { color: var(--ink); font-variant-numeric: tabular-nums; }

        /* Updated lifecycle — 4 steps */
        .costing-presentation-root .workflow { position: relative; padding: 20px 0; }
        .costing-presentation-root .wf-track {
          position: relative; display: grid; grid-template-columns: repeat(4,1fr); gap: 18px;
        }
        .costing-presentation-root .wf-track::before {
          content: ""; position: absolute; top: 44px; left: 8%; right: 8%; height: 3px;
          background: linear-gradient(90deg,var(--accent) 0%,var(--accent-2) 40%,var(--gold) 75%,#10b981 100%);
          opacity: .35; z-index: 0; border-radius: 2px;
        }
        .costing-presentation-root .wf-step {
          position: relative; z-index: 1; text-align: center;
          background: var(--card); border: 1px solid var(--card-border);
          border-radius: 18px; padding: 56px 16px 20px;
          transition: transform .4s ease, border-color .4s ease, box-shadow .4s ease;
        }
        .costing-presentation-root .wf-step:hover { transform: translateY(-6px); border-color: var(--accent); box-shadow: 0 14px 30px rgba(0,0,0,.1); }
        .costing-presentation-root .wf-step .num {
          position: absolute; top: -20px; left: 50%; transform: translateX(-50%);
          width: 40px; height: 40px; border-radius: 12px; display: grid; place-items: center;
          background: linear-gradient(135deg,var(--accent),var(--accent-2)); color: #fff; font-weight: 700;
          box-shadow: 0 6px 16px var(--glow); font-size: 15px;
        }
        .costing-presentation-root .wf-step:nth-child(2) .num { background: linear-gradient(135deg,#38bdf8,#06b6d4); }
        .costing-presentation-root .wf-step:nth-child(3) .num { background: linear-gradient(135deg,#f5b301,#f97316); }
        .costing-presentation-root .wf-step:nth-child(4) .num { background: linear-gradient(135deg,#10b981,#059669); }
        .costing-presentation-root .wf-step .ico {
          width: 52px; height: 52px; margin: 0 auto 12px; border-radius: 14px;
          background: var(--tag-bg); color: var(--accent); display: grid; place-items: center;
        }
        .costing-presentation-root .wf-step h4 { margin: 0 0 8px; font-size: 14.5px; font-weight: 700; color: var(--ink); }
        .costing-presentation-root .wf-step p { margin: 0 0 10px; font-size: 12px; color: var(--muted); line-height: 1.55; }
        .costing-presentation-root .wf-step .deliverable {
          padding: 8px 10px; border-radius: 10px; font-size: 11px;
          background: var(--soft2); border: 1px dashed var(--card-border); color: var(--muted); text-align: left;
        }
        .costing-presentation-root .wf-step .deliverable b { color: var(--accent); display: block; margin-bottom: 3px; font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; }
        .costing-presentation-root .wf-step .deliverable ul { margin: 4px 0 0; padding-left: 14px; list-style: disc; }
        .costing-presentation-root .wf-step .deliverable li { margin: 2px 0; }

        /* Reveal */
        .costing-presentation-root .reveal { opacity: 0; transform: translateY(18px); transition: opacity .7s ease, transform .7s cubic-bezier(.2,.7,.2,1); }
        .costing-presentation-root .view.active .reveal { opacity: 1; transform: none; }
        .costing-presentation-root .view.active .reveal.d1 { transition-delay: .08s; }
        .costing-presentation-root .view.active .reveal.d2 { transition-delay: .16s; }
        .costing-presentation-root .view.active .reveal.d3 { transition-delay: .24s; }
        .costing-presentation-root .view.active .reveal.d4 { transition-delay: .32s; }
        .costing-presentation-root .view.active .reveal.d5 { transition-delay: .40s; }
        .costing-presentation-root .view.active .reveal.d6 { transition-delay: .48s; }

        @media (max-width: 1100px) {
          .costing-presentation-root .btn-grid { grid-template-columns: 1fr; }
          .costing-presentation-root .report { grid-template-columns: 1fr; }
          .costing-presentation-root .wf-track { grid-template-columns: repeat(2,1fr); }
          .costing-presentation-root .wf-track::before { display: none; }
          .costing-presentation-root .landing, .costing-presentation-root .slide { padding: 60px 24px 60px; }
          .costing-presentation-root h1.title { font-size: 26px; }
        }
      `}</style>

      {/* Return / Exit Button to Main Cost Estimation Page */}
      {onNavigate && (
        <button 
          onClick={() => onNavigate(Page.CostEstimation)}
          className="exit-site-btn"
          title="Return to main Cost Estimation Engine"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          <span>Main Site</span>
        </button>
      )}

      {/* Theme Toggle Knob */}
      <button 
        className="theme-toggle" 
        onClick={toggleTheme} 
        aria-label="Toggle light/dark theme"
      >
        <div className="knob">
          <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
          </svg>
          <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
          </svg>
        </div>
      </button>

      {/* ================= LANDING — COST ESTIMATION SUITE ================= */}
      <section className={`view ${activeView === 'view-landing' ? 'active' : ''}`} id="view-landing">
        <div className="landing">
          <div className="landing-head">
            <span className="eyebrow reveal">Cost Estimation Suite</span>
            <h1 className="reveal d1">
              Precision <span>Costing Services</span><br/>for Manufacturing Excellence
            </h1>
            <p className="reveal d2">
              A unified workspace to strategize, simulate, compare and track part costing — from kickoff to final deliverable, across every commodity.
            </p>
          </div>

          <div className="btn-grid">
            {/* Button 1: Book Costing Strategy */}
            <div className="action-btn reveal d2" onClick={() => showView('view-slide1')}>
              <div className="ico">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
                </svg>
              </div>
              <div>
                <h3>Book Costing Strategy</h3>
                <p className="desc">
                  Define the costing framework — commodities, processes, secondary operations and overhead structures tailored to your program.
                </p>
                <span className="go">
                  Open Strategy <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </div>
            </div>

            {/* Button 2: Watch Costing Lifecycle */}
            <div className="action-btn gold reveal d3" onClick={() => showView('view-slide4')}>
              <div className="ico">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div>
                <h3>Watch Costing Lifecycle</h3>
                <p className="desc">
                  Track every phase — from kickoff intake and feasibility readiness, through casting approach, to final deliverable handover.
                </p>
                <span className="go">
                  View Lifecycle <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </div>
            </div>

            {/* Button 3: Test Interactive Cost Simulator */}
            <div className="action-btn violet reveal d4" onClick={() => showView('view-slide3')}>
              <div className="ico">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3v18h18"/>
                  <path d="M7 14l4-4 4 4 5-5"/>
                </svg>
              </div>
              <div>
                <h3>Test Interactive Cost Simulator</h3>
                <p className="desc">
                  Run a detailed, auditable cost build-up — material, process, secondary, overheads — with live breakdown and part-level traceability.
                </p>
                <span className="go">
                  Launch Simulator <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </div>
            </div>

            {/* Button 4: Compare Cost Scenarios */}
            <div className="action-btn emerald reveal d5" onClick={() => showView('view-slide2')}>
              <div className="ico">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 3h5v5M21 3l-7 7M8 21H3v-5M3 21l7-7"/>
                </svg>
              </div>
              <div>
                <h3>Compare Cost Scenarios</h3>
                <p className="desc">
                  Evaluate forecast inputs, part complexity grades and sample requirements side-by-side to pick the optimal costing path before kickoff.
                </p>
                <span className="go">
                  Compare Scenarios <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SLIDE 1 — COMMODITIES ================= */}
      <section className={`view ${activeView === 'view-slide1' ? 'active' : ''}`} id="view-slide1">
        <div className="slide">
          <div className="slide-inner">
            <div className="topbar reveal">
              <button className="back-btn" onClick={() => showView('view-landing')}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                Cost Estimation
              </button>
              <div className="slide-tag">Slide 01 · Commodities</div>
            </div>

            <div className="reveal d1">
              <h1 className="title">Over <span>11+ Years</span> of Manufacturing Expertise</h1>
              <p className="subtitle">End-to-end costing capabilities across six core commodities — from prototype to volume production, with full process traceability.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 reveal d2">
              <div className="card"><div className="stat"><b>11+</b><span>Years of expertise</span></div></div>
              <div className="card"><div className="stat"><b>6</b><span>Core commodities</span></div></div>
              <div className="card"><div className="stat"><b>40+</b><span>Process capabilities</span></div></div>
              <div className="card"><div className="stat"><b>10+</b><span>Secondary finishes</span></div></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 reveal d3">
              {/* Sheet Metal */}
              <div className="commodity">
                <div className="visual">
                  <div className="badge">Sheet Metal</div>
                  <SheetMetalVisualSvg />
                </div>
                <div className="body">
                  <h3>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="5" width="18" height="14" rx="1"/>
                      <path d="M3 10h18"/>
                    </svg> 
                    Sheet Metal
                  </h3>
                  <div className="count">14 forming, cutting & fabrication operations</div>
                  <div className="tags">
                    <span className="tag">Stamping</span><span className="tag">Stage Press</span><span className="tag">Progressive Press</span>
                    <span className="tag">Tandem Press</span><span className="tag">Laser Cut</span><span className="tag">Water Jet</span>
                    <span className="tag">Oxy-Plasma</span><span className="tag">Bending</span><span className="tag">Deep Drawing</span>
                    <span className="tag">Roll Forming</span><span className="tag">Punching</span><span className="tag">Shearing</span>
                    <span className="tag">Notching</span><span className="tag">Forming</span>
                  </div>
                </div>
              </div>

              {/* Plastic */}
              <div className="commodity">
                <div className="visual">
                  <div className="badge">Plastic</div>
                  <PlasticVisualSvg />
                </div>
                <div className="body">
                  <h3>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 3h12l-1 6H7L6 3zM7 9h10l2 12H5L7 9z"/>
                    </svg> 
                    Plastic
                  </h3>
                  <div className="count">6 molding & forming processes</div>
                  <div className="tags">
                    <span className="tag">Injection Molding</span><span className="tag">Blow Molding</span>
                    <span className="tag">Thermoforming</span><span className="tag">Compression Molding</span>
                    <span className="tag">Rotational Molding</span><span className="tag">Extrusion</span>
                  </div>
                </div>
              </div>

              {/* Die Casting */}
              <div className="commodity">
                <div className="visual">
                  <div className="badge">Die Casting</div>
                  <DieCastingVisualSvg />
                </div>
                <div className="body">
                  <h3>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z"/>
                    </svg> 
                    Die Casting
                  </h3>
                  <div className="count">6 casting methods</div>
                  <div className="tags">
                    <span className="tag">HPDC</span><span className="tag">LPDC</span><span className="tag">Gravity Die Casting</span>
                    <span className="tag">Sand Casting</span><span className="tag">Iron Casting</span><span className="tag">Investment Casting</span>
                  </div>
                </div>
              </div>

              {/* Machining */}
              <div className="commodity">
                <div className="visual">
                  <div className="badge">Machining</div>
                  <MachiningVisualSvg />
                </div>
                <div className="body">
                  <h3>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="9"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg> 
                    Machining
                  </h3>
                  <div className="count">10 precision processes</div>
                  <div className="tags">
                    <span className="tag">VMC</span><span className="tag">HMC</span><span className="tag">Turning Center</span>
                    <span className="tag">Lathe</span><span className="tag">CNC Milling</span><span className="tag">CNC Grinding</span>
                    <span className="tag">EDM</span><span className="tag">Wire EDM</span><span className="tag">Drilling</span><span className="tag">Boring</span>
                  </div>
                </div>
              </div>

              {/* Forging */}
              <div className="commodity">
                <div className="visual">
                  <div className="badge">Forging</div>
                  <ForgingVisualSvg />
                </div>
                <div className="body">
                  <h3>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 20h16M6 20V8l6-4 6 4v12"/>
                    </svg> 
                    Forging
                  </h3>
                  <div className="count">5 forging processes</div>
                  <div className="tags">
                    <span className="tag">Open Die</span><span className="tag">Closed Die</span>
                    <span className="tag">Upset Forging</span><span className="tag">Roll Forging</span><span className="tag">Ring Rolling</span>
                  </div>
                </div>
              </div>

              {/* Secondary Process */}
              <div className="commodity">
                <div className="visual">
                  <div className="badge">Secondary</div>
                  <SecondaryVisualSvg />
                </div>
                <div className="body">
                  <h3>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v6M12 22v-6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24"/>
                    </svg> 
                    Secondary Process
                  </h3>
                  <div className="count">12 surface & finish operations</div>
                  <div className="tags">
                    <span className="tag gold">Nickel Plating</span><span className="tag gold">Zinc Plating</span>
                    <span className="tag gold">Tin Plating</span><span className="tag gold">Gold Plating</span>
                    <span className="tag gold">Silver Plating</span><span className="tag gold">Copper Plating</span>
                    <span className="tag gold">Anodizing</span><span className="tag gold">Galvanizing</span>
                    <span className="tag gold">Powder Coating</span><span className="tag gold">E-Coating</span>
                    <span className="tag gold">Passivation</span><span className="tag gold">Heat Treatment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SLIDE 2 — COMPARE SCENARIOS ================= */}
      <section className={`view ${activeView === 'view-slide2' ? 'active' : ''}`} id="view-slide2">
        <div className="slide">
          <div className="slide-inner">
            <div className="topbar reveal">
              <button className="back-btn" onClick={() => showView('view-landing')}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                Cost Estimation
              </button>
              <div className="slide-tag">Slide 02 · Compare Scenarios</div>
            </div>

            <div className="reveal d1">
              <h1 className="title">Compare <span>Cost Scenarios</span> Before Kickoff</h1>
              <p className="subtitle">Capture every mandatory input, grade part complexity with visual references, and align on sample requirements — before any commercial commitment.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Mandatory Inputs Column */}
              <div className="card reveal d2 scroll-area" style={{ maxHeight: 'calc(100vh - 260px)' }}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold tracking-widest uppercase" style={{ color: 'var(--accent)' }}>Mandatory Inputs</h3>
                  <span className="text-xs" style={{ color: 'var(--muted)' }}>Required before kickoff</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="input-card">
                    <div className="input-ico">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h12"/></svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Annual Volume</div>
                      <div className="text-xs" style={{ color: 'var(--muted)' }}>Yearly forecast & ramp plan</div>
                    </div>
                  </div>

                  <div className="input-card">
                    <div className="input-ico">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-7 8-13a8 8 0 10-16 0c0 6 8 13 8 13z"/><circle cx="12" cy="9" r="2.5"/></svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Location / Region</div>
                      <div className="text-xs" style={{ color: 'var(--muted)' }}>Plant, logistics, duty zone</div>
                    </div>
                  </div>

                  <div className="input-card">
                    <div className="input-ico">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 9h18M8 4v16"/></svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">2D Drawings</div>
                      <div className="text-xs" style={{ color: 'var(--muted)' }}>Tolerances, GD&T, specs</div>
                    </div>
                  </div>

                  <div className="input-card">
                    <div className="input-ico">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5M3 18l9 5 9-5"/></svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">3D CAD Models</div>
                      <div className="text-xs" style={{ color: 'var(--muted)' }}>STEP / IGES / native</div>
                    </div>
                  </div>

                  <div className="input-card">
                    <div className="input-ico">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18"/></svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Regional Specification</div>
                      <div className="text-xs" style={{ color: 'var(--muted)' }}>Compliance & standards</div>
                    </div>
                  </div>

                  <div className="input-card">
                    <div className="input-ico">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z"/><path d="M4 10h16M10 4v16"/></svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Part Specification</div>
                      <div className="text-xs" style={{ color: 'var(--muted)' }}>Material, finish, critical dims</div>
                    </div>
                  </div>

                  <div className="input-card">
                    <div className="input-ico">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 7L10 17l-5-5"/></svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Quality & Testing</div>
                      <div className="text-xs" style={{ color: 'var(--muted)' }}>PPAP, CMM, FAI</div>
                    </div>
                  </div>

                  <div className="input-card">
                    <div className="input-ico">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12l3-9 6 18 6-18 3 9"/></svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Packaging & Logistics</div>
                      <div className="text-xs" style={{ color: 'var(--muted)' }}>Method & frequency</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-xl" style={{ background: 'var(--soft2)', border: '1px dashed var(--card-border)' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl grid place-items-center flex-none" style={{ background: 'linear-gradient(135deg,var(--accent),var(--gold))', color: '#fff', fontWeight: 700 }}>✓</div>
                    <div>
                      <div className="text-sm font-semibold">Costing readiness gate</div>
                      <div className="text-xs" style={{ color: 'var(--muted)' }}>Estimation initiates only after all inputs are captured and complexity graded.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Part Complexity Grading & Sample Requirements Column */}
              <div className="flex flex-col gap-4">
                <div className="reveal d3">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold tracking-widest uppercase" style={{ color: 'var(--accent)' }}>Part Complexity Grading</h3>
                    <span className="text-xs" style={{ color: 'var(--muted)' }}>Visual reference</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Simple */}
                  <div className="complex-card s reveal d3">
                    <div className="pulse"></div>
                    <div className="part-visual">
                      <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="simplePart" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#e2e8f0"/><stop offset=".5" stopColor="#cbd5e1"/><stop offset="1" stopColor="#64748b"/></linearGradient>
                          <radialGradient id="simpleHL" cx=".3" cy=".3" r=".5"><stop offset="0" stopColor="#fff" stopOpacity=".6"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></radialGradient>
                        </defs>
                        <rect width="200" height="140" fill="#0f172a"/>
                        <polygon points="30,50 170,50 170,100 30,100" fill="url(#simplePart)" stroke="#334155" strokeWidth="1"/>
                        <polygon points="30,50 170,50 170,100 30,100" fill="url(#simpleHL)"/>
                        <circle cx="55" cy="75" r="8" fill="#0f172a" stroke="#475569" strokeWidth="1"/>
                        <circle cx="145" cy="75" r="8" fill="#0f172a" stroke="#475569" strokeWidth="1"/>
                        <line x1="30" y1="115" x2="170" y2="115" stroke="#10b981" strokeWidth="1" strokeDasharray="3,2"/>
                        <text x="100" y="128" fontSize="8" fill="#10b981" textAnchor="middle" fontFamily="Inter">140 mm · ±0.5</text>
                      </svg>
                    </div>
                    <span className="pill s">● Simple</span>
                    <div className="text-xs mt-2" style={{ color: 'var(--muted)', lineHeight: 1.5 }}>Flat bracket, standard holes, low tolerance, single-process.</div>
                  </div>

                  {/* Medium */}
                  <div className="complex-card m reveal d4">
                    <div className="pulse"></div>
                    <div className="part-visual">
                      <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="medPart" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#e2e8f0"/><stop offset=".5" stopColor="#cbd5e1"/><stop offset="1" stopColor="#475569"/></linearGradient>
                          <radialGradient id="medHL" cx=".3" cy=".3" r=".5"><stop offset="0" stopColor="#fff" stopOpacity=".5"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></radialGradient>
                        </defs>
                        <rect width="200" height="140" fill="#0f172a"/>
                        <polygon points="25,50 110,50 110,70 175,70 175,110 25,110" fill="url(#medPart)" stroke="#334155" strokeWidth="1"/>
                        <polygon points="25,50 110,50 110,70 175,70 175,110 25,110" fill="url(#medHL)"/>
                        <rect x="40" y="80" width="50" height="20" fill="#1e293b" stroke="#475569" strokeWidth=".5"/>
                        <circle cx="130" cy="90" r="6" fill="#0f172a" stroke="#475569" strokeWidth="1"/>
                        <circle cx="155" cy="90" r="6" fill="#0f172a" stroke="#475569" strokeWidth="1"/>
                        <line x1="110" y1="50" x2="110" y2="70" stroke="#f5b301" strokeWidth="1.5" strokeDasharray="3,2"/>
                        <line x1="25" y1="120" x2="175" y2="120" stroke="#f5b301" strokeWidth="1" strokeDasharray="3,2"/>
                        <text x="100" y="132" fontSize="8" fill="#f5b301" textAnchor="middle" fontFamily="Inter">150 mm · ±0.1</text>
                      </svg>
                    </div>
                    <span className="pill m">● Medium</span>
                    <div className="text-xs mt-2" style={{ color: 'var(--muted)', lineHeight: 1.5 }}>Stepped bracket, pockets, mixed tolerance, secondary ops.</div>
                  </div>

                  {/* Complex */}
                  <div className="complex-card c reveal d5">
                    <div className="pulse"></div>
                    <div className="part-visual">
                      <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="compPart" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#e2e8f0"/><stop offset=".5" stopColor="#94a3b8"/><stop offset="1" stopColor="#334155"/></linearGradient>
                          <radialGradient id="compHL" cx=".3" cy=".3" r=".5"><stop offset="0" stopColor="#fff" stopOpacity=".5"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></radialGradient>
                        </defs>
                        <rect width="200" height="140" fill="#0f172a"/>
                        <path d="M30 35 L170 35 L170 55 L150 55 L150 90 L170 90 L170 110 L30 110 L30 90 L50 90 L50 55 L30 55 Z" fill="url(#compPart)" stroke="#334155" strokeWidth="1"/>
                        <path d="M30 35 L170 35 L170 55 L150 55 L150 90 L170 90 L170 110 L30 110 L30 90 L50 90 L50 55 L30 55 Z" fill="url(#compHL)"/>
                        <line x1="70" y1="55" x2="70" y2="90" stroke="#475569" strokeWidth="1"/>
                        <line x1="100" y1="55" x2="100" y2="90" stroke="#475569" strokeWidth="1"/>
                        <line x1="130" y1="55" x2="130" y2="90" stroke="#475569" strokeWidth="1"/>
                        <circle cx="50" cy="45" r="4" fill="#1e293b" stroke="#475569" strokeWidth=".5"/>
                        <circle cx="150" cy="45" r="4" fill="#1e293b" stroke="#475569" strokeWidth=".5"/>
                        <circle cx="50" cy="100" r="4" fill="#1e293b" stroke="#475569" strokeWidth=".5"/>
                        <circle cx="150" cy="100" r="4" fill="#1e293b" stroke="#475569" strokeWidth=".5"/>
                        <rect x="85" y="65" width="30" height="15" fill="#1e293b" stroke="#475569" strokeWidth=".5"/>
                        <line x1="30" y1="120" x2="170" y2="120" stroke="#ef4444" strokeWidth="1" strokeDasharray="3,2"/>
                        <text x="100" y="132" fontSize="8" fill="#ef4444" textAnchor="middle" fontFamily="Inter">140 mm · ±0.02</text>
                      </svg>
                    </div>
                    <span className="pill c">● Complex</span>
                    <div className="text-xs mt-2" style={{ color: 'var(--muted)', lineHeight: 1.5 }}>Housing with ribs, bosses, tight GD&T, multi-process.</div>
                  </div>
                </div>

                {/* Sample Requirements Card */}
                <div className="card accent reveal d6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold tracking-widest uppercase" style={{ color: 'var(--accent)' }}>Sample Requirements</h3>
                    <span className="text-xs" style={{ color: 'var(--muted)' }}>Pre-kickoff</span>
                  </div>
                  <p className="text-xs mb-3" style={{ color: 'var(--muted)' }}>Representative sample set requested to validate feasibility before commercial kickoff.</p>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-3 rounded-xl text-center" style={{ background: 'var(--soft2)', border: '1px solid var(--card-border)' }}>
                      <div className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>Few</div>
                      <div className="text-[11px]" style={{ color: 'var(--muted)' }}>Representative parts</div>
                    </div>
                    <div className="p-3 rounded-xl text-center" style={{ background: 'var(--soft2)', border: '1px solid var(--card-border)' }}>
                      <div className="text-2xl font-bold" style={{ color: 'var(--gold)' }}>Multiple</div>
                      <div className="text-[11px]" style={{ color: 'var(--muted)' }}>Across commodities</div>
                    </div>
                    <div className="p-3 rounded-xl text-center" style={{ background: 'var(--soft2)', border: '1px solid var(--card-border)' }}>
                      <div className="text-2xl font-bold" style={{ color: '#10b981' }}>Costed</div>
                      <div className="text-[11px]" style={{ color: 'var(--muted)' }}>Per-part breakdown</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SLIDE 3 — COST SIMULATOR ================= */}
      <section className={`view ${activeView === 'view-slide3' ? 'active' : ''}`} id="view-slide3">
        <div className="slide">
          <div className="slide-inner">
            <div className="topbar reveal">
              <button className="back-btn" onClick={() => showView('view-landing')}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                Cost Estimation
              </button>
              <div className="slide-tag">Slide 03 · Cost Simulator</div>
            </div>

            <div className="reveal d1">
              <h1 className="title">Interactive <span>Cost Build-Up</span> Report</h1>
              <p className="subtitle">A detailed, auditable costing report — every rupee traceable from raw material to finished part, with part-level visibility.</p>
            </div>

            {/* Commodity Selector */}
            <div className="commodity-selector reveal d2" id="commoditySelector">
              <button 
                className={`cs-btn ${selectedCommodity === 'sheetmetal' ? 'active' : ''}`} 
                onClick={() => setSelectedCommodity('sheetmetal')}
              >
                <span className="dot"></span>Sheet Metal
              </button>
              <button 
                className={`cs-btn ${selectedCommodity === 'diecasting' ? 'active' : ''}`} 
                onClick={() => setSelectedCommodity('diecasting')}
              >
                <span className="dot"></span>Die Casting
              </button>
              <button 
                className={`cs-btn ${selectedCommodity === 'plastic' ? 'active' : ''}`} 
                onClick={() => setSelectedCommodity('plastic')}
              >
                <span className="dot"></span>Plastic
              </button>
              <button 
                className={`cs-btn ${selectedCommodity === 'machining' ? 'active' : ''}`} 
                onClick={() => setSelectedCommodity('machining')}
              >
                <span className="dot"></span>Machining
              </button>
              <button 
                className={`cs-btn ${selectedCommodity === 'forging' ? 'active' : ''}`} 
                onClick={() => setSelectedCommodity('forging')}
              >
                <span className="dot"></span>Forging
              </button>
            </div>

            <div className="report reveal d3">
              {/* Left Column: Part Hero & Detailed Build-Up */}
              <div className="left">
                <div className="part-hero-container">
                  {/* Part Visual Controls: CAD vs Real Photo Toggle & Physics Expander */}
                  <div className="part-controls-bar">
                    <div className="part-view-toggle">
                      <button
                        className={`part-mode-btn ${partViewMode === 'cad' ? 'active' : ''}`}
                        onClick={() => setPartViewMode('cad')}
                        title="View dimensional CAD technical blueprint matching screenshot"
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                          <line x1="12" y1="22.08" x2="12" y2="12"/>
                        </svg>
                        3D CAD Drawing
                      </button>
                      <button
                        className={`part-mode-btn ${partViewMode === 'photo' ? 'active' : ''}`}
                        onClick={() => setPartViewMode('photo')}
                        title="View real manufactured workshop sample photograph"
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
                          <circle cx="12" cy="13" r="4"/>
                        </svg>
                        Real Part Photo
                      </button>
                    </div>

                    <button
                      className="physics-toggle-btn"
                      onClick={() => setShowPhysics(!showPhysics)}
                      title="Toggle manufacturing physics and press calculations"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                      </svg>
                      {showPhysics ? 'Hide Physics' : 'Physics & Tooling Logic ▾'}
                    </button>
                  </div>

                  {/* Main Part Hero Card */}
                  <div className="part-hero">
                    <div className="visual">
                      <PartHeroVisual commodityKey={selectedCommodity} viewMode={partViewMode} />
                    </div>
                    <div className="specs">
                      <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--accent)' }}>
                        Part Reference · {currentCommodity.name}
                      </div>
                      <div className="row"><span>Commodity</span><b>{currentCommodity.commodity}</b></div>
                      <div className="row"><span>Material</span><b>{currentCommodity.material}</b></div>
                      <div className="row"><span>Net Weight</span><b>{currentCommodity.weight}</b></div>
                      <div className="row"><span>Raw Rate</span><b>{currentCommodity.rawRate}</b></div>
                      <div className="row"><span>Wall / Thickness</span><b>{currentCommodity.thickness}</b></div>
                      <div className="row"><span>Operations</span><b>{currentCommodity.operations}</b></div>
                      <div className="row"><span>Complexity</span><b style={{ color: currentCommodity.color }}>{currentCommodity.complexity}</b></div>
                      <div className="row"><span>Machine</span><b>{currentCommodity.machine}</b></div>
                      <div className="row"><span>Cycle Time</span><b>{currentCommodity.cycleTime}</b></div>
                    </div>
                  </div>

                  {/* Expandable Manufacturing Physics & Practical Sizing Panel */}
                  {showPhysics && (
                    <div className="physics-panel">
                      <h4>
                        <span>⚡ Process Physics & Machine Feasibility Calculation</span>
                        <span style={{ color: currentCommodity.color, fontSize: '11px' }}>{currentCommodity.commodity}</span>
                      </h4>
                      {selectedCommodity === 'sheetmetal' ? (
                        <div className="physics-grid">
                          <div className="physics-stat">
                            <div className="key">1. Cutting & Shearing Force</div>
                            <div className="val">75.6 Tonnes</div>
                            <div className="formula">F_cut = L × t × τ_shear = 926.5mm × 2.5mm × 320 N/mm² = 741.2 kN</div>
                          </div>
                          <div className="physics-stat">
                            <div className="key">2. Bending & Stripping Force</div>
                            <div className="val">25.5 Tonnes (18T bend + 7.5T strip)</div>
                            <div className="formula">2× 90° bends with R=2.5mm (1t) + 10% bottoming stripping reserve</div>
                          </div>
                          <div className="physics-stat">
                            <div className="key">3. Machine Tonnage Sized</div>
                            <div className="val">110 Tonne Progressive Press</div>
                            <div className="formula">Total 101.1 T required · 1.1x safety margin on 110T mechanical crank press</div>
                          </div>
                          <div className="physics-stat">
                            <div className="key">4. Strip Nesting & Scrap Physics</div>
                            <div className="val">71.2% Strip Yield · 0.154 kg Scrap</div>
                            <div className="formula">Developed blank 195 × 140 mm · Gross 0.534 kg · Scrap credit @ ₹28/kg = −₹4.31</div>
                          </div>
                        </div>
                      ) : selectedCommodity === 'diecasting' ? (
                        <div className="physics-grid">
                          <div className="physics-stat">
                            <div className="key">1. Projected Cavity Area</div>
                            <div className="val">420 cm² (2-Cavity + Runners)</div>
                            <div className="formula">A_proj = 2 × 160mm × 110mm + runner system = 42,000 mm²</div>
                          </div>
                          <div className="physics-stat">
                            <div className="key">2. Specific Metal Pressure</div>
                            <div className="val">750 kg/cm² (73.5 MPa)</div>
                            <div className="formula">P_spec for sound structural A380 die casting with internal pressure tightness</div>
                          </div>
                          <div className="physics-stat">
                            <div className="key">3. Locking Clamping Force</div>
                            <div className="val">HPDC 400 Tonne Machine</div>
                            <div className="formula">F_lock = (420 cm² × 750 kg/cm²) × 1.25 safety factor = 393.7 Tonnes</div>
                          </div>
                          <div className="physics-stat">
                            <div className="key">4. Thermal Cycle Time</div>
                            <div className="val">38.0 sec / shot (189 shots/hr)</div>
                            <div className="formula">Fill 25ms + Solidification 12s + Die open/eject/spray 25.8s</div>
                          </div>
                        </div>
                      ) : selectedCommodity === 'plastic' ? (
                        <div className="physics-grid">
                          <div className="physics-stat">
                            <div className="key">1. Projected Mold Area</div>
                            <div className="val">265 cm² (Part + Cold Runner)</div>
                            <div className="formula">180mm × 130mm parting profile + sprue & sub-gates</div>
                          </div>
                          <div className="physics-stat">
                            <div className="key">2. Cavity Pressure (ABS)</div>
                            <div className="val">400 bar (40 MPa)</div>
                            <div className="formula">P_cavity for engineering ABS injection with 2.0mm nominal wall</div>
                          </div>
                          <div className="physics-stat">
                            <div className="key">3. Tonnage Sizing</div>
                            <div className="val">120 Tonne Injection Press</div>
                            <div className="formula">F_clamp = (265 cm² × 400 bar) ÷ 1000 = 106 Tonnes + 15% safety</div>
                          </div>
                          <div className="physics-stat">
                            <div className="key">4. Cooling Physics</div>
                            <div className="val">22.0 sec total cycle</div>
                            <div className="formula">t_cool = (h² / π²·α) × ln(4/π · (T_melt - T_mold)/(T_eject - T_mold)) ≈ 14.2s</div>
                          </div>
                        </div>
                      ) : selectedCommodity === 'machining' ? (
                        <div className="physics-grid">
                          <div className="physics-stat">
                            <div className="key">1. Cutting Speed & RPM</div>
                            <div className="val">Vc = 180 m/min · 1,910 RPM</div>
                            <div className="formula">N = (1000 × Vc) / (π × D) = (1000 × 180) / (3.1415 × 30mm)</div>
                          </div>
                          <div className="physics-stat">
                            <div className="key">2. Material Removal Rate</div>
                            <div className="val">MRR = 48.6 cm³/min</div>
                            <div className="formula">MRR = Vc × doc (2.0mm) × feed (0.25 mm/rev) on EN8 steel</div>
                          </div>
                          <div className="physics-stat">
                            <div className="key">3. Machine Power Required</div>
                            <div className="val">3.85 kW spindle draw</div>
                            <div className="formula">P = (MRR × Kc) / (60 × 10³ × η) · Kc_EN8 = 2200 N/mm²</div>
                          </div>
                          <div className="physics-stat">
                            <div className="key">4. Surface Finish Geometry</div>
                            <div className="val">Ra 0.8 μm (Cylindrical Ground)</div>
                            <div className="formula">Turned Ra 3.2μm followed by precision centerless grinding on bearing seats</div>
                          </div>
                        </div>
                      ) : (
                        <div className="physics-grid">
                          <div className="physics-stat">
                            <div className="key">1. Forging Blow Energy</div>
                            <div className="val">42.5 kJ Deformation Work</div>
                            <div className="formula">W = V × σ_flow × ln(h0 / h1) · Hot forged EN19 alloy steel @ 1180°C</div>
                          </div>
                          <div className="physics-stat">
                            <div className="key">2. Flash Load & Tonnage</div>
                            <div className="val">1600 Tonne Forging Press</div>
                            <div className="formula">F_forge = A_projected × σ_flow × shape factor (6.5 for I-beam conrod)</div>
                          </div>
                          <div className="physics-stat">
                            <div className="key">3. Billet Weight & Flash Offal</div>
                            <div className="val">2.35 kg Billet · 1.85 kg Finished</div>
                            <div className="formula">21% flash gutter & scale loss (0.50 kg flash trimmed on 150T trim press)</div>
                          </div>
                          <div className="physics-stat">
                            <div className="key">4. Heat Treatment Microstructure</div>
                            <div className="val">28–32 HRC (Quenched & Tempered)</div>
                            <div className="formula">Austenitized 860°C, polymer quench, tempered 580°C for high fatigue toughness</div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="scroll-area">
                  <div className="section-label">Material Cost</div>
                  {currentCommodity.costs.material.map((r, i) => (
                    <div key={i} className="cost-row">
                      <div>
                        <div className="label">{r.l}</div>
                        <div className="sub">{r.s}</div>
                      </div>
                      <div className="val">{r.v}</div>
                      <div className="pct">{r.p}</div>
                    </div>
                  ))}

                  <div className="section-label">Process Cost</div>
                  {currentCommodity.costs.process.map((r, i) => (
                    <div key={i} className="cost-row">
                      <div>
                        <div className="label">{r.l}</div>
                        <div className="sub">{r.s}</div>
                      </div>
                      <div className="val">{r.v}</div>
                      <div className="pct">{r.p}</div>
                    </div>
                  ))}

                  <div className="section-label">Secondary Process</div>
                  {currentCommodity.costs.secondary.map((r, i) => (
                    <div key={i} className="cost-row">
                      <div>
                        <div className="label">{r.l}</div>
                        <div className="sub">{r.s}</div>
                      </div>
                      <div className="val">{r.v}</div>
                      <div className="pct">{r.p}</div>
                    </div>
                  ))}

                  <div className="section-label">Overheads</div>
                  {currentCommodity.costs.overhead.map((r, i) => (
                    <div key={i} className="cost-row">
                      <div>
                        <div className="label">{r.l}</div>
                        <div className="sub">{r.s}</div>
                      </div>
                      <div className="val">{r.v}</div>
                      <div className="pct">{r.p}</div>
                    </div>
                  ))}

                  <div className="section-label">Final</div>
                  {currentCommodity.costs.final.map((r, i) => (
                    <div key={i} className="cost-row">
                      <div>
                        <div className="label">{r.l}</div>
                        <div className="sub">{r.s}</div>
                      </div>
                      <div className="val">{r.v}</div>
                      <div className="pct">{r.p}</div>
                    </div>
                  ))}

                  <div className="total">
                    <div>
                      <div className="text-xs uppercase tracking-widest" style={{ color: 'var(--accent)' }}>Landed Cost / Part</div>
                      <div className="text-[11px]" style={{ color: 'var(--muted)' }}>Inclusive of all heads · {currentCommodity.name}</div>
                    </div>
                    <b>{currentCommodity.summary.total}</b>
                  </div>
                </div>
              </div>

              {/* Right Column: Cost Abstract Doughnut Chart & Summary Breakdown */}
              <div className="right">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold tracking-widest uppercase" style={{ color: 'var(--accent)' }}>Cost Abstract</h3>
                  <span className="text-xs" style={{ color: 'var(--muted)' }}>Break-up share</span>
                </div>
                <div style={{ position: 'relative', height: '220px' }}>
                  <canvas ref={canvasRef} id="costChart"></canvas>
                </div>
                <div className="summary-list scroll-area" style={{ maxHeight: '260px' }}>
                  <div className="row"><span>Material (Net − Scrap)</span><b>{currentCommodity.summary.mat}</b></div>
                  <div className="row"><span>Primary Process</span><b>{currentCommodity.summary.proc}</b></div>
                  <div className="row"><span>Secondary Processes</span><b>{currentCommodity.summary.sec}</b></div>
                  <div className="row"><span>Overheads & Amortization</span><b>{currentCommodity.summary.oh}</b></div>
                  <div className="row"><span>Packaging & Logistics</span><b>{currentCommodity.summary.pl}</b></div>
                  <div className="row"><span>Margin</span><b>{currentCommodity.summary.margin}</b></div>
                </div>
                <div className="mt-auto pt-3">
                  <div className="p-3 rounded-xl" style={{ background: 'linear-gradient(135deg,var(--tag-bg),rgba(245,179,1,.08))', border: '1px solid var(--tag-border)' }}>
                    <div className="flex items-center justify-between">
                      <div className="text-xs uppercase tracking-widest" style={{ color: 'var(--accent)' }}>Total Landed Cost</div>
                      <div className="text-[11px]" style={{ color: 'var(--muted)' }}>Per part</div>
                    </div>
                    <div className="text-2xl font-bold mt-1" style={{ color: 'var(--ink)' }}>{currentCommodity.summary.total}</div>
                    <div className="text-[11px] mt-1" style={{ color: 'var(--muted)' }}>{currentCommodity.summary.annual}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SLIDE 4 — CASTING LIFECYCLE (Service-based 4-Step) ================= */}
      <section className={`view ${activeView === 'view-slide4' ? 'active' : ''}`} id="view-slide4">
        <div className="slide">
          <div className="slide-inner">
            <div className="topbar reveal">
              <button className="back-btn" onClick={() => showView('view-landing')}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                Cost Estimation
              </button>
              <div className="slide-tag">Slide 04 · Lifecycle</div>
            </div>

            <div className="reveal d1">
              <h1 className="title">Casting Lifecycle · <span>Part to Deliverable</span></h1>
              <p className="subtitle">A focused, service-driven lifecycle — we receive the part, analyse it, build the cost with full quality alignment, and hand over a complete deliverable to the end customer.</p>
            </div>

            <div className="workflow reveal d2">
              <div className="wf-track">
                {/* STEP 1: Kickoff */}
                <div className="wf-step">
                  <div className="num">1</div>
                  <div className="ico">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                  </div>
                  <h4>Kickoff</h4>
                  <p>Receive the part from the customer — capture 2D/3D data, annual volume, region, material and quality expectations.</p>
                  <div className="deliverable">
                    <b>Key Activities</b>
                    <ul>
                      <li>Part intake & data capture</li>
                      <li>Volume & region mapping</li>
                      <li>Customer quality expectations</li>
                      <li>Initial complexity grading</li>
                    </ul>
                  </div>
                </div>

                {/* STEP 2: Feasibility Readiness */}
                <div className="wf-step">
                  <div className="num">2</div>
                  <div className="ico">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                  </div>
                  <h4>Feasibility Readiness</h4>
                  <p>Validate if the part can be costed accurately — check process fit, supplier readiness, sample availability and quality gate.</p>
                  <div className="deliverable">
                    <b>Key Activities</b>
                    <ul>
                      <li>DFM & process feasibility</li>
                      <li>Supplier capability mapping</li>
                      <li>Sample requirement confirmation</li>
                      <li>Quality & test readiness check</li>
                    </ul>
                  </div>
                </div>

                {/* STEP 3: Casting Approach */}
                <div className="wf-step">
                  <div className="num">3</div>
                  <div className="ico">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
                  </div>
                  <h4>Casting Approach</h4>
                  <p>Build the complete cost — material, primary process, secondary, overheads, quality, margin — with open-book transparency.</p>
                  <div className="deliverable">
                    <b>Key Activities</b>
                    <ul>
                      <li>Material & process cost build-up</li>
                      <li>Secondary & finishing cost</li>
                      <li>Overhead, tooling amortization</li>
                      <li>Quality cost & margin alignment</li>
                    </ul>
                  </div>
                </div>

                {/* STEP 4: Deliverable */}
                <div className="wf-step">
                  <div className="num">4</div>
                  <div className="ico">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <h4>Deliverable</h4>
                  <p>Hand over the complete costing report to the end customer — with quality alignment, assumptions and audit trail.</p>
                  <div className="deliverable">
                    <b>Key Activities</b>
                    <ul>
                      <li>Final cost report handover</li>
                      <li>Quality deliverable package</li>
                      <li>Assumptions & caveats log</li>
                      <li>Customer sign-off & next steps</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Model & Governance Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 reveal d3">
              <div className="card">
                <div className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--accent)' }}>Service Model</div>
                <div className="text-sm font-semibold mb-1">Part-In, Report-Out</div>
                <div className="text-xs" style={{ color: 'var(--muted)' }}>We receive the part from the customer, run the complete costing exercise, and deliver a quality-aligned cost report back — no tooling, no production, pure costing service.</div>
              </div>
              <div className="card">
                <div className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--accent)' }}>Quality Alignment</div>
                <div className="text-sm font-semibold mb-1">Quality-First Costing</div>
                <div className="text-xs" style={{ color: 'var(--muted)' }}>Every cost head is validated against the customer's quality expectations — CMM, PPAP, FAI, SPC — so the final number reflects real-world deliverability.</div>
              </div>
              <div className="card">
                <div className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--accent)' }}>Transparency</div>
                <div className="text-sm font-semibold mb-1">Open-Book Costing</div>
                <div className="text-xs" style={{ color: 'var(--muted)' }}>Material, process, secondary, overheads and margin visible line-by-line — auditable, revisitable on volume change, and fully traceable to the part.</div>
              </div>
            </div>

            {/* Bottom Commitment Banner */}
            <div className="mt-5 reveal d4">
              <div className="card accent flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--accent)' }}>Our Commitment</div>
                  <div className="text-lg font-semibold">A trusted costing partner — delivering clarity, quality alignment and transparency to every end customer.</div>
                </div>
                <div className="flex gap-2">
                  <span className="pill s">Quality</span>
                  <span className="pill m">Cost</span>
                  <span className="pill c">Delivery</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default KickoffPresentationPage;
