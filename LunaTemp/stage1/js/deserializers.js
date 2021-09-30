var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1434 = root || request.c( 'UnityEngine.JointSpring' )
  var i1435 = data
  i1434.spring = i1435[0]
  i1434.damper = i1435[1]
  i1434.targetPosition = i1435[2]
  return i1434
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1436 = root || request.c( 'UnityEngine.JointMotor' )
  var i1437 = data
  i1436.m_TargetVelocity = i1437[0]
  i1436.m_Force = i1437[1]
  i1436.m_FreeSpin = i1437[2]
  return i1436
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1438 = root || request.c( 'UnityEngine.JointLimits' )
  var i1439 = data
  i1438.m_Min = i1439[0]
  i1438.m_Max = i1439[1]
  i1438.m_Bounciness = i1439[2]
  i1438.m_BounceMinVelocity = i1439[3]
  i1438.m_ContactDistance = i1439[4]
  i1438.minBounce = i1439[5]
  i1438.maxBounce = i1439[6]
  return i1438
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1440 = root || request.c( 'UnityEngine.JointDrive' )
  var i1441 = data
  i1440.m_PositionSpring = i1441[0]
  i1440.m_PositionDamper = i1441[1]
  i1440.m_MaximumForce = i1441[2]
  return i1440
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1442 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1443 = data
  i1442.m_Spring = i1443[0]
  i1442.m_Damper = i1443[1]
  return i1442
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1444 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1445 = data
  i1444.m_Limit = i1445[0]
  i1444.m_Bounciness = i1445[1]
  i1444.m_ContactDistance = i1445[2]
  return i1444
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1446 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1447 = data
  i1446.m_ExtremumSlip = i1447[0]
  i1446.m_ExtremumValue = i1447[1]
  i1446.m_AsymptoteSlip = i1447[2]
  i1446.m_AsymptoteValue = i1447[3]
  i1446.m_Stiffness = i1447[4]
  return i1446
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1448 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1449 = data
  i1448.m_LowerAngle = i1449[0]
  i1448.m_UpperAngle = i1449[1]
  return i1448
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1450 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1451 = data
  i1450.m_MotorSpeed = i1451[0]
  i1450.m_MaximumMotorTorque = i1451[1]
  return i1450
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1452 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1453 = data
  i1452.m_DampingRatio = i1453[0]
  i1452.m_Frequency = i1453[1]
  i1452.m_Angle = i1453[2]
  return i1452
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1454 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1455 = data
  i1454.m_LowerTranslation = i1455[0]
  i1454.m_UpperTranslation = i1455[1]
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1456 = root || new pc.UnityMaterial()
  var i1457 = data
  i1456.name = i1457[0]
  request.r(i1457[1], i1457[2], 0, i1456, 'shader')
  i1456.renderQueue = i1457[3]
  i1456.enableInstancing = !!i1457[4]
  var i1459 = i1457[5]
  var i1458 = []
  for(var i = 0; i < i1459.length; i += 1) {
    i1458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1459[i + 0]) );
  }
  i1456.floatParameters = i1458
  var i1461 = i1457[6]
  var i1460 = []
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1461[i + 0]) );
  }
  i1456.colorParameters = i1460
  var i1463 = i1457[7]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1463[i + 0]) );
  }
  i1456.vectorParameters = i1462
  var i1465 = i1457[8]
  var i1464 = []
  for(var i = 0; i < i1465.length; i += 1) {
    i1464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1465[i + 0]) );
  }
  i1456.textureParameters = i1464
  var i1467 = i1457[9]
  var i1466 = []
  for(var i = 0; i < i1467.length; i += 1) {
    i1466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1467[i + 0]) );
  }
  i1456.materialFlags = i1466
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1471 = data
  i1470.name = i1471[0]
  i1470.value = i1471[1]
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1475 = data
  i1474.name = i1475[0]
  i1474.value = new pc.Color(i1475[1], i1475[2], i1475[3], i1475[4])
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1479 = data
  i1478.name = i1479[0]
  i1478.value = new pc.Vec4( i1479[1], i1479[2], i1479[3], i1479[4] )
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1483 = data
  i1482.name = i1483[0]
  request.r(i1483[1], i1483[2], 0, i1482, 'value')
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1487 = data
  i1486.name = i1487[0]
  i1486.enabled = !!i1487[1]
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1489 = data
  i1488.position = new pc.Vec3( i1489[0], i1489[1], i1489[2] )
  i1488.scale = new pc.Vec3( i1489[3], i1489[4], i1489[5] )
  i1488.rotation = new pc.Quat(i1489[6], i1489[7], i1489[8], i1489[9])
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1491 = data
  i1490.enabled = !!i1491[0]
  i1490.aspect = i1491[1]
  i1490.orthographic = !!i1491[2]
  i1490.orthographicSize = i1491[3]
  i1490.backgroundColor = new pc.Color(i1491[4], i1491[5], i1491[6], i1491[7])
  i1490.nearClipPlane = i1491[8]
  i1490.farClipPlane = i1491[9]
  i1490.fieldOfView = i1491[10]
  i1490.depth = i1491[11]
  i1490.clearFlags = i1491[12]
  i1490.cullingMask = i1491[13]
  i1490.rect = i1491[14]
  request.r(i1491[15], i1491[16], 0, i1490, 'targetTexture')
  return i1490
}

Deserializers["ViewPortHandler"] = function (request, data, root) {
  var i1492 = root || request.c( 'ViewPortHandler' )
  var i1493 = data
  request.r(i1493[0], i1493[1], 0, i1492, 'camera')
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1495 = data
  i1494.name = i1495[0]
  i1494.tag = i1495[1]
  i1494.enabled = !!i1495[2]
  i1494.isStatic = !!i1495[3]
  i1494.layer = i1495[4]
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1497 = data
  i1496.enabled = !!i1497[0]
  i1496.type = i1497[1]
  i1496.color = new pc.Color(i1497[2], i1497[3], i1497[4], i1497[5])
  i1496.cullingMask = i1497[6]
  i1496.intensity = i1497[7]
  i1496.range = i1497[8]
  i1496.spotAngle = i1497[9]
  i1496.shadows = i1497[10]
  i1496.shadowNormalBias = i1497[11]
  i1496.shadowBias = i1497[12]
  i1496.shadowStrength = i1497[13]
  i1496.lightmapBakeType = i1497[14]
  i1496.renderMode = i1497[15]
  request.r(i1497[16], i1497[17], 0, i1496, 'cookie')
  i1496.cookieSize = i1497[18]
  return i1496
}

Deserializers["HopManager"] = function (request, data, root) {
  var i1498 = root || request.c( 'HopManager' )
  var i1499 = data
  request.r(i1499[0], i1499[1], 0, i1498, 'manager')
  i1498.typeHop = i1499[2]
  request.r(i1499[3], i1499[4], 0, i1498, 'meshRenderer')
  request.r(i1499[5], i1499[6], 0, i1498, 'obj')
  return i1498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1501 = data
  request.r(i1501[0], i1501[1], 0, i1500, 'sharedMesh')
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1503 = data
  request.r(i1503[0], i1503[1], 0, i1502, 'additionalVertexStreams')
  i1502.enabled = !!i1503[2]
  request.r(i1503[3], i1503[4], 0, i1502, 'sharedMaterial')
  var i1505 = i1503[5]
  var i1504 = []
  for(var i = 0; i < i1505.length; i += 2) {
  request.r(i1505[i + 0], i1505[i + 1], 2, i1504, '')
  }
  i1502.sharedMaterials = i1504
  i1502.receiveShadows = !!i1503[6]
  i1502.shadowCastingMode = i1503[7]
  i1502.sortingLayerID = i1503[8]
  i1502.sortingOrder = i1503[9]
  i1502.lightmapIndex = i1503[10]
  i1502.lightmapSceneIndex = i1503[11]
  i1502.lightmapScaleOffset = new pc.Vec4( i1503[12], i1503[13], i1503[14], i1503[15] )
  i1502.lightProbeUsage = i1503[16]
  i1502.reflectionProbeUsage = i1503[17]
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1509 = data
  i1508.name = i1509[0]
  i1508.halfPrecision = !!i1509[1]
  i1508.vertexCount = i1509[2]
  i1508.aabb = i1509[3]
  var i1511 = i1509[4]
  var i1510 = []
  for(var i = 0; i < i1511.length; i += 1) {
    i1510.push( !!i1511[i + 0] );
  }
  i1508.streams = i1510
  i1508.vertices = i1509[5]
  var i1513 = i1509[6]
  var i1512 = []
  for(var i = 0; i < i1513.length; i += 1) {
    i1512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1513[i + 0]) );
  }
  i1508.subMeshes = i1512
  var i1515 = i1509[7]
  var i1514 = []
  for(var i = 0; i < i1515.length; i += 16) {
    i1514.push( new pc.Mat4().setData(i1515[i + 0], i1515[i + 1], i1515[i + 2], i1515[i + 3],  i1515[i + 4], i1515[i + 5], i1515[i + 6], i1515[i + 7],  i1515[i + 8], i1515[i + 9], i1515[i + 10], i1515[i + 11],  i1515[i + 12], i1515[i + 13], i1515[i + 14], i1515[i + 15]) );
  }
  i1508.bindposes = i1514
  var i1517 = i1509[8]
  var i1516 = []
  for(var i = 0; i < i1517.length; i += 1) {
    i1516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1517[i + 0]) );
  }
  i1508.blendShapes = i1516
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1523 = data
  i1522.triangles = i1523[0]
  return i1522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1529 = data
  i1528.name = i1529[0]
  var i1531 = i1529[1]
  var i1530 = []
  for(var i = 0; i < i1531.length; i += 1) {
    i1530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1531[i + 0]) );
  }
  i1528.frames = i1530
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1533 = data
  i1532.center = new pc.Vec3( i1533[0], i1533[1], i1533[2] )
  i1532.size = new pc.Vec3( i1533[3], i1533[4], i1533[5] )
  i1532.enabled = !!i1533[6]
  i1532.isTrigger = !!i1533[7]
  request.r(i1533[8], i1533[9], 0, i1532, 'material')
  return i1532
}

