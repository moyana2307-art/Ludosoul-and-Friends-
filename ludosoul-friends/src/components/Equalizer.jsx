const BAR_COUNT = 22

export default function Equalizer({ className = '' }) {
  return (
    <div className={`equalizer ${className}`.trim()} aria-hidden="true">
      {Array.from({ length: BAR_COUNT }, (_, index) => (
        <span
          key={index}
          style={{
            animationDelay: `${((index * 7) % 13) * 0.08}s`,
            animationDuration: `${0.85 + (index % 5) * 0.1}s`,
          }}
        />
      ))}
    </div>
  )
}
