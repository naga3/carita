import Image from "next/image";
export type SceneName = "forest" | "learning" | "kindness";
const captions: Record<SceneName, string> = {
  forest: "タイの森の僧院をイメージして",
  learning: "スリランカの菩提樹の下をイメージして",
  kindness: "ミャンマーの村の風景をイメージして",
};
export function Scene({
  name,
  className = "",
  caption = false,
  priority = false,
}: {
  name: SceneName;
  className?: string;
  caption?: boolean;
  priority?: boolean;
}) {
  return (
    <figure className={`scene scene-${name} ${className}`}>
      <Image
        src={`/images/${name}.webp`}
        alt=""
        width={1536}
        height={1024}
        sizes="(max-width: 760px) 100vw, 800px"
        unoptimized
        priority={priority}
      />
      {caption && (
        <figcaption>
          {captions[name]}
          <span>創作イラスト</span>
        </figcaption>
      )}
    </figure>
  );
}
