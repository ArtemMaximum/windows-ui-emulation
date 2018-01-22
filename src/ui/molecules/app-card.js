import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

// import { width, mediaMaxWidth, mediaMaxHeight } from 'lib/sizes'
// import { PersonalCard } from '../molecules'
// import { Profile } from '../types'


const CardMolecule = styled.section`
  display: flex;
  flex-flow: row wrap
  align-items: center;
  position: relative;
`

export const AppCard = ({ profile }) => (
  <CardMolecule>
    <PersonalInfo>
      <h1>{profile.name}</h1>
      <h2>{profile.nickName}</h2>
    </PersonalInfo>
    <Avatar src={profile.avatar} title={profile.name} />
  </CardMolecule>
)

PersonalCard.propTypes = {
  profile: Profile.isRequired, // eslint-disable-line react/no-typos
}
