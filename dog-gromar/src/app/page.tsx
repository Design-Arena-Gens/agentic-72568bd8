const services = [
  {
    title: "Signature Groom",
    description:
      "Full coat trim tailored to breed standards, gentle bath, blowout, and finishing spray.",
    duration: "90 minutes",
  },
  {
    title: "Puppy Primer",
    description:
      "First-time grooming experience focused on trust building, nail care, and a soft tidy trim.",
    duration: "45 minutes",
  },
  {
    title: "Spa Refresh",
    description:
      "Deep-cleansing bath and blueberry facial paired with de-shedding treatment and paw balm.",
    duration: "60 minutes",
  },
  {
    title: "Ultimate Pamper",
    description:
      "Everything in Signature Groom plus aromatherapy soak, teeth polish, and bandana to-go.",
    duration: "120 minutes",
  },
];

const packages = [
  {
    name: "Mini",
    price: "$55",
    suitedFor: "Toy + small breeds under 25 lbs",
    perks: ["Warm hydro bath", "Fluff dry & brush out", "Nail trim & paw tidy"],
  },
  {
    name: "Deluxe",
    price: "$85",
    suitedFor: "Medium coats & doodles",
    perks: [
      "Breed-specific haircut",
      "Blueberry facial & ear cleanse",
      "Seasonal bandana or bow",
    ],
    highlighted: true,
  },
  {
    name: "Adventure",
    price: "$110",
    suitedFor: "Active pups needing extra de-shedding",
    perks: [
      "Mud mask to loosen dirt",
      "Deep coat detangle",
      "Teeth brushing & breath mist",
    ],
  },
];

const testimonials = [
  {
    quote:
      "Luna used to dread bath day, but now she literally runs to the door when we say we're going to Paws & Polish.",
    author: "Maria H.",
    dog: "Luna, Australian Shepherd",
  },
  {
    quote:
      "They are the only groomers who understand how to keep Milo's curls bouncy without matting. Five-star service every time.",
    author: "James & Priya T.",
    dog: "Milo, Mini Goldendoodle",
  },
  {
    quote:
      "The team treated our senior pug so gently. He came home calm, clean, and smelling amazing.",
    author: "Sandra L.",
    dog: "Gus, 12-year-old Pug",
  },
];

