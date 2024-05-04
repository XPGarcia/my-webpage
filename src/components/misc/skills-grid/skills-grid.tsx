import { Skill } from '@/src/types';
import { SkillGraph } from './skill-graph';

interface Props {
  skills: Skill[];
}

export const SkillsGrid = ({ skills }: Props) => {
  const sortedSkills = skills.sort((a, b) => b.percentage - a.percentage);

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 md:px-8'>
      {sortedSkills.map((skill) => (
        <div key={skill.name} className='px-4 mb-4'>
          <SkillGraph skill={skill} />
        </div>
      ))}
    </div>
  );
};
