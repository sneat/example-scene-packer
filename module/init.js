(() => {
  const adventureName = 'Example Scene Packer';
  const moduleName = 'example-scene-packer';

  /**
   * welcomeJournal (if set) will automatically be imported and opened after the first activation of a scene imported from the module compendium.
   * Set to the following to disable:
   *   const welcomeJournal = '';
   */
  const welcomeJournal = 'Introduction';
  /**
   * additionalJournals will automatically be imported.
   * Set to the following to disable:
   *   const additionalJournals = [];
   */
  const additionalJournals = ['Credits'];
  /**
   * additionalMacros will automatically be imported.
   * Set to the following to disable:
   *   const additionalMacros = [];
   */
  const additionalMacros = ['Example Macro'];
  /**
   * creaturePacks is a list of compendium packs to look in for Actors by name (in prioritised order).
   * The first entry here assumes that you have an Actor pack in your module with the "name" of "actors".
   * Set to the following to disable:
   *   const creaturePacks = [];
   */
  const creaturePacks = [`${moduleName}.actors`, 'dnd5e.monsters'];
  /**
   * journalPacks is a list of compendium packs to look in for Journals by name (in prioritised order).
   * The first entry here assumes that you have a Journal pack in your module with the "name" of "journals".
   * Set to the following to disable:
   *   const journalPacks = [];
   */
  const journalPacks = [`${moduleName}.journals`];
  /**
   * macroPacks is a list of compendium packs to look in for Macros by name (in prioritised order).
   * The first entry here assumes that you have a Macro pack in your module with the "name" of "macros".
   * Set to the following to disable:
   *   const macroPacks = [];
   */
  const macroPacks = [`${moduleName}.macros`];
  /**
   * playlistPacks is a list of compendium packs to look in for Playlists by name (in prioritised order).
   * The first entry here assumes that you have a Playlist pack in your module with the "name" of "playlists".
   * Set to the following to disable:
   *   const playlistPacks = [];
   */
  const playlistPacks = [`${moduleName}.playlists`];

  Hooks.once('scenePackerReady', ScenePacker => {
    // Initialise the Scene Packer with your adventure name and module name
    let packer = ScenePacker.Initialise({
      adventureName,
      moduleName,
      creaturePacks,
      journalPacks,
      macroPacks,
      playlistPacks,
      welcomeJournal,
      additionalJournals,
      additionalMacros,
      allowImportPrompts: true, // Set to false if you don't want the popup
    });
  });
})();
