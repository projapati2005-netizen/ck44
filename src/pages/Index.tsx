import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Gamepad2, Trophy, TrendingUp, Zap, Star, Gift, Crown, Flame, ChevronRight, Fish, Sparkles, Swords, Ticket, Heart, Crosshair } from "lucide-react";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { gameNameToSlug } from "@/pages/games/GamePlayPage";

import bannerWelcome from "@/assets/banner-welcome.jpg";
import bannerDaily from "@/assets/banner-daily.jpg";
import bannerReferral from "@/assets/banner-referral.jpg";
import bannerFriday from "@/assets/banner-friday.jpg";

// Game images
import imgSweetBonanza from "@/assets/games/sweet-bonanza.jpg";
import imgCrazyTime from "@/assets/games/crazy-time.jpg";
import imgAviator from "@/assets/games/aviator.jpg";
import imgGatesOfOlympus from "@/assets/games/gates-of-olympus.jpg";
import imgLightningRoulette from "@/assets/games/lightning-roulette.jpg";
import imgMines from "@/assets/games/mines.jpg";
import imgPlinko from "@/assets/games/plinko.jpg";
import imgDice from "@/assets/games/dice.jpg";
import imgBigBass from "@/assets/games/big-bass.jpg";
import imgStarburst from "@/assets/games/starburst.jpg";
import imgCricket from "@/assets/games/cricket.jpg";
import imgFootball from "@/assets/games/football.jpg";
import imgDragonsFortune from "@/assets/games/dragons-fortune.jpg";
import imgTreasureHunt from "@/assets/games/treasure-hunt.jpg";
import imgLuckyWheel from "@/assets/games/lucky-wheel.jpg";
import imgBookOfDead from "@/assets/games/book-of-dead.jpg";
import imgMegaJoker from "@/assets/games/mega-joker.jpg";
import imgBlackjack from "@/assets/games/blackjack.jpg";
import imgBaccarat from "@/assets/games/baccarat.jpg";
import imgCoinFlip from "@/assets/games/coin-flip.jpg";
import imgGoldenFish from "@/assets/games/golden-fish.jpg";
import imgOceanKing from "@/assets/games/ocean-king.jpg";
import imgPoker from "@/assets/games/poker.jpg";
import imgWolfGold from "@/assets/games/wolf-gold.jpg";
import imgFruitParty from "@/assets/games/fruit-party.jpg";
import imgRoulette from "@/assets/games/roulette.jpg";

// Live casino images
import imgMonopoly from "@/assets/games/live-monopoly.jpg";
import imgDragonTiger from "@/assets/games/live-dragon-tiger.jpg";
import imgTeenPatti from "@/assets/games/live-teen-patti.jpg";
import imgAndarBahar from "@/assets/games/live-andar-bahar.jpg";

// Sports images
import imgBasketball from "@/assets/games/sports-basketball.jpg";
import imgTennis from "@/assets/games/sports-tennis.jpg";
import imgBoxing from "@/assets/games/sports-boxing.jpg";
import imgMMA from "@/assets/games/sports-mma.jpg";
import imgF1 from "@/assets/games/sports-f1-racing.jpg";
import imgEsports from "@/assets/games/sports-esports.jpg";
import imgIceHockey from "@/assets/games/sports-ice-hockey.jpg";
import imgBaseball from "@/assets/games/sports-baseball.jpg";
import imgBadminton from "@/assets/games/sports-badminton.jpg";
import imgGolf from "@/assets/games/sports-golf.jpg";

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

const marqueeMessages = [
  "🎉 কোটিপতি হতে আপনার ব্যক্তিগত লিংকটি শেয়ার করুন! 🎉",
  "👑 দৈনিক প্রথম জমার বোনাস ৳১৬৮৮ পর্যন্ত ✨",
  "🎉 প্রতি শুক্রবার সুপার বোনাস দিবস! 🎉",
  "👑 স্বাগত প্রথম জমা বোনাস সর্বোচ্চ ৳৮,৮৮৮ 👑",
];

// ─── Category Data ───

const hotGames = [
  { name: "Sweet Bonanza", provider: "Pragmatic Play", image: imgSweetBonanza },
  { name: "Crazy Time", provider: "Evolution", image: imgCrazyTime },
  { name: "Aviator", provider: "Spribe", image: imgAviator },
  { name: "Gates of Olympus", provider: "Pragmatic Play", image: imgGatesOfOlympus },
  { name: "Lightning Roulette", provider: "Evolution", image: imgLightningRoulette },
  { name: "Big Bass Bonanza", provider: "Pragmatic Play", image: imgBigBass },
];

