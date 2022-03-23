var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.JointSpring' )
  var i613 = data
  i612.spring = i613[0]
  i612.damper = i613[1]
  i612.targetPosition = i613[2]
  return i612
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.JointMotor' )
  var i615 = data
  i614.m_TargetVelocity = i615[0]
  i614.m_Force = i615[1]
  i614.m_FreeSpin = i615[2]
  return i614
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.JointLimits' )
  var i617 = data
  i616.m_Min = i617[0]
  i616.m_Max = i617[1]
  i616.m_Bounciness = i617[2]
  i616.m_BounceMinVelocity = i617[3]
  i616.m_ContactDistance = i617[4]
  i616.minBounce = i617[5]
  i616.maxBounce = i617[6]
  return i616
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.JointDrive' )
  var i619 = data
  i618.m_PositionSpring = i619[0]
  i618.m_PositionDamper = i619[1]
  i618.m_MaximumForce = i619[2]
  return i618
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i621 = data
  i620.m_Spring = i621[0]
  i620.m_Damper = i621[1]
  return i620
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i623 = data
  i622.m_Limit = i623[0]
  i622.m_Bounciness = i623[1]
  i622.m_ContactDistance = i623[2]
  return i622
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i625 = data
  i624.m_ExtremumSlip = i625[0]
  i624.m_ExtremumValue = i625[1]
  i624.m_AsymptoteSlip = i625[2]
  i624.m_AsymptoteValue = i625[3]
  i624.m_Stiffness = i625[4]
  return i624
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i627 = data
  i626.m_LowerAngle = i627[0]
  i626.m_UpperAngle = i627[1]
  return i626
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i629 = data
  i628.m_MotorSpeed = i629[0]
  i628.m_MaximumMotorTorque = i629[1]
  return i628
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i631 = data
  i630.m_DampingRatio = i631[0]
  i630.m_Frequency = i631[1]
  i630.m_Angle = i631[2]
  return i630
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i633 = data
  i632.m_LowerTranslation = i633[0]
  i632.m_UpperTranslation = i633[1]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i634 = root || new pc.UnityMaterial()
  var i635 = data
  i634.name = i635[0]
  request.r(i635[1], i635[2], 0, i634, 'shader')
  i634.renderQueue = i635[3]
  i634.enableInstancing = !!i635[4]
  var i637 = i635[5]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i637[i + 0]) );
  }
  i634.floatParameters = i636
  var i639 = i635[6]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i639[i + 0]) );
  }
  i634.colorParameters = i638
  var i641 = i635[7]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i641[i + 0]) );
  }
  i634.vectorParameters = i640
  var i643 = i635[8]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i643[i + 0]) );
  }
  i634.textureParameters = i642
  var i645 = i635[9]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i645[i + 0]) );
  }
  i634.materialFlags = i644
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i649 = data
  i648.name = i649[0]
  i648.value = i649[1]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i653 = data
  i652.name = i653[0]
  i652.value = new pc.Color(i653[1], i653[2], i653[3], i653[4])
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i657 = data
  i656.name = i657[0]
  i656.value = new pc.Vec4( i657[1], i657[2], i657[3], i657[4] )
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i661 = data
  i660.name = i661[0]
  request.r(i661[1], i661[2], 0, i660, 'value')
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i665 = data
  i664.name = i665[0]
  i664.enabled = !!i665[1]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i667 = data
  i666.name = i667[0]
  i666.width = i667[1]
  i666.height = i667[2]
  i666.mipmapCount = i667[3]
  i666.anisoLevel = i667[4]
  i666.filterMode = i667[5]
  i666.hdr = !!i667[6]
  i666.format = i667[7]
  i666.wrapMode = i667[8]
  i666.alphaIsTransparency = !!i667[9]
  i666.alphaSource = i667[10]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i669 = data
  i668.position = new pc.Vec3( i669[0], i669[1], i669[2] )
  i668.scale = new pc.Vec3( i669[3], i669[4], i669[5] )
  i668.rotation = new pc.Quat(i669[6], i669[7], i669[8], i669[9])
  return i668
}

Deserializers["HopManager"] = function (request, data, root) {
  var i670 = root || request.c( 'HopManager' )
  var i671 = data
  i670.hoopColor = i671[0]
  request.r(i671[1], i671[2], 0, i670, 'meshRenderer')
  request.r(i671[3], i671[4], 0, i670, 'obj')
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'sharedMesh')
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'additionalVertexStreams')
  i674.enabled = !!i675[2]
  request.r(i675[3], i675[4], 0, i674, 'sharedMaterial')
  var i677 = i675[5]
  var i676 = []
  for(var i = 0; i < i677.length; i += 2) {
  request.r(i677[i + 0], i677[i + 1], 2, i676, '')
  }
  i674.sharedMaterials = i676
  i674.receiveShadows = !!i675[6]
  i674.shadowCastingMode = i675[7]
  i674.sortingLayerID = i675[8]
  i674.sortingOrder = i675[9]
  i674.lightmapIndex = i675[10]
  i674.lightmapSceneIndex = i675[11]
  i674.lightmapScaleOffset = new pc.Vec4( i675[12], i675[13], i675[14], i675[15] )
  i674.lightProbeUsage = i675[16]
  i674.reflectionProbeUsage = i675[17]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i681 = data
  i680.name = i681[0]
  i680.tag = i681[1]
  i680.enabled = !!i681[2]
  i680.isStatic = !!i681[3]
  i680.layer = i681[4]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i683 = data
  i682.name = i683[0]
  i682.halfPrecision = !!i683[1]
  i682.vertexCount = i683[2]
  i682.aabb = i683[3]
  var i685 = i683[4]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( !!i685[i + 0] );
  }
  i682.streams = i684
  i682.vertices = i683[5]
  var i687 = i683[6]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i687[i + 0]) );
  }
  i682.subMeshes = i686
  var i689 = i683[7]
  var i688 = []
  for(var i = 0; i < i689.length; i += 16) {
    i688.push( new pc.Mat4().setData(i689[i + 0], i689[i + 1], i689[i + 2], i689[i + 3],  i689[i + 4], i689[i + 5], i689[i + 6], i689[i + 7],  i689[i + 8], i689[i + 9], i689[i + 10], i689[i + 11],  i689[i + 12], i689[i + 13], i689[i + 14], i689[i + 15]) );
  }
  i682.bindposes = i688
  var i691 = i683[8]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i691[i + 0]) );
  }
  i682.blendShapes = i690
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i697 = data
  i696.triangles = i697[0]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i703 = data
  i702.name = i703[0]
  var i705 = i703[1]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i705[i + 0]) );
  }
  i702.frames = i704
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i707 = data
  i706.center = new pc.Vec3( i707[0], i707[1], i707[2] )
  i706.size = new pc.Vec3( i707[3], i707[4], i707[5] )
  i706.enabled = !!i707[6]
  i706.isTrigger = !!i707[7]
  request.r(i707[8], i707[9], 0, i706, 'material')
  return i706
}

