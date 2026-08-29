import React from 'react';
import pavelNiImg from './assets/pavelni.png';
import seungchanLee from './assets/seungchanlee.png';
import jehyukJang from './assets/jehyukjang.png';
import jusungKang from './assets/jusungkang.jpg';
import zhengtongXu from './assets/zhengtongxu.jpg';
import alexanderSchmitz from './assets/alexanderschmitz.jpeg';
import yukiNoguchi from './assets/yukinoguchi.png';
import sharanNayak from './assets/sharannayak.png';
import seonilSon from './assets/seonilson.png';

import changjooNam from './assets/changjoonam.png';
import shinYounghak from './assets/shinyounghak.png';
import christinaPiazza from './assets/christinapiazza.png';
// import jaeinKim from './assets/jaeinKim.jpeg';
// import placeHolder from './assets/placeholder.jpg';


// import rlwrldLogo from './assets/rlwrld.jpg';
// import xelaLogo from './assets/xela-logo.jpg';

const App: React.FC = () => {
  const topics = [
    "Long-horizon planning, task decomposition, and task-and-motion planning",
    "Foundation models and Vision-Language-Action (VLA) models for humanoid robots",
    "Bimanual manipulation and coordinated whole-body manipulation",
    "Whole-body locomotion and control",
    "Multimodal perception and representation learning",
    "Learning from human demonstrations and teleoperation",
    "Reinforcement learning and imitation learning for long-horizon tasks",
    "World models, predictive planning, and simulation",
    "Embodied AI and autonomous humanoid agents",
    "Sim-to-real transfer and large-scale robot learning",
    "Benchmarks, datasets, and evaluation for long-horizon humanoid autonomy",
  ]



  return (

    <div className="min-h-screen font-sans">
      {/* Header */}
      <header
        className="relative text-white py-24 px-4 bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('/hero-seoul.jpg')" }}
      >
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-400 font-bold uppercase tracking-wider mb-2">2027 ICRA Workshop | May 24–28, Coex, South Korea</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            1st Long-Horizon Workshop
          </h1>
          <p className="text-xl text-slate-200 italic mb-8 max-w-3xl mx-auto">
            (long-horizon, planning, decision and control)
          </p>
          <p className="text-xl text-slate-200 italic mb-8 max-w-3xl mx-auto">
          </p>
          <a
            href="#speakers"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg"
          >
            Our speakers and organizers
          </a>
        </div>
      </header>

      {/* Participating Companies */}
      <section className="py-12 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 hover:opacity-100 transition-opacity">
            {/* <img src={rlwrldLogo} alt="RL-World" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src={xelaLogo} alt="Xela Robotics" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all" /> */}
            {/* <img src={skt} alt="SKT" className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all" /> */}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-12 px-4 space-y-12">
        {/* Summary */}
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4">Summary</h2>
          <p className="text-slate-700 leading-relaxed">
           The goal of this workshop is to bring together researchers, startups, and industry leaders advancing real-world humanoid robots. The workshop will highlight recent advances in long-horizon planning, reasoning, and execution across dexterous manipulation, locomotion, and autonomous decision-making.
          </p>
          <p>
            Humanoid robots may represent a new paradigm for embodied computing. Instead of immersing ourselves in virtual environments through screens and networked devices, we may increasingly bring digital intelligence into the physical world through embodied agents. Rather than interacting with information via keyboards and displays, humans could collaborate directly with intelligent robots in shared environments—for example, preparing a meal together with a humanoid robot through natural dialogue and physical coordination.
          </p>
        </section>

        {/* Message from Organizers */}
        <section className="bg-blue-50/50 border border-blue-100 rounded-2xl p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            From the Organizers
          </h2>
          <div className="text-slate-700 space-y-4 leading-relaxed italic">
            <p>
              We invite contributions from researchers across academia, industry, and startups. Our goal is to create a vibrant forum where diverse perspectives converge to accelerate the future of embodied intelligence.
            </p>
          </div>
        </section>

        {/* Promising Topics */}
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4">Promising Topics</h2>
          <div className="text-slate-700 space-y-4 leading-relaxed mb-6">
            <p>
              We invite submissions presenting novel research advances, empirical studies, theoretical insights, and benchmark contributions that address core machine learning and robotics challenges in dexterous manipulation and contact-rich embodied interaction.
            </p>
            <p>
              Topics of interest include, but are not limited to:
            </p>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            {topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </section>

        {/* Call for papers */}
        <section>
          <div className="flex justify-between items-end border-b-2 border-slate-200 pb-2 mb-4">
            <h2 className="text-2xl font-bold">Call for Papers</h2>
            <button
              disabled
              title="Submissions open on March 20th"
              className="bg-slate-300 text-white text-sm font-semibold py-2 px-4 rounded-lg cursor-not-allowed shadow-sm mb-1"
            >
              Submit
            </button>
          </div>
          <div className="text-slate-700 space-y-4 leading-relaxed">
            <p>
              We invite submissions of extended abstracts of up to 4 pages (excluding references) on topics related to machine learning for humanoid robotics, including multimodal learning, dexterous manipulation, planning, control, and embodied intelligence. We welcome mature research, work in progress, negative results, position papers, benchmark proposals, system papers, and open challenges. Submissions may describe work that is ongoing, recently published, or under review elsewhere. Accepted papers will be presented as posters, demos, or contributed talks and will be hosted on the workshop website without formal archival publication. All submissions must follow the official formatting guidelines and will undergo double-blind review. Supplementary materials, including code, datasets, videos, and appendices, may be submitted optionally.
            </p>
          </div>
        </section>

        {/* Important Information */}
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4">Important Information</h2>
          <div className="text-slate-700 space-y-4 leading-relaxed mb-6">
            <p>The final dates and author instructions will be announced soon</p>
          </div>
          <table className="min-w-full divide-y divide-slate-200">
            <tbody className="bg-white divide-y divide-slate-200 text-sm">
              <tr className="bg-slate-50">
                <td className="px-6 py-3 font-medium text-slate-900">Paper Submissions Open</td>
                <td className="px-6 py-3 font-medium text-slate-900">TBD</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-6 py-3 font-medium text-slate-900">Submission Deadline</td>
                <td className="px-6 py-3 font-medium text-slate-900">TBD</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-6 py-3 font-medium text-slate-900">Acceptance Notification</td>
                <td className="px-6 py-3 font-medium text-slate-900">TBD</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-6 py-3 font-medium text-slate-900">Camera Ready Deadline</td>
                <td className="px-6 py-3 font-medium text-slate-900">TBD</td>
              </tr>
            </tbody>
          </table>
        </section>


        <section id="speakers">
          <div className="flex justify-between items-end border-b-2 border-slate-200 pb-2 mb-8">
            <h2 className="text-2xl font-bold">Confirmed Speakers</h2>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdD0QcQhnkvSv4wjp4P8El8bXxulrHFdlU9CUrqixH1GElx1w/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors shadow-sm mb-1"
            >
              Apply
            </a>
          </div>

          <p className="mb-8 text-slate-600">The full list of Speakers, Panelists, Guests, and Sponsors will be announced soon.</p>
          {/* Speaker 1: Yuki NOGUCHI */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-32 h-32 flex-shrink-0 rounded-xl bg-slate-100 overflow-hidden shadow-sm">
              <img src={yukiNoguchi} alt="Yuki NOGUCHI" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Yuki NOGUCHI</h3>
                  <p className="text-slate-600 font-medium">Kawada Robotics Corporation / Japan Advanced Institute of Science and Technology</p>
                </div>
                <a href='https://www.linkedin.com/in/yuki-noguchi-4baa1032a/' target='_blank' className="text-blue-600 hover:underline text-sm font-medium">LinkedIn</a>
              </div>
              <div className="mt-4">
                <h4 className="font-bold text-slate-800 italic text-lg">"Bridging Industrial Precision and Social Interaction: Lessons from NEXTAGE Deployment in a Robot Cafe."</h4>
                <p className="mt-2 text-slate-700 leading-relaxed">
                  In this talk, I will share technical insights from developing the dual-arm robot "NEXTAGE" and its real-world application at "Robot Cafe Hare-to-Ke." I will discuss the challenges of transitioning from controlled industrial environments to unpredictable social settings, focusing on multimodal integration, safety, and the "dexterous" nuances required for human-robot collaboration.
                </p>
              </div>
            </div>
          </div>

          {/* Speaker 2: Sharan Nayak */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-32 h-32 flex-shrink-0 rounded-xl bg-slate-100 overflow-hidden shadow-sm">
              <img src={sharanNayak} alt="Sharan Nayak" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Sharan Nayak</h3>
                  <p className="text-slate-600 font-medium">Unewverse Inc. (Ooju) / University of Maryland</p>
                </div>
                <a href='https://www.linkedin.com/in/sharan-nayak' target='_blank' className="text-blue-600 hover:underline text-sm font-medium">LinkedIn</a>
              </div>
              <div className="mt-4">
                <h4 className="font-bold text-slate-800 italic text-lg">"Training robots through human demonstrations using XR devices"</h4>
                <p className="mt-2 text-slate-700 leading-relaxed">
                  In this talk, we present a scalable data infrastructure for embodied intelligence built on real-world interaction capture. We argue that generalization in robotics is fundamentally limited by insufficient diversity and structure in existing datasets.
                </p>
              </div>
            </div>
          </div>

          {/* Speaker 3: Seonil Son */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-32 h-32 flex-shrink-0 rounded-xl bg-slate-100 overflow-hidden shadow-sm">
              <img src={seonilSon} alt="Seonil Son" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Seonil Son</h3>
                  <p className="text-slate-600 font-medium">RLWRLD / Seoul National University</p>
                </div>
                <a href='https://www.linkedin.com/in/deftson/' target='_blank' className="text-blue-600 hover:underline text-sm font-medium">LinkedIn</a>
              </div>
              <div className="mt-4">
                <h4 className="font-bold text-slate-800 italic text-lg">"Skin in the Game: Exploring Contact Sensing for RL in Dexterous VLAs"</h4>
                <p className="mt-2 text-slate-700 leading-relaxed">
                  Dexterous manipulation fundamentally depends on contact—yet most VLA policies remain "numb," relying on vision and position based states alone. We share our experience fusing tactile and torque signals into VLA policies, and discuss how these contact-rich signals can help tackle sample efficiency challenges for real-world reinforcement learning (RL) applied to dexterous manipulation.
                </p>
              </div>
            </div>
          </div>

          {/* Speaker 1: Dr. Alexander Schmitz */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-32 h-32 flex-shrink-0 rounded-xl bg-slate-100 overflow-hidden shadow-sm">
              <img src={alexanderSchmitz} alt="Dr. Alexander Schmitz" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Dr. Alexander Schmitz</h3>
                  <p className="text-slate-600 font-medium">XELA Robotics / Waseda University</p>
                </div>
                <a href='https://www.linkedin.com/in/schmitz-alexander/' target='_blank' className="text-blue-600 hover:underline text-sm font-medium">LinkedIn</a>
              </div>
              <div className="mt-4">
                <h4 className="font-bold text-slate-800 italic text-lg">"Tactile Sensing for Adaptive Dexterous Manipulation"</h4>
                <p className="mt-2 text-slate-700 leading-relaxed">
                  In this talk, we present how tactile sensing enables robust and adaptive dexterous manipulation in real-world environments. Fine manipulation tasks—such as in-hand reorientation, precision grasping, and deformable object handling—require continuous feedback at the point of contact. Vision alone is insufficient to capture micro-contact dynamics, slip events, and force distribution.
                </p>
              </div>
            </div>
          </div>

        </section>

        {/*Organizers */}
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-8">Organizers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-8">

            <div className="text-center group">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-slate-300 flex items-center justify-center border-2 border-transparent group-hover:border-blue-400 transition-colors overflow-hidden">
                <img src={pavelNiImg} alt="Pavel Ni" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-slate-900 leading-tight">Pavel Ni, Ph.D.</h3>
              <p className="text-sm text-slate-800 mt-1">Gwangju Institute of Science and Technology</p>
              <p className="text-sm text-slate-500 mt-1">NextMetal</p>
              <a href='https://www.linkedin.com/in/pavel-ni/' target='_blank' className="text-blue-600 hover:underline text-sm font-medium">LinkedIn</a>
            </div>

            <div className="text-center group">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-slate-300 flex items-center justify-center border-2 border-transparent group-hover:border-blue-400 transition-colors overflow-hidden">
                <img src={zhengtongXu} alt="Zhengtong Xu" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-slate-900 leading-tight">Zhengtong Xu</h3>
              <p className="text-sm text-slate-800 mt-1">Purdue University</p>
              <p className="text-sm text-slate-500 mt-1"> - </p>
              <a href='https://www.linkedin.com/in/zhengtong-xu-4287b8174/' target='_blank' className="text-blue-600 hover:underline text-sm font-medium">LinkedIn</a>
            </div>

            <div className="text-center group">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-slate-300 flex items-center justify-center border-2 border-transparent group-hover:border-blue-400 transition-colors overflow-hidden">
                <img src={seungchanLee} alt="Seungchan Lee" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-slate-900 leading-tight">Seungchan Lee, Ph.D.</h3>
              <p className="text-sm text-slate-800 mt-1">Korea Institute of Machinery & Materials</p>
              <p className="text-sm text-slate-500 mt-1"> - </p>
              <a href='https://www.linkedin.com/in/lee-seungchan-9826bba7' target='_blank' className="text-blue-600 hover:underline text-sm font-medium">LinkedIn</a>
            </div>

            <div className="text-center group">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-slate-300 flex items-center justify-center border-2 border-transparent group-hover:border-blue-400 transition-colors overflow-hidden">
                <img src={jehyukJang} alt="Jehyuk Jang" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-slate-800 leading-tight">Jehyuk Jang, Ph.D.</h3>
              <p className="text-sm text-slate-800 mt-1">Tokamak Network</p>
              <p className="text-sm text-slate-500 mt-1"> . </p>
              <a href='https://www.linkedin.com/in/jehyuk-jang/' target='_blank' className="text-blue-600 hover:underline text-sm font-medium">LinkedIn</a>
            </div>

            <div className="text-center group">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-slate-300 flex items-center justify-center border-2 border-transparent group-hover:border-blue-400 transition-colors overflow-hidden">
                <img src={jusungKang} alt="JuSung Kang" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-slate-800 leading-tight">JuSung Kang, Ph.D.</h3>
              <p className="text-sm text-slate-800 mt-1">ETRI</p>
              <p className="text-sm text-slate-500 mt-1"> . </p>
              <a href='https://www.linkedin.com/in/jusung-kang-41343467/' target='_blank' className="text-blue-600 hover:underline text-sm font-medium">LinkedIn</a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-8">Technical Committee</h2>
          <p className="mb-8 text-slate-600">We are actively seeking members to join the Technical Committee. The full list will be announced soon.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-8">
            <div className="text-center group">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-slate-300 flex items-center justify-center border-2 border-transparent group-hover:border-blue-400 transition-colors overflow-hidden">
                <img src={changjooNam} alt="Changjoo Nam" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-slate-900 leading-tight">Changjoo Nam, Professor</h3>
              <p className="text-sm text-slate-800 mt-1">Sogang University</p>
              <p className="text-sm text-slate-500 mt-1">AI Robotics Lab</p>
              <a href='https://sites.google.com/site/changjoonam/' target='_blank' className="text-blue-600 hover:underline text-sm font-medium">Website</a>
            </div>

            <div className="text-center group">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-slate-300 flex items-center justify-center border-2 border-transparent group-hover:border-blue-400 transition-colors overflow-hidden">
                <img src={christinaPiazza} alt="Cristina Piazza" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-slate-800 leading-tight">Cristina Piazza, Professor</h3>
              <p className="text-sm text-slate-800 mt-1">Technical University of Munich</p>
              <p className="text-sm text-slate-500 mt-1"> . </p>
              <a href='https://www.professoren.tum.de/piazza-cristina' target='_blank' className="text-blue-600 hover:underline text-sm font-medium">LinkedIn</a>
            </div>

            <div className="text-center group">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-slate-300 flex items-center justify-center border-2 border-transparent group-hover:border-blue-400 transition-colors overflow-hidden">
                <img src={shinYounghak} alt="YoungHak Shin" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-slate-800 leading-tight">YoungHak Shin, Professor</h3>
              <p className="text-sm text-slate-800 mt-1">Mokpo National University</p>
              <p className="text-sm text-slate-500 mt-1"> . </p>
              <a href='https://www.linkedin.com/in/younghak-shin-6b2542157/' target='_blank' className="text-blue-600 hover:underline text-sm font-medium">LinkedIn</a>
            </div>


          </div>
        </section>

        {/* Sponsors */}
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4">Sponsors</h2>
          <p className="text-slate-700 leading-relaxed">
            We are seeking sponsors to support paper awards, job fair, and the overall organization of the workshop. Your support will help us recognize outstanding research while ensuring a high-quality and inclusive event experience.
          </p>
        </section>

        {/* Inquiries */}
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4">
            Inquiries
          </h2>

          <p className="text-slate-700 leading-relaxed">
            For any questions or inquiries, please contact the workshop organizers at:
          </p>

          <ul className="list-disc pl-6 mt-2 text-slate-700">
            <li>nipavels [at] gmail . com</li>
            <li>chans [at] kimm . re . kr</li>
          </ul>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-100 border-t border-slate-200 py-8 px-4 text-center text-slate-500 text-sm">
        &copy; 2027 ICRA Workshop: Multimodal Representation Learning for Dexterous Manipulation
      </footer>
    </div>
  );
};

export default App;