const faqs = [
  {
    question: "How often should my dog be groomed?",
    answer:
      "Most pups love a visit every 4–6 weeks, though double-coated breeds and high-adventure dogs may benefit from a more frequent schedule.",
  },
  {
    question: "What vaccinations are required?",
    answer:
      "We ask for up-to-date rabies, DHPP, and Bordetella records for the safety of every guest. You can upload documents in our booking portal.",
  },
  {
    question: "Can I stay during the appointment?",
    answer:
      "We kindly ask pet parents to drop off so your dog can settle into the grooming flow. You're welcome to video chat in for a quick hello.",
  },
];

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-amber-50 text-slate-900">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.12),_transparent_60%)]" />
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-16 lg:flex-row lg:items-center lg:justify-between lg:pt-24 xl:px-0">
          <div className="max-w-xl space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-600/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Portland&apos;s Dog Grooming Studio
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              A calming spa day designed just for your favorite dog.
            </h1>
            <p className="text-lg leading-relaxed text-slate-600">
              Paws &amp; Polish combines gentle handling, modern spa
              techniques, and breed-specific styling to keep your pup looking
              sharp and feeling relaxed. Every grooming session is tailored to
              your dog&apos;s comfort level and coat needs.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#booking"
                className="inline-flex items-center justify-center rounded-full bg-sky-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-sky-600/30 transition hover:bg-sky-700"
              >
                Book a Grooming Session
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-8 py-3 text-base font-semibold text-slate-800 hover:border-sky-500 hover:text-sky-700"
              >
                Explore Services
              </a>
            </div>
            <div className="flex items-center gap-6 pt-2 text-sm text-slate-600">
              <div>
                <span className="font-semibold text-slate-900">580+</span> happy
                clients
              </div>
              <div>
                Fear-Free certified groomers · Open Tuesday–Sunday · 9a–6p
              </div>
            </div>
          </div>
          <div className="relative mx-auto max-w-lg rounded-3xl border border-white/50 bg-white/80 p-6 shadow-xl shadow-sky-900/10 backdrop-blur">
            <div className="absolute -top-10 right-6 rounded-full bg-white px-5 py-3 text-sm font-semibold shadow-md shadow-sky-900/10">
              Gentle drying suites
            </div>
            <div className="grid gap-6">
              <div className="rounded-2xl bg-sky-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-800">
                  What&apos;s included
                </p>
                <ul className="mt-4 space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                    Warm spa bath with essential oils customized by coat type
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                    Expert coat styling with premium Japanese shears
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                    Finishing touches to keep paws, ears, and teeth pristine
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-100 p-6 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">
                  New client special
                </p>
                <p className="mt-2">
                  Mention &ldquo;PAWsitive First Visit&rdquo; and receive a free
                  add-on of your choice: paw balm, teeth polish, or deshedding
                  boost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl space-y-28 px-6 pb-32 xl:px-0">
        <section id="services" className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
              Elevated grooming tailored to every coat and temperament.
            </h2>
            <p className="max-w-2xl text-lg text-slate-600">
              Our team is trained in low-stress handling and breed-specific
              techniques. Each service begins with a personalized consultation
              to understand your dog&apos;s preferences, sensitivities, and
              styling goals.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-3xl border border-transparent bg-white p-8 shadow-sm transition hover:border-sky-200 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sky-700">
                    {service.duration}
                  </span>
                </div>
                <p className="mt-4 text-base text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
                Packages designed for every pup personality.
              </h2>
              <p className="mt-3 max-w-xl text-lg text-slate-600">
                Choose the package that best suits your dog&apos;s coat type and
                lifestyle. Need something custom? We&apos;d love to craft one
                just for you.
              </p>
            </div>
            <a
              href="#booking"
              className="inline-flex items-center justify-center rounded-full border border-sky-300 px-6 py-3 text-sm font-semibold text-sky-700 transition hover:bg-sky-50"
            >
              See Add-On Menu
            </a>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`flex h-full flex-col rounded-3xl border bg-white p-8 shadow-sm transition hover:shadow-lg ${
                  pkg.highlighted
                    ? "border-sky-300 shadow-lg shadow-sky-200"
                    : "border-slate-100"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-slate-950">
                    {pkg.name}
                  </h3>
                  <p className="text-lg font-semibold text-sky-700">
                    {pkg.price}
                  </p>
                </div>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400">
                  {pkg.suitedFor}
                </p>
                <ul className="mt-6 space-y-3 text-slate-600">
                  {pkg.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <a
                  href="#booking"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  Reserve Package
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-12 rounded-3xl bg-white/80 p-10 shadow-lg shadow-sky-100">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl space-y-4">
              <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
                More than grooming, it&apos;s a relationship.
              </h2>
              <p className="text-lg text-slate-600">
                From the first sniff to the final tail wag, we move at your
                dog&apos;s pace. Treats, snuffle mats, and cuddle breaks are all
                part of the experience.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 text-center text-slate-700">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5">
                <p className="text-4xl font-semibold text-slate-950">14</p>
                <p className="mt-2 text-sm uppercase tracking-[0.3em]">
                  Years combined expertise
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5">
                <p className="text-4xl font-semibold text-slate-950">98%</p>
                <p className="mt-2 text-sm uppercase tracking-[0.3em]">
                  Rebooking rate
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.author}
                className="flex h-full flex-col justify-between rounded-3xl border border-slate-100 bg-white p-6 text-slate-700 shadow-sm"
              >
                <p className="text-base leading-relaxed">
                  “{testimonial.quote}”
                </p>
                <footer className="mt-6 text-sm font-semibold text-slate-900">
                  {testimonial.author}
                  <span className="block text-xs font-normal uppercase tracking-[0.2em] text-slate-400">
                    {testimonial.dog}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
              What to expect on grooming day.
            </h2>
            <ol className="space-y-6 text-slate-600">
              <li className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
                  Step One
                </span>
                <p className="mt-3 text-lg font-semibold text-slate-950">
                  Personalized consultation
                </p>
                <p className="mt-2 text-sm">
                  Share your dog&apos;s routines, coat care history, and any
                  sensitivities. We tailor the spa menu before paws hit the tub.
                </p>
              </li>
              <li className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
                  Step Two
                </span>
                <p className="mt-3 text-lg font-semibold text-slate-950">
                  Low-stress grooming session
                </p>
                <p className="mt-2 text-sm">
                  Gentle bathing, drying, and styling using calming cues and
                  positive reinforcement to keep tails wagging.
                </p>
              </li>
              <li className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
                  Step Three
                </span>
                <p className="mt-3 text-lg font-semibold text-slate-950">
                  Shine report &amp; aftercare
                </p>
                <p className="mt-2 text-sm">
                  We walk you through the final look, note any areas to monitor,
                  and send home tailored coat-care tips and product recs.
                </p>
              </li>
            </ol>
          </div>
          <div className="rounded-3xl border border-sky-100 bg-sky-600/10 p-8 text-slate-700">
            <h3 className="text-2xl font-semibold text-slate-950">
              Add-on spa rituals
            </h3>
            <p className="mt-3 text-sm">
              Layer in extra relaxation or coat care boosters to any package.
            </p>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                Lavender paw soak with warm towel wrap
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                Shed Guard undercoat treatment for double coats
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                Pawdicure polish in vegan, quick-dry colors
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                Seasonal spa scent spritz curated with local apothecary
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-10">
          <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
            Frequently asked questions.
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-950">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {faq.answer}
                </p>
              </div>
            ))}
            <div className="rounded-3xl border border-sky-200 bg-sky-700 p-6 text-white">
              <h3 className="text-xl font-semibold">
                Need to chat through special care?
              </h3>
              <p className="mt-3 text-sm text-sky-50">
                We work with anxious pups, seniors, and dogs with mobility
                differences. Call us at{" "}
                <a href="tel:5035557195" className="font-semibold underline">
                  (503) 555-7195
                </a>{" "}
                and we&apos;ll craft a gentle plan.
              </p>
            </div>
          </div>
        </section>

        <section
          id="booking"
          className="rounded-3xl border border-slate-100 bg-white p-10 shadow-lg shadow-sky-100"
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                Book now
              </span>
              <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
                Ready for wag-worthy grooming?
              </h2>
              <p className="text-lg text-slate-600">
                Request your preferred day and time. We&apos;ll respond within
                one business hour to confirm details and finalize your
                appointment.
              </p>
              <div className="text-sm text-slate-500">
                Tuesday – Sunday · 9:00am – 6:00pm · 1425 SE Maple Ave,
                Portland, OR
              </div>
            </div>
            <form className="grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-inner shadow-white/60">
              <div className="grid gap-2">
                <label className="text-sm font-medium text-slate-700">
                  Your name
                </label>
                <input
                  type="text"
                  placeholder="Taylor Pawsworth"
                  className="w-full rounded-2xl border border-transparent bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none ring-offset-2 focus:border-sky-200 focus:ring-2 focus:ring-sky-200"
                  required
                />
              </div>
              <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="hello@pawmail.com"
                    className="w-full rounded-2xl border border-transparent bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none ring-offset-2 focus:border-sky-200 focus:ring-2 focus:ring-sky-200"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-slate-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="(503) 555-7195"
                    className="w-full rounded-2xl border border-transparent bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none ring-offset-2 focus:border-sky-200 focus:ring-2 focus:ring-sky-200"
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium text-slate-700">
                  Dog&apos;s name &amp; breed
                </label>
                <input
                  type="text"
                  placeholder="Maple · Golden Retriever"
                  className="w-full rounded-2xl border border-transparent bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none ring-offset-2 focus:border-sky-200 focus:ring-2 focus:ring-sky-200"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium text-slate-700">
                  Preferred date
                </label>
                <input
                  type="date"
                  className="w-full rounded-2xl border border-transparent bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none ring-offset-2 focus:border-sky-200 focus:ring-2 focus:ring-sky-200"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium text-slate-700">
                  How can we pamper your pup?
                </label>
                <textarea
                  rows={4}
                  placeholder="Let us know about coat goals, sensitivities, or favorite treats."
                  className="w-full rounded-2xl border border-transparent bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none ring-offset-2 focus:border-sky-200 focus:ring-2 focus:ring-sky-200"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-300 transition hover:bg-emerald-600"
              >
                Request Appointment
              </button>
              <p className="text-xs text-slate-500">
                By submitting this form you agree to our{" "}
                <a href="#" className="underline">
                  spa policies
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  privacy practices
                </a>
                .
              </p>
            </form>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-200 bg-white/90 py-10 text-sm text-slate-500">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left xl:px-0">
          <div>
            <h3 className="text-base font-semibold uppercase tracking-[0.3em] text-slate-700">
              Paws &amp; Polish
            </h3>
            <p>1425 SE Maple Ave · Portland, OR</p>
            <p className="mt-1">
              <a href="tel:5035557195" className="hover:text-sky-700">
                (503) 555-7195
              </a>{" "}
              ·{" "}
              <a
                href="mailto:hello@pawsandpolish.com"
                className="hover:text-sky-700"
              >
                hello@pawsandpolish.com
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-2 text-slate-500 sm:text-right">
            <a href="#services" className="hover:text-sky-700">
              Services
            </a>
            <a href="#booking" className="hover:text-sky-700">
              Book
            </a>
            <a href="#" className="hover:text-sky-700">
              Shop spa products
            </a>
          </div>
          <p className="text-xs">© {new Date().getFullYear()} Paws &amp; Polish. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
