// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Octokit } from "@octokit/core";

const searchGitHub = async (req, res) => {
  const octokit = new Octokit({ auth: process.env.GITHUB_AUTH_TOKEN });
  const x = await octokit.request(`/users/${req.headers.username}`);
  const name = x.data.name;
  const bio = x.data.bio;
  const login = x.data.login;
  const repos = await octokit.request(
    `/users/${req.headers.username}/repos?per_page=200`
  );
  return res.status(200).json({
    name: name,
    bio: bio,
    repos: repos.data,
    login: login,
  });
};

export default searchGitHub;
