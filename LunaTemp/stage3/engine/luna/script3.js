function getLanguage(e){let n=navigator.language.toLowerCase();switch(n){case"zh-hk":case"zh-tw":return e.ChineseTraditional;case"zh-sg":case"zh-cn":return e.ChineseSimplified}switch(n=n.split("-")[0],n){case"af":return e.Afrikaans;case"ar":return e.Arabic;case"eu":return e.Basque;case"be":return e.Belarusian;case"bg":return e.Bulgarian;case"ca":return e.Catalan;case"zh":return e.Chinese;case"cs":return e.Czech;case"da":return e.Danish;case"nl":return e.Dutch;case"en":return e.English;case"et":return e.Estonian;case"fo":return e.Faroese;case"fi":return e.Finnish;case"fr":return e.French;case"de":return e.German;case"el":return e.Greek;case"he":return e.Hebrew;case"is":return e.Icelandic;case"id":return e.Indonesian;case"it":return e.Italian;case"ja":return e.Japanese;case"ko":return e.Korean;case"lv":return e.Latvian;case"lt":return e.Lithuanian;case"no":return e.Norwegian;case"pl":return e.Polish;case"pt":return e.Portuguese;case"ro":return e.Romanian;case"ru":return e.Russian;case"sh":return e.SerboCroatian;case"sk":return e.Slovak;case"sl":return e.Slovenian;case"es":return e.Spanish;case"sv":return e.Swedish;case"th":return e.Thai;case"tr":return e.Turkish;case"uk":return e.Ukrainian;case"vi":return e.Vietnamese;case"zn":return e.ChineseSimplified;case"hu":return e.Hungarian;default:return e.Unknown}}Luna.Unity.Playable.GetPreferredLanguage=function(){return navigator.language},Luna.Unity.Playable.GetPreferredLanguages=function(){return navigator.languages},UnityEngine.Application.systemLanguage=getLanguage(UnityEngine.SystemLanguage),UnityEngine.Mathf.Max=Math.max,UnityEngine.Mathf.Min=Math.min,pc.ScreenComponent.prototype.unityClass=UnityEngine.Canvas,pc.CanvasRendererComponent.prototype.unityClass=UnityEngine.CanvasRenderer,pc.CameraComponent.prototype.unityClass=UnityEngine.Camera,pc.LightComponent.prototype.unityClass=UnityEngine.Light,pc.AnimationComponent.prototype.unityClass=UnityEngine.Animation,pc.AnimatorComponent.prototype.unityClass=UnityEngine.Animator,pc.VideoPlayerComponent.prototype.unityClass=UnityEngine.Video.VideoPlayer,pc.ReflectionProbeComponent.prototype.unityClass=UnityEngine.ReflectionProbe,pc.ParticleSystemComponent.prototype.unityClass=UnityEngine.ParticleSystem,pc.ParticleSystemRendererComponent.prototype.unityClass=UnityEngine.ParticleSystemRenderer,pc.AudioSourceUnityComponent.prototype.unityClass=UnityEngine.AudioSource,pc.MeshFilterComponent.prototype.unityClass=UnityEngine.MeshFilter,pc.Rigidbody2DComponent.prototype.unityClass=UnityEngine.Rigidbody2D,pc.SpringJoint2DComponent.prototype.unityClass=UnityEngine.SpringJoint2D,pc.DistanceJoint2DComponent.prototype.unityClass=UnityEngine.DistanceJoint2D,pc.FixedJoint2DComponent.prototype.unityClass=UnityEngine.FixedJoint2D,pc.HingeJoint2DComponent.prototype.unityClass=UnityEngine.HingeJoint2D,pc.WheelJoint2DComponent.prototype.unityClass=UnityEngine.WheelJoint2D,pc.FrictionJoint2DComponent.prototype.unityClass=UnityEngine.FrictionJoint2D,pc.RelativeJoint2DComponent.prototype.unityClass=UnityEngine.RelativeJoint2D,pc.SliderJoint2DComponent.prototype.unityClass=UnityEngine.SliderJoint2D,pc.TargetJoint2DComponent.prototype.unityClass=UnityEngine.TargetJoint2D,pc.BoxCollider2DComponent.prototype.unityClass=UnityEngine.BoxCollider2D,pc.CircleCollider2DComponent.prototype.unityClass=UnityEngine.CircleCollider2D,pc.CapsuleCollider2DComponent.prototype.unityClass=UnityEngine.CapsuleCollider2D,pc.EdgeCollider2DComponent.prototype.unityClass=UnityEngine.EdgeCollider2D,pc.PolygonCollider2DComponent.prototype.unityClass=UnityEngine.PolygonCollider2D,pc.PlatformEffector2DComponent.prototype.unityClass=UnityEngine.PlatformEffector2D,pc.RigidbodyComponent.prototype.unityClass=UnityEngine.Rigidbody,pc.BoxColliderComponent.prototype.unityClass=UnityEngine.BoxCollider,pc.SphereColliderComponent.prototype.unityClass=UnityEngine.SphereCollider,pc.MeshColliderComponent.prototype.unityClass=UnityEngine.MeshCollider,pc.CapsuleColliderComponent.prototype.unityClass=UnityEngine.CapsuleCollider,pc.WheelColliderComponent.prototype.unityClass=UnityEngine.WheelCollider,pc.CharacterControllerComponent.prototype.unityClass=UnityEngine.CharacterController,Bridge.ready((()=>{if(!window.hasOwnProperty("Newtonsoft")||!Newtonsoft.hasOwnProperty("Json"))return;function e(e){this.raw=e}e.prototype.toString=function(){return JSON.stringify(this.raw)};const n=Newtonsoft.Json.JsonConvert.DeserializeObject;Newtonsoft.Json.JsonConvert.DeserializeObject=function(t,i,o,r,a,s){if(null===t)return null;if(Bridge.isArray(null,i)&&2===i.$rank){const e="string"==typeof t?JSON.parse(t):t,n=e.length,o=e[0].length;return System.Array.create(0,e,i.$elementType,[n,o])}return"object"==typeof t&&"System.Object"===i.$$fullname?new e(t):n.call(Newtonsoft.Json.JsonConvert,t,i,o,r,a,s)}})),function(){const e=function(e,n){return this.vector=e,this.offset=n,this};Object.defineProperty(e.prototype,"x",{set:function(e){this.vector.iset(0+this.offset,e)},get:function(){return this.vector.iget(0+this.offset)}}),Object.defineProperty(e.prototype,"y",{set:function(e){this.vector.iset(1+this.offset,e)},get:function(){return this.vector.iget(1+this.offset)}}),Object.defineProperty(UnityEngine.Camera.prototype,"orthographic size",{set:function(e){this.orthographicSize=e},get:function(){return this.orthographicSize}}),Object.defineProperty(UnityEngine.Object.prototype,"m_Enabled",{set:function(e){this.handle.enabled=e>0},get:function(){return this.handle.enabled},configurable:!0}),Object.defineProperty(UnityEngine.UI.RawImage.prototype,"m_Enabled",{set:function(e){this.handle.entity.element._image.enabled=e>0},get:function(){return this.handle.entity.element._image.enabled}}),Object.defineProperty(UnityEngine.UI.Image.prototype,"m_Enabled",{set:function(e){this.handle.entity.element._image.enabled=e>0},get:function(){return this.handle.entity.element._image.enabled}}),Object.defineProperty(UnityEngine.UI.Text.prototype,"m_Enabled",{set:function(e){this.handle.entity.element._text.enabled=e>0},get:function(){return this.handle.entity.element._text.enabled}}),Object.defineProperty(UnityEngine.GameObject.prototype,"m_IsActive",{set:function(e){this.SetActive(e>0)},get:function(){return this.handle._activeSelf}}),Object.defineProperty(UnityEngine.Transform.prototype,"m_LocalPosition",{get:function(){return this.handle.hijackLocalPosition()}}),Object.defineProperty(UnityEngine.Transform.prototype,"m_LocalScale",{get:function(){return this.handle.hijackLocalScale()}}),Object.defineProperty(UnityEngine.Transform.prototype,"localEulerAnglesRaw",{get:function(){return this.handle.hijackLocalEulerAngles()}}),Object.defineProperty(UnityEngine.Transform.prototype,"m_LocalRotation",{get:function(){return this.handle.hijackLocalRotation()}}),Object.defineProperty(UnityEngine.Light.prototype,"m_Intensity",{set:function(e){this.handle.intensity=e},get:function(){return this.handle.intensity}}),Object.defineProperty(UnityEngine.Light.prototype,"m_Color",{get:function(){return this.handle.light.dirtyColor=!0,this.handle.light._color}}),Object.defineProperty(UnityEngine.RectTransform.prototype,"m_AnchoredPosition",{get:function(){if(!this.handle.element._dirtyAnimatedAnchoredPosition){const e=this.handle.element._anchoredPosition;this.handle.element._anchoredPositionAnimated.set(e.x,e.y,e.z)}return this.handle.element._dirtyAnimatedAnchoredPosition=!0,this.handle.element._anchoredPositionAnimated}}),Object.defineProperty(UnityEngine.RectTransform.prototype,"m_LocalPosition",{get:function(){return this.handle.element._dirtyAnimatedLocalPosition||this.handle.element._localPositionAnimated.copy(this.handle.localPosition),this.handle.element._dirtyAnimatedLocalPosition=!0,this.handle.element._localPositionAnimated}}),Object.defineProperty(UnityEngine.RectTransform.prototype,"m_AnchorMin",{get:function(){return this.handle.element.dirtifyRect(),this._anchorMin=this._anchorMin||new e(this.handle.element._anchors,0),this._anchorMin}}),Object.defineProperty(UnityEngine.RectTransform.prototype,"m_AnchorMax",{get:function(){return this.handle.element.dirtifyRect(),this._anchorMax=this._anchorMax||new e(this.handle.element._anchors,2),this._anchorMax}}),Object.defineProperty(UnityEngine.RectTransform.prototype,"m_SizeDelta",{get:function(){return this.handle.element.dirtifyRect(),this.handle.element._sizeDelta}}),Object.defineProperty(UnityEngine.RectTransform.prototype,"m_Pivot",{get:function(){return this.handle.element.dirtifyRect(),this.handle.element._pivot}}),Object.defineProperty(UnityEngine.SpriteRenderer.prototype,"m_Size",{get:function(){return this.sizeDirty=!0,this._size}})}(),Luna.Unity.NativeShare.IsShareAvailable=!!navigator.share,Luna.Unity.NativeShare.Share=function(e,n,t){const i={title:e,text:n,url:t};navigator.share(i)};