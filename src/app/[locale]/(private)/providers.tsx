// import { LayoutProvider } from '@layouts/context/layoutcontext'
import { PropsWithChildren } from 'react'

export default function Providers({ children }: PropsWithChildren) {
  return { children }
  // return <LayoutProvider>{children}</LayoutProvider>
}