const favoriteGames = [
  { name: "Aviator", provider: "Spribe", image: imgAviator },
  { name: "Sweet Bonanza", provider: "Pragmatic Play", image: imgSweetBonanza },
  { name: "Crazy Time", provider: "Evolution", image: imgCrazyTime },
  { name: "Mines", provider: "Custom", image: imgMines },
  { name: "Lightning Roulette", provider: "Evolution", image: imgLightningRoulette },
  { name: "Gates of Olympus", provider: "Pragmatic Play", image: imgGatesOfOlympus },
];

const slotGames = [
  { name: "Sweet Bonanza", provider: "Pragmatic Play", image: imgSweetBonanza },
  { name: "Gates of Olympus", provider: "Pragmatic Play", image: imgGatesOfOlympus },
  { name: "Big Bass Bonanza", provider: "Pragmatic Play", image: imgBigBass },
  { name: "Book of Dead", provider: "Play'n GO", image: imgBookOfDead },
  { name: "Starburst", provider: "NetEnt", image: imgStarburst },
  { name: "Wolf Gold", provider: "Pragmatic Play", image: imgWolfGold },
];

const liveGames = [
  { name: "Crazy Time", provider: "Evolution", image: imgCrazyTime },
  { name: "Lightning Roulette", provider: "Evolution", image: imgLightningRoulette },
  { name: "Blackjack VIP", provider: "Evolution", image: imgBlackjack },
  { name: "Baccarat Squeeze", provider: "Evolution", image: imgBaccarat },
  { name: "Monopoly Live", provider: "Evolution", image: imgMonopoly },
  { name: "Teen Patti", provider: "Ezugi", image: imgTeenPatti },
];

const pokerGames = [
  { name: "Texas Hold'em", provider: "Evolution", image: imgPoker },
  { name: "Blackjack Royal", provider: "Evolution", image: imgBlackjack },
  { name: "Baccarat Live", provider: "Evolution", image: imgBaccarat },
  { name: "Roulette Master", provider: "Evolution", image: imgRoulette },
  { name: "Casino Hold'em", provider: "Evolution", image: imgPoker },
  { name: "Teen Patti", provider: "Ezugi", image: imgTeenPatti },
];

const fishingGames = [
  { name: "Golden Fish", provider: "JDB", image: imgGoldenFish },
  { name: "Ocean King", provider: "JDB", image: imgOceanKing },
  { name: "Treasure Hunt", provider: "Hacksaw", image: imgTreasureHunt },
  { name: "Big Bass Bonanza", provider: "Pragmatic Play", image: imgBigBass },
  { name: "Dragon's Fortune", provider: "PG Soft", image: imgDragonsFortune },
  { name: "Lucky Wheel", provider: "Evolution", image: imgLuckyWheel },
];

const sportsGames = [
  { name: "Cricket Betting", provider: "CK444 Sports", image: imgCricket },
  { name: "Football", provider: "CK444 Sports", image: imgFootball },
  { name: "Basketball", provider: "CK444 Sports", image: imgBasketball },
  { name: "Tennis", provider: "CK444 Sports", image: imgTennis },
  { name: "Boxing", provider: "CK444 Sports", image: imgBoxing },
  { name: "MMA / UFC", provider: "CK444 Sports", image: imgMMA },
];

const eSportsGames = [
  { name: "Esports Arena", provider: "CK444 E-Sports", image: imgEsports },
  { name: "Cricket League", provider: "CK444 E-Sports", image: imgCricket },
  { name: "Football Championship", provider: "CK444 E-Sports", image: imgFootball },
  { name: "Badminton Pro", provider: "CK444 E-Sports", image: imgBadminton },
  { name: "Basketball Pro", provider: "CK444 E-Sports", image: imgBasketball },
  { name: "Tennis Masters", provider: "CK444 E-Sports", image: imgTennis },
];

const lotteryGames = [
  { name: "Lucky Draw", provider: "JDB", image: imgLuckyWheel },
  { name: "Mega Lottery", provider: "JDB", image: imgTreasureHunt },
  { name: "Golden Ticket", provider: "PG Soft", image: imgDragonsFortune },
  { name: "Fortune Wheel", provider: "Evolution", image: imgLuckyWheel },
  { name: "Coin Flip", provider: "Custom", image: imgCoinFlip },
  { name: "Dice Roll", provider: "Custom", image: imgDice },
];