Deserializers["StickManager"] = function (request, data, root) {
  var i708 = root || request.c( 'StickManager' )
  var i709 = data
  var i711 = i709[0]
  var i710 = new (System.Collections.Generic.List$1(Bridge.ns('HopManager')))
  for(var i = 0; i < i711.length; i += 2) {
  request.r(i711[i + 0], i711[i + 1], 1, i710, '')
  }
  i708.hops = i710
  i708.isDone = !!i709[1]
  request.r(i709[2], i709[3], 0, i708, 'victoryEffect')
  request.r(i709[4], i709[5], 0, i708, 'stick4')
  request.r(i709[6], i709[7], 0, i708, 'stick5')
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i715 = data
  i714.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i715[0], i714.main)
  i714.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i715[1], i714.colorBySpeed)
  i714.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i715[2], i714.colorOverLifetime)
  i714.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i715[3], i714.emission)
  i714.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i715[4], i714.rotationBySpeed)
  i714.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i715[5], i714.rotationOverLifetime)
  i714.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i715[6], i714.shape)
  i714.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i715[7], i714.sizeBySpeed)
  i714.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i715[8], i714.sizeOverLifetime)
  i714.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i715[9], i714.textureSheetAnimation)
  i714.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i715[10], i714.velocityOverLifetime)
  i714.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i715[11], i714.noise)
  i714.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i715[12], i714.inheritVelocity)
  i714.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i715[13], i714.forceOverLifetime)
  i714.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i715[14], i714.limitVelocityOverLifetime)
  i714.useAutoRandomSeed = !!i715[15]
  i714.randomSeed = i715[16]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i716 = root || new pc.ParticleSystemMain()
  var i717 = data
  i716.duration = i717[0]
  i716.loop = !!i717[1]
  i716.prewarm = !!i717[2]
  i716.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[3], i716.startDelay)
  i716.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[4], i716.startLifetime)
  i716.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[5], i716.startSpeed)
  i716.startSize3D = !!i717[6]
  i716.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[7], i716.startSizeX)
  i716.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[8], i716.startSizeY)
  i716.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[9], i716.startSizeZ)
  i716.startRotation3D = !!i717[10]
  i716.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[11], i716.startRotationX)
  i716.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[12], i716.startRotationY)
  i716.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[13], i716.startRotationZ)
  i716.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i717[14], i716.startColor)
  i716.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[15], i716.gravityModifier)
  i716.simulationSpace = i717[16]
  request.r(i717[17], i717[18], 0, i716, 'customSimulationSpace')
  i716.simulationSpeed = i717[19]
  i716.useUnscaledTime = !!i717[20]
  i716.scalingMode = i717[21]
  i716.playOnAwake = !!i717[22]
  i716.maxParticles = i717[23]
  i716.emitterVelocityMode = i717[24]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i718 = root || new pc.MinMaxCurve()
  var i719 = data
  i718.mode = i719[0]
  i718.curveMin = new pc.AnimationCurve( { keys_flow: i719[1] } )
  i718.curveMax = new pc.AnimationCurve( { keys_flow: i719[2] } )
  i718.curveMultiplier = i719[3]
  i718.constantMin = i719[4]
  i718.constantMax = i719[5]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i720 = root || new pc.MinMaxGradient()
  var i721 = data
  i720.mode = i721[0]
  i720.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i721[1], i720.gradientMin)
  i720.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i721[2], i720.gradientMax)
  i720.colorMin = new pc.Color(i721[3], i721[4], i721[5], i721[6])
  i720.colorMax = new pc.Color(i721[7], i721[8], i721[9], i721[10])
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i723 = data
  i722.mode = i723[0]
  var i725 = i723[1]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i725[i + 0]) );
  }
  i722.colorKeys = i724
  var i727 = i723[2]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i727[i + 0]) );
  }
  i722.alphaKeys = i726
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i728 = root || new pc.ParticleSystemColorBySpeed()
  var i729 = data
  i728.enabled = !!i729[0]
  i728.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i729[1], i728.color)
  i728.range = new pc.Vec2( i729[2], i729[3] )
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i733 = data
  i732.color = new pc.Color(i733[0], i733[1], i733[2], i733[3])
  i732.time = i733[4]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i737 = data
  i736.alpha = i737[0]
  i736.time = i737[1]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i738 = root || new pc.ParticleSystemColorOverLifetime()
  var i739 = data
  i738.enabled = !!i739[0]
  i738.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i739[1], i738.color)
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i740 = root || new pc.ParticleSystemEmitter()
  var i741 = data
  i740.enabled = !!i741[0]
  i740.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[1], i740.rateOverTime)
  i740.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[2], i740.rateOverDistance)
  var i743 = i741[3]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i743[i + 0]) );
  }
  i740.bursts = i742
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i746 = root || new pc.ParticleSystemBurst()
  var i747 = data
  i746.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[0], i746.count)
  i746.cycleCount = i747[1]
  i746.minCount = i747[2]
  i746.maxCount = i747[3]
  i746.repeatInterval = i747[4]
  i746.time = i747[5]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i748 = root || new pc.ParticleSystemRotationBySpeed()
  var i749 = data
  i748.enabled = !!i749[0]
  i748.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[1], i748.x)
  i748.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[2], i748.y)
  i748.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[3], i748.z)
  i748.separateAxes = !!i749[4]
  i748.range = new pc.Vec2( i749[5], i749[6] )
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i750 = root || new pc.ParticleSystemRotationOverLifetime()
  var i751 = data
  i750.enabled = !!i751[0]
  i750.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[1], i750.x)
  i750.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[2], i750.y)
  i750.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[3], i750.z)
  i750.separateAxes = !!i751[4]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i752 = root || new pc.ParticleSystemShape()
  var i753 = data
  i752.enabled = !!i753[0]
  i752.shapeType = i753[1]
  i752.randomDirectionAmount = i753[2]
  i752.sphericalDirectionAmount = i753[3]
  i752.randomPositionAmount = i753[4]
  i752.alignToDirection = !!i753[5]
  i752.radius = i753[6]
  i752.radiusMode = i753[7]
  i752.radiusSpread = i753[8]
  i752.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[9], i752.radiusSpeed)
  i752.radiusThickness = i753[10]
  i752.angle = i753[11]
  i752.length = i753[12]
  i752.boxThickness = new pc.Vec3( i753[13], i753[14], i753[15] )
  i752.meshShapeType = i753[16]
  request.r(i753[17], i753[18], 0, i752, 'mesh')
  request.r(i753[19], i753[20], 0, i752, 'meshRenderer')
  request.r(i753[21], i753[22], 0, i752, 'skinnedMeshRenderer')
  i752.useMeshMaterialIndex = !!i753[23]
  i752.meshMaterialIndex = i753[24]
  i752.useMeshColors = !!i753[25]
  i752.normalOffset = i753[26]
  i752.arc = i753[27]
  i752.arcMode = i753[28]
  i752.arcSpread = i753[29]
  i752.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[30], i752.arcSpeed)
  i752.donutRadius = i753[31]
  i752.position = new pc.Vec3( i753[32], i753[33], i753[34] )
  i752.rotation = new pc.Vec3( i753[35], i753[36], i753[37] )
  i752.scale = new pc.Vec3( i753[38], i753[39], i753[40] )
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i754 = root || new pc.ParticleSystemSizeBySpeed()
  var i755 = data
  i754.enabled = !!i755[0]
  i754.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[1], i754.x)
  i754.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[2], i754.y)
  i754.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[3], i754.z)
  i754.separateAxes = !!i755[4]
  i754.range = new pc.Vec2( i755[5], i755[6] )
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemSizeOverLifetime()
  var i757 = data
  i756.enabled = !!i757[0]
  i756.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[1], i756.x)
  i756.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[2], i756.y)
  i756.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[3], i756.z)
  i756.separateAxes = !!i757[4]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i758 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i759 = data
  i758.enabled = !!i759[0]
  i758.mode = i759[1]
  i758.animation = i759[2]
  i758.numTilesX = i759[3]
  i758.numTilesY = i759[4]
  i758.useRandomRow = !!i759[5]
  i758.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[6], i758.frameOverTime)
  i758.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[7], i758.startFrame)
  i758.cycleCount = i759[8]
  i758.rowIndex = i759[9]
  i758.flipU = i759[10]
  i758.flipV = i759[11]
  i758.spriteCount = i759[12]
  var i761 = i759[13]
  var i760 = []
  for(var i = 0; i < i761.length; i += 2) {
  request.r(i761[i + 0], i761[i + 1], 2, i760, '')
  }
  i758.sprites = i760
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i765 = data
  i764.enabled = !!i765[0]
  i764.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[1], i764.x)
  i764.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[2], i764.y)
  i764.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[3], i764.z)
  i764.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[4], i764.speedModifier)
  i764.space = i765[5]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemNoise()
  var i767 = data
  i766.enabled = !!i767[0]
  i766.separateAxes = !!i767[1]
  i766.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[2], i766.strengthX)
  i766.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[3], i766.strengthY)
  i766.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[4], i766.strengthZ)
  i766.frequency = i767[5]
  i766.damping = !!i767[6]
  i766.octaveCount = i767[7]
  i766.octaveMultiplier = i767[8]
  i766.octaveScale = i767[9]
  i766.quality = i767[10]
  i766.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[11], i766.scrollSpeed)
  i766.scrollSpeedMultiplier = i767[12]
  i766.remapEnabled = !!i767[13]
  i766.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[14], i766.remapX)
  i766.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[15], i766.remapY)
  i766.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[16], i766.remapZ)
  i766.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[17], i766.positionAmount)
  i766.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[18], i766.rotationAmount)
  i766.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[19], i766.sizeAmount)
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemInheritVelocity()
  var i769 = data
  i768.enabled = !!i769[0]
  i768.mode = i769[1]
  i768.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[2], i768.curve)
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemForceOverLifetime()
  var i771 = data
  i770.enabled = !!i771[0]
  i770.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[1], i770.x)
  i770.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[2], i770.y)
  i770.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[3], i770.z)
  i770.space = i771[4]
  i770.randomized = !!i771[5]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i772 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i773 = data
  i772.enabled = !!i773[0]
  i772.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[1], i772.limitX)
  i772.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[2], i772.limitY)
  i772.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[3], i772.limitZ)
  i772.dampen = i773[4]
  i772.separateAxes = !!i773[5]
  i772.space = i773[6]
  i772.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[7], i772.drag)
  i772.multiplyDragByParticleSize = !!i773[8]
  i772.multiplyDragByParticleVelocity = !!i773[9]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i775 = data
  i774.enabled = !!i775[0]
  request.r(i775[1], i775[2], 0, i774, 'sharedMaterial')
  var i777 = i775[3]
  var i776 = []
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 2, i776, '')
  }
  i774.sharedMaterials = i776
  i774.receiveShadows = !!i775[4]
  i774.shadowCastingMode = i775[5]
  i774.sortingLayerID = i775[6]
  i774.sortingOrder = i775[7]
  i774.lightmapIndex = i775[8]
  i774.lightmapSceneIndex = i775[9]
  i774.lightmapScaleOffset = new pc.Vec4( i775[10], i775[11], i775[12], i775[13] )
  i774.lightProbeUsage = i775[14]
  i774.reflectionProbeUsage = i775[15]
  request.r(i775[16], i775[17], 0, i774, 'mesh')
  i774.meshCount = i775[18]
  i774.activeVertexStreamsCount = i775[19]
  i774.alignment = i775[20]
  i774.renderMode = i775[21]
  i774.sortMode = i775[22]
  i774.lengthScale = i775[23]
  i774.velocityScale = i775[24]
  i774.cameraVelocityScale = i775[25]
  i774.normalDirection = i775[26]
  i774.sortingFudge = i775[27]
  i774.minParticleSize = i775[28]
  i774.maxParticleSize = i775[29]
  i774.pivot = new pc.Vec3( i775[30], i775[31], i775[32] )
  request.r(i775[33], i775[34], 0, i774, 'trailMaterial')
  return i774
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i778 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i779 = data
  i778.hashCode = i779[0]
  request.r(i779[1], i779[2], 0, i778, 'material')
  i778.materialHashCode = i779[3]
  request.r(i779[4], i779[5], 0, i778, 'atlas')
  i778.normalStyle = i779[6]
  i778.normalSpacingOffset = i779[7]
  i778.boldStyle = i779[8]
  i778.boldSpacing = i779[9]
  i778.italicStyle = i779[10]
  i778.tabSize = i779[11]
  i778.m_Version = i779[12]
  i778.m_SourceFontFileGUID = i779[13]
  request.r(i779[14], i779[15], 0, i778, 'm_SourceFontFile_EditorRef')
  request.r(i779[16], i779[17], 0, i778, 'm_SourceFontFile')
  i778.m_AtlasPopulationMode = i779[18]
  i778.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i779[19], i778.m_FaceInfo)
  var i781 = i779[20]
  var i780 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i781.length; i += 1) {
    i780.add(request.d('UnityEngine.TextCore.Glyph', i781[i + 0]));
  }
  i778.m_GlyphTable = i780
  var i783 = i779[21]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i783.length; i += 1) {
    i782.add(request.d('TMPro.TMP_Character', i783[i + 0]));
  }
  i778.m_CharacterTable = i782
  var i785 = i779[22]
  var i784 = []
  for(var i = 0; i < i785.length; i += 2) {
  request.r(i785[i + 0], i785[i + 1], 2, i784, '')
  }
  i778.m_AtlasTextures = i784
  i778.m_AtlasTextureIndex = i779[23]
  i778.m_IsMultiAtlasTexturesEnabled = !!i779[24]
  i778.m_ClearDynamicDataOnBuild = !!i779[25]
  var i787 = i779[26]
  var i786 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i787.length; i += 1) {
    i786.add(request.d('UnityEngine.TextCore.GlyphRect', i787[i + 0]));
  }
  i778.m_UsedGlyphRects = i786
  var i789 = i779[27]
  var i788 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i789.length; i += 1) {
    i788.add(request.d('UnityEngine.TextCore.GlyphRect', i789[i + 0]));
  }
  i778.m_FreeGlyphRects = i788
  i778.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i779[28], i778.m_fontInfo)
  i778.m_AtlasWidth = i779[29]
  i778.m_AtlasHeight = i779[30]
  i778.m_AtlasPadding = i779[31]
  i778.m_AtlasRenderMode = i779[32]
  var i791 = i779[33]
  var i790 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i791.length; i += 1) {
    i790.add(request.d('TMPro.TMP_Glyph', i791[i + 0]));
  }
  i778.m_glyphInfoList = i790
  i778.m_KerningTable = request.d('TMPro.KerningTable', i779[34], i778.m_KerningTable)
  i778.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i779[35], i778.m_FontFeatureTable)
  var i793 = i779[36]
  var i792 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i793.length; i += 2) {
  request.r(i793[i + 0], i793[i + 1], 1, i792, '')
  }
  i778.fallbackFontAssets = i792
  var i795 = i779[37]
  var i794 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 1, i794, '')
  }
  i778.m_FallbackFontAssetTable = i794
  i778.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i779[38], i778.m_CreationSettings)
  var i797 = i779[39]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('TMPro.TMP_FontWeightPair', i797[i + 0]) );
  }
  i778.m_FontWeightTable = i796
  var i799 = i779[40]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('TMPro.TMP_FontWeightPair', i799[i + 0]) );
  }
  i778.fontWeights = i798
  return i778
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i801 = data
  i800.m_FaceIndex = i801[0]
  i800.m_FamilyName = i801[1]
  i800.m_StyleName = i801[2]
  i800.m_PointSize = i801[3]
  i800.m_Scale = i801[4]
  i800.m_LineHeight = i801[5]
  i800.m_AscentLine = i801[6]
  i800.m_CapLine = i801[7]
  i800.m_MeanLine = i801[8]
  i800.m_Baseline = i801[9]
  i800.m_DescentLine = i801[10]
  i800.m_SuperscriptOffset = i801[11]
  i800.m_SuperscriptSize = i801[12]
  i800.m_SubscriptOffset = i801[13]
  i800.m_SubscriptSize = i801[14]
  i800.m_UnderlineOffset = i801[15]
  i800.m_UnderlineThickness = i801[16]
  i800.m_StrikethroughOffset = i801[17]
  i800.m_StrikethroughThickness = i801[18]
  i800.m_TabWidth = i801[19]
  return i800
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i805 = data
  i804.m_Index = i805[0]
  i804.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i805[1], i804.m_Metrics)
  i804.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i805[2], i804.m_GlyphRect)
  i804.m_Scale = i805[3]
  i804.m_AtlasIndex = i805[4]
  return i804
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i807 = data
  i806.m_Width = i807[0]
  i806.m_Height = i807[1]
  i806.m_HorizontalBearingX = i807[2]
  i806.m_HorizontalBearingY = i807[3]
  i806.m_HorizontalAdvance = i807[4]
  return i806
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i809 = data
  i808.m_X = i809[0]
  i808.m_Y = i809[1]
  i808.m_Width = i809[2]
  i808.m_Height = i809[3]
  return i808
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i812 = root || request.c( 'TMPro.TMP_Character' )
  var i813 = data
  i812.m_ElementType = i813[0]
  i812.m_Unicode = i813[1]
  i812.m_GlyphIndex = i813[2]
  i812.m_Scale = i813[3]
  return i812
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i818 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i819 = data
  i818.Name = i819[0]
  i818.PointSize = i819[1]
  i818.Scale = i819[2]
  i818.CharacterCount = i819[3]
  i818.LineHeight = i819[4]
  i818.Baseline = i819[5]
  i818.Ascender = i819[6]
  i818.CapHeight = i819[7]
  i818.Descender = i819[8]
  i818.CenterLine = i819[9]
  i818.SuperscriptOffset = i819[10]
  i818.SubscriptOffset = i819[11]
  i818.SubSize = i819[12]
  i818.Underline = i819[13]
  i818.UnderlineThickness = i819[14]
  i818.strikethrough = i819[15]
  i818.strikethroughThickness = i819[16]
  i818.TabWidth = i819[17]
  i818.Padding = i819[18]
  i818.AtlasWidth = i819[19]
  i818.AtlasHeight = i819[20]
  return i818
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i822 = root || request.c( 'TMPro.TMP_Glyph' )
  var i823 = data
  i822.id = i823[0]
  i822.x = i823[1]
  i822.y = i823[2]
  i822.width = i823[3]
  i822.height = i823[4]
  i822.xOffset = i823[5]
  i822.yOffset = i823[6]
  i822.xAdvance = i823[7]
  i822.scale = i823[8]
  return i822
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i824 = root || request.c( 'TMPro.KerningTable' )
  var i825 = data
  var i827 = i825[0]
  var i826 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i827.length; i += 1) {
    i826.add(request.d('TMPro.KerningPair', i827[i + 0]));
  }
  i824.kerningPairs = i826
  return i824
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i830 = root || request.c( 'TMPro.KerningPair' )
  var i831 = data
  i830.xOffset = i831[0]
  i830.m_FirstGlyph = i831[1]
  i830.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i831[2], i830.m_FirstGlyphAdjustments)
  i830.m_SecondGlyph = i831[3]
  i830.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i831[4], i830.m_SecondGlyphAdjustments)
  i830.m_IgnoreSpacingAdjustments = !!i831[5]
  return i830
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i832 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i833 = data
  var i835 = i833[0]
  var i834 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i835.length; i += 1) {
    i834.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i835[i + 0]));
  }
  i832.m_GlyphPairAdjustmentRecords = i834
  return i832
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i838 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i839 = data
  i838.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i839[0], i838.m_FirstAdjustmentRecord)
  i838.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i839[1], i838.m_SecondAdjustmentRecord)
  i838.m_FeatureLookupFlags = i839[2]
  return i838
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i840 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i841 = data
  i840.m_GlyphIndex = i841[0]
  i840.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i841[1], i840.m_GlyphValueRecord)
  return i840
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i842 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i843 = data
  i842.m_XPlacement = i843[0]
  i842.m_YPlacement = i843[1]
  i842.m_XAdvance = i843[2]
  i842.m_YAdvance = i843[3]
  return i842
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i846 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i847 = data
  i846.sourceFontFileName = i847[0]
  i846.sourceFontFileGUID = i847[1]
  i846.pointSizeSamplingMode = i847[2]
  i846.pointSize = i847[3]
  i846.padding = i847[4]
  i846.packingMode = i847[5]
  i846.atlasWidth = i847[6]
  i846.atlasHeight = i847[7]
  i846.characterSetSelectionMode = i847[8]
  i846.characterSequence = i847[9]
  i846.referencedFontAssetGUID = i847[10]
  i846.referencedTextAssetGUID = i847[11]
  i846.fontStyle = i847[12]
  i846.fontStyleModifier = i847[13]
  i846.renderMode = i847[14]
  i846.includeFontFeatures = !!i847[15]
  return i846
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i850 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'regularTypeface')
  request.r(i851[2], i851[3], 0, i850, 'italicTypeface')
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i853 = data
  i852.enabled = !!i853[0]
  i852.aspect = i853[1]
  i852.orthographic = !!i853[2]
  i852.orthographicSize = i853[3]
  i852.backgroundColor = new pc.Color(i853[4], i853[5], i853[6], i853[7])
  i852.nearClipPlane = i853[8]
  i852.farClipPlane = i853[9]
  i852.fieldOfView = i853[10]
  i852.depth = i853[11]
  i852.clearFlags = i853[12]
  i852.cullingMask = i853[13]
  i852.rect = i853[14]
  request.r(i853[15], i853[16], 0, i852, 'targetTexture')
  return i852
}

