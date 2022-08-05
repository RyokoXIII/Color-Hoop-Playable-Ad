var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.JointSpring' )
  var i609 = data
  i608.spring = i609[0]
  i608.damper = i609[1]
  i608.targetPosition = i609[2]
  return i608
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.JointMotor' )
  var i611 = data
  i610.m_TargetVelocity = i611[0]
  i610.m_Force = i611[1]
  i610.m_FreeSpin = i611[2]
  return i610
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.JointLimits' )
  var i613 = data
  i612.m_Min = i613[0]
  i612.m_Max = i613[1]
  i612.m_Bounciness = i613[2]
  i612.m_BounceMinVelocity = i613[3]
  i612.m_ContactDistance = i613[4]
  i612.minBounce = i613[5]
  i612.maxBounce = i613[6]
  return i612
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.JointDrive' )
  var i615 = data
  i614.m_PositionSpring = i615[0]
  i614.m_PositionDamper = i615[1]
  i614.m_MaximumForce = i615[2]
  return i614
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i617 = data
  i616.m_Spring = i617[0]
  i616.m_Damper = i617[1]
  return i616
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i619 = data
  i618.m_Limit = i619[0]
  i618.m_Bounciness = i619[1]
  i618.m_ContactDistance = i619[2]
  return i618
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i621 = data
  i620.m_ExtremumSlip = i621[0]
  i620.m_ExtremumValue = i621[1]
  i620.m_AsymptoteSlip = i621[2]
  i620.m_AsymptoteValue = i621[3]
  i620.m_Stiffness = i621[4]
  return i620
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i623 = data
  i622.m_LowerAngle = i623[0]
  i622.m_UpperAngle = i623[1]
  return i622
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i625 = data
  i624.m_MotorSpeed = i625[0]
  i624.m_MaximumMotorTorque = i625[1]
  return i624
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i627 = data
  i626.m_DampingRatio = i627[0]
  i626.m_Frequency = i627[1]
  i626.m_Angle = i627[2]
  return i626
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i629 = data
  i628.m_LowerTranslation = i629[0]
  i628.m_UpperTranslation = i629[1]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i630 = root || new pc.UnityMaterial()
  var i631 = data
  i630.name = i631[0]
  request.r(i631[1], i631[2], 0, i630, 'shader')
  i630.renderQueue = i631[3]
  i630.enableInstancing = !!i631[4]
  var i633 = i631[5]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i633[i + 0]) );
  }
  i630.floatParameters = i632
  var i635 = i631[6]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i635[i + 0]) );
  }
  i630.colorParameters = i634
  var i637 = i631[7]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i637[i + 0]) );
  }
  i630.vectorParameters = i636
  var i639 = i631[8]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i639[i + 0]) );
  }
  i630.textureParameters = i638
  var i641 = i631[9]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i641[i + 0]) );
  }
  i630.materialFlags = i640
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i645 = data
  i644.name = i645[0]
  i644.value = i645[1]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i649 = data
  i648.name = i649[0]
  i648.value = new pc.Color(i649[1], i649[2], i649[3], i649[4])
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i653 = data
  i652.name = i653[0]
  i652.value = new pc.Vec4( i653[1], i653[2], i653[3], i653[4] )
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i657 = data
  i656.name = i657[0]
  request.r(i657[1], i657[2], 0, i656, 'value')
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i661 = data
  i660.name = i661[0]
  i660.enabled = !!i661[1]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i663 = data
  i662.name = i663[0]
  i662.width = i663[1]
  i662.height = i663[2]
  i662.mipmapCount = i663[3]
  i662.anisoLevel = i663[4]
  i662.filterMode = i663[5]
  i662.hdr = !!i663[6]
  i662.format = i663[7]
  i662.wrapMode = i663[8]
  i662.alphaIsTransparency = !!i663[9]
  i662.alphaSource = i663[10]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i665 = data
  i664.position = new pc.Vec3( i665[0], i665[1], i665[2] )
  i664.scale = new pc.Vec3( i665[3], i665[4], i665[5] )
  i664.rotation = new pc.Quat(i665[6], i665[7], i665[8], i665[9])
  return i664
}

Deserializers["HopManager"] = function (request, data, root) {
  var i666 = root || request.c( 'HopManager' )
  var i667 = data
  i666.hoopColor = i667[0]
  request.r(i667[1], i667[2], 0, i666, 'meshRenderer')
  request.r(i667[3], i667[4], 0, i666, 'obj')
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'sharedMesh')
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'additionalVertexStreams')
  i670.enabled = !!i671[2]
  request.r(i671[3], i671[4], 0, i670, 'sharedMaterial')
  var i673 = i671[5]
  var i672 = []
  for(var i = 0; i < i673.length; i += 2) {
  request.r(i673[i + 0], i673[i + 1], 2, i672, '')
  }
  i670.sharedMaterials = i672
  i670.receiveShadows = !!i671[6]
  i670.shadowCastingMode = i671[7]
  i670.sortingLayerID = i671[8]
  i670.sortingOrder = i671[9]
  i670.lightmapIndex = i671[10]
  i670.lightmapSceneIndex = i671[11]
  i670.lightmapScaleOffset = new pc.Vec4( i671[12], i671[13], i671[14], i671[15] )
  i670.lightProbeUsage = i671[16]
  i670.reflectionProbeUsage = i671[17]
  return i670
}

Deserializers["JellyMesh"] = function (request, data, root) {
  var i676 = root || request.c( 'JellyMesh' )
  var i677 = data
  i676.Intensity = i677[0]
  i676.Mass = i677[1]
  i676.stiffness = i677[2]
  i676.damping = i677[3]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i679 = data
  i678.name = i679[0]
  i678.tag = i679[1]
  i678.enabled = !!i679[2]
  i678.isStatic = !!i679[3]
  i678.layer = i679[4]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i681 = data
  i680.name = i681[0]
  i680.halfPrecision = !!i681[1]
  i680.vertexCount = i681[2]
  i680.aabb = i681[3]
  var i683 = i681[4]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( !!i683[i + 0] );
  }
  i680.streams = i682
  i680.vertices = i681[5]
  var i685 = i681[6]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i685[i + 0]) );
  }
  i680.subMeshes = i684
  var i687 = i681[7]
  var i686 = []
  for(var i = 0; i < i687.length; i += 16) {
    i686.push( new pc.Mat4().setData(i687[i + 0], i687[i + 1], i687[i + 2], i687[i + 3],  i687[i + 4], i687[i + 5], i687[i + 6], i687[i + 7],  i687[i + 8], i687[i + 9], i687[i + 10], i687[i + 11],  i687[i + 12], i687[i + 13], i687[i + 14], i687[i + 15]) );
  }
  i680.bindposes = i686
  var i689 = i681[8]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i689[i + 0]) );
  }
  i680.blendShapes = i688
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i695 = data
  i694.triangles = i695[0]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i701 = data
  i700.name = i701[0]
  var i703 = i701[1]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i703[i + 0]) );
  }
  i700.frames = i702
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i705 = data
  i704.center = new pc.Vec3( i705[0], i705[1], i705[2] )
  i704.size = new pc.Vec3( i705[3], i705[4], i705[5] )
  i704.enabled = !!i705[6]
  i704.isTrigger = !!i705[7]
  request.r(i705[8], i705[9], 0, i704, 'material')
  return i704
}

