import classNames from './SegmentedControl.module.pcss'

export enum Segment {
  '2023' = 0,
  '2024' = 1,
}

export function SegmentedControl({ selectedSegment, setSelectedSegment }) {
  return (
    <div className={classNames.container}>
      <button
        className={`${classNames.segment} ${selectedSegment === Segment['2023'] ? classNames.active : ''}`}
        onClick={() => setSelectedSegment(Segment['2023'])}
      >
        2023
      </button>
      <button
        className={`${classNames.segment} ${selectedSegment === Segment['2024'] ? classNames.active : ''}`}
        onClick={() => setSelectedSegment(Segment['2024'])}
      >
        2024
      </button>
    </div>
  )
}
