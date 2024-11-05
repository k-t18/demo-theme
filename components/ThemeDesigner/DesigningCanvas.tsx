import { useDroppable } from '@dnd-kit/core';
import Image from 'next/image';
export default function Canvas({ selectedComponentsList }: any) {
  const imageLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <div>
      {selectedComponentsList?.length !== 0 ? (
        <div>
          {selectedComponentsList?.map((component: any) => {
            return <Image loader={imageLoader} src={component?.imgLink} alt="component-img" width={680} height={382} />;
          })}
        </div>
      ) : (
        'Start Designing your site today!'
      )}
    </div>
  );
}
