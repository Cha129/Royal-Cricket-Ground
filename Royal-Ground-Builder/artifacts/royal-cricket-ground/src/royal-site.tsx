import { useMemo, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  Instagram,
  Mail,
  MapPinned,
  MessageCircle,
  Menu,
  Phone,
  PlayCircle,
  Search,
  Star,
  Trophy,
  X,
  Youtube,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  aboutCards,
  buildWhatsAppMessage,
  coFounder,
  defaultBookingMessage,
  faqs,
  facilitiesOverview,
  galleryFilters,
  galleryItems,
  groundDetails,
  heroStats,
  highlights,
  images,
  navItems,
  owner,
  pricing,
  quickLinks,
  site,
  slotBands,
  socialLinks,
  testimonials,
  tournamentResults,
  tournaments,
  weekdayPricing,
  weekendPricing,
  type PricingCard,
} from "@/lib/royal-content";
import { BallImpact, CricketBallSVG } from "@/components/ball-impact";
import wishcraftLogoUrl from "@assets/image_1782829833741.png";
import devPhotoUrl from "@assets/image_1782829841082.png";

type GalleryCategory = (typeof galleryFilters)[number];

const socialIcons = {
  Instagram,
  YouTube: Youtube,
  WhatsApp: MessageCircle,
};

