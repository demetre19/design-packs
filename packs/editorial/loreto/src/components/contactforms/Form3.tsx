{/* Echo: application-start form uses the measure as a restrained progress cue */}
import { EchoMeasure } from '../../system/echo';

export default function Form3() {
  return (
    <section className="bg-paper px-5 py-20 text-ink md:px-10">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <div className="group relative overflow-hidden border border-line bg-ground p-7">
          <EchoMeasure index="03" size="md" surface="bg-ground" />
          <div className="type-micro text-accent">Application step 01</div>
          <h2 className="type-editorial mt-5 text-5xl">Before you apply.</h2>
          <p className="type-body mt-5 max-w-md text-secondary">Applications may be submitted at any time, though earlier applications improve the likelihood of placement in the desired year of entry.</p>
        </div>
        <form className="grid gap-px border border-line bg-line">
          {['Student first name', 'Student surname', 'Proposed entry year', 'Current school'].map((label) => <input key={label} className="focus-ring bg-white px-5 py-5 outline-none transition-colors duration-200 ease-crisp hover:bg-ground" placeholder={label} />)}
          <button type="button" className="focus-ring bg-ink px-5 py-5 text-left text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-colors duration-200 ease-crisp hover:bg-[#172F52]">Continue application</button>
        </form>
      </div>
    </section>
  );
}
