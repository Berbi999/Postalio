export default function MainSection() {
  const posts = [
    {
      Id: 1,
      description: "skacowana",
      user: { Id: 1, name: "szeslaw" },
      creationDate: new Date(),
    },
    {
      Id: 2,
      description: "wysuszona",
      user: { Id: 2, name: "chujxd" },
      creationDate: new Date(),
    },
  ];

  // function fDate(date){
  //     return `${date.getDate()} ${date.getMonth()} ${date.getFullYear()} ${date.getHours()};`
  // }

  const listPost = posts.map((post) => (
    <div>
      <p>{post.creationDate.toDateString()}</p>
      <p>{post.user.name}</p>
      <p>{post.description}</p>
    </div>
  ));
  return <div className="flex space-x-4 bg-red">{listPost}</div>;
}
