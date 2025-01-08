// User

// Props: User{}
// State:

export default function UserProfile(props) {
  const { user } = props;
  return (
    <div className="UserProfile">
      <img src={user.profile_url} alt="" />
      <p>{user.username}</p>
    </div>
  );
}