Deserializers["StickManager"] = function (request, data, root) {
  var i1534 = root || request.c( 'StickManager' )
  var i1535 = data
  var i1537 = i1535[0]
  var i1536 = new (System.Collections.Generic.List$1(Bridge.ns('HopManager')))
  for(var i = 0; i < i1537.length; i += 2) {
  request.r(i1537[i + 0], i1537[i + 1], 1, i1536, '')
  }
  i1534.hops = i1536
  i1534.isDone = !!i1535[1]
  request.r(i1535[2], i1535[3], 0, i1534, 'victoryEffect')
  request.r(i1535[4], i1535[5], 0, i1534, 'stick4')
  request.r(i1535[6], i1535[7], 0, i1534, 'stick5')
  return i1534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1541 = data
  i1540.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1541[0], i1540.main)
  i1540.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1541[1], i1540.colorBySpeed)
  i1540.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1541[2], i1540.colorOverLifetime)
  i1540.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1541[3], i1540.emission)
  i1540.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1541[4], i1540.rotationBySpeed)
  i1540.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1541[5], i1540.rotationOverLifetime)
  i1540.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1541[6], i1540.shape)
  i1540.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1541[7], i1540.sizeBySpeed)
  i1540.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1541[8], i1540.sizeOverLifetime)
  i1540.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1541[9], i1540.textureSheetAnimation)
  i1540.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1541[10], i1540.velocityOverLifetime)
  i1540.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1541[11], i1540.noise)
  i1540.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1541[12], i1540.inheritVelocity)
  i1540.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1541[13], i1540.forceOverLifetime)
  i1540.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1541[14], i1540.limitVelocityOverLifetime)
  i1540.useAutoRandomSeed = !!i1541[15]
  i1540.randomSeed = i1541[16]
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1542 = root || new pc.ParticleSystemMain()
  var i1543 = data
  i1542.duration = i1543[0]
  i1542.loop = !!i1543[1]
  i1542.prewarm = !!i1543[2]
  i1542.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1543[3], i1542.startDelay)
  i1542.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1543[4], i1542.startLifetime)
  i1542.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1543[5], i1542.startSpeed)
  i1542.startSize3D = !!i1543[6]
  i1542.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1543[7], i1542.startSizeX)
  i1542.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1543[8], i1542.startSizeY)
  i1542.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1543[9], i1542.startSizeZ)
  i1542.startRotation3D = !!i1543[10]
  i1542.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1543[11], i1542.startRotationX)
  i1542.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1543[12], i1542.startRotationY)
  i1542.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1543[13], i1542.startRotationZ)
  i1542.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1543[14], i1542.startColor)
  i1542.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1543[15], i1542.gravityModifier)
  i1542.simulationSpace = i1543[16]
  request.r(i1543[17], i1543[18], 0, i1542, 'customSimulationSpace')
  i1542.simulationSpeed = i1543[19]
  i1542.useUnscaledTime = !!i1543[20]
  i1542.scalingMode = i1543[21]
  i1542.playOnAwake = !!i1543[22]
  i1542.maxParticles = i1543[23]
  i1542.emitterVelocityMode = i1543[24]
  return i1542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1544 = root || new pc.MinMaxCurve()
  var i1545 = data
  i1544.mode = i1545[0]
  i1544.curveMin = new pc.AnimationCurve( { keys_flow: i1545[1] } )
  i1544.curveMax = new pc.AnimationCurve( { keys_flow: i1545[2] } )
  i1544.curveMultiplier = i1545[3]
  i1544.constantMin = i1545[4]
  i1544.constantMax = i1545[5]
  return i1544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1546 = root || new pc.MinMaxGradient()
  var i1547 = data
  i1546.mode = i1547[0]
  i1546.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1547[1], i1546.gradientMin)
  i1546.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1547[2], i1546.gradientMax)
  i1546.colorMin = new pc.Color(i1547[3], i1547[4], i1547[5], i1547[6])
  i1546.colorMax = new pc.Color(i1547[7], i1547[8], i1547[9], i1547[10])
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1549 = data
  i1548.mode = i1549[0]
  var i1551 = i1549[1]
  var i1550 = []
  for(var i = 0; i < i1551.length; i += 1) {
    i1550.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1551[i + 0]) );
  }
  i1548.colorKeys = i1550
  var i1553 = i1549[2]
  var i1552 = []
  for(var i = 0; i < i1553.length; i += 1) {
    i1552.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1553[i + 0]) );
  }
  i1548.alphaKeys = i1552
  return i1548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1554 = root || new pc.ParticleSystemColorBySpeed()
  var i1555 = data
  i1554.enabled = !!i1555[0]
  i1554.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1555[1], i1554.color)
  i1554.range = new pc.Vec2( i1555[2], i1555[3] )
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1559 = data
  i1558.color = new pc.Color(i1559[0], i1559[1], i1559[2], i1559[3])
  i1558.time = i1559[4]
  return i1558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1563 = data
  i1562.alpha = i1563[0]
  i1562.time = i1563[1]
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1564 = root || new pc.ParticleSystemColorOverLifetime()
  var i1565 = data
  i1564.enabled = !!i1565[0]
  i1564.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1565[1], i1564.color)
  return i1564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1566 = root || new pc.ParticleSystemEmitter()
  var i1567 = data
  i1566.enabled = !!i1567[0]
  i1566.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1567[1], i1566.rateOverTime)
  i1566.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1567[2], i1566.rateOverDistance)
  var i1569 = i1567[3]
  var i1568 = []
  for(var i = 0; i < i1569.length; i += 1) {
    i1568.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1569[i + 0]) );
  }
  i1566.bursts = i1568
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1572 = root || new pc.ParticleSystemBurst()
  var i1573 = data
  i1572.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1573[0], i1572.count)
  i1572.cycleCount = i1573[1]
  i1572.minCount = i1573[2]
  i1572.maxCount = i1573[3]
  i1572.repeatInterval = i1573[4]
  i1572.time = i1573[5]
  return i1572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1574 = root || new pc.ParticleSystemRotationBySpeed()
  var i1575 = data
  i1574.enabled = !!i1575[0]
  i1574.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1575[1], i1574.x)
  i1574.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1575[2], i1574.y)
  i1574.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1575[3], i1574.z)
  i1574.separateAxes = !!i1575[4]
  i1574.range = new pc.Vec2( i1575[5], i1575[6] )
  return i1574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1576 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1577 = data
  i1576.enabled = !!i1577[0]
  i1576.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1577[1], i1576.x)
  i1576.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1577[2], i1576.y)
  i1576.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1577[3], i1576.z)
  i1576.separateAxes = !!i1577[4]
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1578 = root || new pc.ParticleSystemShape()
  var i1579 = data
  i1578.enabled = !!i1579[0]
  i1578.shapeType = i1579[1]
  i1578.randomDirectionAmount = i1579[2]
  i1578.sphericalDirectionAmount = i1579[3]
  i1578.randomPositionAmount = i1579[4]
  i1578.alignToDirection = !!i1579[5]
  i1578.radius = i1579[6]
  i1578.radiusMode = i1579[7]
  i1578.radiusSpread = i1579[8]
  i1578.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1579[9], i1578.radiusSpeed)
  i1578.radiusThickness = i1579[10]
  i1578.angle = i1579[11]
  i1578.length = i1579[12]
  i1578.boxThickness = new pc.Vec3( i1579[13], i1579[14], i1579[15] )
  i1578.meshShapeType = i1579[16]
  request.r(i1579[17], i1579[18], 0, i1578, 'mesh')
  request.r(i1579[19], i1579[20], 0, i1578, 'meshRenderer')
  request.r(i1579[21], i1579[22], 0, i1578, 'skinnedMeshRenderer')
  i1578.useMeshMaterialIndex = !!i1579[23]
  i1578.meshMaterialIndex = i1579[24]
  i1578.useMeshColors = !!i1579[25]
  i1578.normalOffset = i1579[26]
  i1578.arc = i1579[27]
  i1578.arcMode = i1579[28]
  i1578.arcSpread = i1579[29]
  i1578.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1579[30], i1578.arcSpeed)
  i1578.donutRadius = i1579[31]
  i1578.position = new pc.Vec3( i1579[32], i1579[33], i1579[34] )
  i1578.rotation = new pc.Vec3( i1579[35], i1579[36], i1579[37] )
  i1578.scale = new pc.Vec3( i1579[38], i1579[39], i1579[40] )
  return i1578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1580 = root || new pc.ParticleSystemSizeBySpeed()
  var i1581 = data
  i1580.enabled = !!i1581[0]
  i1580.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[1], i1580.x)
  i1580.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[2], i1580.y)
  i1580.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[3], i1580.z)
  i1580.separateAxes = !!i1581[4]
  i1580.range = new pc.Vec2( i1581[5], i1581[6] )
  return i1580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1582 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1583 = data
  i1582.enabled = !!i1583[0]
  i1582.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[1], i1582.x)
  i1582.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[2], i1582.y)
  i1582.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[3], i1582.z)
  i1582.separateAxes = !!i1583[4]
  return i1582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1584 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1585 = data
  i1584.enabled = !!i1585[0]
  i1584.mode = i1585[1]
  i1584.animation = i1585[2]
  i1584.numTilesX = i1585[3]
  i1584.numTilesY = i1585[4]
  i1584.useRandomRow = !!i1585[5]
  i1584.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1585[6], i1584.frameOverTime)
  i1584.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1585[7], i1584.startFrame)
  i1584.cycleCount = i1585[8]
  i1584.rowIndex = i1585[9]
  i1584.flipU = i1585[10]
  i1584.flipV = i1585[11]
  i1584.spriteCount = i1585[12]
  var i1587 = i1585[13]
  var i1586 = []
  for(var i = 0; i < i1587.length; i += 2) {
  request.r(i1587[i + 0], i1587[i + 1], 2, i1586, '')
  }
  i1584.sprites = i1586
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1590 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1591 = data
  i1590.enabled = !!i1591[0]
  i1590.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1591[1], i1590.x)
  i1590.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1591[2], i1590.y)
  i1590.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1591[3], i1590.z)
  i1590.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1591[4], i1590.speedModifier)
  i1590.space = i1591[5]
  return i1590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1592 = root || new pc.ParticleSystemNoise()
  var i1593 = data
  i1592.enabled = !!i1593[0]
  i1592.separateAxes = !!i1593[1]
  i1592.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1593[2], i1592.strengthX)
  i1592.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1593[3], i1592.strengthY)
  i1592.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1593[4], i1592.strengthZ)
  i1592.frequency = i1593[5]
  i1592.damping = !!i1593[6]
  i1592.octaveCount = i1593[7]
  i1592.octaveMultiplier = i1593[8]
  i1592.octaveScale = i1593[9]
  i1592.quality = i1593[10]
  i1592.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1593[11], i1592.scrollSpeed)
  i1592.scrollSpeedMultiplier = i1593[12]
  i1592.remapEnabled = !!i1593[13]
  i1592.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1593[14], i1592.remapX)
  i1592.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1593[15], i1592.remapY)
  i1592.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1593[16], i1592.remapZ)
  i1592.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1593[17], i1592.positionAmount)
  i1592.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1593[18], i1592.rotationAmount)
  i1592.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1593[19], i1592.sizeAmount)
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1594 = root || new pc.ParticleSystemInheritVelocity()
  var i1595 = data
  i1594.enabled = !!i1595[0]
  i1594.mode = i1595[1]
  i1594.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1595[2], i1594.curve)
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1596 = root || new pc.ParticleSystemForceOverLifetime()
  var i1597 = data
  i1596.enabled = !!i1597[0]
  i1596.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[1], i1596.x)
  i1596.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[2], i1596.y)
  i1596.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[3], i1596.z)
  i1596.space = i1597[4]
  i1596.randomized = !!i1597[5]
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1598 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1599 = data
  i1598.enabled = !!i1599[0]
  i1598.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[1], i1598.limitX)
  i1598.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[2], i1598.limitY)
  i1598.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[3], i1598.limitZ)
  i1598.dampen = i1599[4]
  i1598.separateAxes = !!i1599[5]
  i1598.space = i1599[6]
  i1598.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[7], i1598.drag)
  i1598.multiplyDragByParticleSize = !!i1599[8]
  i1598.multiplyDragByParticleVelocity = !!i1599[9]
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1601 = data
  i1600.enabled = !!i1601[0]
  request.r(i1601[1], i1601[2], 0, i1600, 'sharedMaterial')
  var i1603 = i1601[3]
  var i1602 = []
  for(var i = 0; i < i1603.length; i += 2) {
  request.r(i1603[i + 0], i1603[i + 1], 2, i1602, '')
  }
  i1600.sharedMaterials = i1602
  i1600.receiveShadows = !!i1601[4]
  i1600.shadowCastingMode = i1601[5]
  i1600.sortingLayerID = i1601[6]
  i1600.sortingOrder = i1601[7]
  i1600.lightmapIndex = i1601[8]
  i1600.lightmapSceneIndex = i1601[9]
  i1600.lightmapScaleOffset = new pc.Vec4( i1601[10], i1601[11], i1601[12], i1601[13] )
  i1600.lightProbeUsage = i1601[14]
  i1600.reflectionProbeUsage = i1601[15]
  request.r(i1601[16], i1601[17], 0, i1600, 'mesh')
  i1600.meshCount = i1601[18]
  i1600.activeVertexStreamsCount = i1601[19]
  i1600.alignment = i1601[20]
  i1600.renderMode = i1601[21]
  i1600.sortMode = i1601[22]
  i1600.lengthScale = i1601[23]
  i1600.velocityScale = i1601[24]
  i1600.cameraVelocityScale = i1601[25]
  i1600.normalDirection = i1601[26]
  i1600.sortingFudge = i1601[27]
  i1600.minParticleSize = i1601[28]
  i1600.maxParticleSize = i1601[29]
  i1600.pivot = new pc.Vec3( i1601[30], i1601[31], i1601[32] )
  request.r(i1601[33], i1601[34], 0, i1600, 'trailMaterial')
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1605 = data
  i1604.name = i1605[0]
  i1604.width = i1605[1]
  i1604.height = i1605[2]
  i1604.mipmapCount = i1605[3]
  i1604.anisoLevel = i1605[4]
  i1604.filterMode = i1605[5]
  i1604.hdr = !!i1605[6]
  i1604.format = i1605[7]
  i1604.wrapMode = i1605[8]
  i1604.alphaIsTransparency = !!i1605[9]
  i1604.alphaSource = i1605[10]
  return i1604
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1606 = root || request.c( 'GameManager' )
  var i1607 = data
  i1606.gameState = i1607[0]
  i1606.config = request.d('GameManager+GameConfig', i1607[1], i1606.config)
  i1606.colorConfig = request.d('ColorHop', i1607[2], i1606.colorConfig)
  i1606.currentLevel = i1607[3]
  var i1609 = i1607[4]
  var i1608 = new (System.Collections.Generic.List$1(Bridge.ns('StickManager')))
  for(var i = 0; i < i1609.length; i += 2) {
  request.r(i1609[i + 0], i1609[i + 1], 1, i1608, '')
  }
  i1606.sticks = i1608
  i1606.countHop = i1607[5]
  i1606.countStick = i1607[6]
  i1606.cacheIndexTap1 = i1607[7]
  request.r(i1607[8], i1607[9], 0, i1606, 'timer')
  request.r(i1607[10], i1607[11], 0, i1606, 'subTimer')
  request.r(i1607[12], i1607[13], 0, i1606, 'countDown')
  i1606.hasPassRound1 = !!i1607[14]
  request.r(i1607[15], i1607[16], 0, i1606, 'uiManager')
  i1606.levelData = request.d('LevelData', i1607[17], i1606.levelData)
  return i1606
}

