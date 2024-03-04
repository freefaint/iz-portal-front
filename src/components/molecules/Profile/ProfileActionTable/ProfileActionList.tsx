interface IProps {
  props?: { label: string; value: string }[];
}

export const ProfileActionList = ({ props }: IProps) => {
  return <div>{JSON.stringify(props)}</div>;
};

export default ProfileActionList;
