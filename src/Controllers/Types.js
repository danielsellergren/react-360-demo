export type Quaternion = [number, number, number, number];
export type Vec3 = [number, number, number];

export interface CameraController {
  fillCameraProperties(position: Vec3, rotation: Quaternion): boolean;
}