// Generated from main.composite — manual entity declarations
import { engine, type Entity } from '@dcl/sdk/ecs'
import {
  Transform,
  GltfContainer,
  Animator,
  MeshRenderer,
  MeshCollider,
  Material,
  VisibilityComponent,
  VideoPlayer
} from '@dcl/sdk/ecs'
import { Vector3, Quaternion } from '@dcl/sdk/math'

// Entities
export const podium: Entity = engine.addEntity()
export const videoScreen: Entity = engine.addEntity()
export const votingZone1: Entity = engine.addEntity()
export const votingZone2: Entity = engine.addEntity()
export const votingZone3: Entity = engine.addEntity()
export const votingZone4: Entity = engine.addEntity()
export const AdminTools: Entity = engine.addEntity()
export const votingDoor1: Entity = engine.addEntity()
export const votingDoor2: Entity = engine.addEntity()
export const votingDoor3: Entity = engine.addEntity()
export const votingDoor4: Entity = engine.addEntity()
export const auditoriumCamera: Entity = engine.addEntity()
export const stage: Entity = engine.addEntity()
export const stageWall: Entity = engine.addEntity()
export const logo: Entity = engine.addEntity()
export const bannerLogo: Entity = engine.addEntity()
export const bannerLogo2: Entity = engine.addEntity()
export const bannerBackground: Entity = engine.addEntity()
export const bannerBackground2: Entity = engine.addEntity()
export const accentColorStage: Entity = engine.addEntity()
export const accentColorStageBelowPodium: Entity = engine.addEntity()
export const attendeePanel: Entity = engine.addEntity()
export const interactable: Entity = engine.addEntity()
export const stageGltf: Entity = engine.addEntity()

// Components
Transform.create(podium, {
  position: Vector3.create(8, 0, 8),
  rotation: Quaternion.create(0, 0, 0, 1),
  scale: Vector3.create(1, 1, 1)
})
GltfContainer.create(podium, {
  src: 'assets/models/estrado.gltf',
  visibleMeshesCollisionMask: 3,
  invisibleMeshesCollisionMask: 3
})
Animator.create(podium, {
  states: [{ clip: 'estrado_pantallaAction', playing: true, weight: 1, speed: 1, loop: true, shouldReset: false }]
})

Transform.create(videoScreen, {
  position: Vector3.create(8, 3.65, 13.5),
  rotation: Quaternion.create(0, 0, 0),
  scale: Vector3.create(5.1, 2.78, 1)
})
VideoPlayer.create(videoScreen, {
  src: 'https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875',
  playing: true,
  loop: true
})
MeshRenderer.setPlane(videoScreen)
const videoTexture = Material.Texture.Video({ videoPlayerEntity: videoScreen })

// #4
Material.setBasicMaterial(videoScreen, {
  texture: videoTexture
})
Transform.create(votingZone1, {
  position: Vector3.create(8, 0, 8),
  rotation: Quaternion.create(0, 0, 0),
  scale: Vector3.create(1, 1, 1)
})
GltfContainer.create(votingZone1, {
  src: 'assets/models/voting_zone01.gltf',
  visibleMeshesCollisionMask: 1,
  invisibleMeshesCollisionMask: 3
})
Animator.create(votingZone1, {
  states: [
    {
      clip: 'votingzone01_close',
      playing: true, // Start playing
      loop: false,
      weight: 1,
      speed: 1,
      shouldReset: false
    },
    {
      clip: 'votingzone01_open',
      playing: false,
      loop: false,
      weight: 1,
      speed: 1,
      shouldReset: false
    }
  ]
})

Transform.create(AdminTools, {
  position: Vector3.create(-6.0484771728515625, 0, 15.279850006103516),
  rotation: Quaternion.create(0, 0, 0, 1),
  scale: Vector3.create(1, 1, 1)
})
GltfContainer.create(AdminTools, {
  src: 'assets/asset-packs/admin_tools.gltf',
  visibleMeshesCollisionMask: 1,
  invisibleMeshesCollisionMask: 1
})
Animator.create(AdminTools, { states: [] })
VisibilityComponent.create(AdminTools, { visible: false })

