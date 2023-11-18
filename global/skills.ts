import { Skill } from '@/domain/entities/skill';

type SkillKey =
  | 'javascript'
  | 'typescript'
  | 'angular'
  | 'react'
  | 'html&css'
  | 'nodejs'
  | 'nextjs'
  | 'laravel'
  | 'vue'
  | 'php'
  | 'sql'
  | 'firebase'
  | 'aws'
  | 'godot'
  | 'docker'
  | 'tailwindcss'
  | 'nuxt';

export const skills: Record<SkillKey, Skill> = {
  javascript: {
    name: 'javascript',
    percentage: 90
  },
  typescript: {
    name: 'typescript',
    percentage: 80
  },
  vue: {
    name: 'vue',
    percentage: 70
  },
  angular: {
    name: 'angular',
    percentage: 60
  },
  react: {
    name: 'react',
    percentage: 60
  },
  'html&css': {
    name: 'html & css',
    percentage: 80
  },
  tailwindcss: {
    name: 'Tailwind CSS',
    percentage: 70
  },
  laravel: {
    name: 'laravel',
    percentage: 70
  },
  php: {
    name: 'php',
    percentage: 70
  },
  nodejs: {
    name: 'nodejs',
    percentage: 60
  },
  nextjs: {
    name: 'next.js',
    percentage: 60
  },
  nuxt: {
    name: 'nuxt',
    percentage: 70
  },
  sql: {
    name: 'sql',
    percentage: 80
  },
  aws: {
    name: 'aws',
    percentage: 70
  },
  firebase: {
    name: 'firebase',
    percentage: 50
  },
  godot: {
    name: 'godot',
    percentage: 40
  },
  docker: {
    name: 'docker',
    percentage: 50
  }
};
