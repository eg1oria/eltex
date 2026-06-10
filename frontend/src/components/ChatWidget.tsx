'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

const TG_TOKEN: string = '8507762662:AAHJ2fdVvTXZrOlhYkiujA54pnoK3Ho0AYs';
const TG_CHAT_ID: string = '-5216799241';
const SITE: string = 'eltexalatau.kz';
const TG_ON: boolean = TG_TOKEN !== '';

async function callAI(history: { role: string; content: string }[]): Promise<string> {
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ history }),
    });

    if (!res.ok) {
      if (res.status === 401) return '⚠️ Ошибка авторизации OpenAI. Проверьте API ключ.';
      if (res.status === 429) return 'Слишком много запросов. Попробуйте через несколько секунд.';
      return fallback(history.at(-1)?.content ?? '');
    }

    const data = await res.json();
    return data.text || fallback(history.at(-1)?.content ?? '');
  } catch (err) {
    console.error('callAI error:', err);
    return fallback(history.at(-1)?.content ?? '');
  }
}
interface Message {
  role: 'user' | 'bot';
  text: string;
  time: string;
}

function nowTime() {
  return new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
}

function makeSID() {
  return '#' + Math.random().toString(36).slice(2, 8).toUpperCase();
}

function fallback(q: string): string {
  const t = q.toLowerCase();
  if (/цен|прайс|стоим|сколько|баға/.test(t))
    return 'Для получения коммерческого предложения обратитесь к менеджеру:\n📞 +7 727 339-76-10\n📞 +7 701 467-36-49';
  if (/коммутатор|switch|mes/.test(t))
    return 'Ethernet-коммутаторы Eltex MES:\n• Доступ: 100M, 1G/2.5G/10G, PoE\n• Агрегация и Ядро/ЦОД: 10G–100G\n• Промышленные коммутаторы\n\neltexalatau.kz';
  if (/gpon|pon|ont|olt|xpon/.test(t))
    return 'Оборудование xPON:\n• GPON и 10G-PON\n• Станционные OLT и абонентские ONT\n\neltexalatau.kz';
  if (/маршрутизатор|роутер|esr|vesr/.test(t))
    return 'Маршрутизаторы Eltex ESR:\n• Сервисные ESR, виртуальные vESR\n• Маршрутизаторы ядра сети\n\neltexalatau.kz';
  if (/wi.?fi|wifi|точк|wireless|радиомост|бшпд|lte/.test(t))
    return 'Беспроводной доступ:\n📶 INDOOR и OUTDOOR точки доступа Wi-Fi\n• Контроллеры, радиомосты БШПД, LTE\n\neltexalatau.kz';
  if (/voip|ip.?тел|шлюз|sip|атс|sbc|fxs/.test(t))
    return 'VoIP-телефония:\n📞 IP-телефоны и IP-АТС\n📞 Шлюзы 1–72 порта FXS\n📞 Транковые шлюзы, SBC\n\neltexalatau.kz';
  if (/softswitch|call|ivr|сорм/.test(t))
    return 'Softswitch и сервисы:\n• Call-центры, IVR, автообзвон\n• Запись разговоров (REC), СОРМ\n\nСвяжитесь с менеджером для демо.';
  if (/iptv|приставк|медиацентр|android/.test(t))
    return 'IPTV медиацентры Eltex:\n📺 Приставки на Android\n📺 Брендированные пульты\n\nЗапросите спецификации у менеджеров!';
  if (/iot|умный.?дом|датчик|контроллер|автоматизац/.test(t))
    return 'IoT и автоматизация:\n🏠 IoT-платформа и контроллеры умного дома\n• Промышленные контроллеры и датчики\n\neltexalatau.kz';
  if (/sfp|qsfp|оптик|dac|aoc|кабел/.test(t))
    return 'SFP модули и кабели:\n🔌 SFP 1G, SFP+ 10G, SFP28 25G, QSFP28 100G\n🔌 DAC и AOC кабели\n\nНапишите менеджеру для подбора.';
  if (/менеджер|оператор|позвон|связь|контакт/.test(t))
    return 'Отдел продаж:\n📞 +7 727 339-76-10\n📞 +7 701 467-36-49\n🌐 eltexalatau.kz';
  if (/привет|здравствуй|сәлем|hello/.test(t))
    return 'Здравствуйте! 😊 Я AI-консультант ЭлтексАлатау. Отвечу на вопросы по сетевому оборудованию Eltex. Чем могу помочь?';
  if (/спасибо|рахмет|thanks/.test(t))
    return 'Пожалуйста! 🙏 Если возникнут вопросы — пишите, я всегда на связи.';
  return 'Спасибо за вопрос! Для подбора оборудования под ваше ТЗ обратитесь к менеджеру:\n📞 +7 727 339-76-10\n🌐 eltexalatau.kz';
}