Deserializers["GameManager+GameConfig"] = function (request, data, root) {
  var i1610 = root || request.c( 'GameManager+GameConfig' )
  var i1611 = data
  i1610.initHop = i1611[0]
  i1610.initHoop2 = i1611[1]
  i1610.initStick = i1611[2]
  i1610.distanceXStick = i1611[3]
  i1610.distanceZStick = i1611[4]
  i1610.distanceHop = i1611[5]
  i1610.heightMoveFirst = i1611[6]
  i1610.timeMoveFirst = i1611[7]
  i1610.timeMoveSecond = i1611[8]
  i1610.timeMoveTarget = i1611[9]
  request.r(i1611[10], i1611[11], 0, i1610, 'hopPrefab')
  request.r(i1611[12], i1611[13], 0, i1610, 'hoop2Prefab')
  request.r(i1611[14], i1611[15], 0, i1610, 'stickPrefab')
  return i1610
}

Deserializers["ColorHop"] = function (request, data, root) {
  var i1612 = root || request.c( 'ColorHop' )
  var i1613 = data
  var i1615 = i1613[0]
  var i1614 = []
  for(var i = 0; i < i1615.length; i += 1) {
    i1614.push( request.d('Hop', i1615[i + 0]) );
  }
  i1612.hopColor = i1614
  return i1612
}

