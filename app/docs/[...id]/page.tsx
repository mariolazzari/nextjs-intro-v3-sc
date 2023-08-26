import styles from "./style.module.css";

type CatchAllRouteProps = Record<string, string>;

const CatchAllRoute = ({ params }: CatchAllRouteProps) => {
  return (
    <div className={styles.title}>CatchAllRoute: {JSON.stringify(params)}</div>
  );
};

export default CatchAllRoute;
