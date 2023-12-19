/* eslint-disable import/no-extraneous-dependencies */
import React, {ReactElement} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import {ThemeProvider} from 'styled-components'

import {theme} from '../constants/theme'

const AllTheProviders = ({children}: {children: React.ReactNode}) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
  )

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
)=> render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'
export {customRender as render}