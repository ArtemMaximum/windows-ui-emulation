import { compose } from 'ramda'

function cleaner({ ...scheme }) {
  // some logic
  return { ...scheme }
}

export default compose(cleaner)
