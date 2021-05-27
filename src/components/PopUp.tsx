interface IProps {
  title: string;
  type: string;
}

export default function PopUp(props: IProps): JSX.Element {
  const { title, type } = props;

  return (
    <div className={type === "success" ? "popup_success" : "popup_deleted"}>
      <p>{title}</p>
    </div>
  );
}
