type CatchAllRouteProps = Record<string, string>;

const CatchAllRoute = ({ params }: CatchAllRouteProps) => {
  return <div>CatchAllRoute: {JSON.stringify(params)}</div>;
};

export default CatchAllRoute;
