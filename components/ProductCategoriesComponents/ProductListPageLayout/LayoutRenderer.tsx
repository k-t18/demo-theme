import dynamic from 'next/dynamic';
const DefaultLayout = dynamic(() => import('./DefaultLayout'));
const CollapsibleLayout = dynamic(() => import('./CollapsibleLayout'));
const TopFiltersLayout = dynamic(() => import('./TopFiltersLayout'));

const LayoutRenderer = (props: any) => {
  const renderLayouts = () => {
    switch (props.layoutName) {
      case 'DefaultLayout':
        return <DefaultLayout layoutComponents={props.layoutComponents} productsGridData={props.productsGridProps} />;
      case 'CollapsibleLayout':
        return <CollapsibleLayout />;
      case 'TopFiltersLayout':
        return <TopFiltersLayout />;
    }
  };
  return <>{renderLayouts()}</>;
};

export default LayoutRenderer;
