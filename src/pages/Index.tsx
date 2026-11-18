import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Crown, Flame, ChevronRight, ChevronLeft,
  Home, Gift, Users, Award, Gem, Trophy,
  Gamepad2, Fish, Dices, Star, Heart,
  Ticket, Spade, Medal, Bell, MessageCircle, Share2, Menu, X
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Footer from "@/components/Footer";
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
    title: "CLAIM WINTK PROMO CODE EVERYDAY",
    titleBn: "প্রতিদিন WINTK প্রোমো কোড দাবি করুন",
    subtitle: "instantly claim up to bonus",
    image: bannerReferral,
  },
  {
    title: "DAILY FIRST DEPOSIT BONUS",
    titleBn: "দৈনিক প্রথম জমা বোনাস",
    subtitle: "Special daily rewards",
    image: bannerDaily,
  },
  {
    title: "WELCOME BONUS UP TO ৳8,888",
    titleBn: "স্বাগত বোনাস ৳৮,৮৮৮ পর্যন্ত",
    subtitle: "Welcome to CK44 Demo",
    image: bannerWelcome,
  },
  {
    title: "EVERY FRIDAY SUPER BONUS",
    titleBn: "প্রতি শুক্রবার সুপার বোনাস",
    subtitle: "Special Friday promotion",
    image: bannerFriday,
  },
];

type Category = {
  id: string;
  name: string;
  icon: LucideIcon;
};

const categories: Category[] = [
  { id: "hot", name: "HOT GAMES", icon: Flame },
  { id: "favorites", name: "FAVORITES", icon: Heart },
  { id: "slots", name: "SLOTS", icon: Ticket },
  { id: "live", name: "LIVE CASINO", icon: Dices },
  { id: "poker", name: "POKER", icon: Spade },
  { id: "fish", name: "FISH", icon: Fish },
  { id: "sports", name: "SPORTS", icon: Trophy },
  { id: "esports", name: "E-SPORTS", icon: Gamepad2 },
  { id: "lottery", name: "LOTTERY", icon: Medal },
];

const hotGames = [
  {
    name: "Super Ace",
    provider: "JILI",
    image: imgSweetBonanza,
    categories: ["hot", "slots"],
  },
  {
    name: "Magic Ace",
    provider: "JDB",
    image: imgCrazyTime,
    categories: ["hot", "live"],
  },
  {
    name: "FlyX",
    provider: "",
    image: imgAviator,
    categories: ["hot", "live"],
  },
  {
    name: "Aviator",
    provider: "",
    image: imgGatesOfOlympus,
    categories: ["hot", "slots"],
  },
  {
    name: "Wild Bounty",
    provider: "",
    image: imgLightningRoulette,
    categories: ["hot", "slots"],
  },
  {
    name: "Super Rich",
    provider: "JILI",
    image: imgBigBass,
    categories: ["hot", "slots"],
  },
];

