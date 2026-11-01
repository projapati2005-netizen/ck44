
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
  Ticket, Spade, Medal, Bell
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
    subtitle: "Grab today's promo code",
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
    name: "Sweet Bonanza",
    provider: "Pragmatic Play",
    image: imgSweetBonanza,
    categories: ["hot", "slots"],
  },
  {
    name: "Crazy Time",
    provider: "Evolution",
    image: imgCrazyTime,
    categories: ["hot", "live"],
  },
  {
    name: "Aviator",
    provider: "Spribe",
    image: imgAviator,
    categories: ["hot", "live"],
  },
  {
    name: "Gates of Olympus",
    provider: "Pragmatic Play",
    image: imgGatesOfOlympus,
    categories: ["hot", "slots"],
  },
  {
    name: "Lightning Roulette",
    provider: "Evolution",
    image: imgLightningRoulette,
    categories: ["hot", "live"],
  },
  {
    name: "Big Bass Bonanza",
    provider: "Pragmatic Play",
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
    <div className="min-h-screen bg-[#00231d] text-white pb-28 font-sans">

      {/* APP DOWNLOAD BAR */}
      <div className="flex items-center justify-between bg-[#003c37] border-b border-[#087c70] px-3 py-2">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-lg border-2 border-amber-400 bg-amber-500 flex items-center justify-center font-black text-black text-xs">
            CK44
          </div>

          <div>
            <p className="text-xs font-bold text-amber-400">
              APP UP TO ৳999 &gt;&gt;&gt;
            </p>
            <p className="text-amber-400 text-xs tracking-widest">
              ★★★★★
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => navigate("/download")}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg h-9 text-xs"
          >
            Download
          </Button>
          <Bell className="h-5 w-5 text-teal-300" />
        </div>
      </div>

      {/* MAIN HEADER */}
      <header className="flex items-center justify-between gap-2 px-3 py-3 bg-[#064a48] border-b border-[#087c70]">
        <Link to="/" className="text-xl sm:text-2xl font-black whitespace-nowrap">
          <span className="text-orange-400">CK44</span>
          <span className="text-white"> | win</span>
          <span className="text-green-400">tk</span>
        </Link>

        <div className="flex items-center gap-2">
          {!user && (
            <>
              <Button
                onClick={() => navigate("/login")}
                className="bg-[#00565a] border border-teal-700 text-amber-300 font-bold h-9 px-3"
              >
                Login
              </Button>

              <Button
                onClick={() => navigate("/register")}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold h-9 px-3"
              >
                Register
              </Button>
            </>
          )}
        </div>
      </header>

      {/* DEPOSIT AND WITHDRAW */}
      <div className="flex gap-2 p-3 bg-[#003c37]">
        <Link
          to="/deposit"
          className="flex-1 text-center rounded-lg bg-emerald-600 py-2.5 font-bold text-sm"
        >
          জমা (৳)
        </Link>

        <Link
          to="/withdraw"
          className="flex-1 text-center rounded-lg bg-orange-600 py-2.5 font-bold text-sm"
        >
          উত্তোলন (৳)
        </Link>
      </div>

      {/* ANNOUNCEMENT */}
      <div className="overflow-hidden whitespace-nowrap bg-[#00332e] border-y border-[#087c70] py-3 px-3">
        <div className="animate-marquee inline-block text-amber-300 text-sm">
          📢 Welcome to CK44 Demo Platform! 🚀 New games and exciting features
        </div>
      </div>

      {/* PROMO BANNER SLIDER */}
      <section className="px-3 py-3">
        <div className="relative overflow-hidden rounded-xl border-2 border-[#087c70]">
          <div className="relative h-[170px] sm:h-[230px] md:h-[300px]">
            {bannerSlides.map((slide, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                animate={{
                  opacity: index === currentSlide ? 1 : 0,
                }}
                transition={{ duration: 0.7 }}
                style={{
                  pointerEvents:
                    index === currentSlide ? "auto" : "none",
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-4 left-3 right-3">
                  <h2 className="text-lg sm:text-2xl font-black text-yellow-300">
                    {language === "bn" ? slide.titleBn : slide.title}
                  </h2>
                  <p className="text-xs text-white">
                    {slide.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-2">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all ${
                currentSlide === index
                  ? "w-6 bg-teal-400"
                  : "w-2.5 bg-gray-500"
              }`}
              aria-label={`Banner ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* NINE CATEGORIES - SINGLE HORIZONTAL LINE */}
      <section className="px-3 py-3">
        <div className="flex flex-nowrap gap-2 overflow-x-auto scrollbar-none">
          {categories.map((category) => {
            const Icon = category.icon;
            const selected = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`shrink-0 min-w-[120px] sm:min-w-[145px] h-[68px]
                  flex items-center justify-center gap-2 rounded-2xl
                  border font-bold text-xs sm:text-sm transition-all
                  ${
                    selected
                      ? "bg-[#00675c] border-teal-300 text-white"
                      : "bg-[#003d3d] border-[#075e58] text-gray-100"
                  }`}
              >
                <Icon className="h-6 w-6 shrink-0 text-teal-300" />
                {category.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* UPGRADE NOTICE */}
      <div className="mx-3 my-2 rounded-full border border-teal-700 bg-[#00443e] py-3 px-4 text-center text-xs sm:text-sm text-amber-300">
        📢 Platform Updated! 🚀 Fully upgraded with a smoother experience
      </div>

      {/* GAMES SECTION */}
      <section className="px-3 py-4">

        <div className="flex items-center justify-between gap-2 mb-4">
          <h2 className="text-xl sm:text-2xl font-black text-teal-300">
            {activeTitle}
          </h2>

          <div className="flex items-center gap-1">
            <Button
              onClick={() => navigate("/games/hot")}
              className="bg-[#005452] hover:bg-[#08766c] text-yellow-400 font-bold text-xs"
            >
              See All
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollGames("left")}
              aria-label="Previous games"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollGames("right")}
              aria-label="Next games"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {filteredGames.length > 0 ? (
          <div
            ref={gameSliderRef}
            className="flex gap-3 overflow-x-auto scrollbar-none scroll-smooth pb-2"
          >
            {filteredGames.map((game) => (
              <Card
                key={game.name}
                className="relative min-w-[165px] sm:min-w-[190px] overflow-hidden cursor-pointer border-[#087c70] bg-[#07352e]"
              >
                <button
                  onClick={() => toggleFavorite(game.name)}
                  className="absolute right-2 top-2 z-10 rounded-full bg-black/60 p-2"
                  aria-label="Toggle favorite"
                >
                  <Heart
                    className={`h-4 w-4 ${
                      favorites.includes(game.name)
                        ? "fill-red-500 text-red-500"
                        : "text-white"
                    }`}
                  />
                </button>

                <div
                  onClick={() =>
                    navigate(`/play/${gameNameToSlug(game.name)}`)
                  }
                >
                  <div className="h-[130px] sm:h-[150px] overflow-hidden">
                    <img
                      src={game.image}
                      alt={game.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <CardContent className="p-2">
                    <p className="text-sm font-bold truncate">
                      {game.name}
                    </p>
                    <p className="text-xs text-gray-400 truncate">
                      {game.provider}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-teal-800 bg-[#07352e] p-7 text-center">
            <Gamepad2 className="mx-auto h-9 w-9 text-teal-300 mb-2" />
            <p className="text-sm text-gray-300">
              এই ক্যাটাগরির Demo Game এখনো যোগ করা হয়নি।
            </p>
          </div>
        )}
      </section>

      {/* JACKPOT DEMO */}
      <section className="mx-3 my-5 rounded-xl border border-amber-500/40 bg-gradient-to-r from-[#163c2b] via-[#403719] to-[#163c2b] py-5">
        <div className="flex justify-center items-center gap-3">
          <Crown className="h-8 w-8 text-yellow-400" />

          <div className="text-center">
            <p className="text-xs text-gray-300 font-bold">
              DEMO JACKPOT
            </p>
            <p className="text-xl sm:text-3xl font-black text-yellow-400">
              ৳ 420,704,740.30
            </p>
          </div>

          <Crown className="h-8 w-8 text-yellow-400" />
        </div>
      </section>

      {/* SOCIAL FLOATING ICONS */}
      <div className="fixed right-3 bottom-32 z-40 flex flex-col gap-3">
        <a
          href="https://wa.me/"
          aria-label="WhatsApp"
          className="h-12 w-12 rounded-full bg-[#16c96b] text-white flex items-center justify-center text-2xl font-bold shadow-lg"
        >
          ☎
        </a>

        <a
          href="https://facebook.com/"
          aria-label="Facebook"
          className="h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-black shadow-lg"
        >
          f
        </a>

        <a
          href="https://telegram.org/"
          aria-label="Telegram"
          className="h-12 w-12 rounded-full bg-sky-500 text-white flex items-center justify-center text-2xl font-bold shadow-lg"
        >
          ➤
        </a>
      </div>

      {/* BOTTOM NAVIGATION */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-teal-700 bg-[#003a35]/95 backdrop-blur-md px-2 py-2">
        <div className="flex items-center justify-around">

          <Link to="/" className="flex flex-col items-center text-yellow-400">
            <Home className="h-6 w-6" />
            <span className="text-[11px] font-bold">Home</span>
            <div className="h-1 w-10 bg-yellow-400 rounded-full mt-1" />
          </Link>

          <Link to="/promotion" className="flex flex-col items-center text-teal-300">
            <Gift className="h-6 w-6" />
            <span className="text-[11px] font-bold">Promotion</span>
          </Link>

          <Link
            to="/invite"
            className="-mt-5 rounded-full border-4 border-[#003a35] bg-teal-400 p-3 text-[#00352e] shadow-lg"
          >
            <Users className="h-7 w-7" />
          </Link>

          <Link to="/reward" className="flex flex-col items-center text-teal-300">
            <Award className="h-6 w-6" />
            <span className="text-[11px] font-bold">Reward</span>
          </Link>

          <Link to="/member" className="flex flex-col items-center text-teal-300">
            <Gem className="h-6 w-6" />
            <span className="text-[11px] font-bold">Member</span>
          </Link>

        </div>
      </nav>

      <Footer />
    </div>
  );
};

export default Index;
