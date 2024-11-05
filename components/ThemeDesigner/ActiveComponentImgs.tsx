import React from 'react';
import Image from 'next/image';

type ActiveComponentProps = {
  imgs: any[];
  addItemsToCanvas: (componenInfo: any) => void;
};

const ActiveComponentImgs = ({ imgs, addItemsToCanvas }: ActiveComponentProps) => {
  const imageLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <div className="">
      {imgs?.map((img: any) => {
        return (
          <div className={`border border-light my-3`}>
            <Image
              loader={imageLoader}
              src={img?.imgLink}
              alt="component-img"
              width={330}
              height={250}
              onClick={() => addItemsToCanvas(img)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ActiveComponentImgs;
