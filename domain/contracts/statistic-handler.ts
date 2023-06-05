import { Project } from '../entities';

export default interface StatisticHandler {
  onProjectOpened(project: Project): void;
  onAboutPageOpened(): void;
}
