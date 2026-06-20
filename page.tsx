import type { Metadata } from "next";
import Image from "next/image";
import { Award, BriefcaseBusiness, Lightbulb, MapPin } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { SectionReveal } from "@/components/sections/section-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez Koffitsè Eddy BADOHOUN, fondateur de Tech-Innov Digit Service, agence digitale à Kpalimé au Togo."
};

const values = [
  {
    title: "Innovation utile",
    description:
      "Des solutions modernes, pensées pour servir des objectifs concrets.",
    icon: Lightbulb
  },
  {
    title: "Exécution professionnelle",
    description:
      "Des livrables soignés, cohérents et adaptés aux standards actuels.",
    icon: Award
  },
  {
    title: "Développement local",
    description:
      "Une expertise digitale ancrée à Kpalimé, tournée vers la croissance au Togo.",
    icon: MapPin
  }
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="À propos"
        title="Une vision digitale au service des entreprises et entrepreneurs"
        description="Tech-Innov Digit Service accompagne les marques qui veulent inspirer confiance, structurer leur image et développer leur activité."
      />

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionReveal>
            <div className="relative overflow-hidden rounded-[8px] border border-navy/10 bg-mist p-8 shadow-premium">
              <div className="absolute inset-0 bg-premium-radial opacity-80" />
              <div className="relative flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="relative h-48 w-48 overflow-hidden rounded-[8px] border border-white bg-white shadow-premium">
                  <Image
                    src={company.logo}
                    alt={`Portrait réservé pour ${company.founder}`}
                    fill
                    sizes="192px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-6 space-y-2">
                  <p className="text-2xl font-black text-navy">
                    {company.founder}
                  </p>
                  <p className="inline-flex items-center justify-center gap-2 rounded-[6px] bg-white px-4 py-2 text-sm font-bold text-ink/68">
                    <BriefcaseBusiness className="h-4 w-4 text-gold" />
                    Fondateur
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="space-y-7">
              <BrandLogo />
              <SectionHeading
                align="left"
                eyebrow="Fondateur"
                title="Koffitsè Eddy BADOHOUN"
                description="Koffitsè Eddy BADOHOUN est un entrepreneur passionné par le digital, l'innovation et le développement des entreprises."
              />
              <p className="text-lg leading-9 text-ink/72">
                À travers Tech-innov DIGIT Service, il accompagne les
                entreprises, entrepreneurs, associations et particuliers dans
                leur transformation digitale et leur développement grâce à des
                solutions innovantes et adaptées à leurs besoins.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {values.map((value) => {
                  const Icon = value.icon;

                  return (
                    <Card key={value.title} className="h-full">
                      <CardContent className="space-y-3 p-5">
                        <Icon className="h-6 w-6 text-gold" />
                        <h3 className="font-black text-navy">{value.title}</h3>
                        <p className="text-sm leading-6 text-ink/65">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
