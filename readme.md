# Example Scene Packer Use

This module is a showcase of the features supported by [Library: Scene Packer](https://github.com/League-of-Foundry-Developers/scene-packer). It can be used as a starting point if you are setting up your own adventure module or want to see what Scene Packer is capable of.

As an alternate starting point (that is blank and good for people new to Foundry VTT Modules), you can use https://github.com/sneat/starter-scene-packer

## Showcases

- Display a Journal Entry when the module is first installed.
- Display a Scene's linked Journal when that Scene is first unpacked.
- Scenes with Journal Pins are re-linked to their correct Journal.
  - Scene name: `Playlist`
  - The linked Journals are automatically imported if they are missing from the world.
- Tokens on a Scene are re-linked to their Actor.
  - Scene name: `Playlist`
  - Actors are automatically imported if they are missing from the world.
- Scenes with linked Playlists are automatically linked up after they are unpacked.
  - Scene name: `Playlist`
  - The Playlist is automatically imported if it is missing from the world.
- Quick Encounter Journal Pins launch the correct Journal and spawn linked Tokens
  - Scene name: `Quick Encounter`
  - Actors are automatically imported if they are missing from the world.
- Automatic Journal imports.
  - The journal "Credits" will be automatically imported to the world as per the definition in `module/init.js`.
- Automatic Macro imports.
  - The macro "Example Macro" will be automatically imported to the world as per the definition in `module/init.js`.
- Default Permissions
  - The Journal Entries "Limited", "Observer" and "Owner" will all maintain their default appropriate default permission on import.
  - The Macro "Example Macro" will import with a default permission of "Observer".


## Installation

Install the following module JSON on the Add-on Modules tab of your FoundryVTT setup.

https://github.com/sneat/example-scene-packer/releases/latest/download/module.json

