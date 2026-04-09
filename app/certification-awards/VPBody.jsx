const certifications = [
  "ISO 9001 Certified",
  "ISO 14001 Certified",
  "ISO 45001 Certified",
  "Top 5 Interior Design Inspiration 2023",
];

const comparisonRows = [
  {
    left: "Outsourced joinery",
    right: "In-house bespoke joinery",
  },
  {
    left: "2D drawings only",
    right: "3D + VR walkthroughs included",
  },
  {
    left: "Client manages approvals",
    right: "Municipality approvals handled",
  },
  {
    left: "Design only responsibility",
    right: "Design + execution accountability",
  },
  {
    left: "Limited after handover support",
    right: "Structured post handover care",
  },
];

export default function VBody() {
  return (
    <>
      {/* Certifications strip */}
      <section className="bg-[#efefef] text-black">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((item) => (
              <div key={item} className="flex flex-col items-center">
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border-2 border-black/70 text-3xl">
                  ★
                </div>
                <h2 className="text-2xl font-semibold leading-tight sm:text-3xl lg:text-[2rem]">
                  {item}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why certifications matter */}
      <section className="bg-black py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <h2 className="text-3xl font-semibold leading-tight text-[#d4a63d] sm:text-4xl lg:text-5xl">
              Why These Certifications Matter To You
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-white/85 sm:text-lg">
              <p>
                Choosing an <span className="text-[#d4a63d]">interior design company in Dubai</span> is not just about
                aesthetics, it is about <strong>avoiding costly mistakes, delays, and misalignment.</strong>
              </p>

              <p>
                Our internationally recognized certifications exist to protect
                your <strong>investment, timeline, and expectations.</strong>
              </p>
            </div>

            <ul className="mt-8 space-y-3 text-base leading-8 text-white/85 sm:text-lg">
              <li>• Predictable project delivery across all design and fit-out phases</li>
              <li>• Internationally benchmarked quality standards for luxury interiors</li>
              <li>• Environmentally responsible material and construction decisions</li>
              <li>• Safety-driven execution that prevents site disruptions</li>
              <li>• Clear accountability from concept development to final handover</li>
            </ul>

            <p className="mt-8 text-base leading-8 text-white/85 sm:text-lg">
              For villa owners, penthouse clients, and commercial investors,
              these standards ensure that every project is handled with
              <strong> discipline not improvisation.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Visualization section */}
      <section className="bg-[#efe2b7] text-black py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              See The Finished Interior Before Construction Begins
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 sm:text-lg">
              <p>
                Many interior projects fail because clients are asked to imagine
                the final result.
              </p>

              <p>
                At RadyInterior, we eliminate guesswork through
                <strong> 3D visualization and VR 360 walkthroughs</strong>, allowing
                you to experience your villa, penthouse, or commercial space
                before execution begins.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold sm:text-2xl">This process:</h3>
              <ul className="mt-4 space-y-3 text-base leading-8 sm:text-lg">
                <li>• Aligns expectations early</li>
                <li>• Reduces revisions and delays</li>
                <li>• Ensures design, joinery, and lighting decisions are finalized with confidence</li>
              </ul>
            </div>

            <p className="mt-8 text-base font-semibold leading-8 sm:text-lg">
              Other firms show sketches. We let you walk through the future.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-black py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-5xl text-3xl font-semibold leading-tight text-[#d4a63d] sm:text-4xl lg:text-5xl">
            What Actually Defines The Best Interior Design Firm In Dubai?
          </h2>

          <div className="mt-8 overflow-hidden border border-[#d4a63d]">
            <div className="grid grid-cols-2 bg-black text-sm font-semibold text-white sm:text-base">
              <div className="border-r border-[#d4a63d] p-4">
                Typical Freelancers / Studios
              </div>
              <div className="p-4">RadyInterior Turnkey Approach</div>
            </div>

            {comparisonRows.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-2 text-sm text-white/90 sm:text-base"
              >
                <div className="border-r border-t border-[#d4a63d] p-4">
                  {row.left}
                </div>
                <div className="border-t border-[#d4a63d] p-4">
                  {row.right}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}