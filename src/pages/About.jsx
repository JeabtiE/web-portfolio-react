export default function About() {
  return (
    <main className="flex-grow-1">
      <div className="container py-5">
        <article className="section about-page mx-auto">
          <h1 className="fw-bold mb-4">About</h1>
          <p>
            I'm a Computer Engineering student at Chiang Mai University. I grew up in Chiang Rai,
            and in middle school I earned a scholarship to Princess Chulabhorn Science High School Chiang
            Rai which turned out to shape a lot of what came after.
            <br />
            <br />
            Through high school, I threw myself into competitions and projects, partly to build a
            portfolio for university, but mostly because I genuinely liked the work. Most of what
            I made started as a hackathon idea or a school project and grew from there.
            <br />
            <br />
            When I got to university, I stopped. No competitions, no side projects just coursework.
            It didn't take long to realize something was missing.
            <br />
            <br />
            So I came back. The goal now is simpler and more deliberate than before: build things
            that are actually useful. Not just to win, but to create work that means something to
            an industry, to a community, or to the people who might use it.
          </p>

          <h2 className="about-page__section-title h4 mt-5 mb-3">Education</h2>
          <div className="d-flex flex-column gap-3">
            <div className="card education-card flex-row align-items-center gap-3 p-3">
              <div className="education-card__logo d-flex align-items-center justify-content-center rounded">
                <img src="/img/cmu.png" alt="cmu" />
              </div>
              <div className="card-body p-0">
                <h3 className="education-card__name h6 mb-1">Chiang Mai University</h3>
                <p className="education-card__location small mb-1">Chiang Mai, Thailand</p>
                <p className="education-card__degree small mb-1">
                  Bachelor of Engineering in Computer Engineering
                </p>
                <p className="education-card__date small mb-0">2025 - Present</p>
              </div>
            </div>
            <div className="card education-card flex-row align-items-center gap-3 p-3">
              <div className="education-card__logo d-flex align-items-center justify-content-center rounded">
                <img src="/img/pcshscr.png" alt="pcshscr" />
              </div>
              <div className="card-body p-0">
                <h3 className="education-card__name h6 mb-1">
                  Princess Chulabhorn Science High School Chiang Rai
                </h3>
                <p className="education-card__location small mb-1">Chiang Rai, Thailand</p>
                <p className="education-card__degree small mb-1">High School · Scholarship</p>
                <p className="education-card__date small mb-0">2021 - 2024</p>
              </div>
            </div>
          </div>

          <h2 className="about-page__section-title h4 mt-5 mb-3">Outside of class</h2>
          <p className="mb-0">
            When I step away from screens, I head outdoors hiking trails, chasing waterfalls,
            anything that puts distance between me and the noise. There's something a little
            contradictory about a tech student who finds most of his rest in slow, analog nature,
            but that's genuinely where I recharge.
            <br />
            <br />
            Music is the other constant. It's the most reliable thing I've found for when
            exhaustion sets in I've never finished a session and felt worse than when I started.
            Back in high school, I put together a small band that became something of a legend at
            school, which I'm still quietly proud of. I'm not exceptional at every instrument, but
            I play guitar, drums, bass, piano, and brass well enough to mean it.
          </p>
        </article>
      </div>
    </main>
  );
}
