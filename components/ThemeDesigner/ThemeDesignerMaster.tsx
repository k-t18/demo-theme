import { useState } from 'react';
import Image from 'next/image';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import ComponentsSection from './ComponentsSection';
import Canvas from './DesigningCanvas';
const ThemeDesignerMaster = () => {
  const imgs: string[] = [
    'https://s3.us-east-2.amazonaws.com/summit-8848-s3/20240919/2024/10/28/File/H4TGYXCC_Screenshot_2024-10-28_174315.png',
    'https://s3.us-east-2.amazonaws.com/summit-8848-s3/20240919/2024/10/28/File/OB6Q2YRC_Screenshot_2024-10-24_112249.png',
    'https://s3.us-east-2.amazonaws.com/summit-8848-s3/20240919/2024/10/28/File/PTX1RQCA_Screenshot_2024-10-23_120952.png',
  ];

  const [showSecondSidebar, setShowSecondSidebar] = useState(false);

  const imageLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  const [selectedComponentsList, setSelectedComponentsList] = useState([]);

  const addItemsToCanvas = (e: DragEndEvent) => {
    console.log('data', e);
    const newItem: any = e.active.data.current?.title;
    const temp: any = [...selectedComponentsList];
    temp.push(newItem);
    setSelectedComponentsList(temp);
  };

  return (
    <div className="row">
      {/* drag and dop component below */}

      {/* <DndContext onDragEnd={addItemsToCanvas}>
        <div className="col-4">
          {imgs.map((img: string) => (
            <DraggableComponents key={img}>
              <Image loader={imageLoader} src={img} alt={'Component'} width={480} height={380} />
            </DraggableComponents>
          ))}
        </div>
        <div className="col-8 border">
          <Canvas components={selectedComponentsList} />
        </div>
      </DndContext> */}

      {/* Select component below */}
      <div className="col-2 border border-primary">
        <ComponentsSection />
      </div>
      <div className={`col-3 border border-danger`}></div>
      <div className="col-6"></div>
    </div>
  );
};
export default ThemeDesignerMaster;