// ─── Category Tab Config ───

const categoryTabs = [
  { key: "hot", label: "Hot Games", labelBn: "গরম খেলা", icon: Flame, color: "text-destructive" },
  { key: "favorite", label: "Favorite", labelBn: "প্রিয়", icon: Heart, color: "text-pink-400" },
  { key: "slot", label: "Slot", labelBn: "স্লট", icon: Gamepad2, color: "text-secondary" },
  { key: "live", label: "Live", labelBn: "লাইভ", icon: Trophy, color: "text-neon-gold" },
  { key: "poker", label: "Poker", labelBn: "পোকার", icon: Crosshair, color: "text-green-400" },
  { key: "fishing", label: "Fishing", labelBn: "ফিশিং", icon: Fish, color: "text-cyan-400" },
  { key: "sports", label: "Sports", labelBn: "স্পোর্টস", icon: TrendingUp, color: "text-neon-green" },
  { key: "esports", label: "E-Sports", labelBn: "ই-স্পোর্টস", icon: Swords, color: "text-neon-cyan" },
  { key: "lottery", label: "Lottery", labelBn: "লটারি", icon: Ticket, color: "text-neon-purple" },
];

const categoryGamesMap: Record<string, { games: { name: string; provider: string; image: string }[]; href: string }> = {
  hot: { games: hotGames, href: "/games/hot" },
  favorite: { games: favoriteGames, href: "/games/hot" },
  slot: { games: slotGames, href: "/games/slots" },
  live: { games: liveGames, href: "/games/live-casino" },
  poker: { games: pokerGames, href: "/games/live-casino" },
  fishing: { games: fishingGames, href: "/games/mini" },
  sports: { games: sportsGames, href: "/games/sports" },
  esports: { games: eSportsGames, href: "/games/sports" },
  lottery: { games: lotteryGames, href: "/games/mini" },
};

// ─── Category Section Component ───

