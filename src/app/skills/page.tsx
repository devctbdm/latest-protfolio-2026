import CurrentlyLearning from '@/components/custom/skill/CurrentlyLearning';
import { Skills } from '@/components/custom/skill/MySkills';
import SkillsCTA from '@/components/custom/skill/SkillsCTA';
import SkillsHero from '@/components/custom/skill/SkillsHero';
import SoftSkills from '@/components/custom/skill/SoftSkills';

const SkillsPage = () => {
  return (
    <div>
      <SkillsHero />
      <Skills />
      <SoftSkills />
      <CurrentlyLearning />
      <SkillsCTA />
    </div>
  );
};

export default SkillsPage;
