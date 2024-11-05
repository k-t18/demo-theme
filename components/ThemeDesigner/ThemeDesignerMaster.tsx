import { useState } from 'react';
import ComponentsSection from './ComponentsSection';
import Canvas from './DesigningCanvas';
import themeDesignerComponentsStyles from '../../styles/components/themeDesignerComponents.module.scss';
import ActiveComponentImgs from './ActiveComponentImgs';

const ThemeDesignerMaster = () => {
  const imgs: any = [
    {
      name: '1',
      imgLink: 'https://s3.us-east-2.amazonaws.com/summit-8848-s3/20240919/2024/10/28/File/H4TGYXCC_Screenshot_2024-10-28_174315.png',
    },
    {
      name: '2',
      imgLink: 'https://s3.us-east-2.amazonaws.com/summit-8848-s3/20240919/2024/10/28/File/OB6Q2YRC_Screenshot_2024-10-24_112249.png',
    },
    {
      name: '3',
      imgLink: 'https://s3.us-east-2.amazonaws.com/summit-8848-s3/20240919/2024/10/28/File/PTX1RQCA_Screenshot_2024-10-23_120952.png',
    },
  ];

  const [showComponentsImgs, setShowComponentsImgs] = useState<boolean>(false);
  const [activeComponent, setActiveComponent] = useState<string>('');
  const [selectedComponentsList, setSelectedComponentsList] = useState([]);
  const imageLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  const addItemsToCanvas = (componentInfo: any) => {
    const newItem = componentInfo;
    const temp: any = [...selectedComponentsList];
    temp.push(newItem);
    setSelectedComponentsList(temp);
  };

  const onComponentClick = (componentName: string) => {
    if (!showComponentsImgs) {
      setShowComponentsImgs(true);
    }
    setActiveComponent(componentName);
  };

  return (
    <div className="row h-100">
      <div className={`col-12 col-md-3 p-3 bg-light ${themeDesignerComponentsStyles.scrollable_container} d-flex flex-column`}>
        <ComponentsSection ctaOnItemClick={onComponentClick} />
      </div>
      {showComponentsImgs && (
        <div className={`col-12 col-md-3 ${themeDesignerComponentsStyles.scrollable_container} `}>
          <ActiveComponentImgs imgs={imgs} addItemsToCanvas={addItemsToCanvas} />
        </div>
      )}
      <div className={`col-12 col-md-6 p-3 bg-white ${themeDesignerComponentsStyles.scrollable_container}`}>
        <Canvas selectedComponentsList={selectedComponentsList} />
      </div>
    </div>
  );
};
export default ThemeDesignerMaster;
