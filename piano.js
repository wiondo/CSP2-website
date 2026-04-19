/*
 * Name: 이현동
 * Date: April 18, 2026
 * Section: IAB 6068
 *
 * This is the piano.js file for my piano and art website.
 * It plays piano sounds, changes the background gradient, and adds a note
 * history entry to the page when the user presses a key.
 */
"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * Sets up the keyboard event listener for the piano page.
   * @returns {void}
   */
  function init() {
    window.addEventListener("keydown", playNote);
  }

  /**
   * Plays the matching note sound, changes the background, and updates the
   * play history when the user presses a valid piano key.
   * @param {KeyboardEvent} event - The keyboard event triggered by the user.
   * @returns {void}
   */
  function playNote(event) {
    let key = event.key.toLowerCase();

    if (key === "a") {
      playSound("piano/FX_piano01.mp3");
      changeBackgroundGradient("#000000", "#BFBFBF");
      addNoteHistory("도 (a)");
    } else if (key === "s") {
      playSound("piano/FX_piano03.mp3");
      changeBackgroundGradient("#666666", "#E6E6E6");
      addNoteHistory("레 (s)");
    } else if (key === "d") {
      playSound("piano/FX_piano05.mp3");
      changeBackgroundGradient("#3333FF", "#E6E6FF");
      addNoteHistory("미 (d)");
    } else if (key === "f") {
      playSound("piano/FX_piano06.mp3");
      changeBackgroundGradient("#33FF33", "#E8FFE8");
      addNoteHistory("파 (f)");
    } else if (key === "g") {
      playSound("piano/FX_piano08.mp3");
      changeBackgroundGradient("#FFFF33", "#FFFFE5");
      addNoteHistory("솔 (g)");
    } else if (key === "h") {
      playSound("piano/FX_piano10.mp3");
      changeBackgroundGradient("#99FFFF", "#F0FFFF");
      addNoteHistory("라 (h)");
    } else if (key === "j") {
      playSound("piano/FX_piano12.mp3");
      changeBackgroundGradient("#FFCC99", "#FFF1E5");
      addNoteHistory("시 (j)");
    } else if (key === "k") {
      playSound("piano/C4.mp3");
      changeBackgroundGradient("#CC99FF", "#F3E8FF");
      addNoteHistory("높은 도 (k)");
    } else if (key === "l") {
      playSound("piano/D4.mp3");
      changeBackgroundGradient("#FF99CC", "#FFEAF3");
      addNoteHistory("높은 레 (l)");
    } else if (key === ";") {
      playSound("piano/E4.mp3");
      changeBackgroundGradient("#FFFFCC", "#FFFFF2");
      addNoteHistory("높은 미 (;)");
    }
  }

  /**
   * Plays an audio file for the selected note.
   * @param {string} audioPath - The relative path to the note audio file.
   * @returns {void}
   */
  function playSound(audioPath) {
    let sound = new Audio(audioPath);
    sound.play();
  }

  /**
   * Changes the page background to a top-to-bottom linear gradient.
   * @param {string} topColor - The top gradient color.
   * @param {string} bottomColor - The bottom gradient color.
   * @returns {void}
   */
  function changeBackgroundGradient(topColor, bottomColor) {
    let gradient = "linear-gradient(to bottom, " + topColor + ", " + bottomColor + ")";
    document.documentElement.style.background = gradient;
    document.body.style.background = gradient;
  }

  /**
   * Adds a new note entry to the play history using appendChild.
   * @param {string} noteName - The display name of the played note.
   * @returns {void}
   */
  function addNoteHistory(noteName) {
   let historyList = document.getElementById("history-list");

   if (historyList.children.length >= 10) {
    historyList.innerHTML = "";
   }

   let noteItem = document.createElement("p");
   noteItem.textContent = "Played note: " + noteName;
   historyList.appendChild(noteItem);
}

})();