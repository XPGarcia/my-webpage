import mixpanel from '@/config/mixpanel';
import StatisticHandler from '@/domain/contracts/statistic-handler';
import { Project } from '@/domain/entities';

export default class MixpanelStatisticHandler implements StatisticHandler {
  private static instance: StatisticHandler;

  static getInstance(): StatisticHandler {
    if (!this.instance) {
      this.instance = new MixpanelStatisticHandler();
    }
    return this.instance;
  }

  onProjectOpened(project: Project): void {
    mixpanel.track('Project opened', {
      project: project.projectName
    });
  }

  onAboutPageOpened(): void {
    mixpanel.track('About page opened');
  }
}