Deserializers["StickManager"] = function (request, data, root) {
  var i706 = root || request.c( 'StickManager' )
  var i707 = data
  var i709 = i707[0]
  var i708 = new (System.Collections.Generic.List$1(Bridge.ns('HopManager')))
  for(var i = 0; i < i709.length; i += 2) {
  request.r(i709[i + 0], i709[i + 1], 1, i708, '')
  }
  i706.hops = i708
  i706.isDone = !!i707[1]
  i706.isShowFinish = !!i707[2]
  i706.indexStick = i707[3]
  request.r(i707[4], i707[5], 0, i706, 'startPoint')
  request.r(i707[6], i707[7], 0, i706, 'victoryEffect')
  request.r(i707[8], i707[9], 0, i706, 'stick4')
  request.r(i707[10], i707[11], 0, i706, 'stick5')
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i713 = data
  i712.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i713[0], i712.main)
  i712.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i713[1], i712.colorBySpeed)
  i712.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i713[2], i712.colorOverLifetime)
  i712.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i713[3], i712.emission)
  i712.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i713[4], i712.rotationBySpeed)
  i712.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i713[5], i712.rotationOverLifetime)
  i712.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i713[6], i712.shape)
  i712.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i713[7], i712.sizeBySpeed)
  i712.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i713[8], i712.sizeOverLifetime)
  i712.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i713[9], i712.textureSheetAnimation)
  i712.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i713[10], i712.velocityOverLifetime)
  i712.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i713[11], i712.noise)
  i712.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i713[12], i712.inheritVelocity)
  i712.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i713[13], i712.forceOverLifetime)
  i712.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i713[14], i712.limitVelocityOverLifetime)
  i712.useAutoRandomSeed = !!i713[15]
  i712.randomSeed = i713[16]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i714 = root || new pc.ParticleSystemMain()
  var i715 = data
  i714.duration = i715[0]
  i714.loop = !!i715[1]
  i714.prewarm = !!i715[2]
  i714.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[3], i714.startDelay)
  i714.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[4], i714.startLifetime)
  i714.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[5], i714.startSpeed)
  i714.startSize3D = !!i715[6]
  i714.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[7], i714.startSizeX)
  i714.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[8], i714.startSizeY)
  i714.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[9], i714.startSizeZ)
  i714.startRotation3D = !!i715[10]
  i714.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[11], i714.startRotationX)
  i714.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[12], i714.startRotationY)
  i714.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[13], i714.startRotationZ)
  i714.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i715[14], i714.startColor)
  i714.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[15], i714.gravityModifier)
  i714.simulationSpace = i715[16]
  request.r(i715[17], i715[18], 0, i714, 'customSimulationSpace')
  i714.simulationSpeed = i715[19]
  i714.useUnscaledTime = !!i715[20]
  i714.scalingMode = i715[21]
  i714.playOnAwake = !!i715[22]
  i714.maxParticles = i715[23]
  i714.emitterVelocityMode = i715[24]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i716 = root || new pc.MinMaxCurve()
  var i717 = data
  i716.mode = i717[0]
  i716.curveMin = new pc.AnimationCurve( { keys_flow: i717[1] } )
  i716.curveMax = new pc.AnimationCurve( { keys_flow: i717[2] } )
  i716.curveMultiplier = i717[3]
  i716.constantMin = i717[4]
  i716.constantMax = i717[5]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i718 = root || new pc.MinMaxGradient()
  var i719 = data
  i718.mode = i719[0]
  i718.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i719[1], i718.gradientMin)
  i718.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i719[2], i718.gradientMax)
  i718.colorMin = new pc.Color(i719[3], i719[4], i719[5], i719[6])
  i718.colorMax = new pc.Color(i719[7], i719[8], i719[9], i719[10])
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i721 = data
  i720.mode = i721[0]
  var i723 = i721[1]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i723[i + 0]) );
  }
  i720.colorKeys = i722
  var i725 = i721[2]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i725[i + 0]) );
  }
  i720.alphaKeys = i724
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i726 = root || new pc.ParticleSystemColorBySpeed()
  var i727 = data
  i726.enabled = !!i727[0]
  i726.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i727[1], i726.color)
  i726.range = new pc.Vec2( i727[2], i727[3] )
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i731 = data
  i730.color = new pc.Color(i731[0], i731[1], i731[2], i731[3])
  i730.time = i731[4]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i735 = data
  i734.alpha = i735[0]
  i734.time = i735[1]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i736 = root || new pc.ParticleSystemColorOverLifetime()
  var i737 = data
  i736.enabled = !!i737[0]
  i736.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i737[1], i736.color)
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i738 = root || new pc.ParticleSystemEmitter()
  var i739 = data
  i738.enabled = !!i739[0]
  i738.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[1], i738.rateOverTime)
  i738.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[2], i738.rateOverDistance)
  var i741 = i739[3]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i741[i + 0]) );
  }
  i738.bursts = i740
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i744 = root || new pc.ParticleSystemBurst()
  var i745 = data
  i744.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[0], i744.count)
  i744.cycleCount = i745[1]
  i744.minCount = i745[2]
  i744.maxCount = i745[3]
  i744.repeatInterval = i745[4]
  i744.time = i745[5]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i746 = root || new pc.ParticleSystemRotationBySpeed()
  var i747 = data
  i746.enabled = !!i747[0]
  i746.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[1], i746.x)
  i746.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[2], i746.y)
  i746.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[3], i746.z)
  i746.separateAxes = !!i747[4]
  i746.range = new pc.Vec2( i747[5], i747[6] )
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i748 = root || new pc.ParticleSystemRotationOverLifetime()
  var i749 = data
  i748.enabled = !!i749[0]
  i748.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[1], i748.x)
  i748.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[2], i748.y)
  i748.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[3], i748.z)
  i748.separateAxes = !!i749[4]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i750 = root || new pc.ParticleSystemShape()
  var i751 = data
  i750.enabled = !!i751[0]
  i750.shapeType = i751[1]
  i750.randomDirectionAmount = i751[2]
  i750.sphericalDirectionAmount = i751[3]
  i750.randomPositionAmount = i751[4]
  i750.alignToDirection = !!i751[5]
  i750.radius = i751[6]
  i750.radiusMode = i751[7]
  i750.radiusSpread = i751[8]
  i750.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[9], i750.radiusSpeed)
  i750.radiusThickness = i751[10]
  i750.angle = i751[11]
  i750.length = i751[12]
  i750.boxThickness = new pc.Vec3( i751[13], i751[14], i751[15] )
  i750.meshShapeType = i751[16]
  request.r(i751[17], i751[18], 0, i750, 'mesh')
  request.r(i751[19], i751[20], 0, i750, 'meshRenderer')
  request.r(i751[21], i751[22], 0, i750, 'skinnedMeshRenderer')
  i750.useMeshMaterialIndex = !!i751[23]
  i750.meshMaterialIndex = i751[24]
  i750.useMeshColors = !!i751[25]
  i750.normalOffset = i751[26]
  i750.arc = i751[27]
  i750.arcMode = i751[28]
  i750.arcSpread = i751[29]
  i750.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[30], i750.arcSpeed)
  i750.donutRadius = i751[31]
  i750.position = new pc.Vec3( i751[32], i751[33], i751[34] )
  i750.rotation = new pc.Vec3( i751[35], i751[36], i751[37] )
  i750.scale = new pc.Vec3( i751[38], i751[39], i751[40] )
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i752 = root || new pc.ParticleSystemSizeBySpeed()
  var i753 = data
  i752.enabled = !!i753[0]
  i752.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[1], i752.x)
  i752.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[2], i752.y)
  i752.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[3], i752.z)
  i752.separateAxes = !!i753[4]
  i752.range = new pc.Vec2( i753[5], i753[6] )
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i754 = root || new pc.ParticleSystemSizeOverLifetime()
  var i755 = data
  i754.enabled = !!i755[0]
  i754.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[1], i754.x)
  i754.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[2], i754.y)
  i754.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[3], i754.z)
  i754.separateAxes = !!i755[4]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i757 = data
  i756.enabled = !!i757[0]
  i756.mode = i757[1]
  i756.animation = i757[2]
  i756.numTilesX = i757[3]
  i756.numTilesY = i757[4]
  i756.useRandomRow = !!i757[5]
  i756.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[6], i756.frameOverTime)
  i756.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[7], i756.startFrame)
  i756.cycleCount = i757[8]
  i756.rowIndex = i757[9]
  i756.flipU = i757[10]
  i756.flipV = i757[11]
  i756.spriteCount = i757[12]
  var i759 = i757[13]
  var i758 = []
  for(var i = 0; i < i759.length; i += 2) {
  request.r(i759[i + 0], i759[i + 1], 2, i758, '')
  }
  i756.sprites = i758
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i762 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i763 = data
  i762.enabled = !!i763[0]
  i762.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[1], i762.x)
  i762.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[2], i762.y)
  i762.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[3], i762.z)
  i762.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[4], i762.speedModifier)
  i762.space = i763[5]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemNoise()
  var i765 = data
  i764.enabled = !!i765[0]
  i764.separateAxes = !!i765[1]
  i764.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[2], i764.strengthX)
  i764.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[3], i764.strengthY)
  i764.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[4], i764.strengthZ)
  i764.frequency = i765[5]
  i764.damping = !!i765[6]
  i764.octaveCount = i765[7]
  i764.octaveMultiplier = i765[8]
  i764.octaveScale = i765[9]
  i764.quality = i765[10]
  i764.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[11], i764.scrollSpeed)
  i764.scrollSpeedMultiplier = i765[12]
  i764.remapEnabled = !!i765[13]
  i764.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[14], i764.remapX)
  i764.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[15], i764.remapY)
  i764.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[16], i764.remapZ)
  i764.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[17], i764.positionAmount)
  i764.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[18], i764.rotationAmount)
  i764.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[19], i764.sizeAmount)
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemInheritVelocity()
  var i767 = data
  i766.enabled = !!i767[0]
  i766.mode = i767[1]
  i766.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[2], i766.curve)
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemForceOverLifetime()
  var i769 = data
  i768.enabled = !!i769[0]
  i768.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[1], i768.x)
  i768.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[2], i768.y)
  i768.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[3], i768.z)
  i768.space = i769[4]
  i768.randomized = !!i769[5]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i771 = data
  i770.enabled = !!i771[0]
  i770.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[1], i770.limitX)
  i770.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[2], i770.limitY)
  i770.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[3], i770.limitZ)
  i770.dampen = i771[4]
  i770.separateAxes = !!i771[5]
  i770.space = i771[6]
  i770.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[7], i770.drag)
  i770.multiplyDragByParticleSize = !!i771[8]
  i770.multiplyDragByParticleVelocity = !!i771[9]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i773 = data
  i772.enabled = !!i773[0]
  request.r(i773[1], i773[2], 0, i772, 'sharedMaterial')
  var i775 = i773[3]
  var i774 = []
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 2, i774, '')
  }
  i772.sharedMaterials = i774
  i772.receiveShadows = !!i773[4]
  i772.shadowCastingMode = i773[5]
  i772.sortingLayerID = i773[6]
  i772.sortingOrder = i773[7]
  i772.lightmapIndex = i773[8]
  i772.lightmapSceneIndex = i773[9]
  i772.lightmapScaleOffset = new pc.Vec4( i773[10], i773[11], i773[12], i773[13] )
  i772.lightProbeUsage = i773[14]
  i772.reflectionProbeUsage = i773[15]
  request.r(i773[16], i773[17], 0, i772, 'mesh')
  i772.meshCount = i773[18]
  i772.activeVertexStreamsCount = i773[19]
  i772.alignment = i773[20]
  i772.renderMode = i773[21]
  i772.sortMode = i773[22]
  i772.lengthScale = i773[23]
  i772.velocityScale = i773[24]
  i772.cameraVelocityScale = i773[25]
  i772.normalDirection = i773[26]
  i772.sortingFudge = i773[27]
  i772.minParticleSize = i773[28]
  i772.maxParticleSize = i773[29]
  i772.pivot = new pc.Vec3( i773[30], i773[31], i773[32] )
  request.r(i773[33], i773[34], 0, i772, 'trailMaterial')
  return i772
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i776 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i777 = data
  i776.hashCode = i777[0]
  request.r(i777[1], i777[2], 0, i776, 'material')
  i776.materialHashCode = i777[3]
  request.r(i777[4], i777[5], 0, i776, 'atlas')
  i776.normalStyle = i777[6]
  i776.normalSpacingOffset = i777[7]
  i776.boldStyle = i777[8]
  i776.boldSpacing = i777[9]
  i776.italicStyle = i777[10]
  i776.tabSize = i777[11]
  i776.m_Version = i777[12]
  i776.m_SourceFontFileGUID = i777[13]
  request.r(i777[14], i777[15], 0, i776, 'm_SourceFontFile_EditorRef')
  request.r(i777[16], i777[17], 0, i776, 'm_SourceFontFile')
  i776.m_AtlasPopulationMode = i777[18]
  i776.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i777[19], i776.m_FaceInfo)
  var i779 = i777[20]
  var i778 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i779.length; i += 1) {
    i778.add(request.d('UnityEngine.TextCore.Glyph', i779[i + 0]));
  }
  i776.m_GlyphTable = i778
  var i781 = i777[21]
  var i780 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i781.length; i += 1) {
    i780.add(request.d('TMPro.TMP_Character', i781[i + 0]));
  }
  i776.m_CharacterTable = i780
  var i783 = i777[22]
  var i782 = []
  for(var i = 0; i < i783.length; i += 2) {
  request.r(i783[i + 0], i783[i + 1], 2, i782, '')
  }
  i776.m_AtlasTextures = i782
  i776.m_AtlasTextureIndex = i777[23]
  i776.m_IsMultiAtlasTexturesEnabled = !!i777[24]
  var i785 = i777[25]
  var i784 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i785.length; i += 1) {
    i784.add(request.d('UnityEngine.TextCore.GlyphRect', i785[i + 0]));
  }
  i776.m_UsedGlyphRects = i784
  var i787 = i777[26]
  var i786 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i787.length; i += 1) {
    i786.add(request.d('UnityEngine.TextCore.GlyphRect', i787[i + 0]));
  }
  i776.m_FreeGlyphRects = i786
  i776.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i777[27], i776.m_fontInfo)
  i776.m_AtlasWidth = i777[28]
  i776.m_AtlasHeight = i777[29]
  i776.m_AtlasPadding = i777[30]
  i776.m_AtlasRenderMode = i777[31]
  var i789 = i777[32]
  var i788 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i789.length; i += 1) {
    i788.add(request.d('TMPro.TMP_Glyph', i789[i + 0]));
  }
  i776.m_glyphInfoList = i788
  i776.m_KerningTable = request.d('TMPro.KerningTable', i777[33], i776.m_KerningTable)
  i776.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i777[34], i776.m_FontFeatureTable)
  var i791 = i777[35]
  var i790 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 1, i790, '')
  }
  i776.fallbackFontAssets = i790
  var i793 = i777[36]
  var i792 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i793.length; i += 2) {
  request.r(i793[i + 0], i793[i + 1], 1, i792, '')
  }
  i776.m_FallbackFontAssetTable = i792
  i776.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i777[37], i776.m_CreationSettings)
  var i795 = i777[38]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('TMPro.TMP_FontWeightPair', i795[i + 0]) );
  }
  i776.m_FontWeightTable = i794
  var i797 = i777[39]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('TMPro.TMP_FontWeightPair', i797[i + 0]) );
  }
  i776.fontWeights = i796
  return i776
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i799 = data
  i798.m_FaceIndex = i799[0]
  i798.m_FamilyName = i799[1]
  i798.m_StyleName = i799[2]
  i798.m_PointSize = i799[3]
  i798.m_Scale = i799[4]
  i798.m_LineHeight = i799[5]
  i798.m_AscentLine = i799[6]
  i798.m_CapLine = i799[7]
  i798.m_MeanLine = i799[8]
  i798.m_Baseline = i799[9]
  i798.m_DescentLine = i799[10]
  i798.m_SuperscriptOffset = i799[11]
  i798.m_SuperscriptSize = i799[12]
  i798.m_SubscriptOffset = i799[13]
  i798.m_SubscriptSize = i799[14]
  i798.m_UnderlineOffset = i799[15]
  i798.m_UnderlineThickness = i799[16]
  i798.m_StrikethroughOffset = i799[17]
  i798.m_StrikethroughThickness = i799[18]
  i798.m_TabWidth = i799[19]
  return i798
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i803 = data
  i802.m_Index = i803[0]
  i802.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i803[1], i802.m_Metrics)
  i802.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i803[2], i802.m_GlyphRect)
  i802.m_Scale = i803[3]
  i802.m_AtlasIndex = i803[4]
  return i802
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i805 = data
  i804.m_Width = i805[0]
  i804.m_Height = i805[1]
  i804.m_HorizontalBearingX = i805[2]
  i804.m_HorizontalBearingY = i805[3]
  i804.m_HorizontalAdvance = i805[4]
  return i804
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i807 = data
  i806.m_X = i807[0]
  i806.m_Y = i807[1]
  i806.m_Width = i807[2]
  i806.m_Height = i807[3]
  return i806
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i810 = root || request.c( 'TMPro.TMP_Character' )
  var i811 = data
  i810.m_ElementType = i811[0]
  i810.m_Unicode = i811[1]
  i810.m_GlyphIndex = i811[2]
  i810.m_Scale = i811[3]
  return i810
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i816 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i817 = data
  i816.Name = i817[0]
  i816.PointSize = i817[1]
  i816.Scale = i817[2]
  i816.CharacterCount = i817[3]
  i816.LineHeight = i817[4]
  i816.Baseline = i817[5]
  i816.Ascender = i817[6]
  i816.CapHeight = i817[7]
  i816.Descender = i817[8]
  i816.CenterLine = i817[9]
  i816.SuperscriptOffset = i817[10]
  i816.SubscriptOffset = i817[11]
  i816.SubSize = i817[12]
  i816.Underline = i817[13]
  i816.UnderlineThickness = i817[14]
  i816.strikethrough = i817[15]
  i816.strikethroughThickness = i817[16]
  i816.TabWidth = i817[17]
  i816.Padding = i817[18]
  i816.AtlasWidth = i817[19]
  i816.AtlasHeight = i817[20]
  return i816
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i820 = root || request.c( 'TMPro.TMP_Glyph' )
  var i821 = data
  i820.id = i821[0]
  i820.x = i821[1]
  i820.y = i821[2]
  i820.width = i821[3]
  i820.height = i821[4]
  i820.xOffset = i821[5]
  i820.yOffset = i821[6]
  i820.xAdvance = i821[7]
  i820.scale = i821[8]
  return i820
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i822 = root || request.c( 'TMPro.KerningTable' )
  var i823 = data
  var i825 = i823[0]
  var i824 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i825.length; i += 1) {
    i824.add(request.d('TMPro.KerningPair', i825[i + 0]));
  }
  i822.kerningPairs = i824
  return i822
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i828 = root || request.c( 'TMPro.KerningPair' )
  var i829 = data
  i828.xOffset = i829[0]
  i828.m_FirstGlyph = i829[1]
  i828.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i829[2], i828.m_FirstGlyphAdjustments)
  i828.m_SecondGlyph = i829[3]
  i828.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i829[4], i828.m_SecondGlyphAdjustments)
  i828.m_IgnoreSpacingAdjustments = !!i829[5]
  return i828
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i830 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i831 = data
  var i833 = i831[0]
  var i832 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i833.length; i += 1) {
    i832.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i833[i + 0]));
  }
  i830.m_GlyphPairAdjustmentRecords = i832
  return i830
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i836 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i837 = data
  i836.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i837[0], i836.m_FirstAdjustmentRecord)
  i836.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i837[1], i836.m_SecondAdjustmentRecord)
  i836.m_FeatureLookupFlags = i837[2]
  return i836
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i838 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i839 = data
  i838.m_GlyphIndex = i839[0]
  i838.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i839[1], i838.m_GlyphValueRecord)
  return i838
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i840 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i841 = data
  i840.m_XPlacement = i841[0]
  i840.m_YPlacement = i841[1]
  i840.m_XAdvance = i841[2]
  i840.m_YAdvance = i841[3]
  return i840
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i844 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i845 = data
  i844.sourceFontFileName = i845[0]
  i844.sourceFontFileGUID = i845[1]
  i844.pointSizeSamplingMode = i845[2]
  i844.pointSize = i845[3]
  i844.padding = i845[4]
  i844.packingMode = i845[5]
  i844.atlasWidth = i845[6]
  i844.atlasHeight = i845[7]
  i844.characterSetSelectionMode = i845[8]
  i844.characterSequence = i845[9]
  i844.referencedFontAssetGUID = i845[10]
  i844.referencedTextAssetGUID = i845[11]
  i844.fontStyle = i845[12]
  i844.fontStyleModifier = i845[13]
  i844.renderMode = i845[14]
  i844.includeFontFeatures = !!i845[15]
  return i844
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i848 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'regularTypeface')
  request.r(i849[2], i849[3], 0, i848, 'italicTypeface')
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i851 = data
  i850.name = i851[0]
  i850.atlasId = i851[1]
  i850.mipmapCount = i851[2]
  i850.hdr = !!i851[3]
  i850.size = i851[4]
  i850.anisoLevel = i851[5]
  i850.filterMode = i851[6]
  i850.wrapMode = i851[7]
  var i853 = i851[8]
  var i852 = []
  for(var i = 0; i < i853.length; i += 4) {
    i852.push( UnityEngine.Rect.MinMaxRect(i853[i + 0], i853[i + 1], i853[i + 2], i853[i + 3]) );
  }
  i850.rects = i852
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i857 = data
  i856.name = i857[0]
  i856.index = i857[1]
  i856.startup = !!i857[2]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i859 = data
  i858.enabled = !!i859[0]
  i858.aspect = i859[1]
  i858.orthographic = !!i859[2]
  i858.orthographicSize = i859[3]
  i858.backgroundColor = new pc.Color(i859[4], i859[5], i859[6], i859[7])
  i858.nearClipPlane = i859[8]
  i858.farClipPlane = i859[9]
  i858.fieldOfView = i859[10]
  i858.depth = i859[11]
  i858.clearFlags = i859[12]
  i858.cullingMask = i859[13]
  i858.rect = i859[14]
  request.r(i859[15], i859[16], 0, i858, 'targetTexture')
  return i858
}

