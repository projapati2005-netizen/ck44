import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Crown, Flame, ChevronRight, Home, Gift, Users, Award, Gem, Trophy, Gamepad2, Fish, Dices } from "lucide-react";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { gameNameToSlug } from "@/pages/games/GamePlayPage";

import bannerWelcome from "@/assets/banner-welcome.jpg";
import bannerDaily from "@/assets/banner-daily.jpg";
import bannerReferral from "@/assets/banner-referral.jpg";
import bannerFriday from "@/assets/banner-friday.jpg";

import imgSweetBonanza from "@/assets/games/sweet-bonanza.jpg";
import imgCrazyTime from "@/assets/games/crazy-time.jpg";
import imgAviator from "@/assets/games/aviator.jpg";
import imgGatesOfOlympus from "@/assets/games/gates-of-olympus.jpg";
import imgLightningRoulette from "@/assets/games/lightning-roulette.jpg";
import imgBigBass from "@/assets/games/big-bass.jpg";

const bannerSlides = [
  {
    title: "🎉 Monthly Invite Friend Bonus!",
    titleBn: "🎉 মাসিক বন্ধু আমন্ত্রণ বোনাস!",
    subtitle: "Earn up to ৳1,000,000 every month",
    subtitleBn: "প্রতি মাসে ৳১০,০০,০০০ পর্যন্ত আয় করুন",
    image: bannerReferral,
  },
  {
    title: "👑 Daily First Deposit Bonus ৳1688",
    titleBn: "👑 দৈনিক প্রথম জমা বোনাস ৳১৬৮৮",
    subtitle: "Get massive rewards on your first deposit every day!",
    subtitleBn: "প্রতিদিন প্রথম জমায় বিশাল পুরষ্কার পান!",
    image: bannerDaily,
  },
  {
    title: "🎰 Welcome Bonus up to ৳8,888",
    titleBn: "🎰 স্বাগত বোনাস ৳৮,৮৮৮ পর্যন্ত",
    subtitle: "Join now and claim your first deposit bonus",
    subtitleBn: "এখনই যোগ দিন এবং আপনার প্রথম জমা বোনাস দাবি করুন",
    image: bannerWelcome,
  },
  {
    title: "🎉 Every Friday Super Bonus Day!",
    titleBn: "🎉 প্রতি শুক্রবার সুপার বোনাস দিবস!",
    subtitle: "Special cashback and reload bonuses every Friday",
    subtitleBn: "প্রতি শুক্রবার বিশেষ ক্যাশব্যাক এবং রিলোড বোনাস",
    image: bannerFriday,
  },
];

const hotGames = [
  { name: "Sweet Bonanza", provider: "Pragmatic Play", image: imgSweetBonanza },
  { name: "Crazy Time", provider: "Evolution", image: imgCrazyTime },
  { name: "Aviator", provider: "Spribe", image: imgAviator },
  { name: "Gates of Olympus", provider: "Pragmatic Play", image: imgGatesOfOlympus },
  { name: "Lightning Roulette", provider: "Evolution", image: imgLightningRoulette },
  { name: "Big Bass Bonanza", provider: "Pragmatic Play", image: imgBigBass },
];

