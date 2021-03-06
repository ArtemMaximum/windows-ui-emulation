import React, { Component } from 'react'
import styled from 'styled-components'

import { width, mediaMaxWidth } from 'lib/sizes'
import { PersonalCard } from '../../modules/profile/organisms'
import { Profile } from '../../modules/profile/types'


const HeaderOrganism = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  position: relative;

  color: #fafafa;
`

const HeaderWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex-grow: 1;
  z-index: 1;
  width: 100%;
  
  align-items: center;
`

const ExpandedContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  width: 100%;
  max-width: ${width.laptop}px;
  padding-top: 56px;
  margin-bottom: 50px;
  
  h1 {
    font-size: 50px;
    font-weight: 300;
    margin: 0;
  }
  
  ${mediaMaxWidth('tablet')} {
    flex-direction: column;
  }
`

class Header extends Component {
  constructor() {
    super();
  }
  
  
  render() {
    const { profile, editingProfileOpen } = this.props;
    
    return (
      <HeaderOrganism>
        <HeaderWrapper>
          <ExpandedContent>
            <h1>Start</h1>
            <PersonalCard
              profile={profile}
              editingOpen={editingProfileOpen}
            />
          </ExpandedContent>
        </HeaderWrapper>
      </HeaderOrganism>
    )
  }
}

Header.propTypes = {
  profile: Profile,
}

Header.defaultProps = {
  profile: {
    name: 'Name Lastname',
    nickName: 'nick name',
    avatar: 'http://lorempixel.com/256/256/',
  },
}

export default Header