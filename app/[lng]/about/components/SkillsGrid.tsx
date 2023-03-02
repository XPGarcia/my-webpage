import { Skill } from '@/domain/entities';
import SkillGraph from './SkillGraph';

interface Props {
  skills: Skill[];
}

export default function SkillsGrid({ skills }: Props) {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 md:px-8'>
      {skills.map((skill) => (
        <div key={skill.name} className='px-4 mb-4'>
          <SkillGraph skill={skill} />
        </div>
      ))}
    </div>
  );
}