Transform.create(votingDoor3, {
  position: Vector3.create(8, 0, 8),
  rotation: Quaternion.create(0, 0, 0),
  scale: Vector3.create(1, 1, 1)
})
GltfContainer.create(votingDoor3, {
  src: 'assets/models/voting_door03.gltf',
  visibleMeshesCollisionMask: 3,
  invisibleMeshesCollisionMask: 3
})
Animator.create(votingDoor3, {
  states: [
    {
      clip: 'door03_close',
      playing: true,
      loop: false,
      weight: 1,
      speed: 1,
      shouldReset: false
    },
    {
      clip: 'door03_open',
      playing: false,
      loop: false,
      weight: 1,
      speed: 1,
      shouldReset: false
    }
  ]
})
Transform.create(votingDoor4, {
  position: Vector3.create(8, 0, 8),
  rotation: Quaternion.create(0, 0, 0),
  scale: Vector3.create(1, 1, 1)
})
GltfContainer.create(votingDoor4, {
  src: 'assets/models/voting_door04.gltf',
  visibleMeshesCollisionMask: 3,
  invisibleMeshesCollisionMask: 3
})
Animator.create(votingDoor4, {
  states: [
    {
      clip: 'door04_close',
      playing: true,
      loop: false,
      weight: 1,
      speed: 1,
      shouldReset: false
    },
    {
      clip: 'door04_open',
      playing: false,
      loop: false,
      weight: 1,
      speed: 1,
      shouldReset: false
    }
  ]
})

Transform.create(votingDoor1, {
  position: Vector3.create(8, 0, 8),
  rotation: Quaternion.fromEulerDegrees(0, 0, 0),
  scale: Vector3.create(1, 1, 1)
})
GltfContainer.create(votingDoor1, {
  src: 'assets/models/voting_door01.gltf',
  visibleMeshesCollisionMask: 3,
  invisibleMeshesCollisionMask: 3
})

Animator.create(votingDoor1, {
  states: [
    {
      clip: 'door01_close',
      playing: true,
      loop: false,
      weight: 1,
      speed: 1,
      shouldReset: false
    },
    {
      clip: 'door01_open',
      playing: false,
      loop: false,
      weight: 1,
      speed: 1,
      shouldReset: false
    }
  ]
})

Transform.create(auditoriumCamera, {
  position: Vector3.create(8, 6.5, 12.5),
  rotation: Quaternion.create(0.033829882740974426, 0.9238795042037964, -0.033829882740974426, 0.38084155321121216),
  scale: Vector3.create(1, 1, 1)
})
Animator.create(auditoriumCamera, { states: [] })

Transform.create(stage, {
  position: Vector3.create(8, 0, 13.25),
  rotation: Quaternion.create(0, 0, 0),
  scale: Vector3.create(1, 1, 1)
})
Animator.create(stage, { states: [] })

Transform.create(stageWall, {
  position: Vector3.create(8.25, -0.25, 11),
  rotation: Quaternion.create(0, 0, 0),
  scale: Vector3.create(1, 25, 1)
})
MeshCollider.setCylinder(stageWall, 0.5, 7)

Transform.create(attendeePanel, {
  position: Vector3.create(8, 0, 5),
  rotation: Quaternion.create(0, 0, 0),
  scale: Vector3.create(1, 1, 1)
})

Transform.create(bannerBackground, {
  position: Vector3.create(-4.42, 2.3, 0.22),
  rotation: Quaternion.fromEulerDegrees(0, 327.9, 0),
  scale: Vector3.create(1.5, 3.7, 1.5),
  parent: stage
})
MeshRenderer.setPlane(bannerBackground)
Material.setPbrMaterial(bannerBackground, {
  albedoColor: { r: 0, g: 0, b: 0, a: 1 },
  emissiveColor: { r: 0, g: 0, b: 0 },
  reflectivityColor: { r: 1, g: 1, b: 1 },
  transparencyMode: 4,
  metallic: 0.5,
  roughness: 0.5,
  specularIntensity: 1,
  emissiveIntensity: 0,
  directIntensity: 1
})

Transform.create(bannerLogo2, {
  position: Vector3.create(4.42, 2.3, 0.21),
  rotation: Quaternion.fromEulerDegrees(270, 33, 0),
  scale: Vector3.create(1.5, 0, 1.5),
  parent: stage
})
Animator.create(bannerLogo2, { states: [] })
MeshRenderer.setCylinder(bannerLogo2, 0.5, 0.5)

