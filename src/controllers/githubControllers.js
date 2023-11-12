const githubControllers = (req, res) => {
  const githubUser = {
    login: "musaddekali",
    id: 83631326,
    node_id: "MDQ6VXNlcjgzNjMxMzI2",
    avatar_url: "https://avatars.githubusercontent.com/u/83631326?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/musaddekali",
    html_url: "https://github.com/musaddekali",
    followers_url: "https://api.github.com/users/musaddekali/followers",
    following_url:
      "https://api.github.com/users/musaddekali/following{/other_user}",
    gists_url: "https://api.github.com/users/musaddekali/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/musaddekali/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/musaddekali/subscriptions",
    organizations_url: "https://api.github.com/users/musaddekali/orgs",
    repos_url: "https://api.github.com/users/musaddekali/repos",
    events_url: "https://api.github.com/users/musaddekali/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/musaddekali/received_events",
    type: "User",
    site_admin: false,
    name: "MusaddekAli",
    company: "musaddekali.dev@gmail.com",
    blog: "musaddekali-portfolio.netlify.app",
    location: "Sylhet, Bangladesh",
    email: null,
    hireable: true,
    bio: "Web Developer | React | Redux | JavaScript | Firebase",
    twitter_username: null,
    public_repos: 60,
    public_gists: 0,
    followers: 8,
    following: 4,
    created_at: "2021-05-04T05:55:32Z",
    updated_at: "2023-11-12T04:29:00Z",
  };
  res.json(githubUser);
};

export default githubControllers;
