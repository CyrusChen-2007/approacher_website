
import React, { useState } from 'react';
import { Section } from './components/Section';
import { BrutalistButton } from './components/BrutalistButton';
import { Marquee } from './components/Marquee';
import { Logo } from './components/Logo';
import { CONTENT, ICONS } from './constants';
import { Language } from './types';
import { Info, MapPin, Coffee, AlertTriangle, BookOpen } from 'lucide-react';

const App = () => {
  const [selectedClub, setSelectedClub] = useState<string | null>(null);
  const [votes, setVotes] = useState({ hotdog: 142, sandwich: 118 });
  const [hasVoted, setHasVoted] = useState(false);
  const [lang, setLang] = useState<Language>('en');

  const content = CONTENT[lang];

  const handleClubClick = (clubId: string) => {
    setSelectedClub(clubId);
    
    // Smooth scroll to the details if they appear below visible area
    setTimeout(() => {
      const element = document.getElementById('club-details');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 100);
  };

  const handleVote = (option: 'hotdog' | 'sandwich') => {
    if (hasVoted) return;
    setVotes(prev => ({ ...prev, [option]: prev[option] + 1 }));
    setHasVoted(true);
  };

  const selectedClubData = content.clubs.find(c => c.id === selectedClub);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white border-b-2 border-black flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          {/* <Logo className="h-8 w-8" color="black" /> */}
          <img src="public/images/2.svg" alt="Decorative Logo" className="h-12 w-12" />
          <h1 className="text-2xl font-black tracking-tighter uppercase hidden sm:block">Approacher<span className="text-[#FF3B30]">.Studio</span></h1>
        </div>
        
        <div className="hidden md:flex gap-4">
          {[
            { id: 'hub', label: content.nav.hub },
            { id: 'manifesto', label: content.nav.manifesto },
            { id: 'artifacts', label: content.nav.artifacts },
            { id: 'wardrobe', label: content.nav.wardrobe },
            { id: 'ops', label: content.nav.ops }
          ].map(item => (
             <a key={item.id} href={`#${item.id}`} className="font-mono text-sm uppercase hover:underline decoration-2 underline-offset-4">
               {item.label}
             </a>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <div className="font-mono text-xs border border-black px-2 py-1 bg-[#F0F0F0] hidden sm:block">
            <span className="w-2 h-2 inline-block bg-[#0047BB] rounded-full mr-2 animate-pulse"></span>
            {content.nav.sys}
          </div>
          <button 
            onClick={() => setLang(prev => prev === 'en' ? 'zh' : 'en')}
            className="font-mono text-xs font-bold border-2 border-black px-3 py-1 bg-white hover:bg-black hover:text-white transition-colors uppercase"
          >
            {lang === 'en' ? '中 / EN' : 'EN / 中'}
          </button>
        </div>
      </header>

      <Marquee text={content.hero.marquee} speed={30} />

      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <Section id="hub" className="border-b-2 border-black p-0" noPadding>
           <div className="flex flex-col md:flex-row min-h-[85vh] w-full">
             {/* LEFT: THE HOOK */}
             <div className="w-full md:w-2/3 bg-white relative flex flex-col justify-center p-8 md:p-12 lg:p-20 border-r-2 border-black overflow-hidden">
                {/* Decorative Background Grid */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-black text-white font-mono text-xs px-3 py-1 mb-6 uppercase tracking-widest w-fit">
                     <div className="w-2 h-2 bg-[#FF3B30] rounded-full animate-pulse"></div>
                     {content.hero.welcome}
                  </div>

                  <h2 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                    <span className="block">{content.hero.headline.where}</span>
                    <span className="block text-[#0047BB]">{content.hero.headline.ideas}</span>
                    <span className="block text-[#FF3B30]">{content.hero.headline.collide}</span>
                  </h2>
                  
                  <p className="font-mono text-lg md:text-xl max-w-lg leading-relaxed border-l-4 border-black pl-6 mb-10 text-gray-800">
                    {content.hero.subHeadline} <br/>
                    <span className="bg-[#FF3B30] text-white px-1 font-bold mt-2 inline-block">{content.hero.cta}</span>
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <BrutalistButton onClick={() => document.getElementById('manifesto')?.scrollIntoView({behavior: 'smooth'})}>
                      {content.hero.buttonEnter}
                    </BrutalistButton>
                    <BrutalistButton variant="outline" onClick={() => document.getElementById('artifacts')?.scrollIntoView({behavior: 'smooth'})}>
                      {content.hero.buttonArtifacts}
                    </BrutalistButton>
                  </div>
                </div>

                {/* Decorative Watermark Logo */}
                <div className="absolute right-[-250px] bottom-[-280px] opacity-10 pointer-events-none hidden lg:block z-0">
                   <img src="public/images/2.svg" alt="Decorative Logo" className="h-[900px] w-[900px]" />
                   
                </div>
             </div>
             
             {/* RIGHT: THE WHITEBOARD / POLL */}
             <div className="w-full md:w-1/3 bg-[#F0F0F0] p-8 flex flex-col border-t-2 md:border-t-0 border-black relative justify-center">
                
                <div className="w-full max-w-md mx-auto relative z-10">
                  <div className="bg-white border-2 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
                     {/* Sticker */}
                     <div className="absolute -top-3 -right-3 bg-[#FF3B30] text-white font-mono text-xs px-2 py-1 border border-black transform rotate-3 z-10">
                       {content.poll.tag}
                     </div>

                     <div className="flex items-center gap-2 mb-6 border-b-2 border-black pb-4">
                       <AlertTriangle size={24} />
                       <h3 className="font-bold uppercase tracking-wide text-lg">{content.poll.title}</h3>
                     </div>
                     
                     <p className="text-3xl font-black uppercase mb-8 leading-none">
                       {content.poll.question}
                     </p>
                     
                     <div className="space-y-6">
                       {/* Option A */}
                       <button 
                         onClick={() => handleVote('hotdog')}
                         disabled={hasVoted}
                         className="w-full text-left group"
                       >
                         <div className="flex justify-between font-mono text-sm mb-1 font-bold">
                           <span>{content.poll.optionA}</span>
                           <span>{Math.round((votes.hotdog / (votes.hotdog + votes.sandwich)) * 100)}%</span>
                         </div>
                         <div className="h-12 w-full border-2 border-black bg-white relative hover:bg-gray-50 transition-colors">
                            <div 
                              className="h-full bg-[#FF3B30] transition-all duration-500 ease-out flex items-center pl-2 text-white font-bold"
                              style={{ width: `${(votes.hotdog / (votes.hotdog + votes.sandwich)) * 100}%` }}
                            >
                            </div>
                            {!hasVoted && (
                              <div className="absolute inset-0 flex items-center justify-end pr-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="font-mono text-xs font-bold uppercase text-black bg-white px-1 border border-black">{content.poll.voteA}</span>
                              </div>
                            )}
                         </div>
                       </button>

                       {/* Option B */}
                       <button 
                         onClick={() => handleVote('sandwich')}
                         disabled={hasVoted}
                         className="w-full text-left group"
                       >
                          <div className="flex justify-between font-mono text-sm mb-1 font-bold">
                           <span>{content.poll.optionB}</span>
                           <span>{Math.round((votes.sandwich / (votes.hotdog + votes.sandwich)) * 100)}%</span>
                         </div>
                         <div className="h-12 w-full border-2 border-black bg-white relative hover:bg-gray-50 transition-colors">
                            <div 
                              className="h-full bg-[#0047BB] transition-all duration-500 ease-out flex items-center pl-2 text-white font-bold"
                              style={{ width: `${(votes.sandwich / (votes.hotdog + votes.sandwich)) * 100}%` }}
                            >
                            </div>
                            {!hasVoted && (
                              <div className="absolute inset-0 flex items-center justify-end pr-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="font-mono text-xs font-bold uppercase text-black bg-white px-1 border border-black">{content.poll.voteB}</span>
                              </div>
                            )}
                         </div>
                       </button>
                     </div>
                     
                     {hasVoted && (
                       <div className="mt-6 text-center font-mono text-xs text-gray-500 border-t border-dashed border-gray-400 pt-4 whitespace-pre-wrap">
                         {content.poll.thanks}
                       </div>
                     )}
                  </div>
                </div>
             </div>
           </div>
        </Section>

        {/* MANIFESTO */}
        <Section id="manifesto" title={content.manifesto.title} subtitle={content.manifesto.subtitle} className="bg-[#0047BB] text-white">
          <div className="grid md:grid-cols-2 gap-12 text-white">
             <div>
                <h3 className="text-2xl font-bold uppercase mb-4 border-b-2 border-grey pb-2 inline-block text-black">{content.manifesto.philosophies[0].title}</h3>
                <p className="text-xl md:text-xl font-regular leading-relaxed text-black">
                  {content.manifesto.philosophies[0].desc}
                </p>
             </div>
             
             <div>
                <h3 className="text-2xl font-bold uppercase mb-4 border-b-2 border-grey pb-2 inline-block text-black">{content.manifesto.philosophies[1].title}</h3>
                <div>
                  <p className="text-xl md:text-xl font-regular mb-10 leading-relaxed text-black">
                  {content.manifesto.philosophies[1].desc0}
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-white text-black p-4 border-2 border-black rotate-[-2deg] w-1/2">
                     <div className="text-xs font-mono uppercase text-gray-500">{content.manifesto.philosophies[1].desc}</div>
                     <div className="font-bold text-lg">{content.manifesto.philosophies[1].label1}</div>
                     <div className="text-sm mt-2">{content.manifesto.philosophies[1].sub1}</div>
                  </div>
                  <div className="bg-[#FF3B30] text-white p-4 border-2 border-black rotate-[2deg] w-1/2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                     <div className="text-xs font-mono uppercase text-white/80">{content.manifesto.philosophies[1].desc2}</div>
                     <div className="font-bold text-lg">{content.manifesto.philosophies[1].label2}</div>
                     <div className="text-sm mt-2">{content.manifesto.philosophies[1].sub2}</div>
                  </div>
                </div>
             </div>
             <div className="md:col-span-2 mt-8 bg-black p-6 border-2 border-white">
                <h4 className="font-mono text-[#FF3B30] mb-4 uppercase">{content.manifesto.howTo.title}</h4>
                <ul className="grid md:grid-cols-3 gap-4">
                   {content.manifesto.howTo.steps.map((step, i) => (
                     <li key={i} className="flex items-start gap-3">
                        <span className="text-2xl font-black text-white">0{i+1}</span>
                        <p className="text-gray-300">{step}</p>
                     </li>
                   ))}
                </ul>
             </div>
          </div>
        </Section>

        {/* ARTIFACT WALL (CLUBS) */}
        <Section id="artifacts" title={content.artifacts.title} subtitle={content.artifacts.subtitle} className="p-0" noPadding>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-black gap-[2px] border-b-2 border-black">
            {content.clubs.map((club) => {
              const Icon = ICONS[club.icon] || Info;
              return (
                <div 
                  key={club.id} 
                  onClick={() => handleClubClick(club.id)}
                  className={`bg-white p-8 hover:bg-[#F0F0F0] cursor-pointer transition-colors group relative h-64 flex flex-col justify-between ${selectedClub === club.id ? 'bg-gray-100 ring-inset ring-4 ring-[#FF3B30]' : ''}`}
                >
                  <div className="flex justify-between items-start">
                     <Icon size={40} strokeWidth={1.5} />
                     <div className={`w-4 h-4 rounded-full ${club.color} border border-black`}></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black uppercase mb-2 group-hover:translate-x-1 transition-transform">{club.name}</h3>
                    <p className="font-mono text-sm text-gray-600">{club.shortDesc}</p>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity font-bold text-xs uppercase bg-black text-white px-2 py-1">
                    {content.artifacts.inspect}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dynamic Content Area for Clubs */}
          {selectedClubData && (
            <div id="club-details" className="bg-[#F0F0F0] p-0 border-b-2 border-black animate-in fade-in slide-in-from-top-4 duration-300">
               <div className="w-full bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] m-4 md:m-8 max-w-[calc(100%-2rem)] md:max-w-[calc(100%-4rem)] flex flex-col md:flex-row">
                 
                 {/* Left Column: Text Info */}
                 <div className="p-8 md:w-1/2 flex flex-col justify-between order-2 md:order-1">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                          <h3 className="text-3xl md:text-5xl font-black uppercase leading-none">
                            {selectedClubData.name}
                          </h3>
                      </div>
                      <div className="inline-block bg-[#FF3B30] text-white px-2 py-1 font-mono text-sm font-bold mb-6">
                        {content.artifacts.status}
                      </div>
                      
                      <p className="font-mono text-lg leading-relaxed mb-8 border-l-4 border-black pl-4">
                        {selectedClubData.fullDesc}
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <BrutalistButton variant="primary">{content.artifacts.buttonJoin}</BrutalistButton>
                      <button onClick={() => setSelectedClub(null)} className="px-6 py-3 font-bold uppercase border-2 border-black hover:bg-gray-100">
                        {content.artifacts.buttonClose}
                      </button>
                    </div>
                 </div>

                 {/* Right Column: Leader Photo */}
                 <div className="md:w-1/2 bg-gray-200 border-b-2 md:border-b-0 md:border-l-2 border-black relative overflow-hidden h-80 md:h-auto order-1 md:order-2">
                    <img 
                      src={selectedClubData.leaderImage} 
                      alt={`${selectedClubData.name} Leader`} 
                      className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute bottom-0 left-0 bg-white border-t-2 border-r-2 border-black p-3">
                      <span className="block font-black uppercase text-sm">{content.artifacts.leaderTitle}</span>
                      <span className="block font-mono text-xs text-gray-500">{content.artifacts.leaderSub}</span>
                    </div>
                 </div>

               </div>
            </div>
          )}

          <div className="bg-black text-white p-4 flex justify-between items-center">
             <span className="font-mono uppercase">{content.artifacts.archive}</span>
             <span className="font-mono text-xs">{content.artifacts.files}</span>
          </div>
        </Section>

        {/* WARDROBE */}
        <Section id="wardrobe" title={content.wardrobe.title} subtitle={content.wardrobe.subtitle} >
          <p className="mb-8 font-mono max-w-2xl">
            {content.wardrobe.desc}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
             {content.residents.map((resident) => {
               return (
                 <div key={resident.id} className="relative group flex flex-col items-center">
                    <div className="bg-gray-100 w-full aspect-[3/4] border-2 border-black flex items-center justify-center overflow-hidden relative group-hover:border-[#FF3B30] transition-colors">
                       <img 
                         src={resident.garmentImage} 
                         alt={`${resident.name}'s outfit`}
                         className="w-full h-full object-cover contrast-125 transition-all duration-500"
                       />
                    </div>
                    
                    {/* Hover Card */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-20">
                       <h4 className="font-black text-lg uppercase">{resident.name}</h4>
                       <p className="text-xs font-mono text-gray-600 mb-2">{resident.major}</p>
                       <div className="text-xs border-t border-black pt-2 mb-2">
                          {content.wardrobe.card.affiliation}: <span className="font-bold">{content.clubs.find(c => c.id === resident.clubId)?.name}</span>
                       </div>
                       <p className="text-sm italic font-serif">"{resident.motto}"</p>
                    </div>
                 </div>
               );
             })}
          </div>
        </Section>

        {/* ROOM OPS */}
        <Section id="ops" title={content.ops.title} className="bg-[#F0F0F0]">
           <div className="grid md:grid-cols-3 gap-8">
              {content.ops.rules.map((rule) => (
                <div key={rule.id} className="bg-white border-2 border-black p-6">
                   <div className="bg-black text-white inline-block px-2 py-1 text-xs font-mono mb-4">RULE {rule.id}</div>
                   <h4 className="text-xl font-bold uppercase mb-2">{rule.title}</h4>
                   <p className="text-gray-700">{rule.desc}</p>
                </div>
              ))}
           </div>

           <div className="mt-12">
              <h3 className="text-2xl font-black uppercase mb-6">{content.ops.team} <span className="text-sm font-normal normal-case font-mono">{content.ops.teamSub}</span></h3>
              <div className="grid md:grid-cols-3 gap-6">
                 {[
                    { id: 1, name: "Cyrus(Yujia) Chen", role: "Founder/General Operation" },
                    { id: 2, name: "Sam(Guanyun) Ding", role: "Finance Director" },
                 ].map(member => (
                   <div key={member.id} className="flex items-center gap-4 bg-white p-4 border-2 border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow">
                      <div className="w-16 h-16 bg-gray-300 rounded-full border border-black overflow-hidden shrink-0">
                          <img src={`public/images/${member.name}.jpg`} alt={member.name} className="w-full h-full object-cover hover:grayscale-0 transition-all" />
                      </div>
                      <div>
                          <h5 className="font-bold uppercase text-lg leading-none">{member.name}</h5>
                          <p className="font-mono text-xs text-gray-500 mt-1 uppercase">{member.role}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </Section>
      </main>

      {/* FOOTER */}
      <footer className="bg-black text-white border-t-2 border-black">
         <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-800 border-b border-gray-800">
            <div className="p-8">
               <div className="mb-6">
                  {/* <Logo className="w-16 h-16" color="white" /> */}
                  <img src="public/images/3.svg" alt="Decorative Logo" className="h-12 w-12" />
               </div>
               <div className="flex items-center gap-2 mb-4 text-[#FF3B30]">
                  <MapPin />
                  <span className="font-bold uppercase">{content.footer.location}</span>
               </div>
               <p className="font-mono whitespace-pre-line">{content.footer.locationDesc}</p>
            </div>
            <div className="p-8">
               <div className="flex items-center gap-2 mb-4 text-[#0047BB]">
                  <Coffee />
                  <span className="font-bold uppercase">{content.footer.status}</span>
               </div>
               <p className="font-mono text-2xl animate-pulse">{content.footer.statusDesc}</p>
               <p className="text-xs text-gray-500 mt-2">{content.footer.lastUpdate}</p>
            </div>
            <div className="p-8">
               <div className="flex items-center gap-2 mb-4 text-white">
                  <BookOpen />
                  <span className="font-bold uppercase">{content.footer.connect}</span>
               </div>
               <div className="flex flex-col gap-2 font-mono underline decoration-[#FF3B30]">
                  {content.footer.links.map(link => (
                    <a key={link} href="#" className="hover:text-[#FF3B30]">{link}</a>
                  ))}
               </div>
            </div>
         </div>
         <div className="p-4 text-center font-mono text-xs text-gray-500">
            © {new Date().getFullYear()} {content.footer.copyright}
         </div>
      </footer>
    </div>
  );
};

export default App;