Transform.create(bannerLogo, {
  position: Vector3.create(-4.42, 2.3, 0.21),
  rotation: Quaternion.fromEulerDegrees(270, 327.9, 0),
  scale: Vector3.create(1.5, 0, 1.5),
  parent: stage
})

Animator.create(bannerLogo, { states: [] })
MeshRenderer.setCylinder(bannerLogo, 0.5, 0.5)
Material.setPbrMaterial(bannerLogo, {
  albedoColor: { r: 0, g: 0, b: 0, a: 1 },
  emissiveColor: { r: 0, g: 0, b: 0 },
  reflectivityColor: { r: 1, g: 1, b: 1 },
  transparencyMode: 4,
  metallic: 0.5,
  roughness: 0.5,
  specularIntensity: 1,
  emissiveIntensity: 0,
  directIntensity: 1
})

Transform.create(votingZone2, {
  position: Vector3.create(8, 0, 8),
  rotation: Quaternion.create(0, 0, 0),
  scale: Vector3.create(1, 1, 1)
})
GltfContainer.create(votingZone2, {
  src: 'assets/models/voting_zone02.gltf',
  visibleMeshesCollisionMask: 1,
  invisibleMeshesCollisionMask: 3
})
Animator.create(votingZone2, {
  states: [
    {
      clip: 'votingzone02_close',
      playing: true,
      loop: false,
      weight: 1,
      speed: 1,
      shouldReset: false
    },
    {
      clip: 'votingzone02_open',
      playing: false,
      loop: false,
      weight: 1,
      speed: 1,
      shouldReset: false
    }
  ]
})

Transform.create(votingDoor2, {
  position: Vector3.create(8, 0, 8),
  rotation: Quaternion.create(0, 0, 0),
  scale: Vector3.create(1, 1, 1)
})
GltfContainer.create(votingDoor2, {
  src: 'assets/models/voting_door02.gltf',
  visibleMeshesCollisionMask: 3,
  invisibleMeshesCollisionMask: 3
})
Animator.create(votingDoor2, {
  states: [
    {
      clip: 'door02_close',
      playing: true,
      loop: false,
      weight: 1,
      speed: 1,
      shouldReset: false
    },
    {
      clip: 'door02_open',
      playing: false,
      loop: false,
      weight: 1,
      speed: 1,
      shouldReset: false
    }
  ]
})

Transform.create(logo, {
  position: Vector3.create(0, 0.55, -2.5),
  rotation: Quaternion.fromEulerDegrees(0, 0, 0),
  scale: Vector3.create(2.2, 0.1, 2.2),
  parent: stage
})
MeshCollider.setCylinder(logo, 0.5, 0.5)
MeshRenderer.setCylinder(logo, 0.5, 0.5)

Transform.create(bannerBackground2, {
  position: Vector3.create(4.42, 2.3, 0.22),
  rotation: Quaternion.fromEulerDegrees(0, 33.08, 0),
  scale: Vector3.create(1.5, 3.7, 1.5),
  parent: stage
})
Animator.create(bannerBackground2, { states: [] })
MeshRenderer.setPlane(bannerBackground2)

Transform.create(accentColorStage, {
  position: Vector3.create(0, -2, -2.6),
  rotation: Quaternion.create(0, 0, 0),
  scale: Vector3.create(6, 5, 6),
  parent: stage
})
MeshRenderer.setCylinder(accentColorStage)
Transform.create(accentColorStageBelowPodium, {
  position: Vector3.create(0, 0.65, -4.75),
  rotation: Quaternion.create(0, 0, 0),
  scale: Vector3.create(1.32, 0.01, 1.3),
  parent: stage
})
Animator.create(accentColorStageBelowPodium, { states: [] })
MeshRenderer.setCylinder(accentColorStageBelowPodium)
Transform.create(votingZone3, {
  position: Vector3.create(8, 0, 8),
  rotation: Quaternion.create(0, 0, 0),
  scale: Vector3.create(1, 1, 1)
})
GltfContainer.create(votingZone3, {
  src: 'assets/models/voting_zone03.gltf',
  visibleMeshesCollisionMask: 1,
  invisibleMeshesCollisionMask: 3
})
Animator.create(votingZone3, {
  states: [
    {
      clip: 'votingzone03_close',
      playing: true,
      loop: false,
      weight: 1,
      speed: 1,
      shouldReset: false
    },
    {
      clip: 'votingzone03_open',
      playing: false,
      loop: false,
      weight: 1,
      speed: 1,
      shouldReset: false
    }
  ]
})

