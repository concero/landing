import style from './TopicPicker.module.pcss'
import { useState } from 'react'
import { Button } from '../Button/Button'
import { MainCard } from '../../cards/MainCard/MainCard'
import { ImageCard } from '../../cards/ImageCard/ImageCard'

export interface TopicPickerItem {
  id: string
  title: string
  body: string
  icon: string
}

interface TopicPickerProps {
  title: string
  body: string
  items: TopicPickerItem[]
  cardType?: string | null
}

export function TopicPicker({ items, title, body, cardType = null }: TopicPickerProps) {
  const [selectedItem, setSelectedItem] = useState<TopicPickerItem>(items[0])

  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h2 className={'title1'}>{title}</h2>
        <p className={'body1'}>{body}</p>
        <div className={style.buttonsContainer}>
          {items.map((item: TopicPickerItem) => (
            <Button
              key={item.id}
              onClick={() => {
                setSelectedItem(item)
              }}
              variant={selectedItem.id === item.id ? 'primary' : 'black'}
              className={style.button}
            >
              {item.title}
            </Button>
          ))}
        </div>
      </div>
      <div className={style.cardContainer}>
        {cardType === 'image' ? (
          <ImageCard
            title={selectedItem.title}
            body={selectedItem.body}
            imgSrc={selectedItem.icon}
            className={style.imgCardSize}
          />
        ) : (
          <MainCard type={'big'} title={selectedItem.title} body={selectedItem.body} icon={selectedItem.icon} />
        )}
      </div>
    </div>
  )
}