Deserializers["Hop"] = function (request, data, root) {
  var i1618 = root || request.c( 'Hop' )
  var i1619 = data
  i1618.typeHop = i1619[0]
  request.r(i1619[1], i1619[2], 0, i1618, 'colorHop')
  return i1618
}

Deserializers["LevelData"] = function (request, data, root) {
  var i1622 = root || request.c( 'LevelData' )
  var i1623 = data
  var i1625 = i1623[0]
  var i1624 = new (System.Collections.Generic.List$1(Bridge.ns('Level')))
  for(var i = 0; i < i1625.length; i += 1) {
    i1624.add(request.d('Level', i1625[i + 0]));
  }
  i1622.levels = i1624
  return i1622
}

Deserializers["Level"] = function (request, data, root) {
  var i1628 = root || request.c( 'Level' )
  var i1629 = data
  i1628.no = i1629[0]
  var i1631 = i1629[1]
  var i1630 = []
  for(var i = 0; i < i1631.length; i += 1) {
    i1630.push( request.d('Data', i1631[i + 0]) );
  }
  i1628.data = i1630
  return i1628
}

Deserializers["Database"] = function (request, data, root) {
  var i1632 = root || request.c( 'Database' )
  var i1633 = data
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1635 = data
  request.r(i1635[0], i1635[1], 0, i1634, 'clip')
  i1634.playOnAwake = !!i1635[2]
  i1634.loop = !!i1635[3]
  i1634.time = i1635[4]
  i1634.enabled = !!i1635[5]
  return i1634
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i1636 = root || request.c( 'SoundManager' )
  var i1637 = data
  var i1639 = i1637[0]
  var i1638 = []
  for(var i = 0; i < i1639.length; i += 2) {
  request.r(i1639[i + 0], i1639[i + 1], 2, i1638, '')
  }
  i1636.audios = i1638
  request.r(i1637[1], i1637[2], 0, i1636, 'hopFly')
  request.r(i1637[3], i1637[4], 0, i1636, 'hopDrop')
  request.r(i1637[5], i1637[6], 0, i1636, 'hopSelect')
  request.r(i1637[7], i1637[8], 0, i1636, 'stickFinish')
  request.r(i1637[9], i1637[10], 0, i1636, 'win')
  request.r(i1637[11], i1637[12], 0, i1636, 'button')
  return i1636
}

Deserializers["UIManager"] = function (request, data, root) {
  var i1642 = root || request.c( 'UIManager' )
  var i1643 = data
  request.r(i1643[0], i1643[1], 0, i1642, 'textHint')
  request.r(i1643[2], i1643[3], 0, i1642, 'timerUI')
  request.r(i1643[4], i1643[5], 0, i1642, 'ctaUI')
  request.r(i1643[6], i1643[7], 0, i1642, 'downloadButton')
  request.r(i1643[8], i1643[9], 0, i1642, 'manager')
  request.r(i1643[10], i1643[11], 0, i1642, 'uiGetReward')
  request.r(i1643[12], i1643[13], 0, i1642, 'guideHand1')
  request.r(i1643[14], i1643[15], 0, i1642, 'guideHand2')
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1645 = data
  i1644.pivot = new pc.Vec2( i1645[0], i1645[1] )
  i1644.anchorMin = new pc.Vec2( i1645[2], i1645[3] )
  i1644.anchorMax = new pc.Vec2( i1645[4], i1645[5] )
  i1644.sizeDelta = new pc.Vec2( i1645[6], i1645[7] )
  i1644.anchoredPosition3D = new pc.Vec3( i1645[8], i1645[9], i1645[10] )
  i1644.rotation = new pc.Quat(i1645[11], i1645[12], i1645[13], i1645[14])
  i1644.scale = new pc.Vec3( i1645[15], i1645[16], i1645[17] )
  return i1644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1647 = data
  i1646.enabled = !!i1647[0]
  i1646.planeDistance = i1647[1]
  i1646.referencePixelsPerUnit = i1647[2]
  i1646.isFallbackOverlay = !!i1647[3]
  i1646.renderMode = i1647[4]
  i1646.renderOrder = i1647[5]
  i1646.sortingLayerName = i1647[6]
  i1646.sortingOrder = i1647[7]
  i1646.scaleFactor = i1647[8]
  request.r(i1647[9], i1647[10], 0, i1646, 'worldCamera')
  i1646.overrideSorting = !!i1647[11]
  i1646.pixelPerfect = !!i1647[12]
  i1646.targetDisplay = i1647[13]
  i1646.overridePixelPerfect = !!i1647[14]
  return i1646
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1648 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1649 = data
  i1648.m_UiScaleMode = i1649[0]
  i1648.m_ReferencePixelsPerUnit = i1649[1]
  i1648.m_ScaleFactor = i1649[2]
  i1648.m_ReferenceResolution = new pc.Vec2( i1649[3], i1649[4] )
  i1648.m_ScreenMatchMode = i1649[5]
  i1648.m_MatchWidthOrHeight = i1649[6]
  i1648.m_PhysicalUnit = i1649[7]
  i1648.m_FallbackScreenDPI = i1649[8]
  i1648.m_DefaultSpriteDPI = i1649[9]
  i1648.m_DynamicPixelsPerUnit = i1649[10]
  i1648.m_PresetInfoIsWorld = !!i1649[11]
  return i1648
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1650 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1651 = data
  i1650.m_IgnoreReversedGraphics = !!i1651[0]
  i1650.m_BlockingObjects = i1651[1]
  i1650.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1651[2] )
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1653 = data
  i1652.cullTransparentMesh = !!i1653[0]
  return i1652
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1654 = root || request.c( 'UnityEngine.UI.Image' )
  var i1655 = data
  request.r(i1655[0], i1655[1], 0, i1654, 'm_Sprite')
  i1654.m_Type = i1655[2]
  i1654.m_PreserveAspect = !!i1655[3]
  i1654.m_FillCenter = !!i1655[4]
  i1654.m_FillMethod = i1655[5]
  i1654.m_FillAmount = i1655[6]
  i1654.m_FillClockwise = !!i1655[7]
  i1654.m_FillOrigin = i1655[8]
  i1654.m_UseSpriteMesh = !!i1655[9]
  i1654.m_PixelsPerUnitMultiplier = i1655[10]
  request.r(i1655[11], i1655[12], 0, i1654, 'm_Material')
  i1654.m_Maskable = !!i1655[13]
  i1654.m_Color = new pc.Color(i1655[14], i1655[15], i1655[16], i1655[17])
  i1654.m_RaycastTarget = !!i1655[18]
  i1654.m_RaycastPadding = new pc.Vec4( i1655[19], i1655[20], i1655[21], i1655[22] )
  return i1654
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1656 = root || request.c( 'UnityEngine.UI.Text' )
  var i1657 = data
  i1656.m_FontData = request.d('UnityEngine.UI.FontData', i1657[0], i1656.m_FontData)
  i1656.m_Text = i1657[1]
  request.r(i1657[2], i1657[3], 0, i1656, 'm_Material')
  i1656.m_Maskable = !!i1657[4]
  i1656.m_Color = new pc.Color(i1657[5], i1657[6], i1657[7], i1657[8])
  i1656.m_RaycastTarget = !!i1657[9]
  i1656.m_RaycastPadding = new pc.Vec4( i1657[10], i1657[11], i1657[12], i1657[13] )
  return i1656
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1658 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1659 = data
  request.r(i1659[0], i1659[1], 0, i1658, 'm_Font')
  i1658.m_FontSize = i1659[2]
  i1658.m_FontStyle = i1659[3]
  i1658.m_BestFit = !!i1659[4]
  i1658.m_MinSize = i1659[5]
  i1658.m_MaxSize = i1659[6]
  i1658.m_Alignment = i1659[7]
  i1658.m_AlignByGeometry = !!i1659[8]
  i1658.m_RichText = !!i1659[9]
  i1658.m_HorizontalOverflow = i1659[10]
  i1658.m_VerticalOverflow = i1659[11]
  i1658.m_LineSpacing = i1659[12]
  return i1658
}