Deserializers["ViewPortHandler"] = function (request, data, root) {
  var i854 = root || request.c( 'ViewPortHandler' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'camera')
  request.r(i855[2], i855[3], 0, i854, 'mask')
  request.r(i855[4], i855[5], 0, i854, 'mask2')
  request.r(i855[6], i855[7], 0, i854, 'bgFitCamera')
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i857 = data
  i856.enabled = !!i857[0]
  i856.type = i857[1]
  i856.color = new pc.Color(i857[2], i857[3], i857[4], i857[5])
  i856.cullingMask = i857[6]
  i856.intensity = i857[7]
  i856.range = i857[8]
  i856.spotAngle = i857[9]
  i856.shadows = i857[10]
  i856.shadowNormalBias = i857[11]
  i856.shadowBias = i857[12]
  i856.shadowStrength = i857[13]
  i856.lightmapBakeType = i857[14]
  i856.renderMode = i857[15]
  request.r(i857[16], i857[17], 0, i856, 'cookie')
  i856.cookieSize = i857[18]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i859 = data
  i858.enabled = !!i859[0]
  request.r(i859[1], i859[2], 0, i858, 'sharedMaterial')
  var i861 = i859[3]
  var i860 = []
  for(var i = 0; i < i861.length; i += 2) {
  request.r(i861[i + 0], i861[i + 1], 2, i860, '')
  }
  i858.sharedMaterials = i860
  i858.receiveShadows = !!i859[4]
  i858.shadowCastingMode = i859[5]
  i858.sortingLayerID = i859[6]
  i858.sortingOrder = i859[7]
  i858.lightmapIndex = i859[8]
  i858.lightmapSceneIndex = i859[9]
  i858.lightmapScaleOffset = new pc.Vec4( i859[10], i859[11], i859[12], i859[13] )
  i858.lightProbeUsage = i859[14]
  i858.reflectionProbeUsage = i859[15]
  i858.color = new pc.Color(i859[16], i859[17], i859[18], i859[19])
  request.r(i859[20], i859[21], 0, i858, 'sprite')
  i858.flipX = !!i859[22]
  i858.flipY = !!i859[23]
  i858.drawMode = i859[24]
  i858.size = new pc.Vec2( i859[25], i859[26] )
  i858.tileMode = i859[27]
  i858.adaptiveModeThreshold = i859[28]
  i858.maskInteraction = i859[29]
  i858.spriteSortPoint = i859[30]
  return i858
}

