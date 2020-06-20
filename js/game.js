var vertexShaderText =
[
  'precision mediump float;',
  '',
  'attribute vec3 vertPosition;',
  'attribute vec3 vertColor;',
  'varying vec3 fragColor;',
  'uniform mat4 mWorld;',
  'uniform mat4 mView;',
  'uniform mat4 mProj;',
  '',
  'void main()',
  '{',
  ' fragColor = vertColor;',
  ' gl_Position = mProj * mView * mWorld * vec4(vertPosition, 1.0);',
  '}'
].join('\n');

var fragmentShaderText =
[
  'precision mediump float;',
  '',
  'varying vec3 fragColor;',
  'void main()',
  '{',
  'gl_FragColor = vec4(fragColor, 1.0);',
  '}'
].join('\n');

var startGame = function () {
  console.log('This is working');

  var canvas = document.getElementById('game-surface');
  var gl = canvas.getContext('webgl');
//  canvas.height = window.innerHeight;
//  canvas.width = window.innerWidth;

  if (!gl) {
    console.log('Falling back on experimental-webgl');
    gl = canvas.getContext('experimental-webgl');
  }

  if (!gl) {
    alert('Your browser does not support webGL');
  }

  gl.clearColor(0.6, 0.8, 0.5, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.enable(gl.DEPTH_TEST);
  gl.enable(gl.CULL_FACE);
  gl.frontFace(gl.CCW);
  gl.cullFace(gl.BACK);

  //
  // Create shaders
  //
  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

  gl.shaderSource(vertexShader, vertexShaderText);
  gl.shaderSource(fragmentShader, fragmentShaderText);

  gl.compileShader(vertexShader);
  if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
    console.error('ERROR compiling vertex shader!', gl.getShaderInfoLog(vertexShader));
    return;
  }

  gl.compileShader(fragmentShader);
  if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
    console.error('ERROR compiling fragment shader!', gl.getShaderInfoLog(fragmentShader));
    return;
  }

  var program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('ERROR linking program!'. gl.getProgramInfoLog(program));
    return;
  }
  gl.validateProgram(program);
  if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
    console.error('ERROR validating program!', gl.getProgramInfoLog(program));
    return;
  }

  //
  // Create buffer
  //
  var boxVertices =
  [ //X,    Y,    Z,       R,   G,   B
     // Top
     -1.0,  1.0, -1.0,     1.0, 1.0, 1.0,
     -1.0,  1.0,  1.0,     1.0, 1.0, 1.0,
      1.0,  1.0,  1.0,     1.0, 1.0, 1.0,
      1.0,  1.0, -1.0,     1.0, 1.0, 1.0,

     // Left
     -1.0, -1.0, -1.0,     0.5, 0.2, 0.4,
     -1.0,  1.0, -1.0,     0.2, 0.2, 0.4,
     -1.0,  1.0,  1.0,     0.5, 0.2, 0.4,
     -1.0, -1.0,  1.0,     0.2, 0.2, 0.4,

     // Right
      1.0,  1.0,  1.0,     0.2, 0.2, 0.4,
      1.0, -1.0,  1.0,     0.5, 0.2, 0.4,
      1.0, -1.0, -1.0,     0.2, 0.2, 0.4,
      1.0,  1.0, -1.0,     0.5, 0.2, 0.4,

     // Front
      1.0,  1.0,  1.0,     0.2, 0.2, 0.4,
      1.0, -1.0,  1.0,     0.5, 0.2, 0.4,
     -1.0, -1.0,  1.0,     0.2, 0.2, 0.4,
     -1.0,  1.0,  1.0,     0.5, 0.2, 0.4,

     // Back
      1.0,  1.0, -1.0,     0.5, 0.2, 0.4,
      1.0, -1.0, -1.0,     0.2, 0.2, 0.4,
     -1.0, -1.0, -1.0,     0.5, 0.2, 0.4,
     -1.0,  1.0, -1.0,     0.2, 0.2, 0.4,

     // Bottom
     -1.0, -1.0, -1.0,     1.0, 1.0, 1.0,
     -1.0, -1.0,  0.0,     1.0, 1.0, 1.0,
      1.0, -1.0,  0.0,     1.0, 1.0, 1.0,
      1.0, -1.0, -1.0,     1.0, 1.0, 1.0
  ];

  var boxIndices =
  [
    // Top
    0, 1, 2,
    0, 2, 3,

    // Left
    6, 4, 7,
    5, 4, 6,

    // Right
    8, 9, 10,
    8, 10, 11,

    // Front
    13, 12, 14,
    14, 12, 15,

    // Back
    16, 17, 18,
    16, 18, 19,

    // Bottom
    21, 20, 22,
    23, 20, 22

  ];

  var boxVertexBufferObject = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, boxVertexBufferObject);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(boxVertices), gl.STATIC_DRAW);

  var boxIndexBufferObject = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, boxIndexBufferObject);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(boxIndices), gl.STATIC_DRAW);

  var positionAttribLocation = gl.getAttribLocation(program, 'vertPosition');
  var colorAttribLocation = gl.getAttribLocation(program, 'vertColor');
  gl.vertexAttribPointer(
    positionAttribLocation, // Attribute location
    3, // Number of elements per Attribute
    gl.FLOAT, // Type of elements
    gl.FALSE,
    6 * Float32Array.BYTES_PER_ELEMENT, // Size of an induvidual vertex
    0 // Offset from the beginning of a single vertex to this attribute
  );
  gl.vertexAttribPointer(
    colorAttribLocation, // Attribute location
    3, // Number of elements per Attribute
    gl.FLOAT, // Type of elements
    gl.FALSE,
    6 * Float32Array.BYTES_PER_ELEMENT, // Size of an induvidual vertex
    3 * Float32Array.BYTES_PER_ELEMENT // Offset from the beginning of a single vertex to this attribute
  );

  gl.enableVertexAttribArray(positionAttribLocation);
  gl.enableVertexAttribArray(colorAttribLocation);

  // Tell OpenGL state machine which program should be active
  gl.useProgram(program);

  var matWorldUniformLocation = gl.getUniformLocation(program, 'mWorld');
  var matViewUniformLocation = gl.getUniformLocation(program, 'mView');
  var matProjUniformLocation = gl.getUniformLocation(program, 'mProj');

  var worldMatrix = new Float32Array(16);
  var viewMatrix = new Float32Array(16);
  var projMatrix = new Float32Array(16);
  glMatrix.mat4.identity(worldMatrix);
  glMatrix.mat4.lookAt(viewMatrix, [0, 0, -2], [0, 0, 0], [0, 1, 0]);
  glMatrix.mat4.perspective(projMatrix, glMatrix.glMatrix.toRadian(30), canvas.width / canvas.height, 0.1, 1000.0);

  gl.uniformMatrix4fv(matWorldUniformLocation, gl.FALSE, worldMatrix);
  gl.uniformMatrix4fv(matViewUniformLocation, gl.FALSE, viewMatrix);
  gl.uniformMatrix4fv(matProjUniformLocation, gl.FALSE, projMatrix);

  //
  // Main render loop
  //
  var identityMatrix = new Float32Array(16);
  glMatrix.mat4.identity(identityMatrix);
  var angle = 0;
  var loop = function () {
    angle = performance.now() / 1000 / 10 * 2 * Math.PI;
    glMatrix.mat4.rotate(worldMatrix, identityMatrix, angle, [0, 1, 0]);
    gl.uniformMatrix4fv(matWorldUniformLocation, gl.FALSE, worldMatrix);

    gl.clearColor(0.6, 0.8, 0.5, 0.1);
    gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
    gl.drawElements(gl.TRIANGLES, boxIndices.length, gl.UNSIGNED_SHORT, 0);

    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
  gl.drawArrays(gl.TRIANGLES, 0, 3);

};