Deserializers["CountDown"] = function (request, data, root) {
  var i1660 = root || request.c( 'CountDown' )
  var i1661 = data
  request.r(i1661[0], i1661[1], 0, i1660, 'timeText')
  request.r(i1661[2], i1661[3], 0, i1660, 'subTimer')
  i1660.currentTime = i1661[4]
  i1660.isStart = !!i1661[5]
  request.r(i1661[6], i1661[7], 0, i1660, 'uiManager')
  return i1660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1663 = data
  request.r(i1663[0], i1663[1], 0, i1662, 'animatorController')
  i1662.updateMode = i1663[2]
  var i1665 = i1663[3]
  var i1664 = []
  for(var i = 0; i < i1665.length; i += 2) {
  request.r(i1665[i + 0], i1665[i + 1], 2, i1664, '')
  }
  i1662.humanBones = i1664
  i1662.enabled = !!i1663[4]
  return i1662
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1668 = root || request.c( 'UnityEngine.UI.Button' )
  var i1669 = data
  i1668.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1669[0], i1668.m_OnClick)
  i1668.m_Navigation = request.d('UnityEngine.UI.Navigation', i1669[1], i1668.m_Navigation)
  i1668.m_Transition = i1669[2]
  i1668.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1669[3], i1668.m_Colors)
  i1668.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1669[4], i1668.m_SpriteState)
  i1668.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1669[5], i1668.m_AnimationTriggers)
  i1668.m_Interactable = !!i1669[6]
  request.r(i1669[7], i1669[8], 0, i1668, 'm_TargetGraphic')
  return i1668
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1670 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1671 = data
  i1670.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1671[0], i1670.m_PersistentCalls)
  return i1670
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1672 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1673 = data
  var i1675 = i1673[0]
  var i1674 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1675.length; i += 1) {
    i1674.add(request.d('UnityEngine.Events.PersistentCall', i1675[i + 0]));
  }
  i1672.m_Calls = i1674
  return i1672
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1678 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1679 = data
  request.r(i1679[0], i1679[1], 0, i1678, 'm_Target')
  i1678.m_TargetAssemblyTypeName = i1679[2]
  i1678.m_MethodName = i1679[3]
  i1678.m_Mode = i1679[4]
  i1678.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1679[5], i1678.m_Arguments)
  i1678.m_CallState = i1679[6]
  return i1678
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1680 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1681 = data
  request.r(i1681[0], i1681[1], 0, i1680, 'm_ObjectArgument')
  i1680.m_ObjectArgumentAssemblyTypeName = i1681[2]
  i1680.m_IntArgument = i1681[3]
  i1680.m_FloatArgument = i1681[4]
  i1680.m_StringArgument = i1681[5]
  i1680.m_BoolArgument = !!i1681[6]
  return i1680
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1682 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1683 = data
  i1682.m_Mode = i1683[0]
  i1682.m_WrapAround = !!i1683[1]
  request.r(i1683[2], i1683[3], 0, i1682, 'm_SelectOnUp')
  request.r(i1683[4], i1683[5], 0, i1682, 'm_SelectOnDown')
  request.r(i1683[6], i1683[7], 0, i1682, 'm_SelectOnLeft')
  request.r(i1683[8], i1683[9], 0, i1682, 'm_SelectOnRight')
  return i1682
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1684 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1685 = data
  i1684.m_NormalColor = new pc.Color(i1685[0], i1685[1], i1685[2], i1685[3])
  i1684.m_HighlightedColor = new pc.Color(i1685[4], i1685[5], i1685[6], i1685[7])
  i1684.m_PressedColor = new pc.Color(i1685[8], i1685[9], i1685[10], i1685[11])
  i1684.m_SelectedColor = new pc.Color(i1685[12], i1685[13], i1685[14], i1685[15])
  i1684.m_DisabledColor = new pc.Color(i1685[16], i1685[17], i1685[18], i1685[19])
  i1684.m_ColorMultiplier = i1685[20]
  i1684.m_FadeDuration = i1685[21]
  return i1684
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1686 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1687 = data
  request.r(i1687[0], i1687[1], 0, i1686, 'm_HighlightedSprite')
  request.r(i1687[2], i1687[3], 0, i1686, 'm_PressedSprite')
  request.r(i1687[4], i1687[5], 0, i1686, 'm_SelectedSprite')
  request.r(i1687[6], i1687[7], 0, i1686, 'm_DisabledSprite')
  return i1686
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1688 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1689 = data
  i1688.m_NormalTrigger = i1689[0]
  i1688.m_HighlightedTrigger = i1689[1]
  i1688.m_PressedTrigger = i1689[2]
  i1688.m_SelectedTrigger = i1689[3]
  i1688.m_DisabledTrigger = i1689[4]
  return i1688
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1690 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1691 = data
  request.r(i1691[0], i1691[1], 0, i1690, 'm_FirstSelected')
  i1690.m_sendNavigationEvents = !!i1691[2]
  i1690.m_DragThreshold = i1691[3]
  return i1690
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1692 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1693 = data
  i1692.m_HorizontalAxis = i1693[0]
  i1692.m_VerticalAxis = i1693[1]
  i1692.m_SubmitButton = i1693[2]
  i1692.m_CancelButton = i1693[3]
  i1692.m_InputActionsPerSecond = i1693[4]
  i1692.m_RepeatDelay = i1693[5]
  i1692.m_ForceModuleActive = !!i1693[6]
  return i1692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1695 = data
  i1694.enabled = !!i1695[0]
  request.r(i1695[1], i1695[2], 0, i1694, 'sharedMaterial')
  var i1697 = i1695[3]
  var i1696 = []
  for(var i = 0; i < i1697.length; i += 2) {
  request.r(i1697[i + 0], i1697[i + 1], 2, i1696, '')
  }
  i1694.sharedMaterials = i1696
  i1694.receiveShadows = !!i1695[4]
  i1694.shadowCastingMode = i1695[5]
  i1694.sortingLayerID = i1695[6]
  i1694.sortingOrder = i1695[7]
  i1694.lightmapIndex = i1695[8]
  i1694.lightmapSceneIndex = i1695[9]
  i1694.lightmapScaleOffset = new pc.Vec4( i1695[10], i1695[11], i1695[12], i1695[13] )
  i1694.lightProbeUsage = i1695[14]
  i1694.reflectionProbeUsage = i1695[15]
  i1694.color = new pc.Color(i1695[16], i1695[17], i1695[18], i1695[19])
  request.r(i1695[20], i1695[21], 0, i1694, 'sprite')
  i1694.flipX = !!i1695[22]
  i1694.flipY = !!i1695[23]
  i1694.drawMode = i1695[24]
  i1694.size = new pc.Vec2( i1695[25], i1695[26] )
  i1694.tileMode = i1695[27]
  i1694.adaptiveModeThreshold = i1695[28]
  i1694.maskInteraction = i1695[29]
  i1694.spriteSortPoint = i1695[30]
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1699 = data
  i1698.name = i1699[0]
  i1698.atlasId = i1699[1]
  i1698.mipmapCount = i1699[2]
  i1698.hdr = !!i1699[3]
  i1698.size = i1699[4]
  i1698.anisoLevel = i1699[5]
  i1698.filterMode = i1699[6]
  i1698.wrapMode = i1699[7]
  var i1701 = i1699[8]
  var i1700 = []
  for(var i = 0; i < i1701.length; i += 4) {
    i1700.push( UnityEngine.Rect.MinMaxRect(i1701[i + 0], i1701[i + 1], i1701[i + 2], i1701[i + 3]) );
  }
  i1698.rects = i1700
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1705 = data
  i1704.name = i1705[0]
  i1704.index = i1705[1]
  i1704.startup = !!i1705[2]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1707 = data
  i1706.ambientIntensity = i1707[0]
  i1706.reflectionIntensity = i1707[1]
  i1706.ambientMode = i1707[2]
  i1706.ambientLight = new pc.Color(i1707[3], i1707[4], i1707[5], i1707[6])
  i1706.ambientSkyColor = new pc.Color(i1707[7], i1707[8], i1707[9], i1707[10])
  i1706.ambientGroundColor = new pc.Color(i1707[11], i1707[12], i1707[13], i1707[14])
  i1706.ambientEquatorColor = new pc.Color(i1707[15], i1707[16], i1707[17], i1707[18])
  i1706.fogColor = new pc.Color(i1707[19], i1707[20], i1707[21], i1707[22])
  i1706.fogEndDistance = i1707[23]
  i1706.fogStartDistance = i1707[24]
  i1706.fogDensity = i1707[25]
  i1706.fog = !!i1707[26]
  request.r(i1707[27], i1707[28], 0, i1706, 'skybox')
  i1706.fogMode = i1707[29]
  var i1709 = i1707[30]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1709[i + 0]) );
  }
  i1706.lightmaps = i1708
  i1706.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1707[31], i1706.lightProbes)
  i1706.lightmapsMode = i1707[32]
  i1706.environmentLightingMode = i1707[33]
  i1706.ambientProbe = new pc.SphericalHarmonicsL2(i1707[34])
  request.r(i1707[35], i1707[36], 0, i1706, 'customReflection')
  request.r(i1707[37], i1707[38], 0, i1706, 'defaultReflection')
  i1706.defaultReflectionMode = i1707[39]
  i1706.defaultReflectionResolution = i1707[40]
  i1706.sunLightObjectId = i1707[41]
  i1706.pixelLightCount = i1707[42]
  i1706.defaultReflectionHDR = !!i1707[43]
  i1706.hasLightDataAsset = !!i1707[44]
  i1706.hasManualGenerate = !!i1707[45]
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1713 = data
  request.r(i1713[0], i1713[1], 0, i1712, 'lightmapColor')
  request.r(i1713[2], i1713[3], 0, i1712, 'lightmapDirection')
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1714 = root || new UnityEngine.LightProbes()
  var i1715 = data
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1723 = data
  var i1725 = i1723[0]
  var i1724 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.add(i1725[i + 0]);
  }
  i1722.invalidShaderVariants = i1724
  i1722.name = i1723[1]
  var i1727 = i1723[2]
  var i1726 = []
  for(var i = 0; i < i1727.length; i += 1) {
    i1726.push( i1727[i + 0] );
  }
  i1722.shaderDefinedKeywords = i1726
  var i1729 = i1723[3]
  var i1728 = []
  for(var i = 0; i < i1729.length; i += 1) {
    i1728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1729[i + 0]) );
  }
  i1722.passes = i1728
  var i1731 = i1723[4]
  var i1730 = []
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1731[i + 0]) );
  }
  i1722.defaultParameterValues = i1730
  request.r(i1723[5], i1723[6], 0, i1722, 'unityFallbackShader')
  i1722.readDepth = !!i1723[7]
  return i1722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1738 = root || new pc.UnityShaderPass()
  var i1739 = data
  i1738.passType = i1739[0]
  i1738.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1739[1], i1738.zTest)
  i1738.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1739[2], i1738.zWrite)
  i1738.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1739[3], i1738.culling)
  i1738.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1739[4], i1738.blending)
  i1738.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1739[5], i1738.alphaBlending)
  i1738.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1739[6], i1738.colorWriteMask)
  i1738.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1739[7], i1738.offsetUnits)
  i1738.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1739[8], i1738.offsetFactor)
  i1738.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1739[9], i1738.stencilRef)
  i1738.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1739[10], i1738.stencilReadMask)
  i1738.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1739[11], i1738.stencilWriteMask)
  i1738.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1739[12], i1738.stencilOp)
  i1738.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1739[13], i1738.stencilOpFront)
  i1738.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1739[14], i1738.stencilOpBack)
  var i1741 = i1739[15]
  var i1740 = []
  for(var i = 0; i < i1741.length; i += 1) {
    i1740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1741[i + 0]) );
  }
  i1738.tags = i1740
  var i1743 = i1739[16]
  var i1742 = []
  for(var i = 0; i < i1743.length; i += 1) {
    i1742.push( i1743[i + 0] );
  }
  i1738.passDefinedKeywords = i1742
  var i1745 = i1739[17]
  var i1744 = []
  for(var i = 0; i < i1745.length; i += 1) {
    i1744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1745[i + 0]) );
  }
  i1738.variants = i1744
  i1738.readDepth = !!i1739[18]
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1747 = data
  i1746.val = i1747[0]
  i1746.name = i1747[1]
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1749 = data
  i1748.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1749[0], i1748.src)
  i1748.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1749[1], i1748.dst)
  i1748.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1749[2], i1748.op)
  return i1748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1751 = data
  i1750.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1751[0], i1750.pass)
  i1750.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1751[1], i1750.fail)
  i1750.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1751[2], i1750.zFail)
  i1750.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1751[3], i1750.comp)
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1755 = data
  i1754.name = i1755[0]
  i1754.value = i1755[1]
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1759 = data
  var i1761 = i1759[0]
  var i1760 = []
  for(var i = 0; i < i1761.length; i += 1) {
    i1760.push( i1761[i + 0] );
  }
  i1758.keywords = i1760
  i1758.vertexProgram = i1759[1]
  i1758.fragmentProgram = i1759[2]
  i1758.readDepth = !!i1759[3]
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1765 = data
  i1764.name = i1765[0]
  i1764.type = i1765[1]
  i1764.value = new pc.Vec4( i1765[2], i1765[3], i1765[4], i1765[5] )
  i1764.textureValue = i1765[6]
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1767 = data
  i1766.name = i1767[0]
  request.r(i1767[1], i1767[2], 0, i1766, 'texture')
  i1766.aabb = i1767[3]
  i1766.vertices = i1767[4]
  i1766.triangles = i1767[5]
  i1766.textureRect = UnityEngine.Rect.MinMaxRect(i1767[6], i1767[7], i1767[8], i1767[9])
  i1766.packedRect = UnityEngine.Rect.MinMaxRect(i1767[10], i1767[11], i1767[12], i1767[13])
  i1766.border = new pc.Vec4( i1767[14], i1767[15], i1767[16], i1767[17] )
  i1766.transparency = i1767[18]
  i1766.bounds = i1767[19]
  i1766.pixelsPerUnit = i1767[20]
  i1766.textureWidth = i1767[21]
  i1766.textureHeight = i1767[22]
  i1766.nativeSize = new pc.Vec2( i1767[23], i1767[24] )
  i1766.pivot = new pc.Vec2( i1767[25], i1767[26] )
  i1766.textureRectOffset = new pc.Vec2( i1767[27], i1767[28] )
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1769 = data
  i1768.name = i1769[0]
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1771 = data
  i1770.name = i1771[0]
  i1770.wrapMode = i1771[1]
  i1770.isLooping = !!i1771[2]
  i1770.length = i1771[3]
  var i1773 = i1771[4]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1773[i + 0]) );
  }
  i1770.curves = i1772
  var i1775 = i1771[5]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1775[i + 0]) );
  }
  i1770.events = i1774
  i1770.halfPrecision = !!i1771[6]
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1779 = data
  i1778.path = i1779[0]
  i1778.componentType = i1779[1]
  i1778.property = i1779[2]
  i1778.keys = i1779[3]
  var i1781 = i1779[4]
  var i1780 = []
  for(var i = 0; i < i1781.length; i += 1) {
    i1780.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1781[i + 0]) );
  }
  i1778.objectReferenceKeys = i1780
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1785 = data
  i1784.time = i1785[0]
  request.r(i1785[1], i1785[2], 0, i1784, 'value')
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1789 = data
  i1788.functionName = i1789[0]
  i1788.floatParameter = i1789[1]
  i1788.intParameter = i1789[2]
  i1788.stringParameter = i1789[3]
  request.r(i1789[4], i1789[5], 0, i1788, 'objectReferenceParameter')
  i1788.time = i1789[6]
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1791 = data
  i1790.name = i1791[0]
  i1790.ascent = i1791[1]
  i1790.originalLineHeight = i1791[2]
  i1790.fontSize = i1791[3]
  var i1793 = i1791[4]
  var i1792 = []
  for(var i = 0; i < i1793.length; i += 1) {
    i1792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1793[i + 0]) );
  }
  i1790.characterInfo = i1792
  request.r(i1791[5], i1791[6], 0, i1790, 'texture')
  i1790.originalFontSize = i1791[7]
  return i1790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1797 = data
  i1796.index = i1797[0]
  i1796.advance = i1797[1]
  i1796.bearing = i1797[2]
  i1796.glyphWidth = i1797[3]
  i1796.glyphHeight = i1797[4]
  i1796.minX = i1797[5]
  i1796.maxX = i1797[6]
  i1796.minY = i1797[7]
  i1796.maxY = i1797[8]
  i1796.uvBottomLeftX = i1797[9]
  i1796.uvBottomLeftY = i1797[10]
  i1796.uvBottomRightX = i1797[11]
  i1796.uvBottomRightY = i1797[12]
  i1796.uvTopLeftX = i1797[13]
  i1796.uvTopLeftY = i1797[14]
  i1796.uvTopRightX = i1797[15]
  i1796.uvTopRightY = i1797[16]
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1799 = data
  i1798.name = i1799[0]
  var i1801 = i1799[1]
  var i1800 = []
  for(var i = 0; i < i1801.length; i += 1) {
    i1800.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1801[i + 0]) );
  }
  i1798.states = i1800
  var i1803 = i1799[2]
  var i1802 = []
  for(var i = 0; i < i1803.length; i += 1) {
    i1802.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1803[i + 0]) );
  }
  i1798.layers = i1802
  var i1805 = i1799[3]
  var i1804 = []
  for(var i = 0; i < i1805.length; i += 1) {
    i1804.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1805[i + 0]) );
  }
  i1798.parameters = i1804
  var i1807 = i1799[4]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 1) {
    i1806.push( i1807[i + 0] );
  }
  i1798.animationClips = i1806
  return i1798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1811 = data
  i1810.cycleOffset = i1811[0]
  i1810.cycleOffsetParameter = i1811[1]
  i1810.cycleOffsetParameterActive = !!i1811[2]
  i1810.mirror = !!i1811[3]
  i1810.mirrorParameter = i1811[4]
  i1810.mirrorParameterActive = !!i1811[5]
  i1810.motionId = i1811[6]
  i1810.nameHash = i1811[7]
  i1810.fullPathHash = i1811[8]
  i1810.speed = i1811[9]
  i1810.speedParameter = i1811[10]
  i1810.speedParameterActive = !!i1811[11]
  i1810.tag = i1811[12]
  i1810.name = i1811[13]
  i1810.writeDefaultValues = !!i1811[14]
  var i1813 = i1811[15]
  var i1812 = []
  for(var i = 0; i < i1813.length; i += 1) {
    i1812.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1813[i + 0]) );
  }
  i1810.transitions = i1812
  var i1815 = i1811[16]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 2) {
  request.r(i1815[i + 0], i1815[i + 1], 2, i1814, '')
  }
  i1810.behaviours = i1814
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1819 = data
  i1818.fullPath = i1819[0]
  i1818.canTransitionToSelf = !!i1819[1]
  i1818.duration = i1819[2]
  i1818.exitTime = i1819[3]
  i1818.hasExitTime = !!i1819[4]
  i1818.hasFixedDuration = !!i1819[5]
  i1818.interruptionSource = i1819[6]
  i1818.offset = i1819[7]
  i1818.orderedInterruption = !!i1819[8]
  i1818.destinationStateNameHash = i1819[9]
  i1818.destinationStateMachineId = i1819[10]
  i1818.isExit = !!i1819[11]
  i1818.mute = !!i1819[12]
  i1818.solo = !!i1819[13]
  var i1821 = i1819[14]
  var i1820 = []
  for(var i = 0; i < i1821.length; i += 1) {
    i1820.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1821[i + 0]) );
  }
  i1818.conditions = i1820
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1827 = data
  i1826.blendingMode = i1827[0]
  i1826.defaultWeight = i1827[1]
  i1826.name = i1827[2]
  i1826.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1827[3], i1826.stateMachine)
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1829 = data
  i1828.id = i1829[0]
  i1828.defaultStateNameHash = i1829[1]
  var i1831 = i1829[2]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1831[i + 0]) );
  }
  i1828.entryTransitions = i1830
  var i1833 = i1829[3]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1833[i + 0]) );
  }
  i1828.anyStateTransitions = i1832
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1837 = data
  i1836.destinationStateNameHash = i1837[0]
  i1836.destinationStateMachineId = i1837[1]
  i1836.isExit = !!i1837[2]
  i1836.mute = !!i1837[3]
  i1836.solo = !!i1837[4]
  var i1839 = i1837[5]
  var i1838 = []
  for(var i = 0; i < i1839.length; i += 1) {
    i1838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1839[i + 0]) );
  }
  i1836.conditions = i1838
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1843 = data
  i1842.defaultBool = !!i1843[0]
  i1842.defaultFloat = i1843[1]
  i1842.defaultInt = i1843[2]
  i1842.name = i1843[3]
  i1842.nameHash = i1843[4]
  i1842.type = i1843[5]
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1845 = data
  i1844.name = i1845[0]
  i1844.bytes64 = i1845[1]
  i1844.data = i1845[2]
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1847 = data
  var i1849 = i1847[0]
  var i1848 = []
  for(var i = 0; i < i1849.length; i += 1) {
    i1848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1849[i + 0]) );
  }
  i1846.files = i1848
  i1846.componentToPrefabIds = i1847[1]
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1853 = data
  i1852.path = i1853[0]
  request.r(i1853[1], i1853[2], 0, i1852, 'unityObject')
  return i1852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1855 = data
  var i1857 = i1855[0]
  var i1856 = []
  for(var i = 0; i < i1857.length; i += 1) {
    i1856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1857[i + 0]) );
  }
  i1854.scriptsExecutionOrder = i1856
  var i1859 = i1855[1]
  var i1858 = []
  for(var i = 0; i < i1859.length; i += 1) {
    i1858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1859[i + 0]) );
  }
  i1854.sortingLayers = i1858
  var i1861 = i1855[2]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 1) {
    i1860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1861[i + 0]) );
  }
  i1854.cullingLayers = i1860
  i1854.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1855[3], i1854.timeSettings)
  i1854.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1855[4], i1854.physicsSettings)
  i1854.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1855[5], i1854.physics2DSettings)
  i1854.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1855[6], i1854.qualitySettings)
  i1854.removeShadows = !!i1855[7]
  i1854.autoInstantiatePrefabs = !!i1855[8]
  i1854.enableAutoInstancing = !!i1855[9]
  i1854.lightmapEncodingQuality = i1855[10]
  i1854.desiredColorSpace = i1855[11]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1865 = data
  i1864.name = i1865[0]
  i1864.value = i1865[1]
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1869 = data
  i1868.id = i1869[0]
  i1868.name = i1869[1]
  i1868.value = i1869[2]
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1873 = data
  i1872.id = i1873[0]
  i1872.name = i1873[1]
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1875 = data
  i1874.fixedDeltaTime = i1875[0]
  i1874.maximumDeltaTime = i1875[1]
  i1874.timeScale = i1875[2]
  i1874.maximumParticleTimestep = i1875[3]
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1877 = data
  i1876.gravity = new pc.Vec3( i1877[0], i1877[1], i1877[2] )
  i1876.defaultSolverIterations = i1877[3]
  i1876.bounceThreshold = i1877[4]
  i1876.autoSyncTransforms = !!i1877[5]
  i1876.autoSimulation = !!i1877[6]
  var i1879 = i1877[7]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1879[i + 0]) );
  }
  i1876.collisionMatrix = i1878
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1883 = data
  i1882.enabled = !!i1883[0]
  i1882.layerId = i1883[1]
  i1882.otherLayerId = i1883[2]
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1885 = data
  request.r(i1885[0], i1885[1], 0, i1884, 'material')
  i1884.gravity = new pc.Vec2( i1885[2], i1885[3] )
  i1884.positionIterations = i1885[4]
  i1884.velocityIterations = i1885[5]
  i1884.velocityThreshold = i1885[6]
  i1884.maxLinearCorrection = i1885[7]
  i1884.maxAngularCorrection = i1885[8]
  i1884.maxTranslationSpeed = i1885[9]
  i1884.maxRotationSpeed = i1885[10]
  i1884.timeToSleep = i1885[11]
  i1884.linearSleepTolerance = i1885[12]
  i1884.angularSleepTolerance = i1885[13]
  i1884.defaultContactOffset = i1885[14]
  i1884.autoSimulation = !!i1885[15]
  i1884.queriesHitTriggers = !!i1885[16]
  i1884.queriesStartInColliders = !!i1885[17]
  i1884.callbacksOnDisable = !!i1885[18]
  i1884.reuseCollisionCallbacks = !!i1885[19]
  i1884.autoSyncTransforms = !!i1885[20]
  var i1887 = i1885[21]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1887[i + 0]) );
  }
  i1884.collisionMatrix = i1886
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1891 = data
  i1890.enabled = !!i1891[0]
  i1890.layerId = i1891[1]
  i1890.otherLayerId = i1891[2]
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1893 = data
  var i1895 = i1893[0]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1895[i + 0]) );
  }
  i1892.qualityLevels = i1894
  var i1897 = i1893[1]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.push( i1897[i + 0] );
  }
  i1892.names = i1896
  i1892.shadows = i1893[2]
  i1892.anisotropicFiltering = i1893[3]
  i1892.antiAliasing = i1893[4]
  i1892.lodBias = i1893[5]
  i1892.shadowCascades = i1893[6]
  i1892.shadowDistance = i1893[7]
  i1892.shadowmaskMode = i1893[8]
  i1892.shadowProjection = i1893[9]
  i1892.shadowResolution = i1893[10]
  i1892.softParticles = !!i1893[11]
  i1892.softVegetation = !!i1893[12]
  i1892.activeColorSpace = i1893[13]
  i1892.desiredColorSpace = i1893[14]
  i1892.masterTextureLimit = i1893[15]
  i1892.maxQueuedFrames = i1893[16]
  i1892.particleRaycastBudget = i1893[17]
  i1892.pixelLightCount = i1893[18]
  i1892.realtimeReflectionProbes = !!i1893[19]
  i1892.shadowCascade2Split = i1893[20]
  i1892.shadowCascade4Split = new pc.Vec3( i1893[21], i1893[22], i1893[23] )
  i1892.streamingMipmapsActive = !!i1893[24]
  i1892.vSyncCount = i1893[25]
  i1892.asyncUploadBufferSize = i1893[26]
  i1892.asyncUploadTimeSlice = i1893[27]
  i1892.billboardsFaceCameraPosition = !!i1893[28]
  i1892.shadowNearPlaneOffset = i1893[29]
  i1892.streamingMipmapsMemoryBudget = i1893[30]
  i1892.maximumLODLevel = i1893[31]
  i1892.streamingMipmapsAddAllCameras = !!i1893[32]
  i1892.streamingMipmapsMaxLevelReduction = i1893[33]
  i1892.streamingMipmapsRenderersPerFrame = i1893[34]
  i1892.resolutionScalingFixedDPIFactor = i1893[35]
  i1892.streamingMipmapsMaxFileIORequests = i1893[36]
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1903 = data
  i1902.weight = i1903[0]
  i1902.vertices = i1903[1]
  i1902.normals = i1903[2]
  i1902.tangents = i1903[3]
  return i1902
}