Deserializers["BackgroundFitCamera"] = function (request, data, root) {
  var i862 = root || request.c( 'BackgroundFitCamera' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'backgroundSpriteRenderer')
  request.r(i863[2], i863[3], 0, i862, 'background')
  request.r(i863[4], i863[5], 0, i862, 'camera')
  i862.backgroundDistanceFromCamera = i863[6]
  return i862
}

Deserializers["GameManager"] = function (request, data, root) {
  var i864 = root || request.c( 'GameManager' )
  var i865 = data
  i864.gameState = i865[0]
  i864.config = request.d('GameManager+GameConfig', i865[1], i864.config)
  i864.colorConfig = request.d('ColorHop', i865[2], i864.colorConfig)
  i864.currentLevel = i865[3]
  var i867 = i865[4]
  var i866 = new (System.Collections.Generic.List$1(Bridge.ns('StickManager')))
  for(var i = 0; i < i867.length; i += 2) {
  request.r(i867[i + 0], i867[i + 1], 1, i866, '')
  }
  i864.sticks = i866
  i864.countHop = i865[5]
  i864.countStick = i865[6]
  i864.cacheIndexTap1 = i865[7]
  request.r(i865[8], i865[9], 0, i864, 'timer')
  request.r(i865[10], i865[11], 0, i864, 'subTimer')
  request.r(i865[12], i865[13], 0, i864, 'countDown')
  i864.hasPassRound1 = !!i865[14]
  request.r(i865[15], i865[16], 0, i864, 'levelText')
  i864.hoopType = i865[17]
  var i869 = i865[18]
  var i868 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 1, i868, '')
  }
  i864.hoopList = i868
  request.r(i865[19], i865[20], 0, i864, 'uiManager')
  i864.levelData = request.d('LevelData', i865[21], i864.levelData)
  return i864
}

Deserializers["GameManager+GameConfig"] = function (request, data, root) {
  var i870 = root || request.c( 'GameManager+GameConfig' )
  var i871 = data
  i870.initHop = i871[0]
  i870.initHoop2 = i871[1]
  i870.initStick = i871[2]
  i870.distanceXStick = i871[3]
  i870.distanceZStick = i871[4]
  i870.distanceHop = i871[5]
  i870.heightMoveFirst = i871[6]
  i870.timeMoveFirst = i871[7]
  i870.timeMoveSecond = i871[8]
  i870.timeMoveTarget = i871[9]
  request.r(i871[10], i871[11], 0, i870, 'hopPrefab')
  request.r(i871[12], i871[13], 0, i870, 'hoop2Prefab')
  request.r(i871[14], i871[15], 0, i870, 'stickPrefab')
  return i870
}

Deserializers["ColorHop"] = function (request, data, root) {
  var i872 = root || request.c( 'ColorHop' )
  var i873 = data
  var i875 = i873[0]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Hop', i875[i + 0]) );
  }
  i872.hopColor = i874
  return i872
}

Deserializers["Hop"] = function (request, data, root) {
  var i878 = root || request.c( 'Hop' )
  var i879 = data
  i878.hoopColor = i879[0]
  request.r(i879[1], i879[2], 0, i878, 'colorHop')
  return i878
}

Deserializers["LevelData"] = function (request, data, root) {
  var i884 = root || request.c( 'LevelData' )
  var i885 = data
  var i887 = i885[0]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('Level')))
  for(var i = 0; i < i887.length; i += 1) {
    i886.add(request.d('Level', i887[i + 0]));
  }
  i884.levels = i886
  return i884
}

Deserializers["Level"] = function (request, data, root) {
  var i890 = root || request.c( 'Level' )
  var i891 = data
  i890.no = i891[0]
  var i893 = i891[1]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Data', i893[i + 0]) );
  }
  i890.data = i892
  return i890
}

Deserializers["Data"] = function (request, data, root) {
  var i896 = root || request.c( 'Data' )
  var i897 = data
  i896.stick = i897[0]
  return i896
}

Deserializers["Database"] = function (request, data, root) {
  var i898 = root || request.c( 'Database' )
  var i899 = data
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'clip')
  i900.playOnAwake = !!i901[2]
  i900.loop = !!i901[3]
  i900.time = i901[4]
  i900.volume = i901[5]
  i900.pitch = i901[6]
  i900.enabled = !!i901[7]
  return i900
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i902 = root || request.c( 'SoundManager' )
  var i903 = data
  var i905 = i903[0]
  var i904 = []
  for(var i = 0; i < i905.length; i += 2) {
  request.r(i905[i + 0], i905[i + 1], 2, i904, '')
  }
  i902.audios = i904
  request.r(i903[1], i903[2], 0, i902, 'hopFly')
  request.r(i903[3], i903[4], 0, i902, 'hopDrop')
  request.r(i903[5], i903[6], 0, i902, 'hopSelect')
  request.r(i903[7], i903[8], 0, i902, 'stickFinish')
  request.r(i903[9], i903[10], 0, i902, 'win')
  request.r(i903[11], i903[12], 0, i902, 'button')
  return i902
}

Deserializers["UIManager"] = function (request, data, root) {
  var i908 = root || request.c( 'UIManager' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'textHint')
  request.r(i909[2], i909[3], 0, i908, 'timerUI')
  request.r(i909[4], i909[5], 0, i908, 'ctaUI')
  request.r(i909[6], i909[7], 0, i908, 'downloadButton')
  request.r(i909[8], i909[9], 0, i908, 'downloadBtn')
  request.r(i909[10], i909[11], 0, i908, 'buttonImage')
  i908.downloadText = i909[12]
  i908.levelText = i909[13]
  i908.hintText = i909[14]
  request.r(i909[15], i909[16], 0, i908, 'backgroundImg')
  request.r(i909[17], i909[18], 0, i908, 'background')
  request.r(i909[19], i909[20], 0, i908, 'downloadTxt')
  request.r(i909[21], i909[22], 0, i908, 'levelTxt')
  request.r(i909[23], i909[24], 0, i908, 'mask')
  request.r(i909[25], i909[26], 0, i908, 'mask2')
  request.r(i909[27], i909[28], 0, i908, 'manager')
  request.r(i909[29], i909[30], 0, i908, 'uiGetReward')
  request.r(i909[31], i909[32], 0, i908, 'guideHand1')
  request.r(i909[33], i909[34], 0, i908, 'guideHand2')
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i911 = data
  i910.pivot = new pc.Vec2( i911[0], i911[1] )
  i910.anchorMin = new pc.Vec2( i911[2], i911[3] )
  i910.anchorMax = new pc.Vec2( i911[4], i911[5] )
  i910.sizeDelta = new pc.Vec2( i911[6], i911[7] )
  i910.anchoredPosition3D = new pc.Vec3( i911[8], i911[9], i911[10] )
  i910.rotation = new pc.Quat(i911[11], i911[12], i911[13], i911[14])
  i910.scale = new pc.Vec3( i911[15], i911[16], i911[17] )
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i913 = data
  i912.enabled = !!i913[0]
  i912.planeDistance = i913[1]
  i912.referencePixelsPerUnit = i913[2]
  i912.isFallbackOverlay = !!i913[3]
  i912.renderMode = i913[4]
  i912.renderOrder = i913[5]
  i912.sortingLayerName = i913[6]
  i912.sortingOrder = i913[7]
  i912.scaleFactor = i913[8]
  request.r(i913[9], i913[10], 0, i912, 'worldCamera')
  i912.overrideSorting = !!i913[11]
  i912.pixelPerfect = !!i913[12]
  i912.targetDisplay = i913[13]
  i912.overridePixelPerfect = !!i913[14]
  return i912
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i915 = data
  i914.m_UiScaleMode = i915[0]
  i914.m_ReferencePixelsPerUnit = i915[1]
  i914.m_ScaleFactor = i915[2]
  i914.m_ReferenceResolution = new pc.Vec2( i915[3], i915[4] )
  i914.m_ScreenMatchMode = i915[5]
  i914.m_MatchWidthOrHeight = i915[6]
  i914.m_PhysicalUnit = i915[7]
  i914.m_FallbackScreenDPI = i915[8]
  i914.m_DefaultSpriteDPI = i915[9]
  i914.m_DynamicPixelsPerUnit = i915[10]
  i914.m_PresetInfoIsWorld = !!i915[11]
  return i914
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i917 = data
  i916.m_IgnoreReversedGraphics = !!i917[0]
  i916.m_BlockingObjects = i917[1]
  i916.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i917[2] )
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i919 = data
  i918.cullTransparentMesh = !!i919[0]
  return i918
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEngine.UI.Image' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'm_Sprite')
  i920.m_Type = i921[2]
  i920.m_PreserveAspect = !!i921[3]
  i920.m_FillCenter = !!i921[4]
  i920.m_FillMethod = i921[5]
  i920.m_FillAmount = i921[6]
  i920.m_FillClockwise = !!i921[7]
  i920.m_FillOrigin = i921[8]
  i920.m_UseSpriteMesh = !!i921[9]
  i920.m_PixelsPerUnitMultiplier = i921[10]
  request.r(i921[11], i921[12], 0, i920, 'm_Material')
  i920.m_Maskable = !!i921[13]
  i920.m_Color = new pc.Color(i921[14], i921[15], i921[16], i921[17])
  i920.m_RaycastTarget = !!i921[18]
  i920.m_RaycastPadding = new pc.Vec4( i921[19], i921[20], i921[21], i921[22] )
  return i920
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.UI.Text' )
  var i923 = data
  i922.m_FontData = request.d('UnityEngine.UI.FontData', i923[0], i922.m_FontData)
  i922.m_Text = i923[1]
  request.r(i923[2], i923[3], 0, i922, 'm_Material')
  i922.m_Maskable = !!i923[4]
  i922.m_Color = new pc.Color(i923[5], i923[6], i923[7], i923[8])
  i922.m_RaycastTarget = !!i923[9]
  i922.m_RaycastPadding = new pc.Vec4( i923[10], i923[11], i923[12], i923[13] )
  return i922
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.UI.FontData' )
  var i925 = data
  request.r(i925[0], i925[1], 0, i924, 'm_Font')
  i924.m_FontSize = i925[2]
  i924.m_FontStyle = i925[3]
  i924.m_BestFit = !!i925[4]
  i924.m_MinSize = i925[5]
  i924.m_MaxSize = i925[6]
  i924.m_Alignment = i925[7]
  i924.m_AlignByGeometry = !!i925[8]
  i924.m_RichText = !!i925[9]
  i924.m_HorizontalOverflow = i925[10]
  i924.m_VerticalOverflow = i925[11]
  i924.m_LineSpacing = i925[12]
  return i924
}

