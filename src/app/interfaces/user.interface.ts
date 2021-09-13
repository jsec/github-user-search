import {
  IGithubUserObject
} from './github-user-object.interface';

export interface IUser {
  username: string;
  name: string;
  starCount: number;
  followerCount: number;
  avatarUrl: string;
  bio: string;
}

export function getUserFromGithubUserObject(userObj: IGithubUserObject) {
  return <IUser>{
    username: userObj.login,
    name: userObj.name,
    starCount: 0,
    followerCount: userObj.followers,
    avatarUrl: userObj.avatar_url,
    bio: userObj.bio
  }
}
