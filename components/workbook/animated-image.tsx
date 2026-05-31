type AnimatedImageProps = {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
}
 
export function AnimatedImage({ src, alt, className = "", style }: AnimatedImageProps) {
  return (
    <div className="overflow-hidden" style={{ borderRadius: "inherit" }}>
      <img
        src={src}
        alt={alt}
        className={`${className} transition-transform duration-700 ease-out hover:scale-[1.03]`}
        style={style}
      />
    </div>
  )
}