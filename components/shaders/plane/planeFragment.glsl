uniform float time;
uniform float uProgress;
uniform sampler2D uTexture;
uniform vec2 uTextureSize;

varying vec2 vUv;
varying vec2 vSize;

/**
 * get scaled uv, based on viewport
 */
vec2 getUV(vec2 uv, vec2 textureSize, vec2 quadSize) {
  // scale Uvs by
  // 1. reducing them,
  // 2. multiplying the reduced UV coords
  // 3. adding the reduced value to center them again

  vec2 tmpUV = uv - vec2(0.5);

  float quadAspect = quadSize.x / quadSize.y;
  float textureAspect = textureSize.x / textureSize.y;

  if (quadAspect < textureAspect) {
    tmpUV = tmpUV * vec2(quadAspect / textureAspect, 1.0);
  } else {
    tmpUV = tmpUV * vec2(1.0, textureAspect / quadAspect);
  }

  tmpUV += vec2(0.5);
  return tmpUV;
}

void main() {

  vec2 correctUV = getUV(vUv, uTextureSize, vSize);

  vec4 image = texture(uTexture, correctUV);
  gl_FragColor = vec4(vUv, 0., 1.);
  gl_FragColor = image;
}