import classNames from './CryptoIcon.module.pcss'

export function CryptoIcon({ symbol }: { symbol: string; src?: string | null }) {
  return (
    <div className={classNames.iconContainer}>
      <object data={`src/assets/cryptoSymbols/${symbol}.svg`} type="image/svg+xml" width={50} height={50} />
    </div>
  )
}
