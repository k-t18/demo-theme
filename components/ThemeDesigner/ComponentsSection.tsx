import themeDesignerComponentsStyles from '../../styles/components/themeDesignerComponents.module.scss';

type ComponentsProps = {
  ctaOnItemClick: (value: string) => void;
};

export default function ComponentsSection({ ctaOnItemClick }: ComponentsProps) {
  const componentsList = [
    'Header',
    'Banners',
    'Personlized Categories',
    'Featured Collection',
    'Brands',
    'Subscription',
    'CTA Banners',
    'Client Testimonials',
    'Recently Viewed Products',
    'Filters',
    'Product Card',
    'Products List',
    'Pagination',
    'Footer',
    'Contact',
    'Gallery',
    'Intro',
    'Services',
    'Services',
    'Services',
    'Services',
    'Services',
    'Services',
    'Services',
    'Services',
  ];

  return (
    <div className={``}>
      <div className={``}>
        <ul className="list-unstyled" style={{ fontSize: '14px' }}>
          {componentsList?.map((componentName: string) => {
            return (
              <li className={`mb-3 ${themeDesignerComponentsStyles.cursor}`} onClick={() => ctaOnItemClick(componentName)}>
                {componentName}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
