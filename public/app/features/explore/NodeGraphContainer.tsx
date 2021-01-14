import React from 'react';
import { NodeGraph } from '@grafana/ui';
import { DataFrame, TimeRange } from '@grafana/data';
import { ExploreId, StoreState } from '../../types';
import { splitOpen } from './state/main';
import { connect } from 'react-redux';
import { Collapse } from '@grafana/ui';
import { useLinks } from './utils/links';

interface Props {
  // Edges and Nodes are separate frames
  dataFrames: DataFrame[];
  exploreId: ExploreId;
  range: TimeRange;
  splitOpen: typeof splitOpen;
  short?: boolean;
}
export function UnconnectedNodeGraphContainer(props: Props) {
  const { dataFrames, range, splitOpen, short } = props;
  const getLinks = useLinks(range, splitOpen);

  return (
    <div style={{ height: short ? 300 : 600 }}>
      <Collapse label="Service Map" isOpen>
        <NodeGraph dataFrames={dataFrames} getLinks={getLinks} />
      </Collapse>
    </div>
  );
}

function mapStateToProps(state: StoreState, { exploreId }: { exploreId: ExploreId }) {
  return {
    range: state.explore[exploreId].range,
  };
}

const mapDispatchToProps = {
  splitOpen,
};

export const NodeGraphContainer = connect(mapStateToProps, mapDispatchToProps)(UnconnectedNodeGraphContainer);