async function tgSend(text: string) {
  if (!TG_ON) return false;
  try {
    const r = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TG_CHAT_ID,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    });
    return r.ok;
  } catch {
    return false;
  }
}
const QUICK_CHIPS = [
  { label: '💰 Цены', text: 'Цены на коммутаторы?' },
  { label: '📦 Каталог', text: 'Какое оборудование есть?' },
  { label: '🌐 GPON', text: 'Есть оборудование GPON?' },
  { label: '📡 Wi-Fi', text: 'Нужны Wi-Fi точки доступа' },
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showQuick, setShowQuick] = useState(true);
  const [escalated, setEscalated] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const [toast, setToast] = useState<{ icon: string; msg: string } | null>(null);
  const [sessionId] = useState(() => makeSID());
  const [openTime] = useState(() => nowTime());

  const msgsRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const apiHistory = useRef<{ role: string; content: string }[]>([]);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const t1 = setTimeout(() => {
      setMessages([
        {
          role: 'bot',
          text: 'Здравствуйте! 👋\n\nЯ AI-консультант Eltex. Отвечу на вопросы по коммутаторам, GPON, Wi-Fi, VoIP оборудованию.\n\nЧем могу помочь?',
          time: nowTime(),
        },
      ]);
    }, 600);

    const t2 = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: 'Уточните ваше Имя и номер мобильного телефона?',
          time: nowTime(),
        },
      ]);
    }, 1400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    if (msgsRef.current) {
      msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
    }
  }, [messages, loading]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [open]);

  const showToastMsg = useCallback((icon: string, msg: string) => {
    setToast({ icon, msg });
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3200);
  }, []);

  const handleOpen = useCallback(async () => {
    setOpen(true);
    setShowBadge(false);
    if (TG_ON) {
      const ok = await tgSend(
        `🟢 <b>Новый клиент на сайте</b>\n📱 <b>${SITE}</b>\n🕐 ${openTime} · Сессия ${sessionId}`,
      );
      if (ok) showToastMsg('📡', 'Менеджеры уведомлены');
    }
  }, [openTime, sessionId, showToastMsg]);

  const handleClose = useCallback(() => setOpen(false), []);

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || loading) return;
      setShowQuick(false);
      setInput('');

      const userMsg: Message = { role: 'user', text: text.trim(), time: nowTime() };
      setMessages((prev) => [...prev, userMsg]);
      apiHistory.current.push({ role: 'user', content: text.trim() });
      setLoading(true);

      const reply = await callAI(apiHistory.current);
      apiHistory.current.push({ role: 'bot', content: reply });

      setMessages((prev) => [...prev, { role: 'bot', text: reply, time: nowTime() }]);
      setLoading(false);

      if (TG_ON) {
        const ok = await tgSend(
          `💬 <b>Новое сообщение</b>  ·  ${sessionId}\n─────────────────\n👤 <b>Клиент:</b>\n${text.trim()}\n\n🤖 <b>Ответ AI:</b>\n${reply}`,
        );
        if (ok) showToastMsg('📩', 'Сообщение передано менеджеру');
      }
    },
    [loading, sessionId, showToastMsg],
  );

  const handleEscalate = useCallback(async () => {
    if (escalated) {
      showToastMsg('✅', 'Уже отправлено');
      return;
    }
    setEscalated(true);
    setShowQuick(false);

    const hist = apiHistory.current
      .map((m) => (m.role === 'user' ? '👤 ' : '🤖 ') + m.content)
      .join('\n');

    setMessages((prev) => [
      ...prev,
      { role: 'bot', text: '⏳ Передаём запрос менеджеру...', time: nowTime() },
    ]);

    if (TG_ON) {
      const ok = await tgSend(
        `🔴 <b>ЗАПРОШЕН МЕНЕДЖЕР!</b>\n📱 ${SITE}  ·  Сессия ${sessionId}\n🕐 ${nowTime()}\n\n📋 <b>История чата:</b>\n─────────────────\n${hist}`,
      );
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          role: 'bot',
          text: ok
            ? '✅ Менеджер уведомлён!\n\nМы свяжемся с вами в ближайшее время:\n📞 +7 727 339-76-10\n📞 +7 701 467-36-49'
            : 'Свяжитесь с менеджером напрямую:\n📞 +7 727 339-76-10\n📞 +7 701 467-36-49',
          time: nowTime(),
        },
      ]);
      if (ok) showToastMsg('🔴', 'Запрос передан в Telegram');
    } else {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          role: 'bot',
          text: 'Свяжитесь с нашим менеджером:\n📞 +7 727 339-76-10\n📞 +7 701 467-36-49\n🌐 eltexalatau.kz',
          time: nowTime(),
        },
      ]);
    }
  }, [escalated, sessionId, showToastMsg]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700&display=swap');

        .cw-root { font-family: 'Golos Text', system-ui, sans-serif; }

        /* FAB pulse ring */
        .cw-ring {
          position: fixed; bottom: 24px; right: 24px;
          width: 58px; height: 58px; border-radius: 50%;
          background: rgba(15,82,186,.18);
          z-index: 9998; pointer-events: none;
          animation: cw-pulse 2.4s ease-out infinite;
        }
        @keyframes cw-pulse {
          0%   { transform: scale(1);   opacity: .8; }
          100% { transform: scale(2.1); opacity: 0;  }
        }

        /* FAB button */
        .cw-fab {
          position: fixed; bottom: 24px; right: 24px;
          width: 58px; height: 58px; border-radius: 50%; border: none;
          cursor: pointer; z-index: 9999;
          background: linear-gradient(140deg, #0f52ba, #00a8e8);
          box-shadow: 0 6px 28px rgba(15,82,186,.55);
          display: flex; align-items: center; justify-content: center;
          transition: transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .3s;
        }
        .cw-fab:hover { transform: scale(1.1); box-shadow: 0 8px 36px rgba(15,82,186,.65); }

        /* Badge */
        .cw-badge {
          position: fixed; bottom: 68px; right: 18px;
          background: #ef4444; color: white;
          font-size: 11px; font-weight: 700;
          width: 20px; height: 20px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          z-index: 10000; box-shadow: 0 2px 8px rgba(239,68,68,.5);
          animation: cw-bpop .35s cubic-bezier(.34,1.56,.64,1);
          font-family: 'Golos Text', system-ui, sans-serif;
        }
        @keyframes cw-bpop { from { transform: scale(0); } to { transform: scale(1); } }

        /* Chat window */
        .cw-win {
          position: fixed; bottom: 96px; right: 24px;
          width: 370px;
          background: white; border-radius: 18px;
          box-shadow: 0 24px 64px rgba(10,40,100,.22);
          display: flex; flex-direction: column;
          overflow: hidden; z-index: 9999;
          opacity: 0; transform: translateY(18px) scale(.95); pointer-events: none;
          transition: opacity .25s, transform .3s cubic-bezier(.34,1.56,.64,1);
          transform-origin: bottom right;
          max-height: 580px;
        }
        .cw-win.cw-open {
          opacity: 1; transform: translateY(0) scale(1); pointer-events: all;
        }

        /* Header */
        .cw-head {
          background: linear-gradient(140deg, #071630 0%, #0f52ba 100%);
          padding: 15px 18px; display: flex; align-items: center; gap: 12px;
          flex-shrink: 0; position: relative; overflow: hidden;
        }
        .cw-head::after {
          content: ''; position: absolute; top: -40px; right: -40px;
          width: 120px; height: 120px; border-radius: 50%;
          background: rgba(255,255,255,.05); pointer-events: none;
        }
        .cw-ava {
          width: 42px; height: 42px; border-radius: 12px; flex-shrink: 0;
          background: rgba(255,255,255,.14); border: 1px solid rgba(255,255,255,.18);
          display: flex; align-items: center; justify-content: center; font-size: 20px;
        }
        .cw-head-info { flex: 1; min-width: 0; }
        .cw-head-name { color: white; font-size: 14px; font-weight: 600; font-family: 'Golos Text', system-ui, sans-serif; }
        .cw-head-status { display: flex; align-items: center; gap: 5px; margin-top: 2px; }
        .cw-dot { width: 7px; height: 7px; border-radius: 50%; background: #4ade80; box-shadow: 0 0 6px #4ade80; flex-shrink: 0; }
        .cw-head-status span { font-size: 12px; color: rgba(255,255,255,.65); font-family: 'Golos Text', system-ui, sans-serif; }
        .cw-tg-ind {
          font-size: 10px; padding: 2px 7px; border-radius: 10px;
          background: rgba(255,255,255,.12); color: rgba(255,255,255,.7);
          border: 1px solid rgba(255,255,255,.18); white-space: nowrap;
          font-family: 'Golos Text', system-ui, sans-serif;
        }
        .cw-tg-ind.on { background: rgba(74,222,128,.18); color: #86efac; border-color: rgba(74,222,128,.3); }
        .cw-close-btn {
          width: 30px; height: 30px; border-radius: 8px;
          background: rgba(255,255,255,.12); border: none; color: rgba(255,255,255,.85);
          font-size: 17px; cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: background .15s; flex-shrink: 0;
        }
        .cw-close-btn:hover { background: rgba(255,255,255,.22); }

        /* Messages */
        .cw-msgs {
          flex: 1; overflow-y: auto; padding: 14px 12px;
          display: flex; flex-direction: column; gap: 8px;
          background: #f5f8ff; scroll-behavior: smooth;
        }
        .cw-msgs::-webkit-scrollbar { width: 3px; }
        .cw-msgs::-webkit-scrollbar-thumb { background: #c5d4ee; border-radius: 3px; }

        .cw-date-div { display: flex; align-items: center; gap: 10px; margin: 4px 0; }
        .cw-date-div::before, .cw-date-div::after { content: ''; flex: 1; height: 1px; background: #dde6f5; }
        .cw-date-div span { font-size: 11px; color: #5a6a85; white-space: nowrap; font-family: 'Golos Text', system-ui, sans-serif; }

        .cw-row { display: flex; align-items: flex-end; gap: 8px; animation: cw-msgin .2s ease; }
        @keyframes cw-msgin { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        .cw-row.user { flex-direction: row-reverse; }

        .cw-msg-ava {
          width: 30px; height: 30px; border-radius: 9px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; font-weight: 700;
          background: linear-gradient(140deg, #0f52ba, #00a8e8); color: white;
        }

        .cw-bubble {
          max-width: 76%; padding: 10px 13px 8px; border-radius: 14px;
          font-size: 13.5px; line-height: 1.58; word-break: break-word;
          font-family: 'Golos Text', system-ui, sans-serif;
          white-space: pre-wrap;
        }
        .cw-row.bot  .cw-bubble {
          background: white; color: #071630;
          border-bottom-left-radius: 4px;
          border: 0.5px solid #dde6f5;
          box-shadow: 0 2px 8px rgba(0,0,0,.05);
        }
        .cw-row.user .cw-bubble {
          background: linear-gradient(140deg, #0f52ba, #1a6dd4); color: white;
          border-bottom-right-radius: 4px;
          box-shadow: 0 4px 16px rgba(15,82,186,.35);
        }

        .cw-btime { display: block; font-size: 10.5px; margin-top: 4px; opacity: .45; text-align: right; }

        /* Typing dots */
        .cw-typing .cw-bubble { padding: 13px 16px; }
        .cw-dots { display: flex; gap: 4px; align-items: center; height: 12px; }
        .cw-dots span { width: 7px; height: 7px; border-radius: 50%; background: #94a3b8; animation: cw-d 1.3s infinite; }
        .cw-dots span:nth-child(2) { animation-delay: .15s; }
        .cw-dots span:nth-child(3) { animation-delay: .3s;  }
        @keyframes cw-d { 0%,60%,100% { transform: translateY(0); opacity: .5; } 30% { transform: translateY(-5px); opacity: 1; } }

        /* Quick chips */
        .cw-quick {
          padding: 8px 12px 10px; display: flex; flex-wrap: wrap; gap: 6px;
          background: #f5f8ff; border-top: 1px solid #eaeff8;
        }
        .cw-chip {
          font-family: 'Golos Text', system-ui, sans-serif;
          font-size: 12px; padding: 5px 12px; border-radius: 20px;
          border: 1px solid #c5d4ee; background: white; color: #0f52ba;
          cursor: pointer; transition: all .15s; white-space: nowrap;
        }
        .cw-chip:hover { background: #0f52ba; color: white; border-color: #0f52ba; }
        .cw-chip.urgent { border-color: #fca5a5; color: #dc2626; background: #fff7f7; }
        .cw-chip.urgent:hover { background: #ef4444; color: white; border-color: #ef4444; }

        /* Input area */
        .cw-input-area {
          padding: 10px 12px; display: flex; gap: 8px; align-items: flex-end;
          background: white; border-top: 1px solid #eaeff8; flex-shrink: 0;
        }
        .cw-textarea {
          flex: 1; border: 1.5px solid #dde6f5; border-radius: 12px;
          padding: 9px 13px; font-size: 13.5px;
          font-family: 'Golos Text', system-ui, sans-serif;
          resize: none; outline: none; line-height: 1.45; color: #071630;
          max-height: 84px; background: #f5f8ff;
          transition: border-color .15s, background .15s;
        }
        .cw-textarea:focus { border-color: #0f52ba; background: white; }
        .cw-textarea::placeholder { color: #b0bec5; }
        .cw-send {
          width: 40px; height: 40px; border-radius: 11px;
          background: linear-gradient(140deg, #0f52ba, #1a6dd4);
          border: none; cursor: pointer; display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; box-shadow: 0 4px 14px rgba(15,82,186,.42);
          transition: opacity .15s, transform .1s;
        }
        .cw-send:hover { opacity: .88; }
        .cw-send:active { transform: scale(.92); }
        .cw-send:disabled { opacity: .5; cursor: default; }

        /* Footer */
        .cw-foot {
          text-align: center; font-size: 11px; color: #c5cedd;
          padding: 6px; background: white; border-top: 1px solid #f0f4fb;
          font-family: 'Golos Text', system-ui, sans-serif;
        }

        /* Toast */
        .cw-toast {
          position: fixed; top: 20px; right: 20px;
          background: #071630; color: white; padding: 10px 16px;
          border-radius: 10px; font-size: 13px; z-index: 10001;
          display: flex; align-items: center; gap: 8px;
          box-shadow: 0 4px 16px rgba(0,0,0,.3);
          animation: cw-tin .25s cubic-bezier(.34,1.56,.64,1);
          font-family: 'Golos Text', system-ui, sans-serif;
        }
        @keyframes cw-tin { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }

        @media (max-width: 430px) {
          .cw-win { width: calc(100vw - 16px); right: 8px; bottom: 86px; }
        }
      `}</style>

      <div className="cw-root">
        {!open && <div className="cw-ring" />}

        {showBadge && !open && <div className="cw-badge">1</div>}

        <button
          className="cw-fab"
          onClick={open ? handleClose : handleOpen}
          aria-label="Открыть/закрыть чат">
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </svg>
          )}
        </button>

        <div className={`cw-win${open ? ' cw-open' : ''}`}>
          <div className="cw-head">
            <div className="cw-ava">⚡</div>
            <div className="cw-head-info">
              <div className="cw-head-name">Eltex AI-Консультант</div>
              <div className="cw-head-status">
                <span className="cw-dot" />
                <span>Онлайн</span>
                <span className={`cw-tg-ind${TG_ON ? ' on' : ''}`}>
                  {TG_ON ? 'TG: подключён' : 'TG: —'}
                </span>
              </div>
            </div>
            <button className="cw-close-btn" onClick={handleClose} aria-label="Закрыть">
              ✕
            </button>
          </div>

          <div className="cw-msgs" ref={msgsRef}>
            <div className="cw-date-div">
              <span>Сегодня</span>
            </div>

            {messages.map((msg, i) => (
              <div key={i} className={`cw-row ${msg.role}`}>
                <div className="cw-msg-ava">{msg.role === 'bot' ? '⚡' : '👤'}</div>
                <div className="cw-bubble">
                  {msg.text}
                  <span className="cw-btime">{msg.time}</span>
                </div>
              </div>
            ))}

            {loading && (
              <div className="cw-row bot cw-typing">
                <div className="cw-msg-ava">⚡</div>
                <div className="cw-bubble">
                  <div className="cw-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            )}
          </div>

          {showQuick && (
            <div className="cw-quick">
              {QUICK_CHIPS.map((chip) => (
                <button key={chip.text} className="cw-chip" onClick={() => sendMessage(chip.text)}>
                  {chip.label}
                </button>
              ))}
              <button className="cw-chip urgent" onClick={handleEscalate}>
                🔴 Нужен менеджер
              </button>
            </div>
          )}

          <div className="cw-input-area">
            <textarea
              ref={inputRef}
              className="cw-textarea"
              placeholder="Напишите ваш вопрос..."
              rows={1}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                e.target.style.height = 'auto';
                e.target.style.height = Math.min(e.target.scrollHeight, 84) + 'px';
              }}
              onKeyDown={handleKeyDown}
            />
            <button
              className="cw-send"
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || loading}
              aria-label="Отправить">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>

          <div className="cw-foot">eltexalatau.kz · Powered by GPT-4o</div>
        </div>

        {toast && (
          <div className="cw-toast">
            <span>{toast.icon}</span>
            <span>{toast.msg}</span>
          </div>
        )}
      </div>
    </>
  );
}
