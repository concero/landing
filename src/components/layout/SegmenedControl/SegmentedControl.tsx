import classNames from './SegmentedControl.module.pcss'

export enum Segment {
  '2023' = 0,
  '2024' = 1,
}

export function SegmentedControl({ selectedSegment, setSelectedSegment }) {
  return (
    <div className={classNames.container}>
      <button onClick={() => setSelectedSegment(Segment['2023'])}>
        <p className={`${classNames.segment} ${selectedSegment === Segment['2023'] ? classNames.active : ''}`}>2023</p>
      </button>
      <button onClick={() => setSelectedSegment(Segment['2024'])}>
        <p className={`${classNames.segment} ${selectedSegment === Segment['2024'] ? classNames.active : ''}`}>2024</p>
      </button>
    </div>
  )
}