const Index = () => {
  const { language } = useLanguage();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#071714] text-white min-h-screen pb-28 font-sans">
      
      {/* ১. শীর্ষ অ্যাপ ডাউনলোড ব্যানার */}
      <div className="bg-[#041210] px-3 py-2 flex items-center justify-between border-b border-[#0f3029]">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded bg-amber-500 flex items-center justify-center font-bold text-black text-xs shadow">CK44</div>
          <div>
            <p className="text-xs text-amber-400 font-semibold">APP UP TO ৳999 &gt;&gt;&gt;</p>
            <div className="text-[10px] text-amber-400">★★★★★</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-amber-400 text-black text-xs font-bold px-3.5 py-1.5 rounded-full shadow">Download</button>
          <span className="text-gray-400 text-lg cursor-pointer">&times;</span>
        </div>
      </div>

      {/* ২. মেইন হেডার */}
      <header className="px-3 py-3 flex items-center justify-between border-b border-[#0f3029]">
        <div className="flex items-center gap-2">
          <span className="text-xl font-extrabold text-amber-400 tracking-wide">CK444.COM</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Link to="/deposit" className="bg-[#10b981] text-white text-xs font-bold px-3 py-1.5 rounded shadow">জমা (৳)</Link>
          <Link to="/withdraw" className="bg-[#d97706] text-white text-xs font-bold px-3 py-1.5 rounded shadow">উত্তোলন (৳)</Link>
          {!user && (
            <>
              <Button size="sm" onClick={() => navigate("/login")} className="bg-[#0e3b33] text-teal-300 hover:bg-[#0e3b33]/80 text-xs px-2 py-1.5 h-auto">Login</Button>
              <Button size="sm" onClick={() => navigate("/register")} className="bg-amber-400 text-black hover:bg-amber-500 font-bold text-xs px-2 py-1.5 h-auto">Register</Button>
            </>
          )}
        </div>
      </header>

      {/* ৩. নোটিশ বার */}
      <div className="bg-[#051c17] px-3 py-1.5 text-xs text-amber-300 flex items-center gap-2 border-b border-[#0f3029]">
        <marquee className="text-[11px]">স্বাগত প্রথম জমার বোনাস ৳৮১৬৮৮ পর্যন্ত! প্রতি শুক্রবার বিশেষ ক্যাশব্যাক এবং রিলোড বোনাস উপভোগ করুন।</marquee>
      </div>

      {/* ৪. প্রমোশনাল ব্যানার স্লাইডার */}
      <section className="relative px-2 sm:px-3 py-2 md:py-3">
        <div className="relative rounded-xl overflow-hidden border-2 border-secondary/60">
          <div className="relative h-[160px] sm:h-[200px] md:h-[300px]">
            {bannerSlides.map((slide, i) => (
              <motion.div
                key={i}
                className="absolute inset-0"
                initial={false}
                animate={{ opacity: i === currentSlide ? 1 : 0, scale: i === currentSlide ? 1 : 1.05 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ pointerEvents: i === currentSlide ? "auto" : "none" }}
              >
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-3 sm:p-5">
                  <h1 className="font-display text-sm sm:text-xl font-black mb-1 text-secondary drop-shadow-lg">
                    {language === "bn" ? slide.titleBn : slide.title}
                  </h1>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ৫. গেম ক্যাটাগরি বাটন সেকশন (ছবি অনুযায়ী যুক্ত করা হয়েছে) */}
      <section className="px-2 sm:px-3 my-3">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button className="flex items-center gap-2 bg-[#092c24] hover:bg-[#0f3d32] border border-[#144d40] px-4 py-2.5 rounded-xl text-xs font-bold text-white shrink-0 shadow">
            <Flame className="h-4 w-4 text-teal-400" /> HOT GAMES
          </button>
          <button className="flex items-center gap-2 bg-[#092c24] hover:bg-[#0f3d32] border border-[#144d40] px-4 py-2.5 rounded-xl text-xs font-bold text-white shrink-0 shadow">
            <Trophy className="h-4 w-4 text-teal-400" /> FAVORITES
          </button>
          <button className="flex items-center gap-2 bg-[#092c24] hover:bg-[#0f3d32] border border-[#144d40] px-4 py-2.5 rounded-xl text-xs font-bold text-white shrink-0 shadow">
            <Gamepad2 className="h-4 w-4 text-teal-400" /> SLOTS
          </button>
          <button className="flex items-center gap-2 bg-[#092c24] hover:bg-[#0f3d32] border border-[#144d40] px-4 py-2.5 rounded-xl text-xs font-bold text-white shrink-0 shadow">
            <Dices className="h-4 w-4 text-teal-400" /> LIVE CASINO
          </button>
          <button className="flex items-center gap-2 bg-[#092c24] hover:bg-[#0f3d32] border border-[#144d40] px-4 py-2.5 rounded-xl text-xs font-bold text-white shrink-0 shadow">
            <Fish className="h-4 w-4 text-teal-400" /> FISH
          </button>
        </div>
      </section>

      {/* ৬. হট গেমস সেকশন */}
      <section className="px-2 sm:px-3 mb-5">
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-destructive" />
            <h2 className="font-display text-sm md:text-base font-bold">{language === "bn" ? "গরম খেলা" : "Hot Games"}</h2>
          </div>
          <Button variant="ghost" size="sm" className="text-secondary hover:text-secondary/80 text-xs" onClick={() => navigate("/games/hot")}>
            {language === "bn" ? "সব দেখুন" : "View All"} <ChevronRight className="h-3 w-3 ml-0.5" />
          </Button>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3">
          {hotGames.map((game, i) => (
            <Card key={`hot-${game.name}-${i}`} className="cursor-pointer border-border overflow-hidden bg-card"
              onClick={() => navigate(`/play/${gameNameToSlug(game.name)}`)}>
              <div className="aspect-[4/3] relative overflow-hidden">
                <img src={game.image} alt={game.name} className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-2">
                <p className="font-semibold text-xs truncate">{game.name}</p>
                <p className="text-[10px] text-muted-foreground">{game.provider}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ৭. জ্যাকপট সেকশন */}
      <section className="mx-3 my-6 rounded-xl bg-gradient-to-r from-secondary/10 via-secondary/20 to-secondary/10 border border-secondary/30 py-5">
        <div className="flex items-center justify-center gap-4">
          <Crown className="h-8 w-8 text-secondary animate-pulse" />
          <div className="text-center">
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Jackpot</p>
            <p className="font-display text-2xl md:text-3xl font-black text-secondary">৳ 420,704,740.30</p>
          </div>
          <Crown className="h-8 w-8 text-secondary animate-pulse" />
        </div>
      </section>

      {/* ৮. নিচের বটম নেভিগেশন বার (ছবি অনুযায়ী যুক্ত করা হলো) */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#061e18] border-t border-[#0f3d32] py-2 px-4 flex items-center justify-around z-50 shadow-lg">
        <Link to="/" className="flex flex-col items-center text-amber-400">
          <Home className="h-5 w-5" />
          <span className="text-[10px] font-semibold mt-0.5">Home</span>
        </Link>
        <Link to="/promotion" className="flex flex-col items-center text-teal-300 hover:text-amber-400">
          <Gift className="h-5 w-5" />
          <span className="text-[10px] font-semibold mt-0.5">Promotion</span>
        </Link>
        <Link to="/invite" className="flex flex-col items-center -mt-5 bg-teal-400 text-black p-3 rounded-full shadow-lg border-4 border-[#071714]">
          <Users className="h-6 w-6" />
        </Link>
        <Link to="/reward" className="flex flex-col items-center text-teal-300 hover:text-amber-400">
          <Award className="h-5 w-5" />
          <span className="text-[10px] font-semibold mt-0.5">Reward</span>
        </Link>
        <Link to="/member" className="flex flex-col items-center text-teal-300 hover:text-amber-400">
          <Gem className="h-5 w-5" />
          <span className="text-[10px] font-semibold mt-0.5">Member</span>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