Deserializers["ViewPortHandler"] = function (request, data, root) {
  var i860 = root || request.c( 'ViewPortHandler' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'camera')
  request.r(i861[2], i861[3], 0, i860, 'mask')
  request.r(i861[4], i861[5], 0, i860, 'mask2')
  request.r(i861[6], i861[7], 0, i860, 'hoopPosContainer')
  request.r(i861[8], i861[9], 0, i860, 'hoopPosContainerTran')
  request.r(i861[10], i861[11], 0, i860, 'bgFitCamera')
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i863 = data
  i862.enabled = !!i863[0]
  i862.type = i863[1]
  i862.color = new pc.Color(i863[2], i863[3], i863[4], i863[5])
  i862.cullingMask = i863[6]
  i862.intensity = i863[7]
  i862.range = i863[8]
  i862.spotAngle = i863[9]
  i862.shadows = i863[10]
  i862.shadowNormalBias = i863[11]
  i862.shadowBias = i863[12]
  i862.shadowStrength = i863[13]
  i862.lightmapBakeType = i863[14]
  i862.renderMode = i863[15]
  request.r(i863[16], i863[17], 0, i862, 'cookie')
  i862.cookieSize = i863[18]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i865 = data
  i864.enabled = !!i865[0]
  request.r(i865[1], i865[2], 0, i864, 'sharedMaterial')
  var i867 = i865[3]
  var i866 = []
  for(var i = 0; i < i867.length; i += 2) {
  request.r(i867[i + 0], i867[i + 1], 2, i866, '')
  }
  i864.sharedMaterials = i866
  i864.receiveShadows = !!i865[4]
  i864.shadowCastingMode = i865[5]
  i864.sortingLayerID = i865[6]
  i864.sortingOrder = i865[7]
  i864.lightmapIndex = i865[8]
  i864.lightmapSceneIndex = i865[9]
  i864.lightmapScaleOffset = new pc.Vec4( i865[10], i865[11], i865[12], i865[13] )
  i864.lightProbeUsage = i865[14]
  i864.reflectionProbeUsage = i865[15]
  i864.color = new pc.Color(i865[16], i865[17], i865[18], i865[19])
  request.r(i865[20], i865[21], 0, i864, 'sprite')
  i864.flipX = !!i865[22]
  i864.flipY = !!i865[23]
  i864.drawMode = i865[24]
  i864.size = new pc.Vec2( i865[25], i865[26] )
  i864.tileMode = i865[27]
  i864.adaptiveModeThreshold = i865[28]
  i864.maskInteraction = i865[29]
  i864.spriteSortPoint = i865[30]
  return i864
}