Deserializers["Data"] = function (request, data, root) {
  var i1906 = root || request.c( 'Data' )
  var i1907 = data
  i1906.stick = i1907[0]
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1911 = data
  i1910.mode = i1911[0]
  i1910.parameter = i1911[1]
  i1910.threshold = i1911[2]
  return i1910
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"playOnAwake":2,"loop":3,"time":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"shaderDefinedKeywords":2,"passes":3,"defaultParameterValues":4,"unityFallbackShader":5,"readDepth":7},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"passType":0,"zTest":1,"zWrite":2,"culling":3,"blending":4,"alphaBlending":5,"colorWriteMask":6,"offsetUnits":7,"offsetFactor":8,"stencilRef":9,"stencilReadMask":10,"stencilWriteMask":11,"stencilOp":12,"stencilOpFront":13,"stencilOpBack":14,"tags":15,"passDefinedKeywords":16,"variants":17,"readDepth":18},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"keywords":0,"vertexProgram":1,"fragmentProgram":2,"readDepth":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"removeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[52],"53":[2],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[63],"71":[63],"72":[63],"73":[63],"74":[63],"75":[63],"76":[2],"77":[8],"78":[79],"80":[79],"26":[25],"81":[25],"82":[30,25],"83":[8],"84":[30,25],"85":[25],"86":[8,25],"87":[25,30],"88":[25],"89":[25],"90":[25],"29":[26],"31":[30,25],"91":[25],"28":[26],"92":[25],"93":[25],"94":[25],"95":[25],"96":[25],"97":[25],"98":[25],"99":[25],"100":[25],"101":[30,25],"102":[25],"103":[25],"104":[25],"105":[25],"33":[30,25],"106":[25],"107":[38],"108":[38],"39":[38],"109":[38],"110":[2],"111":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","ViewPortHandler","UnityEngine.Light","HopManager","UnityEngine.MeshRenderer","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.GameObject","UnityEngine.BoxCollider","StickManager","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Texture2D","GameManager","CountDown","UIManager","Database","UnityEngine.AudioSource","SoundManager","UnityEngine.AudioClip","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.UI.Button","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","UnityEngine.Cubemap","UnityEngine.AnimationClip","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2020.3.16f1";

