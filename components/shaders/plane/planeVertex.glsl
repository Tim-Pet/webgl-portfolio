uniform float time;
uniform float uProgress;
uniform sampler2D uTexture;
uniform vec2 uTextureSize;
uniform vec2 uResolution;
uniform vec2 uQuadSize;

varying vec2 vUv;
varying vec2 vSize;

void main() {
  vUv = uv;
  vec4 defaultState = modelMatrix * vec4(position, 1.0);
  vec4 fullScreenState = vec4(position, 1.0);
  fullScreenState.x *= uResolution.x / uQuadSize.x;
  fullScreenState.y *= uResolution.y / uQuadSize.y;

  // mix(initialState, finishState, interpolationValue)
  vSize = mix(uQuadSize, uResolution, uProgress);

  vec4 finalState = mix(defaultState, fullScreenState, uProgress);
  gl_Position = projectionMatrix * viewMatrix * finalState;
}