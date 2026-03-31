import { WaitlistForm } from "../components/WaitlistForm";

const pdfDriveUrl =
  process.env.NEXT_PUBLIC_GOOGLE_DRIVE_PDF_URL?.trim() ?? "";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070913] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/25 via-fuchsia-500/20 to-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400/10 via-indigo-500/15 to-fuchsia-500/10 blur-3xl" />
      </div>

      <main className="relative mx-auto flex w-full max-w-5xl flex-col px-4 py-8 sm:px-6 sm:py-16 lg:py-20">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Rani pristup
          </div>
          <div className="text-xs text-white/60 sm:text-sm">HabitBreaker</div>
        </div>

        <section className="mt-6 grid gap-10 lg:mt-10 lg:grid-cols-5 lg:items-start">
          <div className="flex flex-col gap-10 lg:col-span-3">
            <div className="relative overflow-hidden rounded-3xl border-2 border-cyan-400/45 bg-gradient-to-b from-white/[0.09] to-white/[0.02] p-5 shadow-[0_0_50px_-12px_rgba(34,211,238,0.35)] ring-1 ring-white/10 sm:p-6">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-fuchsia-500/15 blur-3xl" />

              <div className="relative">
                <p className="text-center text-lg font-bold leading-snug text-white sm:text-left sm:text-xl">
                  Besplatan pristup i to{" "}
                  <span className="bg-gradient-to-r from-cyan-200 via-white to-cyan-100 bg-clip-text text-xl font-black tracking-wide text-transparent sm:text-2xl">
                    DOŽIVOTNO
                  </span>
                  .
                </p>
                <p className="mt-3 text-center text-sm font-medium leading-snug text-white/80 sm:text-left sm:text-base">
                  Prijavi se sada i osiguraj svoj pristup — bez skrivenih troškova.
                </p>
                <p className="mt-4 text-center text-sm leading-relaxed text-white/85 sm:text-left">
                  Kod{" "}
                  <span className="font-semibold text-white">77%</span> korisnika
                  koji su prestali da gledaju pornografiju: našli su partnera,
                  ojačali odnos i počeli da više uživaju u životu.{" "}
                  <span className="text-white/90">To te čeka.</span>
                </p>

                <div className="mt-6">
                  <WaitlistForm
                    locale="sr"
                    prominent
                    placeholder="Tvoj email"
                    buttonLabel="Rezerviši mesto"
                    successTitle="Upisan si."
                    successBody="Otvori PDF ispod. Javićemo ti i kad rani pristup bude otvoren."
                    pdfDriveUrl={pdfDriveUrl}
                    pdfLinkLabel="Otvori Dopamine Detox Protocol (Google Drive)"
                    errorInvalidEmail="Unesi ispravan email."
                    errorGeneric="Nešto nije u redu. Pokušaj ponovo."
                  />
                </div>

                <div className="mt-5 rounded-2xl border border-emerald-400/25 bg-emerald-500/[0.08] px-4 py-3">
                  <p className="text-xs font-medium uppercase tracking-wide text-emerald-200/90">
                    Besplatni bonus
                  </p>
                  <p className="mt-1 text-sm text-white/85">
                    Posle prijave: link ka{" "}
                    <span className="font-semibold text-white">
                      Dopamine Detox Protocol
                    </span>{" "}
                    (PDF na Google Drive-u).
                  </p>
                </div>

                <p className="mt-4 text-center text-xs leading-relaxed text-white/55 sm:text-left">
                  <span className="text-white/70">Privatnost je zagarantovana.</span>{" "}
                  Ne šaljemo spam — samo bitna obaveštenja o lansiranju HabitBreaker-a.
                </p>
              </div>
            </div>

            <div>
              <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                90 dana bez pornografije i masturbacije može da ti promeni život.
                <span className="text-white/70"> Uhvati zalet pre svih.</span>
              </h1>

              <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-white/70 sm:text-lg">
                Aplikacija uskoro izlazi. Prijavi se za rani pristup i besplatan
                link ka protokolu — plus sve što sledi ispod.
              </p>

              <p className="mt-4 max-w-xl text-pretty text-sm leading-6 text-white/60">
                Većini ljudi ne treba “još motivacije”, već sistem. Prati streak,
                prepoznaj okidače i gradi mirniju glavu kroz male dnevne pobede
                koje se sabiraju iz nedelje u nedelju.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Više energije i fokusa",
                  "Bolje samopouzdanje",
                  "Jača disciplina",
                  "Manje “brain fog”-a",
                  "Bolji san i raspoloženje",
                ].map((t) => (
                  <div
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold text-white/80">
                AI Mentor (u aplikaciji)
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                Pomoć kad “krene kriza”.
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Lični trener koji uči tvoje okidače, pomaže da preokreneš
                poriv i daje jasan plan za narednih 10 minuta.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  {
                    title: "SOS režim",
                    body: "Brza intervencija kad si na ivici.",
                  },
                  {
                    title: "Personalizovani check-in",
                    body: "Dnevni podsetnici po tvojim šablonima.",
                  },
                  {
                    title: "Podrška za streak",
                    body: "Motivacija + refleksije za kontinuitet.",
                  },
                ].map((x) => (
                  <div
                    key={x.title}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="text-sm font-semibold">{x.title}</div>
                    <div className="mt-1 text-sm text-white/70">{x.body}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold text-white/80">
                Šta dobijaš
              </div>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li>• Praćenje streak-a + kratak dnevnik</li>
                <li>• Dnevni uvidi + milestone-i</li>
                <li>• Privatno, podrazumevano</li>
              </ul>
            </div>
          </aside>
        </section>

        <footer className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50 sm:mt-14">
          © {new Date().getFullYear()} HabitBreaker. Sva prava zadržana.
        </footer>
      </main>
    </div>
  );
}
