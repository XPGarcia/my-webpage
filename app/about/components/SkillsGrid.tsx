import Skill from './Skill';

export default function SkillsGrid() {
  const skills: { name: string; percentage: number }[] = [
    {
      name: 'javascript',
      percentage: 90
    },
    {
      name: 'typescript',
      percentage: 80
    },
    {
      name: 'angular',
      percentage: 80
    },
    {
      name: 'react',
      percentage: 60
    },
    {
      name: 'html',
      percentage: 75
    },
    {
      name: 'css',
      percentage: 75
    },
    {
      name: 'nodejs',
      percentage: 60
    },
    {
      name: 'php',
      percentage: 50
    },
    {
      name: 'mysql',
      percentage: 80
    },
    {
      name: 'python',
      percentage: 30
    }
  ];

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 md:pl-4 md:pr-8'>
      {skills.map(({ name, percentage }) => (
        <div key={name} className='px-4 mb-4'>
          <Skill skill={name} percentage={percentage} />
        </div>
      ))}
    </div>
  );
}
