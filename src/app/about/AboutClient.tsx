'use client';

import MyJurny from '@/components/custom/about/MyJurny';
import WhatIDo from '@/components/custom/about/WhatDo';
import { AboutHero } from '@/components/custom/about/AboutHero';
import SkillsCTA from '@/components/custom/skill/SkillsCTA';

export default function AboutClient() {
  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-hidden">
      <AboutHero />
      <MyJurny />
      <WhatIDo />
      <SkillsCTA />
    </div>
  );
}
