import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Crown, Flame, ChevronRight, ChevronLeft, Home, Gift,
  Users, Award, Gem, Trophy, Gamepad2, Fish, Dices,
  Star, Heart, Ticket, Spade, Medal
} from "lucide-react";
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
    title: "Monthly Invite Friend Bonus!",
    titleBn: "মাসিক বন্ধু আমন্ত্রণ বোনাস!",
    image: bannerReferral,
  },
  {
    title: "Daily First Deposit Bonus ৳1688",
    titleBn: "দৈনিক প্রথম জমা বোনাস ৳১৬৮৮",
    image: bannerDaily,
  },
  {
    title: "Welcome Bonus up to ৳8,888",
    titleBn: "স্বাগত বোনাস ৳৮,৮৮৮ পর্যন্ত",
    image: bannerWelcome,
  },
  {
    title: "Every Friday Super Bonus Day!",
    titleBn: "প্রতি শুক্রবার সুপার বোনাস দিবস!",
    image: bannerFriday,
  },
];

const categories = [
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
  { name: "Sweet Bonanza", provider: "Pragmatic Play", image: imgSweetBonanza, categories: ["hot", "slots"] },
  { name: "Crazy Time", provider: "Evolution", image: imgCrazyTime, categories: ["hot", "live"] },
  { name: "Aviator", provider: "Spribe", image: imgAviator, categories: ["hot", "live"] },
  { name: "Gates of Olympus", provider: "Pragmatic Play", image: imgGatesOfOlympus, categories: ["hot", "slots"] },
  { name: "Lightning Roulette", provider: "Evolution", image: imgLightningRoulette, categories: ["hot", "live"] },
  { name: "Big Bass Bonanza", provider: "Pragmatic Play", image: imgBigBass, categories: ["hot", "slots"] },
];

