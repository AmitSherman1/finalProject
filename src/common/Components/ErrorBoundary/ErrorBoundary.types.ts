import {ReactNode, type ComponentType} from 'react';
import ErrorBoundary from '.';
import { FallbackComponentProps } from '../FallbackComponent/FallbackComponent.types';
import FallbackComponent from '../FallbackComponent'

export type ErrorBoundaryProps = {
  children: ReactNode; // | Node | JSX.Element | JSX.Element[];
  FallbackComponent: ComponentType<FallbackComponentProps>;
  onError?: (
    current: ErrorBoundary,
    error: null | Error,
    stack: string,
  ) => void;
} & typeof defaultProps;

const defaultProps = {
  FallbackComponent,
};

export type ErrorBoundaryState = {error: Error | null};