const CategorySection = ({ tabKey, label, labelBn, icon: Icon, iconColor, games, href }: {
  tabKey: string;
  label: string;
  labelBn: string;
  icon: any;
  iconColor: string;
  games: { name: string; provider: string; image: string }[];
  href: string;
}) => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="mb-5" id={`cat-${tabKey}`}>
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <Icon className={`h-5 w-5 ${iconColor}`} />
          <h2 className="font-display text-sm md:text-base font-bold">{language === "bn" ? labelBn : label}</h2>
        </div>
        <Button variant="ghost" size="sm" className="text-secondary hover:text-secondary/80 text-xs" onClick={() => navigate(href)}>
          {language === "bn" ? "সব দেখুন" : "View All"} <ChevronRight className="h-3 w-3 ml-0.5" />
        </Button>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3">
        {games.map((game, i) => (
          <motion.div
            key={`${tabKey}-${game.name}-${i}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.02 }}
          >
            <Card className="cursor-pointer border-border hover:border-secondary/50 transition-all group overflow-hidden bg-card"
              onClick={() => navigate(`/play/${gameNameToSlug(game.name)}`)}>
              <div className="aspect-[4/3] relative overflow-hidden">
                <img src={game.image} alt={game.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2">
                  <span className="text-[10px] font-bold text-secondary bg-background/60 px-2 py-0.5 rounded-full">
                    {language === "bn" ? "খেলুন" : "Play"}
                  </span>
                </div>
              </div>
              <CardContent className="p-2">
                <p className="font-semibold text-xs truncate">{game.name}</p>
                <p className="text-[10px] text-muted-foreground">{game.provider}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ─── Main Component ───

const Index = () => {
  const { t, language } = useLanguage();
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
    <div className="bg-[#071714] text-white min-h-screen pb-24 font-sans">
      
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

      {/* ২. মেইন হেডার (লোগো, জমা, উত্তোলন, লগইন ও রেজিস্টার বাটন) */}
      <header className="px-3 py-3 flex items-center justify-between border-b border-[#0f3029]">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-bars text-gray-300 text-lg"></i>
          <span className="text-xl font-extrabold text-amber-400 tracking-wide">CK444.COM</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Link to="/deposit" className="bg-[#10b981] text-white text-xs font-bold px-3 py-1.5 rounded shadow">জমা</Link>
          <Link to="/withdraw" className="bg-[#d97706] text-white text-xs font-bold px-3 py-1.5 rounded shadow">উত্তোলন</Link>
          {!user && (
            <>
              <Button size="sm" onClick={() => navigate("/login")} className="bg-[#0e3b33] text-teal-300 hover:bg-[#0e3b33]/80 text-xs px-2.5 py-1.5 h-auto">Login</Button>
              <Button size="sm" onClick={() => navigate("/register")} className="bg-amber-400 text-black hover:bg-amber-500 font-bold text-xs px-2.5 py-1.5 h-auto">Register</Button>
            </>
          )}
        </div>
      </header>

      {/* ৩. অ্যানাউন্সমেন্ট ও নোটিশ বার */}
      <div className="bg-[#051c17] px-3 py-1.5 text-xs text-amber-300 flex items-center gap-2 border-b border-[#0f3029]">
        <i className="fa-solid fa-bullhorn text-amber-400"></i>
        <marquee className="text-[11px]">স্বাগত প্রথম জমার বোনাস ৮১৬৮৮ পর্যন্ত! প্রতি শুক্রবার বিশেষ ক্যাশব্যাক এবং রিলোড বোনাস উপভোগ করুন।</marquee>
      </div>

      {/* ৪. প্রমোশনাল ব্যানার স্লাইডার */}
      <section className="relative px-2 sm:px-3 py-2 md:py-3">
        <div className="relative rounded-xl overflow-hidden border-2 border-secondary/60 shadow-[0_0_20px_hsl(40_100%_50%/0.25)]">
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
                  <h1 className="font-display text-sm sm:text-xl font-black mb-1 text-secondary neon-text-gold drop-shadow-lg">
                    {language === "bn" ? slide.titleBn : slide.title}
                  </h1>
                  <p className="text-[10px] sm:text-xs text-foreground/90 mb-2 drop-shadow">
                    {language === "bn" ? slide.subtitleBn : slide.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="absolute bottom-2 right-3 flex gap-1.5 z-20">
            {bannerSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-secondary w-5 neon-glow-gold" : "bg-foreground/30 w-1.5 hover:bg-foreground/50"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ৫. রেফারেল বা ইনভাইট ব্যানার */}
      <div className="px-3 mb-3">
        <div className="bg-[#092620] border border-[#14473b] rounded-lg p-2.5 text-center text-xs text-amber-300 font-semibold shadow">
          🎉 কোটিপতি হতে আপনার ব্যক্তিগত লিংকটি শেয়ার করুন! 🎆
        </div>
      </div>

      {/* ৬. ক্যাটাগরি ট্যাব (Hot Games, Favorites, Slots ইত্যাদি) */}
      <div className="px-2 py-3">
        <div className="flex gap-1.5 overflow-x-auto scrollbar-hide pb-1">
          {categoryTabs.map((tab) => (
            <a
              key={tab.key}
              href={`#cat-${tab.key}`}
              className="flex flex-col items-center gap-1.5 min-w-[72px] px-2 py-2.5 rounded-lg bg-card border border-border hover:border-secondary/50 transition-all shrink-0"
            >
              <tab.icon className={`h-5 w-5 ${tab.color}`} />
              <span className="text-[10px] font-semibold text-foreground/80 whitespace-nowrap">
                {language === "bn" ? tab.labelBn : tab.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* ৭. সমস্ত ক্যাটাগরি ও গেম সেকশন */}
      <div className="px-2 sm:px-3">
        {categoryTabs.map((tab) => {
          const data = categoryGamesMap[tab.key];
          return (
            <CategorySection
              key={tab.key}
              tabKey={tab.key}
              label={tab.label}
              labelBn={tab.labelBn}
              icon={tab.icon}
              iconColor={tab.color}
              games={data.games}
              href={data.href}
            />
          );
        })}
      </div>

      {/* Jackpot Section */}
      <section className="mx-3 my-6 rounded-xl bg-gradient-to-r from-secondary/10 via-secondary/20 to-secondary/10 border border-secondary/30 py-5">
        <div className="flex items-center justify-center gap-4">
          <Crown className="h-8 w-8 text-secondary animate-pulse" />
          <div className="text-center">
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Jackpot</p>
            <p className="font-display text-2xl md:text-3xl font-black text-secondary neon-text-gold">
              ৳ 420,704,740.30
            </p>
          </div>
          <Crown className="h-8 w-8 text-secondary animate-pulse" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
