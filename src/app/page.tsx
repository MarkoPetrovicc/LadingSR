import { WaitlistForm } from "../components/WaitlistForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070913] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/25 via-fuchsia-500/20 to-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400/10 via-indigo-500/15 to-fuchsia-500/10 blur-3xl" />
      </div>

      <main className="relative mx-auto flex w-full max-w-5xl flex-col px-6 py-16 sm:py-20">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Prijavi se pre lansiranja
          </div>
          <div className="text-sm text-white/60">HabitBreaker</div>
        </div>

        <section className="mt-10 grid gap-10 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-3">
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              90 dana bez pornografije i masturbacije može da ti promeni život.
              <span className="text-white/70"> Uhvati zalet pre svih.</span>
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-lg leading-8 text-white/70">
              Aplikacija uskoro izlazi. Upadni na listu čekanja i dobićeš rani
              pristup, prve funkcije i najbolju šansu da izgradiš kontinuitet.
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

            <div className="mt-10">
              <div className="text-sm font-medium text-white/80">
                Rani pristup
              </div>
              <div className="mt-3">
                <WaitlistForm
                  locale="sr"
                  placeholder="Unesi email"
                  buttonLabel="Prijavi se"
                  successTitle="Upisan si."
                  successBody="Javljamo ti čim rani pristup bude otvoren."
                  errorInvalidEmail="Unesi ispravan email."
                  errorGeneric="Nešto nije u redu. Pokušaj ponovo."
                />
              </div>

              <p className="mt-3 text-xs text-white/50">
                Bez spama. Jedan email kad lansiramo (i možda par bitnih update-a).
              </p>
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
                  { title: "SOS režim", body: "Brza intervencija kad si na ivici." },
                  { title: "Personalizovani check-in", body: "Dnevni podsetnici po tvojim šablonima." },
                  { title: "Podrška za streak", body: "Motivacija + refleksije za kontinuitet." },
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

        <footer className="mt-14 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} HabitBreaker. Sva prava zadržana.
        </footer>
      </main>
    </div>
  );
}
