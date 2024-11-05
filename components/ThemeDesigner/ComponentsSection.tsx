export default function ComponentsSection(props: any) {
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
  ];

  return (
    <div className="overflow-y-auto">
      <div className="d-flex flex-column mb-3">
        {componentsList?.map((component: string) => {
          return (
            <div className=" mb-3">
              <button type="button" className="btn">
                {component}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
