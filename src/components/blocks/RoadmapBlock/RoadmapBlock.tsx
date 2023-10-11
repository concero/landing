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
  index: number
}

const roadMapClasses = {
  0: classNames.color300,
  1: classNames.color350,
  2: classNames.color400,
  3: classNames.color450,
}

const emptyStyles = {
  0: classNames.firstEmpty,
  1: classNames.secondEmpty,
  2: classNames.thirdEmpty,
  3: classNames.fourthEmpty,
}

function RoadMapCard({ year, quarter, listItems, index }: RoadMapCardProps) {
  const isEmpty = !year
  const headerClasses = `${classNames.cardHeader} ${roadMapClasses[index]}`
  const emptyClasses = isEmpty ? emptyStyles[index] : ''

  return (
    <Card className={`${classNames.roadmapCardContainer} ${emptyClasses}`}>
      {!isEmpty ? (
        <>
          <div className={classNames.headerWrapper}>
            <div className={headerClasses}>
              <h2 className={classNames.title}>{quarter}</h2>
              <h2 className={classNames.title}>{year}</h2>
            </div>
          </div>
          <div className={classNames.itemsContainer}>
            {listItems.map((item, i) => (
              <div key={i.toString()} className={classNames.itemContainer}>
                <div className={classNames.dot} />
                <p className={`${classNames.itemText}`}>{item}</p>
              </div>
            ))}
          </div>
        </>
      ) : null}
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
      'Publish P2P findings and paper',
      'P2P Stage 1 release',
      'P2P Stage 2 testnet',
      'Mobile App Private Beta',
    ],
  },
  {
    year: '‘24',
    quarter: 'Q4',
    listItems: ['P2P Stage 2 release', 'P2P Stage 3 testnet', 'Mobile App Public Beta', 'Series A start'],
  },
]

const items_23 = [
  {},
  {},
  {},
  {
    year: '‘23',
    quarter: 'Q4',
    listItems: ['Cross-chain staking aggregator', 'Portfolio Tracker ', 'Referral programme'],
  },
]

export function RoadmapBlock() {
  const [selectedSegment, setSelectedSegment] = useState(Segment['2024'])
  const [items, setItems] = useState(items_24)

  function handleSetSelectedSegment(segment: Segment) {
    setSelectedSegment(segment)
    if (segment === Segment['2023']) {
      setItems(items_23)
    } else {
      setItems(items_24)
    }
  }

  return (
    <div className={classNames.container}>
      <BlackCard>
        <BlackCardHeader title={'Roadmap'}>
          <SegmentedControl selectedSegment={selectedSegment} setSelectedSegment={handleSetSelectedSegment} />
        </BlackCardHeader>
        <div className={classNames.roadMapCardsContainer}>
          <div className={classNames.line}>
            <RoadMapCard year={items[0].year} quarter={items[0].quarter} listItems={items[0].listItems} index={0} />
            <RoadMapCard year={items[1].year} quarter={items[1].quarter} listItems={items[1].listItems} index={1} />
          </div>
          <div className={classNames.line}>
            <RoadMapCard year={items[2].year} quarter={items[2].quarter} listItems={items[2].listItems} index={2} />
            <RoadMapCard year={items[3].year} quarter={items[3].quarter} listItems={items[3].listItems} index={3} />
          </div>
        </div>
      </BlackCard>
    </div>
  )
}