export function SiteShell({ children }: { children: ReactNode }) {
  const [pathname] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-x-0 top-0 z-40 border-b border-border/50 surface-hero">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:flex lg:flex-wrap lg:justify-between sm:px-6 lg:px-8">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <img src={images.logo} alt="Royal Cricket Ground logo" className="h-12 w-12 shrink-0 rounded-full border border-primary/30 object-cover" />
            <div className="min-w-0">
              <p className="truncate font-display text-2xl leading-none text-foreground">Royal Cricket Ground (RCG)</p>
              <p className="truncate text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Premium turf booking · Moinabad
              </p>
            </div>
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border glass-panel lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <div className="hidden items-center gap-6 lg:flex">
            <nav className="flex items-center gap-6 text-[15px] font-medium">
              {navItems.map((item) => {
                const active = pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`relative py-1 transition-colors duration-200 ${
                      active
                        ? "text-foreground after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="flex items-center gap-3">
              <Button asChild variant="outline" className="border-border bg-black/45 text-foreground hover:bg-secondary/80 font-semibold h-10 px-4">
                <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call now
                </a>
              </Button>
              <Button asChild variant="default" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/95 shadow h-10 px-4">
                <Link to="/book-slot">Book now</Link>
              </Button>
            </div>
          </div>
        </div>

        {menuOpen ? (
          <div className="border-t border-border/50 px-4 pb-4 lg:hidden">
            <nav className="grid gap-2 pt-4">
              {navItems.map((item) => {
                const active = pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className={active ? "rounded-md bg-secondary px-3 py-2 text-foreground" : "rounded-md px-3 py-2 text-muted-foreground hover:bg-secondary/60 hover:text-foreground"}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4 grid gap-3">
              <Button asChild variant="glass" size="default">
                <a href={`tel:${site.phone.replace(/\s+/g, "")}`}>
                  <Phone className="h-4 w-4" />
                  {site.phone}
                </a>
              </Button>
              <Button asChild variant="hero" size="hero">
                <Link to="/book-slot" onClick={() => setMenuOpen(false)}>
                  Book your slot
                </Link>
              </Button>
            </div>
          </div>
        ) : null}
      </div>

      <main className="relative z-10 pt-24">{children}</main>
      <WhatsAppFloat />
      <BallImpact />
      <CraftedBySection />
      <SiteFooter />
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SectionShell className="pt-0">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass-panel rounded-lg p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-primary/15 text-primary">Ground highlights</Badge>
              <p className="text-sm text-muted-foreground">Premium turf, lights, training support, and fast reservations.</p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {highlights.slice(0, 8).map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="glass-panel group rounded-lg border-border/50 transition-transform duration-300 hover:-translate-y-1">
                    <CardHeader className="space-y-4 pb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-md border border-primary/35 bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-foreground">{item.title}</CardTitle>
                        <CardDescription className="mt-2 text-sm leading-6">{item.description}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button asChild variant="pitch" size="default" className="w-full">
                        <Link to="/book-slot">
                          Quick booking
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <Card className="glass-panel rounded-lg border-border/50 p-6 sm:p-8">
            <CardHeader className="px-0 pt-0">
              <Badge className="w-fit bg-primary/15 text-primary">Ready to play?</Badge>
              <CardTitle className="text-4xl text-foreground">Reserve your cricket slot in seconds.</CardTitle>
              <CardDescription className="text-base leading-7">
                Message the team instantly or jump to the booking page for timings, pricing, and slot details.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 px-0 pb-0">
              <Button asChild variant="hero" size="hero" className="w-full">
                <Link to="/book-slot">
                  Book slot
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="glass" size="hero" className="w-full">
                <a href={defaultBookingMessage} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Contact on WhatsApp
                </a>
              </Button>
              <div className="rounded-lg border border-border/60 bg-background/30 p-4 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">Why players choose RCG</p>
                <ul className="mt-3 space-y-2">
                  {[
                    "Premium cricket atmosphere",
                    "Fast access from WhatsApp and call",
                    "Tournament-friendly setup",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionShell>

      <MediaShowcase />

      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <Badge className="bg-primary/15 text-primary">Testimonials</Badge>
            <h2 className="text-balance font-display text-5xl leading-none text-foreground sm:text-6xl">
              Trusted by teams that want a premium cricket experience.
            </h2>
            <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              From weekend squads to event organizers, players choose Royal Cricket Ground for atmosphere, turf quality, and smooth coordination.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name} className="glass-panel rounded-lg border-border/50">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm leading-7 text-foreground/90">"{item.quote}"</p>
                  <div className="mt-5">
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionShell>

      <FaqSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="hero-vignette stadium-beam relative isolate overflow-hidden">
      <img src={images.hero} alt="Royal Cricket Ground at sunset during a live cricket session" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,oklch(0.94_0.05_95_/_0.25),transparent_22%),linear-gradient(110deg,oklch(0.08_0.01_150_/_0.88)_15%,oklch(0.12_0.03_145_/_0.58)_50%,oklch(0.08_0.01_140_/_0.92)_100%)]" />

      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="rcg-floating-ball absolute right-[8%] top-[18%] hidden h-14 w-14 opacity-90 md:block">
          <CricketBallSVG className="h-full w-full drop-shadow-[0_10px_28px_oklch(0.04_0.02_150_/_0.6)]" />
        </div>
        <div
          className="rcg-floating-ball absolute left-[6%] bottom-[18%] hidden h-9 w-9 opacity-80 md:block"
          style={{ animationDelay: "1.4s", animationDuration: "7.5s" }}
        >
          <CricketBallSVG className="h-full w-full drop-shadow-[0_8px_18px_oklch(0.04_0.02_150_/_0.55)]" />
        </div>
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-end gap-8 px-4 pb-12 pt-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-16">
        <div className="relative z-10 max-w-3xl space-y-6">
          <Badge className="bg-primary/20 text-primary">Premium cricket turf booking</Badge>
          <h1 className="text-balance font-display text-6xl leading-[0.88] text-foreground sm:text-7xl lg:text-8xl">
            Book Your Cricket Slot Today
          </h1>
          <p className="max-w-2xl text-base leading-7 text-foreground/84 sm:text-xl sm:leading-8">
            Experience premium cricket turf, professional facilities, exciting night matches, and tournaments at Royal Cricket Ground.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="hero">
              <Link to="/book-slot">
                Book now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="hero">
              <a href="#timings-section">
                <Clock3 className="h-4 w-4" />
                View timings
              </a>
            </Button>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div key={item.label} className="glass-panel rounded-lg p-4">
                <p className="font-display text-3xl text-primary">{item.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 grid gap-4 lg:justify-self-end">
          <Card className="glass-panel max-w-md rounded-lg border-border/60">
            <CardHeader>
              <Badge className="w-fit bg-primary/15 text-primary">Stadium atmosphere</Badge>
              <CardTitle className="text-4xl text-foreground">Night-ready turf with premium ground energy</CardTitle>
              <CardDescription className="text-base leading-7">
                Open playing space, professional facilities, and quick contact tools make Royal Cricket Ground built for modern cricket bookings.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              {site.openingHours.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-md border border-border/50 bg-background/25 p-3">
                  <CalendarDays className="mt-0.5 h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground/90">{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function MediaShowcase() {
  return (
    <SectionShell>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <Badge className="bg-primary/15 text-primary">Photos & video</Badge>
          <h2 className="mt-4 text-balance font-display text-5xl leading-none text-foreground sm:text-6xl">
            Real moments from the ground, pavilion, and match days.
          </h2>
        </div>
        <Button asChild variant="glass" size="default">
          <Link to="/gallery">
            View full gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="glass-panel rounded-lg p-5 sm:p-6">
        <Carousel opts={{ loop: true }} className="w-full">
          <CarouselContent>
            {galleryItems.slice(0, 5).map((item) => (
              <CarouselItem key={item.title} className="md:basis-1/2 xl:basis-1/3">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="group relative block overflow-hidden rounded-lg border border-border/50 bg-background/20 text-left">
                      <img src={item.image} alt={item.title} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                      <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,oklch(0.08_0.01_150_/_0.88))] p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-primary">{item.category}</p>
                        <p className="mt-2 text-lg text-foreground">{item.title}</p>
                      </div>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl glass-panel border-border/60 bg-background/90 p-3 sm:p-5">
                    <DialogHeader>
                      <DialogTitle className="font-display text-4xl text-foreground">{item.title}</DialogTitle>
                      <DialogDescription>{item.category} · Royal Cricket Ground media preview</DialogDescription>
                    </DialogHeader>
                    <img src={item.image} alt={item.title} className="max-h-[72vh] w-full rounded-lg object-contain" />
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="glass" className="left-3 top-3 translate-y-0 border-border/60 bg-background/60" />
          <CarouselNext variant="glass" className="right-3 top-3 translate-y-0 border-border/60 bg-background/60" />
        </Carousel>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <Card className="glass-panel overflow-hidden rounded-lg border-border/50">
          <div className="grid gap-0 md:grid-cols-[1fr_1.2fr]">
            <img src={images.lounge} alt="Indoor lounge view looking out onto Royal Cricket Ground" className="h-full min-h-[280px] w-full object-cover" loading="lazy" />
            <div className="p-6 sm:p-8">
              <Badge className="bg-primary/15 text-primary">Promo highlight</Badge>
              <h3 className="mt-4 font-display text-4xl leading-none text-foreground">Feel the venue before the first ball is bowled.</h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                From the viewing area to the playing surface, the ground is designed to feel professional, social, and tournament-ready.
              </p>
              <Button asChild variant="hero" size="default" className="mt-6">
                <a href={site.instagram} target="_blank" rel="noreferrer">
                  <PlayCircle className="h-4 w-4" />
                  Watch on Instagram
                </a>
              </Button>
            </div>
          </div>
        </Card>

        <Card className="glass-panel rounded-lg border-border/50">
          <CardHeader>
            <Badge className="w-fit bg-primary/15 text-primary">Google reviews snapshot</Badge>
            <CardTitle className="text-4xl text-foreground">Players remember the lighting, space, and smooth coordination.</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {[
              "Premium ground feel for local cricket",
              "Fast response on WhatsApp and calls",
              "Great venue for evening matches and events",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-md border border-border/50 bg-background/20 p-4">
                <Star className="mt-0.5 h-4 w-4 text-primary" />
                <p className="text-sm leading-6 text-foreground/90">{item}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </SectionShell>
  );
}

export function AboutPage() {
  return (
    <PageIntro
      eyebrow="About Royal Cricket Ground"
      title="A professional cricket venue built for match days, community, and repeat play."
      description="Royal Cricket Ground brings together premium turf quality, practical player facilities, and a growing local cricket culture in Moinabad."
      image={images.r10}
      imageAlt="Aerial view of Royal Cricket Ground"
    >
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {aboutCards.map((card) => (
            <Card key={card.title} className="glass-panel rounded-lg border-border/50">
              <CardHeader>
                <CardTitle className="text-3xl text-foreground">{card.title}</CardTitle>
                <CardDescription className="text-sm leading-7">{card.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <SectionShell className="pt-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {groundDetails.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.label} className="glass-panel rounded-lg border-border/50">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md border border-primary/35 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardDescription className="mt-4 text-xs uppercase tracking-[0.24em]">{item.label}</CardDescription>
                  <CardTitle className="text-3xl text-foreground">{item.value}</CardTitle>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Badge className="bg-primary/15 text-primary">Turf & pitch information</Badge>
            <h2 className="mt-4 font-display text-5xl leading-none text-foreground">Prepared for regular bookings, practice sessions, and competitive fixtures.</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Royal Cricket Ground supports box cricket, team practice, and organized games with a maintained playing surface, practical dimensions, and player-first safety rules.
            </p>
          </div>
          <div className="glass-panel rounded-lg p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Premium maintained turf surface",
                "Suitable for practice and organized fixtures",
                "Supports day and evening play",
                "Ground rules and player safety signage in place",
              ].map((item) => (
                <div key={item} className="rounded-md border border-border/50 bg-background/20 p-4 text-sm text-foreground/90">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <FacilitiesGrid title="Facilities overview" description="Everything players and organizers expect from a premium cricket booking venue." />
      <OwnerSection />
      <CoFounderSection />
    </PageIntro>
  );
}

function OwnerSection() {
  return (
    <SectionShell>
      <div className="glass-panel overflow-hidden rounded-lg border-border/50">
        <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative">
            <img
              src={owner.portrait}
              alt={`${owner.name}, founder and owner of Royal Cricket Ground`}
              className="h-full max-h-[640px] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,oklch(0.08_0.01_150_/_0.9))] p-6">
              <Badge className="bg-primary/20 text-primary">Meet the owner</Badge>
              <p className="mt-3 font-display text-5xl leading-none text-foreground">{owner.name}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-muted-foreground">{owner.role}</p>
            </div>
          </div>
          <div className="space-y-6 p-6 sm:p-8">
            <Badge className="w-fit bg-primary/15 text-primary">Founder · Best bowler · Fighter</Badge>
            <h2 className="font-display text-5xl leading-none text-foreground sm:text-6xl">{owner.tagline}</h2>
            <p className="text-base leading-7 text-muted-foreground">{owner.bio}</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {owner.achievements.map((item) => (
                <li key={item} className="flex items-start gap-2 rounded-md border border-border/50 bg-background/25 p-3 text-sm text-foreground/90">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-3 gap-3">
              {owner.gallery.map((shot) => (
                <figure key={shot.url} className="overflow-hidden rounded-md border border-border/50">
                  <img src={shot.url} alt={shot.caption} className="aspect-[3/4] w-full object-cover" loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function CoFounderSection() {
  return (
    <SectionShell>
      <div className="glass-panel overflow-hidden rounded-lg border-border/50">
        <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative">
            <img
              src={coFounder.portrait!}
              alt={`${coFounder.name}, co-founder of Royal Cricket Ground`}
              className="h-full max-h-[640px] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,oklch(0.08_0.01_150_/_0.9))] p-6">
              <Badge className="bg-primary/20 text-primary">Meet the co-founder</Badge>
              <p className="mt-3 font-display text-5xl leading-none text-foreground">{coFounder.name}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-muted-foreground">{coFounder.role}</p>
            </div>
          </div>
          <div className="space-y-6 p-6 sm:p-8">
            <Badge className="w-fit bg-primary/15 text-primary">Co-Founder · Visionary · Cricket Champion</Badge>
            <h2 className="font-display text-5xl leading-none text-foreground sm:text-6xl">{coFounder.tagline}</h2>
            <p className="text-base leading-7 text-muted-foreground">{coFounder.bio}</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {coFounder.achievements.map((item) => (
                <li key={item} className="flex items-start gap-2 rounded-md border border-border/50 bg-background/25 p-3 text-sm text-foreground/90">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export function BookSlotPage() {
  const [date, setDate] = useState<Date>();
  const [selectedSlot, setSelectedSlot] = useState(slotBands[0]?.time ?? "");
  const formattedDate = date
    ? date.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })
    : "your preferred date";

  return (
    <PageIntro
      eyebrow="Book a slot"
      title="Fast booking flow built for mobile-first cricket reservations."
      description="Check slot bands, explore pricing, and send a pre-filled booking request in seconds."
      image={images.sunset}
      imageAlt="Royal Cricket Ground during evening play under sunset light"
    >
      <SectionShell className="pt-10" id="timings-section">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <Card className="glass-panel rounded-lg border-border/50">
            <CardHeader>
              <Badge className="w-fit bg-primary/15 text-primary">Instant booking form</Badge>
              <CardTitle className="text-4xl text-foreground">Reserve your turf slot</CardTitle>
              <CardDescription className="text-base leading-7">
                Frontend-first booking experience with quick WhatsApp handoff for confirmation.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input placeholder="Name" aria-label="Name" className="h-12 rounded-md border-border/60 bg-background/25" />
                <Input placeholder="Phone number" aria-label="Phone number" className="h-12 rounded-md border-border/60 bg-background/25" />
              </div>
              <Input placeholder="Team name" aria-label="Team name" className="h-12 rounded-md border-border/60 bg-background/25" />

              <div className="grid gap-4 sm:grid-cols-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="glass" size="hero" className="justify-between">
                      <span>{date ? formattedDate : "Pick a date"}</span>
                      <CalendarDays className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto border-border/60 bg-background/95 p-0" align="start">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus className="p-3 pointer-events-auto" />
                  </PopoverContent>
                </Popover>

                <div className="grid grid-cols-1 gap-2">
                  {slotBands.map((slot) => (
                    <button
                      key={slot.time}
                      type="button"
                      onClick={() => setSelectedSlot(slot.time)}
                      className={selectedSlot === slot.time
                        ? "rounded-md border border-primary bg-primary/15 px-4 py-3 text-left text-sm text-foreground"
                        : "rounded-md border border-border/60 bg-background/25 px-4 py-3 text-left text-sm text-muted-foreground hover:border-primary/40 hover:text-foreground"}
                    >
                      {slot.label} · {slot.time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Input placeholder="Number of players" aria-label="Number of players" className="h-12 rounded-md border-border/60 bg-background/25" />
                <Input value={selectedSlot} readOnly aria-label="Selected slot timing" className="h-12 rounded-md border-border/60 bg-background/25" />
              </div>

              <Textarea placeholder="Notes" aria-label="Notes" className="min-h-28 rounded-md border-border/60 bg-background/25" />

              <div className="grid gap-3 sm:grid-cols-2">
                <Button asChild variant="hero" size="hero">
                  <a
                    href={buildWhatsAppMessage(
                      `Hi Royal Cricket Ground, I want to book a cricket slot for ${formattedDate} during ${selectedSlot}.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Send booking request
                  </a>
                </Button>
                <Button asChild variant="glass" size="hero">
                  <a href={`tel:${site.phone.replace(/\s+/g, "")}`}>
                    <Phone className="h-4 w-4" />
                    Call to confirm
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            <div className="grid gap-4 md:grid-cols-3">
              {slotBands.map((slot) => (
                <Card key={slot.time} className="glass-panel rounded-lg border-border/50">
                  <CardHeader>
                    <Badge className={slot.status === "Available" ? "w-fit bg-accent/25 text-foreground" : "w-fit bg-primary/15 text-primary"}>{slot.status}</Badge>
                    <CardTitle className="text-3xl text-foreground">{slot.label}</CardTitle>
                    <CardDescription className="text-base text-foreground/85">{slot.time}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-7 text-muted-foreground">{slot.note}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="glass-panel rounded-lg border-border/50">
              <CardHeader>
                <Badge className="w-fit bg-primary/15 text-primary">Quick reference</Badge>
                <CardTitle className="text-4xl text-foreground">Slot timings &amp; rates</CardTitle>
                <CardDescription className="text-base leading-7">
                  All weekday and weekend slot timings with pricing at a glance.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.2em] text-primary">Weekday (Mon–Fri)</p>
                  <div className="grid gap-2">
                    {weekdayPricing.map((slot) => (
                      <div key={slot.label} className={`flex items-center justify-between rounded-md px-4 py-3 text-sm ${slot.highlight ? "border border-primary/40 bg-primary/10" : "border border-border/50 bg-background/20"}`}>
                        <span className={slot.highlight ? "font-semibold text-foreground" : "text-muted-foreground"}>{slot.label} · {slot.time}</span>
                        <span className={slot.highlight ? "font-bold text-primary" : "text-foreground"}>{slot.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.2em] text-primary">Weekend (Sat–Sun)</p>
                  <div className="grid gap-2">
                    {weekendPricing.map((slot) => (
                      <div key={slot.label} className="flex items-center justify-between rounded-md border border-border/50 bg-background/20 px-4 py-3 text-sm">
                        <span className="text-muted-foreground">{slot.label} · {slot.time}</span>
                        <span className="text-foreground">{slot.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionShell>
    </PageIntro>
  );
}

export function PricingPage() {
  return (
    <PageIntro
      eyebrow="Pricing"
      title="Premium pricing built for weekday practice and weekend matchdays."
      description="Transparent slot rates with a flagship Whole Day package on weekdays, and premium prime-time slots on weekends."
      image={images.pitchNew}
      imageAlt="Royal Cricket Ground pitch surface"
    >
      <SectionShell className="pt-10">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Badge className="bg-primary/15 text-primary">Weekday offer price</Badge>
            <h2 className="mt-3 font-display text-5xl leading-none text-foreground sm:text-6xl">
              Monday – Friday slots
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Lock the entire ground with the Whole Day Package — includes live streaming, CricHeroes, leather balls, medals, and Free WiFi.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {weekdayPricing.map((card) => (
            <PricingTile key={`wd-${card.label}`} card={card} kind="weekday" />
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pt-4">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Badge className="bg-primary/15 text-primary">Weekend offer price</Badge>
            <h2 className="mt-3 font-display text-5xl leading-none text-foreground sm:text-6xl">
              Saturday & Sunday slots
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Prime-time weekend slots include medals and Free WiFi for every booking.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {weekendPricing.map((card) => (
            <PricingTile key={`we-${card.label}`} card={card} kind="weekend" />
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild variant="hero" size="hero">
            <Link to="/book-slot">
              Book your slot
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="glass" size="hero">
            <a href={defaultBookingMessage} target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" />
              Ask on WhatsApp
            </a>
          </Button>
        </div>
      </SectionShell>
    </PageIntro>
  );
}

function PricingTile({ card, kind }: { card: PricingCard; kind: "weekday" | "weekend" }) {
  const isHighlight = !!card.highlight;
  return (
    <Card
      className={
        "glass-panel group relative overflow-hidden rounded-lg border-border/50 transition-all duration-300 hover:-translate-y-1.5 " +
        (isHighlight ? "rcg-glow-card gold-border" : "hover:border-primary/45")
      }
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-3 -top-3 h-12 w-12 opacity-70 transition-transform duration-500 group-hover:translate-x-[-6px] group-hover:translate-y-[6px] group-hover:rotate-[40deg]"
      >
        <CricketBallSVG className="h-full w-full" />
      </div>

      {card.badge ? (
        <Badge className="absolute left-4 top-4 z-10 bg-primary text-primary-foreground shadow-[0_8px_24px_oklch(0.82_0.14_88_/_0.45)]">
          {card.badge}
        </Badge>
      ) : null}

      <CardHeader className={card.badge ? "pt-14" : undefined}>
        <CardDescription className="text-xs uppercase tracking-[0.24em]">
          {kind === "weekday" ? "Weekday" : "Weekend"} · {card.label}
        </CardDescription>
        <CardTitle className="text-3xl text-foreground">{card.time}</CardTitle>
        <p className="mt-3 font-display text-6xl leading-none gold-text">{card.price}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {card.includes && card.includes.length > 0 ? (
          <ul className="space-y-2 text-sm text-muted-foreground">
            {card.includes.map((point) => (
              <li key={point} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-primary" />
                <span className="text-foreground/90">{point}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm leading-7 text-muted-foreground">
            Premium turf, professional facilities, and quick WhatsApp confirmation.
          </p>
        )}
        <Button asChild variant={isHighlight ? "hero" : "pitch"} size="default" className="w-full">
          <a
            href={buildWhatsAppMessage(
              `Hi Royal Cricket Ground, I want to book the ${kind} ${card.label} (${card.time}) at ${card.price}.`,
            )}
            target="_blank"
            rel="noreferrer"
          >
            Book this slot
            <ChevronRight className="h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

export function FacilitiesPage() {
  return (
    <PageIntro
      eyebrow="Facilities"
      title="Professional amenities that make every booking easier, cleaner, and more enjoyable."
      description="The venue supports teams, spectators, and tournament organizers with player-ready infrastructure and on-ground convenience."
      image={images.store}
      imageAlt="Royal store and reception area at Royal Cricket Ground"
    >
      <FacilitiesGrid title="Facility highlights" description="Modern cards for the core features players care about before booking." />
    </PageIntro>
  );
}

export function GalleryPage() {
  const [filter, setFilter] = useState<GalleryCategory>("All");
  const items = useMemo(
    () => galleryItems.filter((item) => filter === "All" || item.category === filter),
    [filter],
  );

  return (
    <PageIntro
      eyebrow="Gallery"
      title="A visually rich look at the ground, match moments, and the Royal Cricket Ground atmosphere."
      description="Browse real photos from the turf, pavilion, event moments, and playing conditions across the day."
      image={images.wide}
      imageAlt="Wide daytime photo of Royal Cricket Ground"
    >
      <SectionShell className="pt-10">
        <div className="flex flex-wrap gap-3">
          {galleryFilters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={filter === item
                ? "rounded-md border border-primary bg-primary/15 px-4 py-2 text-sm text-foreground"
                : "rounded-md border border-border/60 bg-background/20 px-4 py-2 text-sm text-muted-foreground hover:border-primary/40 hover:text-foreground"}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-8 columns-1 gap-4 space-y-4 md:columns-2 xl:columns-3">
          {items.map((item) => (
            <Dialog key={item.title}>
              <DialogTrigger asChild>
                <button className="group relative block w-full break-inside-avoid overflow-hidden rounded-lg border border-border/50 bg-background/20 text-left">
                  <img src={item.image} alt={item.title} className="w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,oklch(0.08_0.01_150_/_0.9))] p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-primary">{item.category}</p>
                    <p className="mt-2 text-lg text-foreground">{item.title}</p>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl glass-panel border-border/60 bg-background/90 p-3 sm:p-5">
                <DialogHeader>
                  <DialogTitle className="font-display text-4xl text-foreground">{item.title}</DialogTitle>
                  <DialogDescription>{item.category} · Gallery preview</DialogDescription>
                </DialogHeader>
                <img src={item.image} alt={item.title} className="max-h-[78vh] w-full rounded-lg object-contain" />
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <Card className="mt-8 glass-panel rounded-lg border-border/50">
          <CardHeader>
            <Badge className="w-fit bg-primary/15 text-primary">Video highlight</Badge>
            <CardTitle className="text-4xl text-foreground">Short promo-ready media section</CardTitle>
            <CardDescription className="text-base leading-7">
              This frontend version highlights real venue media and can later be extended with uploaded match reels or tournament recap videos.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 rounded-lg border border-border/50 bg-background/20 p-6">
              <PlayCircle className="h-12 w-12 text-primary" />
              <div>
                <p className="text-lg text-foreground">Promo reel placeholder</p>
                <p className="text-sm text-muted-foreground">Connect an Instagram reel, YouTube short, or uploaded highlight video later.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </SectionShell>
    </PageIntro>
  );
}

export function TournamentsPage() {
  return (
    <PageIntro
      eyebrow="Tournaments"
      title="Competitive cricket events, leagues, and knockout tournaments at RCG."
      description="Use Royal Cricket Ground as a premium venue for leagues, knockout events, and local team competitions."
      image={images.tournament1}
      imageAlt="Tournament match action at Royal Cricket Ground"
    >
      <SectionShell className="pt-10">
        <div className="glass-panel flex flex-col items-center gap-8 rounded-lg border border-border/50 px-6 py-16 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-border/50 bg-secondary/40">
            <Trophy className="h-9 w-9 text-primary/70" />
          </div>
          <div className="max-w-xl">
            <Badge className="mb-4 bg-secondary/60 text-muted-foreground">No Ongoing Tournaments</Badge>
            <h2 className="font-display text-5xl leading-none text-foreground sm:text-6xl">
              No active tournaments right now.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground">
              There are no ongoing tournaments at the moment. New events are announced regularly — contact us on WhatsApp or call to stay updated on upcoming competitions and register your team early.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="hero">
              <a href={buildWhatsAppMessage("Hi Royal Cricket Ground, I want to know about upcoming tournaments and register my team.")} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" />
                Ask about tournaments on WhatsApp
              </a>
            </Button>
            <Button asChild variant="glass" size="hero">
              <a href={`tel:${site.phone.replace(/\s+/g, "")}`}>
                <Phone className="h-4 w-4" />
                Call us
              </a>
            </Button>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="glass-panel rounded-lg border border-border/50 p-6 sm:p-8">
          <Badge className="mb-4 bg-primary/15 text-primary">Host a tournament</Badge>
          <h2 className="font-display text-5xl leading-none text-foreground sm:text-6xl">Want to organise an event at RCG?</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
            Royal Cricket Ground is fully equipped for leagues, knockout tournaments, and corporate cricket events. Contact us to discuss dates, ground availability, prize ceremonies, and live streaming support.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="hero">
              <a href={buildWhatsAppMessage("Hi Royal Cricket Ground, I want to organise a cricket tournament at your venue.")} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" />
                Enquire on WhatsApp
              </a>
            </Button>
            <Button asChild variant="glass" size="hero">
              <Link to="/contact">
                View all contact options
              </Link>
            </Button>
          </div>
        </div>
      </SectionShell>
    </PageIntro>
  );
}

export function ContactPage() {
  return (
    <PageIntro
      eyebrow="Contact"
      title="Call, WhatsApp, navigate, or message the ground in one place."
      description="Every essential contact action is designed to work fast on mobile so players can reach Royal Cricket Ground without friction."
      image={images.store}
      imageAlt="Front desk and store area at Royal Cricket Ground"
    >
      <SectionShell className="pt-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            {[
              { label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s+/g, "")}`, icon: Phone },
              { label: "WhatsApp", value: site.whatsappDisplay, href: defaultBookingMessage, icon: MessageCircle },
              { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail },
              { label: "Address", value: site.address, href: site.mapLink, icon: MapPinned },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="glass-panel flex items-start gap-4 rounded-lg p-5 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-primary/35 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">{item.label}</p>
                    <p className="mt-2 text-base leading-7 text-foreground">{item.value}</p>
                  </div>
                </a>
              );
            })}
          </div>

          <Card className="glass-panel overflow-hidden rounded-lg border-border/50">
            <CardHeader>
              <Badge className="w-fit bg-primary/15 text-primary">Google Maps integration</Badge>
              <CardTitle className="text-4xl text-foreground">Find Royal Cricket Ground</CardTitle>
              <CardDescription className="text-base leading-7">Use the embedded map or open directions directly in Google Maps.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="overflow-hidden rounded-lg border border-border/50">
                <iframe
                  title="Royal Cricket Ground map"
                  src={site.mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[320px] w-full"
                />
              </div>
              <Button asChild variant="glass" size="hero">
                <a href={site.mapLink} target="_blank" rel="noreferrer">
                  <MapPinned className="h-4 w-4" />
                  Open in Google Maps
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Card className="glass-panel rounded-lg border-border/50">
            <CardHeader>
              <Badge className="w-fit bg-primary/15 text-primary">Contact form</Badge>
              <CardTitle className="text-4xl text-foreground">Send a quick message</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input placeholder="Name" className="h-12 rounded-md border-border/60 bg-background/25" />
                <Input placeholder="Phone number" className="h-12 rounded-md border-border/60 bg-background/25" />
              </div>
              <Textarea placeholder="Message" className="min-h-32 rounded-md border-border/60 bg-background/25" />
              <Button asChild variant="hero" size="hero">
                <a href={buildWhatsAppMessage("Hi Royal Cricket Ground, I want more information about bookings and facilities.")} target="_blank" rel="noreferrer">
                  Send inquiry
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-panel rounded-lg border-border/50">
            <CardHeader>
              <Badge className="w-fit bg-primary/15 text-primary">Social media</Badge>
              <CardTitle className="text-4xl text-foreground">Follow match moments and updates</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              {socialLinks.map((item) => {
                const Icon = socialIcons[item.label as keyof typeof socialIcons] ?? Search;
                return (
                  <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-md border border-border/50 bg-background/20 px-4 py-4 text-sm text-foreground transition-colors hover:border-primary/45">
                    <span className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-primary" />
                      {item.label}
                    </span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </a>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </SectionShell>
    </PageIntro>
  );
}

function FacilitiesGrid({ title, description }: { title: string; description: string }) {
  return (
    <SectionShell>
      <div className="mb-8 max-w-3xl">
        <Badge className="bg-primary/15 text-primary">{title}</Badge>
        <h2 className="mt-4 font-display text-5xl leading-none text-foreground sm:text-6xl">{description}</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {facilitiesOverview.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title} className="glass-panel rounded-lg border-border/50 transition-transform duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-primary/35 bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle className="pt-4 text-3xl text-foreground">{item.title}</CardTitle>
                <CardDescription className="text-sm leading-7">{item.description}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </SectionShell>
  );
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SectionShell>
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Badge className="bg-primary/15 text-primary">FAQ</Badge>
          <h2 className="mt-4 font-display text-5xl leading-none text-foreground sm:text-6xl">Answers to the questions players ask before they book.</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            The essentials for booking, match timing, facilities, and tournament participation are all covered here.
          </p>
        </div>
        <div className="grid gap-3">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <button
                key={item.question}
                type="button"
                onClick={() => setOpen(isOpen ? null : index)}
                className="glass-panel rounded-lg border border-border/50 p-5 text-left"
              >
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <div className="min-w-0">
                    <p className="text-lg text-foreground">{item.question}</p>
                    {isOpen ? <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.answer}</p> : null}
                  </div>
                  <ChevronDown className={isOpen ? "mt-1 h-5 w-5 shrink-0 rotate-180 text-primary" : "mt-1 h-5 w-5 shrink-0 text-muted-foreground"} />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}

function CraftedBySection() {
  const skills = ["Web Development", "AI Solutions", "UI/UX Design", "Automation", "Digital Branding"];
  return (
    <section className="relative z-10 border-t border-border/50 bg-background/40 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <Badge className="mb-4 bg-primary/10 text-primary/80">✨ Crafted with Passion</Badge>
          <p className="font-display text-4xl text-foreground sm:text-5xl">Website Crafted By</p>
        </div>

        <div className="glass-panel overflow-hidden rounded-2xl border border-border/50">
          <div className="grid gap-0 lg:grid-cols-[1fr_1.4fr]">

            <div className="flex flex-col items-center justify-center gap-6 border-b border-border/40 p-8 lg:border-b-0 lg:border-r">
              <div className="wishcraft-logo-wrap relative flex flex-col items-center gap-4">
                <div className="wishcraft-logo-glow absolute inset-0 rounded-full blur-2xl" />
                <img
                  src={wishcraftLogoUrl}
                  alt="WishCraft Studios logo"
                  className="wishcraft-logo relative h-32 w-32 rounded-2xl object-cover shadow-2xl"
                />
              </div>
              <div className="text-center">
                <p className="font-display text-3xl text-foreground">WishCraft Studios</p>
                <p className="mt-1 text-sm italic text-primary/80">Turning Your Moments into Magic</p>
              </div>
            </div>

            <div className="relative overflow-hidden p-8">
              <div className="dev-card-shine absolute inset-0 pointer-events-none" />

              <div className="mb-6 flex items-center gap-5">
                <img
                  src={devPhotoUrl}
                  alt="Vadlamudi Sai Chanakya, Founder & Developer at WishCraft Studios"
                  className="h-20 w-20 rounded-full border-2 border-primary/40 object-cover shadow-lg"
                />
                <div>
                  <p className="font-display text-3xl leading-none text-foreground">Vadlamudi Sai Chanakya</p>
                  <p className="mt-1 text-sm text-primary/80">Founder &amp; Developer, WishCraft Studios</p>
                  <p className="mt-1 text-xs text-muted-foreground">+91 74164 13238</p>
                </div>
              </div>

              <p className="mb-5 text-sm leading-7 text-muted-foreground">
                Passionate about creating modern, high-performance websites, digital experiences, AI-powered solutions, and creative brand experiences.
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary/90">
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="hero">
                  <a href="https://wa.me/917416413238" target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    Contact Developer
                  </a>
                </Button>
                <Button asChild variant="glass" size="hero">
                  <a href="https://www.linkedin.com/in/sai-chanakya-vadlamudi-94ab04363" target="_blank" rel="noreferrer">
                    View Portfolio
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-border/50 bg-background/55 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={images.logo} alt="Royal Cricket Ground logo" className="h-12 w-12 rounded-full border border-primary/30" />
            <div>
              <p className="font-display text-3xl leading-none text-foreground">Royal Cricket Ground (RCG)</p>
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Professional turf booking platform</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
            Built for players who want premium turf conditions, exciting evening sessions, and fast booking access in Moinabad.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-primary">Quick links</p>
          <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
            {quickLinks.map((item) => (
              <Link key={item.to} to={item.to} className="story-link w-fit hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-primary">Contact details</p>
          <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
            <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="hover:text-foreground">{site.phone}</a>
            <a href={defaultBookingMessage} target="_blank" rel="noreferrer" className="hover:text-foreground">{site.whatsappDisplay}</a>
            <a href={`mailto:${site.email}`} className="hover:text-foreground">{site.email}</a>
            <a href={site.mapLink} target="_blank" rel="noreferrer" className="hover:text-foreground">{site.address}</a>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-primary">Opening timings</p>
          <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
            {site.openingHours.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = socialIcons[item.label as keyof typeof socialIcons] ?? Search;
              return (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label} className="flex h-10 w-10 items-center justify-center rounded-md border border-border/60 bg-background/20 text-muted-foreground transition-colors hover:border-primary/45 hover:text-foreground">
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="border-t border-border/40 px-4 py-4 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
        © 2026 Royal Cricket Ground. All rights reserved. &nbsp;·&nbsp;
        Designed &amp; Developed by{" "}
        <a href="https://www.linkedin.com/in/sai-chanakya-vadlamudi-94ab04363" target="_blank" rel="noreferrer" className="text-primary/80 hover:text-primary transition-colors">
          Vadlamudi Sai Chanakya
        </a>{" "}
        | WishCraft Studios
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={defaultBookingMessage}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_34px_oklch(0.82_0.14_88_/_0.35)] transition-transform duration-300 hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

function SectionShell({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </section>
  );
}

function PageIntro({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  children: ReactNode;
}) {
  return (
    <>
      <SectionShell className="pb-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Badge className="bg-primary/15 text-primary">{eyebrow}</Badge>
            <h1 className="mt-4 text-balance font-display text-6xl leading-[0.9] text-foreground sm:text-7xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
          </div>
          <div className="glass-panel overflow-hidden rounded-lg border-border/50">
            <img src={image} alt={imageAlt} className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </SectionShell>
      {children}
    </>
  );
}

export function HomeTabsPreview() {
  return (
    <Tabs defaultValue="booking" className="w-full">
      <TabsList className="glass-panel h-auto w-full justify-start gap-2 rounded-lg p-2">
        <TabsTrigger value="booking">Quick booking</TabsTrigger>
        <TabsTrigger value="timings">Timings</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="booking" className="mt-4" />
      <TabsContent value="timings" className="mt-4" />
      <TabsContent value="reviews" className="mt-4" />
    </Tabs>
  );
}