Deserializers["BackgroundFitCamera"] = function (request, data, root) {
  var i868 = root || request.c( 'BackgroundFitCamera' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'backgroundSpriteRenderer')
  request.r(i869[2], i869[3], 0, i868, 'background')
  request.r(i869[4], i869[5], 0, i868, 'camera')
  i868.backgroundDistanceFromCamera = i869[6]
  return i868
}

Deserializers["GameManager"] = function (request, data, root) {
  var i870 = root || request.c( 'GameManager' )
  var i871 = data
  i870.gameState = i871[0]
  i870.config = request.d('GameManager+GameConfig', i871[1], i870.config)
  i870.colorConfig = request.d('ColorHop', i871[2], i870.colorConfig)
  i870.currentLevel = i871[3]
  var i873 = i871[4]
  var i872 = new (System.Collections.Generic.List$1(Bridge.ns('StickManager')))
  for(var i = 0; i < i873.length; i += 2) {
  request.r(i873[i + 0], i873[i + 1], 1, i872, '')
  }
  i870.sticks = i872
  i870.countHop = i871[5]
  i870.countStick = i871[6]
  i870.cacheIndexTap1 = i871[7]
  request.r(i871[8], i871[9], 0, i870, 'timer')
  request.r(i871[10], i871[11], 0, i870, 'subTimer')
  request.r(i871[12], i871[13], 0, i870, 'countDown')
  i870.hasPassRound1 = !!i871[14]
  request.r(i871[15], i871[16], 0, i870, 'levelText')
  request.r(i871[17], i871[18], 0, i870, 'bgMusic')
  i870.turn = i871[19]
  i870.canClickHop = !!i871[20]
  i870.hasPlayMusic = !!i871[21]
  var i875 = i871[22]
  var i874 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 1, i874, '')
  }
  i870.hoopPosList = i874
  i870.hasReboot = !!i871[23]
  request.r(i871[24], i871[25], 0, i870, 'uiManager')
  i870.levelData = request.d('LevelData', i871[26], i870.levelData)
  return i870
}

Deserializers["GameManager+GameConfig"] = function (request, data, root) {
  var i876 = root || request.c( 'GameManager+GameConfig' )
  var i877 = data
  i876.initHop = i877[0]
  i876.initHoop2 = i877[1]
  i876.initStick = i877[2]
  i876.distanceXStick = i877[3]
  i876.distanceZStick = i877[4]
  i876.distanceHop = i877[5]
  i876.heightMoveFirst = i877[6]
  i876.timeMoveFirst = i877[7]
  i876.timeMoveSecond = i877[8]
  i876.timeMoveTarget = i877[9]
  i876.timeMove2Hop = i877[10]
  request.r(i877[11], i877[12], 0, i876, 'hopPrefab')
  request.r(i877[13], i877[14], 0, i876, 'hoop2Prefab')
  request.r(i877[15], i877[16], 0, i876, 'stickPrefab')
  return i876
}

Deserializers["ColorHop"] = function (request, data, root) {
  var i878 = root || request.c( 'ColorHop' )
  var i879 = data
  var i881 = i879[0]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Hop', i881[i + 0]) );
  }
  i878.hopColor = i880
  return i878
}

Deserializers["Hop"] = function (request, data, root) {
  var i884 = root || request.c( 'Hop' )
  var i885 = data
  i884.hoopColor = i885[0]
  request.r(i885[1], i885[2], 0, i884, 'colorHop')
  return i884
}

Deserializers["LevelData"] = function (request, data, root) {
  var i890 = root || request.c( 'LevelData' )
  var i891 = data
  var i893 = i891[0]
  var i892 = new (System.Collections.Generic.List$1(Bridge.ns('Level')))
  for(var i = 0; i < i893.length; i += 1) {
    i892.add(request.d('Level', i893[i + 0]));
  }
  i890.levels = i892
  return i890
}

Deserializers["Level"] = function (request, data, root) {
  var i896 = root || request.c( 'Level' )
  var i897 = data
  i896.no = i897[0]
  var i899 = i897[1]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Data', i899[i + 0]) );
  }
  i896.data = i898
  return i896
}

Deserializers["Data"] = function (request, data, root) {
  var i902 = root || request.c( 'Data' )
  var i903 = data
  i902.stick = i903[0]
  return i902
}

Deserializers["Database"] = function (request, data, root) {
  var i904 = root || request.c( 'Database' )
  var i905 = data
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'clip')
  i906.playOnAwake = !!i907[2]
  i906.loop = !!i907[3]
  i906.time = i907[4]
  i906.volume = i907[5]
  i906.pitch = i907[6]
  i906.enabled = !!i907[7]
  return i906
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i908 = root || request.c( 'SoundManager' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'audio')
  request.r(i909[2], i909[3], 0, i908, 'hopFly')
  request.r(i909[4], i909[5], 0, i908, 'hopSelect')
  request.r(i909[6], i909[7], 0, i908, 'stickFinish')
  request.r(i909[8], i909[9], 0, i908, 'win')
  request.r(i909[10], i909[11], 0, i908, 'button')
  return i908
}

Deserializers["UIManager"] = function (request, data, root) {
  var i910 = root || request.c( 'UIManager' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'guideHand1')
  request.r(i911[2], i911[3], 0, i910, 'guideHand2')
  request.r(i911[4], i911[5], 0, i910, 'textHint')
  request.r(i911[6], i911[7], 0, i910, 'timerUI')
  request.r(i911[8], i911[9], 0, i910, 'ctaUI')
  request.r(i911[10], i911[11], 0, i910, 'downloadButton')
  request.r(i911[12], i911[13], 0, i910, 'downloadBtn')
  request.r(i911[14], i911[15], 0, i910, 'background')
  request.r(i911[16], i911[17], 0, i910, 'levelTxt')
  request.r(i911[18], i911[19], 0, i910, 'mask')
  request.r(i911[20], i911[21], 0, i910, 'mask2')
  request.r(i911[22], i911[23], 0, i910, 'timer')
  request.r(i911[24], i911[25], 0, i910, 'soundButton')
  request.r(i911[26], i911[27], 0, i910, 'soundBtnImage')
  request.r(i911[28], i911[29], 0, i910, 'soundOn')
  request.r(i911[30], i911[31], 0, i910, 'soundOff')
  request.r(i911[32], i911[33], 0, i910, 'manager')
  request.r(i911[34], i911[35], 0, i910, 'uiGetReward')
  return i910
}

