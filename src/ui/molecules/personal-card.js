import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
import { mediaMaxWidth, mediaMinWidth } from 'lib/sizes'

import { Profile } from '../types'
import { Avatar } from '../atoms'
import { Modal } from '../molecules'


const CardMolecule = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-end;
  
  ${mediaMaxWidth('tablet')} {
    flex-direction: column;
    margin-top: 50px;
  }
`

const AvatarWrapper = styled.div `
  ${mediaMaxWidth('tablet')} {
    order: 1;
  }
`

const PersonalInfo = styled.div`
  display: flex;
  flex-grow: 0;
  flex-direction: column;
  box-sizing: border-box;
  align-items: flex-end;
  padding-right: 8px;
  cursor: pointer;
  
  h1 {
    display: flex;
    margin: 20px 0;
    font-size: 26px !important;
    font-weight: 500;
  }

  h2 {
    display: flex;
    margin: 0;
    font-size: 14px;
    font-weight: 300;
    text-shadow: 0 0 8px rgba(0,0,0,.6);
  }
  
  ${mediaMaxWidth('tablet')} {
    padding: 10px 20px;
    min-width: 0;
    align-items: center;
    order: 2;

    h1 {
      font-size: 28px;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 16px;
    }
  }

  ${mediaMaxWidth('tabletS')} and (orientation: landscape) {
    h2:nth-last-child(1) {
      display: none;
    }
  }

  ${mediaMinWidth('tablet', e => e + 1)} {
    padding-left: 20px;
  }
`

// TODO: add memoize for keyify(line)
export const PersonalCard = ({ profile, isEditing, editingOpen, editingClose }) => (
  <CardMolecule>
    <PersonalInfo onClick={editingOpen}>
      <h1>{profile.name}</h1>
      <h2>{profile.nickName}</h2>
    </PersonalInfo>
    <AvatarWrapper>
      <Avatar src={profile.avatar} title={profile.name}/>
    </AvatarWrapper>
    <Modal closeable={true} title={'Alert!'} isOpen={isEditing} onClose={editingClose}>
      TEST!
    </Modal>
  </CardMolecule>
)

PersonalCard.propTypes = {
  profile: Profile.isRequired, // eslint-disable-line react/no-typos
}
