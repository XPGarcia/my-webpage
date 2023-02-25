'use client';

import { useEffect, useState } from 'react';
import styles from './Skill.module.css';

interface Props {
  skill: string;
  percentage: number;
}

export default function SkillGraph({ skill, percentage }: Props) {
  // 283 => Length of the arc = 2*pi*r (where r = 45)
  const FULL_DASH_ARRAY = 283;
  const [strokeDasharray, setStrokeDasharray] = useState(`0 ${FULL_DASH_ARRAY}`);

  useEffect(() => {
    const interval = setInterval(() => {
      const totalStrokeDasharray = `${Math.ceil(
        (FULL_DASH_ARRAY * percentage) / 100
      ).toString()} ${FULL_DASH_ARRAY.toString()}`;
      setStrokeDasharray(totalStrokeDasharray);
    }, 500);
    return () => clearInterval(interval);
  }, [strokeDasharray, percentage]);

  return (
    <div className='flex flex-col'>
      <div className={styles['base-timer']}>
        <svg
          className={styles['base-timer__svg']}
          viewBox='0 0 100 100'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g className={styles['base-timer__circle']}>
            <circle className={styles['base-timer__path-elapsed']} cx='50' cy='50' r='45' />
            <path
              id='base-timer-path-remaining'
              strokeDasharray={strokeDasharray}
              className={`${styles['base-timer__path-remaining']} stroke-red-500`}
              d='
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
              '
            />
          </g>
        </svg>
        <span id='base-timer-label' className={styles['base-timer__label'] + ' text-white'}>
          {percentage.toString()}%
        </span>
      </div>
      <h3 className='text-white font-semibold text-center mt-2 uppercase'>{skill}</h3>
    </div>
  );
}
