uniform float time;
uniform float uProgress;
uniform sampler2D uTexture;

varying vec2 vUv;

void main() { gl_FragColor = vec4(vUv, 0., 1.); }