import { Card } from '../../cards/Card/Card'
import classNames from './RoadmapBlock.module.pcss'
import { BlackCardHeader } from '../../cards/BlackCard/BlackCardHeader'
import { BlackCard } from '../../cards/BlackCard/BlackCard'
import { Segment, SegmentedControl } from '../../layout/SegmenedControl/SegmentedControl'
import { useState } from 'react'

interface RoadMapCardProps {
  year: string
  quarter: string
  listItems: string[]
}

function RoadMapCard({ year, quarter, listItems }: RoadMapCardProps) {
  return (
    <Card className={classNames.roadmapCardContainer}>
      <div className={classNames.headerWrapper}>
        <div className={classNames.cardHeader}>
          <h2 className={classNames.title}>{quarter}</h2>
          <h2 className={classNames.title}>{year}</h2>
        </div>
      </div>
      <div className={classNames.itemsContainer}>
        {listItems.map((item, index) => (
          <div key={index.toString()} className={classNames.itemContainer}>
            <div className={classNames.dot} />
            <p className={`${classNames.itemText}`}>{item}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}

const items_24 = [
  {
    year: '‘24',
    quarter: 'Q1',
    listItems: ['Yield Compounding', 'Gasless Transactions', 'Web3Auth', 'P2P Announcement'],
  },
  {
    year: '‘24',
    quarter: 'Q2',
    listItems: ['Explore Page', 'On/Off ramping', 'Copy Trading'],
  },
  {
    year: '‘24',
    quarter: 'Q3',
    listItems: [
      'Publish P2P findings and paper ',
      'Stage 1 full release',
      'Stage 2 MVP ',
      'Stage 3 Dev begin',
      'Mobile App Public Beta',
      'Series A start',
    ],
  },
  {
    year: '‘24',
    quarter: 'Q4',
    listItems: ['Stage 2 full release', 'Stage 3 testnet', 'Mobile App release'],
  },
]

export function RoadmapBlock() {
  const [selectedSegment, setSelectedSegment] = useState(Segment['2023'])

  return (
    <div className={classNames.container}>
      <BlackCard>
        <BlackCardHeader title={'Roadmap'}>
          <SegmentedControl selectedSegment={selectedSegment} setSelectedSegment={setSelectedSegment} />
        </BlackCardHeader>
        <div className={classNames.roadMapCardsContainer}>
          <div className={classNames.line}>
            <RoadMapCard year={items_24[0].year} quarter={items_24[0].quarter} listItems={items_24[0].listItems} />
            <RoadMapCard year={items_24[1].year} quarter={items_24[1].quarter} listItems={items_24[1].listItems} />
          </div>
          <div className={classNames.line}>
            <RoadMapCard year={items_24[2].year} quarter={items_24[2].quarter} listItems={items_24[2].listItems} />
            <RoadMapCard year={items_24[3].year} quarter={items_24[3].quarter} listItems={items_24[3].listItems} />
          </div>
        </div>
      </BlackCard>
    </div>
  )
}