const Index = () => {
  const { language } = useLanguage();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState("hot");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showAppBanner, setShowAppBanner] = useState(true);

  const gameSliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const toggleFavorite = (name: string) => {
    setFavorites((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  const filteredGames = hotGames.filter((game) => {
    if (activeCategory === "favorites") {
      return favorites.includes(game.name);
    }
    return game.categories.includes(activeCategory);
  });

  const activeTitle =
    categories.find((category) => category.id === activeCategory)?.name ??
    "HOT GAMES";

  const scrollGames = (direction: "left" | "right") => {
    gameSliderRef.current?.scrollBy({
      left: direction === "right" ? 220 : -220,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#07352e] text-white pb-28 font-sans relative">

      {/* APP DOWNLOAD TOP BAR (As shown in image) */}
      {showAppBanner && (
        <div className="flex items-center justify-between bg-[#113830] border-b border-[#1b4d42] px-3 py-2">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg border border-amber-400 bg-amber-500 flex items-center justify-center font-black text-black text-xs shadow">
              CK44
            </div>
            <div>
              <p className="text-[11px] font-bold text-amber-400">
                APP UP TO ৳999 &gt;&gt;&gt;
              </p>
              <p className="text-amber-400 text-[10px] tracking-widest">
                ★★★★★
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              onClick={() => navigate("/download")}
              className="bg-amber-400 hover:bg-amber-500 text-black font-bold rounded-md h-7 px-3 text-xs shadow"
            >
              Download
            </Button>
            <button 
              onClick={() => setShowAppBanner(false)}
              className="text-gray-400 hover:text-white p-1"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* MAIN HEADER */}
      <header className="flex items-center justify-between px-3 py-2.5 bg-[#0b2721] border-b border-emerald-900/60">
        <div className="flex items-center gap-2.5">
          <button className="text-white p-1">
            <Menu className="h-5 w-5 text-gray-300" />
          </button>
          <Link to="/" className="text-lg font-black tracking-wide flex items-center">
            <span className="text-amber-400">CK44</span>
            <span className="text-emerald-400 font-normal text-xs ml-1">wintk</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          {!user && (
            <>
              <Button
                onClick={() => navigate("/login")}
                className="bg-transparent border border-emerald-500 text-emerald-400 hover:bg-emerald-950 font-semibold h-8 px-3 text-xs rounded"
              >
                Login
              </Button>

              <Button
                onClick={() => navigate("/register")}
                className="bg-amber-400 hover:bg-amber-500 text-black font-bold h-8 px-3 text-xs rounded shadow"
              >
                Register
              </Button>
            </>
          )}
        </div>
      </header>

      {/* ANNOUNCEMENT TICKER */}
      <div className="overflow-hidden whitespace-nowrap bg-[#113830]/90 border-b border-emerald-900/50 py-1.5 px-3">
        <div className="text-amber-300 text-[11px] flex items-center gap-1.5">
          <span>📢</span>
          <span className="truncate">! 🚀 Fully upgraded with a smoother experience and mc...</span>
        </div>
      </div>

      {/* PROMO BANNER CAROUSEL (Side-by-side style as in image) */}
      <section className="px-3 py-2.5">
        <div className="flex gap-2.5 overflow-x-auto no-scrollbar scroll-smooth">
          {bannerSlides.map((slide, index) => (
            <div
              key={index}
              className="min-w-[85%] sm:min-w-[70%] bg-gradient-to-r from-[#113830] to-[#0b2721] rounded-xl p-3 border border-emerald-700/40 relative overflow-hidden flex items-center justify-between shadow-md"
            >
              <div className="w-3/5 z-10">
                <span className="bg-emerald-700/80 text-[9px] px-2 py-0.5 rounded text-emerald-200 font-semibold">
                  PROMO CODE
                </span>
                <div className="text-xs font-bold text-amber-300 mt-1 truncate">
                  {slide.title}
                </div>
                <div className="text-[10px] text-gray-300 mt-0.5">
                  {slide.subtitle}
                </div>
              </div>
              <div className="w-2/5 flex justify-end">
                <div className="w-20 h-16 bg-emerald-800/40 rounded-lg flex items-center justify-center text-[10px] text-emerald-300 font-bold border border-emerald-700/30">
                  Banner {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-2">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-full transition-all ${
                currentSlide === index
                  ? "w-4 h-1.5 bg-amber-400"
                  : "w-1.5 h-1.5 bg-emerald-700"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* THREE MAIN QUICK CATEGORIES (Hot Games, Favorites, Slots) */}
      <section className="px-3 py-1">
        <div className="grid grid-cols-3 gap-2">
          <button 
            onClick={() => setActiveCategory("hot")}
            className={`flex items-center justify-center gap-1.5 py-2 px-1 rounded-xl border text-[11px] font-bold transition ${
              activeCategory === "hot" 
                ? "bg-[#114b3e] border-emerald-500 text-amber-300" 
                : "bg-[#113830] border-emerald-900/60 text-emerald-300"
            }`}
          >
            <Flame className="h-3.5 w-3.5 text-emerald-400" />
            <span>HOT GAMES</span>
          </button>
          
          <button 
            onClick={() => setActiveCategory("favorites")}
            className={`flex items-center justify-center gap-1.5 py-2 px-1 rounded-xl border text-[11px] font-bold transition ${
              activeCategory === "favorites" 
                ? "bg-[#114b3e] border-emerald-500 text-amber-300" 
                : "bg-[#113830] border-emerald-900/60 text-emerald-300"
            }`}
          >
            <Heart className="h-3.5 w-3.5 text-emerald-400" />
            <span>FAVORITES</span>
          </button>

          <button 
            onClick={() => setActiveCategory("slots")}
            className={`flex items-center justify-center gap-1.5 py-2 px-1 rounded-xl border text-[11px] font-bold transition ${
              activeCategory === "slots" 
                ? "bg-[#114b3e] border-emerald-500 text-amber-300" 
                : "bg-[#113830] border-emerald-900/60 text-emerald-300"
            }`}
          >
            <Ticket className="h-3.5 w-3.5 text-emerald-400" />
            <span>SLOTS</span>
          </button>
        </div>
      </section>

      {/* GAMES SECTION HEADER */}
      <section className="px-3 py-3">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-emerald-400 font-extrabold tracking-wider text-xs sm:text-sm">
            {activeTitle}
          </h2>

          <div className="flex items-center gap-2">
            <Button
              onClick={() => navigate("/games/hot")}
              className="bg-[#1b4d42] hover:bg-[#225d50] text-amber-400 font-bold text-[11px] h-7 px-3 rounded-full"
            >
              See All
            </Button>

            <div className="flex gap-1">
              <button
                onClick={() => scrollGames("left")}
                className="h-6 w-6 rounded-full bg-[#1b4d42] flex items-center justify-center text-xs text-gray-300 hover:bg-emerald-700"
                aria-label="Previous"
              >
                &lt;
              </button>
              <button
                onClick={() => scrollGames("right")}
                className="h-6 w-6 rounded-full bg-[#1b4d42] flex items-center justify-center text-xs text-gray-300 hover:bg-emerald-700"
                aria-label="Next"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>

        {/* GAMES GRID (3 Columns as shown in image) */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-3 gap-2">
            {filteredGames.map((game) => (
              <div
                key={game.name}
                className="bg-gradient-to-b from-[#113830] to-[#0b2721] rounded-xl p-2 border border-emerald-900/55 relative cursor-pointer shadow hover:border-emerald-500 transition"
                onClick={() => navigate(`/play/${gameNameToSlug(game.name)}`)}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(game.name);
                  }}
                  className="absolute right-2 top-2 z-10 rounded-full bg-black/50 p-1"
                  aria-label="Favorite"
                >
                  <Heart
                    className={`h-3.5 w-3.5 ${
                      favorites.includes(game.name)
                        ? "fill-red-500 text-red-500"
                        : "text-white/70"
                    }`}
                  />
                </button>

                <div className="h-20 sm:h-24 bg-[#16473d]/40 rounded-lg flex items-center justify-center mb-2 overflow-hidden">
                  <span className="text-xs font-bold text-amber-300 text-center px-1">
                    {game.name}
                  </span>
                </div>

                <p className="text-[11px] font-bold truncate text-white">
                  {game.name}
                </p>
                <p className="text-[9px] text-emerald-400 truncate">
                  {game.provider}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-emerald-800 bg-[#113830] p-6 text-center text-xs text-gray-300">
            এই ক্যাটাগরির কোনো গেম পাওয়া যায়নি।
          </div>
        )}
      </section>

      {/* SOCIAL FLOATING ICONS (WhatsApp, Facebook, etc. on the right side) */}
      <div className="fixed right-3 bottom-24 z-40 flex flex-col gap-2">
        <a
          href="https://whatsapp.com"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="h-10 w-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg hover:scale-105 transition"
        >
          <MessageCircle className="h-5 w-5" />
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:scale-105 transition"
        >
          <Share2 className="h-5 w-5" />
        </a>
      </div>

      {/* BOTTOM NAVIGATION BAR */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-emerald-900/80 bg-[#081e19]/95 backdrop-blur-md px-2 py-1.5">
        <div className="flex items-center justify-around">

          <Link to="/" className="flex flex-col items-center text-amber-400">
            <Home className="h-5 w-5" />
            <span className="text-[10px] mt-0.5 font-bold">Home</span>
          </Link>

          <Link to="/promotions" className="flex flex-col items-center text-gray-400 hover:text-amber-400">
            <Gift className="h-5 w-5" />
            <span className="text-[10px] mt-0.5">Promotion</span>
          </Link>

          <Link
            to="/invite"
            className="-mt-4 rounded-full border-4 border-[#081e19] bg-[#113830] p-2.5 text-emerald-400 shadow-xl flex flex-col items-center"
          >
            <Users className="h-5 w-5 text-emerald-400" />
            <span className="text-[9px] mt-0.5 font-bold text-white">Invite</span>
          </Link>

          <Link to="/award-centre" className="flex flex-col items-center text-gray-400 hover:text-amber-400">
            <Award className="h-5 w-5" />
            <span className="text-[10px] mt-0.5">Reward</span>
          </Link>

          <Link to="/profile" className="flex flex-col items-center text-gray-400 hover:text-amber-400">
            <Gem className="h-5 w-5" />
            <span className="text-[10px] mt-0.5">Member</span>
          </Link>

        </div>
      </nav>

      <Footer />
    </div>
  );
};

export default Index;
