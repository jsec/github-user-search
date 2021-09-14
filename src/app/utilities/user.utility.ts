import {
  IGithubUserObject
} from '../interfaces/github-user-object.interface';
import {
  IUser
} from '../interfaces/user.interface';

export function getUserFromGithubUserObject(userObj: IGithubUserObject) {
  return <IUser>{
    username: userObj.login,
    name: userObj.name,
    starCount: 0,
    followerCount: userObj.followers,
    avatarUrl: userObj.avatar_url,
    bio: userObj.bio,
    company: userObj.company,
    location: userObj.location,
    repoCount: userObj.public_repos,
    followingCount: userObj.following,
    profileUrl: userObj.html_url
  }
}
