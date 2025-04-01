import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url('/new.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-1 space-y-8">
            <div className="relative">
              {/* Gradient burst behind name */}
              <div className="absolute -z-10 w-64 h-64 bg-[#2e37fe]/70 rounded-full blur-3xl opacity-70 -top-10 -left-10"></div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-none relative">
                <span className="noise-effect">
                  Gilda
                  <br />
                  Geist
                </span>
              </h1>
            </div>

            <div className="space-y-1 text-sm font-light">
              <p>Phone: 240-893-7294</p>
              <p>
                Email:{" "}
                <Link href="mailto:gildageist@gmail.com" className="hover:underline text-[#2e37fe]">
                  gildageist@gmail.com
                </Link>
              </p>
              <p>
                BlueSky:{" "}
                <Link href="https://bsky.app/profile/gildageist.bsky.social" className="hover:underline text-[#2e37fe]">
                  gildageist.bsky.social
                </Link>
              </p>
              <p>
                LinkedIn:{" "}
                <Link href="https://www.linkedin.com/notifications/" className="hover:underline text-[#2e37fe]">
                  Gilda Geist
                </Link>
              </p>
              <p>
                Muck Rack:{" "}
                <Link href="https://muckrack.com/gilda-geist" className="hover:underline text-[#2e37fe]">
                  muckrack.com/gilda-geist
                </Link>
              </p>
            </div>

            <div className="pt-4 md:pt-8 relative">
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                Journalist &<br />
                Podcast
                <br />
                Producer
              </h2>
            </div>

            {/* Image in the left column - positioned further down the page */}
            <div className="hidden md:block relative" style={{ marginTop: "300px" }}>
              <div className="sticky top-3/4">
                <Image
                  src="/gilda.png"
                  alt="Gilda Geist"
                  width={900}
                  height={900}
                  className="w-[150%] h-auto object-contain"
                  style={{
                    mixBlendMode: "multiply",
                    filter: "contrast(1.1)",
                  }}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-8">
            {/* About Section */}
            <section>
              <div className="flex flex-col md:flex-row md:items-start border-t border-[#2e37fe] pt-2">
                <h2 className="text-xl sm:text-2xl font-bold md:w-1/4 text-[#2e37fe] mb-2 md:mb-0">About</h2>
                <div className="md:w-3/4">
                  <p className="text-sm font-light">
                    Award-winning journalist and podcast producer with experience in public radio, print, and digital
                    media. Can deliver accurate, compelling and clean copy reliably and on a deadline. Currently hosting
                    All Things Considered for CAI, local NPR for Cape Cod, its nearby islands, and the South Coast of
                    Massachusetts. Specializing in reporting on the environment, public health, education, and human
                    services. Passionate about storytelling that connects people to important local issues and amplifies
                    diverse voices.
                  </p>
                </div>
              </div>
            </section>

            {/* Notable Reporting Section */}
            <section>
              <div className="flex flex-col md:flex-row md:items-start border-t border-[#2e37fe] pt-2">
                <h2 className="text-xl sm:text-2xl font-bold md:w-1/4 text-[#2e37fe] mb-2 md:mb-0">
                  Notable
                  <br className="hidden md:block" />
                  Reporting
                </h2>
                <div className="md:w-3/4">
                  <div className="space-y-4">
                    <div className="border-l-2 border-[#2e37fe] pl-3 py-1">
                      <Link
                        href="https://www.theuppercapecatch.com/why-arent-you-on-ebird"
                        target="_blank"
                        className="block hover:underline"
                      >
                        <h3 className="font-bold">Why aren't you on eBird?</h3>
                        <p className="text-xs text-[#2e37fe] font-light">The Upper Cape Catch, October 2023</p>
                      </Link>
                    </div>

                    <div className="border-l-2 border-[#2e37fe] pl-3 py-1">
                      <Link
                        href="https://www.capeandislands.org/local-news/2024-08-07/provincetown-remembers-the-aids-crisis-with-memorial-quilt-display"
                        target="_blank"
                        className="block hover:underline"
                      >
                        <h3 className="font-bold">
                          Provincetown remembers the AIDS crisis with memorial quilt display
                        </h3>
                        <p className="text-xs text-[#2e37fe] font-light">CAI, August 2024</p>
                      </Link>
                    </div>

                    <div className="border-l-2 border-[#2e37fe] pl-3 py-1">
                      <Link
                        href="https://www.capenews.net/falmouth/news/falmouth-is-losing-eelgrass-an-expert-explains-why-that-matters/article_123"
                        target="_blank"
                        className="block hover:underline"
                      >
                        <h3 className="font-bold">Falmouth is losing eelgrass. An expert explains why that matters.</h3>
                        <p className="text-xs text-[#2e37fe] font-light">Falmouth Enterprise, August 2023</p>
                      </Link>
                    </div>

                    <div className="border-l-2 border-[#2e37fe] pl-3 py-1">
                      <Link
                        href="https://www.capeandislands.org/local-news/2024-12-15/cape-cod-hospital-now-has-capes-first-ever-trauma-center"
                        target="_blank"
                        className="block hover:underline"
                      >
                        <h3 className="font-bold">Cape Cod Hospital now has Cape's first-ever trauma center</h3>
                        <p className="text-xs text-[#2e37fe] font-light">CAI, December 2024</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Awards Section */}
            <section>
              <div className="flex flex-col md:flex-row md:items-start border-t border-[#2e37fe] pt-2">
                <h2 className="text-xl sm:text-2xl font-bold md:w-1/4 text-[#2e37fe] mb-2 md:mb-0">Awards</h2>
                <div className="md:w-3/4">
                  <div className="space-y-2">
                    <div className="border-l-2 border-[#2e37fe] pl-3 py-1">
                      <h3 className="font-bold">Best podcast - The Upper Cape Catch</h3>
                      <p className="text-xs text-[#2e37fe] font-light">New England Newspaper and Press Association</p>
                    </div>

                    <div className="border-l-2 border-[#2e37fe] pl-3 py-1">
                      <h3 className="font-bold">Best human interest story - Faces of Affordable Housing</h3>
                      <p className="text-xs text-[#2e37fe] font-light">New England Newspaper and Press Association</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section className="relative">
              {/* Matching gradient burst near education */}
              <div className="absolute -z-10 w-64 h-64 bg-[#2e37fe]/70 rounded-full blur-3xl opacity-30 -bottom-32 right-0"></div>

              <div className="flex flex-col md:flex-row md:items-start border-t border-[#2e37fe] pt-2">
                <h2 className="text-xl sm:text-2xl font-bold md:w-1/4 text-[#2e37fe] mb-2 md:mb-0">Experience</h2>
                <div className="md:w-3/4 space-y-6">
                  <div>
                    <h3 className="font-bold">HOST, ALL THINGS CONSIDERED | REPORTER</h3>
                    <p className="text-sm italic font-light">GBH | CAI | 2024 - present</p>
                    <ul className="list-disc pl-5 text-sm mt-2 space-y-1 font-light">
                      <li>
                        Prepares and delivers timely and accurate regional newscasts that reflect a range of subject
                        matter and geographic diversity, making sure the newscasts flow well in and out of NPR
                        programming.
                      </li>
                      <li>Reports and produces news spots, interviews, and features on pressing local issues.</li>
                      <li>
                        Coordinates, hosts, and produces interviews (taped and live) with newsmakers, community members
                        and reporters.
                      </li>
                      <li>
                        Appears on CAI's weekly news roundup, a live program where reporters discuss what they have
                        covered that week.
                      </li>
                      <li>Produces written versions of stories for the station's website.</li>
                      <li>Substitute hosts for Morning Edition.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold">NEWS REPORTER</h3>
                    <p className="text-sm italic font-light">The Falmouth Enterprise | 2022 - 2024</p>
                    <ul className="list-disc pl-5 text-sm mt-2 space-y-1 font-light">
                      <li>
                        Pitched, wrote, and reported news and features for a weekly print and digital newspaper on Cape
                        Cod.
                      </li>
                      <li>Beats focused on environment, public health, education, and human services.</li>
                      <li>Contributed photographs and data visualization.</li>
                      <li>
                        Highlights included coverage of coastal climate change impacts, municipal wastewater management,
                        the affordable housing crisis, and the disbursal of opioid settlement funds.
                      </li>
                      <li>Developed and maintained positive working relationships with sources and the community.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold">PODCAST PRODUCER</h3>
                    <p className="text-sm italic font-light">The Upper Cape Catch | 2022 - 2024</p>
                    <ul className="list-disc pl-5 text-sm mt-2 space-y-1 font-light">
                      <li>Co-founded and co-produced an award-winning podcast for the Enterprise.</li>
                      <li>
                        Content spanned stories from four Cape Cod towns and a range of topics, from nitrogen loading to
                        elementary school technology use to addiction recovery.
                      </li>
                      <li>
                        Managed full content lifecycle, including writing, reporting, hosting, production and
                        distribution.
                      </li>
                      <li>Maintained strong communication and effective teamwork with co-producer.</li>
                      <li>
                        Managed and synthesized engagement data analytics to assess success and grow the audience.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold">EDITOR IN CHIEF</h3>
                    <p className="text-sm italic font-light">The Justice | 2018 - 2022</p>
                    <ul className="list-disc pl-5 text-sm mt-2 space-y-1 font-light">
                      <li>
                        Advanced from reporter (2018) to news editor (2019) to editor in chief (2020-2021) to senior
                        editor (2021-2022) of Brandeis University's independent print and digital newspaper.
                      </li>
                      <li>
                        Served as editor in chief during the 2020 pandemic, facilitating and managing the transition to
                        online-only publication.
                      </li>
                      <li>Gained experience with on-the-ground reporting and interviewing on tight deadlines.</li>
                      <li>Sat on the executive board to provide guidance to the succeeding editor in chief.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Education Section - Moved below Experience */}
            <section>
              <div className="flex flex-col md:flex-row md:items-start border-t border-[#2e37fe] pt-2">
                <h2 className="text-xl sm:text-2xl font-bold md:w-1/4 text-[#2e37fe] mb-2 md:mb-0">Education</h2>
                <div className="md:w-3/4">
                  <h3 className="font-bold text-lg">BRANDEIS UNIVERSITY</h3>
                  <p className="text-sm font-light">BA ENGLISH & POLITICS | JOURNALISM</p>
                  <ul className="list-disc pl-5 text-sm mt-2 space-y-1 font-light">
                    <li>Honors: Graduated magna cum laude, Phi Beta Kappa, Humanities Fellow</li>
                    <li>
                      Studied under veteran journalists, including Boston Globe journalists Eileen McNamara, Neil
                      Swidey, and Peter May.
                    </li>
                  </ul>
                  <p className="text-sm mt-2 font-light">
                    Certificate in Math For Journalists from the Poynter Institute
                  </p>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section>
              <div className="flex flex-col md:flex-row md:items-start border-t border-[#2e37fe] pt-2">
                <h2 className="text-xl sm:text-2xl font-bold md:w-1/4 text-[#2e37fe] mb-2 md:mb-0">Skills</h2>
                <div className="md:w-3/4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-sm font-light">
                    <div>
                      <ul className="list-none space-y-1">
                        <li>News writing and reporting</li>
                        <li>Audio editing</li>
                        <li>Video editing</li>
                        <li>Interviewing</li>
                        <li>Switchboard operation</li>
                        <li>AP Style</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="list-none space-y-1">
                        <li>Feature writing</li>
                        <li>Photojournalism</li>
                        <li>Search engine optimization</li>
                        <li>Data visualization</li>
                        <li>Social media</li>
                        <li>CRM (Constant Contact, MailChimp)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Mobile-only image before footer */}
      <div className="md:hidden container mx-auto px-4 py-8">
        <Image
          src="/gilda.png"
          alt="Gilda Geist"
          width={750}
          height={750}
          className="w-[150%] h-auto object-contain mx-auto"
          style={{
            mixBlendMode: "multiply",
            filter: "contrast(1.1)",
          }}
          priority
        />
      </div>

      {/* Footer with contact information */}
      <footer className="bg-[#2e37fe] text-white py-6 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4">
            <div className="text-center md:text-left font-light">
              <p className="text-lg font-bold">Gilda Geist</p>
              <p className="text-sm">Journalist & Podcast Producer</p>
            </div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-light">
              <Link href="tel:2408937294" className="hover:underline">
                240-893-7294
              </Link>
              <Link href="mailto:gildageist@gmail.com" className="hover:underline">
                gildageist@gmail.com
              </Link>
              <Link href="https://bsky.app/profile/gildageist.bsky.social" className="hover:underline">
                BlueSky
              </Link>
              <Link href="https://www.linkedin.com/notifications/" className="hover:underline">
                LinkedIn
              </Link>
              <Link href="https://muckrack.com/gilda-geist" className="hover:underline">
                Muck Rack
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

