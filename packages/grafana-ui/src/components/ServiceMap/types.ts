import { SimulationNodeDatum, SimulationLinkDatum } from 'd3-force';

export type NodeDatum = SimulationNodeDatum & {
  id: string;
  title: string;
  subTitle: string;
  dataFrameRowIndex: number;
  incoming: number;
  mainStat: string;
  secondaryStat: string;
  arcSections: Array<{
    value: number;
    color: string;
  }>;
};
export type LinkDatum = SimulationLinkDatum<NodeDatum> & {
  mainStat: string;
  secondaryStat: string;
  dataFrameRowIndex: number;
};
