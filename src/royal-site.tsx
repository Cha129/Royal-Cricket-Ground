import { useMemo, useState, useEffect, type ReactNode } from "react";
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
  X,
  Youtube,
  Globe,
  Palette,
  Code2,
  ShieldCheck,
  Briefcase,
  Laptop,
  Sparkles,
  Cpu,
  Layers,
  Award,
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
  slotTimings,
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

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-x-0 top-0 z-40 border-b border-border/50 surface-hero">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
            {/* Logo and Mobile Buttons Row */}
            <div className="flex items-center justify-between gap-4">
              <Link to="/" className="flex min-w-0 items-center gap-3">
                <img src={images.logo} alt="Royal Cricket Ground logo" className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-full border border-primary/30 object-cover" />
                <div className="min-w-0">
                  <p className="truncate font-display text-lg sm:text-2xl leading-none text-foreground">Royal Cricket Ground (RCG)</p>
                  <p className="truncate text-[10px] sm:text-xs uppercase tracking-[0.22em] text-muted-foreground mt-1">
                    Premium turf booking · Moinabad
                  </p>
                </div>
              </Link>
              
              {/* Right Side Buttons for Mobile (below lg) */}
              <div className="flex items-center gap-2 lg:hidden">
                <Button asChild variant="outline" className="border-border bg-black/45 text-foreground hover:bg-secondary/80 font-semibold h-9 px-3 text-xs sm:h-10 sm:px-4 sm:text-sm">
                  <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="flex items-center gap-1 sm:gap-2">
                    <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                    Call
                  </a>
                </Button>
                <Button asChild variant="default" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/95 shadow h-9 px-3 text-xs sm:h-10 sm:px-4 sm:text-sm">
                  <Link to="/book-slot">Book now</Link>
                </Button>
              </div>
            </div>

            {/* Navigation and Desktop Buttons */}
            <div className="flex items-center justify-between gap-4 lg:gap-6 overflow-x-auto scrollbar-none pb-1 -mb-1 lg:overflow-visible lg:pb-0 lg:mb-0">
              <nav className="flex items-center gap-5 sm:gap-6 text-[14px] sm:text-[15px] font-medium whitespace-nowrap">
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

              {/* Desktop-only Buttons */}
              <div className="hidden lg:flex items-center gap-3 shrink-0">
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
        </div>
      </div>

      <main className="relative z-10 pt-28 lg:pt-24">{children}</main>
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
      image={images.pavilion}
      imageAlt="Royal Cricket Ground pavilion and player preparation area"
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
  const [isWeekend, setIsWeekend] = useState(() => {
    const today = new Date();
    return today.getDay() === 0 || today.getDay() === 6;
  });
  const [selectedSlot, setSelectedSlot] = useState("6:45 AM – 10:15 AM");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [teamName, setTeamName] = useState("");
  const [players, setPlayers] = useState("");
  const [notes, setNotes] = useState("");

  const formattedDate = date
    ? date.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })
    : "your preferred date";

  const bookingMessage = useMemo(() => {
    let msg = `Hi Royal Cricket Ground, I would like to book a cricket slot.\n\n`;
    if (name) msg += `👤 *Name:* ${name}\n`;
    if (phone) msg += `📞 *Phone:* ${phone}\n`;
    if (teamName) msg += `🏏 *Team:* ${teamName}\n`;
    msg += `📅 *Date:* ${formattedDate}\n`;
    msg += `⏰ *Slot:* ${selectedSlot}\n`;
    if (players) msg += `👥 *Players:* ${players}\n`;
    if (notes) msg += `📝 *Notes:* ${notes}\n`;
    return msg;
  }, [name, phone, teamName, formattedDate, selectedSlot, players, notes]);

  useEffect(() => {
    if (date) {
      const day = date.getDay();
      setIsWeekend(day === 0 || day === 6);
    }
  }, [date]);

  const currentSlots = isWeekend ? slotTimings.weekend : slotTimings.weekday;

  useEffect(() => {
    const times = currentSlots.map((s) => s.time);
    if (!times.includes(selectedSlot)) {
      setSelectedSlot(times[0] || "");
    }
  }, [isWeekend]);

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
                <Input 
                  placeholder="Name" 
                  aria-label="Name" 
                  className="h-12 rounded-md border-border/60 bg-background/25" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input 
                  placeholder="Phone number" 
                  aria-label="Phone number" 
                  className="h-12 rounded-md border-border/60 bg-background/25" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <Input 
                placeholder="Team name" 
                aria-label="Team name" 
                className="h-12 rounded-md border-border/60 bg-background/25" 
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
              />

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
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                      {isWeekend ? "Weekend Slots Active" : "Weekday Slots Active"}
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsWeekend(!isWeekend)}
                      className="text-xs text-muted-foreground hover:text-foreground underline decoration-primary underline-offset-4"
                    >
                      Switch to {isWeekend ? "Weekday" : "Weekend"}
                    </button>
                  </div>
                  {currentSlots.map((slot) => (
                    <button
                      key={slot.time}
                      type="button"
                      onClick={() => setSelectedSlot(slot.time)}
                      className={selectedSlot === slot.time
                        ? "rounded-md border border-primary bg-primary/15 px-4 py-3 text-left text-sm text-foreground flex justify-between items-center"
                        : "rounded-md border border-border/60 bg-background/25 px-4 py-3 text-left text-sm text-muted-foreground hover:border-primary/40 hover:text-foreground flex justify-between items-center"}
                    >
                      <span>{slot.label} · {slot.time}</span>
                      <span className="gold-text font-semibold">{slot.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Input 
                  placeholder="Number of players" 
                  aria-label="Number of players" 
                  className="h-12 rounded-md border-border/60 bg-background/25" 
                  value={players}
                  onChange={(e) => setPlayers(e.target.value)}
                />
                <Input value={selectedSlot} readOnly aria-label="Selected slot timing" className="h-12 rounded-md border-border/60 bg-background/25" />
              </div>

              <Textarea 
                placeholder="Notes" 
                aria-label="Notes" 
                className="min-h-28 rounded-md border-border/60 bg-background/25" 
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />

              <div className="grid gap-3 sm:grid-cols-2">
                <BookingContactDialog
                  bookingMessage={bookingMessage}
                  trigger={
                    <Button type="button" variant="hero" size="hero">
                      <MessageCircle className="h-4 w-4" />
                      Book The Slot
                    </Button>
                  }
                />
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
            <div className="grid gap-6 md:grid-cols-2">
              {/* Weekday Offers */}
              <Card className="glass-panel rounded-lg border-border/50 relative overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="absolute right-0 top-0 bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl">
                    Weekday Offers
                  </div>
                  <CardHeader>
                    <CardTitle className="text-3xl text-foreground">Monday – Friday Slots</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      Perfect for practice, club nets, and all-day team fixtures.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Flagship Package */}
                    <div className="rounded-lg border border-primary/35 bg-primary/5 p-4 relative overflow-hidden">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <Badge className="bg-primary text-primary-foreground mb-1 text-[10px]">Flagship Offer</Badge>
                          <h4 className="font-display text-xl text-foreground">Whole Day Package</h4>
                          <p className="text-[11px] text-muted-foreground mt-0.5">9:00 AM – 6:00 PM (9 Hours)</p>
                        </div>
                        <p className="font-display text-2xl gold-text shrink-0">₹6,000</p>
                      </div>
                      <ul className="mt-3 grid grid-cols-1 gap-1.5 text-[11px] text-muted-foreground">
                        <li className="flex items-center gap-1.5">
                          <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span>Live Streaming on YouTube & CricHeroes</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span>2 Premium Leather Balls</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span>Medals Included + Free WiFi</span>
                        </li>
                      </ul>
                    </div>

                    {/* Standard Weekday Slots */}
                    <div className="space-y-2">
                      {slotTimings.weekday.filter(s => s.label !== "Whole Day").map((slot) => (
                        <div key={slot.label} className="flex justify-between items-center p-2.5 rounded-md border border-border/40 bg-background/10 text-xs">
                          <div>
                            <p className="font-medium text-foreground">{slot.label}</p>
                            <p className="text-muted-foreground">{slot.time}</p>
                          </div>
                          <p className="font-semibold gold-text">{slot.price}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>

              {/* Weekend Offers */}
              <Card className="glass-panel rounded-lg border-border/50 relative overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="absolute right-0 top-0 bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl">
                    Weekend Offers
                  </div>
                  <CardHeader>
                    <CardTitle className="text-3xl text-foreground">Saturday & Sunday Slots</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      Premium match-day slots with full player rewards.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg border border-border bg-background/25 p-4 text-xs">
                      <p className="font-semibold uppercase tracking-wider text-primary mb-1 text-[11px]">All Weekend Bookings Include</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li className="flex items-center gap-1.5">
                          <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span>Medals for players</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span>Free High-Speed WiFi on-site</span>
                        </li>
                      </ul>
                    </div>

                    {/* Standard Weekend Slots */}
                    <div className="space-y-2">
                      {slotTimings.weekend.map((slot) => (
                        <div key={slot.label} className="flex justify-between items-center p-2.5 rounded-md border border-border/45 bg-background/10 text-xs">
                          <div>
                            <p className="font-medium text-foreground">{slot.label}</p>
                            <p className="text-muted-foreground">{slot.time}</p>
                          </div>
                          <p className="font-semibold gold-text">{slot.price}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>

            <Card className="glass-panel rounded-lg border-border/50">
              <CardHeader>
                <Badge className="w-fit bg-primary/15 text-primary">Booking dashboard preview</Badge>
                <CardTitle className="text-4xl text-foreground">Admin booking dashboard</CardTitle>
                <CardDescription className="text-base leading-7">
                  Frontend-first preview of how bookings, slot load, and confirmations can be managed in a future backend-enabled version.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    { label: "Today's requests", value: "18" },
                    { label: "Confirmed slots", value: "09" },
                    { label: "Pending replies", value: "04" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-md border border-border/50 bg-background/20 p-4">
                      <p className="font-display text-4xl text-primary">{item.value}</p>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                    </div>
                  ))}
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
      image={images.sunset}
      imageAlt="Royal Cricket Ground during an evening match"
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

function PricingTile({ card, kind }: { card: PricingCard; kind: "weekday" | "weekend"; key?: string }) {
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
                : "rounded-md border border-border/60 bg-background/20 px-4 py-2 text-sm text-muted-foreground hover:border-primary/45 hover:text-foreground"}
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
      title="Host your custom leagues, corporate cups, and knockout championships."
      description="Royal Cricket Ground provides professional-grade facilities, digital scoring, and night-match setups for competitive tournaments."
      image={images.inauguration}
      imageAlt="Tournament inaugural moment at Royal Cricket Ground"
    >
      <SectionShell className="pt-10">
        <div className="mx-auto max-w-4xl">
          <Card className="glass-panel rounded-lg border-border/50 overflow-hidden relative p-8 md:p-12 text-center">
            {/* Decorative background ball icon design */}
            <div className="absolute -right-16 -bottom-16 opacity-[0.03] pointer-events-none w-64 h-64">
              <CricketBallSVG className="w-full h-full text-primary" />
            </div>

            <Badge className="mx-auto bg-primary/20 text-primary mb-4 text-xs tracking-wider uppercase px-3 py-1">
              Tournament Enquiries
            </Badge>
            
            <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-4">
              Contact for More Details
            </h2>
            
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto mb-10">
              Planning a corporate cricket cup, local community league, or weekend knockout tournament? We provide complete ground support including CricHeroes integration, YouTube live-streaming, premium leather balls, medals, trophies, and high-speed Wi-Fi.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 text-left mb-10">
              {/* Founder contact card */}
              <div className="rounded-lg border border-border/60 bg-background/25 p-6 flex flex-col justify-between h-full">
                <div>
                  <Badge className="bg-primary/15 text-primary text-[10px] mb-2 uppercase tracking-wider font-semibold">Founder & Owner</Badge>
                  <h4 className="text-xl font-bold text-foreground">{owner.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">Star bowler & on-field fighter</p>
                </div>
                <div className="mt-6 flex flex-col gap-2">
                  <Button asChild variant="hero" className="w-full text-xs">
                    <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      Call {site.phone}
                    </a>
                  </Button>
                  <Button asChild variant="glass" className="w-full text-xs">
                    <a
                      href={buildWhatsAppMessage(`Hi Shaik Lal Ahmad, I would like to inquire about hosting a tournament at RCG.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              {/* Co-founder contact card */}
              <div className="rounded-lg border border-border/60 bg-background/25 p-6 flex flex-col justify-between h-full">
                <div>
                  <Badge className="bg-primary/15 text-primary text-[10px] mb-2 uppercase tracking-wider font-semibold">Co-Founder</Badge>
                  <h4 className="text-xl font-bold text-foreground">{coFounder.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">Passionate cricketer & organizer</p>
                </div>
                <div className="mt-6 flex flex-col gap-2">
                  <Button asChild variant="hero" className="w-full text-xs">
                    <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      Call Management
                    </a>
                  </Button>
                  <Button asChild variant="glass" className="w-full text-xs">
                    <a
                      href={buildWhatsAppMessage(`Hi Mohammad Nazeer, I would like to inquire about hosting a tournament at RCG.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="border-t border-border/40 pt-6 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-center gap-4">
              <span>📍 {site.address}</span>
              <span className="hidden sm:inline">•</span>
              <span>✉️ {site.email}</span>
            </div>
          </Card>
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

export function WebsiteCraftedPage() {
  const pillars = [
    {
      icon: Palette,
      title: "UI/UX Artistry",
      description: "Crafting beautiful interfaces with tailored layouts, premium typography, and pixel-perfect responsiveness that engage users from the very first interaction.",
    },
    {
      icon: Code2,
      title: "Full-Stack Mastery",
      description: "Building production-ready, highly secure web applications using modern React, TypeScript, and Node.js environments with stable architectures.",
    },
    {
      icon: Cpu,
      title: "Interactive Innovation",
      description: "Integrating powerful client-side features, intelligent state mechanics, dynamic schedulers, and rich visual interactive layouts.",
    },
  ];

  const techArsenal = [
    { category: "Frontend", items: ["React 18+", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Radix UI"] },
    { category: "Backend & Databases", items: ["Node.js", "Express", "Firebase Firestore", "PostgreSQL", "REST APIs"] },
    { category: "Workflows & Tools", items: ["Git & GitHub", "Docker", "Vercel / Cloud Run", "ESLint / Prettier"] },
  ];

  return (
    <PageIntro
      eyebrow="Website Crafted By"
      title="WishCraft Studios & Vadlamudi Sai Chanakya"
      description="The creative force, UI/UX craftsmanship, and software engineering behind the digital presence of Royal Cricket Ground."
      image={wishcraftLogoUrl}
      imageAlt="WishCraft Studios Logo"
    >
      {/* WishCraft Studios Section */}
      <SectionShell className="pt-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 uppercase tracking-wider text-xs mb-3 px-3 py-1">
            ✨ Creative Tech Studio
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground">
            WishCraft Studios
          </h2>
          <p className="mt-4 text-sm sm:text-base text-primary font-medium italic">
            "Turning Your Moments into Magic"
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
            WishCraft Studios is an elite digital craftsmanship studio. We build modern, high-performance websites, creative branding assets, and immersive full-stack user experiences that help local businesses and sports facilities represent their true value online.
          </p>
        </div>

        {/* Studio Pillars Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="glass-panel border-border/50 rounded-lg p-6 flex flex-col gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-primary/35 bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </SectionShell>

      {/* Meet Vadlamudi Sai Chanakya Section */}
      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
          {/* Left Column: Photo & Contact card */}
          <Card className="glass-panel border-border/50 rounded-lg overflow-hidden relative p-6 sm:p-8">
            <div className="absolute -right-8 -bottom-8 opacity-[0.03] pointer-events-none w-48 h-48">
              <CricketBallSVG className="w-full h-full text-primary" />
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left mb-6">
              <img
                src={devPhotoUrl}
                alt="Vadlamudi Sai Chanakya"
                className="h-24 w-24 sm:h-28 sm:w-28 rounded-full border-2 border-primary/45 object-cover shadow-2xl"
              />
              <div>
                <Badge className="bg-primary/25 text-primary border-none text-[10px] uppercase font-bold tracking-wider px-2 py-0.5">
                  Founder &amp; Developer
                </Badge>
                <h3 className="font-display text-2xl text-foreground mt-2 leading-tight">
                  Vadlamudi Sai Chanakya
                </h3>
                <p className="text-sm text-primary font-medium mt-1">
                  Lead Software Architect
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  📞 +91 74164 13238
                </p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-5">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary shrink-0" />
                <span>Specialist in React & modern web ecosystems</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary shrink-0" />
                <span>Responsive, mobile-first design thinking</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary shrink-0" />
                <span>Delivering optimized, super-fast load times</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild variant="hero" className="w-full h-10 text-xs">
                <a href="https://wa.me/917416413238" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5">
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button asChild variant="glass" className="w-full h-10 text-xs border-border/50">
                <a href="https://www.linkedin.com/in/sai-chanakya-vadlamudi-94ab04363" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5">
                  <Globe className="h-4 w-4" />
                  LinkedIn Portfolio
                </a>
              </Button>
            </div>
          </Card>

          {/* Right Column: Narrative, Quote, Tech Arsenal */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/20 uppercase tracking-widest text-[10px] px-2.5 py-0.5">
                The Architect
              </Badge>
              <h3 className="font-display text-3xl text-foreground">
                Crafting With Care &amp; Precision
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                Vadlamudi Sai Chanakya is a passionate software engineer and digital craftsman with a deep obsession for pixel perfection and smooth client experiences. His goal is to bring modern enterprise-level web architectures down to intuitive, lightning-fast web applications for clubs, sports, and local ventures.
              </p>
              <div className="border-l-2 border-primary pl-4 py-1 italic text-muted-foreground text-sm sm:text-base bg-primary/5 rounded-r">
                "We don't just build grids and buttons. We build interactive stages that celebrate the effort and grit of real-world operators — whether they're bowling wickets on turf or serving customers."
              </div>
            </div>

            {/* Tech Arsenal Grid */}
            <div className="space-y-4 border-t border-border/40 pt-6">
              <h4 className="font-display text-xl text-foreground flex items-center gap-2">
                <Cpu className="h-5 w-5 text-primary" />
                Technical Arsenal
              </h4>
              <div className="grid gap-4 sm:grid-cols-3">
                {techArsenal.map((group) => (
                  <div key={group.category} className="rounded-lg border border-border/45 bg-background/25 p-4 text-xs">
                    <h5 className="font-bold text-foreground mb-2.5 uppercase tracking-wider text-[10px] text-primary">
                      {group.category}
                    </h5>
                    <ul className="space-y-1.5 text-muted-foreground font-mono text-[11px]">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-center gap-1">
                          <span className="text-primary">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* RCG Collaboration Section */}
      <SectionShell className="pb-16">
        <Card className="glass-panel border-border/50 rounded-lg p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute right-0 top-0 bg-primary/15 text-primary text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl">
            RCG Project Focus
          </div>
          <div className="max-w-3xl">
            <h3 className="font-display text-2xl sm:text-3xl text-foreground mb-4">
              Building Royal Cricket Ground
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              The digital experience for Royal Cricket Ground (RCG) was meticulously designed to be mobile-first, load in under 1.5 seconds, and eliminate any friction between a player wanting to book and sending a WhatsApp confirmation. Every piece of code is tailor-made:
            </p>
            <div className="grid gap-4 sm:grid-cols-2 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-foreground">Athletic Visual Vibe</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">Deep greens, gold text accents, and clean border lights mimicking evening matches under stadium floodlights.</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-foreground">Double-Number Dispatcher</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">Custom-designed multi-number booking dialog that ensures booking requests reach both organizers simultaneously.</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
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
        © 2026 Royal Cricket Ground. All rights reserved.
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
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

export function SectionShell({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </section>
  );
}

export function PageIntro({
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

interface BookingContactDialogProps {
  trigger: ReactNode;
  bookingMessage: string;
}

export function BookingContactDialog({ trigger, bookingMessage }: BookingContactDialogProps) {
  const [open, setOpen] = useState(false);

  const handleSendToBoth = () => {
    // Open founder
    window.open(`https://wa.me/919000400411?text=${encodeURIComponent(bookingMessage)}`, '_blank');
    // Open co-founder
    setTimeout(() => {
      window.open(`https://wa.me/919550810878?text=${encodeURIComponent(bookingMessage)}`, '_blank');
    }, 800);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-md glass-panel border-border/60 bg-background/95 p-6 rounded-lg shadow-2xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-foreground text-center">Send Booking Request</DialogTitle>
          <DialogDescription className="text-center text-sm text-muted-foreground mt-2">
            To guarantee your booking, please send this pre-filled message to both of our coordinators on WhatsApp:
          </DialogDescription>
        </DialogHeader>

        {/* Message Preview */}
        <div className="mt-4 rounded-md border border-border/50 bg-background/40 p-3.5 text-xs text-muted-foreground font-mono whitespace-pre-line leading-relaxed max-h-40 overflow-y-auto">
          {bookingMessage}
        </div>

        <div className="mt-6 grid gap-4">
          {/* Main action: Send to Both */}
          <Button 
            onClick={handleSendToBoth}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold flex items-center justify-center gap-2 h-11"
          >
            <MessageCircle className="h-5 w-5" />
            Send to Both Numbers (Recommended)
          </Button>

          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-border/45"></div>
            <span className="flex-shrink mx-4 text-xs text-muted-foreground uppercase tracking-wider">Or Message Individually</span>
            <div className="flex-grow border-t border-border/45"></div>
          </div>

          {/* Coordinator 1: Shaik Lal Ahmad */}
          <div className="flex flex-col gap-2 rounded-lg border border-primary/20 bg-primary/5 p-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Founder & Owner</span>
                <h4 className="font-semibold text-foreground text-sm mt-0.5">Shaik Lal Ahmad</h4>
                <p className="text-xs text-muted-foreground">+91 90004 00411</p>
              </div>
              <Badge className="bg-primary/20 text-primary border-none text-[9px] uppercase px-1.5 py-0.5">Primary Contact</Badge>
            </div>
            <Button asChild variant="hero" size="default" className="w-full mt-2 h-9 text-xs">
              <a
                href={`https://wa.me/919000400411?text=${encodeURIComponent(bookingMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                Message Founder
              </a>
            </Button>
          </div>

          {/* Coordinator 2: Mohammad Nazeer */}
          <div className="flex flex-col gap-2 rounded-lg border border-border/50 bg-background/25 p-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Co-Founder</span>
                <h4 className="font-semibold text-foreground text-sm mt-0.5">Mohammad Nazeer</h4>
                <p className="text-xs text-muted-foreground">+91 95508 10878</p>
              </div>
              <Badge className="bg-secondary text-foreground text-[9px] uppercase px-1.5 py-0.5">Co-Founder</Badge>
            </div>
            <Button asChild variant="glass" size="default" className="w-full mt-2 h-9 text-xs border-border/50">
              <a
                href={`https://wa.me/919550810878?text=${encodeURIComponent(bookingMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                Message Co-Founder
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
