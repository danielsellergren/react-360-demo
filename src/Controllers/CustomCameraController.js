/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */

import { type Quaternion, type Vec3 } from './Types';
import { type CameraController } from './Types';

const DEFAULT_FOV = Math.PI / 6;

export default class CustomCameraController implements CameraController {

  constructor(frame: HTMLElement, fov: number = DEFAULT_FOV) {
  }

  _onWheel(e: WheelEvent) {
  }

  enable() {
  }

  disable() {
  }

  fillCameraProperties(position: Vec3, rotation: Quaternion): boolean {
    rotation[0] = rotation[0] + 0.0001;
    rotation[1] = rotation[1] + 0.0001;
    rotation[2] = rotation[2] + 0.0010;
    rotation[3] = rotation[3] + 0.0001;

    position[0] = position[0] + 0.007;
    position[2] = position[2] + 0.01;

    return true;
  }
}