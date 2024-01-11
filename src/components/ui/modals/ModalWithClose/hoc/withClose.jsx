export function withClose(Component) {
  return function Fn(props) {
    return <Component {...props} />;
  };
}