Deserializers.productName = "Color-Hoop-Playable-Ad";

Deserializers.lunaInitializationTime = "09/21/2021 14:17:53";

Deserializers.lunaVersion = "2.4.0";

Deserializers.lunaSHA = "7b8cbca8c495efce4f9d153d909ba0d3ff6521ee";

Deserializers.packagesInfo = "com.unity.collab-proxy: 1.7.1,com.unity.ide.rider: 2.0.7,com.unity.ide.visualstudio: 2.0.11,com.unity.ide.vscode: 1.2.3,com.unity.test-framework: 1.1.27,com.unity.textmeshpro: 3.0.6,com.unity.timeline: 1.4.8,com.unity.ugui: 1.0.0,uk.lunalabs.luna: file:D:/Studio Projects/Luna/scripts,com.unity.modules.ai: 1.0.0,com.unity.modules.androidjni: 1.0.0,com.unity.modules.animation: 1.0.0,com.unity.modules.assetbundle: 1.0.0,com.unity.modules.audio: 1.0.0,com.unity.modules.cloth: 1.0.0,com.unity.modules.director: 1.0.0,com.unity.modules.imageconversion: 1.0.0,com.unity.modules.imgui: 1.0.0,com.unity.modules.jsonserialize: 1.0.0,com.unity.modules.particlesystem: 1.0.0,com.unity.modules.physics: 1.0.0,com.unity.modules.physics2d: 1.0.0,com.unity.modules.screencapture: 1.0.0,com.unity.modules.terrain: 1.0.0,com.unity.modules.terrainphysics: 1.0.0,com.unity.modules.tilemap: 1.0.0,com.unity.modules.ui: 1.0.0,com.unity.modules.uielements: 1.0.0,com.unity.modules.umbra: 1.0.0,com.unity.modules.unityanalytics: 1.0.0,com.unity.modules.unitywebrequest: 1.0.0,com.unity.modules.unitywebrequestassetbundle: 1.0.0,com.unity.modules.unitywebrequestaudio: 1.0.0,com.unity.modules.unitywebrequesttexture: 1.0.0,com.unity.modules.unitywebrequestwww: 1.0.0,com.unity.modules.vehicles: 1.0.0,com.unity.modules.video: 1.0.0,com.unity.modules.vr: 1.0.0,com.unity.modules.wind: 1.0.0,com.unity.modules.xr: 1.0.0";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.ColorHoopPlayableAd";

Deserializers.disableAntiAliasing = false;

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

