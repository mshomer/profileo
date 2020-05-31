import { Project } from '../projects/project.model';

export interface ResumeItem {
  date: string;
  title: string;
  subTitle?: string;
  paragraphs?: Parapgraph[];
  projects?: Project[];
}

export interface Parapgraph {
  value: string;
  paragraphs?: Parapgraph[];
}
