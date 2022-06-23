uniform float time;
uniform float uProgress;
uniform sampler2D uTexture;

varying vec2 vUv;

void main() {
  vec4 defaultState = modelMatrix * vec4(position, 1.0);
  vec4 fullScreenState = vec4(position, 1.0);

  vec4 finalState = mix(defaultState, fullScreenState, uProgress);
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * finalState;
}