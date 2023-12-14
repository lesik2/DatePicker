/* eslint-disable import/no-extraneous-dependencies */
import React, {ReactElement} from 'react'
import {render, RenderOptions, RenderResult} from '@testing-library/react'
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
): RenderResult<typeof import("d:/DatePicker/DatePicker/node_modules/@testing-library/dom/types/queries"), HTMLElement, HTMLElement> => 
render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'
export {customRender as render}