Deserializers["CountDown"] = function (request, data, root) {
  var i926 = root || request.c( 'CountDown' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'timeText')
  request.r(i927[2], i927[3], 0, i926, 'subTimer')
  i926.currentTime = i927[4]
  i926.isStart = !!i927[5]
  request.r(i927[6], i927[7], 0, i926, 'uiManager')
  return i926
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.UI.Mask' )
  var i929 = data
  i928.m_ShowMaskGraphic = !!i929[0]
  return i928
}

Deserializers["CutoutMaskUI"] = function (request, data, root) {
  var i930 = root || request.c( 'CutoutMaskUI' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'm_Material')
  request.r(i931[2], i931[3], 0, i930, 'm_Sprite')
  i930.m_Type = i931[4]
  i930.m_PreserveAspect = !!i931[5]
  i930.m_FillCenter = !!i931[6]
  i930.m_FillMethod = i931[7]
  i930.m_FillAmount = i931[8]
  i930.m_FillClockwise = !!i931[9]
  i930.m_FillOrigin = i931[10]
  i930.m_UseSpriteMesh = !!i931[11]
  i930.m_PixelsPerUnitMultiplier = i931[12]
  i930.m_Maskable = !!i931[13]
  i930.m_Color = new pc.Color(i931[14], i931[15], i931[16], i931[17])
  i930.m_RaycastTarget = !!i931[18]
  i930.m_RaycastPadding = new pc.Vec4( i931[19], i931[20], i931[21], i931[22] )
  return i930
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i932 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i933 = data
  i932.m_hasFontAssetChanged = !!i933[0]
  request.r(i933[1], i933[2], 0, i932, 'm_baseMaterial')
  i932.m_maskOffset = new pc.Vec4( i933[3], i933[4], i933[5], i933[6] )
  i932.m_text = i933[7]
  i932.m_isRightToLeft = !!i933[8]
  request.r(i933[9], i933[10], 0, i932, 'm_fontAsset')
  request.r(i933[11], i933[12], 0, i932, 'm_sharedMaterial')
  var i935 = i933[13]
  var i934 = []
  for(var i = 0; i < i935.length; i += 2) {
  request.r(i935[i + 0], i935[i + 1], 2, i934, '')
  }
  i932.m_fontSharedMaterials = i934
  request.r(i933[14], i933[15], 0, i932, 'm_fontMaterial')
  var i937 = i933[16]
  var i936 = []
  for(var i = 0; i < i937.length; i += 2) {
  request.r(i937[i + 0], i937[i + 1], 2, i936, '')
  }
  i932.m_fontMaterials = i936
  i932.m_fontColor32 = UnityEngine.Color32.ConstructColor(i933[17], i933[18], i933[19], i933[20])
  i932.m_fontColor = new pc.Color(i933[21], i933[22], i933[23], i933[24])
  i932.m_enableVertexGradient = !!i933[25]
  i932.m_colorMode = i933[26]
  i932.m_fontColorGradient = request.d('TMPro.VertexGradient', i933[27], i932.m_fontColorGradient)
  request.r(i933[28], i933[29], 0, i932, 'm_fontColorGradientPreset')
  request.r(i933[30], i933[31], 0, i932, 'm_spriteAsset')
  i932.m_tintAllSprites = !!i933[32]
  request.r(i933[33], i933[34], 0, i932, 'm_StyleSheet')
  i932.m_TextStyleHashCode = i933[35]
  i932.m_overrideHtmlColors = !!i933[36]
  i932.m_faceColor = UnityEngine.Color32.ConstructColor(i933[37], i933[38], i933[39], i933[40])
  i932.m_fontSize = i933[41]
  i932.m_fontSizeBase = i933[42]
  i932.m_fontWeight = i933[43]
  i932.m_enableAutoSizing = !!i933[44]
  i932.m_fontSizeMin = i933[45]
  i932.m_fontSizeMax = i933[46]
  i932.m_fontStyle = i933[47]
  i932.m_HorizontalAlignment = i933[48]
  i932.m_VerticalAlignment = i933[49]
  i932.m_textAlignment = i933[50]
  i932.m_characterSpacing = i933[51]
  i932.m_wordSpacing = i933[52]
  i932.m_lineSpacing = i933[53]
  i932.m_lineSpacingMax = i933[54]
  i932.m_paragraphSpacing = i933[55]
  i932.m_charWidthMaxAdj = i933[56]
  i932.m_enableWordWrapping = !!i933[57]
  i932.m_wordWrappingRatios = i933[58]
  i932.m_overflowMode = i933[59]
  request.r(i933[60], i933[61], 0, i932, 'm_linkedTextComponent')
  request.r(i933[62], i933[63], 0, i932, 'parentLinkedComponent')
  i932.m_enableKerning = !!i933[64]
  i932.m_enableExtraPadding = !!i933[65]
  i932.checkPaddingRequired = !!i933[66]
  i932.m_isRichText = !!i933[67]
  i932.m_parseCtrlCharacters = !!i933[68]
  i932.m_isOrthographic = !!i933[69]
  i932.m_isCullingEnabled = !!i933[70]
  i932.m_horizontalMapping = i933[71]
  i932.m_verticalMapping = i933[72]
  i932.m_uvLineOffset = i933[73]
  i932.m_geometrySortingOrder = i933[74]
  i932.m_IsTextObjectScaleStatic = !!i933[75]
  i932.m_VertexBufferAutoSizeReduction = !!i933[76]
  i932.m_useMaxVisibleDescender = !!i933[77]
  i932.m_pageToDisplay = i933[78]
  i932.m_margin = new pc.Vec4( i933[79], i933[80], i933[81], i933[82] )
  i932.m_isUsingLegacyAnimationComponent = !!i933[83]
  i932.m_isVolumetricText = !!i933[84]
  request.r(i933[85], i933[86], 0, i932, 'm_Material')
  i932.m_Maskable = !!i933[87]
  i932.m_Color = new pc.Color(i933[88], i933[89], i933[90], i933[91])
  i932.m_RaycastTarget = !!i933[92]
  i932.m_RaycastPadding = new pc.Vec4( i933[93], i933[94], i933[95], i933[96] )
  return i932
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i938 = root || request.c( 'TMPro.VertexGradient' )
  var i939 = data
  i938.topLeft = new pc.Color(i939[0], i939[1], i939[2], i939[3])
  i938.topRight = new pc.Color(i939[4], i939[5], i939[6], i939[7])
  i938.bottomLeft = new pc.Color(i939[8], i939[9], i939[10], i939[11])
  i938.bottomRight = new pc.Color(i939[12], i939[13], i939[14], i939[15])
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'animatorController')
  i940.updateMode = i941[2]
  var i943 = i941[3]
  var i942 = []
  for(var i = 0; i < i943.length; i += 2) {
  request.r(i943[i + 0], i943[i + 1], 2, i942, '')
  }
  i940.humanBones = i942
  i940.enabled = !!i941[4]
  return i940
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i947 = data
  request.r(i947[0], i947[1], 0, i946, 'm_Texture')
  i946.m_UVRect = UnityEngine.Rect.MinMaxRect(i947[2], i947[3], i947[4], i947[5])
  request.r(i947[6], i947[7], 0, i946, 'm_Material')
  i946.m_Maskable = !!i947[8]
  i946.m_Color = new pc.Color(i947[9], i947[10], i947[11], i947[12])
  i946.m_RaycastTarget = !!i947[13]
  i946.m_RaycastPadding = new pc.Vec4( i947[14], i947[15], i947[16], i947[17] )
  return i946
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.UI.Button' )
  var i949 = data
  i948.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i949[0], i948.m_OnClick)
  i948.m_Navigation = request.d('UnityEngine.UI.Navigation', i949[1], i948.m_Navigation)
  i948.m_Transition = i949[2]
  i948.m_Colors = request.d('UnityEngine.UI.ColorBlock', i949[3], i948.m_Colors)
  i948.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i949[4], i948.m_SpriteState)
  i948.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i949[5], i948.m_AnimationTriggers)
  i948.m_Interactable = !!i949[6]
  request.r(i949[7], i949[8], 0, i948, 'm_TargetGraphic')
  return i948
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i951 = data
  i950.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i951[0], i950.m_PersistentCalls)
  return i950
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i953 = data
  var i955 = i953[0]
  var i954 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i955.length; i += 1) {
    i954.add(request.d('UnityEngine.Events.PersistentCall', i955[i + 0]));
  }
  i952.m_Calls = i954
  return i952
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i958 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i959 = data
  request.r(i959[0], i959[1], 0, i958, 'm_Target')
  i958.m_TargetAssemblyTypeName = i959[2]
  i958.m_MethodName = i959[3]
  i958.m_Mode = i959[4]
  i958.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i959[5], i958.m_Arguments)
  i958.m_CallState = i959[6]
  return i958
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'm_ObjectArgument')
  i960.m_ObjectArgumentAssemblyTypeName = i961[2]
  i960.m_IntArgument = i961[3]
  i960.m_FloatArgument = i961[4]
  i960.m_StringArgument = i961[5]
  i960.m_BoolArgument = !!i961[6]
  return i960
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i963 = data
  i962.m_Mode = i963[0]
  i962.m_WrapAround = !!i963[1]
  request.r(i963[2], i963[3], 0, i962, 'm_SelectOnUp')
  request.r(i963[4], i963[5], 0, i962, 'm_SelectOnDown')
  request.r(i963[6], i963[7], 0, i962, 'm_SelectOnLeft')
  request.r(i963[8], i963[9], 0, i962, 'm_SelectOnRight')
  return i962
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i965 = data
  i964.m_NormalColor = new pc.Color(i965[0], i965[1], i965[2], i965[3])
  i964.m_HighlightedColor = new pc.Color(i965[4], i965[5], i965[6], i965[7])
  i964.m_PressedColor = new pc.Color(i965[8], i965[9], i965[10], i965[11])
  i964.m_SelectedColor = new pc.Color(i965[12], i965[13], i965[14], i965[15])
  i964.m_DisabledColor = new pc.Color(i965[16], i965[17], i965[18], i965[19])
  i964.m_ColorMultiplier = i965[20]
  i964.m_FadeDuration = i965[21]
  return i964
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i967 = data
  request.r(i967[0], i967[1], 0, i966, 'm_HighlightedSprite')
  request.r(i967[2], i967[3], 0, i966, 'm_PressedSprite')
  request.r(i967[4], i967[5], 0, i966, 'm_SelectedSprite')
  request.r(i967[6], i967[7], 0, i966, 'm_DisabledSprite')
  return i966
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i968 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i969 = data
  i968.m_NormalTrigger = i969[0]
  i968.m_HighlightedTrigger = i969[1]
  i968.m_PressedTrigger = i969[2]
  i968.m_SelectedTrigger = i969[3]
  i968.m_DisabledTrigger = i969[4]
  return i968
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i971 = data
  request.r(i971[0], i971[1], 0, i970, 'm_FirstSelected')
  i970.m_sendNavigationEvents = !!i971[2]
  i970.m_DragThreshold = i971[3]
  return i970
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i972 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i973 = data
  i972.m_HorizontalAxis = i973[0]
  i972.m_VerticalAxis = i973[1]
  i972.m_SubmitButton = i973[2]
  i972.m_CancelButton = i973[3]
  i972.m_InputActionsPerSecond = i973[4]
  i972.m_RepeatDelay = i973[5]
  i972.m_ForceModuleActive = !!i973[6]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i975 = data
  i974.enabled = !!i975[0]
  i974.isTrigger = !!i975[1]
  request.r(i975[2], i975[3], 0, i974, 'material')
  request.r(i975[4], i975[5], 0, i974, 'sharedMesh')
  i974.convex = !!i975[6]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i977 = data
  i976.name = i977[0]
  i976.atlasId = i977[1]
  i976.mipmapCount = i977[2]
  i976.hdr = !!i977[3]
  i976.size = i977[4]
  i976.anisoLevel = i977[5]
  i976.filterMode = i977[6]
  i976.wrapMode = i977[7]
  var i979 = i977[8]
  var i978 = []
  for(var i = 0; i < i979.length; i += 4) {
    i978.push( UnityEngine.Rect.MinMaxRect(i979[i + 0], i979[i + 1], i979[i + 2], i979[i + 3]) );
  }
  i976.rects = i978
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i983 = data
  i982.name = i983[0]
  i982.index = i983[1]
  i982.startup = !!i983[2]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i985 = data
  i984.ambientIntensity = i985[0]
  i984.reflectionIntensity = i985[1]
  i984.ambientMode = i985[2]
  i984.ambientLight = new pc.Color(i985[3], i985[4], i985[5], i985[6])
  i984.ambientSkyColor = new pc.Color(i985[7], i985[8], i985[9], i985[10])
  i984.ambientGroundColor = new pc.Color(i985[11], i985[12], i985[13], i985[14])
  i984.ambientEquatorColor = new pc.Color(i985[15], i985[16], i985[17], i985[18])
  i984.fogColor = new pc.Color(i985[19], i985[20], i985[21], i985[22])
  i984.fogEndDistance = i985[23]
  i984.fogStartDistance = i985[24]
  i984.fogDensity = i985[25]
  i984.fog = !!i985[26]
  request.r(i985[27], i985[28], 0, i984, 'skybox')
  i984.fogMode = i985[29]
  var i987 = i985[30]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i987[i + 0]) );
  }
  i984.lightmaps = i986
  i984.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i985[31], i984.lightProbes)
  i984.lightmapsMode = i985[32]
  i984.environmentLightingMode = i985[33]
  i984.ambientProbe = new pc.SphericalHarmonicsL2(i985[34])
  request.r(i985[35], i985[36], 0, i984, 'customReflection')
  request.r(i985[37], i985[38], 0, i984, 'defaultReflection')
  i984.defaultReflectionMode = i985[39]
  i984.defaultReflectionResolution = i985[40]
  i984.sunLightObjectId = i985[41]
  i984.pixelLightCount = i985[42]
  i984.defaultReflectionHDR = !!i985[43]
  i984.hasLightDataAsset = !!i985[44]
  i984.hasManualGenerate = !!i985[45]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i991 = data
  request.r(i991[0], i991[1], 0, i990, 'lightmapColor')
  request.r(i991[2], i991[3], 0, i990, 'lightmapDirection')
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i992 = root || new UnityEngine.LightProbes()
  var i993 = data
  return i992
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1000 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1001 = data
  i1000.hashCode = i1001[0]
  request.r(i1001[1], i1001[2], 0, i1000, 'material')
  i1000.materialHashCode = i1001[3]
  request.r(i1001[4], i1001[5], 0, i1000, 'spriteSheet')
  var i1003 = i1001[6]
  var i1002 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.add(request.d('TMPro.TMP_Sprite', i1003[i + 0]));
  }
  i1000.spriteInfoList = i1002
  var i1005 = i1001[7]
  var i1004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1005.length; i += 2) {
  request.r(i1005[i + 0], i1005[i + 1], 1, i1004, '')
  }
  i1000.fallbackSpriteAssets = i1004
  i1000.m_Version = i1001[8]
  i1000.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1001[9], i1000.m_FaceInfo)
  var i1007 = i1001[10]
  var i1006 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.add(request.d('TMPro.TMP_SpriteCharacter', i1007[i + 0]));
  }
  i1000.m_SpriteCharacterTable = i1006
  var i1009 = i1001[11]
  var i1008 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.add(request.d('TMPro.TMP_SpriteGlyph', i1009[i + 0]));
  }
  i1000.m_SpriteGlyphTable = i1008
  return i1000
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1012 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1013 = data
  i1012.name = i1013[0]
  i1012.hashCode = i1013[1]
  i1012.unicode = i1013[2]
  i1012.pivot = new pc.Vec2( i1013[3], i1013[4] )
  request.r(i1013[5], i1013[6], 0, i1012, 'sprite')
  i1012.id = i1013[7]
  i1012.x = i1013[8]
  i1012.y = i1013[9]
  i1012.width = i1013[10]
  i1012.height = i1013[11]
  i1012.xOffset = i1013[12]
  i1012.yOffset = i1013[13]
  i1012.xAdvance = i1013[14]
  i1012.scale = i1013[15]
  return i1012
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1018 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1019 = data
  i1018.m_Name = i1019[0]
  i1018.m_HashCode = i1019[1]
  i1018.m_ElementType = i1019[2]
  i1018.m_Unicode = i1019[3]
  i1018.m_GlyphIndex = i1019[4]
  i1018.m_Scale = i1019[5]
  return i1018
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1022 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1023 = data
  request.r(i1023[0], i1023[1], 0, i1022, 'sprite')
  i1022.m_Index = i1023[2]
  i1022.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1023[3], i1022.m_Metrics)
  i1022.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1023[4], i1022.m_GlyphRect)
  i1022.m_Scale = i1023[5]
  i1022.m_AtlasIndex = i1023[6]
  return i1022
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1024 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1025 = data
  var i1027 = i1025[0]
  var i1026 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.add(request.d('TMPro.TMP_Style', i1027[i + 0]));
  }
  i1024.m_StyleList = i1026
  return i1024
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1030 = root || request.c( 'TMPro.TMP_Style' )
  var i1031 = data
  i1030.m_Name = i1031[0]
  i1030.m_HashCode = i1031[1]
  i1030.m_OpeningDefinition = i1031[2]
  i1030.m_ClosingDefinition = i1031[3]
  i1030.m_OpeningTagArray = i1031[4]
  i1030.m_ClosingTagArray = i1031[5]
  i1030.m_OpeningTagUnicodeArray = i1031[6]
  i1030.m_ClosingTagUnicodeArray = i1031[7]
  return i1030
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1032 = root || request.c( 'TMPro.TMP_Settings' )
  var i1033 = data
  i1032.m_enableWordWrapping = !!i1033[0]
  i1032.m_enableKerning = !!i1033[1]
  i1032.m_enableExtraPadding = !!i1033[2]
  i1032.m_enableTintAllSprites = !!i1033[3]
  i1032.m_enableParseEscapeCharacters = !!i1033[4]
  i1032.m_EnableRaycastTarget = !!i1033[5]
  i1032.m_GetFontFeaturesAtRuntime = !!i1033[6]
  i1032.m_missingGlyphCharacter = i1033[7]
  i1032.m_warningsDisabled = !!i1033[8]
  request.r(i1033[9], i1033[10], 0, i1032, 'm_defaultFontAsset')
  i1032.m_defaultFontAssetPath = i1033[11]
  i1032.m_defaultFontSize = i1033[12]
  i1032.m_defaultAutoSizeMinRatio = i1033[13]
  i1032.m_defaultAutoSizeMaxRatio = i1033[14]
  i1032.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1033[15], i1033[16] )
  i1032.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1033[17], i1033[18] )
  i1032.m_autoSizeTextContainer = !!i1033[19]
  i1032.m_IsTextObjectScaleStatic = !!i1033[20]
  var i1035 = i1033[21]
  var i1034 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1035.length; i += 2) {
  request.r(i1035[i + 0], i1035[i + 1], 1, i1034, '')
  }
  i1032.m_fallbackFontAssets = i1034
  i1032.m_matchMaterialPreset = !!i1033[22]
  request.r(i1033[23], i1033[24], 0, i1032, 'm_defaultSpriteAsset')
  i1032.m_defaultSpriteAssetPath = i1033[25]
  i1032.m_enableEmojiSupport = !!i1033[26]
  i1032.m_MissingCharacterSpriteUnicode = i1033[27]
  i1032.m_defaultColorGradientPresetsPath = i1033[28]
  request.r(i1033[29], i1033[30], 0, i1032, 'm_defaultStyleSheet')
  i1032.m_StyleSheetsResourcePath = i1033[31]
  request.r(i1033[32], i1033[33], 0, i1032, 'm_leadingCharacters')
  request.r(i1033[34], i1033[35], 0, i1032, 'm_followingCharacters')
  i1032.m_UseModernHangulLineBreakingRules = !!i1033[36]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1037 = data
  var i1039 = i1037[0]
  var i1038 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.add(i1039[i + 0]);
  }
  i1036.invalidShaderVariants = i1038
  i1036.name = i1037[1]
  var i1041 = i1037[2]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( i1041[i + 0] );
  }
  i1036.shaderDefinedKeywords = i1040
  var i1043 = i1037[3]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1043[i + 0]) );
  }
  i1036.passes = i1042
  var i1045 = i1037[4]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1045[i + 0]) );
  }
  i1036.defaultParameterValues = i1044
  request.r(i1037[5], i1037[6], 0, i1036, 'unityFallbackShader')
  i1036.readDepth = !!i1037[7]
  i1036.IsCreatedByShaderGraph = !!i1037[8]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1052 = root || new pc.UnityShaderPass()
  var i1053 = data
  i1052.passType = i1053[0]
  i1052.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1053[1], i1052.zTest)
  i1052.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1053[2], i1052.zWrite)
  i1052.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1053[3], i1052.culling)
  i1052.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1053[4], i1052.blending)
  i1052.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1053[5], i1052.alphaBlending)
  i1052.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1053[6], i1052.colorWriteMask)
  i1052.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1053[7], i1052.offsetUnits)
  i1052.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1053[8], i1052.offsetFactor)
  i1052.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1053[9], i1052.stencilRef)
  i1052.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1053[10], i1052.stencilReadMask)
  i1052.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1053[11], i1052.stencilWriteMask)
  i1052.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1053[12], i1052.stencilOp)
  i1052.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1053[13], i1052.stencilOpFront)
  i1052.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1053[14], i1052.stencilOpBack)
  var i1055 = i1053[15]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1055[i + 0]) );
  }
  i1052.tags = i1054
  var i1057 = i1053[16]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( i1057[i + 0] );
  }
  i1052.passDefinedKeywords = i1056
  var i1059 = i1053[17]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1059[i + 0]) );
  }
  i1052.variants = i1058
  i1052.readDepth = !!i1053[18]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1061 = data
  i1060.val = i1061[0]
  i1060.name = i1061[1]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1063 = data
  i1062.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1063[0], i1062.src)
  i1062.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1063[1], i1062.dst)
  i1062.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1063[2], i1062.op)
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1065 = data
  i1064.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1065[0], i1064.pass)
  i1064.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1065[1], i1064.fail)
  i1064.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1065[2], i1064.zFail)
  i1064.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1065[3], i1064.comp)
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1069 = data
  i1068.name = i1069[0]
  i1068.value = i1069[1]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1073 = data
  var i1075 = i1073[0]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( i1075[i + 0] );
  }
  i1072.keywords = i1074
  i1072.vertexProgram = i1073[1]
  i1072.fragmentProgram = i1073[2]
  i1072.readDepth = !!i1073[3]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1079 = data
  i1078.name = i1079[0]
  i1078.type = i1079[1]
  i1078.value = new pc.Vec4( i1079[2], i1079[3], i1079[4], i1079[5] )
  i1078.textureValue = i1079[6]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1081 = data
  i1080.name = i1081[0]
  request.r(i1081[1], i1081[2], 0, i1080, 'texture')
  i1080.aabb = i1081[3]
  i1080.vertices = i1081[4]
  i1080.triangles = i1081[5]
  i1080.textureRect = UnityEngine.Rect.MinMaxRect(i1081[6], i1081[7], i1081[8], i1081[9])
  i1080.packedRect = UnityEngine.Rect.MinMaxRect(i1081[10], i1081[11], i1081[12], i1081[13])
  i1080.border = new pc.Vec4( i1081[14], i1081[15], i1081[16], i1081[17] )
  i1080.transparency = i1081[18]
  i1080.bounds = i1081[19]
  i1080.pixelsPerUnit = i1081[20]
  i1080.textureWidth = i1081[21]
  i1080.textureHeight = i1081[22]
  i1080.nativeSize = new pc.Vec2( i1081[23], i1081[24] )
  i1080.pivot = new pc.Vec2( i1081[25], i1081[26] )
  i1080.textureRectOffset = new pc.Vec2( i1081[27], i1081[28] )
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1083 = data
  i1082.name = i1083[0]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1085 = data
  i1084.name = i1085[0]
  i1084.wrapMode = i1085[1]
  i1084.isLooping = !!i1085[2]
  i1084.length = i1085[3]
  var i1087 = i1085[4]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1087[i + 0]) );
  }
  i1084.curves = i1086
  var i1089 = i1085[5]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1089[i + 0]) );
  }
  i1084.events = i1088
  i1084.halfPrecision = !!i1085[6]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1093 = data
  i1092.path = i1093[0]
  i1092.componentType = i1093[1]
  i1092.property = i1093[2]
  i1092.keys = i1093[3]
  var i1095 = i1093[4]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1095[i + 0]) );
  }
  i1092.objectReferenceKeys = i1094
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1099 = data
  i1098.time = i1099[0]
  request.r(i1099[1], i1099[2], 0, i1098, 'value')
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1103 = data
  i1102.functionName = i1103[0]
  i1102.floatParameter = i1103[1]
  i1102.intParameter = i1103[2]
  i1102.stringParameter = i1103[3]
  request.r(i1103[4], i1103[5], 0, i1102, 'objectReferenceParameter')
  i1102.time = i1103[6]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1105 = data
  i1104.name = i1105[0]
  i1104.ascent = i1105[1]
  i1104.originalLineHeight = i1105[2]
  i1104.fontSize = i1105[3]
  var i1107 = i1105[4]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1107[i + 0]) );
  }
  i1104.characterInfo = i1106
  request.r(i1105[5], i1105[6], 0, i1104, 'texture')
  i1104.originalFontSize = i1105[7]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1111 = data
  i1110.index = i1111[0]
  i1110.advance = i1111[1]
  i1110.bearing = i1111[2]
  i1110.glyphWidth = i1111[3]
  i1110.glyphHeight = i1111[4]
  i1110.minX = i1111[5]
  i1110.maxX = i1111[6]
  i1110.minY = i1111[7]
  i1110.maxY = i1111[8]
  i1110.uvBottomLeftX = i1111[9]
  i1110.uvBottomLeftY = i1111[10]
  i1110.uvBottomRightX = i1111[11]
  i1110.uvBottomRightY = i1111[12]
  i1110.uvTopLeftX = i1111[13]
  i1110.uvTopLeftY = i1111[14]
  i1110.uvTopRightX = i1111[15]
  i1110.uvTopRightY = i1111[16]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1113 = data
  i1112.name = i1113[0]
  var i1115 = i1113[1]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1115[i + 0]) );
  }
  i1112.states = i1114
  var i1117 = i1113[2]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1117[i + 0]) );
  }
  i1112.layers = i1116
  var i1119 = i1113[3]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1119[i + 0]) );
  }
  i1112.parameters = i1118
  var i1121 = i1113[4]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( i1121[i + 0] );
  }
  i1112.animationClips = i1120
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1125 = data
  i1124.cycleOffset = i1125[0]
  i1124.cycleOffsetParameter = i1125[1]
  i1124.cycleOffsetParameterActive = !!i1125[2]
  i1124.mirror = !!i1125[3]
  i1124.mirrorParameter = i1125[4]
  i1124.mirrorParameterActive = !!i1125[5]
  i1124.motionId = i1125[6]
  i1124.nameHash = i1125[7]
  i1124.fullPathHash = i1125[8]
  i1124.speed = i1125[9]
  i1124.speedParameter = i1125[10]
  i1124.speedParameterActive = !!i1125[11]
  i1124.tag = i1125[12]
  i1124.name = i1125[13]
  i1124.writeDefaultValues = !!i1125[14]
  var i1127 = i1125[15]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1127[i + 0]) );
  }
  i1124.transitions = i1126
  var i1129 = i1125[16]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 2) {
  request.r(i1129[i + 0], i1129[i + 1], 2, i1128, '')
  }
  i1124.behaviours = i1128
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1133 = data
  i1132.fullPath = i1133[0]
  i1132.canTransitionToSelf = !!i1133[1]
  i1132.duration = i1133[2]
  i1132.exitTime = i1133[3]
  i1132.hasExitTime = !!i1133[4]
  i1132.hasFixedDuration = !!i1133[5]
  i1132.interruptionSource = i1133[6]
  i1132.offset = i1133[7]
  i1132.orderedInterruption = !!i1133[8]
  i1132.destinationStateNameHash = i1133[9]
  i1132.destinationStateMachineId = i1133[10]
  i1132.isExit = !!i1133[11]
  i1132.mute = !!i1133[12]
  i1132.solo = !!i1133[13]
  var i1135 = i1133[14]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1135[i + 0]) );
  }
  i1132.conditions = i1134
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1141 = data
  i1140.blendingMode = i1141[0]
  i1140.defaultWeight = i1141[1]
  i1140.name = i1141[2]
  i1140.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1141[3], i1140.stateMachine)
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1143 = data
  i1142.id = i1143[0]
  i1142.defaultStateNameHash = i1143[1]
  var i1145 = i1143[2]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1145[i + 0]) );
  }
  i1142.entryTransitions = i1144
  var i1147 = i1143[3]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1147[i + 0]) );
  }
  i1142.anyStateTransitions = i1146
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1151 = data
  i1150.destinationStateNameHash = i1151[0]
  i1150.destinationStateMachineId = i1151[1]
  i1150.isExit = !!i1151[2]
  i1150.mute = !!i1151[3]
  i1150.solo = !!i1151[4]
  var i1153 = i1151[5]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1153[i + 0]) );
  }
  i1150.conditions = i1152
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1157 = data
  i1156.defaultBool = !!i1157[0]
  i1156.defaultFloat = i1157[1]
  i1156.defaultInt = i1157[2]
  i1156.name = i1157[3]
  i1156.nameHash = i1157[4]
  i1156.type = i1157[5]
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1159 = data
  i1158.name = i1159[0]
  i1158.bytes64 = i1159[1]
  i1158.data = i1159[2]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1161 = data
  var i1163 = i1161[0]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1163[i + 0]) );
  }
  i1160.files = i1162
  i1160.componentToPrefabIds = i1161[1]
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1167 = data
  i1166.path = i1167[0]
  request.r(i1167[1], i1167[2], 0, i1166, 'unityObject')
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1169 = data
  var i1171 = i1169[0]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1171[i + 0]) );
  }
  i1168.scriptsExecutionOrder = i1170
  var i1173 = i1169[1]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1173[i + 0]) );
  }
  i1168.sortingLayers = i1172
  var i1175 = i1169[2]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1175[i + 0]) );
  }
  i1168.cullingLayers = i1174
  i1168.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1169[3], i1168.timeSettings)
  i1168.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1169[4], i1168.physicsSettings)
  i1168.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1169[5], i1168.physics2DSettings)
  i1168.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1169[6], i1168.qualitySettings)
  i1168.removeShadows = !!i1169[7]
  i1168.autoInstantiatePrefabs = !!i1169[8]
  i1168.enableAutoInstancing = !!i1169[9]
  i1168.lightmapEncodingQuality = i1169[10]
  i1168.desiredColorSpace = i1169[11]
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1179 = data
  i1178.name = i1179[0]
  i1178.value = i1179[1]
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1183 = data
  i1182.id = i1183[0]
  i1182.name = i1183[1]
  i1182.value = i1183[2]
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1187 = data
  i1186.id = i1187[0]
  i1186.name = i1187[1]
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1189 = data
  i1188.fixedDeltaTime = i1189[0]
  i1188.maximumDeltaTime = i1189[1]
  i1188.timeScale = i1189[2]
  i1188.maximumParticleTimestep = i1189[3]
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1191 = data
  i1190.gravity = new pc.Vec3( i1191[0], i1191[1], i1191[2] )
  i1190.defaultSolverIterations = i1191[3]
  i1190.bounceThreshold = i1191[4]
  i1190.autoSyncTransforms = !!i1191[5]
  i1190.autoSimulation = !!i1191[6]
  var i1193 = i1191[7]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1193[i + 0]) );
  }
  i1190.collisionMatrix = i1192
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1197 = data
  i1196.enabled = !!i1197[0]
  i1196.layerId = i1197[1]
  i1196.otherLayerId = i1197[2]
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1199 = data
  request.r(i1199[0], i1199[1], 0, i1198, 'material')
  i1198.gravity = new pc.Vec2( i1199[2], i1199[3] )
  i1198.positionIterations = i1199[4]
  i1198.velocityIterations = i1199[5]
  i1198.velocityThreshold = i1199[6]
  i1198.maxLinearCorrection = i1199[7]
  i1198.maxAngularCorrection = i1199[8]
  i1198.maxTranslationSpeed = i1199[9]
  i1198.maxRotationSpeed = i1199[10]
  i1198.timeToSleep = i1199[11]
  i1198.linearSleepTolerance = i1199[12]
  i1198.angularSleepTolerance = i1199[13]
  i1198.defaultContactOffset = i1199[14]
  i1198.autoSimulation = !!i1199[15]
  i1198.queriesHitTriggers = !!i1199[16]
  i1198.queriesStartInColliders = !!i1199[17]
  i1198.callbacksOnDisable = !!i1199[18]
  i1198.reuseCollisionCallbacks = !!i1199[19]
  i1198.autoSyncTransforms = !!i1199[20]
  var i1201 = i1199[21]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1201[i + 0]) );
  }
  i1198.collisionMatrix = i1200
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1205 = data
  i1204.enabled = !!i1205[0]
  i1204.layerId = i1205[1]
  i1204.otherLayerId = i1205[2]
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1207 = data
  var i1209 = i1207[0]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1209[i + 0]) );
  }
  i1206.qualityLevels = i1208
  var i1211 = i1207[1]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( i1211[i + 0] );
  }
  i1206.names = i1210
  i1206.shadows = i1207[2]
  i1206.anisotropicFiltering = i1207[3]
  i1206.antiAliasing = i1207[4]
  i1206.lodBias = i1207[5]
  i1206.shadowCascades = i1207[6]
  i1206.shadowDistance = i1207[7]
  i1206.shadowmaskMode = i1207[8]
  i1206.shadowProjection = i1207[9]
  i1206.shadowResolution = i1207[10]
  i1206.softParticles = !!i1207[11]
  i1206.softVegetation = !!i1207[12]
  i1206.activeColorSpace = i1207[13]
  i1206.desiredColorSpace = i1207[14]
  i1206.masterTextureLimit = i1207[15]
  i1206.maxQueuedFrames = i1207[16]
  i1206.particleRaycastBudget = i1207[17]
  i1206.pixelLightCount = i1207[18]
  i1206.realtimeReflectionProbes = !!i1207[19]
  i1206.shadowCascade2Split = i1207[20]
  i1206.shadowCascade4Split = new pc.Vec3( i1207[21], i1207[22], i1207[23] )
  i1206.streamingMipmapsActive = !!i1207[24]
  i1206.vSyncCount = i1207[25]
  i1206.asyncUploadBufferSize = i1207[26]
  i1206.asyncUploadTimeSlice = i1207[27]
  i1206.billboardsFaceCameraPosition = !!i1207[28]
  i1206.shadowNearPlaneOffset = i1207[29]
  i1206.streamingMipmapsMemoryBudget = i1207[30]
  i1206.maximumLODLevel = i1207[31]
  i1206.streamingMipmapsAddAllCameras = !!i1207[32]
  i1206.streamingMipmapsMaxLevelReduction = i1207[33]
  i1206.streamingMipmapsRenderersPerFrame = i1207[34]
  i1206.resolutionScalingFixedDPIFactor = i1207[35]
  i1206.streamingMipmapsMaxFileIORequests = i1207[36]
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1217 = data
  i1216.weight = i1217[0]
  i1216.vertices = i1217[1]
  i1216.normals = i1217[2]
  i1216.tangents = i1217[3]
  return i1216
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1218 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1219 = data
  i1218.xPlacement = i1219[0]
  i1218.yPlacement = i1219[1]
  i1218.xAdvance = i1219[2]
  i1218.yAdvance = i1219[3]
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1223 = data
  i1222.mode = i1223[0]
  i1222.parameter = i1223[1]
  i1222.threshold = i1223[2]
  return i1222
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"playOnAwake":2,"loop":3,"time":4,"volume":5,"pitch":6,"enabled":7},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"shaderDefinedKeywords":2,"passes":3,"defaultParameterValues":4,"unityFallbackShader":5,"readDepth":7,"IsCreatedByShaderGraph":8},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"passType":0,"zTest":1,"zWrite":2,"culling":3,"blending":4,"alphaBlending":5,"colorWriteMask":6,"offsetUnits":7,"offsetFactor":8,"stencilRef":9,"stencilReadMask":10,"stencilWriteMask":11,"stencilOp":12,"stencilOpFront":13,"stencilOpBack":14,"tags":15,"passDefinedKeywords":16,"variants":17,"readDepth":18},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"keywords":0,"vertexProgram":1,"fragmentProgram":2,"readDepth":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"removeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[62],"63":[16],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[73],"80":[73],"81":[73],"82":[73],"83":[73],"84":[73],"85":[73],"86":[16],"87":[4],"88":[89],"90":[89],"34":[19],"41":[38,19],"91":[19],"92":[38,19],"93":[4],"94":[38,19],"95":[19],"96":[4,19],"31":[19,38],"97":[19],"98":[19],"99":[19],"37":[34],"39":[38,19],"100":[19],"36":[34],"101":[19],"102":[19],"103":[19],"104":[19],"105":[19],"106":[19],"107":[19],"40":[19],"108":[19],"32":[38,19],"109":[19],"110":[19],"111":[19],"112":[19],"33":[38,19],"113":[19],"114":[45],"115":[45],"46":[45],"116":[45],"117":[16],"118":[16]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","HopManager","UnityEngine.MeshRenderer","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.GameObject","UnityEngine.BoxCollider","StickManager","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Texture2D","TMPro.TMP_FontAsset","UnityEngine.Font","UnityEngine.Camera","UnityEngine.AudioListener","ViewPortHandler","UnityEngine.RectTransform","BackgroundFitCamera","UnityEngine.Light","UnityEngine.SpriteRenderer","UnityEngine.Sprite","GameManager","CountDown","UIManager","Database","UnityEngine.AudioSource","SoundManager","UnityEngine.AudioClip","TMPro.TextMeshProUGUI","UnityEngine.UI.RawImage","UnityEngine.UI.Text","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Mask","CutoutMaskUI","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.UI.Button","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.MeshCollider","UnityEngine.Cubemap","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","TMPro.TMP_Settings","UnityEngine.TextAsset","UnityEngine.AnimationClip","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextContainer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2020.3.22f1";