Deserializers["CountDown"] = function (request, data, root) {
  var i912 = root || request.c( 'CountDown' )
  var i913 = data
  i912.currentTime = i913[0]
  i912.isStart = !!i913[1]
  request.r(i913[2], i913[3], 0, i912, 'uiManager')
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i915 = data
  i914.pivot = new pc.Vec2( i915[0], i915[1] )
  i914.anchorMin = new pc.Vec2( i915[2], i915[3] )
  i914.anchorMax = new pc.Vec2( i915[4], i915[5] )
  i914.sizeDelta = new pc.Vec2( i915[6], i915[7] )
  i914.anchoredPosition3D = new pc.Vec3( i915[8], i915[9], i915[10] )
  i914.rotation = new pc.Quat(i915[11], i915[12], i915[13], i915[14])
  i914.scale = new pc.Vec3( i915[15], i915[16], i915[17] )
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i917 = data
  i916.enabled = !!i917[0]
  i916.planeDistance = i917[1]
  i916.referencePixelsPerUnit = i917[2]
  i916.isFallbackOverlay = !!i917[3]
  i916.renderMode = i917[4]
  i916.renderOrder = i917[5]
  i916.sortingLayerName = i917[6]
  i916.sortingOrder = i917[7]
  i916.scaleFactor = i917[8]
  request.r(i917[9], i917[10], 0, i916, 'worldCamera')
  i916.overrideSorting = !!i917[11]
  i916.pixelPerfect = !!i917[12]
  i916.targetDisplay = i917[13]
  i916.overridePixelPerfect = !!i917[14]
  return i916
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i918 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i919 = data
  i918.m_UiScaleMode = i919[0]
  i918.m_ReferencePixelsPerUnit = i919[1]
  i918.m_ScaleFactor = i919[2]
  i918.m_ReferenceResolution = new pc.Vec2( i919[3], i919[4] )
  i918.m_ScreenMatchMode = i919[5]
  i918.m_MatchWidthOrHeight = i919[6]
  i918.m_PhysicalUnit = i919[7]
  i918.m_FallbackScreenDPI = i919[8]
  i918.m_DefaultSpriteDPI = i919[9]
  i918.m_DynamicPixelsPerUnit = i919[10]
  i918.m_PresetInfoIsWorld = !!i919[11]
  return i918
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i921 = data
  i920.m_IgnoreReversedGraphics = !!i921[0]
  i920.m_BlockingObjects = i921[1]
  i920.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i921[2] )
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i923 = data
  i922.cullTransparentMesh = !!i923[0]
  return i922
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.UI.Image' )
  var i925 = data
  request.r(i925[0], i925[1], 0, i924, 'm_Sprite')
  i924.m_Type = i925[2]
  i924.m_PreserveAspect = !!i925[3]
  i924.m_FillCenter = !!i925[4]
  i924.m_FillMethod = i925[5]
  i924.m_FillAmount = i925[6]
  i924.m_FillClockwise = !!i925[7]
  i924.m_FillOrigin = i925[8]
  i924.m_UseSpriteMesh = !!i925[9]
  i924.m_PixelsPerUnitMultiplier = i925[10]
  request.r(i925[11], i925[12], 0, i924, 'm_Material')
  i924.m_Maskable = !!i925[13]
  i924.m_Color = new pc.Color(i925[14], i925[15], i925[16], i925[17])
  i924.m_RaycastTarget = !!i925[18]
  i924.m_RaycastPadding = new pc.Vec4( i925[19], i925[20], i925[21], i925[22] )
  return i924
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.UI.Button' )
  var i927 = data
  i926.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i927[0], i926.m_OnClick)
  i926.m_Navigation = request.d('UnityEngine.UI.Navigation', i927[1], i926.m_Navigation)
  i926.m_Transition = i927[2]
  i926.m_Colors = request.d('UnityEngine.UI.ColorBlock', i927[3], i926.m_Colors)
  i926.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i927[4], i926.m_SpriteState)
  i926.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i927[5], i926.m_AnimationTriggers)
  i926.m_Interactable = !!i927[6]
  request.r(i927[7], i927[8], 0, i926, 'm_TargetGraphic')
  return i926
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i929 = data
  i928.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i929[0], i928.m_PersistentCalls)
  return i928
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i930 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i931 = data
  var i933 = i931[0]
  var i932 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i933.length; i += 1) {
    i932.add(request.d('UnityEngine.Events.PersistentCall', i933[i + 0]));
  }
  i930.m_Calls = i932
  return i930
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'm_Target')
  i936.m_TargetAssemblyTypeName = i937[2]
  i936.m_MethodName = i937[3]
  i936.m_Mode = i937[4]
  i936.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i937[5], i936.m_Arguments)
  i936.m_CallState = i937[6]
  return i936
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'm_ObjectArgument')
  i938.m_ObjectArgumentAssemblyTypeName = i939[2]
  i938.m_IntArgument = i939[3]
  i938.m_FloatArgument = i939[4]
  i938.m_StringArgument = i939[5]
  i938.m_BoolArgument = !!i939[6]
  return i938
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i941 = data
  i940.m_Mode = i941[0]
  i940.m_WrapAround = !!i941[1]
  request.r(i941[2], i941[3], 0, i940, 'm_SelectOnUp')
  request.r(i941[4], i941[5], 0, i940, 'm_SelectOnDown')
  request.r(i941[6], i941[7], 0, i940, 'm_SelectOnLeft')
  request.r(i941[8], i941[9], 0, i940, 'm_SelectOnRight')
  return i940
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i943 = data
  i942.m_NormalColor = new pc.Color(i943[0], i943[1], i943[2], i943[3])
  i942.m_HighlightedColor = new pc.Color(i943[4], i943[5], i943[6], i943[7])
  i942.m_PressedColor = new pc.Color(i943[8], i943[9], i943[10], i943[11])
  i942.m_SelectedColor = new pc.Color(i943[12], i943[13], i943[14], i943[15])
  i942.m_DisabledColor = new pc.Color(i943[16], i943[17], i943[18], i943[19])
  i942.m_ColorMultiplier = i943[20]
  i942.m_FadeDuration = i943[21]
  return i942
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i944 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i945 = data
  request.r(i945[0], i945[1], 0, i944, 'm_HighlightedSprite')
  request.r(i945[2], i945[3], 0, i944, 'm_PressedSprite')
  request.r(i945[4], i945[5], 0, i944, 'm_SelectedSprite')
  request.r(i945[6], i945[7], 0, i944, 'm_DisabledSprite')
  return i944
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i947 = data
  i946.m_NormalTrigger = i947[0]
  i946.m_HighlightedTrigger = i947[1]
  i946.m_PressedTrigger = i947[2]
  i946.m_SelectedTrigger = i947[3]
  i946.m_DisabledTrigger = i947[4]
  return i946
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.UI.Text' )
  var i949 = data
  i948.m_FontData = request.d('UnityEngine.UI.FontData', i949[0], i948.m_FontData)
  i948.m_Text = i949[1]
  request.r(i949[2], i949[3], 0, i948, 'm_Material')
  i948.m_Maskable = !!i949[4]
  i948.m_Color = new pc.Color(i949[5], i949[6], i949[7], i949[8])
  i948.m_RaycastTarget = !!i949[9]
  i948.m_RaycastPadding = new pc.Vec4( i949[10], i949[11], i949[12], i949[13] )
  return i948
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.UI.FontData' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'm_Font')
  i950.m_FontSize = i951[2]
  i950.m_FontStyle = i951[3]
  i950.m_BestFit = !!i951[4]
  i950.m_MinSize = i951[5]
  i950.m_MaxSize = i951[6]
  i950.m_Alignment = i951[7]
  i950.m_AlignByGeometry = !!i951[8]
  i950.m_RichText = !!i951[9]
  i950.m_HorizontalOverflow = i951[10]
  i950.m_VerticalOverflow = i951[11]
  i950.m_LineSpacing = i951[12]
  return i950
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.UI.Mask' )
  var i953 = data
  i952.m_ShowMaskGraphic = !!i953[0]
  return i952
}

