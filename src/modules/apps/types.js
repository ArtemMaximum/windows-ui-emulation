import {
  arrayOf,
  string,
  shape,
} from 'prop-types'


export const App = shape({
  name: string,
  color: string,
  itemType: string,
  icon: string,
})