Deserializers.productName = "Color-Hoop-Playable-Ad";

Deserializers.lunaInitializationTime = "11/09/2021 03:46:29";

Deserializers.lunaVersion = "2.6.0";

Deserializers.lunaSHA = "2fd85ebf41b131525e1aba684005888c2a92b12a";

Deserializers.packagesInfo = "com.unity.collab-proxy: 1.13.5,com.unity.ide.rider: 2.0.7,com.unity.ide.visualstudio: 2.0.11,com.unity.ide.vscode: 1.2.4,com.unity.test-framework: 1.1.29,com.unity.textmeshpro: 3.0.6,com.unity.timeline: 1.4.8,com.unity.ugui: 1.0.0,uk.lunalabs.luna: file:D:/Luna/scripts,com.unity.modules.ai: 1.0.0,com.unity.modules.androidjni: 1.0.0,com.unity.modules.animation: 1.0.0,com.unity.modules.assetbundle: 1.0.0,com.unity.modules.audio: 1.0.0,com.unity.modules.cloth: 1.0.0,com.unity.modules.director: 1.0.0,com.unity.modules.imageconversion: 1.0.0,com.unity.modules.imgui: 1.0.0,com.unity.modules.jsonserialize: 1.0.0,com.unity.modules.particlesystem: 1.0.0,com.unity.modules.physics: 1.0.0,com.unity.modules.physics2d: 1.0.0,com.unity.modules.screencapture: 1.0.0,com.unity.modules.terrain: 1.0.0,com.unity.modules.terrainphysics: 1.0.0,com.unity.modules.tilemap: 1.0.0,com.unity.modules.ui: 1.0.0,com.unity.modules.uielements: 1.0.0,com.unity.modules.umbra: 1.0.0,com.unity.modules.unityanalytics: 1.0.0,com.unity.modules.unitywebrequest: 1.0.0,com.unity.modules.unitywebrequestassetbundle: 1.0.0,com.unity.modules.unitywebrequestaudio: 1.0.0,com.unity.modules.unitywebrequesttexture: 1.0.0,com.unity.modules.unitywebrequestwww: 1.0.0,com.unity.modules.vehicles: 1.0.0,com.unity.modules.video: 1.0.0,com.unity.modules.vr: 1.0.0,com.unity.modules.wind: 1.0.0,com.unity.modules.xr: 1.0.0";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.ColorHoopPlayableAd";

Deserializers.disableAntiAliasing = false;

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

