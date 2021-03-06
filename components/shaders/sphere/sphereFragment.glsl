uniform float time;
uniform sampler2D uTexture;

varying float vPulse;
varying vec2 vUv;
varying vec3 vNormal;

void main() {
  vec4 myImage = texture(uTexture, vUv + 0.01 * sin(vUv * 20. + time));

  float sinePulse = (1. + sin(vUv.x * 50. + time)) * 0.5;
  gl_FragColor = vec4(vUv, 0., 1.);
  gl_FragColor = myImage;
  gl_FragColor = vec4(vNormal, 1.);
  gl_FragColor = vec4(sinePulse, 0., 0., 1.);
  gl_FragColor = vec4(0.5 * (vPulse + 0.75), 0., 0., 1.);
}