Deserializers["CutoutMaskUI"] = function (request, data, root) {
  var i954 = root || request.c( 'CutoutMaskUI' )
  var i955 = data
  request.r(i955[0], i955[1], 0, i954, 'm_Material')
  request.r(i955[2], i955[3], 0, i954, 'm_Sprite')
  i954.m_Type = i955[4]
  i954.m_PreserveAspect = !!i955[5]
  i954.m_FillCenter = !!i955[6]
  i954.m_FillMethod = i955[7]
  i954.m_FillAmount = i955[8]
  i954.m_FillClockwise = !!i955[9]
  i954.m_FillOrigin = i955[10]
  i954.m_UseSpriteMesh = !!i955[11]
  i954.m_PixelsPerUnitMultiplier = i955[12]
  i954.m_Maskable = !!i955[13]
  i954.m_Color = new pc.Color(i955[14], i955[15], i955[16], i955[17])
  i954.m_RaycastTarget = !!i955[18]
  i954.m_RaycastPadding = new pc.Vec4( i955[19], i955[20], i955[21], i955[22] )
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'animatorController')
  i956.updateMode = i957[2]
  var i959 = i957[3]
  var i958 = []
  for(var i = 0; i < i959.length; i += 2) {
  request.r(i959[i + 0], i959[i + 1], 2, i958, '')
  }
  i956.humanBones = i958
  i956.enabled = !!i957[4]
  return i956
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i963 = data
  request.r(i963[0], i963[1], 0, i962, 'm_Texture')
  i962.m_UVRect = UnityEngine.Rect.MinMaxRect(i963[2], i963[3], i963[4], i963[5])
  request.r(i963[6], i963[7], 0, i962, 'm_Material')
  i962.m_Maskable = !!i963[8]
  i962.m_Color = new pc.Color(i963[9], i963[10], i963[11], i963[12])
  i962.m_RaycastTarget = !!i963[13]
  i962.m_RaycastPadding = new pc.Vec4( i963[14], i963[15], i963[16], i963[17] )
  return i962
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i964 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i965 = data
  i964.m_hasFontAssetChanged = !!i965[0]
  request.r(i965[1], i965[2], 0, i964, 'm_baseMaterial')
  i964.m_maskOffset = new pc.Vec4( i965[3], i965[4], i965[5], i965[6] )
  i964.m_text = i965[7]
  i964.m_isRightToLeft = !!i965[8]
  request.r(i965[9], i965[10], 0, i964, 'm_fontAsset')
  request.r(i965[11], i965[12], 0, i964, 'm_sharedMaterial')
  var i967 = i965[13]
  var i966 = []
  for(var i = 0; i < i967.length; i += 2) {
  request.r(i967[i + 0], i967[i + 1], 2, i966, '')
  }
  i964.m_fontSharedMaterials = i966
  request.r(i965[14], i965[15], 0, i964, 'm_fontMaterial')
  var i969 = i965[16]
  var i968 = []
  for(var i = 0; i < i969.length; i += 2) {
  request.r(i969[i + 0], i969[i + 1], 2, i968, '')
  }
  i964.m_fontMaterials = i968
  i964.m_fontColor32 = UnityEngine.Color32.ConstructColor(i965[17], i965[18], i965[19], i965[20])
  i964.m_fontColor = new pc.Color(i965[21], i965[22], i965[23], i965[24])
  i964.m_enableVertexGradient = !!i965[25]
  i964.m_colorMode = i965[26]
  i964.m_fontColorGradient = request.d('TMPro.VertexGradient', i965[27], i964.m_fontColorGradient)
  request.r(i965[28], i965[29], 0, i964, 'm_fontColorGradientPreset')
  request.r(i965[30], i965[31], 0, i964, 'm_spriteAsset')
  i964.m_tintAllSprites = !!i965[32]
  request.r(i965[33], i965[34], 0, i964, 'm_StyleSheet')
  i964.m_TextStyleHashCode = i965[35]
  i964.m_overrideHtmlColors = !!i965[36]
  i964.m_faceColor = UnityEngine.Color32.ConstructColor(i965[37], i965[38], i965[39], i965[40])
  i964.m_fontSize = i965[41]
  i964.m_fontSizeBase = i965[42]
  i964.m_fontWeight = i965[43]
  i964.m_enableAutoSizing = !!i965[44]
  i964.m_fontSizeMin = i965[45]
  i964.m_fontSizeMax = i965[46]
  i964.m_fontStyle = i965[47]
  i964.m_HorizontalAlignment = i965[48]
  i964.m_VerticalAlignment = i965[49]
  i964.m_textAlignment = i965[50]
  i964.m_characterSpacing = i965[51]
  i964.m_wordSpacing = i965[52]
  i964.m_lineSpacing = i965[53]
  i964.m_lineSpacingMax = i965[54]
  i964.m_paragraphSpacing = i965[55]
  i964.m_charWidthMaxAdj = i965[56]
  i964.m_enableWordWrapping = !!i965[57]
  i964.m_wordWrappingRatios = i965[58]
  i964.m_overflowMode = i965[59]
  request.r(i965[60], i965[61], 0, i964, 'm_linkedTextComponent')
  request.r(i965[62], i965[63], 0, i964, 'parentLinkedComponent')
  i964.m_enableKerning = !!i965[64]
  i964.m_enableExtraPadding = !!i965[65]
  i964.checkPaddingRequired = !!i965[66]
  i964.m_isRichText = !!i965[67]
  i964.m_parseCtrlCharacters = !!i965[68]
  i964.m_isOrthographic = !!i965[69]
  i964.m_isCullingEnabled = !!i965[70]
  i964.m_horizontalMapping = i965[71]
  i964.m_verticalMapping = i965[72]
  i964.m_uvLineOffset = i965[73]
  i964.m_geometrySortingOrder = i965[74]
  i964.m_IsTextObjectScaleStatic = !!i965[75]
  i964.m_VertexBufferAutoSizeReduction = !!i965[76]
  i964.m_useMaxVisibleDescender = !!i965[77]
  i964.m_pageToDisplay = i965[78]
  i964.m_margin = new pc.Vec4( i965[79], i965[80], i965[81], i965[82] )
  i964.m_isUsingLegacyAnimationComponent = !!i965[83]
  i964.m_isVolumetricText = !!i965[84]
  request.r(i965[85], i965[86], 0, i964, 'm_Material')
  i964.m_Maskable = !!i965[87]
  i964.m_Color = new pc.Color(i965[88], i965[89], i965[90], i965[91])
  i964.m_RaycastTarget = !!i965[92]
  i964.m_RaycastPadding = new pc.Vec4( i965[93], i965[94], i965[95], i965[96] )
  return i964
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i970 = root || request.c( 'TMPro.VertexGradient' )
  var i971 = data
  i970.topLeft = new pc.Color(i971[0], i971[1], i971[2], i971[3])
  i970.topRight = new pc.Color(i971[4], i971[5], i971[6], i971[7])
  i970.bottomLeft = new pc.Color(i971[8], i971[9], i971[10], i971[11])
  i970.bottomRight = new pc.Color(i971[12], i971[13], i971[14], i971[15])
  return i970
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i972 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'm_FirstSelected')
  i972.m_sendNavigationEvents = !!i973[2]
  i972.m_DragThreshold = i973[3]
  return i972
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i974 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i975 = data
  i974.m_HorizontalAxis = i975[0]
  i974.m_VerticalAxis = i975[1]
  i974.m_SubmitButton = i975[2]
  i974.m_CancelButton = i975[3]
  i974.m_InputActionsPerSecond = i975[4]
  i974.m_RepeatDelay = i975[5]
  i974.m_ForceModuleActive = !!i975[6]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i977 = data
  i976.ambientIntensity = i977[0]
  i976.reflectionIntensity = i977[1]
  i976.ambientMode = i977[2]
  i976.ambientLight = new pc.Color(i977[3], i977[4], i977[5], i977[6])
  i976.ambientSkyColor = new pc.Color(i977[7], i977[8], i977[9], i977[10])
  i976.ambientGroundColor = new pc.Color(i977[11], i977[12], i977[13], i977[14])
  i976.ambientEquatorColor = new pc.Color(i977[15], i977[16], i977[17], i977[18])
  i976.fogColor = new pc.Color(i977[19], i977[20], i977[21], i977[22])
  i976.fogEndDistance = i977[23]
  i976.fogStartDistance = i977[24]
  i976.fogDensity = i977[25]
  i976.fog = !!i977[26]
  request.r(i977[27], i977[28], 0, i976, 'skybox')
  i976.fogMode = i977[29]
  var i979 = i977[30]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i979[i + 0]) );
  }
  i976.lightmaps = i978
  i976.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i977[31], i976.lightProbes)
  i976.lightmapsMode = i977[32]
  i976.environmentLightingMode = i977[33]
  i976.ambientProbe = new pc.SphericalHarmonicsL2(i977[34])
  request.r(i977[35], i977[36], 0, i976, 'customReflection')
  request.r(i977[37], i977[38], 0, i976, 'defaultReflection')
  i976.defaultReflectionMode = i977[39]
  i976.defaultReflectionResolution = i977[40]
  i976.sunLightObjectId = i977[41]
  i976.pixelLightCount = i977[42]
  i976.defaultReflectionHDR = !!i977[43]
  i976.hasLightDataAsset = !!i977[44]
  i976.hasManualGenerate = !!i977[45]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'lightmapColor')
  request.r(i983[2], i983[3], 0, i982, 'lightmapDirection')
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i984 = root || new UnityEngine.LightProbes()
  var i985 = data
  return i984
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i992 = root || request.c( 'TMPro.TMP_Settings' )
  var i993 = data
  i992.m_enableWordWrapping = !!i993[0]
  i992.m_enableKerning = !!i993[1]
  i992.m_enableExtraPadding = !!i993[2]
  i992.m_enableTintAllSprites = !!i993[3]
  i992.m_enableParseEscapeCharacters = !!i993[4]
  i992.m_EnableRaycastTarget = !!i993[5]
  i992.m_GetFontFeaturesAtRuntime = !!i993[6]
  i992.m_missingGlyphCharacter = i993[7]
  i992.m_warningsDisabled = !!i993[8]
  request.r(i993[9], i993[10], 0, i992, 'm_defaultFontAsset')
  i992.m_defaultFontAssetPath = i993[11]
  i992.m_defaultFontSize = i993[12]
  i992.m_defaultAutoSizeMinRatio = i993[13]
  i992.m_defaultAutoSizeMaxRatio = i993[14]
  i992.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i993[15], i993[16] )
  i992.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i993[17], i993[18] )
  i992.m_autoSizeTextContainer = !!i993[19]
  i992.m_IsTextObjectScaleStatic = !!i993[20]
  var i995 = i993[21]
  var i994 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i995.length; i += 2) {
  request.r(i995[i + 0], i995[i + 1], 1, i994, '')
  }
  i992.m_fallbackFontAssets = i994
  i992.m_matchMaterialPreset = !!i993[22]
  request.r(i993[23], i993[24], 0, i992, 'm_defaultSpriteAsset')
  i992.m_defaultSpriteAssetPath = i993[25]
  i992.m_enableEmojiSupport = !!i993[26]
  i992.m_MissingCharacterSpriteUnicode = i993[27]
  i992.m_defaultColorGradientPresetsPath = i993[28]
  request.r(i993[29], i993[30], 0, i992, 'm_defaultStyleSheet')
  i992.m_StyleSheetsResourcePath = i993[31]
  request.r(i993[32], i993[33], 0, i992, 'm_leadingCharacters')
  request.r(i993[34], i993[35], 0, i992, 'm_followingCharacters')
  i992.m_UseModernHangulLineBreakingRules = !!i993[36]
  return i992
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i996 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i997 = data
  i996.hashCode = i997[0]
  request.r(i997[1], i997[2], 0, i996, 'material')
  i996.materialHashCode = i997[3]
  request.r(i997[4], i997[5], 0, i996, 'spriteSheet')
  var i999 = i997[6]
  var i998 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i999.length; i += 1) {
    i998.add(request.d('TMPro.TMP_Sprite', i999[i + 0]));
  }
  i996.spriteInfoList = i998
  var i1001 = i997[7]
  var i1000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1001.length; i += 2) {
  request.r(i1001[i + 0], i1001[i + 1], 1, i1000, '')
  }
  i996.fallbackSpriteAssets = i1000
  i996.m_Version = i997[8]
  i996.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i997[9], i996.m_FaceInfo)
  var i1003 = i997[10]
  var i1002 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.add(request.d('TMPro.TMP_SpriteCharacter', i1003[i + 0]));
  }
  i996.m_SpriteCharacterTable = i1002
  var i1005 = i997[11]
  var i1004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.add(request.d('TMPro.TMP_SpriteGlyph', i1005[i + 0]));
  }
  i996.m_SpriteGlyphTable = i1004
  return i996
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1008 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1009 = data
  i1008.name = i1009[0]
  i1008.hashCode = i1009[1]
  i1008.unicode = i1009[2]
  i1008.pivot = new pc.Vec2( i1009[3], i1009[4] )
  request.r(i1009[5], i1009[6], 0, i1008, 'sprite')
  i1008.id = i1009[7]
  i1008.x = i1009[8]
  i1008.y = i1009[9]
  i1008.width = i1009[10]
  i1008.height = i1009[11]
  i1008.xOffset = i1009[12]
  i1008.yOffset = i1009[13]
  i1008.xAdvance = i1009[14]
  i1008.scale = i1009[15]
  return i1008
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1014 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1015 = data
  i1014.m_Name = i1015[0]
  i1014.m_HashCode = i1015[1]
  i1014.m_ElementType = i1015[2]
  i1014.m_Unicode = i1015[3]
  i1014.m_GlyphIndex = i1015[4]
  i1014.m_Scale = i1015[5]
  return i1014
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1018 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'sprite')
  i1018.m_Index = i1019[2]
  i1018.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1019[3], i1018.m_Metrics)
  i1018.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1019[4], i1018.m_GlyphRect)
  i1018.m_Scale = i1019[5]
  i1018.m_AtlasIndex = i1019[6]
  return i1018
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1020 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1021 = data
  var i1023 = i1021[0]
  var i1022 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.add(request.d('TMPro.TMP_Style', i1023[i + 0]));
  }
  i1020.m_StyleList = i1022
  return i1020
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1026 = root || request.c( 'TMPro.TMP_Style' )
  var i1027 = data
  i1026.m_Name = i1027[0]
  i1026.m_HashCode = i1027[1]
  i1026.m_OpeningDefinition = i1027[2]
  i1026.m_ClosingDefinition = i1027[3]
  i1026.m_OpeningTagArray = i1027[4]
  i1026.m_ClosingTagArray = i1027[5]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1029 = data
  var i1031 = i1029[0]
  var i1030 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.add(i1031[i + 0]);
  }
  i1028.invalidShaderVariants = i1030
  i1028.name = i1029[1]
  i1028.guid = i1029[2]
  var i1033 = i1029[3]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( i1033[i + 0] );
  }
  i1028.shaderDefinedKeywords = i1032
  var i1035 = i1029[4]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1035[i + 0]) );
  }
  i1028.passes = i1034
  var i1037 = i1029[5]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1037[i + 0]) );
  }
  i1028.defaultParameterValues = i1036
  request.r(i1029[6], i1029[7], 0, i1028, 'unityFallbackShader')
  i1028.readDepth = !!i1029[8]
  i1028.isCreatedByShaderGraph = !!i1029[9]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1044 = root || new pc.UnityShaderPass()
  var i1045 = data
  i1044.passType = i1045[0]
  i1044.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1045[1], i1044.zTest)
  i1044.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1045[2], i1044.zWrite)
  i1044.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1045[3], i1044.culling)
  i1044.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1045[4], i1044.blending)
  i1044.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1045[5], i1044.alphaBlending)
  i1044.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1045[6], i1044.colorWriteMask)
  i1044.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1045[7], i1044.offsetUnits)
  i1044.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1045[8], i1044.offsetFactor)
  i1044.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1045[9], i1044.stencilRef)
  i1044.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1045[10], i1044.stencilReadMask)
  i1044.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1045[11], i1044.stencilWriteMask)
  i1044.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1045[12], i1044.stencilOp)
  i1044.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1045[13], i1044.stencilOpFront)
  i1044.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1045[14], i1044.stencilOpBack)
  var i1047 = i1045[15]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1047[i + 0]) );
  }
  i1044.tags = i1046
  var i1049 = i1045[16]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( i1049[i + 0] );
  }
  i1044.passDefinedKeywords = i1048
  var i1051 = i1045[17]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1051[i + 0]) );
  }
  i1044.variants = i1050
  i1044.readDepth = !!i1045[18]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1053 = data
  i1052.val = i1053[0]
  i1052.name = i1053[1]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1055 = data
  i1054.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[0], i1054.src)
  i1054.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[1], i1054.dst)
  i1054.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[2], i1054.op)
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1057 = data
  i1056.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[0], i1056.pass)
  i1056.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[1], i1056.fail)
  i1056.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[2], i1056.zFail)
  i1056.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[3], i1056.comp)
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1061 = data
  i1060.name = i1061[0]
  i1060.value = i1061[1]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1065 = data
  var i1067 = i1065[0]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( i1067[i + 0] );
  }
  i1064.keywords = i1066
  i1064.vertexProgram = i1065[1]
  i1064.fragmentProgram = i1065[2]
  i1064.readDepth = !!i1065[3]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1071 = data
  i1070.name = i1071[0]
  i1070.type = i1071[1]
  i1070.value = new pc.Vec4( i1071[2], i1071[3], i1071[4], i1071[5] )
  i1070.textureValue = i1071[6]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1073 = data
  i1072.name = i1073[0]
  request.r(i1073[1], i1073[2], 0, i1072, 'texture')
  i1072.aabb = i1073[3]
  i1072.vertices = i1073[4]
  i1072.triangles = i1073[5]
  i1072.textureRect = UnityEngine.Rect.MinMaxRect(i1073[6], i1073[7], i1073[8], i1073[9])
  i1072.packedRect = UnityEngine.Rect.MinMaxRect(i1073[10], i1073[11], i1073[12], i1073[13])
  i1072.border = new pc.Vec4( i1073[14], i1073[15], i1073[16], i1073[17] )
  i1072.transparency = i1073[18]
  i1072.bounds = i1073[19]
  i1072.pixelsPerUnit = i1073[20]
  i1072.textureWidth = i1073[21]
  i1072.textureHeight = i1073[22]
  i1072.nativeSize = new pc.Vec2( i1073[23], i1073[24] )
  i1072.pivot = new pc.Vec2( i1073[25], i1073[26] )
  i1072.textureRectOffset = new pc.Vec2( i1073[27], i1073[28] )
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1075 = data
  i1074.name = i1075[0]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1077 = data
  i1076.name = i1077[0]
  i1076.wrapMode = i1077[1]
  i1076.isLooping = !!i1077[2]
  i1076.length = i1077[3]
  var i1079 = i1077[4]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1079[i + 0]) );
  }
  i1076.curves = i1078
  var i1081 = i1077[5]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1081[i + 0]) );
  }
  i1076.events = i1080
  i1076.halfPrecision = !!i1077[6]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1085 = data
  i1084.path = i1085[0]
  i1084.componentType = i1085[1]
  i1084.property = i1085[2]
  i1084.keys = i1085[3]
  var i1087 = i1085[4]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1087[i + 0]) );
  }
  i1084.objectReferenceKeys = i1086
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1091 = data
  i1090.time = i1091[0]
  request.r(i1091[1], i1091[2], 0, i1090, 'value')
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1095 = data
  i1094.functionName = i1095[0]
  i1094.floatParameter = i1095[1]
  i1094.intParameter = i1095[2]
  i1094.stringParameter = i1095[3]
  request.r(i1095[4], i1095[5], 0, i1094, 'objectReferenceParameter')
  i1094.time = i1095[6]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1097 = data
  i1096.name = i1097[0]
  i1096.ascent = i1097[1]
  i1096.originalLineHeight = i1097[2]
  i1096.fontSize = i1097[3]
  var i1099 = i1097[4]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1099[i + 0]) );
  }
  i1096.characterInfo = i1098
  request.r(i1097[5], i1097[6], 0, i1096, 'texture')
  i1096.originalFontSize = i1097[7]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1103 = data
  i1102.index = i1103[0]
  i1102.advance = i1103[1]
  i1102.bearing = i1103[2]
  i1102.glyphWidth = i1103[3]
  i1102.glyphHeight = i1103[4]
  i1102.minX = i1103[5]
  i1102.maxX = i1103[6]
  i1102.minY = i1103[7]
  i1102.maxY = i1103[8]
  i1102.uvBottomLeftX = i1103[9]
  i1102.uvBottomLeftY = i1103[10]
  i1102.uvBottomRightX = i1103[11]
  i1102.uvBottomRightY = i1103[12]
  i1102.uvTopLeftX = i1103[13]
  i1102.uvTopLeftY = i1103[14]
  i1102.uvTopRightX = i1103[15]
  i1102.uvTopRightY = i1103[16]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1105 = data
  i1104.name = i1105[0]
  var i1107 = i1105[1]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1107[i + 0]) );
  }
  i1104.states = i1106
  var i1109 = i1105[2]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1109[i + 0]) );
  }
  i1104.layers = i1108
  var i1111 = i1105[3]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1111[i + 0]) );
  }
  i1104.parameters = i1110
  var i1113 = i1105[4]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( i1113[i + 0] );
  }
  i1104.animationClips = i1112
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1117 = data
  i1116.cycleOffset = i1117[0]
  i1116.cycleOffsetParameter = i1117[1]
  i1116.cycleOffsetParameterActive = !!i1117[2]
  i1116.mirror = !!i1117[3]
  i1116.mirrorParameter = i1117[4]
  i1116.mirrorParameterActive = !!i1117[5]
  i1116.motionId = i1117[6]
  i1116.nameHash = i1117[7]
  i1116.fullPathHash = i1117[8]
  i1116.speed = i1117[9]
  i1116.speedParameter = i1117[10]
  i1116.speedParameterActive = !!i1117[11]
  i1116.tag = i1117[12]
  i1116.name = i1117[13]
  i1116.writeDefaultValues = !!i1117[14]
  var i1119 = i1117[15]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1119[i + 0]) );
  }
  i1116.transitions = i1118
  var i1121 = i1117[16]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 2) {
  request.r(i1121[i + 0], i1121[i + 1], 2, i1120, '')
  }
  i1116.behaviours = i1120
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1125 = data
  i1124.fullPath = i1125[0]
  i1124.canTransitionToSelf = !!i1125[1]
  i1124.duration = i1125[2]
  i1124.exitTime = i1125[3]
  i1124.hasExitTime = !!i1125[4]
  i1124.hasFixedDuration = !!i1125[5]
  i1124.interruptionSource = i1125[6]
  i1124.offset = i1125[7]
  i1124.orderedInterruption = !!i1125[8]
  i1124.destinationStateNameHash = i1125[9]
  i1124.destinationStateMachineId = i1125[10]
  i1124.isExit = !!i1125[11]
  i1124.mute = !!i1125[12]
  i1124.solo = !!i1125[13]
  var i1127 = i1125[14]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1127[i + 0]) );
  }
  i1124.conditions = i1126
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1133 = data
  i1132.blendingMode = i1133[0]
  i1132.defaultWeight = i1133[1]
  i1132.name = i1133[2]
  i1132.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1133[3], i1132.stateMachine)
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1135 = data
  i1134.id = i1135[0]
  i1134.defaultStateNameHash = i1135[1]
  var i1137 = i1135[2]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1137[i + 0]) );
  }
  i1134.entryTransitions = i1136
  var i1139 = i1135[3]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1139[i + 0]) );
  }
  i1134.anyStateTransitions = i1138
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1143 = data
  i1142.destinationStateNameHash = i1143[0]
  i1142.destinationStateMachineId = i1143[1]
  i1142.isExit = !!i1143[2]
  i1142.mute = !!i1143[3]
  i1142.solo = !!i1143[4]
  var i1145 = i1143[5]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1145[i + 0]) );
  }
  i1142.conditions = i1144
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1149 = data
  i1148.defaultBool = !!i1149[0]
  i1148.defaultFloat = i1149[1]
  i1148.defaultInt = i1149[2]
  i1148.name = i1149[3]
  i1148.nameHash = i1149[4]
  i1148.type = i1149[5]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1151 = data
  i1150.name = i1151[0]
  i1150.bytes64 = i1151[1]
  i1150.data = i1151[2]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1153 = data
  var i1155 = i1153[0]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1155[i + 0]) );
  }
  i1152.files = i1154
  i1152.componentToPrefabIds = i1153[1]
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1159 = data
  i1158.path = i1159[0]
  request.r(i1159[1], i1159[2], 0, i1158, 'unityObject')
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1161 = data
  var i1163 = i1161[0]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1163[i + 0]) );
  }
  i1160.scriptsExecutionOrder = i1162
  var i1165 = i1161[1]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1165[i + 0]) );
  }
  i1160.sortingLayers = i1164
  var i1167 = i1161[2]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1167[i + 0]) );
  }
  i1160.cullingLayers = i1166
  i1160.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1161[3], i1160.timeSettings)
  i1160.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1161[4], i1160.physicsSettings)
  i1160.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1161[5], i1160.physics2DSettings)
  i1160.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1161[6], i1160.qualitySettings)
  i1160.removeShadows = !!i1161[7]
  i1160.autoInstantiatePrefabs = !!i1161[8]
  i1160.enableAutoInstancing = !!i1161[9]
  i1160.lightmapEncodingQuality = i1161[10]
  i1160.desiredColorSpace = i1161[11]
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1171 = data
  i1170.name = i1171[0]
  i1170.value = i1171[1]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1175 = data
  i1174.id = i1175[0]
  i1174.name = i1175[1]
  i1174.value = i1175[2]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1179 = data
  i1178.id = i1179[0]
  i1178.name = i1179[1]
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1181 = data
  i1180.fixedDeltaTime = i1181[0]
  i1180.maximumDeltaTime = i1181[1]
  i1180.timeScale = i1181[2]
  i1180.maximumParticleTimestep = i1181[3]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1183 = data
  i1182.gravity = new pc.Vec3( i1183[0], i1183[1], i1183[2] )
  i1182.defaultSolverIterations = i1183[3]
  i1182.bounceThreshold = i1183[4]
  i1182.autoSyncTransforms = !!i1183[5]
  i1182.autoSimulation = !!i1183[6]
  var i1185 = i1183[7]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1185[i + 0]) );
  }
  i1182.collisionMatrix = i1184
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1189 = data
  i1188.enabled = !!i1189[0]
  i1188.layerId = i1189[1]
  i1188.otherLayerId = i1189[2]
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1191 = data
  request.r(i1191[0], i1191[1], 0, i1190, 'material')
  i1190.gravity = new pc.Vec2( i1191[2], i1191[3] )
  i1190.positionIterations = i1191[4]
  i1190.velocityIterations = i1191[5]
  i1190.velocityThreshold = i1191[6]
  i1190.maxLinearCorrection = i1191[7]
  i1190.maxAngularCorrection = i1191[8]
  i1190.maxTranslationSpeed = i1191[9]
  i1190.maxRotationSpeed = i1191[10]
  i1190.timeToSleep = i1191[11]
  i1190.linearSleepTolerance = i1191[12]
  i1190.angularSleepTolerance = i1191[13]
  i1190.defaultContactOffset = i1191[14]
  i1190.autoSimulation = !!i1191[15]
  i1190.queriesHitTriggers = !!i1191[16]
  i1190.queriesStartInColliders = !!i1191[17]
  i1190.callbacksOnDisable = !!i1191[18]
  i1190.reuseCollisionCallbacks = !!i1191[19]
  i1190.autoSyncTransforms = !!i1191[20]
  var i1193 = i1191[21]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1193[i + 0]) );
  }
  i1190.collisionMatrix = i1192
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1197 = data
  i1196.enabled = !!i1197[0]
  i1196.layerId = i1197[1]
  i1196.otherLayerId = i1197[2]
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1199 = data
  var i1201 = i1199[0]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1201[i + 0]) );
  }
  i1198.qualityLevels = i1200
  var i1203 = i1199[1]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( i1203[i + 0] );
  }
  i1198.names = i1202
  i1198.shadows = i1199[2]
  i1198.anisotropicFiltering = i1199[3]
  i1198.antiAliasing = i1199[4]
  i1198.lodBias = i1199[5]
  i1198.shadowCascades = i1199[6]
  i1198.shadowDistance = i1199[7]
  i1198.shadowmaskMode = i1199[8]
  i1198.shadowProjection = i1199[9]
  i1198.shadowResolution = i1199[10]
  i1198.softParticles = !!i1199[11]
  i1198.softVegetation = !!i1199[12]
  i1198.activeColorSpace = i1199[13]
  i1198.desiredColorSpace = i1199[14]
  i1198.masterTextureLimit = i1199[15]
  i1198.maxQueuedFrames = i1199[16]
  i1198.particleRaycastBudget = i1199[17]
  i1198.pixelLightCount = i1199[18]
  i1198.realtimeReflectionProbes = !!i1199[19]
  i1198.shadowCascade2Split = i1199[20]
  i1198.shadowCascade4Split = new pc.Vec3( i1199[21], i1199[22], i1199[23] )
  i1198.streamingMipmapsActive = !!i1199[24]
  i1198.vSyncCount = i1199[25]
  i1198.asyncUploadBufferSize = i1199[26]
  i1198.asyncUploadTimeSlice = i1199[27]
  i1198.billboardsFaceCameraPosition = !!i1199[28]
  i1198.shadowNearPlaneOffset = i1199[29]
  i1198.streamingMipmapsMemoryBudget = i1199[30]
  i1198.maximumLODLevel = i1199[31]
  i1198.streamingMipmapsAddAllCameras = !!i1199[32]
  i1198.streamingMipmapsMaxLevelReduction = i1199[33]
  i1198.streamingMipmapsRenderersPerFrame = i1199[34]
  i1198.resolutionScalingFixedDPIFactor = i1199[35]
  i1198.streamingMipmapsMaxFileIORequests = i1199[36]
  i1198.currentQualityLevel = i1199[37]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1209 = data
  i1208.weight = i1209[0]
  i1208.vertices = i1209[1]
  i1208.normals = i1209[2]
  i1208.tangents = i1209[3]
  return i1208
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1210 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1211 = data
  i1210.xPlacement = i1211[0]
  i1210.yPlacement = i1211[1]
  i1210.xAdvance = i1211[2]
  i1210.yAdvance = i1211[3]
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1215 = data
  i1214.mode = i1215[0]
  i1214.parameter = i1215[1]
  i1214.threshold = i1215[2]
  return i1214
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"playOnAwake":2,"loop":3,"time":4,"volume":5,"pitch":6,"enabled":7},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"defaultParameterValues":5,"unityFallbackShader":6,"readDepth":8,"isCreatedByShaderGraph":9},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"passType":0,"zTest":1,"zWrite":2,"culling":3,"blending":4,"alphaBlending":5,"colorWriteMask":6,"offsetUnits":7,"offsetFactor":8,"stencilRef":9,"stencilReadMask":10,"stencilWriteMask":11,"stencilOp":12,"stencilOpFront":13,"stencilOpBack":14,"tags":15,"passDefinedKeywords":16,"variants":17,"readDepth":18},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"keywords":0,"vertexProgram":1,"fragmentProgram":2,"readDepth":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"removeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[62],"63":[17],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[73],"80":[73],"81":[73],"82":[73],"83":[73],"84":[73],"85":[73],"86":[17],"87":[4],"88":[89],"90":[89],"35":[20],"43":[39,20],"91":[20],"92":[39,20],"93":[4],"94":[39,20],"95":[20],"96":[4,20],"32":[20,39],"97":[20],"98":[20],"99":[20],"38":[35],"34":[39,20],"100":[20],"37":[35],"101":[20],"102":[20],"103":[20],"104":[20],"105":[20],"106":[20],"107":[20],"42":[20],"108":[20],"33":[39,20],"109":[20],"110":[20],"111":[20],"112":[20],"41":[39,20],"113":[20],"114":[46],"115":[46],"47":[46],"116":[46],"117":[17],"118":[17]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","HopManager","UnityEngine.MeshRenderer","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.Material","JellyMesh","UnityEngine.GameObject","UnityEngine.BoxCollider","StickManager","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Texture2D","TMPro.TMP_FontAsset","UnityEngine.Font","UnityEngine.Camera","UnityEngine.AudioListener","ViewPortHandler","UnityEngine.RectTransform","BackgroundFitCamera","UnityEngine.Light","UnityEngine.SpriteRenderer","UnityEngine.Sprite","GameManager","CountDown","UnityEngine.AudioSource","UIManager","Database","SoundManager","UnityEngine.AudioClip","TMPro.TextMeshProUGUI","UnityEngine.UI.RawImage","UnityEngine.UI.Image","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Button","UnityEngine.UI.Text","UnityEngine.UI.Mask","CutoutMaskUI","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AnimationClip","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextContainer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2020.3.22f1";

