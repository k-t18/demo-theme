const DefaultLayout = ({ layoutComponents, productsGridData }: any) => {
  const renderFilter = () => {
    const Component = require(`../${layoutComponents[0].section_name}/${layoutComponents[0]?.component_name}/MasterComponent`).default;
    return <Component key={layoutComponents[0]?.component_name} />;
  };
  const renderProducts = () => {
    const Component = require(`../${layoutComponents[1].section_name}/${layoutComponents[1]?.component_name}/MasterComponent`).default;
    return <Component key={layoutComponents[1]?.component_name} {...productsGridData} />;
  };
  return (
    <div className="row">
      <div className="col-12 col-md-2 web-filter d-none d-sm-block ">{renderFilter()}</div>
      <div className="container-md col-md-10">
        <div className=" mt-2 product-listing-row">{renderProducts()}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
