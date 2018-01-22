import {
  arrayOf,
  string,
  shape,
} from 'prop-types'


export const Profile = shape({
  name: string,
  lastName: string,
  nickName: string,
  avatar: string,
})