Deserializers.productName = "Color-Hoop-Playable-Ad";

Deserializers.lunaInitializationTime = "04/04/2022 03:09:01";

Deserializers.lunaVersion = "3.4.1";

Deserializers.lunaSHA = "329c363da8003b29e1d40d67943fea88087d5759";

Deserializers.packagesInfo = "com.unity.collab-proxy: 1.13.5,com.unity.formats.fbx: 4.1.2,com.unity.ide.rider: 2.0.7,com.unity.ide.visualstudio: 2.0.11,com.unity.ide.vscode: 1.2.4,com.unity.test-framework: 1.1.29,com.unity.textmeshpro: 3.0.0,com.unity.timeline: 1.4.8,com.unity.ugui: 1.0.0,uk.lunalabs.luna: file:../../../../Luna/scripts,com.unity.modules.ai: 1.0.0,com.unity.modules.androidjni: 1.0.0,com.unity.modules.animation: 1.0.0,com.unity.modules.assetbundle: 1.0.0,com.unity.modules.audio: 1.0.0,com.unity.modules.cloth: 1.0.0,com.unity.modules.director: 1.0.0,com.unity.modules.imageconversion: 1.0.0,com.unity.modules.imgui: 1.0.0,com.unity.modules.jsonserialize: 1.0.0,com.unity.modules.particlesystem: 1.0.0,com.unity.modules.physics: 1.0.0,com.unity.modules.physics2d: 1.0.0,com.unity.modules.screencapture: 1.0.0,com.unity.modules.terrain: 1.0.0,com.unity.modules.terrainphysics: 1.0.0,com.unity.modules.tilemap: 1.0.0,com.unity.modules.ui: 1.0.0,com.unity.modules.uielements: 1.0.0,com.unity.modules.umbra: 1.0.0,com.unity.modules.unityanalytics: 1.0.0,com.unity.modules.unitywebrequest: 1.0.0,com.unity.modules.unitywebrequestassetbundle: 1.0.0,com.unity.modules.unitywebrequestaudio: 1.0.0,com.unity.modules.unitywebrequesttexture: 1.0.0,com.unity.modules.unitywebrequestwww: 1.0.0,com.unity.modules.vehicles: 1.0.0,com.unity.modules.video: 1.0.0,com.unity.modules.vr: 1.0.0,com.unity.modules.wind: 1.0.0,com.unity.modules.xr: 1.0.0";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.ColorHoopPlayableAd";

Deserializers.disableAntiAliasing = false;

Deserializers.buildID = "71f363de-fde4-4481-8f8d-ed56d02c7cee";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

