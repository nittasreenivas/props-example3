export default function Info(props) {
  console.log(props);
  return (
    <div className="each-data">
      <p> {props.title} </p>
      <img alt={props.title} src={props.thumbnailUrl} width={100} />
    </div>
  );
}