Transform.create(votingZone4, {
  position: Vector3.create(8, 0, 8),
  rotation: Quaternion.create(0, 0, 0),
  scale: Vector3.create(1, 1, 1)
})
GltfContainer.create(votingZone4, {
  src: 'assets/models/voting_zone04.gltf',
  visibleMeshesCollisionMask: 1,
  invisibleMeshesCollisionMask: 3
})
Animator.create(votingZone4, {
  states: [
    {
      clip: 'votingzone04_close',
      playing: true,
      loop: false,
      weight: 1,
      speed: 1,
      shouldReset: false
    },
    {
      clip: 'votingzone04_open',
      playing: false,
      loop: false,
      weight: 1,
      speed: 1,
      shouldReset: false
    }
  ]
})

Transform.create(interactable, {
  position: Vector3.create(0, -0.2, 4),
  rotation: Quaternion.create(0, 0, 0),
  scale: Vector3.create(1.5, 1.5, 1.5),
  parent: attendeePanel
})
Animator.create(interactable, {
  states: [
    {
      clip: 'attendee_panel_close',
      playing: true,
      loop: false,
      weight: 1,
      speed: 1,
      shouldReset: false
    },
    {
      clip: 'attendee_panel_open',
      playing: false,
      loop: false,
      weight: 1,
      speed: 1,
      shouldReset: false
    },
    {
      clip: 'attendee_panel_idle',
      playing: false,
      loop: true,
      weight: 1,
      speed: 1,
      shouldReset: false
    }
  ]
})
GltfContainer.create(interactable, {
  src: 'assets/models/attendee_panel.gltf',
  visibleMeshesCollisionMask: 3,
  invisibleMeshesCollisionMask: 3
})

Transform.create(stageGltf, {
  position: Vector3.create(8, 0, 8),
  rotation: Quaternion.create(0, 0, 0),
  scale: Vector3.create(1, 1, 1)
})
Animator.create(stageGltf, { states: [] })
GltfContainer.create(stageGltf, {
  src: 'assets/models/stage.gltf',
  visibleMeshesCollisionMask: 3,
  invisibleMeshesCollisionMask: 3
})

// eslint-disable-next-line @typescript-eslint/naming-convention
const __originalGetByName = engine.getEntityOrNullByName.bind(engine)
// eslint-disable-next-line @typescript-eslint/naming-convention
const __manualNames = new Map<string, Entity>()

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function registerEntityName(name: string, entity: Entity) {
  __manualNames.set(name, entity)
}

// Monkey-patch
;(engine as any).getEntityOrNullByName = (name: string): Entity | null => {
  const found = __originalGetByName(name)
  if (found !== null) return found
  return __manualNames.get(name) ?? null
}
// --- fin shim ---

registerEntityName('Podium', podium)
registerEntityName('Video Screen', videoScreen)
registerEntityName('VotingZone1', votingZone1)
registerEntityName('VotingZone2', votingZone2)
registerEntityName('VotingZone3', votingZone3)
registerEntityName('VotingZone4', votingZone4)
registerEntityName('Admin Tools', AdminTools)
registerEntityName('VotingDoor1', votingDoor1)
registerEntityName('VotingDoor2', votingDoor2)
registerEntityName('VotingDoor3', votingDoor3)
registerEntityName('VotingDoor4', votingDoor4)
registerEntityName('AuditoriumCamera', auditoriumCamera)
registerEntityName('Stage', stage)
registerEntityName('StageWall', stageWall)
registerEntityName('AttendeePanel', attendeePanel)

registerEntityName('Logo', logo)
registerEntityName('BannerLogo', bannerLogo)
registerEntityName('BannerLogo_2', bannerLogo2)

registerEntityName('BannerBackground', bannerBackground)
registerEntityName('BannerBackground_2', bannerBackground2)
registerEntityName('AccentColorStage', accentColorStage)
registerEntityName('AccentColorStage_BelowPodium', accentColorStageBelowPodium)

registerEntityName('Interactable', interactable)
registerEntityName('stage.gltf', stageGltf)
