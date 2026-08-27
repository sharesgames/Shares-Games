/**
 * Main entry point for APL Canvas Library
 */

export { APLDocument } from './apl/document';
export { Component } from './apl/component';
export { TextComponent } from './apl/text';
export { ContainerComponent, createComponentFromConfig } from './apl/container';
export { Animation, AnimationManager } from './apl/animations';
export { CanvasRenderer } from './canvas/renderer';

export type {
  APLDocumentConfig,
  APLComponent,
  APLLayout,
  TextComponentProps,
  ContainerProps,
  AnimationConfig,
  CanvasRenderContext,
  ComponentStyle,
  RenderOptions,
} from './types';
