uniform float time;
uniform float uProgress;
uniform sampler2D uTexture;

varying vec2 vUv;

void main() {
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(0.0, 0.0, 1.0, 1.0);
}