const Index = () => {
  const { language } = useLanguage();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState("hot");
  const [favorites, setFavorites] = useState<string[]>([]);

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

  const displayedGames = hotGames.filter((game) => {
    if (activeCategory === "favorites") {
      return favorites.includes(game.name);
    }
    return game.categories.includes(activeCategory);
  });

  const activeTitle =
    categories.find((item) => item.id === activeCategory)?.name ||
    "HOT GAMES";

  return (
    <div className="bg-[#071714] text-white min-h-screen pb-28 font-sans">

      {/* APP DOWNLOAD */}
      <div className="bg-[#041210] px-3 py-2 flex items-center justify-between border-b border-[#0f3029]">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded bg-amber-500 flex items-center justify-center font-bold text-black text-xs">
            CK44
          </div>
          <div>
            <p className="text-xs text-amber-400 font-bold">
              APP UP TO ৳999 &gt;&gt;&gt;
            </p>
            <p className="text-[10px] text-amber-400">★★★★★</p>
          </div>
        </div>
        <Button className="bg-amber-400 text-black font-bold rounded-full h-8 text-xs">
          Download
        </Button>
      </div>

      {/* HEADER */}
      <header className="px-3 py-3 flex items-center justify-between border-b border-[#0f3029]">
        <Link to="/" className="text-xl font-extrabold text-amber-400">
          CK444.COM
        </Link>

        <div className="flex items-center gap-1.5">
          <Link to="/deposit"
            className="bg-emerald-500 text-white text-xs font-bold px-3 py-2 rounded">
            জমা (৳)
          </Link>

          <Link to="/withdraw"
            className="bg-amber-600 text-white text-xs font-bold px-3 py-2 rounded">
            উত্তোলন (৳)
          </Link>

          {!user && (
            <>
              <Button size="sm"
                onClick={() => navigate("/login")}
                className="bg-[#0e3b33] text-teal-300 text-xs">
                Login
              </Button>

              <Button size="sm"
                onClick={() => navigate("/register")}
                className="bg-amber-400 text-black text-xs font-bold">
                Register
              </Button>
            </>
          )}
        </div>
      </header>

      {/* NOTICE */}
      <div className="bg-[#051c17] px-3 py-2 text-xs text-amber-300 border-b border-[#0f3029] overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          স্বাগতম CK44.COM — Demo Gaming Platform | নতুন গেম ও আপডেট দেখুন
        </div>
      </div>

      {/* BANNER SLIDER */}
      <section className="px-2 py-3">
        <div className="relative rounded-xl overflow-hidden border-2 border-amber-500/50">
          <div className="relative h-[160px] sm:h-[200px] md:h-[300px]">
            {bannerSlides.map((slide, i) => (
              <motion.div
                key={i}
                className="absolute inset-0"
                animate={{
                  opacity: i === currentSlide ? 1 : 0,
                  scale: i === currentSlide ? 1 : 1.05,
                }}
                transition={{ duration: 0.8 }}
                style={{
                  pointerEvents: i === currentSlide ? "auto" : "none",
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h2 className="absolute bottom-3 left-3 font-bold text-amber-300 text-sm sm:text-xl">
                  {language === "bn" ? slide.titleBn : slide.title}
                </h2>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-2">
          {bannerSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2.5 w-2.5 rounded-full ${
                i === currentSlide ? "bg-emerald-400" : "bg-gray-500"
              }`}
              aria-label={`Show banner ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ALL 9 CATEGORIES - ONE STRAIGHT LINE */}
      <section className="px-2 my-3">
        <div className="flex flex-nowrap items-stretch gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((category) => {
            const Icon = category.icon;
            const selected = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex flex-col items-center justify-center gap-1
                  min-w-[82px] h-[76px] shrink-0 rounded-xl border
                  px-2 py-2 transition-colors
                  ${
                    selected
                      ? "bg-[#0e5545] border-emerald-400 text-amber-300"
                      : "bg-[#092c24] border-[#144d40] text-white hover:bg-[#0f3d32]"
                  }`}
              >
                <Icon className="h-6 w-6 text-teal-300" />
                <span className="text-[10px] font-bold whitespace-nowrap">
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* UPGRADE NOTICE */}
      <div className="mx-3 my-3 rounded-full bg-[#082d24] border border-emerald-800 px-4 py-3 text-center text-xs text-amber-300">
        📢 Platform Updated! 🚀 Better Demo Experience
      </div>

      {/* HOT GAMES */}
      <section className="px-2 sm:px-3 mb-5">

        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-2">
            <Flame className="h-6 w-6 text-red-500" />
            <h2 className="font-bold text-base text-teal-300">
              {activeTitle}
            </h2>
          </div>

          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/games/hot")}
              className="text-amber-400 text-xs"
            >
              See All <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setActiveCategory("hot")}
              aria-label="Previous category"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setActiveCategory("favorites")}
              aria-label="Favorites"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {displayedGames.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
            {displayedGames.map((game) => (
              <Card
                key={game.name}
                className="relative cursor-pointer border-[#164b3d] overflow-hidden bg-[#102d25]"
              >
                <button
                  onClick={() => toggleFavorite(game.name)}
                  className="absolute right-2 top-2 z-10 rounded-full bg-black/70 p-2"
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
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={game.image}
                      alt={game.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <CardContent className="p-2">
                    <p className="font-semibold text-xs truncate">
                      {game.name}
                    </p>
                    <p className="text-[10px] text-gray-400 truncate">
                      {game.provider}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-[#164b3d] bg-[#102d25] p-8 text-center">
            <Gamepad2 className="mx-auto h-10 w-10 text-teal-400 mb-2" />
            <p className="text-sm text-gray-300">
              এই ক্যাটাগরিতে এখনো কোনো Demo Game যুক্ত করা হয়নি।
            </p>
          </div>
        )}
      </section>

      {/* JACKPOT DEMO */}
      <section className="mx-3 my-6 rounded-xl bg-gradient-to-r from-[#173a22] via-[#493719] to-[#173a22] border border-amber-500/40 py-5">
        <div className="flex items-center justify-center gap-4">
          <Crown className="h-8 w-8 text-amber-400" />
          <div className="text-center">
            <p className="text-[10px] text-gray-300 uppercase">
              Demo Jackpot
            </p>
            <p className="font-black text-xl sm:text-3xl text-amber-400">
              ৳ 420,704,740.30
            </p>
          </div>
          <Crown className="h-8 w-8 text-amber-400" />
        </div>
      </section>

      {/* BOTTOM NAVIGATION */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#061e18] border-t border-emerald-900 py-2 px-2 flex items-center justify-around z-50 shadow-lg">

        <Link to="/" className="flex flex-col items-center text-amber-400">
          <Home className="h-6 w-6" />
          <span className="text-[10px] font-bold mt-1">Home</span>
        </Link>

        <Link to="/promotion" className="flex flex-col items-center text-teal-300">
          <Gift className="h-6 w-6" />
          <span className="text-[10px] font-bold mt-1">Promotion</span>
        </Link>

        <Link to="/invite"
          className="flex flex-col items-center -mt-5 bg-teal-400 text-black p-3 rounded-full shadow-lg border-4 border-[#071714]">
          <Users className="h-6 w-6" />
        </Link>

        <Link to="/reward" className="flex flex-col items-center text-teal-300">
          <Award className="h-6 w-6" />
          <span className="text-[10px] font-bold mt-1">Reward</span>
        </Link>

        <Link to="/member" className="flex flex-col items-center text-teal-300">
          <Gem className="h-6 w-6" />
          <span className="text-[10px] font-bold mt-1">Member</span>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
