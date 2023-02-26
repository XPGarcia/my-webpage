import { Skill } from '@/interfaces/skill';

type SkillKey =
  | 'javascript'
  | 'typescript'
  | 'angular'
  | 'react'
  | 'html&css'
  | 'nodejs'
  | 'php'
  | 'sql'
  | 'firebase'
  | 'aws'
  | 'godot'
  | 'docker';

export const skills: Record<SkillKey, Skill> = {
  javascript: {
    name: 'javascript',
    percentage: 90
  },
  typescript: {
    name: 'typescript',
    percentage: 80
  },
  angular: {
    name: 'angular',
    percentage: 80
  },
  react: {
    name: 'react',
    percentage: 60
  },
  'html&css': {
    name: 'html & css',
    percentage: 75
  },
  nodejs: {
    name: 'nodejs',
    percentage: 60
  },
  php: {
    name: 'php',
    percentage: 50
  },
  sql: {
    name: 'sql',
    percentage: 80
  },
  firebase: {
    name: 'firebase',
    percentage: 50
  },
  godot: {
    name: 'godot',
    percentage: 40
  },
  aws: {
    name: 'aws',
    percentage: 40
  },
  docker: {
    name: 'docker',
    percentage: 40
  }
};
