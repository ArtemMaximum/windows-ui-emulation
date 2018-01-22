import React from 'react'
import styled from 'styled-components'

import { mediaMaxWidth } from 'lib/sizes'


export const H2 = styled.h2`
  margin: 20px 0;
  font-size: 32px;
  font-weight: 400;
  cursor: default;

  ${mediaMaxWidth('tablet')} {
    font-size: 28px;
  }
`

export const H3 = styled.h3`
  margin: 10px 0;
  font-size: 28px;
  font-weight: 400;
  cursor: default;

  ${mediaMaxWidth('tablet')} {
    font-size: 20px;
  }
`

export const H4 = styled.h4`
  margin: 10px 0;
  font-size: 22px;
  font-weight: 500;
  cursor: default;
`

export const H5 = styled.h5`
  margin: 10px 0;
  font-size: 18px;
  font-weight: 500;
  cursor: default;
`
